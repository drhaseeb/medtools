import { useMemo, useState } from "react";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const dozeOptions = [
  { value: 0, label: "Would never doze", badge: "0" },
  { value: 1, label: "Slight chance of dozing", badge: "1" },
  { value: 2, label: "Moderate chance of dozing", badge: "2" },
  { value: 3, label: "High chance of dozing", badge: "3" },
];

const questions = [
  "Sitting and reading",
  "Watching TV",
  "Sitting inactive in a public place (e.g. theatre, meeting)",
  "As a passenger in a car for an hour without a break",
  "Lying down to rest in the afternoon when circumstances permit",
  "Sitting and talking to someone",
  "Sitting quietly after lunch without alcohol",
  "In a car, while stopped for a few minutes in traffic",
];

export default function EpworthSleepinessScale() {
  const [answers, setAnswers] = useState<number[]>(Array(8).fill(0));

  const setAnswer = (index: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const { total, tone, title, rec } = useMemo(() => {
    const total = answers.reduce((sum, v) => sum + v, 0);

    let tone: Tone;
    let title: string;
    let rec: string;

    if (total <= 7) {
      tone = "good";
      title = "Normal Daytime Sleepiness";
      rec = "Score within normal range. No excessive daytime sleepiness. Consider sleep hygiene advice if patient reports poor sleep quality or fatigue.";
    } else if (total <= 10) {
      tone = "accent";
      title = "Mild Sleepiness";
      rec = "Mildly elevated. Assess sleep hygiene, sleep duration (aim ≥7h), caffeine use and screen time. Exclude lifestyle factors before further investigation.";
    } else if (total <= 15) {
      tone = "warn";
      title = "Moderate Excessive Daytime Sleepiness";
      rec = "Moderate EDS. Consider referral for sleep study (polysomnography or home oximetry) to exclude Obstructive Sleep Apnoea (OSA). Assess for narcolepsy, depression and hypothyroidism. Advise no driving if unsafe.";
    } else {
      tone = "bad";
      title = "Severe Excessive Daytime Sleepiness";
      rec = "Severe EDS. Urgent investigation for OSA (especially if BMI >30, hypertension, or witnessed apnoeas). Immediate driving advice (patient must not drive until assessed). NICE NG202: refer for sleep study. Polysomnography or ambulatory oximetry required.";
    }

    return { total, tone, title, rec };
  }, [answers]);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-accent/25 bg-accent-soft px-4 py-3.5 text-sm text-ink-muted">
        <strong className="text-accent">Instructions:</strong> For each
        situation, choose the most appropriate number using the scale: 0 =
        Would never doze, 1 = Slight chance, 2 = Moderate chance, 3 = High
        chance of dozing.
      </div>

      {questions.map((q, i) => (
        <Section key={q} title={`${i + 1}. ${q}`}>
          <OptionListField
            options={dozeOptions}
            value={answers[i]}
            onChange={(v) => setAnswer(i, v)}
          />
        </Section>
      ))}

      <ResultPanel
        tone={tone}
        eyebrow="ESS Score"
        value={total}
        valueSuffix="/24"
        description={title}
        footnote={rec}
      />
    </div>
  );
}
