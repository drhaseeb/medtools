import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

// --- Growth centile math, ported verbatim from the source calculator ---

function erf(x: number) {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const y =
    1 -
    (0.254829592 * t -
      0.284496736 * t ** 2 +
      1.421413741 * t ** 3 -
      1.453152027 * t ** 4 +
      1.061405429 * t ** 5) *
      Math.exp(-x * x);
  return x >= 0 ? y : -y;
}

function approxCentile(val: number, p50: number, sd: number) {
  const z = (val - p50) / sd;
  const c = 0.5 * (1 + erf(z / Math.sqrt(2)));
  return Math.round(c * 100);
}

// Static class lookups (Tailwind needs literal class names, not interpolated ones)
const toneText: Record<Tone, string> = {
  good: "text-good",
  warn: "text-warn",
  bad: "text-bad",
  accent: "text-accent",
};
const toneBg: Record<Tone, string> = {
  good: "bg-good",
  warn: "bg-warn",
  bad: "bg-bad",
  accent: "bg-accent",
};

type RefPoint = { a: number; m: number; s: number };
type Sex = "male" | "female";

// Reference medians & SDs (approximate UK90/WHO merged — for illustration)
const weightRef: Record<Sex, RefPoint[]> = {
  male: [
    { a: 0, m: 3.35, s: 0.42 },
    { a: 6, m: 7.9, s: 1.0 },
    { a: 12, m: 10.2, s: 1.2 },
    { a: 24, m: 12.5, s: 1.5 },
    { a: 36, m: 14.5, s: 1.8 },
    { a: 60, m: 18.3, s: 2.5 },
    { a: 84, m: 22.0, s: 3.5 },
    { a: 120, m: 32.5, s: 6.0 },
    { a: 156, m: 50, s: 10 },
    { a: 192, m: 65, s: 12 },
  ],
  female: [
    { a: 0, m: 3.23, s: 0.4 },
    { a: 6, m: 7.3, s: 0.9 },
    { a: 12, m: 9.5, s: 1.1 },
    { a: 24, m: 12.0, s: 1.4 },
    { a: 36, m: 14.1, s: 1.7 },
    { a: 60, m: 17.7, s: 2.4 },
    { a: 84, m: 21.5, s: 3.3 },
    { a: 120, m: 32.5, s: 6.5 },
    { a: 156, m: 50, s: 11 },
    { a: 192, m: 60, s: 11 },
  ],
};

const heightRef: Record<Sex, RefPoint[]> = {
  male: [
    { a: 0, m: 49.9, s: 2.0 },
    { a: 6, m: 67.6, s: 2.5 },
    { a: 12, m: 75.7, s: 2.7 },
    { a: 24, m: 87.1, s: 3.2 },
    { a: 36, m: 95.2, s: 3.8 },
    { a: 60, m: 110.0, s: 4.4 },
    { a: 84, m: 121.9, s: 5.0 },
    { a: 120, m: 137.5, s: 6.0 },
    { a: 156, m: 162, s: 8 },
    { a: 192, m: 175, s: 7 },
  ],
  female: [
    { a: 0, m: 49.1, s: 1.9 },
    { a: 6, m: 65.7, s: 2.4 },
    { a: 12, m: 74.0, s: 2.6 },
    { a: 24, m: 85.7, s: 3.0 },
    { a: 36, m: 94.1, s: 3.6 },
    { a: 60, m: 109.4, s: 4.3 },
    { a: 84, m: 121.1, s: 5.0 },
    { a: 120, m: 138.6, s: 6.2 },
    { a: 156, m: 160, s: 6 },
    { a: 192, m: 164, s: 6 },
  ],
};

function getRef(table: Record<Sex, RefPoint[]>, sex: Sex, ageMonths: number) {
  const arr = table[sex];
  let best = arr[0];
  for (const r of arr) {
    if (r.a <= ageMonths) best = r;
    else break;
  }
  return best;
}

