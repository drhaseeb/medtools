import { useMemo, useState } from "react";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

// Each option's `value` is the response index (0=Never .. 4=Very Often), unique
// per row so selection highlighting works. Scoring is derived separately below
// per the ASRS Part A rule: Q1-3 symptomatic at "Sometimes" (index>=2), Q4-6
// symptomatic at "Often" (index>=3).
const lowThresholdOptions = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes", badge: "+1" },
  { value: 3, label: "Often", badge: "+1" },
  { value: 4, label: "Very Often", badge: "+1" },
];

const highThresholdOptions = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often", badge: "+1" },
  { value: 4, label: "Very Often", badge: "+1" },
];

const questions = [
  {
    text: "1. How often do you have trouble wrapping up the final details of a project after the challenging parts have been done?",
    options: lowThresholdOptions,
    symptomaticFrom: 2,
  },
  {
    text: "2. How often do you have difficulty getting things in order when you have to do a task that requires organisation?",
    options: lowThresholdOptions,
    symptomaticFrom: 2,
  },
  {
    text: "3. How often do you have problems remembering appointments or obligations?",
    options: lowThresholdOptions,
    symptomaticFrom: 2,
  },
  {
    text: "4. When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    options: highThresholdOptions,
    symptomaticFrom: 3,
  },
  {
    text: "5. How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    options: highThresholdOptions,
    symptomaticFrom: 3,
  },
  {
    text: "6. How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    options: highThresholdOptions,
    symptomaticFrom: 3,
  },
];

export default function AdhdAssessmentTool() {
  const [tab, setTab] = useState<"parta" | "full">("parta");
  const [responses, setResponses] = useState<number[]>(Array(6).fill(0));

  const setResponse = (index: number, value: number) => {
    setResponses((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const { tone, title, rec } = useMemo(() => {
    let score = 0;
    questions.forEach((q, i) => {
      if (responses[i] >= q.symptomaticFrom) score += 1;
    });

    let tone: Tone;
    let title: string;
    let rec: string;

    if (score >= 4) {
      tone = "bad";
      title = `Positive Screen (${score}/6 symptoms)`;
      rec = "Highly consistent with adult ADHD (sensitivity ~68%, specificity ~99%). A positive ASRS Part A screen warrants full clinical assessment by a psychiatrist or specialist with experience in ADHD. Do not self-diagnose. Discuss with your GP for referral. NICE NG87 recommends comprehensive assessment for any adult with suspected ADHD.";
    } else if (score >= 2) {
      tone = "warn";
      title = `Intermediate Screen (${score}/6 symptoms)`;
      rec = "Some symptoms present but below threshold. Consider completing the full 18-item ASRS. Discuss with GP if these symptoms cause significant impairment in work, relationships or daily life.";
    } else {
      tone = "good";
      title = `Screen Negative (${score}/6 symptoms)`;
      rec = "Responses not highly consistent with ADHD diagnosis. If you still have significant concerns about attention, organisation or hyperactivity, discuss with your GP. Other conditions (anxiety, depression, sleep disorders) can present similarly.";
    }

    return { score, tone, title, rec };
  }, [responses]);

  return (
    <div className="space-y-8">
      <SegmentedField
        options={[
          { value: "parta", label: "Part A — 6-Item Screener" },
          { value: "full", label: "Full 18-Item Scale" },
        ]}
        value={tab}
        onChange={setTab}
      />

      <div className="rounded-xl border border-accent/25 bg-accent-soft px-4 py-3.5 text-sm text-ink-muted">
        <strong className="text-accent">Instructions:</strong> Answer based
        on how you have felt and conducted yourself{" "}
        <strong className="text-ink">over the past 6 months</strong>. Do not
        answer based on how you are today or how you were as a child.
      </div>

      {tab === "parta" ? (
        <div className="space-y-8">
          <div className="rounded-xl bg-surface-2 px-4 py-3 text-sm text-ink-muted">
            Questions 1–6: Shaded boxes (Sometimes/Often/Very Often) are
            considered symptomatic. ≥4 shaded responses = highly consistent
            with ADHD.
          </div>

          {questions.map((q, i) => (
            <Section key={q.text} title={q.text}>
              <OptionListField
                options={q.options}
                value={responses[i]}
                onChange={(v) => setResponse(i, v)}
              />
            </Section>
          ))}

          <ResultPanel
            tone={tone}
            eyebrow="ASRS Part A Result"
            value={title}
            footnote={rec}
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-sm text-ink-muted">
            Complete all 18 items. Part B questions continue from Part A.
            Scoring: Never=0, Rarely=0, Sometimes=1, Often=1, Very Often=2
            (simplified total out of 36).
          </div>
          <div className="rounded-xl bg-surface-2 px-4 py-3 text-sm text-ink-muted">
            Items 7–18 — Part B (additional inattention & hyperactivity
            symptoms)
          </div>
          <div className="rounded-xl border border-line bg-surface p-5 text-center text-sm text-ink-muted">
            Complete the{" "}
            <strong className="text-ink">6-Item Screener (Part A)</strong>{" "}
            first. If positive, a formal full 18-item assessment and
            comprehensive clinical interview are required by a qualified
            clinician before any ADHD diagnosis can be made. The full ASRS
            can be downloaded from who.int.
          </div>
        </div>
      )}

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3.5 text-xs text-ink-muted">
        <strong className="text-ink">Important:</strong> ASRS is a screening
        tool only. A positive screen is NOT a diagnosis of ADHD. Formal
        diagnosis requires comprehensive psychiatric/psychological
        assessment, confirming childhood symptom onset, functional
        impairment in ≥2 settings, and exclusion of alternative diagnoses
        (anxiety, depression, ASD, bipolar).
      </div>
    </div>
  );
}
