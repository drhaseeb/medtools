import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

const sexOptions = [
  { value: "male" as const, label: "Male" },
  { value: "female" as const, label: "Female" },
];

function ureaPoints(urea: number) {
  if (urea >= 25) return 6;
  if (urea >= 10) return 4;
  if (urea >= 8) return 3;
  if (urea >= 6.5) return 2;
  return 0;
}

function hbPoints(hb: number, sex: "male" | "female") {
  if (sex === "male") {
    if (hb < 100) return 6;
    if (hb < 120) return 3;
    if (hb < 130) return 1;
    return 0;
  }
  if (hb < 100) return 6;
  if (hb < 120) return 1;
  return 0;
}

function sbpPoints(sbp: number) {
  if (sbp < 90) return 3;
  if (sbp < 100) return 2;
  if (sbp < 110) return 1;
  return 0;
}

export default function BlatchfordScore() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [urea, setUrea] = useState<number | "">("");
  const [hb, setHb] = useState<number | "">("");
  const [sbp, setSbp] = useState<number | "">("");
  const [pulse, setPulse] = useState<number | "">("");
  const [melena, setMelena] = useState(false);
  const [syncope, setSyncope] = useState(false);
  const [hepatic, setHepatic] = useState(false);
  const [cardiac, setCardiac] = useState(false);

  const { score, tone, title, detail, breakdown } = useMemo(() => {
    const pts: string[] = [];
    let score = 0;

    if (urea !== "" && urea >= 6.5) {
      const p = ureaPoints(urea);
      score += p;
      pts.push(`Urea +${p}`);
    }
    if (hb !== "") {
      const p = hbPoints(hb, sex);
      if (p > 0) {
        score += p;
        pts.push(`Hb +${p}`);
      }
    }
    if (sbp !== "" && sbp < 110) {
      const p = sbpPoints(sbp);
      score += p;
      pts.push(`SBP +${p}`);
    }
    if (pulse !== "" && pulse >= 100) {
      score += 1;
      pts.push("Pulse +1");
    }
    if (melena) {
      score += 1;
      pts.push("Melena +1");
    }
    if (syncope) {
      score += 2;
      pts.push("Syncope +2");
    }
    if (hepatic) {
      score += 2;
      pts.push("Hepatic disease +2");
    }
    if (cardiac) {
      score += 2;
      pts.push("Cardiac failure +2");
    }

    let tone: Tone;
    let title: string;
    let detail: string;

    if (score === 0) {
      tone = "good";
      title = "Low Risk — Score 0";
      detail =
        "A score of 0 identifies patients at very low risk (historically <0.5%) of needing transfusion, endoscopic or surgical intervention, or of dying. Per NICE CG141, consider early discharge with outpatient follow-up and safety-netting advice, provided the patient is otherwise well, has adequate social support, and there is no other reason for admission.";
    } else if (score <= 6) {
      tone = "warn";
      title = `High Risk — Score ${score}`;
      detail =
        "Any score ≥1 indicates the patient requires hospital admission and pre-endoscopy risk assessment. Ensure IV access, resuscitate as needed, and arrange endoscopy — within 24 hours for most patients, or as soon as possible after resuscitation if haemodynamically unstable.";
    } else {
      tone = "bad";
      title = `Very High Risk — Score ${score}`;
      detail =
        "Scores above 6 correlate with a >50% probability of needing transfusion, endoscopic therapy, or surgery, and with increased mortality. Aggressive resuscitation, senior/critical-care involvement, and urgent (same-admission, often same-day) endoscopy are typically indicated.";
    }

    return { score, tone, title, detail, breakdown: pts.length ? pts.join(" · ") : undefined };
  }, [sex, urea, hb, sbp, pulse, melena, syncope, hepatic, cardiac]);

  return (
    <div className="space-y-8">
      <Section title="Patient Profile">
        <SegmentedField label="Biological Sex" options={sexOptions} value={sex} onChange={setSex} />
      </Section>

      <Section title="Laboratory Values">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <NumberField
            label="Blood Urea"
            value={urea}
            onChange={setUrea}
            step={0.1}
            placeholder="e.g. 6.5"
            suffix="mmol/L"
            hint="Score starts at ≥6.5 mmol/L"
          />
          <NumberField
            label="Hemoglobin"
            value={hb}
            onChange={setHb}
            step={1}
            placeholder="e.g. 130"
            suffix="g/L"
            hint="Note: g/L, not g/dL — threshold differs by sex"
          />
        </div>
      </Section>

      <Section title="Vital Signs">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <NumberField
            label="Systolic Blood Pressure"
            value={sbp}
            onChange={setSbp}
            step={1}
            placeholder="e.g. 110"
            suffix="mmHg"
          />
          <NumberField
            label="Pulse Rate"
            value={pulse}
            onChange={setPulse}
            step={1}
            placeholder="e.g. 80"
            suffix="bpm"
            hint="Scores +1 if ≥100 bpm"
          />
        </div>
      </Section>

      <Section title="Presentation & History">
        <div className="flex flex-col gap-2">
          <CheckboxRow label="Melena (black, tarry stool)" checked={melena} onChange={setMelena} points="+1" />
          <CheckboxRow label="Syncope" checked={syncope} onChange={setSyncope} points="+2" />
          <CheckboxRow
            label="Hepatic disease (known cirrhosis or clinical signs of chronic liver disease)"
            checked={hepatic}
            onChange={setHepatic}
            points="+2"
          />
          <CheckboxRow
            label="Cardiac failure (known history of congestive heart failure)"
            checked={cardiac}
            onChange={setCardiac}
            points="+2"
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="Glasgow-Blatchford Score"
        value={score}
        valueSuffix="/23"
        description={title}
        breakdown={breakdown}
        footnote={detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Important:</strong> The GBS is highly sensitive but not
        specific — many patients scoring above 0 will not ultimately need intervention. A score
        of 0 still requires clinical judgement: patient reliability, distance from medical care,
        and social circumstances should all factor into a discharge decision alongside the score.
      </div>
    </div>
  );
}
