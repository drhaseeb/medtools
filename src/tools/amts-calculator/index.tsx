import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";

const questions = [
  {
    key: "q1",
    label: "1. Age",
    sub: 'Ask: "What is your age?" — Exact age required',
  },
  {
    key: "q2",
    label: "2. Time (to nearest hour)",
    sub: 'Ask: "What time is it?" — Must be within 1 hour',
  },
  {
    key: "q3",
    label: "3. Address for recall (given at start of test)",
    sub: 'Give address at start: "42 West Street." Recall at end.',
  },
  {
    key: "q4",
    label: "4. Year",
    sub: 'Ask: "What year is it?" — Exact year required',
  },
  {
    key: "q5",
    label: "5. Name of Institution / Place",
    sub: 'Ask: "What is the name of this place (hospital/clinic)?" or "What type of place is this?"',
  },
  {
    key: "q6",
    label: "6. Recognition of Two Persons",
    sub: "Can patient identify two people (e.g. nurse, doctor) by their role?",
  },
  {
    key: "q7",
    label: "7. Date of Birth",
    sub: 'Ask: "What is your date of birth?" — Day and month required',
  },
  {
    key: "q8",
    label: "8. Year of World War I or II",
    sub: 'Ask: "What year did World War I/II begin?" — 1914 or 1939 accepted',
  },
  {
    key: "q9",
    label: "9. Name of Current Head of State / Monarch",
    sub: 'Ask: "Who is the current Head of State or Monarch?"',
  },
  {
    key: "q10",
    label: "10. Count Backwards from 20 to 1",
    sub: "Patient must complete the sequence without error or prompting",
  },
] as const;

export default function AmtsCalculator() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const { score, tone, title, detail } = useMemo(() => {
    const score = questions.filter((q) => checked[q.key]).length;

    let tone: Tone;
    let title: string;
    let detail: string;

    if (score >= 8) {
      tone = "good";
      title = `Normal Cognition (${score}/10)`;
      detail =
        "AMTS ≥8 is considered normal. No significant cognitive impairment detected. If clinical concern remains, consider formal assessment with MoCA or MMSE.";
    } else if (score >= 6) {
      tone = "warn";
      title = `Mild–Moderate Cognitive Impairment (${score}/10)`;
      detail =
        "Possible cognitive impairment. Investigate for acute reversible causes (delirium screen: sepsis, metabolic, medications). Refer to memory service for full assessment if subacute/chronic. Document baseline.";
    } else {
      tone = "bad";
      title = `Significant Cognitive Impairment (${score}/10)`;
      detail =
        "Severely impaired. Urgent assessment for delirium (4AT score). Check: O₂ sats, glucose, Na⁺, Ca²⁺, FBC, U&E, LFTs, TFTs, urine dip, CXR, drug review. Ensure patient safety. Collateral history essential.";
    }

    return { score, tone, title, detail };
  }, [checked]);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-accent">Administration:</strong> Ask each
        question verbally. Mark correct (1pt) or incorrect (0pt). All
        questions must be asked in a standardised manner. Do not prompt or
        assist. Score 1 point for each correct answer.
      </div>

      <div className="flex flex-col gap-2">
        {questions.map((q) => (
          <CheckboxRow
            key={q.key}
            label={`${q.label} — ${q.sub}`}
            checked={!!checked[q.key]}
            onChange={(v) => setChecked((prev) => ({ ...prev, [q.key]: v }))}
            points="1"
          />
        ))}
      </div>

      <ResultPanel
        tone={tone}
        eyebrow="AMTS Score"
        value={score}
        valueSuffix="/ 10"
        description={title}
        footnote={detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Important:</strong> AMTS screens for
        cognitive impairment but is NOT diagnostic. A low score requires
        further assessment (MMSE or MoCA) and investigation of reversible
        causes (UTI, hyponatraemia, hypoxia, medication, constipation).
        Acute confusion (delirium) must be distinguished from dementia via
        collateral history.
      </div>
    </div>
  );
}
