import { useEffect, useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import {
  allPresets,
  doseUnitLabel,
  presetGroups,
  type DrugPreset,
} from "./presets";

export default function IvInfusionCalculator() {
  const [presetId, setPresetId] = useState(allPresets[0].id);
  const preset: DrugPreset =
    allPresets.find((p) => p.id === presetId) ?? allPresets[0];

  const [weight, setWeight] = useState<number | "">(70);
  const [bagAmount, setBagAmount] = useState<number | "">(preset.defaultBagAmount);
  const [volume, setVolume] = useState<number | "">(preset.defaultVolumeMl);
  const [dose, setDose] = useState<number | "">(preset.startDose);

  // Re-fill fields with the new drug's defaults whenever the preset changes.
  useEffect(() => {
    setBagAmount(preset.defaultBagAmount);
    setVolume(preset.defaultVolumeMl);
    setDose(preset.startDose);
  }, [preset]);

  const result = useMemo(() => {
    if (bagAmount === "" || volume === "" || dose === "" || volume === 0) return null;
    if (preset.weightBased && (weight === "" || weight === 0)) return null;

    const concentration =
      preset.bagAmountUnit === "mg" ? (bagAmount * 1000) / volume : bagAmount / volume;
    if (concentration <= 0) return null;

    const doseBase = preset.doseAmountUnit === "mg" ? dose * 1000 : dose;
    const doseBasePerMin = preset.doseTimeUnit === "hr" ? doseBase / 60 : doseBase;
    const totalPerMin = preset.weightBased ? doseBasePerMin * (weight as number) : doseBasePerMin;
    const rateMlPerHr = (totalPerMin * 60) / concentration;

    let tone: Tone = "good";
    if (dose < preset.rangeMin || dose > preset.rangeMax) tone = "warn";

    return { concentration, totalPerMin, rateMlPerHr, tone };
  }, [preset, weight, bagAmount, volume, dose]);

  const unitLabel = doseUnitLabel(preset);
  const concUnit = preset.bagAmountUnit === "mg" ? "mcg" : "units";

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
                  const active = p.id === presetId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPresetId(p.id)}
                      className={`rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                        active
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
        </div>
      </Section>

      <Section title={`2. ${preset.name} — ${preset.drugClass}`}>
        <p className="-mt-2 text-xs text-ink-muted">{preset.note}</p>

        {preset.weightBased && (
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
            label={`Amount in bag (${preset.bagAmountUnit})`}
            value={bagAmount}
            onChange={setBagAmount}
            step={preset.bagAmountUnit === "mg" ? 1 : 1}
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
          step={preset.rangeMax > 1 ? 0.5 : 0.01}
          hint={`Typical range: ${preset.rangeMin}–${preset.rangeMax} ${unitLabel}. Suggested starting dose: ${preset.startDose}.`}
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
              Total dose: {result.totalPerMin.toFixed(2)} {concUnit}/min
              {preset.weightBased ? " (whole patient)" : ""}
            </>
          }
          footnote={
            <>
              <strong className="text-ink">Titration:</strong> {preset.titration}
            </>
          }
        />
      )}
    </div>
  );
}
