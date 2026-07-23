import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function QriskInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is QRISK3?</h2>
        <p>
          QRISK3 is a cardiovascular risk prediction algorithm that estimates
          a person's probability of having a heart attack or stroke within
          the next 10 years, based on a combination of demographic,
          biometric, and clinical history data. It was developed for the UK
          National Health Service and is the risk calculator recommended by
          NICE (the National Institute for Health and Care Excellence) for
          deciding who should be offered a statin for the primary prevention
          of cardiovascular disease — that is, prevention in people who have
          not yet had a heart attack, stroke, or been diagnosed with
          established atherosclerotic disease.
        </p>
        <p>
          What distinguishes QRISK3 from older risk calculators is the sheer
          number of variables it incorporates and the population it was built
          from. Rather than being derived from a single research cohort, it
          was built and validated using the electronic health records of
          millions of real NHS patients, giving it a scale and diversity that
          trial-derived scores cannot match.
        </p>

        <h2>History: From Framingham to QRISK3</h2>
        <p>
          For decades, the dominant cardiovascular risk tool worldwide was the
          Framingham Risk Score, derived from a single town in Massachusetts
          starting in 1948. Framingham was groundbreaking, but it was built
          from an overwhelmingly white, middle-class American population, and
          numerous validation studies over the following decades showed it
          systematically over- or under-estimated risk when applied to other
          populations — including the UK, where it tended to overestimate
          risk in some groups and miss important UK-specific risk factors
          entirely, such as socioeconomic deprivation and the specific
          patterns of cardiovascular risk seen in South Asian communities.
        </p>
        <p>
          To address this, Julia Hippisley-Cox and colleagues at the
          University of Nottingham developed the QRISK algorithms using the
          QResearch database — anonymised, longitudinal primary-care records
          from millions of patients across hundreds of general practices in
          England. The original QRISK was published in 2007, QRISK2 followed
          in 2008 with refinements to several risk factors, and QRISK3 — the
          version implemented here — was published in the <em>BMJ</em> in
          2017. Each iteration added variables that emerging evidence showed
          were independently predictive of cardiovascular events but were
          absent from Framingham and even from QRISK2, including chronic
          kidney disease, systemic lupus erythematosus, severe mental illness,
          migraine, and the blood-pressure variability between visits.
        </p>

        <h2>How QRISK3 Is Calculated</h2>
        <p>
          Under the hood, QRISK3 is a Cox proportional-hazards survival model
          — the same statistical family used by most modern epidemiological
          risk scores. In plain terms: every risk factor contributes a fixed
          amount to an underlying "risk score" (the linear predictor), and
          that total is converted into a 10-year probability of a
          cardiovascular event using a baseline survival curve estimated from
          the QResearch derivation cohort. Because it is a proportional-
          hazards model, each risk factor's contribution is meant to be
          <em> additive</em> on this underlying scale — a patient's ethnicity,
          for example, should shift their score by a fixed amount regardless
          of how many other risk factors they happen to have, not scale their
          entire risk multiplicatively.
        </p>
        <p>
          The full published model includes fractional-polynomial (curved,
          not straight-line) transformations of age and body mass index,
          a term for the standard deviation of at least two recent systolic
          blood pressure readings (capturing blood pressure variability as an
          independent risk marker — a genuinely novel contribution of
          QRISK3 over its predecessors), and roughly twenty interaction terms
          where the effect of a risk factor (such as smoking or diabetes)
          is itself modified by the patient's age. This complexity is why
          QRISK3 is normally run through validated clinical software rather
          than calculated by hand.
        </p>

        <h2>Risk Factors Included</h2>
        <p>QRISK3 draws on the following inputs:</p>
        <ul>
          <li><strong>Age and sex:</strong> the two variables with the largest overall effect on 10-year risk.</li>
          <li><strong>Ethnicity:</strong> nine categories (White/not stated, Indian, Pakistani, Bangladeshi, Other Asian, Black Caribbean, Black African, Chinese, Other), reflecting well-documented differences in cardiovascular risk between UK ethnic groups — for example, a materially higher risk in people of Indian, Pakistani, or Bangladeshi background compared with the White reference category.</li>
          <li><strong>Townsend deprivation score:</strong> a measure of socioeconomic deprivation derived from a patient's postcode area (unemployment, non-car ownership, non-home ownership, and household overcrowding), reflecting the well-established, independent contribution of social deprivation to cardiovascular risk beyond biomedical factors alone.</li>
          <li><strong>Smoking status:</strong> five categories from non-smoker to heavy smoker (≥20/day), each with an independently estimated risk contribution rather than a simple smoker/non-smoker split.</li>
          <li><strong>Systolic blood pressure</strong> and its <strong>visit-to-visit variability</strong> — the latter is not collected by this simplified calculator (see the accuracy notice below).</li>
          <li><strong>Total cholesterol : HDL ratio</strong> and <strong>body mass index.</strong></li>
          <li><strong>Type 1 and type 2 diabetes</strong>, treated separately since their risk contributions differ substantially.</li>
          <li><strong>Chronic kidney disease</strong> (stage 3–5), <strong>atrial fibrillation</strong>, <strong>rheumatoid arthritis</strong>, and <strong>systemic lupus erythematosus.</strong></li>
          <li><strong>Migraine</strong> — added in QRISK3 based on evidence linking migraine (particularly with aura) to an increased ischaemic stroke risk.</li>
          <li><strong>Severe mental illness</strong> (schizophrenia, bipolar disorder, or moderate-to-severe depression) and, as a <em>separate</em> variable, <strong>regular atypical antipsychotic use</strong> — these are two distinct risk factors in the real model, since a patient can have one without the other, and this calculator scores them separately.</li>
          <li><strong>Regular oral corticosteroid use</strong>, <strong>erectile dysfunction</strong> (in men, often an early marker of systemic endothelial dysfunction that can precede overt cardiovascular disease), and <strong>family history of premature coronary heart disease</strong> in a first-degree relative under 60.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 58-year-old woman of White ethnicity has treated hypertension and
          type 2 diabetes. She is a non-smoker, her systolic BP is 138 mmHg,
          her total cholesterol : HDL ratio is 4.2, and her BMI is 29. She has
          no other relevant history. Entering these values produces a 10-year
          cardiovascular risk estimate in the moderate range — comfortably
          above the 10% threshold at which NICE recommends offering a statin,
          driven mainly by her age, treated hypertension, and diabetes acting
          together rather than any single factor in isolation. This
          illustrates the central value of a multivariable score: none of her
          individual risk factors is extreme, but their combination pushes her
          well past the treatment threshold that a clinician relying on
          gestalt alone might have missed.
        </p>

        <h2>Interpreting the Result and NICE Thresholds</h2>
        <p>
          NICE guideline NG238 (<em>Cardiovascular disease: risk assessment
          and reduction, including lipid modification</em> — updated May
          2023, replacing the older CG181) sets the
          treatment threshold at a 10-year risk of <strong>10% or
          greater</strong>:
        </p>
        <ul>
          <li><strong>Risk ≥10%:</strong> offer atorvastatin 20 mg for primary prevention, alongside lifestyle advice, after discussing the risks and benefits with the patient.</li>
          <li><strong>Risk &lt;10%:</strong> lifestyle advice (smoking cessation, diet, physical activity, alcohol moderation) is offered, and risk should be reassessed periodically — commonly every 5 years, or sooner if a new risk factor develops.</li>
        </ul>
        <p>
          QRISK3 is explicitly a tool for <em>primary</em> prevention. It
          should not be applied to patients who already have established
          atherosclerotic cardiovascular disease (previous MI, stroke, TIA,
          peripheral arterial disease) — these patients automatically qualify
          for secondary-prevention statin therapy (typically a higher
          intensity, such as atorvastatin 80 mg) regardless of any calculated
          score, because their risk of a further event is already known to be
          high.
        </p>

        <h2>How Accurate Is This Calculator?</h2>
        <p>
          Because this is one of the more mathematically complex tools on
          this site, it deserves a direct, specific statement about what has
          been verified and what has not, rather than a blanket claim of
          accuracy.
        </p>
        <p>
          <strong>What has been checked against the published algorithm:</strong>{" "}
          the ethnicity, smoking-category, and every binary comorbidity
          coefficient (diabetes, hypertension, atrial fibrillation, CKD, SLE,
          rheumatoid arthritis, severe mental illness, antipsychotic use,
          corticosteroid use, migraine, erectile dysfunction, and family
          history) in this calculator have been checked against the published
          QRISK3-2017 beta coefficients and corrected where they diverged.
          During this review, several coefficients in the previous version of
          this tool were found to be substantially wrong — some by more than
          40% — and one variable (migraine) and one important distinction
          (separating severe mental illness from atypical antipsychotic use,
          which are independent risk factors in the real model) were missing
          entirely; both have now been added. Ethnicity was previously applied
          as a multiplier across the entire risk score, which is not how a
          proportional-hazards model like QRISK3 works — it has been corrected
          to an additive term, consistent with the published model.
        </p>
        <p>
          <strong>What remains a simplification:</strong> the true QRISK3
          model applies non-linear (fractional-polynomial) curves to age and
          BMI rather than the simpler approximation used here, includes a
          blood-pressure-variability input this calculator does not collect,
          and layers roughly twenty interaction terms on top of the main
          effects, where a risk factor's impact is itself modified by the
          patient's age. Reproducing that full structure without the ability
          to test the output against the reference implementation carries a
          real risk of introducing new errors, so it has intentionally been
          left as a documented simplification rather than guessed at. In
          practice, this means the percentage shown here is a reasonable
          educational estimate and will usually place a patient in the
          correct broad risk band, but it should not be treated as
          interchangeable with the validated clinical output. For any
          decision that depends on precision — particularly a borderline
          result close to the 10% treatment threshold — use the official
          calculator at qrisk.org or the version embedded in your clinical
          system, which are built from ClinRisk's certified source code.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          QRISK3 is most commonly calculated during an NHS Health Check (the
          UK's national cardiovascular screening programme for adults aged
          40–74 without a pre-existing diagnosis of cardiovascular disease or
          diabetes), during routine primary-care review of patients with new
          or existing risk factors, and whenever a clinician is considering
          whether to start a statin. It is also used, more informally, as an
          educational tool to help patients visualise the combined effect of
          several risk factors together — seeing how much a single value
          moves in response to, for example, stopping smoking or better blood
          pressure control can be a powerful motivational device in a
          consultation.
        </p>

        <h2>Comparison to Other Risk Calculators</h2>
        <ul>
          <li><strong>Framingham / ASCVD Pooled Cohort Equations:</strong> the US-derived tools recommended by the ACC/AHA. They remain in widespread use outside the UK but do not include several of QRISK3's variables (deprivation, CKD, SLE, severe mental illness, migraine) and were shown in UK validation studies to be less well-calibrated to UK populations than QRISK3.</li>
          <li><strong>SCORE2 / SCORE2-OP:</strong> the European Society of Cardiology's competency score, calibrated separately for different European risk regions and predicting fatal plus non-fatal cardiovascular events over 10 years; it is simpler than QRISK3 (fewer variables) but is the standard reference tool across much of continental Europe.</li>
          <li><strong>QRISK2:</strong> QRISK3's immediate predecessor, still occasionally referenced, but superseded by QRISK3's additional variables and improved calibration.</li>
        </ul>
        <p>
          NICE NG238 specifically names QRISK3 as its recommended tool for
          the UK, for adults aged 25–84 without pre-existing cardiovascular
          disease, which is why this calculator implements it rather than an
          alternative.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li><strong>Age range 25–84 only:</strong> the algorithm was not validated outside this range and should not be extrapolated beyond it.</li>
          <li><strong>Primary prevention only:</strong> not valid for patients with established cardiovascular disease, familial hypercholesterolaemia, or type 1 diabetes with high-risk features that automatically warrant treatment under separate NICE recommendations.</li>
          <li><strong>UK-derived:</strong> the ethnicity, deprivation, and baseline event-rate calibration are specific to the UK population and health system; applying it to other countries' populations, where baseline cardiovascular event rates and healthcare access differ, will introduce additional uncertainty beyond what is described above.</li>
          <li><strong>A single point-in-time estimate:</strong> risk factors such as blood pressure and cholesterol fluctuate, and a single reading may not represent a patient's true long-term average — this is precisely the gap the omitted blood-pressure-variability term was designed to address in the full model.</li>
          <li><strong>Does not replace shared decision-making:</strong> a calculated percentage is an input to a conversation about statin therapy, not an automatic prescription — patient preference, life expectancy, frailty, and the number needed to treat should all be discussed explicitly.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can I use QRISK3 for patients over 85 years old?",
            a: "No. The algorithm is validated only for ages 25 to 84. For patients 85 and older, NICE guidance suggests considering them to be at high cardiovascular risk on the basis of age alone, and any decision about starting a statin should weigh frailty, life expectancy, and patient preference rather than relying on a calculated score.",
          },
          {
            q: "Why does the calculator ask about a Townsend deprivation score?",
            a: "Socioeconomic deprivation has an independent, well-documented effect on cardiovascular risk beyond traditional biomedical factors. In the full QRISK3 model this is derived automatically from a patient's postcode; here it can be entered directly if known, or left at 0 (average) if unknown or if you are outside the UK.",
          },
          {
            q: "Should QRISK3 be used for someone with type 1 diabetes?",
            a: "QRISK3 does include a type 1 diabetes term, but NICE separately advises considering statin therapy for all adults with type 1 diabetes who are over 40, have had diabetes for more than 10 years, have established nephropathy, or have other cardiovascular risk factors — regardless of the calculated QRISK3 percentage.",
          },
          {
            q: "How accurate is this specific calculator compared to the official QRISK3?",
            a: "The comorbidity, smoking and ethnicity coefficients have been checked against the published QRISK3-2017 algorithm and corrected. The continuous age/blood-pressure/BMI curve and the model's age-interaction terms are simplified, and a required input (blood-pressure variability) is not collected, so results should be treated as an educational estimate rather than a substitute for the official calculator at qrisk.org — see the 'How Accurate Is This Calculator?' section above for full detail.",
          },
          {
            q: "Does a QRISK3 score below 10% mean no further action is needed?",
            a: "It means a statin is not routinely recommended on cardiovascular grounds alone, but lifestyle risk factors (smoking, diet, physical activity, alcohol) should still be addressed, and the score should be recalculated periodically — sooner if a new diagnosis (such as diabetes or hypertension) is made.",
          },
        ]}
      />

      <RelatedTools slugs={["chadsvasc-score", "curb65-calculator", "grace-risk-score"]} />

      <References
        items={[
          {
            text: "Hippisley-Cox J, Coupland C, Brindle P. Development and validation of QRISK3 risk prediction algorithms to estimate future risk of cardiovascular disease: prospective cohort study. BMJ. 2017;357:j2099.",
            href: "https://www.bmj.com/content/357/bmj.j2099",
          },
          {
            text: "National Institute for Health and Care Excellence. Cardiovascular disease: risk assessment and reduction, including lipid modification (NG238). Updated 24 May 2023.",
            href: "https://www.nice.org.uk/guidance/ng238",
          },
          {
            text: "ClinRisk Ltd. QRISK3-2017 open-source reference algorithm (LGPL), as implemented in the CRAN 'QRISK3' R package.",
            href: "https://qrisk.org/",
          },
          {
            text: "Hippisley-Cox J, Coupland C, Vinogradova Y, et al. Predicting cardiovascular risk in England and Wales: the QRISK2 risk prediction algorithm. BMJ. 2008;336(7659):1475-1482.",
          },
        ]}
      />
    </>
  );
}
