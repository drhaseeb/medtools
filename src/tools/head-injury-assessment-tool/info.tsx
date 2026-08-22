import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function HeadInjuryInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the NICE NG232 Head Injury Pathway?</h2>
        <p>
          Head injury is one of the highest-volume presentations to
          emergency departments worldwide, and the vast majority of these
          patients have sustained a genuinely minor injury with no
          intracranial pathology. The clinical challenge is not treating the
          rare severe injury — that is usually obvious — it is reliably
          identifying the small minority of apparently well patients who are
          harbouring a clinically important intracranial bleed, without
          scanning every single patient who walks through the door. In the
          United Kingdom, this decision is governed by the National
          Institute for Health and Care Excellence guideline NG232, "Head
          injury: assessment and early management," which sets out a
          structured, criteria-based pathway for deciding who needs an
          urgent CT head scan, on what timescale, and who can safely be
          observed or discharged.
        </p>
        <p>
          This tool implements the adult (16 years and over) imaging
          decision pathway from NG232. It sorts a patient into one of three
          outcomes: a CT head scan within 1 hour (the "immediate" pathway,
          triggered by any one of seven high-risk features), a CT head scan
          within 8 hours of the injury (triggered by loss of consciousness
          or amnesia combined with an additional risk factor, or by
          anticoagulant/antiplatelet use), or no imaging indication at all,
          in which case safety-netted discharge is usually appropriate. It
          does not cover children and young people under 16, who are
          assessed against a separate, age-stratified set of NG232 criteria
          not modelled here.
        </p>

        <h2>Why a Formal Decision Rule Exists</h2>
        <p>
          Before validated clinical decision rules existed, imaging
          decisions after head injury were essentially left to individual
          clinical judgement, guided only by loose teaching about
          "red flags." This produced two problems simultaneously: patients
          with a subtle but genuinely dangerous injury were sometimes sent
          home without a scan, while a great many low-risk patients were
          scanned unnecessarily, tying up scanner capacity and exposing
          patients to avoidable radiation. Through the 1990s, several
          research groups set out to derive rules that used only bedside,
          objectively verifiable clinical findings — level of consciousness,
          vomiting, seizure, mechanism of injury — to flag the patients who
          actually needed a scan, with a pre-specified, deliberately high
          sensitivity for the outcome that matters most: a bleed requiring
          neurosurgical intervention.
        </p>
        <p>
          NICE first issued UK-wide head injury guidance in 2003 (CG4),
          revised substantially in 2007 and again in 2014 (CG176), and
          replaced that guideline with NG232 in May 2023 following a full
          evidence review. The overall structure of the imaging pathway —
          an immediate tier and a slower observation tier — has remained
          consistent across these revisions, but the exact trigger criteria,
          and in particular the approach to patients on anticoagulant or
          antiplatelet medication, have been refined at each update as new
          evidence has accumulated.
        </p>

        <h2>How This Tool Applies the Criteria</h2>
        <p>
          The calculator above walks through NG232's adult pathway in the
          same order a clinician would apply it in the emergency department.
          First, it checks for any of the seven "immediate" risk factors —
          if even one is present, the patient needs a CT within 1 hour and
          no further criteria need to be checked. If none of those are
          present, it checks whether the patient has had any loss of
          consciousness or amnesia since the injury; if so, it looks for one
          of four additional risk factors that together indicate the need
          for a scan within 8 hours. Separately, and regardless of the
          above, it checks whether the patient is taking an anticoagulant or
          a qualifying antiplatelet, which triggers its own 8-hour (or, if
          presenting late, 1-hour) recommendation. If none of these pathways
          are triggered, the tool concludes that no NG232 imaging criterion
          is met and that discharge with head injury advice is usually
          appropriate, subject to overall clinical judgement.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 72-year-old woman on apixaban for atrial fibrillation trips over
          a kerb and hits her head. She did not lose consciousness and has
          no amnesia for the event. Her GCS is 15 throughout, she has not
          vomited, has no focal neurology, and there is no sign of a skull
          fracture. Because she is over 65, if she had also lost
          consciousness or had amnesia she would trigger the 8-hour pathway
          on that basis — but she has neither, so the "loss of consciousness
          or amnesia" gate is not satisfied and the age/mechanism/bleeding
          disorder criteria are never reached. However, she is taking
          apixaban, a direct-acting oral anticoagulant, which independently
          triggers the anticoagulant pathway regardless of any other risk
          factor. She presents to the emergency department 90 minutes after
          the fall — well within the 8-hour window — so the correct
          recommendation is a CT head scan within 8 hours of the injury, not
          within 1 hour. If instead she had presented 9 hours after the
          fall, having initially stayed at home, the anticoagulant pathway
          would escalate her to a CT within 1 hour of arrival, because she
          is already outside the 8-hour post-injury window that the slower
          pathway assumes.
        </p>

        <h2>The Seven Immediate (1-Hour) Criteria</h2>
        <p>
          Any one of the following present in a patient aged 16 or over
          triggers a CT head scan within 1 hour <em>of the risk factor being
          identified</em>, with a provisional written report available
          within 1 hour of the scan itself:
        </p>
        <ul>
          <li>GCS of 12 or less (i.e. below 13) on initial assessment in the emergency department.</li>
          <li>GCS below 15 when reassessed at 2 hours after the injury.</li>
          <li>Suspected open or depressed skull fracture.</li>
          <li>Any sign of a basal skull fracture — haemotympanum, "panda"/"raccoon" eyes, cerebrospinal fluid leak from the ear or nose, or Battle's sign.</li>
          <li>Post-traumatic seizure.</li>
          <li>Focal neurological deficit.</li>
          <li>More than one episode of vomiting since the injury.</li>
        </ul>
        <p>
          These seven items were retained essentially unchanged from the
          2014 CG176 guideline into NG232, reflecting a strong, consistent
          evidence base linking each of them to a materially increased
          probability of a clinically important intracranial injury.
        </p>

        <h2>The 8-Hour Criteria: Loss of Consciousness or Amnesia Plus a Risk Factor</h2>
        <p>
          A second, lower-acuity pathway applies to patients who have had
          some loss of consciousness or amnesia since the injury but do not
          meet any of the seven immediate criteria above. For these
          patients, NG232 recommends a CT head scan within 8 hours of the
          injury if <em>any</em> of the following is also present:
        </p>
        <ul>
          <li>Age 65 years or over.</li>
          <li>Any current bleeding or clotting disorder (for example, haemophilia or a coagulopathy from liver disease — this is distinct from anticoagulant medication, which is covered separately below).</li>
          <li>A dangerous mechanism of injury — a pedestrian or cyclist struck by a motor vehicle, an occupant ejected from a vehicle, or a fall from a height of more than 1 metre or five stairs.</li>
          <li>More than 30 minutes of retrograde amnesia of events immediately before the injury.</li>
        </ul>
        <p>
          Without loss of consciousness or amnesia as the gating feature,
          none of these four risk factors on their own triggers this
          pathway — the rule is deliberately conjunctive, requiring the gate
          plus at least one risk factor together, not either in isolation.
        </p>

        <h2>The Anticoagulant and Antiplatelet Pathway</h2>
        <p>
          One of the most clinically important — and most frequently
          misapplied — parts of NG232 concerns patients taking medication
          that impairs clotting. NICE recommends considering a CT head scan
          within 8 hours of the injury for any patient on an anticoagulant
          (a vitamin K antagonist such as warfarin, a direct-acting oral
          anticoagulant such as apixaban, rivaroxaban, edoxaban or
          dabigatran, or heparin/low-molecular-weight heparin) or an
          antiplatelet agent other than aspirin monotherapy (for example
          clopidogrel, ticagrelor, or dual antiplatelet therapy) — and this
          applies <strong>regardless of whether any other risk factor is
          present</strong>. Aspirin taken alone does not trigger this
          pathway, reflecting the evidence reviewed for NG232 that aspirin
          monotherapy does not carry the same excess intracranial bleeding
          risk as the other agents. If the patient presents more than 8
          hours after the injury, the scan should be performed within 1 hour
          of assessment instead of waiting for the full 8-hour window to
          elapse, since a meaningful fraction of the 8 hours has already
          passed.
        </p>
        <p>
          This is explicitly framed by NICE as a "consider" recommendation
          rather than an absolute mandate — the guideline acknowledges that
          the evidence on anticoagulated patients' baseline intracranial
          haemorrhage risk after minor head injury is less clear-cut than
          for the immediate criteria, and encourages shared decision-making,
          particularly for patients who are otherwise entirely well and in
          whom a difficult risk conversation may be appropriate. In
          practice, most departments treat it as a default pathway unless a
          senior clinician documents an explicit reason not to scan.
        </p>

        <h2>What Changed From CG176 to NG232 in 2023</h2>
        <p>
          NG232 formally replaced CG176 (2014) in May 2023 after a full
          guideline update. The seven immediate criteria and the four
          "loss of consciousness/amnesia plus risk factor" 8-hour criteria
          were carried forward largely unchanged. The most substantive
          change for day-to-day practice was in the anticoagulant/
          antiplatelet pathway: earlier guidance had trended toward treating
          any anticoagulated head injury patient as an automatic immediate
          scan regardless of other findings, whereas NG232 introduced the
          more nuanced, discretionary 8-hour (or 1-hour-if-presenting-late)
          pathway described above, explicitly carving out aspirin
          monotherapy as an exception. NG232 also reorganised and clarified
          the paediatric pathway and strengthened recommendations on
          discharge advice, safety-netting information, and the observation
          of patients before discharge.
        </p>

        <h2>Paediatric Head Injury: A Separate Pathway</h2>
        <p>
          This tool intentionally does not attempt to model the paediatric
          NG232 pathway, which uses different vomiting and drowsiness
          thresholds, incorporates a period of observation before some
          imaging decisions, and weighs mechanism of injury differently for
          infants than for older children. Applying the adult criteria
          modelled here to a patient under 16 would produce an unreliable
          recommendation. Any patient under 16 flagged by this tool should
          be reassessed in full against the separate paediatric NG232
          algorithm, ideally with input from a clinician experienced in
          paediatric emergency medicine.
        </p>

        <h2>Comparison to Other Head Injury Decision Rules</h2>
        <p>
          NG232's imaging criteria did not emerge in isolation — they sit
          alongside several other validated clinical decision rules used
          internationally, most of which were derived in slightly different
          populations and with slightly different thresholds.
        </p>
        <ul>
          <li>
            <strong>Canadian CT Head Rule</strong> (Stiell et al., 2001):
            derived in patients with GCS 13–15 after blunt head trauma with
            loss of consciousness, amnesia, or disorientation. Its high-risk
            criteria (GCS &lt;15 at 2 hours, suspected open/depressed skull
            fracture, signs of basal skull fracture, more than one episode
            of vomiting, and age 65 or over) achieved 100% sensitivity for
            the need for neurosurgical intervention, with a separate, lower,
            medium-risk tier (amnesia before impact of 30 minutes or more,
            and dangerous mechanism) predicting any CT-visible brain injury.
            NG232's immediate criteria are closely related to — and
            partly derived from validation of — this rule.
          </li>
          <li>
            <strong>New Orleans Criteria</strong> (Haydel et al., 2000):
            developed in patients with a GCS of 15 and any loss of
            consciousness, it is more sensitive but considerably less
            specific than the Canadian rule, recommending CT for headache,
            vomiting, age over 60, intoxication, seizure, short-term memory
            deficit, visible trauma above the clavicle, or persistent
            amnesia — criteria broad enough that a much larger proportion of
            minor head injury patients end up scanned.
          </li>
          <li>
            <strong>PECARN rule</strong> (Kuppermann et al., 2009): the
            dominant decision rule for children in North America, stratified
            separately for those under and over 2 years of age, and the
            closest analogue to NG232's paediatric pathway, although the two
            are not identical and should not be used interchangeably.
          </li>
        </ul>
        <p>
          In UK practice, NG232 is the applicable standard regardless of
          which rule a clinician may also be familiar with, and mixing
          criteria from different rules risks either missing a genuine
          NG232 indication or over-scanning a patient who does not meet it.
        </p>

        <h2>Discharge, Safety-Netting, and Observation</h2>
        <p>
          For the substantial majority of patients who meet no NG232
          imaging criterion, NICE recommends discharge with both verbal and
          written head injury advice, provided a responsible adult is
          available to observe the patient for the following 24–48 hours.
          Safety-netting advice should specifically instruct the patient (or
          carer) to seek urgent medical attention for: new or worsening
          headache, repeated vomiting, new drowsiness or confusion, new
          weakness or clumsiness of a limb, visual disturbance, a seizure,
          fluid leaking from the nose or ear, or any other feature that
          concerns them. Patients admitted for 8-hour observation who
          develop any new immediate-tier feature during that period should
          be escalated straight to the 1-hour pathway rather than waiting
          out the original window.
        </p>

        <h2>Limitations of This Tool</h2>
        <p>
          This calculator is a structured checklist, not a substitute for a
          full clinical assessment. It cannot account for polytrauma (where
          separate major trauma pathways take precedence), pregnancy,
          non-accidental injury concerns, intoxication masking or mimicking
          neurological signs, patients who are unable to give a reliable
          history, or clinical gestalt that a senior clinician may
          reasonably weigh more heavily than a checklist result in an
          atypical presentation. It also does not model NG232's separate
          recommendations on cervical spine imaging, which frequently need
          to be considered alongside head injury imaging in the same
          patient, or the guideline's detailed recommendations on
          observation-level monitoring and escalation criteria once a
          patient has been admitted.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Does taking aspirin alone trigger the anticoagulant/antiplatelet pathway?",
            a: "No. NG232 specifically excludes aspirin monotherapy from this pathway. A patient on aspirin alone, with no other risk factor present, is assessed purely against the immediate and 8-hour loss-of-consciousness/amnesia criteria.",
          },
          {
            q: "Is the 1-hour and 8-hour timing measured from arrival or from the injury?",
            a: "It differs by pathway. The immediate criteria are timed from when the risk factor is identified. The 8-hour criteria (including the anticoagulant pathway, when the patient presents early) are timed from the injury itself, not from arrival — which is why a patient presenting several hours after injury may need a much faster scan than the standard 8-hour window would suggest.",
          },
          {
            q: "Can this tool be used for children?",
            a: "No. This tool models only the adult (16 and over) NG232 pathway. Children and young people are assessed against a separate, age-stratified set of NG232 criteria with different vomiting, drowsiness, and observation rules, which are not represented here.",
          },
          {
            q: "What should happen if a patient develops a new red flag while waiting for an 8-hour scan?",
            a: "They should be escalated immediately to the 1-hour pathway. Any new deterioration — falling GCS, new focal neurology, repeated vomiting, or a seizure — during the observation period overrides the original 8-hour plan.",
          },
          {
            q: "Does a normal CT head scan rule out all significant injury?",
            a: "No. A small proportion of clinically important injuries, including some extra-axial collections, evolve over hours to days after a normal early scan. Patients should still be observed for delayed deterioration, given clear safety-netting advice, and re-imaged if new neurological symptoms develop, regardless of an initially normal scan.",
          },
        ]}
      />

      <RelatedTools slugs={["gcs-calculator", "nihss-calculator", "rosier-scale"]} />

      <References
        items={[
          {
            text: "National Institute for Health and Care Excellence. Head injury: assessment and early management (NG232). Published 18 May 2023.",
            href: "https://www.nice.org.uk/guidance/ng232",
          },
          {
            text: "National Institute for Health and Care Excellence. Head injury: assessment and early management (NG232) — Recommendations.",
            href: "https://www.nice.org.uk/guidance/ng232/chapter/recommendations",
          },
          {
            text: "Stiell IG, Wells GA, Vandemheen K, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet. 2001;357(9266):1391-1396.",
          },
          {
            text: "Haydel MJ, Preston CA, Mills TJ, et al. Indications for computed tomography in patients with minor head injury. N Engl J Med. 2000;343(2):100-105.",
          },
          {
            text: "Kuppermann N, Holmes JF, Dayan PS, et al. Identification of children at very low risk of clinically-important brain injuries after head trauma: a prospective cohort study. Lancet. 2009;374(9696):1160-1170.",
          },
          {
            text: "National Institute for Health and Care Excellence. Head injury (NG232) — Rationale and impact.",
            href: "https://www.nice.org.uk/guidance/ng232/chapter/rationale-and-impact",
          },
        ]}
      />
    </>
  );
}
