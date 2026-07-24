import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

type Sex = "male" | "female";
type CreatUnit = "mgdl" | "umol";
type HeightUnit = "cm" | "in";

const LOADING_MG_PER_KG = 25; // 20–25 mg/kg per 2020 ASHP/IDSA/PIDS/SIDP consensus guideline
const LOADING_MAX_MG = 3000; // commonly cited practical ceiling for a single loading dose
const MAINT_LOW_MG_PER_KG = 15;
const MAINT_HIGH_MG_PER_KG = 20;
const MAINT_MAX_DAILY_MG = 4500; // conservative empiric daily ceiling pending levels

function round250(mg: number) {
  return Math.round(mg / 250) * 250;
}

export default function VancomycinDosingCalculator() {
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState<number | "">("");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [creatUnit, setCreatUnit] = useState<CreatUnit>("mgdl");
  const [creat, setCreat] = useState<number | "">("");
  const [onHD, setOnHD] = useState(false);

  const result = useMemo(() => {
    if (age === "" || height === "" || weight === "" || creat === "") return null;
    if (age < 18) return { invalid: "age" as const };
    if (weight <= 0 || height <= 0) return { invalid: "input" as const };

    const scrMgDl = creatUnit === "umol" ? creat / 88.42 : creat;
    if (scrMgDl <= 0) return { invalid: "input" as const };

    const heightIn = heightUnit === "cm" ? height / 2.54 : height;
    const inchesOver5ft = Math.max(heightIn - 60, 0);
    const ibw = sex === "male" ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft;

    // Dosing weight for the Cockcroft-Gault equation (MDCalc/common nephrology convention):
    // use actual body weight if it is at or below IBW; use actual body weight if only
    // mildly above IBW; switch to adjusted body weight once actual weight exceeds IBW by
    // more than ~30%, so morbid obesity does not inflate the estimated CrCl.
    let crClWeight = weight;
    let weightBasis: "actual" | "ideal-range" | "adjusted" = "ideal-range";
    if (weight <= ibw) {
      crClWeight = weight;
      weightBasis = "actual";
    } else if (weight > ibw * 1.3) {
      crClWeight = ibw + 0.4 * (weight - ibw);
      weightBasis = "adjusted";
    } else {
      crClWeight = weight;
      weightBasis = "ideal-range";
    }

    const crClRaw =
      ((140 - age) * crClWeight) / (72 * scrMgDl) * (sex === "female" ? 0.85 : 1);
    const crCl = Math.max(crClRaw, 0);

    // Loading dose: actual body weight, one-time, not renally adjusted (given before
    // steady state is reached — its purpose is to rapidly reach a therapeutic concentration).
    const loadingRaw = LOADING_MG_PER_KG * weight;
    const loadingDose = round250(Math.min(loadingRaw, LOADING_MAX_MG));
    const loadingCapped = loadingRaw > LOADING_MAX_MG;

    const maintLowRaw = MAINT_LOW_MG_PER_KG * weight;
    const maintHighRaw = MAINT_HIGH_MG_PER_KG * weight;

    let tone: Tone;
    let renalBand: string;
    let interval: string | null;
    let maintLow: number | null = round250(maintLowRaw);
    let maintHigh: number | null = round250(maintHighRaw);
    let specialistFlag = false;

    if (onHD) {
      tone = "bad";
      renalBand = "Hemodialysis";
      interval = null;
      maintLow = null;
      maintHigh = null;
      specialistFlag = true;
    } else if (crCl < 20) {
      tone = "bad";
      renalBand = "Severe renal impairment (CrCl <20 mL/min)";
      interval = null;
      maintLow = null;
      maintHigh = null;
      specialistFlag = true;
    } else if (crCl < 50) {
      tone = "warn";
      renalBand = "Moderately reduced renal function";
      interval = "q24h";
    } else if (crCl < 90) {
      tone = "good";
      renalBand = "Normal-to-mildly-reduced renal function";
      interval = "q12h";
    } else {
      tone = "good";
      renalBand = "Normal / augmented renal clearance";
      interval = "q8–12h";
    }

    const dailyCapHit =
      maintHigh !== null &&
      interval !== null &&
      (() => {
        const dosesPerDay = interval === "q8–12h" ? 2 : interval === "q12h" ? 2 : interval === "q24h" ? 1 : 1;
        return maintHigh * dosesPerDay > MAINT_MAX_DAILY_MG;
      })();

    return {
      invalid: null,
      crCl,
      weightBasis,
      ibw,
      loadingDose,
      loadingCapped,
      maintLow,
      maintHigh,
      interval,
      renalBand,
      tone,
      specialistFlag,
      dailyCapHit,
    };
  }, [sex, age, height, heightUnit, weight, creat, creatUnit, onHD]);

  return (
    <div className="space-y-8">
      <Section title="Patient">
        <SegmentedField<Sex>
          label="Sex Assigned at Birth"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          value={sex}
          onChange={setSex}
        />
        <NumberField
          label="Age (years)"
          value={age}
          onChange={setAge}
          placeholder="e.g. 58"
          min={18}
          max={110}
        />
        <div className="flex gap-2">
          <div className="flex-1">
            <NumberField
              label="Height"
              value={height}
              onChange={setHeight}
              placeholder="e.g. 170"
              step={0.1}
            />
          </div>
          <div className="w-32 pt-6">
            <SegmentedField<HeightUnit>
              options={[
                { value: "cm", label: "cm" },
                { value: "in", label: "inches" },
              ]}
              value={heightUnit}
              onChange={setHeightUnit}
            />
          </div>
        </div>
        <NumberField
          label="Actual Body Weight (kg)"
          value={weight}
          onChange={setWeight}
          placeholder="e.g. 82"
          step={0.5}
          hint="Loading and maintenance doses are calculated from actual body weight, per current practice."
        />
      </Section>

      <Section title="Renal Function">
        <div className="flex gap-2">
          <div className="flex-1">
            <NumberField
              label="Serum Creatinine"
              value={creat}
              onChange={setCreat}
              placeholder="Enter value"
              step={0.01}
              hint="Normal: 0.6–1.2 mg/dL (men); 0.5–1.1 mg/dL (women)"
            />
          </div>
          <div className="w-36 pt-6">
            <SegmentedField<CreatUnit>
              options={[
                { value: "mgdl", label: "mg/dL" },
                { value: "umol", label: "µmol/L" },
              ]}
              value={creatUnit}
              onChange={setCreatUnit}
            />
          </div>
        </div>
        <CheckboxRow
          label="Patient is on intermittent hemodialysis"
          checked={onHD}
          onChange={setOnHD}
        />
      </Section>

      {result === null ? (
        <ResultPanel
          tone="accent"
          eyebrow="Vancomycin Dosing"
          value="—"
          description="Enter all patient details to calculate."
        />
      ) : result.invalid === "age" ? (
        <ResultPanel
          tone="warn"
          eyebrow="Vancomycin Dosing"
          value="—"
          description="This calculator (Cockcroft-Gault based) is validated for adults (≥18 years) only."
        />
      ) : result.invalid === "input" ? (
        <ResultPanel
          tone="warn"
          eyebrow="Vancomycin Dosing"
          value="—"
          description="Check that height, weight, and serum creatinine are all greater than zero."
        />
      ) : (
        <>
          <ResultPanel
            tone="accent"
            eyebrow="Estimated Creatinine Clearance (Cockcroft-Gault)"
            value={result.crCl.toFixed(0)}
            valueSuffix="mL/min"
            description={result.renalBand}
            breakdown={
              <>
                IBW (Devine): {result.ibw.toFixed(1)} kg — dosing weight used in CrCl
                equation: {result.weightBasis === "actual" ? "actual body weight" : result.weightBasis === "adjusted" ? "adjusted body weight" : "actual body weight (within ideal range)"}
              </>
            }
          />

          <ResultPanel
            tone="accent"
            eyebrow="Loading Dose (one-time)"
            value={result.loadingDose}
            valueSuffix="mg IV"
            description="25 mg/kg actual body weight (range 20–25 mg/kg), not renally adjusted"
            footnote={
              result.loadingCapped
                ? "Calculated dose exceeded the commonly used 3,000 mg practical ceiling and has been capped — confirm with pharmacy for a very large patient."
                : "Given as a single dose to rapidly reach a therapeutic concentration, before renal-function-based maintenance dosing begins."
            }
          />

          {result.specialistFlag ? (
            <ResultPanel
              tone={result.tone}
              eyebrow="Maintenance Dosing"
              value="Specialist dosing required"
              description={
                onHD
                  ? "Hemodialysis: no fixed formula applies here"
                  : "Severe renal impairment (CrCl <20 mL/min)"
              }
              footnote={
                onHD ? (
                  <>
                    Do not use a fixed interval for patients on intermittent
                    hemodialysis. Loading dose (~15–25 mg/kg, actual body weight)
                    still applies, but maintenance redosing depends on the
                    dialysis modality (conventional vs. high-flux vs. CRRT/CVVH),
                    residual renal function, and time since the last session —
                    it is driven by a pre-dialysis (trough) level, not a
                    calculated interval. <strong className="text-ink">Refer to
                    nephrology/clinical pharmacy for dosing and redosing.</strong>
                  </>
                ) : (
                  <>
                    Vancomycin clearance becomes unpredictable at this level of
                    renal impairment, and formulaic dosing carries a high risk
                    of accumulation and toxicity.{" "}
                    <strong className="text-ink">
                      Consult clinical pharmacy/nephrology for individualized,
                      level-guided dosing
                    </strong>{" "}
                    rather than using a fixed mg/kg/interval regimen.
                  </>
                )
              }
            />
          ) : (
            <ResultPanel
              tone={result.tone}
              eyebrow="Maintenance Dose"
              value={`${result.maintLow}–${result.maintHigh}`}
              valueSuffix={`mg IV ${result.interval}`}
              description={`15–20 mg/kg actual body weight, ${result.interval} — starting point pending AUC-guided adjustment`}
              footnote={
                <>
                  {result.dailyCapHit && (
                    <div className="mb-2 font-medium text-warn">
                      Calculated daily total is high — confirm against a
                      4,500 mg/day empiric ceiling and consider pharmacokinetic
                      consult before finalizing.
                    </div>
                  )}
                  <strong className="text-ink">This is an empiric starting
                  regimen, not a final prescription.</strong> Per the 2020
                  ASHP/IDSA/PIDS/SIDP consensus guideline, definitive dosing
                  for serious MRSA infections should be individualized using
                  AUC-guided (ideally Bayesian, two-level) monitoring targeting
                  an AUC₂₄/MIC of 400–600 mg·h/L (assuming MIC = 1 mg/L), not a
                  single trough level. Where AUC software is unavailable, a
                  trough of 15–20 mcg/mL is still used by some programs as a
                  practical surrogate, but is no longer the recommended primary
                  target.
                </>
              }
            />
          )}
        </>
      )}
    </div>
  );
}
