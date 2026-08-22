import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

export default function AlvaradoScore() {
  const [migration, setMigration] = useState(false);
  const [anorexia, setAnorexia] = useState(false);
  const [nausea, setNausea] = useState(false);
  const [rlqTenderness, setRlqTenderness] = useState(false);
  const [rebound, setRebound] = useState(false);
  const [fever, setFever] = useState(false);
  const [leukocytosis, setLeukocytosis] = useState(false);
  const [leftShift, setLeftShift] = useState(false);

  const { score, tone, headline, recommendation } = useMemo(() => {
    const score =
      (migration ? 1 : 0) +
      (anorexia ? 1 : 0) +
      (nausea ? 1 : 0) +
      (rlqTenderness ? 2 : 0) +
      (rebound ? 1 : 0) +
      (fever ? 1 : 0) +
      (leukocytosis ? 2 : 0) +
      (leftShift ? 1 : 0);

    let tone: Tone;
    let headline: string;
    let recommendation: string;

    if (score <= 4) {
      tone = "good";
      headline = "Appendicitis unlikely (0–4)";
      recommendation =
        "Appendicitis is unlikely. Consider alternative diagnoses and discharge with safety-netting advice if otherwise well, or observe if diagnostic uncertainty remains. A meta-analysis of 42 studies (Ohle et al., BMC Medicine 2011) found a score below 5 carries ~99% sensitivity for ruling out appendicitis — but this is a decision aid, not a substitute for reassessment if symptoms progress.";
    } else if (score <= 6) {
      tone = "warn";
      headline = "Appendicitis possible (5–6)";
      recommendation =
        "Equivocal range. Active observation with serial abdominal examinations, repeat inflammatory markers, and a low threshold for cross-sectional imaging (ultrasound, or CT/MRI depending on age and availability) is appropriate before committing to a management plan.";
    } else if (score <= 8) {
      tone = "bad";
      headline = "Appendicitis probable (7–8)";
      recommendation =
        "Surgical consultation is warranted. Most guidelines support proceeding toward imaging confirmation and/or appendectomy at this range, though local pathway and imaging availability should guide the exact next step.";
    } else {
      tone = "bad";
      headline = "Appendicitis very probable (9–10)";
      recommendation =
        "High likelihood of appendicitis. Surgical consultation for appendectomy is indicated, per local protocol and imaging where this would change management.";
    }

    return { score, tone, headline, recommendation };
  }, [migration, anorexia, nausea, rlqTenderness, rebound, fever, leukocytosis, leftShift]);

  return (
    <div className="space-y-8">
      <Section title="Symptoms">
        <div className="space-y-2">
          <CheckboxRow
            label="Migration of pain to the right iliac fossa"
            checked={migration}
            onChange={setMigration}
            points="+1"
          />
          <CheckboxRow
            label="Anorexia"
            checked={anorexia}
            onChange={setAnorexia}
            points="+1"
          />
          <CheckboxRow
            label="Nausea or vomiting"
            checked={nausea}
            onChange={setNausea}
            points="+1"
          />
        </div>
      </Section>

      <Section title="Signs">
        <div className="space-y-2">
          <CheckboxRow
            label="Tenderness in the right iliac fossa"
            checked={rlqTenderness}
            onChange={setRlqTenderness}
            points="+2"
          />
          <CheckboxRow
            label="Rebound tenderness"
            checked={rebound}
            onChange={setRebound}
            points="+1"
          />
          <CheckboxRow
            label="Elevated temperature > 37.3°C (99.1°F)"
            checked={fever}
            onChange={setFever}
            points="+1"
          />
        </div>
      </Section>

      <Section title="Laboratory Findings">
        <div className="space-y-2">
          <CheckboxRow
            label="Leukocytosis > 10,000/mm³"
            checked={leukocytosis}
            onChange={setLeukocytosis}
            points="+2"
          />
          <CheckboxRow
            label="Left shift — neutrophils > 75%"
            checked={leftShift}
            onChange={setLeftShift}
            points="+1"
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="Alvarado (MANTRELS) Score"
        value={score}
        valueSuffix="/10"
        description={headline}
        footnote={recommendation}
      />
    </div>
  );
}