// --- Milestones reference, ported verbatim from the source calculator ---

const milestoneAges = [6, 12, 18, 24, 36, 60] as const;

const milestones: Record<
  (typeof milestoneAges)[number],
  { motor: string[]; social: string[]; language: string[]; red: string[] }
> = {
  6: {
    motor: ["Rolls from back to front", "Sits with support", "Bears weight on legs when held upright"],
    social: ["Smiles responsively", "Laughs", "Recognises familiar faces"],
    language: ["Babbles (ba, ga, da)", "Responds to name", "Turns toward sound"],
    red: ["No smiling by 3 months", "Not bearing any weight", "No babbling"],
  },
  12: {
    motor: ["Pulls to stand", "Cruises along furniture", "May take first steps"],
    social: ["Waves bye-bye", "Points to objects of interest", "Separation anxiety appears"],
    language: ['Says 1–2 words ("mama","dada")', 'Understands "no"', "Follows simple commands"],
    red: ["Not standing with support", "No gestures (pointing, waving)", "No words at all", "Loss of previously acquired skills"],
  },
  18: {
    motor: ["Walks independently", "Climbs stairs with help", "Throws ball underhand"],
    social: ["Parallel play", "Uses spoon", "Helps with dressing"],
    language: ["10+ words", "Points to body parts", "Follows 2-step commands"],
    red: ["Not walking independently", "Fewer than 6 words", "No pointing to show interest", "Regression of skills"],
  },
  24: {
    motor: ["Runs", "Climbs without help", "Kicks a ball"],
    social: ["Symbolic play", "Plays alongside others", "Tantrums common"],
    language: ["50+ words", "2-word phrases", "Names familiar pictures"],
    red: ["No 2-word phrases", "Not running", "Cannot follow 2-step instructions", "Loss of skills"],
  },
  36: {
    motor: ["Rides tricycle", "Stands on one foot briefly", "Catches large ball"],
    social: ["Takes turns in play", "Shows affection without prompting", "Aware of others' feelings"],
    language: ["3-word sentences", "Strangers understand ~75% of speech", "Uses pronouns (I, me, you)"],
    red: ["Cannot walk up stairs", "Strangers cannot understand most speech", "Cannot follow 3-part commands"],
  },
  60: {
    motor: ["Hops on one foot", "Skips", "Draws person with 6+ parts"],
    social: ["Wants to please friends", "Understands rules in games", "Shows independence"],
    language: ["Clear speech understood by all", "Tells stories", "Vocabulary 1000+ words"],
    red: ["Cannot hop", "Cannot copy shapes", "Cannot distinguish fantasy from reality", "Marked difficulty with friends"],
  },
};

function milestoneAgeLabel(age: number) {
  if (age >= 60) return "5 years";
  if (age === 36) return "3 years";
  return `${age} months`;
}

