import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { InfoPopover } from "@/kit/InfoPopover";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import { StimulusCard } from "@/kit/StimulusCard";

const attentionOptions = [
  { value: 5, label: "5 Correct", badge: "5" },
  { value: 4, label: "4 Correct", badge: "4" },
  { value: 3, label: "3 Correct", badge: "3" },
  { value: 2, label: "2 Correct", badge: "2" },
  { value: 1, label: "1 Correct", badge: "1" },
  { value: 0, label: "0 Correct", badge: "0" },
];

const commandOptions = [
  { value: 3, label: "All 3 steps correct", badge: "3" },
  { value: 2, label: "2 steps correct", badge: "2" },
  { value: 1, label: "1 step correct", badge: "1" },
  { value: 0, label: "0 steps correct", badge: "0" },
];

export default function MmseCalculator() {
  const [orientTime, setOrientTime] = useState<Record<string, boolean>>({});
  const [orientPlace, setOrientPlace] = useState<Record<string, boolean>>({});
  const [registration, setRegistration] = useState<Record<string, boolean>>({});
  const [attention, setAttention] = useState(0);
  const [recall, setRecall] = useState<Record<string, boolean>>({});
  const [naming, setNaming] = useState<Record<string, boolean>>({});
  const [repetition, setRepetition] = useState(false);
  const [command, setCommand] = useState(0);
  const [reading, setReading] = useState(false);
  const [writing, setWriting] = useState(false);
  const [copying, setCopying] = useState(false);

  const timeItems = ["Year", "Season", "Month", "Date", "Day"];
  const placeItems = ["State/Country", "County/Region", "Town/City", "Hospital/Building", "Floor/Room"];
  const objects = ["Apple", "Penny", "Table"];
  const namingItems = ["Pencil", "Watch"];

  const {
    total,
    tone,
    severity,
    detail,
    orientationScore,
    registrationScore,
    recallScore,
    languageScore,
  } = useMemo(() => {
    const orientationScore =
      Object.values(orientTime).filter(Boolean).length +
      Object.values(orientPlace).filter(Boolean).length;
    const registrationScore = Object.values(registration).filter(Boolean).length;
    const recallScore = Object.values(recall).filter(Boolean).length;
    const namingScore = Object.values(naming).filter(Boolean).length;
    const languageScore =
      namingScore + (repetition ? 1 : 0) + command + (reading ? 1 : 0) + (writing ? 1 : 0) + (copying ? 1 : 0);

    const total = orientationScore + registrationScore + attention + recallScore + languageScore;

    let tone: Tone;
    let severity: string;
    let detail: string;

    if (total >= 24) {
      tone = "good";
      severity = "No Significant Cognitive Impairment";
      detail =
        "Score is within the range typically considered unimpaired. Interpret cautiously in patients with very high or very low baseline education — a high-functioning individual can score in this range despite early decline (ceiling effect).";
    } else if (total >= 18) {
      tone = "warn";
      severity = "Mild Cognitive Impairment";
      detail =
        "Score suggests mild impairment. Correlate with function (IADLs — finances, medication management, driving). Consider formal neuropsychological referral, delirium screen if acute, and a repeat assessment at 6–12 months to establish trajectory.";
    } else if (total >= 10) {
      tone = "bad";
      severity = "Moderate Cognitive Impairment";
      detail =
        "Significant impairment likely affecting activities of daily living. Assess safety (driving, medication self-administration, finances, wandering risk). Screen for reversible causes and initiate dementia work-up if not already done. Involve family/carers in planning.";
    } else {
      tone = "bad";
      severity = "Severe Cognitive Impairment";
      detail =
        "Severe functional loss is likely, often with dependence for most or all activities of daily living. Full-time supervision or nursing care is frequently required. Confirm the score is not confounded by acute delirium, severe depression, sensory impairment, or language barrier before treating it as a dementia baseline.";
    }

    return { total, tone, severity, detail, orientationScore, registrationScore, recallScore, languageScore };
  }, [orientTime, orientPlace, registration, attention, recall, naming, repetition, command, reading, writing, copying]);

  return (
    <div className="space-y-8">
      <Section title="1. Orientation — 10 points">
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold text-ink-muted">Time (5)</p>
            <div className="flex flex-col gap-2">
              {timeItems.map((item) => (
                <CheckboxRow
                  key={item}
                  label={`What is the ${item}?`}
                  checked={!!orientTime[item]}
                  onChange={(v) => setOrientTime((p) => ({ ...p, [item]: v }))}
                  points="1"
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-ink-muted">Place (5)</p>
            <div className="flex flex-col gap-2">
              {placeItems.map((item) => (
                <CheckboxRow
                  key={item}
                  label={`What ${item} are we in?`}
                  checked={!!orientPlace[item]}
                  onChange={(v) => setOrientPlace((p) => ({ ...p, [item]: v }))}
                  points="1"
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="2. Registration — 3 points">
        <div className="-mt-2 flex items-center text-xs text-ink-muted">
          Name 3 unrelated objects (e.g. "Apple, Penny, Table") at a rate of 1/second. Ask the
          patient to repeat all 3. Score only the first attempt; repeat up to 6 times until
          learned, since recall is tested again later.
          <InfoPopover title="How to administer">
            Say all three words clearly, about one per second, then ask the patient to repeat them back
            immediately. The score here reflects only this first attempt, regardless of the result — but if
            they don't get all three, keep repeating the full list (up to 6 tries) until learned, since
            accurate learning matters for the delayed recall item later.
          </InfoPopover>
        </div>
        <div className="flex flex-col gap-2">
          {objects.map((item) => (
            <CheckboxRow
              key={item}
              label={`Repeats "${item}"`}
              checked={!!registration[item]}
              onChange={(v) => setRegistration((p) => ({ ...p, [item]: v }))}
              points="1"
            />
          ))}
        </div>
      </Section>

      <Section title="3. Attention & Calculation — 5 points">
        <div className="-mt-2 flex items-center text-xs text-ink-muted">
          Serial 7s: subtract 7 from 100, then from each subsequent answer, stopping after 5
          subtractions (93, 86, 79, 72, 65). If unable or unwilling, ask the patient to spell
          "WORLD" backwards (D-L-R-O-W) and score by the number of letters in correct order.
          <InfoPopover title="How to administer">
            Offer only one of the two tasks, not both — Serial 7s is the standard first choice; WORLD-backwards
            is a substitute for patients who can't or won't do arithmetic, not an additional task. For Serial
            7s, each subtraction is conventionally scored on whether it was performed correctly relative to the
            patient's own previous answer, so one early slip doesn't automatically zero out the rest. For
            WORLD-backwards, score one point per letter that appears in the correct position of D-L-R-O-W.
          </InfoPopover>
        </div>
        <OptionListField options={attentionOptions} value={attention} onChange={setAttention} />
      </Section>

      <Section title="4. Recall — 3 points">
        <p className="-mt-2 text-xs text-ink-muted">
          Ask the patient to recall the 3 objects named in Registration. No prompting or cueing.
        </p>
        <div className="flex flex-col gap-2">
          {objects.map((item) => (
            <CheckboxRow
              key={item}
              label={`Recalls "${item}"`}
              checked={!!recall[item]}
              onChange={(v) => setRecall((p) => ({ ...p, [item]: v }))}
              points="1"
            />
          ))}
        </div>
      </Section>

      <Section title="5. Language & Praxis — 9 points">
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold text-ink-muted">Naming (2)</p>
            <div className="flex flex-col gap-2">
              {namingItems.map((item) => (
                <CheckboxRow
                  key={item}
                  label={`Correctly names a ${item.toLowerCase()}`}
                  checked={!!naming[item]}
                  onChange={(v) => setNaming((p) => ({ ...p, [item]: v }))}
                  points="1"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center text-xs text-ink-muted">
            Repetition
            <InfoPopover title="How to administer">
              Say the phrase once, clearly, and ask the patient to repeat it back exactly. Only one attempt is
              scored — the phrase must be repeated verbatim (no substituted or dropped words) to count as
              correct.
            </InfoPopover>
          </div>
          <CheckboxRow
            label={'Repeats "No ifs, ands, or buts" correctly (1)'}
            checked={repetition}
            onChange={setRepetition}
            points="1"
          />

          <div>
            <div className="mb-2 flex items-center text-xs font-semibold text-ink-muted">
              3-Stage Command (3) — "Take this paper in your right hand, fold it in half, and put
              it on the floor."
              <InfoPopover title="How to administer">
                Give the entire instruction once, as a single command — don't break it into three separate
                prompts. Hand the patient a blank sheet of paper before giving the instruction. Score 1 point
                for each of the three actions performed correctly, in any order, even if the patient pauses
                between steps.
              </InfoPopover>
            </div>
            <OptionListField options={commandOptions} value={command} onChange={setCommand} />
          </div>

          <p className="text-xs text-ink-muted">Reading — show the instruction below and ask the patient to read it and do what it says</p>
          <StimulusCard label="Show to patient">
            <div className="px-6 py-8 text-center text-4xl font-bold tracking-wide">CLOSE YOUR EYES</div>
          </StimulusCard>
          <CheckboxRow
            label='Reading: obeys written command "CLOSE YOUR EYES" (1)'
            checked={reading}
            onChange={setReading}
            points="1"
          />
          <div className="flex items-center text-xs text-ink-muted">
            Writing
            <InfoPopover title="How to administer">
              The sentence must be spontaneously generated by the patient, not copied or dictated — any topic
              is fine. It needs a genuine subject and verb and should be legible; minor spelling or grammar
              slips are acceptable as long as the sentence makes sense.
            </InfoPopover>
          </div>
          <CheckboxRow
            label="Writing: writes one complete, sensible sentence (subject + verb) (1)"
            checked={writing}
            onChange={setWriting}
            points="1"
          />
          <div className="flex items-center text-xs text-ink-muted">
            Copying
            <InfoPopover title="How to administer">
              Show the patient the two intersecting pentagons from your institution's licensed MMSE stimulus
              booklet (not reproduced here — see the copyright notice below) and ask them to copy the design
              exactly. To score correct, all 10 angles must be present and the two shapes must intersect to
              form a four-sided figure — minor tremor is acceptable, but rotation or a missing intersection is
              not.
            </InfoPopover>
          </div>
          <CheckboxRow
            label="Copying: correctly copies two intersecting pentagons (1)"
            checked={copying}
            onChange={setCopying}
            points="1"
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="MMSE Total"
        value={total}
        valueSuffix="/30"
        description={severity}
        breakdown={`Orientation ${orientationScore}/10 · Registration ${registrationScore}/3 · Attention ${attention}/5 · Recall ${recallScore}/3 · Language ${languageScore}/9`}
        footnote={detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Copyright notice:</strong> The MMSE is a copyrighted
        instrument administered under licence from Psychological Assessment Resources (PAR) in
        many jurisdictions. This calculator is provided for educational scoring practice only —
        clinical use of the actual MMSE stimulus materials requires appropriate permissions. Where
        licensing is a barrier, the freely available MoCA is a common substitute (see FAQ below).
      </div>
    </div>
  );
}
