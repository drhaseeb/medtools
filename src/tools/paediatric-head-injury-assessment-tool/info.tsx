import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function PaediatricHeadInjuryInfo() {
  return (
    <>
      <ReviewedBadge updated="August 2026" />

      <div className="prose max-w-none">
        <h2>What Is the NICE NG232 Paediatric Head Injury Pathway?</h2>
        <p>
          Head injury in children is extremely common and, in the overwhelming
          majority of cases, trivial. The clinical challenge — as with adults
          — is picking out the small number of children who have sustained a
          clinically important intracranial injury without exposing every
          child who bumps their head to an unnecessary CT scan and its
          associated radiation dose, which carries a proportionally greater
          lifetime risk in a child than in an adult. NICE guideline NG232,
          "Head injury: assessment and early management," sets out a
          paediatric imaging pathway that is structurally different from the
          adult pathway, not just an adult pathway with adjusted numbers.
        </p>
        <p>
          This tool implements the NG232 pathway for children and young
          people under 16. It sorts a child into one of three outcomes: a CT
          head scan within 1 hour (triggered by any one of eight high-risk
          features, one of which is infant-specific), a CT head scan within 1
          hour on the basis of <em>more than one</em> of six lower-tier risk
          factors, a minimum 4-hour period of hospital observation when
          exactly <em>one</em> of those six factors is present, or no imaging
          or observation indication at all. It does not cover patients 16 and
          over, who are assessed against the separate adult NG232 pathway
          modelled in this site's adult head injury assessment tool.
        </p>

        <h2>How the Paediatric Pathway Differs From the Adult Pathway</h2>
        <p>
          The single most important thing to understand about the paediatric
          pathway is that it is not a scaled-down version of the adult one.
          The adult pathway is a simple "any one risk factor triggers the
          8-hour scan" rule. The paediatric pathway's second tier is
          deliberately conjunctive in a different way: it counts how many of
          six risk factors are present, and the recommendation changes
          depending on whether that count is zero, exactly one, or more than
          one. A single risk factor on its own is treated as reassuring
          enough to justify a period of observation rather than an immediate
          scan; two or more together are not. This "count-based" structure is
          the feature most often mis-remembered or mis-applied by clinicians
          more familiar with the adult rule, and it is the main reason this
          tool exists as a separate calculator rather than an option inside
          the adult one.
        </p>
        <p>
          The paediatric pathway also has infant-specific criteria that have
          no adult equivalent — a lower GCS threshold for infants under 1
          year, a tense fontanelle as an alternative to a palpable skull
          fracture, and a scalp injury size threshold — reflecting that
          history and examination are inherently less reliable in pre-verbal
          infants, and that some findings (like a bulging fontanelle) are only
          physically possible before the skull fully fuses.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 4-year-old falls from a climbing frame roughly 1.5 metres high.
          She cried immediately, was never unconscious, and has no amnesia
          for the event (a dangerous mechanism and LOC/amnesia are both
          absent, but a "high fall" of this height is judged a dangerous
          mechanism by most departments — assume it is ticked here). She has
          vomited twice since the injury (not three or more), and her parents
          say she seems "a bit sleepy but rousable" on the drive in, which the
          assessing clinician documents as abnormal drowsiness. Her GCS is 15
          throughout, with no skull fracture signs, no focal deficit, and no
          seizure. Counting the six risk factors: dangerous mechanism (yes)
          and abnormal drowsiness (yes) — two factors — with vomiting not
          meeting the three-episode threshold. Because more than one risk
          factor is present, NG232 recommends a CT head scan within 1 hour,
          not a period of observation, even though no single "immediate"
          criterion from the first list was met.
        </p>

        <h2>The Eight Immediate (1-Hour) Criteria</h2>
        <p>
          Any one of the following in a child or young person under 16
          triggers a CT head scan within 1 hour of the risk factor being
          identified:
        </p>
        <ul>
          <li>Suspicion of non-accidental injury.</li>
          <li>Post-traumatic seizure, with no history of epilepsy.</li>
          <li>GCS less than 14 on initial assessment in the emergency department — or, for infants under 1 year, GCS less than 15.</li>
          <li>GCS less than 15 when reassessed at 2 hours after the injury.</li>
          <li>Suspected open or depressed skull fracture, or a tense fontanelle.</li>
          <li>Any sign of a basal skull fracture — haemotympanum, "panda"/"raccoon" eyes, cerebrospinal fluid leak from the ear or nose, or Battle's sign.</li>
          <li>Focal neurological deficit.</li>
          <li>For infants specifically: a bruise, swelling, or laceration of more than 5cm on the head.</li>
        </ul>

        <h2>The Six-Factor, Count-Based Second Tier</h2>
        <p>
          For children who meet none of the eight immediate criteria above,
          NG232 asks how many of the following six risk factors are present:
        </p>
        <ul>
          <li>Witnessed loss of consciousness lasting more than 5 minutes.</li>
          <li>Abnormal drowsiness.</li>
          <li>Three or more discrete episodes of vomiting since the injury.</li>
          <li>Dangerous mechanism of injury (for example, a high-speed road traffic collision, a fall from a significant height, or a high-speed injury from a projectile or an object).</li>
          <li>Amnesia (retrograde or anterograde) lasting more than 5 minutes.</li>
          <li>Any current bleeding or clotting disorder.</li>
        </ul>
        <p>
          <strong>More than one</strong> of these present together indicates
          a CT head scan within 1 hour. <strong>Exactly one</strong> indicates
          a minimum period of 4 hours' clinical observation instead. If any
          new immediate-tier feature develops during that observation
          period — GCS falling below 15, further vomiting, or new or
          recurring abnormal drowsiness — the child should be escalated
          straight to a CT scan rather than completing the rest of the
          observation window.
        </p>

        <h2>What This Tool Does Not Cover</h2>
        <p>
          This tool does not model a paediatric-specific anticoagulant or
          antiplatelet pathway — therapeutic anticoagulation is uncommon in
          children and is not addressed by a distinct NG232 recommendation in
          the way it is for adults, so any child on anticoagulant or
          antiplatelet therapy after a head injury should be discussed
          directly with a senior clinician. It also does not cover cervical
          spine imaging, polytrauma pathways, or the separate safeguarding
          processes that should run in parallel whenever non-accidental
          injury is suspected — a positive answer to that question here
          should always trigger your local safeguarding pathway in addition
          to, not instead of, the imaging recommendation.
        </p>

        <h2>Comparison to PECARN</h2>
        <p>
          Outside the UK, the dominant paediatric head injury decision
          instrument is the PECARN rule (Kuppermann et al., 2009), derived
          separately for children under and over 2 years of age in a large
          North American cohort. PECARN and NG232's paediatric pathway share
          the same broad goal and many overlapping risk factors — GCS,
          palpable skull fracture, scalp haematoma, mechanism, vomiting,
          headache, and behaviour change all appear in some form in both —
          but the exact thresholds, the age cut-offs, and the decision
          structure (PECARN stratifies primarily by CT versus observation
          versus discharge based on risk tier, rather than NG232's
          "count of factors" approach) are not identical. In UK practice,
          NG232 is the applicable standard, and the two rules should not be
          mixed.
        </p>

        <h2>Discharge and Safety-Netting for Children</h2>
        <p>
          For children who meet no imaging or observation criterion, NICE
          recommends discharge with both verbal and written head injury
          advice given directly to the parent or carer, since a young child
          cannot be relied on to self-monitor or self-report deterioration.
          Safety-netting advice should specifically instruct the parent or
          carer to seek urgent medical attention for: new or worsening
          drowsiness, confusion, or difficulty waking the child, repeated
          vomiting, a seizure, new unsteadiness or weakness, a severe or
          worsening headache, any fluid leaking from the nose or ear, or
          any other feature that concerns them, however non-specific it may
          seem.
        </p>

        <h2>Limitations of This Tool</h2>
        <p>
          This calculator is a structured checklist, not a substitute for a
          full clinical assessment. It does not replace a formal safeguarding
          assessment where non-accidental injury is suspected, does not model
          polytrauma or cervical spine imaging pathways that often need to be
          considered alongside head injury imaging, and depends entirely on
          the accuracy of the history and examination findings entered by the
          clinician — a young child's account of loss of consciousness or
          amnesia is frequently unreliable and should be corroborated with a
          witness wherever possible.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "My patient has exactly one risk factor from the six-factor list — why doesn't this tool recommend a CT scan?",
            a: "NG232's paediatric pathway is deliberately count-based for this tier: exactly one of the six risk factors indicates a minimum 4-hour observation period, not immediate imaging. More than one of the same six factors together does indicate an immediate CT scan. This is the single most important structural difference from the simpler adult 'any one factor' rule.",
          },
          {
            q: "Can this tool be used for a 17-year-old?",
            a: "No. NG232 defines the paediatric pathway as applying to children and young people under 16. A 17-year-old should be assessed with the adult head injury assessment tool instead.",
          },
          {
            q: "What happens if a child develops new drowsiness partway through the 4-hour observation period?",
            a: "They should be escalated to an immediate CT head scan rather than completing the observation window. The same applies to a fall in GCS below 15 or any further vomiting during observation.",
          },
          {
            q: "Does this tool cover children on anticoagulant medication?",
            a: "No. Paediatric anticoagulation is uncommon and is not addressed by a distinct NG232 recommendation the way it is for adults. Discuss any such case directly with a senior clinician rather than relying on this tool.",
          },
          {
            q: "Is the infant scalp injury criterion relevant to a 3-year-old?",
            a: "No — it applies specifically to infants under 1 year old, which is why this tool only shows that checkbox once 'Infant Under 1 Year Old' is selected.",
          },
        ]}
      />

      <RelatedTools slugs={["head-injury-assessment-tool", "gcs-calculator", "rosier-scale"]} />

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
