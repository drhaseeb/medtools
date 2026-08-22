import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function GcsInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the Glasgow Coma Scale?</h2>
        <p>
          The Glasgow Coma Scale (GCS) is the most widely used clinical tool
          for describing a patient's level of consciousness after an acute
          brain injury. It was designed to replace vague, subjective
          descriptions — "stuporous," "obtunded," "semi-comatose" — with a
          standardized, reproducible score that any clinician, anywhere in
          the world, can calculate and communicate in seconds. The scale
          assesses three independent behavioral domains: eye opening,
          verbal response, and motor response. Each is scored separately and
          then summed into a total ranging from 3 (no response in any
          domain) to 15 (fully alert and oriented).
        </p>
        <p>
          Although it was developed for traumatic brain injury, the GCS is
          now used across almost every branch of acute medicine —
          stroke units, toxicology, sepsis, post-ictal states, hepatic
          encephalopathy, and prehospital triage — anywhere a clinician
          needs a fast, serial measure of neurological status. Its enduring
          value lies in its simplicity: it requires no equipment, takes
          under a minute to perform, and — critically — is reproducible
          between different observers, which most of its subjective
          predecessors were not.
        </p>

        <h2>History and Development</h2>
        <p>
          The GCS was created in 1974 by Graham Teasdale and Bryan Jennett,
          both neurosurgeons at the Institute of Neurological Sciences in
          Glasgow, and published in <em>The Lancet</em> under the title "Assessment
          of coma and impaired consciousness: a practical scale." Their
          motivation was straightforward: neurosurgical units were seeing
          increasing numbers of head-injured patients as trauma care and
          transport improved, but there was no consistent way to describe how
          "conscious" a patient was from one examination to the next, or
          between different hospitals participating in the same research
          studies. A patient labelled "drowsy" by one doctor might be
          labelled "confused" by another, with no way to know if the patient
          had actually changed.
        </p>
        <p>
          Teasdale and Jennett deliberately built the scale around
          observable, testable behaviors rather than inferred mental states.
          Instead of asking "is the patient aware?" — a question that
          cannot be directly observed — the scale asks "does the patient
          open their eyes to voice?" or "does the patient localize to a
          painful stimulus?" — questions with a discrete, verifiable answer.
          This behavioral, criterion-based design is the reason the GCS has
          survived, essentially unchanged, for over five decades, while
          dozens of competing coma scales have come and gone.
        </p>

        <h2>How the GCS Is Scored</h2>
        <p>
          The GCS evaluates the patient's <em>best</em> response in each of
          three domains. The examiner should use escalating stimuli — first
          calling the patient's name, then a firm verbal command, and only
          if there is no response, a painful stimulus such as trapezius
          pinch or supraorbital pressure — and record the single best
          response observed in each category.
        </p>

        <h3>Eye Opening (E: 1–4)</h3>
        <p>
          This domain tests whether the arousal mechanisms of the brainstem
          reticular activating system are intact. It is <em>not</em> a test
          of awareness — a patient can open their eyes spontaneously while
          remaining completely unresponsive to their environment (as in a
          vegetative state), so eye opening must always be interpreted
          alongside the verbal and motor scores, never in isolation.
        </p>
        <ul>
          <li><strong>4 — Spontaneous:</strong> eyes open without any stimulation from the examiner.</li>
          <li><strong>3 — To sound:</strong> eyes open in response to a spoken voice or shout.</li>
          <li><strong>2 — To pressure:</strong> eyes open only to a painful/noxious stimulus.</li>
          <li><strong>1 — None:</strong> no eye opening despite maximal stimulation.</li>
        </ul>

        <h3>Verbal Response (V: 1–5)</h3>
        <p>
          This domain probes higher cortical integration — language
          production, orientation, and awareness of self and surroundings.
        </p>
        <ul>
          <li><strong>5 — Orientated:</strong> the patient correctly states who they are, where they are, and the approximate date.</li>
          <li><strong>4 — Confused:</strong> the patient converses in sentences but is disorientated to person, place, or time.</li>
          <li><strong>3 — Words:</strong> intelligible single words are spoken, but not in coherent conversation.</li>
          <li><strong>2 — Sounds:</strong> only moaning or groaning, no recognizable words.</li>
          <li><strong>1 — None:</strong> no vocalization at all.</li>
        </ul>
        <p>
          When a patient is intubated, sedated, or otherwise physically
          unable to speak, the verbal component cannot be tested. This is
          recorded as "VT" (verbal, tube) rather than assigning a score of 1,
          and is discussed further in the limitations section below.
        </p>

        <h3>Motor Response (M: 1–6)</h3>
        <p>
          The motor score is the single strongest predictor of outcome
          within the GCS and carries the widest range of points, reflecting
          how much prognostic information it carries. It tests the
          integrity of the corticospinal pathway from the motor cortex down
          through the internal capsule, brainstem, and spinal cord.
        </p>
        <ul>
          <li><strong>6 — Obeys commands:</strong> follows a specific two-part instruction (e.g. "stick out your tongue, then squeeze my fingers"). A single-step command is not sufficient, since a reflexive grasp can be mistaken for compliance.</li>
          <li><strong>5 — Localizes to pain:</strong> in response to a central painful stimulus, the patient's hand crosses the midline and purposefully attempts to remove the source of pain.</li>
          <li><strong>4 — Normal flexion (withdrawal):</strong> the limb withdraws rapidly from pain but without a purposeful, localizing movement toward the stimulus.</li>
          <li><strong>3 — Abnormal flexion (decorticate posturing):</strong> slow, stereotyped flexion of the arms onto the chest with wrist flexion and leg extension — indicating damage above the level of the red nucleus in the midbrain.</li>
          <li><strong>2 — Extension (decerebrate posturing):</strong> rigid extension and internal rotation of the arms with leg extension — indicating a deeper, more caudal brainstem lesion and a substantially worse prognosis than decorticate posturing.</li>
          <li><strong>1 — None:</strong> no motor response of any kind, i.e. flaccid.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 34-year-old man is brought to the emergency department after a
          motorcycle collision. On assessment, his eyes remain closed to
          voice but open when a trapezius pinch is applied (E2). He makes
          incomprehensible groaning sounds with no words (V2). When the
          same painful stimulus is applied, his arm bends slowly across his
          chest with the wrist flexed — decorticate posturing (M3).
        </p>
        <p>
          His total score is calculated as <strong>E2 + V2 + M3 = GCS 7</strong>,
          documented as "E2V2M3 = 7." A total score of 7 falls in the severe
          traumatic brain injury category (GCS 3–8) — this patient requires
          immediate airway protection, urgent CT imaging, and a
          neurosurgical referral, following the process outlined in the
          calculator above. Recording each component separately, not just
          the total, is essential: a GCS of 7 from E2V2M3 (predominantly a
          motor deficit) carries a different prognostic weight than the same
          total derived from E1V1M5, and serial documentation of each
          sub-score allows the team to detect subtle deterioration in a
          single domain that the total score alone would mask.
        </p>

        <h2>Interpreting the Total Score</h2>
        <p>
          The GCS total (3–15) is conventionally divided into three severity
          bands for traumatic brain injury, consistent with the Advanced
          Trauma Life Support (ATLS) classification used worldwide:
        </p>
        <ul>
          <li><strong>13–15 — Mild TBI:</strong> often referred to as concussion. Most patients can be safely assessed against a validated head-injury CT decision rule and, if criteria are met, discharged with head-injury advice.</li>
          <li><strong>9–12 — Moderate TBI:</strong> urgent CT imaging is required, along with admission for neurological observation and a low threshold for neurosurgical review.</li>
          <li><strong>3–8 — Severe TBI (coma):</strong> the patient cannot reliably protect their own airway. Immediate airway management (typically rapid sequence induction and intubation), urgent CT imaging, and neurosurgical involvement are required without delay.</li>
        </ul>
        <p>
          The maxim <strong>"GCS 8, intubate"</strong> is one of the most
          quoted rules in emergency and critical care medicine. At or below
          this threshold, the brainstem reflexes that protect the airway —
          gag and cough — are typically lost, placing the patient at high
          risk of aspiration and respiratory arrest if a definitive airway
          is not secured promptly.
        </p>

        <h2>The GCS-P: Adding Pupil Reactivity</h2>
        <p>
          In 2018, Paul Brennan, Gordon Murray, and Graham Teasdale
          published an extension to the original scale that combines the
          GCS with pupil reactivity into a single number: the GCS-Pupils
          score, or GCS-P. It is calculated by subtracting a "pupil
          reactivity score" (PRS) — the count of non-reactive pupils, 0, 1,
          or 2 — from the total GCS: <strong>GCS-P = GCS − PRS</strong>.
        </p>
        <p>
          Because both pupils unreactive scores 2, and this is subtracted
          from a minimum GCS of 3, the GCS-P can range from 1 to 15 — one
          point lower than the standard GCS floor. This wider range gives
          the score more discriminating power at the most severe end of the
          spectrum, where pupil findings carry substantial independent
          prognostic weight (bilaterally fixed and dilated pupils are a
          well-recognized marker of impending or established brainstem
          herniation). The GCS-P has since been incorporated into
          international prognostic calculators (such as the IMPACT and
          CRASH models for traumatic brain injury) precisely because a
          simple arithmetic adjustment captures nearly as much prognostic
          information as far more complex multivariable models.
        </p>

        <h2>Paediatric Glasgow Coma Scale</h2>
        <p>
          The standard GCS assumes a patient who is developmentally capable
          of forming sentences and following two-step verbal commands —
          neither of which is a fair test for an infant or pre-verbal
          toddler. The Paediatric Glasgow Coma Scale (PGCS) substitutes
          developmentally appropriate behaviors for the verbal domain while
          keeping the same 3–15 scoring range and the same eye-opening and
          motor criteria in older children:
        </p>
        <ul>
          <li><strong>5 — Coos or babbles</strong> (infant) / fully orientated (older child)</li>
          <li><strong>4 — Irritable cry</strong> (infant) / confused conversation (older child)</li>
          <li><strong>3 — Cries to pain</strong> (infant) / inappropriate words (older child)</li>
          <li><strong>2 — Moans to pain</strong> (infant) / incomprehensible sounds (older child)</li>
          <li><strong>1 — No response</strong> in either group</li>
        </ul>
        <p>
          For the motor domain in infants who cannot yet follow commands,
          "normal spontaneous movements" is accepted in place of "obeys
          commands" for a score of 6. As with the adult scale, the PGCS
          should always be interpreted alongside the child's parents' or
          carers' report of the child's usual baseline behavior, since a
          child with a developmental delay may never reach a "normal" score
          of 15 even when entirely at their own neurological baseline.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          Beyond its origin in neurotrauma, the GCS is embedded in
          protocols across almost every branch of acute care. In the
          prehospital setting, paramedics use it both to flag patients who
          need senior clinician review en route and to help decide the
          most appropriate receiving hospital — a persistently low or
          falling GCS after trauma is one of the standard criteria for
          bypassing a local emergency department in favour of direct
          transfer to a major trauma centre. Within the hospital, the GCS
          is formally assessed during the "D" (Disability) step of the
          ATLS primary trauma survey, immediately after the airway,
          breathing, and circulation have been addressed, and it is
          repeated at defined intervals throughout the resuscitation.
        </p>
        <p>
          In critical care, serial GCS recordings — often performed hourly
          or more frequently in unstable patients — are one of the primary
          tools nursing and medical staff use to detect neurological
          deterioration before it becomes catastrophic. A falling GCS, or
          a drop of two or more points in the motor score specifically,
          typically triggers an urgent repeat CT scan and senior review
          regardless of what the absolute number is. Beyond trauma, the GCS
          is also applied — with the caveats discussed below — in diabetic
          emergencies, opioid or sedative-hypnotic overdose, hepatic
          encephalopathy, post-ictal states following seizures, and
          sepsis-associated encephalopathy, even though it was not
          originally validated in any of these populations. Its value in
          these settings is less about precise prognostication and more
          about providing a common, trend-able number that every member of
          the team — day or night, junior or senior — records and
          interprets the same way.
        </p>

        <h2>Comparison to Other Consciousness Scales</h2>
        <p>
          The GCS is not the only tool for grading consciousness, and it is
          worth understanding where it fits relative to its main
          alternatives.
        </p>
        <ul>
          <li><strong>AVPU (Alert, Voice, Pain, Unresponsive):</strong> a much coarser four-level scale often used by first responders for a rapid initial impression. It is faster to apply but far less granular than the GCS and is generally used only as a screening step before a full GCS is documented.</li>
          <li><strong>FOUR Score (Full Outline of UnResponsiveness):</strong> developed by Wijdicks and colleagues in 2005 specifically to address GCS's blind spot in intubated patients, since it has no verbal component at all. It scores eye response, motor response, brainstem reflexes, and respiration pattern, and can identify locked-in syndrome and specific brainstem herniation patterns that the GCS cannot. It is used mainly in neurocritical care units where staff are trained in its use, but has not displaced the GCS as the international standard because it is less universally taught and slightly more complex to administer.</li>
        </ul>
        <p>
          In practice, the GCS remains the default in almost every setting
          worldwide because of its ubiquity: virtually every doctor, nurse,
          and paramedic has been trained in it, which means a score recorded
          in one hospital is immediately meaningful to a team in another —
          a property that scoring systems with more academic elegance but
          less global adoption cannot match.
        </p>

        <h2>Limitations and Special Populations</h2>
        <p>
          The GCS is powerful precisely because it is simple, but that
          simplicity means it must always be interpreted in clinical
          context:
        </p>
        <ul>
          <li><strong>Intubation and aphasia:</strong> an intubated patient cannot produce a verbal response and should be documented as "VT" rather than scored as 1, since scoring it as 1 would understate their neurological status. Similarly, a patient with expressive aphasia from a dominant-hemisphere stroke may score poorly on verbal response despite being fully aware.</li>
          <li><strong>Sedation and intoxication:</strong> alcohol, opioids, and sedative-hypnotic drugs all depress the GCS independently of any structural brain injury. The recorded score is an accurate description of the patient's <em>current</em> state, but it may not reflect the severity of any underlying injury until the confounding substance has been metabolised — serial scoring after the acute intoxication has worn off is essential.</li>
          <li><strong>Spinal cord injury:</strong> a high cervical spinal cord injury can produce quadriplegia and a motor score of 1 even when cerebral function is completely intact, since the motor pathway is interrupted below the brain rather than within it.</li>
          <li><strong>Pre-existing cognitive impairment:</strong> patients with baseline dementia or intellectual disability may have a lower "normal" verbal or motor baseline, and deterioration should be judged against that individual baseline rather than an assumed GCS of 15.</li>
          <li><strong>Facial and ocular trauma:</strong> peri-orbital swelling severe enough to prevent eye opening will produce a falsely low eye-opening score that reflects local trauma rather than reduced consciousness; this should be documented explicitly (e.g. "eyes closed by swelling — untestable").</li>
          <li><strong>Inter-rater variability:</strong> although far more reproducible than free-text descriptions, studies have shown some disagreement between examiners, particularly at distinguishing localizing (M5) from withdrawal (M4) responses. Standardized training modules exist specifically to reduce this variability.</li>
        </ul>

        <h2>Documentation, Training, and Reliability</h2>
        <p>
          A recurring criticism of any clinical score used by thousands of
          different observers is inter-rater reliability — will two
          different clinicians examining the same patient arrive at the
          same number? A 2016 systematic review by Reith and colleagues,
          pooling 52 studies on this exact question, found that the overall
          reliability of the GCS is adequate: the total score achieved
          substantial agreement (a kappa statistic above 0.6) in 77% of
          reported comparisons, and the individual components performed
          even better in isolation — kappa above 0.6 in 89% of comparisons
          for eye opening, 88% for verbal response, and 94% for motor
          response. The review's central conclusion was that reliability is
          not fixed; it improves measurably with structured training and a
          standardized examination technique, which is why organizations
          including the scale's own stewards at the University of Glasgow
          now publish and promote a formal "structured approach" to
          performing the assessment, rather than leaving technique to
          individual habit.
        </p>
        <p>
          In practice, two documentation habits meaningfully improve the
          clinical value of the score. First, always record the three
          component scores separately (e.g. "E3V4M5") rather than only the
          total of 12 — two patients with a total of 12 can have very
          different underlying pictures (a sedated patient scoring
          E3V1M6+1 for an untestable tube versus a patient with a severe
          motor deficit scoring E4V4M4), and only the sub-scores make that
          distinction visible to the next clinician. Second, always
          document the stimulus used to elicit the response — "eyes open
          to voice" is a materially different finding from "eyes open to
          trapezius pinch," even though both would be charted under
          different point values, and ambiguity here is one of the most
          common sources of disagreement between observers highlighted in
          the reliability literature above.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Why does the GCS start at 3 rather than 0?",
            a: "Each of the three domains has a minimum possible score of 1 (not 0), because the absence of any response is still a testable, documented finding. Since 1 + 1 + 1 = 3, there is no way to score lower than 3 on the standard GCS — a score of 0 does not exist.",
          },
          {
            q: "What does 'GCS 15' actually mean?",
            a: "A GCS of 15 means the patient opens their eyes spontaneously, is fully orientated in conversation, and obeys commands — in other words, there is no detectable impairment of consciousness on this scale. It does not rule out other neurological problems (such as a focal deficit or a mild concussion with normal alertness) that the GCS is not designed to detect.",
          },
          {
            q: "Can the GCS be used in young children?",
            a: "The standard adult GCS assumes verbal and motor abilities that pre-verbal children do not yet have. A modified Paediatric GCS exists, substituting age-appropriate behaviors (such as cooing, irritability, or crying to pain) for the verbal component, and should be used instead of the adult version in infants and young children.",
          },
          {
            q: "Is a single low GCS score enough to predict outcome?",
            a: "No single GCS reading in isolation should be used to predict long-term outcome, particularly in the first hour after injury when intoxication, hypoxia, or hypotension can all transiently depress the score. Trend over time — improvement or deterioration on serial assessment — carries far more prognostic weight than any single number.",
          },
          {
            q: "Does GCS replace the need for a full neurological exam?",
            a: "No. The GCS is a screening and monitoring tool for level of consciousness, not a substitute for a full neurological examination. Pupil size and reactivity, limb power and symmetry, and cranial nerve testing should always be performed alongside it, which is exactly why the GCS-Pupils (GCS-P) extension was developed.",
          },
        ]}
      />

      <RelatedTools
        slugs={["head-injury-assessment-tool", "nihss-calculator", "rosier-scale"]}
      />

      <References
        items={[
          {
            text: "Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet. 1974;2(7872):81-84.",
          },
          {
            text: "Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score. J Neurosurg. 2018;128(6):1612-1620.",
          },
          {
            text: "National Institute for Health and Care Excellence. Head injury: assessment and early management (NG232). Published 18 May 2023.",
            href: "https://www.nice.org.uk/guidance/ng232",
          },
          {
            text: "Wijdicks EFM, Bamlet WR, Maramattom BV, Manno EM, McClelland RL. Validation of a new coma scale: the FOUR score. Ann Neurol. 2005;58(4):585-593.",
          },
          {
            text: "American College of Surgeons. Advanced Trauma Life Support (ATLS) Student Course Manual, 10th Edition.",
          },
          {
            text: "Reith FCM, Van den Brande R, Synnot A, Gruen R, Maas AIR. The reliability of the Glasgow Coma Scale: a systematic review. Intensive Care Med. 2016;42(1):3-15.",
          },
        ]}
      />
    </>
  );
}
