import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const redFlagItems = [
  {
    key: "systemic",
    label: "Systemic symptoms",
    sub: "Fever, rash, neck stiffness, or unexplained weight loss",
  },
  {
    key: "neuro",
    label: "Neurological signs",
    sub: "New confusion, ataxia/balance problems, focal weakness, or vision loss",
  },
  {
    key: "thunderclap",
    label: "Thunderclap onset",
    sub: "Reaches maximal intensity within seconds to a few minutes",
  },
  {
    key: "wakesSleep",
    label: "Wakes the child from sleep",
    sub: "Not simply present on waking — specifically wakes them up",
  },
  {
    key: "morningVomit",
    label: "Early-morning vomiting",
    sub: "Vomiting immediately on waking, without a preceding gastrointestinal illness",
  },
  {
    key: "positional",
    label: "Positional or Valsalva-triggered",
    sub: "Worse lying flat, or triggered/worsened by coughing, sneezing, or straining",
  },
  {
    key: "progressive",
    label: "Progressive pattern",
    sub: "Clear increase in frequency or severity over recent weeks",
  },
  {
    key: "youngAge",
    label: "Age under 6 with a new, persistent headache",
    sub: "New headache pattern in a pre-school child warrants a lower threshold for review",
  },
] as const;

const locationOptions = [
  { value: "bilateral" as const, label: "Bilateral / frontotemporal (both sides)" },
  { value: "unilateral" as const, label: "Unilateral (one side only)" },
];

const qualityOptions = [
  { value: "pulsating" as const, label: "Pulsating / throbbing / beating" },
  { value: "pressing" as const, label: "Pressing / tightening / band-like (non-pulsating)" },
];

const severityOptions = [
  { value: "mild" as const, label: "Mild — does not stop daily activities" },
  { value: "modsev" as const, label: "Moderate to severe — inhibits or stops activity" },
];

const activityOptions = [
  { value: "aggravated" as const, label: "Worsened by routine activity (e.g. climbing stairs, running)" },
  { value: "notAggravated" as const, label: "Not worsened (or improved) by activity" },
];

type Location = "bilateral" | "unilateral" | "";
type Quality = "pulsating" | "pressing" | "";
type Severity = "mild" | "modsev" | "";
type Activity = "aggravated" | "notAggravated" | "";

