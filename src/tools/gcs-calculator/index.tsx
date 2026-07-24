import { useMemo, useState } from "react";
import { InfoPopover } from "@/kit/InfoPopover";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const eyeOptions = [
  { value: 4, label: "Spontaneous — opens without stimulation", badge: "E4" },
  { value: 3, label: "To Voice — opens to verbal command", badge: "E3" },
  { value: 2, label: "To Pressure / Pain — opens to noxious stimulus", badge: "E2" },
  { value: 1, label: "None — no eye opening", badge: "E1" },
];

const verbalOptions = [
  { value: 5, label: "Orientated — knows person, place, time", badge: "V5" },
  { value: 4, label: "Confused — conversational but disoriented", badge: "V4" },
  { value: 3, label: "Words — recognisable words, no sentences", badge: "V3" },
  { value: 2, label: "Sounds — moans or groans only", badge: "V2" },
  { value: 1, label: "None — no verbal response", badge: "V1" },
  { value: 0, label: "Intubated (T) — cannot be assessed", badge: "VT" },
];

const motorOptions = [
  { value: 6, label: "Obeys Commands — follows 2-part command", badge: "M6" },
  { value: 5, label: "Localising — moves limb to remove painful stimulus", badge: "M5" },
  { value: 4, label: "Normal Flexion — withdraws from pain", badge: "M4" },
  { value: 3, label: "Abnormal Flexion — decorticate posturing (arms flex, wrists flex)", badge: "M3" },
  { value: 2, label: "Extension — decerebrate posturing (arms extend + internally rotate)", badge: "M2" },
  { value: 1, label: "None — no motor response (flaccid)", badge: "M1" },
];

export default function GcsCalculator() {
  const [eye, setEye] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motor, setMotor] = useState(6);

  const { total, intubated, tone, severity, recommendation } = useMemo(() => {
    const intubated = verbal === 0;
    const total = eye + (intubated ? 1 : verbal) + motor;

    let tone: Tone;
    let severity: string;
    let recommendation: string;

    if (total >= 13) {
      tone = "good";
      severity = "Mild / Minor TBI";
      recommendation =
        "Minor head injury or mild TBI. Assess with Canadian CT Head Rule or PECARN (paediatric). Monitor for deterioration. Patient may be suitable for discharge with head injury advice if criteria met.";
    } else if (total >= 9) {
      tone = "warn";
      severity = "Moderate TBI";
      recommendation =
        "Moderate TBI. CT Head required urgently. Admit for neurological observation. Assess for surgical lesion. Neurosurgery referral if indicated.";
    } else {
      tone = "bad";
      severity = "Severe TBI / Coma (GCS ≤8)";
      recommendation =
        "SEVERE — Patient is in coma. Secure airway immediately (RSI/intubation). CT Head urgently. Neurosurgery referral. ICP monitoring may be required. Target SpO₂ >95%, MAP >80 mmHg, head of bed 30°.";
      if (total <= 4) {
        recommendation += " Extremely poor prognosis. Discuss goals of care with family.";
      }
    }

    return { total, intubated, tone, severity, recommendation };
  }, [eye, verbal, motor]);

  return (
    <div className="space-y-8">
      <Section title="E — Eye Opening">
        <OptionListField options={eyeOptions} value={eye} onChange={setEye} />
      </Section>

      <Section title="V — Verbal Response">
        <OptionListField options={verbalOptions} value={verbal} onChange={setVerbal} />
      </Section>

      <Section
        title={
          <>
            M — Best Motor Response
            <InfoPopover title="Telling the responses apart">
              Test with a central painful stimulus (trapezius pinch or supraorbital pressure) rather than a
              peripheral one, since a peripheral stimulus can produce a spinal withdrawal that's easily
              mistaken for localizing. <strong className="text-ink">Localizing:</strong> the limb crosses the
              midline or reaches up toward/past the chin to try to remove the stimulus — a purposeful,
              targeted movement. <strong className="text-ink">Normal flexion (withdrawal):</strong> the limb
              pulls away from the stimulus but without reaching toward it. <strong className="text-ink">
              Abnormal flexion (decorticate):</strong> slow arm flexion with wrist/finger flexion held to the
              chest, usually with leg extension. <strong className="text-ink">Extension (decerebrate):
              </strong> arm extension with internal rotation of the shoulder/forearm, usually with leg
              extension — the most severe patterned response.
            </InfoPopover>
          </>
        }
      >
        <OptionListField options={motorOptions} value={motor} onChange={setMotor} />
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="GCS Total"
        value={`${total}${intubated ? "T" : ""}`}
        valueSuffix="/15"
        description={severity}
        breakdown={`E${eye} + V${intubated ? "T" : verbal} + M${motor}`}
        footnote={
          <>
            <strong className="text-ink">GCS &lt;8 = Intubate:</strong>{" "}
            {recommendation}
          </>
        }
      />
    </div>
  );
}
