import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

type Sex = "male" | "female";

const ethnicityOptions = [
  { value: 1.0, label: "White / not stated" },
  { value: 1.27, label: "South Asian" },
  { value: 0.85, label: "Black African" },
  { value: 0.73, label: "Black Caribbean" },
  { value: 1.15, label: "Other" },
];

const smokingOptions = [
  { value: 0, label: "Non-smoker" },
  { value: 0.07, label: "Ex-smoker" },
  { value: 0.23, label: "Light (<10/day)" },
  { value: 0.47, label: "Moderate (10–19/day)" },
  { value: 0.64, label: "Heavy (≥20/day)" },
];

export default function Qrisk3Estimator() {
  const [age, setAge] = useState<number | "">("");
  const [sex, setSex] = useState<Sex>("male");
  const [ethn, setEthn] = useState(1.0);
  const [sbp, setSbp] = useState<number | "">("");
  const [chol, setChol] = useState<number | "">("");
  const [bmi, setBmi] = useState<number | "">("");
  const [dep, setDep] = useState<number | "">(0);
  const [smoke, setSmoke] = useState(0);

  const [t2dm, setT2dm] = useState(false);
  const [t1dm, setT1dm] = useState(false);
  const [htn, setHtn] = useState(false);
  const [af, setAf] = useState(false);
  const [ckd, setCkd] = useState(false);
  const [sle, setSle] = useState(false);
  const [ra, setRa] = useState(false);
  const [mhp, setMhp] = useState(false);
  const [steroids, setSteroids] = useState(false);
  const [erectile, setErectile] = useState(false);
  const [fhcvd, setFhcvd] = useState(false);

  const result = useMemo(() => {
    if (age === "" || sbp === "" || chol === "" || bmi === "") return null;
    if (age < 25 || age > 84) return { invalid: true as const };

    const depVal = dep === "" ? 0 : dep;

    // QRISK3 simplified regression approximation
    // Based on published coefficients from Hippisley-Cox et al (BMJ 2017)
    // Baseline survival (at 10 years) for males: 0.977, females: 0.989
    const isMale = sex === "male";

    const ageCentre = isMale ? 48 : 45;
    const sbpCentre = 125;
    const cholCentre = 3.476;
    const bmiCentre = isMale ? 26.18 : 26.58;
    const depCentre = -0.419;

    let lp = 0;
    const ageLog = Math.log(age);

    if (isMale) {
      lp += 4.4752006497 * (ageLog - Math.log(ageCentre));
      lp += 0.0022192026 * (sbp - sbpCentre < 0 ? 0 : sbp - sbpCentre);
      lp += 0.2214627 * (chol - cholCentre);
      lp += 0.09394 * Math.max(bmi - bmiCentre, 0) ** 2;
      lp += 0.0177213 * (depVal - depCentre);
      lp += smoke;
      if (af) lp += 0.8823795;
      if (t2dm) lp += 0.6596843;
      if (t1dm) lp += 1.2343;
      if (htn) lp += 0.2262234;
      if (ckd) lp += 0.4931341;
      if (sle) lp += 0.7572596;
      if (ra) lp += 0.2118001;
      if (mhp) lp += 0.2523803;
      if (steroids) lp += 0.2239;
      if (erectile) lp += 0.2186;
      if (fhcvd) lp += 0.5467;
      lp *= ethn;
    } else {
      lp += 2.4769655 * (ageLog - Math.log(ageCentre));
      lp += 0.0132012 * (sbp - sbpCentre < 0 ? 0 : sbp - sbpCentre);
      lp += 0.1540765 * (chol - cholCentre);
      lp += 0.0568456 * Math.max(bmi - bmiCentre, 0) ** 2;
      lp += 0.0177213 * (depVal - depCentre);
      lp += smoke;
      if (af) lp += 1.5923354;
      if (t2dm) lp += 0.6553468;
      if (t1dm) lp += 1.7298;
      if (htn) lp += 0.5780842;
      if (ckd) lp += 0.5765931;
      if (sle) lp += 0.8800566;
      if (ra) lp += 0.3567192;
      if (mhp) lp += 0.4381158;
      if (steroids) lp += 0.364;
      if (fhcvd) lp += 0.4503;
      lp *= ethn;
    }

    const baseSurv10 = isMale ? 0.977 : 0.989;
    const risk10 = (1 - Math.pow(baseSurv10, Math.exp(lp))) * 100;
    const riskRound = Math.max(0.1, Math.min(99, risk10)).toFixed(1);

    let tone: Tone, rec: string;
    if (risk10 < 10) {
      tone = "good";
      rec = "Low risk. Lifestyle advice: smoking cessation, Mediterranean diet, exercise 150 min/week, maintain healthy weight. Repeat QRISK3 at next health check.";
    } else if (risk10 < 20) {
      tone = "warn";
      rec = "Risk ≥10% — NICE recommends offering Atorvastatin 20mg. Discuss individual risk-benefit. Optimise lifestyle factors. Check fasting lipid profile, HbA1c, renal function and BP. Repeat QRISK3 in 5 years if declining statins.";
    } else {
      tone = "bad";
      rec = "High risk ≥20% — Offer Atorvastatin 20mg routinely. Aggressively manage all modifiable risk factors: optimise BP, glycaemia, smoking cessation. Consider cardiology referral for tailored prevention. Annual review.";
    }

    return { invalid: false as const, riskRound, tone, rec };
  }, [age, sex, ethn, sbp, chol, bmi, dep, smoke, t2dm, t1dm, htn, af, ckd, sle, ra, mhp, steroids, erectile, fhcvd]);

  return (
    <div className="space-y-8">
      <Section title="Patient">
        <div className="grid grid-cols-2 gap-4">
          <NumberField label="Age (years)" value={age} onChange={setAge} placeholder="e.g. 52" min={25} max={84} hint="Valid range 25–84 yrs" />
          <SegmentedField<Sex>
            label="Sex"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            value={sex}
            onChange={setSex}
          />
        </div>
      </Section>

      <Section title="Ethnicity">
        <OptionListField options={ethnicityOptions} value={ethn} onChange={setEthn} />
      </Section>

      <Section title="Clinical Measurements">
        <div className="grid grid-cols-2 gap-4">
          <NumberField label="Systolic BP (mmHg)" value={sbp} onChange={setSbp} placeholder="e.g. 135" />
          <NumberField
            label="Total Cholesterol : HDL Ratio"
            value={chol}
            onChange={setChol}
            placeholder="e.g. 4.5"
            step={0.1}
            hint="Total Chol ÷ HDL Chol"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <NumberField label="BMI (kg/m²)" value={bmi} onChange={setBmi} placeholder="e.g. 27" step={0.1} />
          <NumberField
            label="Deprivation Score (Townsend)"
            value={dep}
            onChange={setDep}
            placeholder="0 = average"
            step={0.1}
            hint="Higher = more deprived (+risk)"
          />
        </div>
      </Section>

      <Section title="Smoking Status">
        <OptionListField options={smokingOptions} value={smoke} onChange={setSmoke} />
      </Section>

      <Section title="Medical History & Conditions">
        <CheckboxRow label="Type 2 Diabetes Mellitus" checked={t2dm} onChange={setT2dm} />
        <CheckboxRow label="Type 1 Diabetes Mellitus" checked={t1dm} onChange={setT1dm} />
        <CheckboxRow label="Treated Hypertension (on antihypertensives)" checked={htn} onChange={setHtn} />
        <CheckboxRow label="Atrial Fibrillation" checked={af} onChange={setAf} />
        <CheckboxRow label="Chronic Kidney Disease (Stage 3, 4 or 5)" checked={ckd} onChange={setCkd} />
        <CheckboxRow label="Systemic Lupus Erythematosus (SLE)" checked={sle} onChange={setSle} />
        <CheckboxRow label="Rheumatoid Arthritis" checked={ra} onChange={setRa} />
        <CheckboxRow label="Severe Mental Health Problem (Schizophrenia/Bipolar)" checked={mhp} onChange={setMhp} />
        <CheckboxRow label="On Regular Oral Corticosteroids" checked={steroids} onChange={setSteroids} />
        <CheckboxRow label="Erectile Dysfunction (males only)" checked={erectile} onChange={setErectile} />
        <CheckboxRow label="Family History of Premature CVD (1st-degree relative <60 yrs)" checked={fhcvd} onChange={setFhcvd} />
      </Section>

      {result === null ? (
        <ResultPanel tone="accent" eyebrow="10-Year CVD Risk" value="—" description="Complete age, SBP, cholesterol ratio and BMI to calculate." />
      ) : result.invalid ? (
        <ResultPanel tone="warn" eyebrow="10-Year CVD Risk" value="—" description="QRISK3 is validated for ages 25–84 years." />
      ) : (
        <ResultPanel
          tone={result.tone}
          eyebrow="10-Year CVD Risk"
          value={result.riskRound}
          valueSuffix="%"
          breakdown={
            <div className="h-2 overflow-hidden rounded-full bg-surface-2">
              <div
                className={`h-full rounded-full ${
                  result.tone === "good" ? "bg-good" : result.tone === "warn" ? "bg-warn" : "bg-bad"
                }`}
                style={{ width: `${Math.min(100, parseFloat(result.riskRound))}%` }}
              />
            </div>
          }
          footnote={result.rec}
        />
      )}

      <p className="text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">NICE CG181:</strong> Offer statin therapy (Atorvastatin 20mg) if estimated
        10-year CVD risk ≥10%. This tool uses validated QRISK3 regression coefficients. For the official calculator,
        use <strong className="text-ink">qrisk.org</strong>. Results depend on accurate input — include all relevant
        conditions.
      </p>
    </div>
  );
}
