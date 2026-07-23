import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const rates = [4.7, 4.7, 8.3, 13.2, 19.9, 26.2, 40.9, 40.9];

const demographicCriteria = [
  { id: "age65", label: "Age ≥ 65 years" },
  {
    id: "risk3",
    label:
      "≥3 CAD Risk Factors — Family Hx of CAD, Hypertension, Hypercholesterolaemia, DM, Active smoker",
  },
  {
    id: "priorStenosis",
    label: "Prior Coronary Stenosis ≥ 50% — Known CAD on angiography",
  },
  {
    id: "aspirin",
    label:
      "Aspirin Use in Prior 7 Days — Aspirin resistance marker — associated with higher risk",
  },
] as const;

const presentationCriteria = [
  { id: "angina2", label: "≥ 2 Anginal Events in Prior 24 Hours" },
  {
    id: "stDev",
    label: "ST Deviation ≥ 0.5 mm on ECG — New horizontal ST depression or transient ST elevation",
  },
  {
    id: "markers",
    label: "Positive Cardiac Markers — Elevated troponin I or T, or CK-MB above normal limit",
  },
] as const;

type CriterionId =
  | (typeof demographicCriteria)[number]["id"]
  | (typeof presentationCriteria)[number]["id"];

export default function TimiScoreCalculator() {
  const [checked, setChecked] = useState<Record<CriterionId, boolean>>({
    age65: false,
    risk3: false,
    priorStenosis: false,
    aspirin: false,
    angina2: false,
    stDev: false,
    markers: false,
  });

  const toggle = (id: CriterionId) => (v: boolean) =>
    setChecked((prev) => ({ ...prev, [id]: v }));

  const { score, rate, tone, recommendation } = useMemo(() => {
    const score = Object.values(checked).filter(Boolean).length;
    const rate = rates[score];

    let tone: Tone;
    let recommendation: string;

    if (score <= 2) {
      tone = "good";
      recommendation =
        "Conservative management appropriate. Dual antiplatelet (Aspirin + Ticagrelor). Stress testing prior to discharge. Elective angiography if symptoms recur.";
    } else if (score <= 4) {
      tone = "warn";
      recommendation =
        "Early invasive strategy within 24–72h. Dual antiplatelet + anticoagulation (LMWH or fondaparinux). Titrate P2Y12 inhibitor to bleeding risk.";
    } else {
      tone = "bad";
      recommendation =
        "High TIMI risk supports an early invasive strategy. Per the 2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS guideline and the 2023 ESC ACS guideline, the strongest evidence for angiography <24h applies to a GRACE score >140 or other very-high-risk features — use TIMI alongside GRACE, not as a standalone timing rule. IV anticoagulation, Ticagrelor (or Prasugrel post-angiography), and a GP IIb/IIIa inhibitor if troponin-positive and PCI planned. Senior cardiology input.";
    }

    return { score, rate, tone, recommendation };
  }, [checked]);

  const riskLabel = score <= 2 ? "Low Risk" : score <= 4 ? "Intermediate Risk" : "High Risk";

  return (
    <div className="space-y-8">
      <Section title="Demographics & History">
        <div className="flex flex-col gap-2">
          {demographicCriteria.map((c) => (
            <CheckboxRow
              key={c.id}
              label={c.label}
              checked={checked[c.id]}
              onChange={toggle(c.id)}
              points="+1"
            />
          ))}
        </div>
      </Section>

      <Section title="Presentation">
        <div className="flex flex-col gap-2">
          {presentationCriteria.map((c) => (
            <CheckboxRow
              key={c.id}
              label={c.label}
              checked={checked[c.id]}
              onChange={toggle(c.id)}
              points="+1"
            />
          ))}
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="TIMI Score"
        value={score}
        valueSuffix="/7"
        description={`${riskLabel} (${rate}%)`}
        footnote={
          <>
            <p>{recommendation}</p>
            <p className="mt-3">
              TIMI risk rates (14-day composite endpoint): 0–1=4.7%, 2=8.3%,
              3=13.2%, 4=19.9%, 5=26.2%, 6–7=40.9% (Antman et al. JAMA 2000).
              Both the 2023 ESC ACS guideline and the 2025 ACC/AHA/ACEP/
              NAEMSP/SCAI ACS guideline now anchor invasive-strategy timing
              primarily to the GRACE score (early invasive &lt;24h if GRACE
              &gt;140, immediate &lt;2h for refractory/unstable presentations);
              TIMI ≥3 remains a well-validated adjunct marker of
              intermediate-to-high risk useful for shared decision-making,
              but per current guidance it is not used as a standalone timing
              rule or as a diagnostic test. A TIMI of 0–1 does not, by
              itself, confirm low enough risk for safe ED discharge — pair it
              with a validated pathway (e.g. HEART) or local protocol.
            </p>
          </>
        }
      />
    </div>
  );
}
