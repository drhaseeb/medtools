import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const ascitesOptions = [
  { value: 1, label: "Absent", badge: "1pt" },
  { value: 2, label: "Mild / Controlled", badge: "2pts" },
  { value: 3, label: "Moderate / Refractory", badge: "3pts" },
];

const heOptions = [
  { value: 1, label: "None", badge: "1pt" },
  { value: 2, label: "Grade I–II", badge: "2pts" },
  { value: 3, label: "Grade III–IV", badge: "3pts" },
];

function scoreBili(val: number | "") {
  if (val === "" || Number.isNaN(val)) return 1;
  if (val < 2) return 1;
  if (val <= 3) return 2;
  return 3;
}
function scoreAlb(val: number | "") {
  if (val === "" || Number.isNaN(val)) return 1;
  if (val > 3.5) return 1;
  if (val >= 2.8) return 2;
  return 3;
}
function scoreInr(val: number | "") {
  if (val === "" || Number.isNaN(val)) return 1;
  if (val < 1.7) return 1;
  if (val <= 2.2) return 2;
  return 3;
}

export default function ChildPughScore() {
  const [bili, setBili] = useState<number | "">("");
  const [alb, setAlb] = useState<number | "">("");
  const [inr, setInr] = useState<number | "">("");
  const [ascites, setAscites] = useState(1);
  const [he, setHe] = useState(1);

  const { total, tone, badge, survival, detail } = useMemo(() => {
    const total =
      scoreBili(bili) + scoreAlb(alb) + scoreInr(inr) + ascites + he;

    let tone: Tone;
    let badge: string;
    let survival: string;
    let detail: string;

    if (total <= 6) {
      tone = "good";
      badge = "Class A — Well Compensated";
      survival = "1-year survival ~100%, 2-year ~85%";
      detail =
        "Elective surgery can be considered with appropriate anaesthetic and hepatology input. No specific drug dose reduction required for most medications. Monitor for decompensation.";
    } else if (total <= 9) {
      tone = "warn";
      badge = "Class B — Significant Compromise";
      survival = "1-year survival ~80%, 2-year ~60%";
      detail =
        "Elective surgery carries significant risk — multidisciplinary discussion required. Most drugs require dose reduction (consult BNF/SPC). Refer for liver transplant assessment. Treat complications (ascites, encephalopathy).";
    } else {
      tone = "bad";
      badge = "Class C — Decompensated";
      survival = "1-year survival ~45%, 2-year ~35%";
      detail =
        "Elective surgery is CONTRAINDICATED — prohibitive operative mortality. Urgent liver transplant assessment if appropriate. Palliative input may be warranted. Hepatotoxic and renally-cleared drugs contraindicated. MELD score for transplant listing.";
    }

    return { total, tone, badge, survival, detail };
  }, [bili, alb, inr, ascites, he]);

  return (
    <div className="space-y-8">
      <Section title="Laboratory Parameters">
        <div className="space-y-4">
          <NumberField
            label="Total Bilirubin (mg/dL)"
            value={bili}
            onChange={setBili}
            step={0.1}
            placeholder="e.g. 2.1"
            hint="1pt: <2 | 2pts: 2–3 | 3pts: >3 mg/dL (PBC/PSC: <4 / 4–10 / >10)"
          />
          <NumberField
            label="Serum Albumin (g/dL)"
            value={alb}
            onChange={setAlb}
            step={0.1}
            placeholder="e.g. 3.2"
            hint="1pt: >3.5 | 2pts: 2.8–3.5 | 3pts: <2.8 g/dL"
          />
          <NumberField
            label="INR (Prothrombin Time)"
            value={inr}
            onChange={setInr}
            step={0.01}
            placeholder="e.g. 1.8"
            hint="1pt: <1.7 | 2pts: 1.7–2.2 | 3pts: >2.2"
          />
        </div>
      </Section>

      <Section title="Clinical Assessment">
        <div className="space-y-4">
          <OptionListField
            label="Ascites"
            options={ascitesOptions}
            value={ascites}
            onChange={setAscites}
          />
          <OptionListField
            label="Hepatic Encephalopathy"
            options={heOptions}
            value={he}
            onChange={setHe}
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="Child-Pugh Score"
        value={total}
        description={badge}
        breakdown={<strong className="text-ink">{survival}</strong>}
        footnote={detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3.5 text-xs text-ink-muted">
        <strong className="text-ink">Dosing Reference:</strong> Many drug
        package inserts require Child-Pugh class for dose adjustment. Class A
        = standard dosing; Class B = reduce dose (check SPC); Class C =
        contraindicated or use only with specialist guidance.
      </div>
    </div>
  );
}
