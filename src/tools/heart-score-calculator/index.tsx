import { useMemo, useState } from "react";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const historyOptions = [
  {
    value: 0,
    label: "Slightly suspicious — atypical features (non-pleuritic, non-positional, not reproducible)",
    badge: "0",
  },
  {
    value: 1,
    label: "Moderately suspicious — mixed features, some typical",
    badge: "+1",
  },
  {
    value: 2,
    label: "Highly suspicious — typical pressure/radiation, onset with exertion, relieved by nitrates",
    badge: "+2",
  },
];

const ecgOptions = [
  { value: 0, label: "Normal — no significant ST changes", badge: "0" },
  {
    value: 1,
    label: "Non-specific repolarisation disturbance (LBBB, LVH, pacing, digoxin effect)",
    badge: "+1",
  },
  {
    value: 2,
    label: "Significant ST deviation — new or presumably new ST depression ≥1mm or TWI",
    badge: "+2",
  },
];

const ageOptions = [
  { value: 0, label: "Age < 45 years", badge: "0" },
  { value: 1, label: "Age 45–64 years", badge: "+1" },
  { value: 2, label: "Age ≥ 65 years", badge: "+2" },
];

const riskFactorOptions = [
  { value: 0, label: "No known risk factors", badge: "0" },
  {
    value: 1,
    label:
      "1–2 risk factors: HTN, Hypercholesterolaemia, DM, Obesity (BMI>30), Smoking, Family history",
    badge: "+1",
  },
  {
    value: 2,
    label: "Known atherosclerotic disease — CAD, peripheral arterial disease, CVA, or ≥3 risk factors",
    badge: "+2",
  },
];

const troponinOptions = [
  { value: 0, label: "≤ Normal limit (within assay reference range)", badge: "0" },
  { value: 1, label: "1–2× normal limit", badge: "+1" },
  { value: 2, label: ">2× normal limit", badge: "+2" },
];

export default function HeartScoreCalculator() {
  const [history, setHistory] = useState(0);
  const [ecg, setEcg] = useState(0);
  const [age, setAge] = useState(0);
  const [riskFactors, setRiskFactors] = useState(0);
  const [troponin, setTroponin] = useState(0);

  const { score, tone, headline, recommendation } = useMemo(() => {
    const score = history + ecg + age + riskFactors + troponin;

    let tone: Tone;
    let headline: string;
    let recommendation: string;

    if (score <= 3) {
      tone = "good";
      headline = "Low Risk — MACE <2%";
      recommendation =
        "Safe for early discharge. Validated HEART Pathway: obtain serial troponin at 0 and 3h. If both normal + HEART ≤3, discharge with outpatient follow-up. No routine stress test mandatory in low-risk ED patients (AHA 2022).";
    } else if (score <= 6) {
      tone = "warn";
      headline = "Intermediate Risk — MACE 12–17%";
      recommendation =
        "Admit for further evaluation. Serial troponins (0, 1h, 3h with hs-TnI). Non-invasive testing (stress echo or MPI). Cardiology consultation. Discharge only when symptoms resolved and all investigations satisfactory.";
    } else {
      tone = "bad";
      headline = "High Risk — MACE ~65%";
      recommendation =
        "Treat as ACS. Early invasive strategy (coronary angiography within 24h). Dual antiplatelet therapy. IV anticoagulation. Urgent cardiology review. Do NOT discharge from ED without cardiologist assessment.";
    }

    return { score, tone, headline, recommendation };
  }, [history, ecg, age, riskFactors, troponin]);

  return (
    <div className="space-y-8">
      <Section title="H — History of Chest Pain">
        <OptionListField options={historyOptions} value={history} onChange={setHistory} />
      </Section>

      <Section title="E — ECG">
        <OptionListField options={ecgOptions} value={ecg} onChange={setEcg} />
      </Section>

      <Section title="A — Age">
        <OptionListField options={ageOptions} value={age} onChange={setAge} />
      </Section>

      <Section title="R — Risk Factors (CAD Risk)">
        <OptionListField options={riskFactorOptions} value={riskFactors} onChange={setRiskFactors} />
      </Section>

      <Section title="T — Troponin">
        <OptionListField options={troponinOptions} value={troponin} onChange={setTroponin} />
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="HEART Score"
        value={score}
        valueSuffix="/10"
        description={headline}
        breakdown={`H${history} + E${ecg} + A${age} + R${riskFactors} + T${troponin}`}
        footnote={recommendation}
      />
    </div>
  );
}
