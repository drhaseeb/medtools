import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function OrbitInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the ORBIT Bleeding Risk Score?</h2>
        <p>
          The ORBIT score — an acronym for the <em>O</em>utcomes Registry for
          Better Informed Treatment of atrial fibrillation, the registry from
          which it was derived — is a five-factor clinical tool that
          estimates a patient's absolute risk of major bleeding while on oral
          anticoagulation for atrial fibrillation (AF). It exists to answer
          the other half of the anticoagulation equation: CHA₂DS₂-VASc
          quantifies the stroke risk that anticoagulation is meant to
          prevent, but every anticoagulant also carries a real risk of
          haemorrhage, and clinicians need an equally objective way to
          estimate and communicate that risk before starting treatment, and
          to reassess it periodically thereafter.
        </p>
        <p>
          NICE guideline NG196 identifies ORBIT as its preferred bleeding-risk
          tool for AF patients being considered for, or already taking, oral
          anticoagulation — a position based on evidence that ORBIT
          out-performs its two main historical rivals, HAS-BLED and ATRIA, at
          predicting the <em>absolute</em> risk of major bleeding, which is
          the number patients and clinicians actually need for a genuine
          shared decision-making conversation.
        </p>

        <h2>Origin and Derivation</h2>
        <p>
          The score was derived and externally validated by Emily O'Brien and
          colleagues, published in the <em>European Heart Journal</em> in
          2015. It was built from the ORBIT-AF registry, a large prospective
          US cohort of AF patients recruited from 176 sites, and then
          validated against an independent population drawn from the
          ROCKET-AF trial. This dual derivation-and-validation design, in a
          contemporary cohort that included substantial numbers of patients
          on both warfarin and the newer direct oral anticoagulants (DOACs),
          is part of why ORBIT has proven more durable in modern practice
          than scores like HAS-BLED, which were derived predominantly in
          warfarin-only populations from an earlier treatment era.
        </p>

        <h2>Why ORBIT Displaced HAS-BLED in UK Guidance</h2>
        <p>
          For roughly a decade, HAS-BLED (Hypertension, Abnormal renal/liver
          function, Stroke, Bleeding history, Labile INR, Elderly, Drugs or
          alcohol) was the default bleeding-risk tool in most guidelines. NICE
          NG196 formally reviewed the comparative evidence during its 2021
          update and concluded that ORBIT should be adopted instead, citing
          three main advantages:
        </p>
        <ul>
          <li><strong>Better calibration:</strong> when tested against real-world bleeding outcomes, ORBIT's predicted bleeding rates tracked observed rates more closely than HAS-BLED's or ATRIA's, meaning a patient told they have an "X% per year" bleeding risk based on ORBIT is more likely to experience that actual rate.</li>
          <li><strong>Fewer subjective or hard-to-obtain inputs:</strong> HAS-BLED includes "labile INR," a criterion that is meaningless for the roughly two-thirds of UK AF patients now on a DOAC rather than warfarin, and other soft criteria (alcohol use, certain drug interactions) that are harder to standardise between assessors.</li>
          <li><strong>Superior prediction of intracranial haemorrhage specifically:</strong> ORBIT performed better than comparators at identifying the subset of bleeds — intracranial haemorrhage — that carries the highest morbidity and mortality, which matters more clinically than overall bleeding-event counts.</li>
        </ul>
        <p>
          NICE's guidance acknowledges a practical transition issue: because
          many electronic prescribing and clinical decision-support systems
          were built around HAS-BLED, some services may continue to use it
          until local pathways and IT systems catch up — but ORBIT is the
          recommended tool going forward.
        </p>

        <h2>How the Score Is Calculated</h2>
        <p>
          ORBIT assigns points across five readily available clinical and
          laboratory variables, for a maximum possible score of 7:
        </p>
        <ol>
          <li><strong>Older age, ≥74 years (1 point):</strong> age is a strong, largely non-modifiable predictor of bleeding, reflecting frailty, falls risk, and reduced drug clearance.</li>
          <li><strong>Reduced haemoglobin / anaemia / history of anaemia (2 points):</strong> defined as haemoglobin below 13 g/dL in men or below 12 g/dL in women (or a documented history of anaemia even if the current value is normal). Anaemia often signals an occult bleeding source — most commonly gastrointestinal — that anticoagulation would unmask or worsen.</li>
          <li><strong>Bleeding history (2 points):</strong> any prior major bleeding event — gastrointestinal haemorrhage, intracranial haemorrhage, or another clinically significant bleed — carries the strongest individual weighting in the score after age, because a demonstrated bleeding tendency is one of the most consistent predictors of future bleeding across the anticoagulation literature.</li>
          <li><strong>Insufficient renal function, eGFR &lt;60 mL/min/1.73m² (1 point):</strong> impaired renal clearance leads to drug accumulation, particularly for the renally cleared DOACs (dabigatran most of all), and chronic kidney disease independently causes platelet dysfunction (uraemic platelet dysfunction), compounding the bleeding risk from drug accumulation alone.</li>
          <li><strong>Concurrent antiplatelet therapy (1 point):</strong> combining an antiplatelet agent (aspirin, clopidogrel, ticagrelor, or similar) with an anticoagulant substantially raises bleeding risk without a proportionate reduction in thromboembolic risk in most AF patients, and this combination should always prompt a specific review of whether the antiplatelet is still clinically necessary.</li>
        </ol>

        <h2>Worked Example</h2>
        <p>
          A 78-year-old man with AF has a haemoglobin of 11.8 g/dL (anaemic
          by the male threshold), an eGFR of 52 mL/min/1.73m², and takes daily
          aspirin for known peripheral arterial disease, with no prior major
          bleed. His score is: Age ≥74 (+1), Anaemia (+2), Renal impairment
          (+1), Antiplatelet use (+1), for a{" "}
          <strong>total ORBIT score of 5</strong>, placing him in the high
          bleeding-risk category (roughly 8.1 or more major bleeds per 100
          patient-years). Rather than treating this as a reason to avoid
          anticoagulation, the correct response is to investigate the cause
          of his anaemia, review whether aspirin is still indicated given his
          vascular disease is otherwise stable, and select a DOAC with a
          favourable renal and bleeding profile at an appropriately adjusted
          dose.
        </p>

        <h2>Interpreting the Score</h2>
        <p>
          The total score maps to three risk tiers, each with an associated
          rate of major bleeding per 100 patient-years derived from the
          ORBIT-AF validation data:
        </p>
        <ul>
          <li><strong>Score 0–2 — Low risk:</strong> approximately 2.4 major bleeds per 100 patient-years.</li>
          <li><strong>Score 3 — Medium risk:</strong> approximately 4.7 major bleeds per 100 patient-years.</li>
          <li><strong>Score 4–7 — High risk:</strong> approximately 8.1 or more major bleeds per 100 patient-years.</li>
        </ul>

        <h2>The Central Principle: A High Score Is Not a Contraindication</h2>
        <p>
          The single most important concept for using any bleeding-risk
          score correctly is this: <strong>a high ORBIT score does not, by
          itself, contraindicate anticoagulation.</strong> Paradoxically, the
          patients who score highest on bleeding-risk tools — the frail,
          elderly, multimorbid population — are frequently the same patients
          who carry the highest CHA₂DS₂-VASc stroke risk, and for most of
          them the absolute reduction in stroke risk from anticoagulation
          still outweighs the absolute increase in bleeding risk, because
          ischaemic strokes tend to be more disabling, more often fatal, and
          harder to treat after the fact than most major bleeds. NICE NG196
          is explicit that clinicians should use the ORBIT score to have an
          informed conversation about risk, and to correct whatever is
          modifiable, rather than as an automatic veto over treatment.
        </p>
        <p>The score should instead be used to:</p>
        <ul>
          <li><strong>Identify and correct modifiable risk factors:</strong> investigate and treat anaemia, review whether concurrent antiplatelet therapy is still necessary, optimise blood pressure control (itself a major driver of intracranial bleeding risk even though it is not a scored ORBIT variable), and address alcohol intake.</li>
          <li><strong>Guide drug and dose selection:</strong> in a patient whose score is driven mainly by renal impairment, choosing a DOAC with more favourable renal handling (apixaban has the least renal dependence among the licensed DOACs) and applying the correct dose-reduction criteria reduces risk without abandoning anticoagulation.</li>
          <li><strong>Set the monitoring interval:</strong> higher-risk patients warrant more frequent follow-up, repeat full blood count to track for occult bleeding, and closer blood pressure control.</li>
        </ul>

        <h2>Comparison to HAS-BLED and ATRIA</h2>
        <p>
          HAS-BLED remains widely used internationally and is still cited in
          some non-UK guidelines and older electronic prescribing tools; its
          main limitation, as above, is the labile-INR criterion that does
          not apply to DOAC-treated patients and its comparatively weaker
          calibration against real-world outcomes. The ATRIA score is another
          alternative, derived in a US Veterans Affairs and Kaiser
          Permanente cohort, but has performed less consistently than ORBIT
          in external validation and is used less frequently in UK practice.
          None of the three tools should be treated as more than a
          probabilistic estimate — they are aids to a conversation, not a
          binary gate to treatment.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          ORBIT is calculated at the point of considering anticoagulation for
          newly diagnosed AF, alongside CHA₂DS₂-VASc, so that the stroke
          benefit and bleeding risk can be weighed together rather than in
          isolation. It should also be recalculated at routine annual review
          — since haemoglobin, renal function, and concurrent medications can
          all change — and whenever a patient experiences any bleeding event
          while on treatment, to inform whether the anticoagulant, its dose,
          or any concurrent antiplatelet needs to be reconsidered. NICE also
          specifically recommends recalculating ORBIT (alongside
          CHA₂DS₂-VASc) at the point where stopping anticoagulation is being
          considered, so that any decision to withdraw treatment is based on
          the patient's current risk profile rather than the profile at the
          time treatment was started, which may have been years earlier.
        </p>

        <h2>Limitations and Special Populations</h2>
        <ul>
          <li><strong>Derived in a US, largely warfarin-and-DOAC-mixed cohort:</strong> while validated externally, transportability to other healthcare systems and patient populations (different ethnic mix, different baseline anticoagulant prescribing patterns) has been studied less extensively than for AF stroke-risk scores.</li>
          <li><strong>Does not capture all bleeding risk factors:</strong> hypertension control, alcohol excess, falls risk, and interacting medications (e.g. NSAIDs, SSRIs) all independently raise bleeding risk but are not scored variables in ORBIT and must be assessed separately.</li>
          <li><strong>Not validated outside AF:</strong> the score should not be applied to patients anticoagulated for venous thromboembolism or a mechanical valve, whose bleeding risk profiles differ.</li>
          <li><strong>A static snapshot:</strong> like CHA₂DS₂-VASc, the score reflects risk at a single point in time and should be recalculated as the patient's clinical picture evolves, not treated as a permanent label.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Should I use HAS-BLED or ORBIT?",
            a: "NICE NG196 recommends ORBIT as the preferred bleeding-risk tool for AF patients in UK practice, based on its superior calibration against real-world bleeding outcomes and its applicability to DOAC-treated patients. HAS-BLED may still be encountered in some systems during the transition, and remains an acceptable alternative where ORBIT is not yet embedded in local pathways.",
          },
          {
            q: "My patient has a high ORBIT score and a high CHA₂DS₂-VASc score — what do I do?",
            a: "In the great majority of cases, the net clinical benefit still favours anticoagulation, since an ischaemic stroke is usually more devastating than a major bleed and the same patient is often at high risk of both. Proceed with anticoagulation while aggressively correcting whatever bleeding risk factors are modifiable, and choose the anticoagulant and dose accordingly.",
          },
          {
            q: "Does a high ORBIT score mean I should stop an antiplatelet a patient is already on?",
            a: "It should prompt that question, not answer it automatically. Review the original indication for the antiplatelet — if it was started for a condition where an anticoagulant alone now provides adequate protection (e.g. AF alone, without recent coronary stenting), stopping it is often appropriate; if it is required for a separate indication such as recent coronary intervention, specialist input on dual antithrombotic strategy is needed.",
          },
          {
            q: "How is anaemia defined in the ORBIT score?",
            a: "Haemoglobin below 13 g/dL in men or below 12 g/dL in women, or a documented history of anaemia even if the current haemoglobin happens to be normal at the time of assessment.",
          },
          {
            q: "How often should ORBIT be recalculated?",
            a: "At least at annual review, and whenever there is a relevant clinical change — a new bleeding event, a significant change in renal function or haemoglobin, or a new antiplatelet prescription — and specifically whenever stopping anticoagulation is being considered.",
          },
        ]}
      />

      <RelatedTools
        slugs={["chadsvasc-score", "has-bled-calculator", "warfarin-dosing-calculator"]}
      />

      <References
        items={[
          {
            text: "O'Brien EC, Simon DN, Thomas LE, et al. The ORBIT bleeding score: a simple bedside score to assess bleeding risk in atrial fibrillation. Eur Heart J. 2015;36(46):3258-3264.",
          },
          {
            text: "National Institute for Health and Care Excellence. Atrial fibrillation: diagnosis and management (NG196). Published 27 April 2021.",
            href: "https://www.nice.org.uk/guidance/ng196",
          },
          {
            text: "Pisters R, Lane DA, Nieuwlaat R, de Vos CB, Crijns HJGM, Lip GYH. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation: the Euro Heart Survey. Chest. 2010;138(5):1093-1100.",
          },
          {
            text: "Senoo K, Proietti M, Lane DA, Lip GYH. Evaluation of the HAS-BLED, ATRIA, and ORBIT bleeding risk scores in patients with atrial fibrillation taking warfarin. Am J Med. 2016;129(6):600-607.",
          },
        ]}
      />
    </>
  );
}
