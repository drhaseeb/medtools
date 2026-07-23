import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

const sexOptions = [
  { value: "male" as const, label: "Male (Hb <13 g/dL)" },
  { value: "female" as const, label: "Female (Hb <12 g/dL)" },
];

export default function OrbitScoreCalculator() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [hb, setHb] = useState<number | "">("");
  const [egfr, setEgfr] = useState<number | "">("");
  const [age, setAge] = useState(false);
  const [bleed, setBleed] = useState(false);
  const [antiplat, setAntiplat] = useState(false);

  const hbThresh = sex === "male" ? 13 : 12;
  const hbHint = `Anaemia = Hb <${hbThresh} g/dL (${sex}) — scores 2 points`;

  const { score, tone, recTitle, bleedRate, detail } = useMemo(() => {
    let raw = 0;
    if (age) raw += 1;
    if (hb !== "" && hb < hbThresh) raw += 2;
    if (bleed) raw += 2;
    if (egfr !== "" && egfr < 60) raw += 1;
    if (antiplat) raw += 1;
    const score = Math.min(raw, 7);

    let tone: Tone;
    let recTitle: string;
    let bleedRate: string;
    let detail: string;

    if (score <= 2) {
      tone = "good";
      bleedRate = "2.4";
      recTitle = "Low Bleeding Risk";
      detail =
        "Major bleeding rate ~2.4 per 100 patient-years. Anticoagulate as per CHA₂DS₂-VASc score. Annual review.";
    } else if (score === 3) {
      tone = "warn";
      bleedRate = "4.7";
      recTitle = "Intermediate Bleeding Risk";
      detail =
        "Major bleeding rate ~4.7 per 100 patient-years. Address modifiable factors. Consider DOAC with more favourable bleeding profile (e.g. Apixaban). Review frequently.";
    } else {
      tone = "bad";
      bleedRate = "8.1+";
      recTitle = "High Bleeding Risk";
      detail =
        "Major bleeding rate ~8.1+ per 100 patient-years. Correct modifiable risks urgently. Reassess antiplatelet need. Choose DOAC carefully (Apixaban preferred). Do NOT withhold OAC for stroke prevention without very strong reason — most patients still benefit.";
    }

    return { score, tone, recTitle, bleedRate, detail };
  }, [age, hb, hbThresh, bleed, egfr, antiplat]);

  return (
    <div className="space-y-8">
      <Section title="Sex (for haemoglobin threshold)">
        <SegmentedField options={sexOptions} value={sex} onChange={setSex} />
      </Section>

      <NumberField
        label="Haemoglobin (g/dL)"
        value={hb}
        onChange={setHb}
        step={0.1}
        placeholder="e.g. 11.5"
        hint={hbHint}
      />

      <NumberField
        label="eGFR (mL/min/1.73m²)"
        value={egfr}
        onChange={setEgfr}
        placeholder="e.g. 45"
        hint="Renal impairment = eGFR <60 mL/min/1.73m²"
      />

      <Section title="Risk Factors">
        <div className="flex flex-col gap-2">
          <CheckboxRow label="Age ≥ 74 years" checked={age} onChange={setAge} points="+1" />
          <CheckboxRow
            label="Prior Bleeding History (GI bleed, ICH or other major bleed)"
            checked={bleed}
            onChange={setBleed}
            points="+2"
          />
          <CheckboxRow
            label="Antiplatelet Use (Aspirin, Clopidogrel, Ticagrelor, etc.)"
            checked={antiplat}
            onChange={setAntiplat}
            points="+1"
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="ORBIT Score"
        value={score}
        valueSuffix="/7"
        description={`${recTitle} — ~${bleedRate} major bleeds/100 pt-yrs`}
        footnote={detail}
      />

      <div className="rounded-xl border border-bad/30 bg-bad-soft px-4 py-3 text-xs leading-relaxed text-bad">
        <strong>Important:</strong> A high ORBIT score does NOT automatically
        contraindicate anticoagulation. Use it to identify and correct
        modifiable risks (control BP, stop unnecessary NSAIDs/Aspirin, treat
        anaemia). Net clinical benefit of OAC usually favours treatment even
        at high bleeding risk.
      </div>
    </div>
  );
}
