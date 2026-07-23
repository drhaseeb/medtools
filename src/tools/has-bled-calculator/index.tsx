import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const criteria = [
  {
    id: "htn",
    label: "H — Hypertension (uncontrolled, SBP >160 mmHg) · Modifiable — optimise BP control",
  },
  {
    id: "renal",
    label: "A — Abnormal Renal Function (dialysis, transplant or Cr >200 µmol/L)",
  },
  {
    id: "liver",
    label: "A — Abnormal Liver Function (cirrhosis, or bilirubin >2× + ALT/AST/ALP >3×)",
  },
  { id: "stroke", label: "S — Prior Stroke or TIA" },
  {
    id: "bleed",
    label:
      "B — Prior Major Bleeding or Predisposition (anaemia, thrombocytopenia) · Modifiable — treat anaemia, thrombocytopenia; avoid NSAIDs/Aspirin",
  },
  {
    id: "inr",
    label:
      "L — Labile INR (Warfarin patients: TTR <60%, or frequent INR fluctuations) · Modifiable — switch to DOAC if poor INR control",
  },
  { id: "age", label: "E — Elderly (Age > 65 years)" },
  {
    id: "drug",
    label:
      "D — Drugs: Antiplatelet agents (Aspirin, Clopidogrel etc.) · Modifiable — review necessity of dual antiplatelet",
  },
  {
    id: "alcohol",
    label: "D — Alcohol use (≥8 units/week) · Modifiable — alcohol cessation support",
  },
] as const;

type CriterionId = (typeof criteria)[number]["id"];

export default function HasBledCalculator() {
  const [checked, setChecked] = useState<Record<CriterionId, boolean>>({
    htn: false,
    renal: false,
    liver: false,
    stroke: false,
    bleed: false,
    inr: false,
    age: false,
    drug: false,
    alcohol: false,
  });

  const { score, tone, severity, recommendation } = useMemo(() => {
    const score = criteria.filter((c) => checked[c.id]).length;

    let tone: Tone;
    let severity: string;
    let recommendation: string;

    if (score <= 1) {
      tone = "good";
      severity = "Low Bleeding Risk (≤1)";
      recommendation =
        "Bleeding rate ~1.13 per 100 patient-years. Anticoagulate per CHA₂DS₂-VASc. Annual review.";
    } else if (score === 2) {
      tone = "warn";
      severity = "Moderate Bleeding Risk (2)";
      recommendation =
        "Bleeding rate ~1.88/100 pt-yrs. Address all modifiable factors. Choose DOAC with lowest bleeding profile (Apixaban). Frequent monitoring.";
    } else {
      tone = "bad";
      severity = "High Bleeding Risk (≥3)";
      recommendation =
        "Bleeding rate ≥3.74/100 pt-yrs. Correct ALL modifiable factors urgently. Consider Apixaban. Do NOT withhold OAC — net clinical benefit still favours treatment in most patients. Frequent review every 4–6 months.";
    }

    return { score, tone, severity, recommendation };
  }, [checked]);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-good/30 bg-good-soft px-4 py-3 text-sm text-good">
        <strong>Modifiable factors</strong> are highlighted. A high score
        should prompt correction of modifiable risks, not automatic
        withholding of anticoagulation.
      </div>

      <Section title="Bleeding Risk Criteria">
        <div className="flex flex-col gap-2">
          {criteria.map((c) => (
            <CheckboxRow
              key={c.id}
              label={c.label}
              checked={checked[c.id]}
              onChange={(v) => setChecked((prev) => ({ ...prev, [c.id]: v }))}
              points="+1"
            />
          ))}
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="HAS-BLED Score"
        value={score}
        valueSuffix="/9"
        description={severity}
        footnote={
          <>
            <p>{recommendation}</p>
            <p className="mt-3">
              <strong className="text-ink">ESC 2020:</strong> A high HAS-BLED
              score should NOT be used to withhold anticoagulation. Use it to
              identify and correct modifiable risks. DOAC bleeding rates are
              lower than warfarin across all risk categories. Always compare
              against stroke risk (CHA₂DS₂-VASc).
            </p>
          </>
        }
      />
    </div>
  );
}
