import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function KawasakiDiseaseCriteriaInfo() {
  return (
    <>
      <ReviewedBadge updated="August 2026" />

      <div className="prose max-w-none">
        <h2>What Is Kawasaki Disease?</h2>
        <p>
          Kawasaki disease is an acute vasculitis of childhood, predominantly
          affecting medium-sized arteries, with the coronary arteries as its
          most feared target. Left untreated, it causes coronary artery
          aneurysms in around a quarter of affected children; treated
          promptly with intravenous immunoglobulin (IVIG), that risk falls
          to roughly 4%. Because there is no single diagnostic test, the
          diagnosis depends on recognising a specific pattern of clinical
          findings in a child with prolonged fever — which makes a clear,
          structured diagnostic framework essential, particularly since
          delayed treatment is one of the strongest predictors of coronary
          complications.
        </p>
        <p>
          The diagnostic challenge is compounded by the fact that a
          meaningful proportion of children with genuine Kawasaki disease do
          not show the full classic picture — a pattern significant enough
          that it has its own name, "incomplete" (sometimes "atypical")
          Kawasaki disease, and its own dedicated diagnostic algorithm. This
          is especially common, and especially dangerous, in infants under
          six months old.
        </p>

        <h2>Source and Development</h2>
        <p>
          The criteria described here follow the 2017 American Heart
          Association scientific statement, "Diagnosis, Treatment, and
          Long-Term Management of Kawasaki Disease," led by Brian McCrindle
          and published in <em>Circulation</em> — the most comprehensive and
          widely followed update to the disease's diagnostic and management
          framework, building on the original clinical description by
          Tomisaku Kawasaki in Japan in the 1960s and the case-definition
          work of subsequent decades. The AHA issued a further statement in
          2024 focused specifically on identifying and risk-stratifying
          patients at highest risk of treatment resistance and coronary
          complications — worth being aware of as a refinement to
          <em> treatment intensification</em>, though the core diagnostic
          criteria described below are unchanged from the 2017 statement.
        </p>

        <h2>Classic (Complete) Kawasaki Disease</h2>
        <p>
          The classic definition requires <strong>fever for at least five
          days</strong> (counting the first day of fever as day one) together
          with <strong>at least four of five principal clinical
          criteria</strong>:
        </p>
        <ul>
          <li>
            <strong>Bilateral bulbar conjunctival injection</strong> that is
            explicitly non-exudative (no discharge) and typically spares the
            limbus around the iris.
          </li>
          <li>
            <strong>Oral and mucosal changes</strong> — cracked, red, dry, or
            bleeding lips; a "strawberry tongue" with prominent papillae; or
            diffuse redness of the oral cavity and pharynx. Ulcers or exudate
            argue against Kawasaki disease and toward another diagnosis.
          </li>
          <li>
            <strong>A polymorphous rash</strong> — variable in appearance
            (maculopapular, diffusely erythrodermic, or resembling erythema
            multiforme), but classically not blistering, vesicular, or
            petechial, patterns that again point away from Kawasaki disease.
          </li>
          <li>
            <strong>Changes in the extremities</strong> — redness and
            swelling of the hands and feet in the acute phase, and
            peeling of the skin around the fingernails and toenails
            (periungual desquamation) roughly two to three weeks into the
            illness, a later, subacute finding rather than one present at
            first assessment.
          </li>
          <li>
            <strong>Cervical lymphadenopathy</strong> — at least one lymph
            node measuring 1.5cm or more, usually affecting only one side.
            This is the least frequently present of the five principal
            criteria.
          </li>
        </ul>
        <p>
          A well-recognised exception softens the five-day rule: if four or
          more principal criteria are clearly present — particularly with
          redness or swelling of the hands and feet — the diagnosis can be
          made after only four days of fever. In rare cases, a clinician
          experienced with a large number of Kawasaki disease presentations
          may diagnose after as few as three days when the picture is
          completely classic, though this specific judgement call sits
          outside what any structured checklist can safely encode and
          should be reserved for genuinely experienced assessment.
        </p>

        <h2>Incomplete (Atypical) Kawasaki Disease</h2>
        <p>
          When a child has prolonged fever but fewer than four principal
          criteria, the 2017 statement provides a structured algorithm
          rather than leaving the decision to unaided judgement — because
          incomplete presentations are not rare, and carry the same coronary
          risk as the classic picture if missed.
        </p>
        <p>
          The algorithm applies to a child with <strong>fever for five or
          more days and two or three principal criteria</strong>, or to any{" "}
          <strong>infant six months old or younger with unexplained fever
          for seven or more days</strong> regardless of how many principal
          criteria are present — reflecting how atypically, and with how few
          overt findings, Kawasaki disease can present at this age, and why
          it carries the highest risk of diagnostic delay and coronary
          complications of any age group.
        </p>
        <p>
          The first step is a laboratory screen: <strong>CRP ≥3.0mg/dL
          and/or ESR ≥40mm/hr</strong>. If neither threshold is met, the
          recommendation is serial clinical reassessment rather than
          proceeding further. If either is met, the child is assessed
          against six <strong>supplemental laboratory criteria</strong> —
          anaemia for age, a white cell count of 15,000/mm³ or higher, a
          platelet count of 450,000/mm³ or higher (only counted after the
          seventh day of illness, since platelets characteristically rise
          later in the disease course), an albumin of 3.0g/dL or lower, an
          elevated ALT, and 10 or more white cells per high-power field on
          urinalysis — together with the echocardiogram. Incomplete Kawasaki
          disease is supported if the echocardiogram is positive (a coronary
          artery Z-score of 2.5 or higher, a frank aneurysm, or at least
          three of: reduced left ventricular function, mitral regurgitation,
          a pericardial effusion, or a Z-score between 2 and 2.5) or if{" "}
          <strong>three or more</strong> of the six supplemental laboratory
          criteria are met.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 4-month-old infant has had a fever for eight days without an
          identified source, and is noted to have mild bilateral
          conjunctival injection but none of the other principal criteria —
          only one of five. Because she is under six months old with
          unexplained fever beyond seven days, the incomplete-KD algorithm
          applies regardless of her low principal-criteria count. Her CRP
          comes back at 4.1mg/dL, meeting the laboratory screening
          threshold. Supplemental testing shows a platelet count of
          520,000/mm³ (checked on illness day 9, so it counts), an albumin
          of 2.8g/dL, and an elevated ALT — three supplemental criteria met.
          This meets the threshold for incomplete Kawasaki disease even
          though only one principal criterion was ever present, illustrating
          precisely why the infant-specific pathway exists: relying on the
          principal criteria count alone in this age group would have missed
          her.
        </p>

        <h2>Why Missing Incomplete KD Is So Consequential</h2>
        <p>
          The entire incomplete-KD algorithm exists because the disease's
          most serious complication — coronary artery aneurysm — does not
          discriminate between classic and incomplete presentations; it
          tracks with delayed treatment far more than with how textbook the
          initial presentation looked. Infants under six months carry the
          highest documented risk of both diagnostic delay and coronary
          complications of any age group, precisely because prolonged fever
          with irritability can be their only obvious sign — which is why
          the statement lowers the bar for triggering laboratory workup in
          this age group specifically, rather than requiring the same
          principal-criteria count used in older children.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>The algorithm assumes other causes of fever have been
            reasonably excluded.</strong> Prolonged fever has a broad
            differential, and the Kawasaki disease algorithm is intended to
            be applied once more common explanations have been considered,
            not as a first-line screen for every febrile child.
          </li>
          <li>
            <strong>The platelet criterion is timing-dependent.</strong> A
            platelet count taken before day 7 of illness does not count
            toward the supplemental criteria even if elevated, since
            reactive thrombocytosis is a later feature of the disease
            course.
          </li>
          <li>
            <strong>A negative echocardiogram at presentation does not
            exclude evolving disease.</strong> Coronary changes can develop
            or progress over the following one to two weeks even after
            treatment, which is why the statement recommends a repeat
            echocardiogram later in the course for children treated for
            incomplete or classic Kawasaki disease.
          </li>
          <li>
            <strong>This is a diagnostic framework, not a severity or
            treatment-resistance score.</strong> The 2024 AHA update
            addresses risk-stratifying which children are more likely to be
            IVIG-resistant or to develop coronary aneurysms despite
            treatment — a separate question from the diagnostic criteria
            described here.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can Kawasaki disease be diagnosed with fewer than 4 days of fever?",
            a: "The standard threshold is fever for at least 4-5 days with 4 or more principal criteria. A very small number of experienced clinicians may diagnose after 3 days in a completely classic presentation, but this judgement call is not something a structured checklist can safely encode.",
          },
          {
            q: "Why does the algorithm treat infants under 6 months differently?",
            a: "Infants under 6 months present more atypically, often with fewer overt principal criteria, yet carry the highest risk of diagnostic delay and coronary complications of any age group. The algorithm therefore triggers laboratory workup based on unexplained fever ≥7 days alone in this age group, regardless of how many principal criteria are present.",
          },
          {
            q: "What happens if CRP and ESR are both normal but I still suspect incomplete Kawasaki disease?",
            a: "The 2017 AHA algorithm recommends serial clinical reassessment rather than proceeding to supplemental laboratory criteria when both CRP and ESR are below the screening threshold — though ongoing clinical suspicion should still prompt re-examination as the illness evolves.",
          },
          {
            q: "Does a normal echocardiogram rule out Kawasaki disease?",
            a: "No. Coronary artery changes can develop or evolve over the one to two weeks following presentation, even after treatment, which is why a repeat echocardiogram later in the course is recommended for children diagnosed with either classic or incomplete Kawasaki disease.",
          },
        ]}
      />

      <RelatedTools slugs={["child-development-tracker", "pediatric-headache-assessment-tool", "sirs-calculator"]} />

      <References
        items={[
          {
            text: "McCrindle BW, Rowley AH, Newburger JW, et al. Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease: A Scientific Statement for Health Professionals From the American Heart Association. Circulation. 2017;135(17):e927-e999.",
          },
        ]}
      />
    </>
  );
}
