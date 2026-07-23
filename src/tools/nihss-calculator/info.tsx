import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function NihssInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the NIH Stroke Scale?</h2>
        <p>
          "Time is brain" is one of the defining maxims of stroke medicine —
          in a typical large-vessel ischaemic stroke, roughly two million
          neurons are estimated to be lost for every minute the occlusion
          persists. The National Institutes of Health Stroke Scale (NIHSS)
          was developed to give clinicians a fast, standardized, quantitative
          way to measure exactly how severe a stroke is, at the bedside, in
          a way that is reproducible between different examiners and
          comparable across hospitals and clinical trials.
        </p>
        <p>
          Originally built as a research instrument, the NIHSS has become
          the universal standard of care in emergency departments and
          stroke units worldwide. It is central to determining stroke
          severity, communicating a patient's status clearly between teams
          and over time, and — critically — assessing eligibility for acute
          reperfusion therapies such as intravenous thrombolysis and
          endovascular thrombectomy.
        </p>

        <h2>History and Development</h2>
        <p>
          The scale was developed in the 1980s, initially as a research tool
          for the University of Cincinnati stroke program, and was
          subsequently refined and popularized through its adoption by the
          National Institute of Neurological Disorders and Stroke (NINDS)
          for the landmark 1995 NINDS rt-PA Stroke Study — the trial that
          established intravenous thrombolysis as an effective treatment for
          acute ischaemic stroke and cemented the NIHSS's place as the
          scale used to define trial eligibility and to measure outcome.
          Brott and colleagues published the definitive description and
          validation of the scale in 1989. Because eligibility for major
          reperfusion trials was defined using NIHSS thresholds, and because
          those trials shaped modern stroke protocols worldwide, the scale
          has effectively become the shared language of acute stroke
          severity everywhere those therapies are used.
        </p>

        <h2>The 15 Scored Items</h2>
        <p>
          The NIHSS comprises 11 numbered categories — two of which (motor
          arm and motor leg) are scored separately for each side of the
          body, giving 15 individually scored items in total. Each item uses
          its own ordinal scale (typically 0 to 2, 3, or 4), where 0 always
          represents normal function and higher numbers represent
          progressively greater impairment. Summed together, the 15 items
          give a total ranging from 0 to 42.
        </p>
        <ul>
          <li><strong>1a. Level of consciousness</strong> (0–3): overall responsiveness, from alert to unresponsive.</li>
          <li><strong>1b. LOC questions</strong> (0–2): asks the current month and the patient's age.</li>
          <li><strong>1c. LOC commands</strong> (0–2): asks the patient to open/close their eyes and grip/release a hand.</li>
          <li><strong>2. Best gaze</strong> (0–2): horizontal eye movements, from normal to forced deviation.</li>
          <li><strong>3. Visual fields</strong> (0–3): confrontation testing, from intact to bilateral blindness.</li>
          <li><strong>4. Facial palsy</strong> (0–3): symmetry of smile/eyebrow raise, from normal to complete paralysis.</li>
          <li><strong>5a/5b. Motor arm</strong>, left and right (0–4 each): drift and strength holding the arm against gravity.</li>
          <li><strong>6a/6b. Motor leg</strong>, left and right (0–4 each): drift and strength holding the leg against gravity.</li>
          <li><strong>7. Limb ataxia</strong> (0–2): finger-nose-finger and heel-shin testing for cerebellar signs.</li>
          <li><strong>8. Sensory</strong> (0–2): pinprick testing across face, arm, trunk, and leg.</li>
          <li><strong>9. Best language</strong> (0–3): picture description, naming, and reading, assessing for aphasia.</li>
          <li><strong>10. Dysarthria</strong> (0–2): clarity of speech reading a standard word list.</li>
          <li><strong>11. Extinction/inattention</strong> (0–2): simultaneous bilateral stimulation to detect neglect.</li>
        </ul>
        <p>
          Scoring both sides of the body separately for the motor items is
          essential — collapsing arm/leg scoring to a single "worst side"
          value caps the achievable total well below the true maximum of 42
          and can understate severity in patients with markedly asymmetric
          deficits, so this calculator scores all four limb items
          independently exactly as the original scale specifies.
        </p>

        <h2>Interpreting the Total Score</h2>
        <ul>
          <li><strong>0:</strong> no stroke-related deficit detected by the scale.</li>
          <li><strong>1–4:</strong> minor stroke.</li>
          <li><strong>5–15:</strong> moderate stroke.</li>
          <li><strong>16–20:</strong> moderate-to-severe stroke.</li>
          <li><strong>21–42:</strong> severe stroke.</li>
        </ul>
        <p>
          These bands are widely cited conventions rather than a rigid rule
          set by any single guideline body, and different sources sometimes
          group the boundaries slightly differently — but 1–4/5–15/16–20/21–42
          is the classification most consistently used in stroke literature
          and this calculator's interpretation.
        </p>

        <h2>Worked Example</h2>
        <p>
          A patient presents with a right middle cerebral artery syndrome.
          On assessment: alert (1a=0), correctly answers month and age
          (1b=0), performs both commands (1c=0), partial gaze palsy (2=1),
          normal visual fields (3=0), partial facial paralysis (4=1), left
          arm falls within 10 seconds (5a=1), right arm normal (5b=0), left
          leg drifts before 5 seconds (6a=1), right leg normal (6b=0), no
          ataxia (7=0), mild sensory loss on the left (8=1), mild-moderate
          aphasia is <em>not present</em> since this is a right-sided
          lesion (9=0), mild dysarthria (10=1), and mild left-sided
          extinction (11=1). Total = 0+0+0+1+0+1+1+0+1+0+0+1+0+1+1 ={" "}
          <strong>8</strong>, a moderate stroke by this scale's bands —
          appropriate for consideration of thrombolysis if within the time
          window and CT angiography to assess for a large-vessel occlusion
          suitable for thrombectomy.
        </p>

        <h2>NIHSS and Reperfusion Therapy Decisions</h2>
        <p>
          The NIHSS score is woven directly into modern reperfusion
          decision-making. For intravenous thrombolysis, NICE guideline
          NG128 ("Stroke and transient ischaemic attack in over 16s:
          diagnosis and initial management") does not itself set a hard
          minimum or maximum NIHSS cut-off — the "non-disabling deficit"
          judgement used to decide whether a very mild stroke (NIHSS 1–4)
          warrants thrombolysis, and the historical caution around very high
          scores in the 3–4.5 hour window, both derive from the exclusion
          criteria used in the ECASS III trial rather than being a NICE-set
          rule. For endovascular thrombectomy, NG128 is more explicit,
          recommending consideration in patients with an NIHSS score{" "}
          <strong>above 5</strong>, a pre-stroke modified Rankin Score below
          3, and confirmed proximal anterior circulation occlusion, within
          6 hours of onset (or 6–24 hours in selected patients with imaging
          evidence of salvageable brain tissue).
        </p>

        <h2>Limitations of the NIHSS</h2>
        <ul>
          <li>
            <strong>Anterior-circulation bias:</strong> the scale heavily
            weights deficits typical of anterior circulation strokes
            (hemiparesis, aphasia) and scores relatively poorly for
            posterior circulation strokes. A devastating brainstem or
            cerebellar infarct causing severe vertigo, dysphagia, ataxia,
            and cranial nerve palsies can produce a deceptively low NIHSS
            (sometimes 2–3), understating the true clinical severity.
          </li>
          <li>
            <strong>Hemispheric/language bias:</strong> left-hemisphere
            strokes, which typically cause aphasia, tend to score higher
            than a right-hemisphere stroke of comparable anatomical size,
            because language items carry more points than the neglect item
            that a right-sided lesion is more likely to produce.
          </li>
          <li>
            <strong>Doesn't capture everything relevant to disability:</strong>{" "}
            outcome and functional disability depend on more than the raw
            NIHSS number alone — pre-stroke functional status, comorbidities,
            and infarct location and volume on imaging all add information
            the scale doesn't directly capture.
          </li>
          <li>
            <strong>Requires structured training:</strong> although designed
            to be reproducible, consistent scoring — particularly
            distinguishing similar-looking motor grades — benefits from
            standardized certification training, which is why formal NIHSS
            certification is now routine for stroke-unit staff.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Does an NIHSS of 0 mean the patient didn't have a stroke?",
            a: "Not necessarily. Small lacunar infarcts and some posterior circulation strokes can produce genuine ischaemic damage while causing symptoms the scale weights lightly or not at all, resulting in a very low or even zero score despite a real, imaging-confirmed stroke.",
          },
          {
            q: "Can non-neurologists reliably perform the NIHSS?",
            a: "Yes — one of the scale's core strengths is its reproducibility between trained examiners. Emergency physicians, stroke nurses, and paramedics routinely complete standardized NIHSS certification, which is exactly what allows a score from one team to be trusted and acted on by another.",
          },
          {
            q: "Why is NIHSS>5 significant for thrombectomy eligibility?",
            a: "NICE guideline NG128 uses an NIHSS threshold above 5, alongside a good pre-stroke functional baseline (modified Rankin Score under 3) and imaging-confirmed proximal large-vessel occlusion, as part of its criteria for considering endovascular thrombectomy.",
          },
          {
            q: "Why does this calculator score the left and right arm/leg separately?",
            a: "The original NIHSS specifies independent scoring for each limb (items 5a/5b and 6a/6b). Collapsing this to a single 'worse side' score would understate severity in patients with asymmetric deficits and would make it impossible to reach the scale's true maximum of 42.",
          },
        ]}
      />

      <RelatedTools slugs={["gcs-calculator", "head-injury-assessment-tool", "chadsvasc-score"]} />

      <References
        items={[
          {
            text: "Brott T, Adams HP Jr, Olinger CP, et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke. 1989;20(7):864-870.",
          },
          {
            text: "National Institute of Neurological Disorders and Stroke rt-PA Stroke Study Group. Tissue plasminogen activator for acute ischemic stroke. N Engl J Med. 1995;333(24):1581-1587.",
          },
          {
            text: "National Institute for Health and Care Excellence. Stroke and transient ischaemic attack in over 16s: diagnosis and initial management (NG128), 2019 (updated 2022).",
            href: "https://www.nice.org.uk/guidance/ng128",
          },
        ]}
      />
    </>
  );
}
