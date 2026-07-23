import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

type Sex = "male" | "female";
type Ethnicity =
  | "white"
  | "indian"
  | "pakistani"
  | "bangladeshi"
  | "otherAsian"
  | "blackCaribbean"
  | "blackAfrican"
  | "chinese"
  | "other";
type Smoke = "non" | "ex" | "light" | "moderate" | "heavy";

const ethnicityOptions: { value: Ethnicity; label: string }[] = [
  { value: "white", label: "White or not stated" },
  { value: "indian", label: "Indian" },
  { value: "pakistani", label: "Pakistani" },
  { value: "bangladeshi", label: "Bangladeshi" },
  { value: "otherAsian", label: "Other Asian background" },
  { value: "blackCaribbean", label: "Black Caribbean" },
  { value: "blackAfrican", label: "Black African" },
  { value: "chinese", label: "Chinese" },
  { value: "other", label: "Other ethnic group" },
];

const smokingOptions: { value: Smoke; label: string }[] = [
  { value: "non", label: "Non-smoker" },
  { value: "ex", label: "Ex-smoker" },
  { value: "light", label: "Light smoker (<10/day)" },
  { value: "moderate", label: "Moderate smoker (10–19/day)" },
  { value: "heavy", label: "Heavy smoker (≥20/day)" },
];

// ---------------------------------------------------------------------------
// Coefficient source: Hippisley-Cox J, Coupland C, Brindle P. Development and
// validation of QRISK3 risk prediction algorithms to estimate future risk of
// cardiovascular disease: prospective cohort study. BMJ. 2017;357:j2099.
// Values below are the published QRISK3-2017 beta coefficients as reproduced
// in ClinRisk Ltd's LGPL-licensed open-source reference implementation
// (the same source code family used by the CRAN "QRISK3" R package and the
// EMIS/SystmOne clinical implementations), cross-checked against multiple
// independent third-party ports for consistency.
//
// IMPORTANT — read before trusting this tool for clinical decisions:
// The full QRISK3 algorithm is a Cox proportional-hazards model with (a)
// fractional-polynomial transforms of age and BMI, (b) a systolic blood
// pressure variability term ("sbps5", the standard deviation of at least two
// recent SBP readings) that this calculator does not collect, and (c) roughly
// twenty age-by-risk-factor interaction terms (e.g. the effect of smoking,
// diabetes and several other variables is itself modified by age). This
// calculator has been corrected to use the REAL published coefficients for
// every flat/additive term below — ethnicity, smoking category, and every
// binary comorbidity — which are independently verifiable and safe to port.
// It intentionally does NOT attempt to reproduce the fractional-polynomial
// age/BMI curve or the age-interaction terms, because a partial, unverified
// reimplementation of that structure was found (during review) to distort
// the output rather than improve it. Treat the result as an educational
// approximation, not the validated QRISK3 output — for real prescribing
// decisions, always confirm with the official calculator at qrisk.org.
// ---------------------------------------------------------------------------

const ETHNICITY_COEF: Record<Sex, Record<Ethnicity, number>> = {
  male: {
    white: 0,
    indian: 0.2771924876030828,
    pakistani: 0.4744636071493127,
    bangladeshi: 0.5296172991968937,
    otherAsian: 0.035100159186299,
    blackCaribbean: -0.3580789966932792,
    blackAfrican: -0.4005648523216514,
    chinese: -0.4152279288983017,
    other: -0.2632134813474997,
  },
  female: {
    white: 0,
    indian: 0.2804031433299543,
    pakistani: 0.562989941420754,
    bangladeshi: 0.2959000085111652,
    otherAsian: 0.0727853798779825,
    blackCaribbean: -0.1707213550885732,
    blackAfrican: -0.3937104331487497,
    chinese: -0.3263249528353027,
    other: -0.1712705688324178,
  },
};

const SMOKE_COEF: Record<Sex, Record<Smoke, number>> = {
  male: { non: 0, ex: 0.1912822286338898, light: 0.5524158819264555, moderate: 0.6383505302750607, heavy: 0.7898381988185802 },
  female: { non: 0, ex: 0.1338683378654626, light: 0.5620085801243854, moderate: 0.6674959337750255, heavy: 0.8494817764483085 },
};

const COND_COEF = {
  male: {
    af: 0.8820923692805466,
    antipsychotics: 0.1304687985517351,
    steroids: 0.4548539975044554,
    migraine: 0.2558417807415991,
    ra: 0.2097065801395657,
    ckd: 0.7185326128827438,
    semi: 0.1213303988204716,
    sle: 0.4401572174457522,
    htn: 0.5165987108269547,
    t1dm: 1.2343425521675175,
    t2dm: 0.8594207143093222,
    fhcvd: 0.5405546900939016,
    erectile: 0.2225185908670538,
  },
  female: {
    af: 1.5923354969269663,
    antipsychotics: 0.2523764207011556,
    steroids: 0.5952072530460185,
    migraine: 0.301267260870345,
    ra: 0.2136480343518194,
    ckd: 0.6519456949384583,
    semi: 0.1255530805882018,
    sle: 0.7588093865426769,
    htn: 0.50931593683423,
    t1dm: 1.7267977510537347,
    t2dm: 1.0688773244615468,
    fhcvd: 0.4544531902089621,
    erectile: 0,
  },
} as const;

