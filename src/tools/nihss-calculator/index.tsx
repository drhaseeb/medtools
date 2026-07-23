import { useMemo, useState } from "react";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const locOptions = [
  { value: 0, label: "Alert; keenly responsive", badge: "0" },
  { value: 1, label: "Not alert; arouses with minor stimulation", badge: "1" },
  { value: 2, label: "Not alert; requires repeated stimulation to attend", badge: "2" },
  { value: 3, label: "Unresponsive or responds only with reflex motor", badge: "3" },
];

const locqOptions = [
  { value: 0, label: "Answers both correctly", badge: "0" },
  { value: 1, label: "Answers one correctly", badge: "1" },
  { value: 2, label: "Answers neither correctly", badge: "2" },
];

const loccOptions = [
  { value: 0, label: "Performs both tasks", badge: "0" },
  { value: 1, label: "Performs one task", badge: "1" },
  { value: 2, label: "Performs neither", badge: "2" },
];

const gazeOptions = [
  { value: 0, label: "Normal", badge: "0" },
  { value: 1, label: "Partial gaze palsy — gaze abnormal in ≥1 eye", badge: "1" },
  { value: 2, label: "Forced deviation or total gaze palsy", badge: "2" },
];

const visOptions = [
  { value: 0, label: "No visual loss", badge: "0" },
  { value: 1, label: "Partial hemianopia", badge: "1" },
  { value: 2, label: "Complete hemianopia", badge: "2" },
  { value: 3, label: "Bilateral hemianopia (blind including cortical blindness)", badge: "3" },
];

const faceOptions = [
  { value: 0, label: "Normal symmetrical movements", badge: "0" },
  { value: 1, label: "Minor paralysis (asymmetry on smile)", badge: "1" },
  { value: 2, label: "Partial paralysis (lower face)", badge: "2" },
  { value: 3, label: "Complete paralysis (no movement one or both sides)", badge: "3" },
];

const armOptions = [
  { value: 0, label: "No drift — holds 10s", badge: "0" },
  { value: 1, label: "Drift — falls within 10s but doesn't hit bed", badge: "1" },
  { value: 2, label: "Some effort against gravity, can't sustain", badge: "2" },
  { value: 3, label: "No effort against gravity, limb falls", badge: "3" },
  { value: 4, label: "No movement", badge: "4" },
];

const legOptions = [
  { value: 0, label: "No drift — holds 5s at 30°", badge: "0" },
  { value: 1, label: "Drift before 5 seconds", badge: "1" },
  { value: 2, label: "Falls but some effort against gravity", badge: "2" },
  { value: 3, label: "No effort against gravity", badge: "3" },
  { value: 4, label: "No movement", badge: "4" },
];

const ataxOptions = [
  { value: 0, label: "Absent", badge: "0" },
  { value: 1, label: "Present in one limb", badge: "1" },
  { value: 2, label: "Present in two limbs", badge: "2" },
];

const sensOptions = [
  { value: 0, label: "Normal — no sensory loss", badge: "0" },
  { value: 1, label: "Mild-moderate loss — patient feels dull", badge: "1" },
  { value: 2, label: "Severe or total sensory loss", badge: "2" },
];

const langOptions = [
  { value: 0, label: "No aphasia; normal", badge: "0" },
  { value: 1, label: "Mild-moderate aphasia — some obvious loss", badge: "1" },
  { value: 2, label: "Severe aphasia — fragmentary expression", badge: "2" },
  { value: 3, label: "Mute, global aphasia, or coma", badge: "3" },
];

const dysartOptions = [
  { value: 0, label: "Normal", badge: "0" },
  { value: 1, label: "Mild-moderate — slurred but understandable", badge: "1" },
  { value: 2, label: "Severe — unintelligible or mute", badge: "2" },
];

const extOptions = [
  { value: 0, label: "No abnormality", badge: "0" },
  { value: 1, label: "Visual, tactile, auditory, or personal inattention", badge: "1" },
  { value: 2, label: "Profound hemi-inattention to >1 modality", badge: "2" },
];

