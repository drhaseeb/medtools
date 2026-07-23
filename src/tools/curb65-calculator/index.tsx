import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

const bunUnitOptions = [
  { value: "mmol" as const, label: "Urea mmol/L" },
  { value: "mgdl" as const, label: "BUN mg/dL" },
];

export default function Curb65Calculator() {
  const [bun, setBun] = useState<number | "">("");
  const [bunUnit, setBunUnit] = useState<"mmol" | "mgdl">("mmol");
  const [rr, setRr] = useState<number | "">("");
  const [sbp, setSbp] = useState<number | "">("");
  const [dbp, setDbp] = useState<number | "">("");
  const [confusion, setConfusion] = useState(false);
  const [age65, setAge65] = useState(false);

  const { score, tone, recTitle, mortality, detail, criteria } = useMemo(() => {
    let score = 0;
    const criteria: string[] = [];

    if (confusion) {
      score++;
      criteria.push("Confusion");
    }

    if (bun !== "") {
      const ureaConv = bunUnit === "mgdl" ? bun / 2.14 : bun;
      if (ureaConv > 7) {
        score++;
        criteria.push("Urea");
      }
    }

    if (rr !== "" && rr >= 30) {
      score++;
      criteria.push("Resp. Rate");
    }

    const bpLow = (sbp !== "" && sbp < 90) || (dbp !== "" && dbp <= 60);
    if (bpLow) {
      score++;
      criteria.push("BP");
    }

    if (age65) {
      score++;
      criteria.push("Age ≥65");
    }

    let tone: Tone;
    let recTitle: string;
    let mortality: string;
    let detail: string;

    if (score <= 1) {
      tone = "good";
      mortality = "0.7–2.1%";
      recTitle = "Low Risk";
      detail = `30-day mortality ${mortality}. Suitable for outpatient treatment with oral antibiotics, provided patient is tolerating orally, not hypoxic, and has adequate social support. Reassess in 48h.`;
    } else if (score === 2) {
      tone = "warn";
      mortality = "~9.2%";
      recTitle = "Intermediate Risk";
      detail = `30-day mortality ${mortality}. Consider short-stay hospital admission or supervised outpatient care. Intravenous antibiotics may be required. Monitor closely.`;
    } else if (score === 3) {
      tone = "warn";
      mortality = "~14.5%";
      recTitle = "High Risk";
      detail = `30-day mortality ${mortality}. Hospital admission recommended. Intravenous antibiotics per local CAP protocol (e.g. co-amoxiclav + macrolide or respiratory fluoroquinolone). Assess for ICU criteria.`;
    } else {
      tone = "bad";
      mortality = "40–57%";
      recTitle = "Severe — Critical Risk";
      detail = `30-day mortality ${mortality}. Urgent hospital admission — consider ICU/HDU. Broad-spectrum IV antibiotics immediately. Monitor for respiratory failure, septic shock. Discuss with senior and ICU team.`;
    }

    return { score, tone, recTitle, mortality, detail, criteria };
  }, [bun, bunUnit, rr, sbp, dbp, confusion, age65]);

  return (
    <div className="space-y-8">
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
          Blood Urea Nitrogen / Urea
        </label>
        <div className="flex gap-2">
          <div className="flex-1">
            <NumberField label="" value={bun} onChange={setBun} step={0.1} placeholder="Enter value" />
          </div>
          <div className="w-40">
            <SegmentedField options={bunUnitOptions} value={bunUnit} onChange={setBunUnit} />
          </div>
        </div>
        <p className="mt-1.5 text-xs text-ink-muted">
          Abnormal if Urea &gt;7 mmol/L (&gt;19 mg/dL BUN)
        </p>
      </div>

      <NumberField
        label="Respiratory Rate (/min)"
        value={rr}
        onChange={setRr}
        placeholder="e.g. 28"
        hint="Abnormal if ≥30/min"
      />

      <Section title="Blood Pressure (mmHg)">
        <div className="grid grid-cols-2 gap-3">
          <NumberField
            label=""
            value={sbp}
            onChange={setSbp}
            placeholder="Systolic"
            hint="Systolic (abnormal <90)"
          />
          <NumberField
            label=""
            value={dbp}
            onChange={setDbp}
            placeholder="Diastolic"
            hint="Diastolic (abnormal ≤60)"
          />
        </div>
      </Section>

      <div className="flex flex-col gap-2">
        <CheckboxRow
          label="New Confusion / Disorientation — AMTS ≤8 or new alteration in consciousness"
          checked={confusion}
          onChange={setConfusion}
          points="+1"
        />
        <CheckboxRow
          label="Age ≥ 65 years"
          checked={age65}
          onChange={setAge65}
          points="+1"
        />
      </div>

      <ResultPanel
        tone={tone}
        eyebrow="CURB-65 Score"
        value={score}
        valueSuffix="/5"
        description={`${recTitle} — 30-day mortality ≈ ${mortality}`}
        breakdown={criteria.length ? `Criteria: ${criteria.join(", ")}` : undefined}
        footnote={detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">CRB-65 (No Blood Test):</strong> If urea
        unavailable, use CRB-65 (score 0 = low risk for GP outpatient; ≥1 =
        consider admission). Always consider O₂ saturations, social factors
        and comorbidities. Hypoxia (SpO₂ &lt;94%) mandates admission
        regardless of CURB-65 score.
      </div>
    </div>
  );
}