export default function PediatricHeadacheAssessmentTool() {
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [location, setLocation] = useState<Location>("");
  const [quality, setQuality] = useState<Quality>("");
  const [severity, setSeverity] = useState<Severity>("");
  const [activity, setActivity] = useState<Activity>("");
  const [nausea, setNausea] = useState(false);
  const [photophobia, setPhotophobia] = useState(false);
  const [phonophobia, setPhonophobia] = useState(false);

  const activeFlags = redFlagItems.filter((f) => flags[f.key]);

  const result = useMemo(() => {
    if (activeFlags.length > 0) {
      return {
        tone: "bad" as Tone,
        title: "Red Flag Present — Urgent Evaluation Required",
        detail:
          "One or more red-flag features were selected. These features are associated with secondary headache causes (e.g. raised intracranial pressure, mass lesion, infection) and should not be worked up as a primary headache disorder in primary care alone. Arrange urgent medical/neurological evaluation, which may include neuroimaging.",
        ready: true,
      };
    }

    if (!location || !quality || !severity || !activity) {
      return {
        tone: "accent" as Tone,
        title: "Complete All Fields",
        detail: "Answer all four pain-characteristic questions below to generate a classification.",
        ready: false,
      };
    }

    let migraineFeatures = 0;
    if (quality === "pulsating") migraineFeatures++;
    if (severity === "modsev") migraineFeatures++;
    if (activity === "aggravated") migraineFeatures++;
    if (location === "unilateral") migraineFeatures += 0.5;

    const migraineAssociated = nausea || (photophobia && phonophobia);

    let tensionFeatures = 0;
    if (location === "bilateral") tensionFeatures++;
    if (quality === "pressing") tensionFeatures++;
    if (severity === "mild") tensionFeatures++;
    if (activity === "notAggravated") tensionFeatures++;

    const tensionAssociated = !nausea && !(photophobia && phonophobia);

    if (migraineFeatures >= 2 && migraineAssociated) {
      return {
        tone: "accent" as Tone,
        title: "Pattern Consistent With Migraine",
        detail:
          "Moderate-to-severe, pulsating pain that worsens with activity, combined with nausea/vomiting or combined photophobia and phonophobia, aligns with ICHD-3 features of paediatric migraine (which — unlike in adults — is frequently bilateral and may last as briefly as 2 hours). Consider rest in a dark, quiet room, early NSAID dosing (e.g. ibuprofen), and a headache diary to identify triggers. Recurrent or disabling attacks warrant primary-care or neurology follow-up for preventive strategy.",
        ready: true,
      };
    }

    if (tensionFeatures >= 3 && tensionAssociated) {
      return {
        tone: "good" as Tone,
        title: "Pattern Consistent With Tension-Type Headache",
        detail:
          "Bilateral, pressing/tightening pain of mild-to-moderate intensity that is not worsened by routine activity, without nausea, is consistent with tension-type headache. Focus on lifestyle factors — sleep, hydration, regular meals, screen time, stress — and simple analgesia if needed. Reassess if frequency increases or a new pattern emerges.",
        ready: true,
      };
    }

    return {
      tone: "warn" as Tone,
      title: "Mixed or Indeterminate Features",
      detail:
        "The reported features do not cleanly separate into a single primary headache type, which is common in children. Keep a headache diary for 2–4 weeks recording frequency, duration, triggers, and associated symptoms, and review with a primary care clinician — especially if headaches are frequent, disabling, or interfering with school attendance.",
      ready: true,
    };
  }, [activeFlags.length, location, quality, severity, activity, nausea, photophobia, phonophobia]);

  return (
    <div className="space-y-8">
      <Section title="Step 1 — Screen for Red Flags">
        <p className="-mt-2 text-xs text-ink-muted">
          Based on the SNOOP/SNNOOP10 red-flag framework, adapted for children. Check any that
          apply.
        </p>
        <div className="flex flex-col gap-2">
          {redFlagItems.map((f) => (
            <CheckboxRow
              key={f.key}
              label={`${f.label} — ${f.sub}`}
              checked={!!flags[f.key]}
              onChange={(v) => setFlags((p) => ({ ...p, [f.key]: v }))}
            />
          ))}
        </div>
      </Section>

      {activeFlags.length === 0 && (
        <>
          <Section title="Step 2 — Pain Characteristics">
            <div className="space-y-5">
              <OptionListField label="1. Location" options={locationOptions} value={location} onChange={setLocation} />
              <OptionListField label="2. Quality" options={qualityOptions} value={quality} onChange={setQuality} />
              <OptionListField label="3. Intensity" options={severityOptions} value={severity} onChange={setSeverity} />
              <OptionListField
                label="4. Effect of Physical Activity"
                options={activityOptions}
                value={activity}
                onChange={setActivity}
              />
            </div>
          </Section>

          <Section title="Step 3 — Associated Symptoms">
            <div className="flex flex-col gap-2">
              <CheckboxRow label="Nausea or vomiting" checked={nausea} onChange={setNausea} />
              <CheckboxRow label="Photophobia (light sensitivity)" checked={photophobia} onChange={setPhotophobia} />
              <CheckboxRow label="Phonophobia (sound sensitivity)" checked={phonophobia} onChange={setPhonophobia} />
            </div>
          </Section>
        </>
      )}

      <ResultPanel
        tone={result.tone}
        eyebrow="Assessment"
        value={result.title}
        description={activeFlags.length > 0 ? activeFlags.map((f) => f.label).join(", ") : undefined}
        footnote={result.detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Important:</strong> This tool screens a single headache
        episode's pattern and is not a substitute for a full history, examination, and — where
        indicated — neuroimaging. A formal ICHD-3 diagnosis of migraine requires at least 5
        qualifying attacks over time, not a single description.
      </div>
    </div>
  );
}
