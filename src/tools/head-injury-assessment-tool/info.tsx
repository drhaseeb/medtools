export default function HeadInjuryInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the Canadian CT Head Rule (CCHR)</h2>

      <p>
        Minor head injuries are one of the most frequent presentations in
        emergency departments worldwide. While the vast majority of these
        patients have suffered a simple concussion or contusion and will
        recover without intervention, a small but critical percentage
        harbor a traumatic intracranial hemorrhage or skull fracture
        requiring neurosurgical intervention.
      </p>

      <p>
        Historically, the fear of missing a catastrophic bleed led to the
        widespread, indiscriminate use of Computed Tomography (CT) scans
        for almost all head injury patients. This practice is detrimental:
        it exposes millions of patients to unnecessary ionizing radiation
        (which carries a long-term risk of inducing malignancy), delays
        care in overcrowded emergency departments, and incurs massive
        healthcare costs. The Canadian CT Head Rule (CCHR) was developed to
        solve this problem by providing a highly sensitive, validated
        clinical decision rule to safely identify which patients with minor
        head trauma actually require a CT scan.
      </p>

      <h3>Inclusion and Exclusion Criteria</h3>
      <p>
        The CCHR is not universally applicable to all head trauma patients.
        It was specifically designed for patients who meet the definition
        of "minor head injury." It is vital to ensure the patient fits the
        inclusion criteria before applying the rule:
      </p>

      <p>
        <strong>Inclusion Criteria:</strong>
      </p>
      <ul>
        <li>
          Patients presenting with a blunt trauma to the head resulting in
          witnessed loss of consciousness, definite amnesia to the event, or
          witnessed disorientation.
        </li>
        <li>
          Initial Glasgow Coma Scale (GCS) score in the emergency department
          must be &ge; 13.
        </li>
      </ul>

      <p>
        <strong>Exclusion Criteria (Do NOT use the rule if any apply):</strong>
      </p>
      <ul>
        <li>
          Age under 16 years (Pediatric patients require the PECARN head
          injury rules).
        </li>
        <li>
          Minimal head injury without loss of consciousness or amnesia.
        </li>
        <li>No clear history of trauma (e.g., sudden collapse followed by a fall).</li>
        <li>Obvious penetrating skull injury or depressed skull fracture.</li>
        <li>
          Acute focal neurological deficit (e.g., asymmetrical pupils, limb
          weakness).
        </li>
        <li>Instability of vital signs associated with major trauma.</li>
        <li>Seizure prior to assessment in the ED.</li>
        <li>
          Bleeding disorders or current use of oral anticoagulants (e.g.,
          Warfarin, DOACs). These patients require a CT scan regardless of
          symptoms due to high bleeding risk.
        </li>
      </ul>

      <h3>The High and Medium Risk Criteria</h3>
      <p>
        The CCHR consists of five high-risk criteria (indicating need for
        neurological intervention) and two medium-risk criteria (indicating
        brain injury visible on CT). If a patient meets <em>any one</em> of
        these seven criteria, a CT head is indicated. If they meet{" "}
        <em>none</em>, a CT is not required.
      </p>

      <p>
        <strong>High-Risk Criteria (Predicts need for neurosurgical intervention):</strong>
      </p>
      <ol>
        <li>
          <strong>GCS score &lt; 15 at 2 hours after injury:</strong> A
          prolonged alteration in mental status is a hallmark sign of
          expanding intracranial pathology.
        </li>
        <li>
          <strong>Suspected open or depressed skull fracture:</strong>{" "}
          Palpable step-off on examination or visible brain matter/laceration
          exposing bone.
        </li>
        <li>
          <strong>Any sign of basal skull fracture:</strong> These are
          classic clinical signs including hemotympanum (blood behind the
          eardrum), "raccoon eyes" (periorbital ecchymosis), Battle's sign
          (retroauricular ecchymosis), or cerebrospinal fluid (CSF)
          oto/rhinorrhea (leaking fluid from ear/nose).
        </li>
        <li>
          <strong>Vomiting &ge; 2 episodes:</strong> Recurrent vomiting is a
          symptom of increased intracranial pressure.
        </li>
        <li>
          <strong>Age &ge; 65 years:</strong> Advanced age is associated
          with cerebral atrophy, stretching bridging veins, making them more
          susceptible to tearing (subdural hematoma) even from minor trauma.
        </li>
      </ol>

      <p>
        <strong>Medium-Risk Criteria (Predicts brain injury on CT):</strong>
      </p>
      <ol>
        <li>
          <strong>Amnesia before impact &ge; 30 minutes:</strong> Retrograde
          amnesia extending significantly back before the traumatic event
          correlates with the severity of the concussive force.
        </li>
        <li>
          <strong>Dangerous mechanism:</strong> Specifically defined as a
          pedestrian struck by a motor vehicle, an occupant ejected from a
          motor vehicle, or a fall from an elevation &ge; 3 feet or &ge; 5
          stairs.
        </li>
      </ol>

      <h3>Clinical Application and Evidence Base</h3>
      <p>
        In its original derivation and subsequent massive validation
        studies, the CCHR demonstrated a sensitivity of 100% for predicting
        the need for neurosurgical intervention and a sensitivity of &gt;98%
        for identifying clinically important brain injury. This means that
        if a patient fits the criteria and scores negative on all 7
        questions, the chance of missing an injury that requires surgery is
        practically zero.
      </p>

      <p>
        By strictly adhering to the CCHR, emergency departments can safely
        reduce CT scanning rates by approximately 30-50% in patients with
        minor head injuries, significantly improving departmental flow and
        patient safety.
      </p>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: Can I use the CCHR for a patient who is intoxicated?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: It is controversial. In the original study, intoxicated
            patients were not excluded. However, determining if a GCS of 14
            is due to a bleed or due to alcohol is clinically challenging.
            Many guidelines suggest observing the intoxicated patient until
            they metabolize the alcohol; if their GCS does not improve to
            15 within a few hours, a CT should be considered regardless of
            the rule.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: How does the CCHR compare to the New Orleans Criteria (NOC)?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Both are highly validated rules. The NOC applies only to
            patients with a GCS of exactly 15, whereas the CCHR applies to
            GCS 13-15. Studies generally show the CCHR is more specific than
            the NOC, meaning it results in fewer unnecessary CT scans while
            maintaining the same 100% sensitivity for neurosurgical lesions.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: What if the patient is on Aspirin?</strong>
          <p className="mt-1 text-ink-muted">
            A: The CCHR technically only excludes patients with "bleeding
            disorders" or those on therapeutic "oral anticoagulants" (like
            Warfarin or Apixaban). Standard antiplatelet therapy (like
            Aspirin 81mg) is generally not an exclusion criterion for using
            the rule, though clinical judgment regarding the mechanism of
            injury is still required.
          </p>
        </div>
      </div>
    </div>
  );
}
