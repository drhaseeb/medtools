import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

export default function RosierScale() {
  const [glucoseChecked, setGlucoseChecked] = useState(false);
  const [loc, setLoc] = useState(false);
  const [seizure, setSeizure] = useState(false);
  const [face, setFace] = useState(false);
  const [arm, setArm] = useState(false);
  const [leg, setLeg] = useState(false);
  const [speech, setSpeech] = useState(false);
  const [visual, setVisual] = useState(false);

  const { score, tone, headline, recommendation } = useMemo(() => {
    const score =
      (loc ? -1 : 0) +
      (seizure ? -1 : 0) +
      (face ? 1 : 0) +
      (arm ? 1 : 0) +
      (leg ? 1 : 0) +
      (speech ? 1 : 0) +
      (visual ? 1 : 0);

    let tone: Tone;
    let headline: string;
    let recommendation: string;

    if (score > 0) {
      tone = "bad";
      headline = "Stroke likely";
      recommendation =
        "Treat as a stroke: activate your local acute stroke pathway, note the exact time last known well, and arrange emergency CT/MRI to assess for thrombolysis/thrombectomy eligibility. A positive ROSIER does not confirm the diagnosis — imaging and specialist assessment still decide management.";
    } else {
      tone = "good";
      headline = "Stroke unlikely — but not excluded";
      recommendation =
        "A score of 0 or below makes stroke less likely but does not rule it out — ROSIER performs less well for posterior circulation, lacunar, and some haemorrhagic strokes. If clinical suspicion remains (e.g. isolated ataxia, vertigo, or diplopia), discuss with a stroke specialist rather than discharging on the score alone. If there are no focal signs at all and a TIA is suspected, use ABCD2 instead — ROSIER is designed for patients with a persisting deficit at assessment.";
    }

    return { score, tone, headline, recommendation };
  }, [loc, seizure, face, arm, leg, speech, visual]);

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-3 rounded-xl border border-warn/30 bg-warn-soft px-4 py-3">
        <input
          type="checkbox"
          checked={glucoseChecked}
          onChange={(e) => setGlucoseChecked(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-warn"
        />
        <label className="text-xs font-medium leading-relaxed text-warn">
          Blood glucose checked and, if &lt;3.5 mmol/L, corrected and the patient
          reassessed. Hypoglycaemia is a common stroke mimic and must be
          excluded before scoring — tick to confirm before proceeding.
        </label>
      </div>

      <Section title="Negative Findings">
        <div className="space-y-2">
          <CheckboxRow
            label="Loss of consciousness or syncope"
            checked={loc}
            onChange={setLoc}
            points="−1"
          />
          <CheckboxRow
            label="Seizure activity"
            checked={seizure}
            onChange={setSeizure}
            points="−1"
          />
        </div>
      </Section>

      <Section title="New, Acute Onset (or on Waking) — Asymmetric Findings">
        <div className="space-y-2">
          <CheckboxRow
            label="Facial weakness"
            checked={face}
            onChange={setFace}
            points="+1"
          />
          <CheckboxRow
            label="Arm weakness"
            checked={arm}
            onChange={setArm}
            points="+1"
          />
          <CheckboxRow
            label="Leg weakness"
            checked={leg}
            onChange={setLeg}
            points="+1"
          />
          <CheckboxRow
            label="Speech disturbance"
            checked={speech}
            onChange={setSpeech}
            points="+1"
          />
          <CheckboxRow
            label="Visual field defect"
            checked={visual}
            onChange={setVisual}
            points="+1"
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="ROSIER Score"
        value={score > 0 ? `+${score}` : score}
        valueSuffix="/ −2 to +5"
        description={headline}
        footnote={recommendation}
      />
    </div>
  );
}
