import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

export default function SirsCalculator() {
  const [temp, setTemp] = useState<number | "">("");
  const [hr, setHr] = useState<number | "">("");
  const [rr, setRr] = useState<number | "">("");
  const [paco2, setPaco2] = useState<number | "">("");
  const [wbc, setWbc] = useState<number | "">("");
  const [bands, setBands] = useState(false);

  const { score, criteria, tone, eyebrow, footnote } = useMemo(() => {
    let score = 0;
    const criteria: string[] = [];

    if (temp !== "" && (temp > 38.0 || temp < 36.0)) {
      score++;
      criteria.push("Temperature");
    }
    if (hr !== "" && hr > 90) {
      score++;
      criteria.push("Heart Rate");
    }

    const rrMet = rr !== "" && rr > 20;
    const paco2Met = paco2 !== "" && paco2 < 32;
    if (rrMet || paco2Met) {
      score++;
      criteria.push(rrMet ? "Respiratory Rate" : "PaCO₂");
    }

    if (bands || (wbc !== "" && (wbc > 12000 || wbc < 4000))) {
      score++;
      criteria.push("WBC");
    }

    let tone: Tone;
    let eyebrow: string;
    let footnote: string;

    if (score >= 2) {
      tone = "bad";
      eyebrow = "SIRS Positive";
      footnote = "Investigate for underlying cause. Consider sepsis workup (cultures, lactate, CRP) per local guidelines.";
    } else {
      tone = "good";
      eyebrow = "SIRS Negative";
      footnote = "Fewer than 2 SIRS criteria met. Consider alternative diagnoses.";
    }

    return { score, criteria, tone, eyebrow, footnote };
  }, [temp, hr, rr, paco2, wbc, bands]);

  return (
    <div className="space-y-8">
      <Section title="Vital Signs">
        <NumberField
          label="Temperature (°C)"
          value={temp}
          onChange={setTemp}
          step={0.1}
          placeholder="e.g. 38.5"
          hint="Abnormal if <36 or >38°C"
        />
        <NumberField
          label="Heart Rate (bpm)"
          value={hr}
          onChange={setHr}
          placeholder="e.g. 95"
          hint="Abnormal if >90 bpm"
        />
        <NumberField
          label="Respiratory Rate (/min)"
          value={rr}
          onChange={setRr}
          placeholder="e.g. 22"
          hint="Abnormal if >20/min"
        />
        <NumberField
          label="PaCO₂ (mmHg) — if not spontaneously breathing"
          value={paco2}
          onChange={setPaco2}
          placeholder="e.g. 28"
          hint="Abnormal if <32 mmHg (alternative to RR criterion)"
        />
      </Section>

      <Section title="Labs">
        <NumberField
          label="WBC Count (cells/mm³)"
          value={wbc}
          onChange={setWbc}
          placeholder="e.g. 13500"
          hint="Abnormal if <4,000 or >12,000 cells/mm³"
        />
        <CheckboxRow
          label=">10% Immature Neutrophil Bands"
          checked={bands}
          onChange={setBands}
          points="+1"
        />
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow={eyebrow}
        value={score}
        valueSuffix="/4"
        description={criteria.length ? `Criteria met: ${criteria.join(", ")}` : "No SIRS criteria met."}
        footnote={footnote}
      />
    </div>
  );
}
