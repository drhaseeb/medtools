import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

export default function PesiCalculator() {
  const [age, setAge] = useState<number | "">("");
  const [sex, setSex] = useState<"male" | "female">("male");
  const [cancer, setCancer] = useState(false);
  const [hf, setHf] = useState(false);
  const [lung, setLung] = useState(false);
  const [hr110, setHr110] = useState(false);
  const [sbp100, setSbp100] = useState(false);
  const [rr30, setRr30] = useState(false);
  const [temp36, setTemp36] = useState(false);
  const [ams, setAms] = useState(false);
  const [spo2, setSpo2] = useState(false);

  const result = useMemo(() => {
    if (age === "" || Number.isNaN(age)) return null;

    let s = age + (sex === "male" ? 10 : 0);
    if (cancer) s += 30;
    if (hf) s += 10;
    if (lung) s += 10;
    if (hr110) s += 20;
    if (sbp100) s += 30;
    if (rr30) s += 20;
    if (temp36) s += 20;
    if (ams) s += 60;
    if (spo2) s += 20;

    let tone: Tone;
    let cls: string;
    let mort: string;
    let rec: string;

    if (s <= 65) {
      tone = "good";
      cls = "Class I — Very Low Risk";
      mort = "0–1.6%";
      rec = "Consider early discharge or home treatment. DOAC (Rivaroxaban or Apixaban) suitable. Ensure follow-up within 5 days. Exclusion criteria: significant comorbidity, poor social support, bleeding risk, SpO₂<90%.";
    } else if (s <= 85) {
      tone = "accent";
      cls = "Class II — Low Risk";
      mort = "1.7–3.5%";
      rec = "Low risk. Short hospitalisation or consider home treatment in selected patients. Anticoagulate with DOAC. Review at 48–72h.";
    } else if (s <= 105) {
      tone = "warn";
      cls = "Class III — Intermediate Risk";
      mort = "3.2–7.1%";
      rec = "Intermediate risk. Admit. Further stratify with troponin and echo (RV dysfunction). If intermediate-high (both positive): consider thrombolytics if deteriorating. Anticoagulate with heparin initially.";
    } else if (s <= 125) {
      tone = "warn";
      cls = "Class IV — High Risk";
      mort = "4.0–11.4%";
      rec = "High risk. Admit to monitored bed. IV anticoagulation (UFH). Echo mandatory. Low threshold for escalation. Discuss with respiratory/cardiology.";
    } else {
      tone = "bad";
      cls = "Class V — Very High Risk";
      mort = "10–24.5%";
      rec = "Severe. ICU admission. If haemodynamically unstable: systemic thrombolysis (alteplase 100mg/2h) unless contraindicated. Surgical embolectomy if thrombolysis fails. Immediate senior/intensivist involvement.";
    }

    return { s, tone, cls, mort, rec };
  }, [age, sex, cancer, hf, lung, hr110, sbp100, rr30, temp36, ams, spo2]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Age (years)" value={age} onChange={setAge} placeholder="e.g. 62" />
        <SegmentedField
          label="Sex"
          options={[
            { value: "male", label: "Male (+10)" },
            { value: "female", label: "Female" },
          ]}
          value={sex}
          onChange={setSex}
        />
      </div>

      <Section title="Comorbidities">
        <div className="space-y-2">
          <CheckboxRow label="Cancer (active treatment)" checked={cancer} onChange={setCancer} points="+30" />
          <CheckboxRow label="Heart Failure" checked={hf} onChange={setHf} points="+10" />
          <CheckboxRow label="Chronic Lung Disease" checked={lung} onChange={setLung} points="+10" />
        </div>
      </Section>

      <Section title="Vital Signs & Clinical">
        <div className="space-y-2">
          <CheckboxRow label="Heart Rate ≥ 110 bpm" checked={hr110} onChange={setHr110} points="+20" />
          <CheckboxRow label="Systolic BP < 100 mmHg" checked={sbp100} onChange={setSbp100} points="+30" />
          <CheckboxRow label="Respiratory Rate ≥ 30/min" checked={rr30} onChange={setRr30} points="+20" />
          <CheckboxRow label="Temperature < 36°C" checked={temp36} onChange={setTemp36} points="+20" />
          <CheckboxRow label="Altered Mental Status" checked={ams} onChange={setAms} points="+60" />
          <CheckboxRow label="O₂ Saturation < 90%" checked={spo2} onChange={setSpo2} points="+20" />
        </div>
      </Section>

      {result ? (
        <ResultPanel
          tone={result.tone}
          eyebrow="PESI Score"
          value={result.s}
          description={result.cls}
          breakdown={`30-day mortality: ${result.mort}`}
          footnote={result.rec}
        />
      ) : (
        <ResultPanel
          tone="accent"
          eyebrow="PESI Score"
          value="—"
          description="Enter age to calculate"
        />
      )}
    </div>
  );
}
