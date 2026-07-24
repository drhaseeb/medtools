import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

type IndicationId = "vte_acs" | "acs_fibrinolytic" | "valve_other";

interface IndicationPreset {
  id: IndicationId;
  label: string;
  badge: string;
  bolusUnitsPerKg: number;
  bolusMaxUnits?: number;
  infusionUnitsPerKgHr: number;
  infusionMaxUnitsHr?: number;
  targetLabel: string;
  source: string;
}

const indications: IndicationPreset[] = [
  {
    id: "vte_acs",
    label: "VTE / ACS — standard-intensity",
    badge: "80 + 18",
    bolusUnitsPerKg: 80,
    infusionUnitsPerKgHr: 18,
    targetLabel: "aPTT ratio ~1.5–2.3× control",
    source: "Classic Raschke weight-based nomogram (Ann Intern Med. 1993;119(9):874-881)",
  },
  {
    id: "acs_fibrinolytic",
    label: "ACS + fibrinolytic — low-intensity, weight-capped",
    badge: "60 + 12",
    bolusUnitsPerKg: 60,
    bolusMaxUnits: 4000,
    infusionUnitsPerKgHr: 12,
    infusionMaxUnitsHr: 1000,
    targetLabel: "aPTT ratio ~1.5–2.0× control",
    source: "ACC/AHA STEMI guideline adjunctive-anticoagulation regimen",
  },
  {
    id: "valve_other",
    label: "Mechanical valve / other high-intensity",
    badge: "80 + 18",
    bolusUnitsPerKg: 80,
    infusionUnitsPerKgHr: 18,
    targetLabel: "aPTT ratio ~2.0× control (range ~1.5–2.5× reported)",
    source: "2020 ACC/AHA/SCAI valvular heart disease guideline",
  },
];

interface TitrationBand {
  value: string;
  label: string;
  badge: string;
  bolusUnitsPerKg: number;
  holdMinutes: number;
  rateChangeUnitsPerKgHr: number;
  tone: Tone;
  action: string;
}

// Classic Raschke weight-based nomogram titration table, expressed as a
// ratio to the laboratory's control aPTT (portable across reagents/labs).
// Source: Raschke RA et al. Ann Intern Med. 1993;119(9):874-881, as widely
// reproduced in hospital weight-based heparin protocols.
const titrationBands: TitrationBand[] = [
  {
    value: "very_low",
    label: "<1.2× control — markedly subtherapeutic",
    badge: "<1.2×",
    bolusUnitsPerKg: 80,
    holdMinutes: 0,
    rateChangeUnitsPerKgHr: 4,
    tone: "bad",
    action: "Re-bolus and increase the rate — anticoagulation is well below target.",
  },
  {
    value: "low",
    label: "1.2–1.5× control — subtherapeutic",
    badge: "1.2–1.5×",
    bolusUnitsPerKg: 40,
    holdMinutes: 0,
    rateChangeUnitsPerKgHr: 2,
    tone: "warn",
    action: "Small re-bolus and increase the rate.",
  },
  {
    value: "therapeutic",
    label: "1.5–2.3× control — therapeutic",
    badge: "1.5–2.3×",
    bolusUnitsPerKg: 0,
    holdMinutes: 0,
    rateChangeUnitsPerKgHr: 0,
    tone: "good",
    action: "No change. Recheck aPTT per protocol (typically every 24 hours once stable).",
  },
  {
    value: "high",
    label: "2.3–3.0× control — supratherapeutic",
    badge: "2.3–3.0×",
    bolusUnitsPerKg: 0,
    holdMinutes: 0,
    rateChangeUnitsPerKgHr: -2,
    tone: "warn",
    action: "Decrease the rate. No hold required at this level in the classic nomogram.",
  },
  {
    value: "very_high",
    label: ">3.0× control — markedly supratherapeutic",
    badge: ">3.0×",
    bolusUnitsPerKg: 0,
    holdMinutes: 60,
    rateChangeUnitsPerKgHr: -3,
    tone: "bad",
    action: "Hold the infusion, then decrease the rate before restarting — bleeding risk is elevated.",
  },
];

