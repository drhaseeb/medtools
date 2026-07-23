export default function NihssInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the National Institutes of Health Stroke Scale (NIHSS)</h2>

      <p>
        Acute ischemic stroke is a devastating neurological emergency
        characterized by the sudden loss of blood circulation to an area of
        the brain. The phrase "time is brain" underscores the critical need
        for rapid assessment and intervention, as nearly two million neurons
        die every minute an occlusion persists. To standardize the
        evaluation of acute stroke patients, the National Institutes of
        Health Stroke Scale (NIHSS) was developed.
      </p>

      <p>
        The NIHSS is a systematic, quantitative clinical assessment tool that
        measures stroke-related neurologic deficit. Originally designed for
        clinical research trials, it has become the universal standard of
        care in emergency departments and stroke units worldwide. It is
        crucial for determining the severity of a stroke, communicating
        patient status between healthcare providers, and evaluating a
        patient's eligibility for acute reperfusion therapies, such as
        intravenous thrombolysis (tPA/Tenecteplase) or endovascular
        thrombectomy (EVT).
      </p>

      <h3>The 15 Items of the NIHSS Assessment</h3>
      <p>
        The scale is comprised of 11 distinct categories (some with
        sub-items, totaling 15 distinct assessments), evaluating specific
        domains of neurological function. Each item is scored on a specific
        ordinal scale (e.g., 0 to 4), with 0 indicating normal function and
        higher numbers indicating greater impairment. The maximum total
        score is 42.
      </p>

      <ol>
        <li>
          <strong>1a. Level of Consciousness (LOC):</strong> The investigator
          assesses responsiveness (0 = alert, 3 = unarousable coma).
        </li>
        <li>
          <strong>1b. LOC Questions:</strong> The patient is asked the
          current month and their age (0 = both correct, 2 = neither
          correct).
        </li>
        <li>
          <strong>1c. LOC Commands:</strong> The patient is asked to
          open/close their eyes and grip/release their hand (0 = performs
          both, 2 = performs neither).
        </li>
        <li>
          <strong>2. Best Gaze:</strong> Tests horizontal extraocular
          movements (0 = normal, 2 = forced deviation).
        </li>
        <li>
          <strong>3. Visual:</strong> Tests visual fields by confrontation
          (0 = no visual loss, 3 = bilateral hemianopia or blindness).
        </li>
        <li>
          <strong>4. Facial Palsy:</strong> Asks the patient to show teeth or
          raise eyebrows (0 = normal symmetry, 3 = complete unilateral or
          bilateral paralysis).
        </li>
        <li>
          <strong>5a & 5b. Motor Arm (Left and Right):</strong> The limb is
          elevated to 90 degrees (if sitting) and held for 10 seconds. Drift
          or inability to move is scored (0 = no drift, 4 = no movement).
        </li>
        <li>
          <strong>6a & 6b. Motor Leg (Left and Right):</strong> The leg is
          elevated to 30 degrees (supine) and held for 5 seconds (0 = no
          drift, 4 = no movement).
        </li>
        <li>
          <strong>7. Limb Ataxia:</strong> Finger-nose-finger and heel-shin
          tests to look for cerebellar lesions (0 = absent, 2 = present in
          two limbs).
        </li>
        <li>
          <strong>8. Sensory:</strong> Response to pinprick on the face, arm,
          trunk, and leg (0 = normal, 2 = severe to total sensory loss).
        </li>
        <li>
          <strong>9. Best Language:</strong> Patient describes a picture,
          names items, and reads sentences to assess for aphasia (0 = no
          aphasia, 3 = mute/global aphasia).
        </li>
        <li>
          <strong>10. Dysarthria:</strong> Patient reads a list of specific
          words to test motor speech articulation (0 = normal, 2 = severe
          slurring/mute).
        </li>
        <li>
          <strong>11. Extinction and Inattention (Neglect):</strong> Assesses
          whether the patient recognizes stimuli on both sides of their body
          simultaneously (0 = no abnormality, 2 = profound hemi-inattention).
        </li>
      </ol>

      <h3>Interpreting the Total Score</h3>
      <p>
        The total score categorizes the severity of the stroke and strongly
        predicts both the immediate therapeutic pathway and the long-term
        clinical outcome:
      </p>
      <ul>
        <li><strong>Score 0:</strong> No stroke symptoms.</li>
        <li><strong>Score 1 - 4:</strong> Minor stroke.</li>
        <li><strong>Score 5 - 15:</strong> Moderate stroke.</li>
        <li><strong>Score 16 - 20:</strong> Moderate to severe stroke.</li>
        <li><strong>Score 21 - 42:</strong> Severe stroke.</li>
      </ul>

      <h3>Clinical Application and Reperfusion Therapy</h3>
      <p>The NIHSS is heavily utilized in the decision algorithm for administering intravenous thrombolytics:</p>
      <ul>
        <li>
          <strong>Score &lt; 4 (Minor Stroke):</strong> The decision to give
          thrombolytics is nuanced. If the deficits are "non-disabling"
          (e.g., mild sensory loss), thrombolytics may be withheld due to the
          risk of hemorrhage outweighing the benefit. However, if a score of
          2 represents a disabling deficit (e.g., severe isolated aphasia or
          a severe hemianopia), thrombolytics are generally indicated.
        </li>
        <li>
          <strong>Score 5 - 25:</strong> This is the classic therapeutic
          window where intravenous thrombolysis has demonstrated the most
          profound benefit.
        </li>
        <li>
          <strong>Score &gt; 25 (Severe Stroke):</strong> These patients
          usually have massive occlusions (e.g., Middle Cerebral Artery or
          Internal Carotid Artery). While thrombolytics might be given, the
          risk of hemorrhagic transformation is higher. These patients are
          prime candidates for urgent evaluation for Endovascular
          Thrombectomy (mechanical clot retrieval).
        </li>
      </ul>

      <h3>Limitations of the NIHSS</h3>
      <p>While essential, the NIHSS is not without flaws:</p>
      <ul>
        <li>
          <strong>Anterior vs. Posterior Circulation Bias:</strong> The scale
          heavily weights deficits associated with anterior circulation
          strokes (e.g., middle cerebral artery territory), such as
          hemiparesis and aphasia. It scores poorly for posterior
          circulation strokes (e.g., brainstem or cerebellar infarctions). A
          patient with a devastating brainstem stroke causing severe
          vertigo, dysphagia, and cranial nerve palsies might score
          artificially low (e.g., NIHSS 2 or 3), masking the true severity
          of their condition.
        </li>
        <li>
          <strong>Language Bias:</strong> Left hemisphere strokes (which
          usually cause aphasia) tend to score higher than right hemisphere
          strokes of identical size, because language deficits generate more
          points than neglect.
        </li>
      </ul>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: Does an NIHSS of 0 mean the patient did not have a stroke?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: No. A patient can have an acute stroke (particularly small
            lacunar infarcts or posterior circulation strokes) that causes
            symptoms not heavily penalized by the scale, resulting in a
            score of 0 or 1 despite true ischemia.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: Can non-neurologists perform the NIHSS?</strong>
          <p className="mt-1 text-ink-muted">
            A: Yes. The strength of the NIHSS is that it is highly
            reproducible. Emergency physicians, nurses, and EMS personnel
            undergo standardized certification to perform the exam
            accurately, ensuring consistent communication across the
            continuum of care.
          </p>
        </div>
      </div>
    </div>
  );
}