export default function ChildDevelopmentTracker() {
  const [tab, setTab] = useState<"growth" | "milestones">("growth");

  // Growth tab
  const [ageY, setAgeY] = useState<number | "">("");
  const [ageM, setAgeM] = useState<number | "">("");
  const [sex, setSex] = useState<Sex>("male");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [hc, setHc] = useState<number | "">("");

  // Milestones tab
  const [msAge, setMsAge] = useState<(typeof milestoneAges)[number]>(6);

  const growth = useMemo(() => {
    const totalM = (ageY === "" ? 0 : ageY) * 12 + (ageM === "" ? 0 : ageM);
    const hasWeight = weight !== "" && !Number.isNaN(weight);
    const hasHeight = height !== "" && !Number.isNaN(height);

    if (!totalM || (!hasWeight && !hasHeight)) return null;

    const flags: string[] = [];

    let weightRow: { centile: number; tone: Tone; note: string } | null = null;
    if (hasWeight) {
      const ref = getRef(weightRef, sex, totalM);
      const c = approxCentile(weight as number, ref.m, ref.s);
      const clamped = Math.max(1, Math.min(99, c));
      let tone: Tone = "good";
      let note = "";
      if (c < 2) {
        tone = "bad";
        note = "⚠ Below 2nd centile — possible faltering growth";
        flags.push("Weight below 2nd centile");
      } else if (c < 9) {
        tone = "warn";
        note = "Below 9th centile — monitor closely";
      } else if (c > 91) {
        tone = "warn";
        note = "⚠ Above 91st centile — assess for obesity risk";
        flags.push("Weight above 91st centile");
      }
      weightRow = { centile: clamped, tone, note };
    }

    let heightRow: { centile: number; tone: Tone; note: string } | null = null;
    let bmi: number | null = null;
    if (hasHeight) {
      const ref = getRef(heightRef, sex, totalM);
      const c = approxCentile(height as number, ref.m, ref.s);
      const clamped = Math.max(1, Math.min(99, c));
      let tone: Tone = "good";
      let note = "";
      if (c < 2) {
        tone = "bad";
        note = "⚠ Below 2nd centile — assess for short stature";
        flags.push("Height below 2nd centile");
      } else if (c > 98) {
        tone = "warn";
        note = "⚠ Above 98th centile — assess for tall stature";
      }
      heightRow = { centile: clamped, tone, note };

      if (hasWeight && (height as number) > 0) {
        const hM = (height as number) / 100;
        bmi = (weight as number) / (hM * hM);
      }
    }

    return { ageY: ageY || 0, ageM: ageM || 0, totalM, sex, weightRow, heightRow, bmi, flags };
  }, [ageY, ageM, sex, weight, height]);

  const ms = milestones[msAge];

  return (
    <div className="space-y-8">
      <SegmentedField
        options={[
          { value: "growth", label: "Growth Centiles" },
          { value: "milestones", label: "Milestone Flags" },
        ]}
        value={tab}
        onChange={setTab}
      />

      {tab === "growth" && (
        <div className="space-y-8">
          <Section title="Age & Sex">
            <div className="grid grid-cols-2 gap-3">
              <NumberField label="Age (years)" value={ageY} onChange={setAgeY} placeholder="Years" min={0} max={18} />
              <NumberField label="Age (months)" value={ageM} onChange={setAgeM} placeholder="Months (0-11)" min={0} max={11} />
            </div>
            <div className="mt-4">
              <SegmentedField
                label="Sex"
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
                value={sex}
                onChange={setSex}
              />
            </div>
          </Section>

          <Section title="Measurements">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <NumberField label="Weight (kg)" value={weight} onChange={setWeight} step={0.1} placeholder="e.g. 15.2" />
                <NumberField label="Height / Length (cm)" value={height} onChange={setHeight} step={0.1} placeholder="e.g. 95.0" />
              </div>
              <NumberField
                label="Head Circumference (cm)"
                value={hc}
                onChange={setHc}
                step={0.1}
                placeholder="e.g. 48.5"
                hint="Optional, under 2 years"
              />
            </div>
          </Section>

          {growth ? (
            <ResultPanel
              tone={growth.flags.length ? "bad" : "good"}
              eyebrow={`Growth Assessment — ${growth.ageY}y ${growth.ageM}m, ${sex.charAt(0).toUpperCase() + sex.slice(1)}`}
              value={growth.flags.length ? "Action Required" : "Normal"}
              breakdown={
                <div className="space-y-3">
                  {growth.weightRow && (
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-ink-muted">Weight: {weight}kg</span>
                        <span className={`text-sm font-bold ${toneText[growth.weightRow.tone]}`}>
                          ~{growth.weightRow.centile}th centile
                        </span>
                      </div>
                      <div className="my-1.5 h-1.5 overflow-hidden rounded-full bg-surface-2">
                        <div
                          className={`h-full rounded-full ${toneBg[growth.weightRow.tone]}`}
                          style={{ width: `${growth.weightRow.centile}%` }}
                        />
                      </div>
                      {growth.weightRow.note && (
                        <div className={`text-xs ${toneText[growth.weightRow.tone]}`}>{growth.weightRow.note}</div>
                      )}
                    </div>
                  )}

                  {growth.heightRow && (
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-ink-muted">Height: {height}cm</span>
                        <span className={`text-sm font-bold ${toneText[growth.heightRow.tone]}`}>
                          ~{growth.heightRow.centile}th centile
                        </span>
                      </div>
                      <div className="my-1.5 h-1.5 overflow-hidden rounded-full bg-surface-2">
                        <div
                          className={`h-full rounded-full ${toneBg[growth.heightRow.tone]}`}
                          style={{ width: `${growth.heightRow.centile}%` }}
                        />
                      </div>
                      {growth.heightRow.note && (
                        <div className={`text-xs ${toneText[growth.heightRow.tone]}`}>{growth.heightRow.note}</div>
                      )}
                    </div>
                  )}

                  {growth.bmi !== null && (
                    <div className="rounded-lg border border-line bg-surface px-3 py-2.5">
                      <span className="text-sm font-semibold text-ink-muted">BMI: </span>
                      <span className="text-base font-bold text-accent">{growth.bmi.toFixed(1)} kg/m²</span>
                      <div className="mt-1 text-xs text-ink-muted">
                        Use BMI-for-age charts (UK90) for children — not adult BMI thresholds
                      </div>
                    </div>
                  )}
                </div>
              }
              footnote={
                <>
                  {growth.flags.length ? (
                    <>
                      <strong className="text-bad">Action Required:</strong>{" "}
                      {growth.flags.join("; ")}. Review growth chart
                      trajectory, dietary history, and social circumstances.
                      Consider referral to paediatrics or dietetics.
                    </>
                  ) : (
                    "Measurements within normal centile range. Plot on growth chart and reassess at next scheduled review."
                  )}
                  <div className="mt-3 text-xs text-ink-muted">
                    These centiles are approximations. Always plot on
                    official UK-WHO growth charts (RCPCH). Faltering growth
                    = weight crossing ≥2 centile lines downward.
                  </div>
                </>
              }
            />
          ) : (
            <ResultPanel tone="accent" eyebrow="Growth Assessment" value="—" description="Enter age and at least one measurement (weight or height)" />
          )}
        </div>
      )}

      {tab === "milestones" && (
        <div className="space-y-8">
          <Section title="Child's Age">
            <OptionListField
              options={milestoneAges.map((a) => ({ value: a, label: milestoneAgeLabel(a) }))}
              value={msAge}
              onChange={setMsAge}
            />
          </Section>

          <div className="space-y-6">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-good">Gross & Fine Motor</div>
              <ul className="space-y-1">
                {ms.motor.map((item) => (
                  <li key={item} className="border-b border-line/50 py-1 text-sm text-ink-muted last:border-b-0">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Social & Emotional</div>
              <ul className="space-y-1">
                {ms.social.map((item) => (
                  <li key={item} className="border-b border-line/50 py-1 text-sm text-ink-muted last:border-b-0">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Language & Communication</div>
              <ul className="space-y-1">
                {ms.language.map((item) => (
                  <li key={item} className="border-b border-line/50 py-1 text-sm text-ink-muted last:border-b-0">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ResultPanel
            tone="bad"
            eyebrow="Red Flag Concerns — Refer to Paediatrics"
            value={milestoneAgeLabel(msAge)}
            description="Expected Milestones Reference"
            breakdown={
              <ul className="space-y-1">
                {ms.red.map((r) => (
                  <li key={r}>⚠ {r}</li>
                ))}
              </ul>
            }
            footnote="Development is a spectrum. Always use clinical judgment. Loss of previously acquired skills at any age is an urgent red flag requiring immediate assessment."
          />
        </div>
      )}
    </div>
  );
}