export default function HeparinInfusionCalculator() {
  const [weight, setWeight] = useState<number | "">(70);
  const [indicationId, setIndicationId] = useState<IndicationId>("vte_acs");
  const indication = indications.find((i) => i.id === indicationId) ?? indications[0];

  const [bagAmount, setBagAmount] = useState<number | "">(25000);
  const [volume, setVolume] = useState<number | "">(250);

  const [currentRate, setCurrentRate] = useState<number | "">(12.6);
  const [bandValue, setBandValue] = useState<string>("therapeutic");
  const band = titrationBands.find((b) => b.value === bandValue) ?? titrationBands[2];

  const dosing = useMemo(() => {
    if (weight === "" || weight <= 0 || bagAmount === "" || volume === "" || volume === 0) {
      return null;
    }
    const concentration = bagAmount / volume; // units/mL

    const bolusRaw = weight * indication.bolusUnitsPerKg;
    const bolusCapped = indication.bolusMaxUnits !== undefined && bolusRaw > indication.bolusMaxUnits;
    const bolusUnits = bolusCapped ? indication.bolusMaxUnits! : bolusRaw;
    const bolusMl = bolusUnits / concentration;

    const infusionRaw = weight * indication.infusionUnitsPerKgHr;
    const infusionCapped =
      indication.infusionMaxUnitsHr !== undefined && infusionRaw > indication.infusionMaxUnitsHr;
    const infusionUnitsHr = infusionCapped ? indication.infusionMaxUnitsHr! : infusionRaw;
    const initialRateMlHr = infusionUnitsHr / concentration;

    return {
      concentration,
      bolusUnits,
      bolusMl,
      bolusCapped,
      infusionUnitsHr,
      initialRateMlHr,
      infusionCapped,
    };
  }, [weight, bagAmount, volume, indication]);

  const titration = useMemo(() => {
    if (!dosing || weight === "" || weight <= 0) return null;
    const bolusUnits = band.bolusUnitsPerKg * (weight as number);
    const bolusMl = bolusUnits > 0 ? bolusUnits / dosing.concentration : 0;
    const rateChangeUnitsHr = band.rateChangeUnitsPerKgHr * (weight as number);
    const rateChangeMl = rateChangeUnitsHr / dosing.concentration;
    const current = currentRate === "" ? dosing.initialRateMlHr : currentRate;
    const newRate = Math.max(0, current + rateChangeMl);
    return { bolusUnits, bolusMl, rateChangeMl, newRate };
  }, [band, dosing, weight, currentRate]);

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-3 rounded-xl border border-warn/30 bg-warn-soft px-4 py-3">
        <p className="text-xs font-medium leading-relaxed text-warn">
          <strong>Heparin nomograms are not standardized nationally.</strong>{" "}
          Bolus doses, infusion rates, target aPTT ranges, and titration
          increments vary meaningfully between institutions, and between
          aPTT-based and anti-Xa-based protocols at the same institution.
          Always confirm every number below — indication, target range, and
          titration step — against your institution's current written
          protocol before administering or adjusting heparin.
        </p>
      </div>

      <Section title="1. Patient and indication">
        <NumberField
          label="Patient weight (actual body weight)"
          value={weight}
          onChange={setWeight}
          suffix="kg"
          step={0.5}
          min={1}
        />
        <OptionListField
          label="Indication"
          options={indications.map((i) => ({ value: i.id, label: i.label, badge: i.badge }))}
          value={indicationId}
          onChange={(v) => setIndicationId(v as IndicationId)}
        />
        <p className="-mt-2 text-xs text-ink-muted">
          Target: {indication.targetLabel}. Source: {indication.source}. Badge
          shows bolus (units/kg) + infusion (units/kg/hr).
        </p>
      </Section>

      <Section title="2. Heparin bag concentration">
        <div className="grid grid-cols-2 gap-3">
          <NumberField
            label="Amount in bag (units)"
            value={bagAmount}
            onChange={setBagAmount}
            step={1000}
          />
          <NumberField label="Bag volume (mL)" value={volume} onChange={setVolume} step={10} />
        </div>
        <p className="-mt-4 text-xs text-ink-muted">
          Default reflects a commonly used premix (25,000 units in 250 mL =
          100 units/mL). Edit to match your institution's actual bag label —
          concentrations vary by pharmacy.
        </p>
      </Section>

      {dosing === null ? (
        <ResultPanel
          tone="accent"
          eyebrow="Bolus & Initial Rate"
          value="—"
          description="Enter weight and bag concentration to calculate."
        />
      ) : (
        <ResultPanel
          tone={dosing.bolusCapped || dosing.infusionCapped ? "warn" : "good"}
          eyebrow="Bolus & Initial Infusion Rate"
          value={dosing.initialRateMlHr.toFixed(1)}
          valueSuffix="mL/hr"
          description={
            dosing.bolusCapped || dosing.infusionCapped
              ? "Weight-based dose exceeded this indication's cap — capped value shown below."
              : `Concentration: ${dosing.concentration.toFixed(1)} units/mL`
          }
          breakdown={
            <>
              Bolus: {dosing.bolusUnits.toFixed(0)} units ({dosing.bolusMl.toFixed(1)} mL){" "}
              {dosing.bolusCapped ? `— capped at ${indication.bolusMaxUnits} units` : ""}
              <br />
              Infusion: {dosing.infusionUnitsHr.toFixed(0)} units/hr (
              {dosing.initialRateMlHr.toFixed(1)} mL/hr){" "}
              {dosing.infusionCapped ? `— capped at ${indication.infusionMaxUnitsHr} units/hr` : ""}
            </>
          }
          footnote={
            <>
              <strong className="text-ink">Monitoring:</strong> check aPTT ~6
              hours after the bolus and after any rate change; once two
              consecutive results are therapeutic, aPTT is typically checked
              every 24 hours (confirm interval against local protocol).
            </>
          }
        />
      )}

      <Section title="3. aPTT-guided titration">
        <NumberField
          label="Current infusion rate"
          value={currentRate}
          onChange={setCurrentRate}
          suffix="mL/hr"
          step={0.1}
          hint="Defaults to the calculated initial rate above — edit to reflect the rate the patient is actually running on."
        />
        <OptionListField
          label="Current aPTT (as a ratio to control)"
          options={titrationBands.map((b) => ({ value: b.value, label: b.label, badge: b.badge }))}
          value={bandValue}
          onChange={setBandValue}
        />
      </Section>

      {titration && (
        <ResultPanel
          tone={band.tone}
          eyebrow="Recommended Action"
          value={titration.newRate.toFixed(1)}
          valueSuffix="mL/hr"
          description={band.action}
          breakdown={
            <>
              {titration.bolusUnits > 0 && (
                <>
                  Bolus: {titration.bolusUnits.toFixed(0)} units (
                  {titration.bolusMl.toFixed(1)} mL)
                  <br />
                </>
              )}
              {band.holdMinutes > 0 && (
                <>
                  Hold infusion for {band.holdMinutes} minutes, then restart at
                  the new rate.
                  <br />
                </>
              )}
              Rate change: {titration.rateChangeMl >= 0 ? "+" : ""}
              {titration.rateChangeMl.toFixed(1)} mL/hr → new rate{" "}
              {titration.newRate.toFixed(1)} mL/hr
            </>
          }
          footnote={
            <>
              <strong className="text-ink">Band boundaries shown here reproduce the
              classic Raschke nomogram</strong> (target ~1.5–2.3× control). If
              your indication or local protocol targets a different range —
              e.g. the lower-intensity post-fibrinolytic band, or a
              higher-intensity valve target — the same ratio labels above may
              correspond to different clinical actions in your protocol. When
              in doubt, follow your institution's written nomogram, not this
              tool.
            </>
          }
        />
      )}
    </div>
  );
}
