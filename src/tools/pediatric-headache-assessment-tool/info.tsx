import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function PediatricHeadacheInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>Why Headache in Children Needs a Structured Approach</h2>
        <p>
          Headache is one of the most common complaints in paediatrics —
          most children will experience at least one significant headache
          before adolescence, and the overwhelming majority of these are
          entirely benign. The clinical challenge is not treating headache
          itself, but reliably separating the small minority of children
          whose headache is a symptom of something dangerous — raised
          intracranial pressure, infection, a vascular event, or a mass
          lesion — from the vast majority whose headache is a primary
          disorder such as migraine or tension-type headache that, while
          sometimes disabling, carries no risk of serious harm.
        </p>
        <p>
          This tool is built around that exact triage question. It first
          screens for validated red-flag features that should prompt urgent
          escalation regardless of anything else, and only if none are
          present does it move on to classifying the headache's likely
          primary type using internationally recognized diagnostic
          features.
        </p>

        <h2>The Red-Flag Framework: From SNOOP to SNNOOP10</h2>
        <p>
          In 2003, a mnemonic called SNOOP was proposed to help clinicians
          systematically screen for secondary headache: <strong>S</strong>ystemic
          symptoms or disease, <strong>N</strong>eurological symptoms or
          signs, <strong>O</strong>nset that is sudden/thunderclap or new
          after age 40, and <strong>P</strong>attern change from a person's
          usual headache. As evidence accumulated, this was expanded into
          the more comprehensive <strong>SNNOOP10</strong> list, which adds
          positional headache, headache precipitated by Valsalva
          manoeuvres (coughing, straining, sneezing), papilledema on
          examination, progressive headache with atypical presentation,
          headache in pregnancy or the puerperium, painful red eye with
          autonomic features, post-traumatic onset, association with
          immune system pathology, and new-onset headache in someone
          overusing analgesics.
        </p>
        <p>
          This tool adapts the paediatric-relevant subset of that framework
          into eight specific, checkable features: systemic symptoms
          (fever, rash, neck stiffness, unexplained weight loss),
          neurological signs (new confusion, ataxia, focal weakness, vision
          loss), thunderclap onset, headache that wakes the child from
          sleep, early-morning vomiting, positional or Valsalva-triggered
          pain, a clearly progressive pattern over recent weeks, and any
          new persistent headache in a child under six. If <em>any</em> of
          these are present, the tool does not attempt to classify the
          headache as migraine or tension-type at all — it flags the case
          for urgent evaluation, which may include neuroimaging, rather
          than risking a false reassurance based on pain characteristics
          alone.
        </p>

        <h2>How the Classification Works When No Red Flags Are Present</h2>
        <p>
          Once red flags have been excluded, the tool asks four questions
          about the pain itself — location (bilateral/frontotemporal versus
          unilateral), quality (pulsating/throbbing versus
          pressing/tightening), intensity (mild versus moderate-to-severe),
          and the effect of routine physical activity (aggravated versus
          unaffected) — plus three associated-symptom checkboxes: nausea or
          vomiting, photophobia, and phonophobia.
        </p>
        <p>
          These map directly onto the two most common primary headache
          diagnoses. A pattern of at least two migrainous pain features
          (pulsating quality, moderate-to-severe intensity, aggravation by
          activity, with unilateral location contributing a half-weight
          since it is a less reliable marker in children) <em>combined
          with</em> nausea/vomiting or the combination of photophobia and
          phonophobia together is classified as consistent with migraine.
          Conversely, a pattern of at least three tension-type features
          (bilateral, pressing quality, mild intensity, unaffected by
          activity) without significant nausea or combined photo/phonophobia
          is classified as tension-type. Anything that doesn't cleanly fit
          either pattern — which is common in children, whose headache
          phenotypes overlap more than adults' — is reported as mixed or
          indeterminate, with advice to keep a headache diary rather than
          forcing a label that may not be accurate.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 9-year-old girl reports recurring headaches over the past
          three months. She has no fever, no neurological symptoms, no
          thunderclap onset, and the headaches don't wake her from sleep or
          occur on waking with vomiting — no red flags are checked. She
          describes the pain as bilateral, pulsating, moderate-to-severe
          (she has to stop playing and lie down), worse when running
          around, and accompanied by both nausea and sensitivity to light
          and sound.
        </p>
        <p>
          Scoring the migraine features: pulsating (+1), moderate-severe
          (+1), aggravated by activity (+1), bilateral rather than
          unilateral (+0) — three migraine features, well above the
          threshold of two — combined with nausea, which alone satisfies
          the "migraine-associated" requirement. The tool returns "Pattern
          Consistent With Migraine," despite the bilateral location, which
          would often be treated as atypical if the clinician were using
          adult-pattern intuition rather than paediatric-specific
          criteria — precisely the kind of case this framework exists to
          catch correctly.
        </p>

        <h2>ICHD-3 Migraine Criteria in Children — What's Actually Different</h2>
        <p>
          The International Classification of Headache Disorders, 3rd
          edition (ICHD-3), is the reference diagnostic standard for
          primary headache disorders, and it explicitly modifies its adult
          migraine criteria for children and adolescents under 18 in three
          important ways. First, attack duration: adults require a minimum
          of 4 hours, but children may be diagnosed with attacks as short
          as <strong>2 hours</strong> — and if the child falls asleep
          during the attack, the sleeping time still counts toward the
          duration. Second, location: while adult migraine is classically
          unilateral, migraine in children and adolescents is frequently{" "}
          <strong>bilateral or bifrontal/bitemporal</strong>, with the more
          typical unilateral pattern usually only emerging in late
          adolescence. Third, a full ICHD-3 diagnosis formally requires at
          least five qualifying attacks over time meeting these criteria —
          a single episode, however typical, is only ever a "probable"
          diagnosis until that pattern is established.
        </p>
        <p>
          Tension-type headache, by contrast, is defined by the absence of
          migrainous features: bilateral, pressing or tightening
          (non-pulsating) quality, mild-to-moderate intensity that does not
          prohibit activity (though it may inhibit it), and no more than
          one of nausea/photophobia/phonophobia — and specifically not the
          combination of both photophobia and phonophobia together, which
          points back toward migraine.
        </p>

        <h2>Management Directions by Classification</h2>
        <p>
          For headaches classified as migrainous, first-line management in
          children centres on rest in a dark, quiet room, early dosing with
          a simple analgesic or NSAID (ibuprofen has among the best
          paediatric evidence), adequate hydration, and identifying and
          moderating triggers such as poor sleep, skipped meals, and screen
          time via a headache diary. Recurrent, frequent, or significantly
          disabling attacks warrant discussion of preventive strategies
          with a primary care clinician or paediatric neurologist, rather
          than relying on frequent acute dosing, which itself risks
          medication-overuse headache.
        </p>
        <p>
          For tension-type patterns, the emphasis shifts toward lifestyle
          factors: sleep regularity, hydration, regular meals, screen-time
          moderation, and identifying psychosocial stressors (school
          pressure, family conflict, sleep debt) that are disproportionately
          common precipitants in children. Simple analgesia is reasonable
          for acute episodes but should not become a daily habit.
        </p>
        <p>
          For the mixed/indeterminate group, the most useful next step is
          rarely more medication — it's data. A structured 2-to-4-week
          headache diary capturing frequency, duration, associated
          symptoms, and possible triggers, reviewed with a primary care
          clinician, very often clarifies the pattern that a single
          consultation cannot.
        </p>

        <h2>Comparison to Adult Headache Tools</h2>
        <p>
          Clinicians familiar with adult headache red-flag screening should
          note that paediatric practice deliberately lowers several
          thresholds. "Older age at onset" — a standard adult red flag for
          new secondary pathology — does not apply to children and is
          therefore replaced in this tool with "new, persistent headache
          under age 6," reflecting the fact that primary headache disorders
          are less common, and secondary causes proportionally more
          common, at very young ages. Similarly, this tool does not attempt
          a Migraine Disability Assessment (MIDAS)-style scoring approach,
          since disability scoring instruments of that kind have not been
          as extensively validated in young children as the ICHD-3
          diagnostic-feature approach used here.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Single-episode assessment:</strong> this tool assesses
            the pattern of a single reported episode. A formal ICHD-3
            migraine diagnosis requires at least five such attacks over
            time — this tool supports recognizing a <em>probable</em>{" "}
            pattern, not making a definitive diagnosis on one visit.
          </li>
          <li>
            <strong>Not a substitute for examination:</strong> a full
            history and neurological examination — including fundoscopy
            for papilledema — should always accompany this screen; several
            SNNOOP10 features (papilledema, focal neurological signs) can
            only be identified on examination, not by history alone.
          </li>
          <li>
            <strong>Pre-verbal children:</strong> this tool assumes a child
            old enough to describe pain location, quality, and triggers.
            In infants and very young children, headache may present only
            as irritability, head-banging, or feeding difficulty, and
            requires a different clinical approach entirely.
          </li>
          <li>
            <strong>Chronic daily headache and medication overuse:</strong>{" "}
            this tool is designed for episodic presentations and does not
            screen for medication-overuse headache, which should be
            considered in any child with headache on 15 or more days per
            month who is also using acute analgesics frequently.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Does my child need a brain scan for their headache?",
            a: "Most children with headache do not need neuroimaging. Imaging is generally reserved for children with red-flag features (as screened by this tool), an abnormal neurological examination, or a headache pattern that doesn't fit a typical primary headache disorder. Your clinician will decide based on the full clinical picture, not on this tool alone.",
          },
          {
            q: "Can young children really have migraines?",
            a: "Yes. Migraine is common in childhood and is under-recognized partly because it looks different from adult migraine — it is more often bilateral, can be as short as 2 hours, and young children sometimes show it as recurrent abdominal pain or cyclic vomiting rather than head pain (so-called 'migraine equivalents').",
          },
          {
            q: "What should I do if a red flag is identified?",
            a: "Arrange prompt medical assessment rather than waiting to see if the headache resolves on its own. This tool intentionally errs toward caution: red-flag features are associated with, but do not guarantee, a serious secondary cause — the point of flagging them is to ensure a clinician examines the child and decides whether further investigation is needed.",
          },
          {
            q: "Why does the tool ask about sleep and morning vomiting specifically?",
            a: "A headache that specifically wakes a child from sleep, or that is accompanied by vomiting immediately on waking (rather than during the day), is a recognized pattern associated with raised intracranial pressure and is treated as a red flag distinct from ordinary morning headache or vomiting from an unrelated stomach illness.",
          },
        ]}
      />

      <RelatedTools slugs={["mmse-calculator", "child-development-tracker", "kawasaki-disease-criteria"]} />

      <References
        items={[
          {
            text: "Headache Classification Committee of the International Headache Society (IHS). The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia. 2018;38(1):1-211.",
          },
          {
            text: "Do TP, Remmers A, Schytz HW, et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019;92(3):134-144.",
          },
          {
            text: "Gelfand AA. Migraine and Childhood Periodic Syndromes in Children and Adolescents. Continuum (Minneap Minn). 2018;24(4):1108-1123.",
          },
        ]}
      />
    </>
  );
}