export default function NihssCalculator() {
  const [loc, setLoc] = useState(0);
  const [locq, setLocq] = useState(0);
  const [locc, setLocc] = useState(0);
  const [gaze, setGaze] = useState(0);
  const [vis, setVis] = useState(0);
  const [face, setFace] = useState(0);
  // 5a/5b and 6a/6b are scored independently for the left and right limbs —
  // this is required to reach the true NIHSS maximum of 42 (a single
  // "worst side" score for arm/leg caps the achievable total well below 42
  // and understates severity in patients with asymmetric deficits).
  const [armLeft, setArmLeft] = useState(0);
  const [armRight, setArmRight] = useState(0);
  const [legLeft, setLegLeft] = useState(0);
  const [legRight, setLegRight] = useState(0);
  const [atax, setAtax] = useState(0);
  const [sens, setSens] = useState(0);
  const [lang, setLang] = useState(0);
  const [dysart, setDysart] = useState(0);
  const [ext, setExt] = useState(0);

  const { score, tone, headline, recommendation } = useMemo(() => {
    const score =
      loc +
      locq +
      locc +
      gaze +
      vis +
      face +
      armLeft +
      armRight +
      legLeft +
      legRight +
      atax +
      sens +
      lang +
      dysart +
      ext;

    let tone: Tone;
    let headline: string;
    let recommendation: string;

    if (score === 0) {
      tone = "good";
      headline = "No Stroke (0)";
      recommendation = "Normal.";
    } else if (score <= 4) {
      tone = "good";
      headline = `Minor Stroke (${score})`;
      recommendation =
        "Assess eligibility for thrombolysis. Admit for monitoring. Early stroke unit care reduces disability regardless of severity. MRI DWI if CT negative.";
    } else if (score <= 15) {
      tone = "warn";
      headline = `Moderate Stroke (${score})`;
      recommendation =
        "Thrombolysis if eligible (onset <4.5h, no contraindications). Urgent CT angiography — assess for LVO for thrombectomy. Acute stroke unit admission.";
    } else if (score <= 20) {
      tone = "warn";
      headline = `Moderate–Severe Stroke (${score})`;
      recommendation =
        "High disability burden likely. Urgent CT + CTA. Thrombectomy if LVO present (up to 24h in selected patients). Stroke unit. Swallow assessment. Early rehabilitation referral.";
    } else {
      tone = "bad";
      headline = `Severe Stroke (${score})`;
      recommendation =
        "High mortality and disability. Assess for basilar artery occlusion (extended thrombectomy window). Malignant MCA syndrome — discuss hemicraniectomy if <60 years and NIHSS>15. Palliative care discussion may be appropriate.";
    }

    return { score, tone, headline, recommendation };
  }, [
    loc,
    locq,
    locc,
    gaze,
    vis,
    face,
    armLeft,
    armRight,
    legLeft,
    legRight,
    atax,
    sens,
    lang,
    dysart,
    ext,
  ]);

  return (
    <div className="space-y-8">
      <Section title="1a. Level of Consciousness">
        <OptionListField options={locOptions} value={loc} onChange={setLoc} />
      </Section>

      <Section title="1b. LOC Questions (Month & Age)">
        <OptionListField options={locqOptions} value={locq} onChange={setLocq} />
      </Section>

      <Section title="1c. LOC Commands (Grip & Blink)">
        <OptionListField options={loccOptions} value={locc} onChange={setLocc} />
      </Section>

      <Section title="2. Best Gaze">
        <OptionListField options={gazeOptions} value={gaze} onChange={setGaze} />
      </Section>

      <Section title="3. Visual Fields">
        <OptionListField options={visOptions} value={vis} onChange={setVis} />
      </Section>

      <Section title="4. Facial Palsy">
        <OptionListField options={faceOptions} value={face} onChange={setFace} />
      </Section>

      <Section title="5a. Motor Arm — Left">
        <OptionListField options={armOptions} value={armLeft} onChange={setArmLeft} />
      </Section>

      <Section title="5b. Motor Arm — Right">
        <OptionListField options={armOptions} value={armRight} onChange={setArmRight} />
      </Section>

      <Section title="6a. Motor Leg — Left">
        <OptionListField options={legOptions} value={legLeft} onChange={setLegLeft} />
      </Section>

      <Section title="6b. Motor Leg — Right">
        <OptionListField options={legOptions} value={legRight} onChange={setLegRight} />
      </Section>

      <Section title="7. Limb Ataxia">
        <OptionListField options={ataxOptions} value={atax} onChange={setAtax} />
      </Section>

      <Section title="8. Sensory">
        <OptionListField options={sensOptions} value={sens} onChange={setSens} />
      </Section>

      <Section title="9. Best Language / Aphasia">
        <OptionListField options={langOptions} value={lang} onChange={setLang} />
      </Section>

      <Section title="10. Dysarthria">
        <OptionListField options={dysartOptions} value={dysart} onChange={setDysart} />
      </Section>

      <Section title="11. Extinction / Inattention">
        <OptionListField options={extOptions} value={ext} onChange={setExt} />
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="NIHSS Total"
        value={score}
        valueSuffix="/42"
        description={headline}
        footnote={
          <>
            <p>{recommendation}</p>
            <p className="mt-3">
              <strong className="text-ink">Thrombolysis (NICE NG128):</strong>{" "}
              alteplase or tenecteplase within 4.5h of onset if no
              haemorrhage/CT exclusions — NICE does not itself set a minimum
              or maximum NIHSS cut-off; the "non-disabling deficit" judgement
              and the historical NIHSS &gt;25 caution in the 3–4.5h window
              (from the ECASS III exclusion criteria) are clinical trial
              conventions, not a NICE rule. <strong className="text-ink">
              Thrombectomy (NICE NG128):
              </strong>{" "}
              NIHSS &gt;5, pre-stroke mRS &lt;3, confirmed proximal anterior
              circulation occlusion, within 6h (or 6–24h with imaging
              evidence of salvageable tissue).
            </p>
          </>
        }
      />
    </div>
  );
}
