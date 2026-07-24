import { useEffect, useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { SegmentedField } from "@/kit/SegmentedField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import {
  allPresets,
  doseUnitLabel,
  presetGroups,
  type AmountUnit,
  type DrugPreset,
  type TimeUnit,
} from "./presets";

const CUSTOM_ID = "custom";

export default function IvInfusionCalculator() {
  const [presetId, setPresetId] = useState<string>(allPresets[0].id);
  const isCustom = presetId === CUSTOM_ID;
  const matchedPreset = allPresets.find((p) => p.id === presetId);

  // Custom/manual-entry mode settings (only relevant when isCustom).
  const [customName, setCustomName] = useState("");
  const [customWeightBased, setCustomWeightBased] = useState(true);
  const [customDoseAmountUnit, setCustomDoseAmountUnit] = useState<AmountUnit>("mcg");
  const [customDoseTimeUnit, setCustomDoseTimeUnit] = useState<TimeUnit>("min");
  const [customBagAmountUnit, setCustomBagAmountUnit] = useState<AmountUnit>("mg");

  const active: DrugPreset = isCustom
    ? {
        id: CUSTOM_ID,
        name: customName.trim() || "Custom drug",
        drugClass: "Manual entry — no reference range available",
        weightBased: customWeightBased,
        doseAmountUnit: customDoseAmountUnit,
        doseTimeUnit: customDoseTimeUnit,
        bagAmountUnit: customBagAmountUnit,
        defaultBagAmount: 1,
        defaultVolumeMl: 100,
        rangeMin: 0,
        rangeMax: Number.POSITIVE_INFINITY,
        startDose: 0,
        note: "You've entered your own concentration and dose — there's no preloaded reference range or titration guidance for a custom entry, so double-check the result against a drug reference or pharmacy before administering.",
        titration: "No preset titration guidance available for a custom entry — titrate per your institution's protocol for this specific drug.",
      }
    : (matchedPreset ?? allPresets[0]);

  const [weight, setWeight] = useState<number | "">(70);
  const [bagAmount, setBagAmount] = useState<number | "">(active.defaultBagAmount);
  const [volume, setVolume] = useState<number | "">(active.defaultVolumeMl);
  const [dose, setDose] = useState<number | "">(active.startDose || "");

  // Re-fill fields with the new drug's defaults whenever the selection
  // changes — keyed on presetId (not the `active` object, which is rebuilt
  // fresh every render in custom mode and would otherwise re-trigger this
  // on every keystroke).
  useEffect(() => {
    const next = isCustom
      ? { defaultBagAmount: 1, defaultVolumeMl: 100, startDose: 1 }
      : (allPresets.find((p) => p.id === presetId) ?? allPresets[0]);
    setBagAmount(next.defaultBagAmount);
    setVolume(next.defaultVolumeMl);
    setDose(next.startDose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetId]);

  // "units" (e.g. insulin, heparin, vasopressin) and mass (mcg/mg) are
  // different physical quantities that can't be mixed within one drug —
  // keep the bag unit in the same category as the dose unit so a dose
  // entered in mcg can never be divided by a bag concentration in units
  // (or vice versa), which would silently produce a meaningless rate.
  useEffect(() => {
    if (!isCustom) return;
    if (customDoseAmountUnit === "units" && customBagAmountUnit !== "units") {
      setCustomBagAmountUnit("units");
    } else if (customDoseAmountUnit !== "units" && customBagAmountUnit === "units") {
      setCustomBagAmountUnit("mg");
    }
  }, [isCustom, customDoseAmountUnit, customBagAmountUnit]);

  const result = useMemo(() => {
    if (bagAmount === "" || volume === "" || dose === "" || volume === 0) return null;
    if (active.weightBased && (weight === "" || weight === 0)) return null;

    const toBase = (amount: number, unit: AmountUnit) =>
      unit === "mg" ? amount * 1000 : amount;

    const concentration = toBase(bagAmount, active.bagAmountUnit) / volume;
    if (concentration <= 0) return null;

    const doseBase = toBase(dose, active.doseAmountUnit);
    const doseBasePerMin = active.doseTimeUnit === "hr" ? doseBase / 60 : doseBase;
    const totalPerMin = active.weightBased ? doseBasePerMin * (weight as number) : doseBasePerMin;
    const rateMlPerHr = (totalPerMin * 60) / concentration;

    let tone: Tone = isCustom ? "accent" : "good";
    if (!isCustom && (dose < active.rangeMin || dose > active.rangeMax)) tone = "warn";

    return { concentration, totalPerMin, rateMlPerHr, tone };
  }, [active, isCustom, weight, bagAmount, volume, dose]);

  const unitLabel = doseUnitLabel(active);
  const concUnit = active.bagAmountUnit === "units" ? "units" : "mcg";
  const doseBaseUnit = active.doseAmountUnit === "units" ? "units" : "mcg";

  return (
    <div className="space-y-8">
      <Section title="1. Select drug">
        <div className="space-y-5">
          {presetGroups.map((g) => (
            <div key={g.label}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-muted">
                {g.label}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {g.presets.map((p) => {
                  const isActive = p.id === presetId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPresetId(p.id)}
                      className={`rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                        isActive
                          ? "border-accent bg-accent-soft text-accent"
                          : "border-line text-ink hover:border-accent/40"
                      }`}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Not Listed
            </p>
            <button
              type="button"
              onClick={() => setPresetId(CUSTOM_ID)}
              className={`w-full rounded-xl border border-dashed px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                isCustom
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-ink-muted hover:border-accent/40"
              }`}
            >
              + Custom drug (manual entry)
            </button>
          </div>
        </div>
      </Section>

      <Section title={isCustom ? "2. Custom drug" : `2. ${active.name} — ${active.drugClass}`}>
        {isCustom ? (
          <>
            <p className="-mt-2 text-xs text-ink-muted">{active.note}</p>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Drug name (optional, for your reference)
              </label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="e.g. Amiodarone"
                className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              />
            </div>

            <SegmentedField<"weight" | "fixed">
              label="Dosing basis"
              options={[
                { value: "weight", label: "Weight-based" },
                { value: "fixed", label: "Fixed rate" },
              ]}
              value={customWeightBased ? "weight" : "fixed"}
              onChange={(v) => setCustomWeightBased(v === "weight")}
            />

            <div className="grid grid-cols-2 gap-3">
              <SegmentedField<AmountUnit>
                label="Dose amount unit"
                options={[
                  { value: "mcg", label: "mcg" },
                  { value: "mg", label: "mg" },
                  { value: "units", label: "units" },
                ]}
                value={customDoseAmountUnit}
                onChange={setCustomDoseAmountUnit}
              />
              <SegmentedField<TimeUnit>
                label="Dose time unit"
                options={[
                  { value: "min", label: "per min" },
                  { value: "hr", label: "per hr" },
                ]}
                value={customDoseTimeUnit}
                onChange={setCustomDoseTimeUnit}
              />
            </div>

            <SegmentedField<AmountUnit>
              label="Bag amount unit"
              options={
                customDoseAmountUnit === "units"
                  ? [{ value: "units", label: "units" }]
                  : [
                      { value: "mcg", label: "mcg" },
                      { value: "mg", label: "mg" },
                    ]
              }
              value={customBagAmountUnit}
              onChange={setCustomBagAmountUnit}
            />
            {customDoseAmountUnit === "units" && (
              <p className="-mt-4 text-xs text-ink-muted">
                Dose and bag are both in "units" — mass units (mcg/mg) aren't available since they can't be mixed with a unit-based dose.
              </p>
            )}
          </>
        ) : (
          <p className="-mt-2 text-xs text-ink-muted">{active.note}</p>
        )}

        {active.weightBased && (
          <NumberField
            label="Patient weight"
            value={weight}
            onChange={setWeight}
            suffix="kg"
            step={0.5}
            min={1}
          />
        )}

        <div className="grid grid-cols-2 gap-3">
          <NumberField
            label={`Amount in bag (${active.bagAmountUnit})`}
            value={bagAmount}
            onChange={setBagAmount}
            step={active.bagAmountUnit === "units" ? 100 : 1}
          />
          <NumberField
            label="Bag volume (mL)"
            value={volume}
            onChange={setVolume}
            step={10}
          />
        </div>
        <p className="-mt-4 text-xs text-ink-muted">
          Edit these to match your institution's actual premixed bag — concentrations vary by pharmacy.
        </p>

        <NumberField
          label={`Desired dose (${unitLabel})`}
          value={dose}
          onChange={setDose}
          step={!isCustom && active.rangeMax > 1 ? 0.5 : 0.01}
          hint={
            isCustom
              ? "No reference range available for a custom entry — confirm your dose independently."
              : `Typical range: ${active.rangeMin}–${active.rangeMax} ${unitLabel}. Suggested starting dose: ${active.startDose}.`
          }
        />
      </Section>

      {result === null ? (
        <ResultPanel
          tone="accent"
          eyebrow="Infusion Rate"
          value="—"
          description="Enter weight (if required), bag concentration, and dose to calculate."
        />
      ) : (
        <ResultPanel
          tone={result.tone}
          eyebrow="Set Pump To"
          value={result.rateMlPerHr.toFixed(1)}
          valueSuffix="mL/hr"
          description={
            result.tone === "warn"
              ? "Dose entered is outside the typical range shown above — double-check before administering."
              : `Concentration: ${result.concentration.toFixed(1)} ${concUnit}/mL`
          }
          breakdown={
            <>
              Concentration: {result.concentration.toFixed(1)} {concUnit}/mL
              <br />
              Total dose: {result.totalPerMin.toFixed(2)} {doseBaseUnit}/min
              {active.weightBased ? " (whole patient)" : ""}
            </>
          }
          footnote={
            <>
              <strong className="text-ink">
                {isCustom ? "Note:" : "Titration:"}
              </strong>{" "}
              {active.titration}
            </>
          }
        />
      )}
    </div>
  );
}
