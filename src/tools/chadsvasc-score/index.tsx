import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const strokeRates = [0, 1.3, 2.2, 3.2, 4.0, 6.7, 9.8, 9.6, 12.5, 15.2];

const ageOptions = [
  { value: 0, label: "< 65 yrs" },
  { value: 1, label: "65–74 yrs", badge: "+1" },
  { value: 2, label: "≥ 75 yrs", badge: "+2" },
];

const sexOptions = [
  { value: 0, label: "Male" },
  { value: 1, label: "Female", badge: "+1" },
];

export default function ChadsvascScore() {
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState(0);
  const [chf, setChf] = useState(false);
  const [htn, setHtn] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [vasc, setVasc] = useState(false);
  const [dm, setDm] = useState(false);

  const { score, tone, recTitle, recText, detail } = useMemo(() => {
    let raw = age + sex;
    if (chf) raw += 1;
    if (htn) raw += 1;
    if (vasc) raw += 1;
    if (dm) raw += 1;
    if (stroke) raw += 2;
    const score = Math.min(raw, 9);

    const isFemale = sex === 1;
    const strokeRate = strokeRates[score] ?? 15.2;
    const clinicalScore = isFemale ? score - 1 : score;

    let tone: Tone;
    let recTitle: string;
    let recText: string;
    let detail: string;

    if (clinicalScore <= 0) {
      tone = "good";
      recTitle = "Low Risk";
      recText = "Anticoagulation not recommended.";
      detail =
        "No stroke prevention therapy needed. Reassess annually or if clinical status changes. Do not use aspirin for stroke prevention in AF.";
    } else if (clinicalScore === 1) {
      tone = "warn";
      recTitle = "Intermediate Risk";
      recText = "Anticoagulation should be considered.";
      detail = `Consider OAC after weighing stroke risk (${strokeRate}%/yr) vs. bleeding risk (use ORBIT score). Prefer DOAC over Warfarin. Aspirin alone is not recommended.`;
    } else {
      tone = "bad";
      recTitle = "High Risk";
      recText = "Anticoagulation strongly recommended (unless contraindicated).";
      detail = `Estimated stroke risk: ~${strokeRate}%/yr. Initiate DOAC (Apixaban, Rivaroxaban, Dabigatran or Edoxaban) unless absolute contraindication. Assess bleeding risk (ORBIT score) and address modifiable factors.`;
    }

    return { score, tone, recTitle, recText, detail };
  }, [age, sex, chf, htn, stroke, vasc, dm]);

  return (
    <div className="space-y-8">
      <Section title="Age">
        <OptionListField options={ageOptions} value={age} onChange={setAge} />
      </Section>

      <Section title="Sex">
        <OptionListField options={sexOptions} value={sex} onChange={setSex} />
      </Section>

      <Section title="Clinical Risk Factors">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Congestive Heart Failure / LV dysfunction (EF ≤40%)"
            checked={chf}
            onChange={setChf}
            points="+1"
          />
          <CheckboxRow
            label="Hypertension (on treatment or resting BP ≥140/90)"
            checked={htn}
            onChange={setHtn}
            points="+1"
          />
          <CheckboxRow
            label="Prior Stroke, TIA or Thromboembolism"
            checked={stroke}
            onChange={setStroke}
            points="+2"
          />
          <CheckboxRow
            label="Vascular Disease (prior MI, PAD or complex aortic plaque)"
            checked={vasc}
            onChange={setVasc}
            points="+1"
          />
          <CheckboxRow label="Diabetes Mellitus" checked={dm} onChange={setDm} points="+1" />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="CHA₂DS₂-VASc Score"
        value={score}
        valueSuffix="/9"
        description={`${recTitle} — ${recText}`}
        footnote={detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Stroke Rate Reference:</strong> Score 0=0%, 1=1.3%,
        2=2.2%, 3=3.2%, 4=4.0%, 5=6.7%, 6=9.8%, 7=9.6%, 8=12.5%, 9=15.2% per year (European
        Heart Rhythm Association 2020).
      </div>
    </div>
  );
}