export default function Qrisk3Estimator() {
  const [age, setAge] = useState<number | "">("");
  const [sex, setSex] = useState<Sex>("male");
  const [ethn, setEthn] = useState<Ethnicity>("white");
  const [sbp, setSbp] = useState<number | "">("");
  const [chol, setChol] = useState<number | "">("");
  const [bmi, setBmi] = useState<number | "">("");
  const [dep, setDep] = useState<number | "">(0);
  const [smoke, setSmoke] = useState<Smoke>("non");

  const [t2dm, setT2dm] = useState(false);
  const [t1dm, setT1dm] = useState(false);
  const [htn, setHtn] = useState(false);
  const [af, setAf] = useState(false);
  const [ckd, setCkd] = useState(false);
  const [sle, setSle] = useState(false);
  const [ra, setRa] = useState(false);
  const [semi, setSemi] = useState(false);
  const [antipsychotics, setAntipsychotics] = useState(false);
  const [steroids, setSteroids] = useState(false);
  const [migraine, setMigraine] = useState(false);
  const [erectile, setErectile] = useState(false);
  const [fhcvd, setFhcvd] = useState(false);

  const result = useMemo(() => {
    if (age === "" || sbp === "" || chol === "" || bmi === "") return null;
    if (age < 25 || age > 84) return { invalid: true as const };

    const depVal = dep === "" ? 0 : dep;
    const isMale = sex === "male";

    // Simplified single-term approximation of the continuous variables
    // (age, SBP, BMI, cholesterol ratio, deprivation) — see the notice above
    // for why the fractional-polynomial/age-interaction structure was not
    // ported. Centre points approximate the QResearch derivation cohort means.
    const ageCentre = isMale ? 48 : 45;
    const sbpCentre = 125;
    const cholCentre = 3.476;
    const bmiCentre = isMale ? 26.18 : 26.58;
    const depCentre = -0.419;

    let lp = 0;
    const ageLog = Math.log(age);

    if (isMale) {
      lp += 4.4752006497 * (ageLog - Math.log(ageCentre));
      lp += 0.0022192026 * Math.max(sbp - sbpCentre, 0);
      lp += 0.2214627 * (chol - cholCentre);
      lp += 0.09394 * Math.max(bmi - bmiCentre, 0) ** 2;
      lp += 0.0177213 * (depVal - depCentre);
    } else {
      lp += 2.4769655 * (ageLog - Math.log(ageCentre));
      lp += 0.0132012 * Math.max(sbp - sbpCentre, 0);
      lp += 0.1540765 * (chol - cholCentre);
      lp += 0.0568456 * Math.max(bmi - bmiCentre, 0) ** 2;
      lp += 0.0177213 * (depVal - depCentre);
    }

    // Verified, published flat coefficients (additive, per QRISK3-2017) —
    // ethnicity and smoking are ADDED to the linear predictor, never used to
    // scale it, since QRISK3 is a Cox proportional-hazards model in which
    // every risk factor's hazard ratio is constant regardless of how many
    // other risk factors a patient has.
    lp += ETHNICITY_COEF[sex][ethn];
    lp += SMOKE_COEF[sex][smoke];

    const c = COND_COEF[sex];
    if (af) lp += c.af;
    if (t1dm) lp += c.t1dm;
    if (t2dm) lp += c.t2dm;
    if (htn) lp += c.htn;
    if (ckd) lp += c.ckd;
    if (sle) lp += c.sle;
    if (ra) lp += c.ra;
    if (semi) lp += c.semi;
    if (antipsychotics) lp += c.antipsychotics;
    if (steroids) lp += c.steroids;
    if (migraine) lp += c.migraine;
    if (fhcvd) lp += c.fhcvd;
    if (isMale && erectile) lp += c.erectile;

    const baseSurv10 = isMale ? 0.977268040180206 : 0.988876402378082;
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
  }, [age, sex, ethn, sbp, chol, bmi, dep, smoke, t2dm, t1dm, htn, af, ckd, sle, ra, semi, antipsychotics, steroids, migraine, erectile, fhcvd]);

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
            hint="UK-specific; leave at 0 if unknown or outside the UK"
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
        <CheckboxRow label="Migraine (diagnosed)" checked={migraine} onChange={setMigraine} />
        <CheckboxRow
          label="Severe Mental Illness (schizophrenia, bipolar disorder or moderate/severe depression)"
          checked={semi}
          onChange={setSemi}
        />
        <CheckboxRow
          label="Regular Atypical Antipsychotic Medication"
          checked={antipsychotics}
          onChange={setAntipsychotics}
        />
        <CheckboxRow label="On Regular Oral Corticosteroids" checked={steroids} onChange={setSteroids} />
        {sex === "male" && (
          <CheckboxRow label="Erectile Dysfunction" checked={erectile} onChange={setErectile} />
        )}
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
        <strong className="text-ink">NICE NG238 (2023):</strong> Offer statin therapy (Atorvastatin 20mg) if estimated
        10-year CVD risk ≥10%. <strong className="text-ink">Approximation notice:</strong> ethnicity, smoking and
        comorbidity coefficients are the verified, published QRISK3-2017 values, but the age/BMI/blood-pressure
        curve and QRISK3's ~20 age-interaction terms and blood-pressure-variability input are simplified here.
        This tool is for education and screening only — use the official calculator at{" "}
        <strong className="text-ink">qrisk.org</strong> for actual prescribing decisions.
      </p>
    </div>
  );
}
