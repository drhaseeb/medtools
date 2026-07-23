export default function QriskInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Understanding the QRISK3 Cardiovascular Disease Risk Estimator</h2>

      <p>
        The prevention of cardiovascular disease (CVD)—including myocardial
        infarction, angina, stroke, and transient ischemic attacks—is a
        cornerstone of modern primary care. To effectively allocate
        preventative therapies, such as statins and antihypertensives,
        clinicians must be able to accurately identify patients at the
        highest risk. The QRISK3 estimator is currently recommended by the
        National Institute for Health and Care Excellence (NICE) in the UK
        as the preferred tool for assessing a patient's 10-year risk of
        developing cardiovascular disease.
      </p>

      <h3>Evolution from Framingham to QRISK3</h3>
      <p>
        Historically, the Framingham Risk Score was widely used to estimate
        cardiovascular risk. However, Framingham was derived from a
        predominantly white, North American population, which led to
        significant overestimation or underestimation of risk when applied
        to diverse global populations, particularly in the UK.
      </p>

      <p>
        To address this, the QRISK algorithms were developed using the
        QResearch database, drawing on anonymized electronic health records
        from millions of patients across general practices in England.
        QRISK3, the latest iteration, builds upon its predecessors by
        incorporating a wider array of risk factors that reflect modern
        clinical understanding, particularly the role of systemic
        inflammation, mental health, and nuanced comorbidities.
      </p>

      <h3>Variables Incorporated in QRISK3</h3>
      <p>
        Unlike older models that relied solely on traditional risk factors
        (age, sex, cholesterol, blood pressure, smoking status, and
        diabetes), QRISK3 provides a much more granular assessment by
        including:
      </p>
      <ul>
        <li><strong>Ethnicity:</strong> Recognizes the inherently higher cardiovascular risk in certain ethnic populations (e.g., South Asian).</li>
        <li><strong>Socioeconomic Deprivation:</strong> Uses the Townsend deprivation score, acknowledging the profound impact of social determinants on health outcomes.</li>
        <li><strong>Chronic Kidney Disease (CKD):</strong> Includes CKD stage 3, 4, or 5, as renal impairment is a major independent cardiovascular risk factor.</li>
        <li><strong>Atrial Fibrillation:</strong> Significantly increases stroke risk.</li>
        <li><strong>Rheumatoid Arthritis and SLE:</strong> Autoimmune conditions associated with systemic vascular inflammation.</li>
        <li><strong>Severe Mental Illness:</strong> Conditions like schizophrenia and bipolar disorder carry a higher risk of metabolic syndrome and CVD.</li>
        <li><strong>Atypical Antipsychotics & Corticosteroids:</strong> Medications known to adversely affect lipid and glucose metabolism.</li>
        <li><strong>Erectile Dysfunction:</strong> Often an early vascular marker of systemic endothelial dysfunction.</li>
        <li><strong>Migraine with Aura:</strong> Associated with an increased risk of ischemic stroke.</li>
        <li><strong>Body Mass Index (BMI):</strong> A more precise continuous variable than simple weight class.</li>
      </ul>

      <h3>Clinical Interpretation and NICE Guidelines</h3>
      <p>
        The QRISK3 calculator outputs a percentage representing the
        patient's estimated risk of having a cardiovascular event (heart
        attack or stroke) within the next 10 years. In the UK, NICE
        guidelines (CG181) recommend using this score to guide clinical
        interventions:
      </p>

      <ul>
        <li>
          <strong>Risk &ge; 10%:</strong> A 10-year risk of 10% or greater is
          the threshold for offering primary prevention with a statin
          (typically Atorvastatin 20mg daily), alongside comprehensive
          lifestyle advice.
        </li>
        <li>
          <strong>Risk &lt; 10%:</strong> Patients falling below the
          threshold should be offered lifestyle advice regarding diet,
          exercise, smoking cessation, and alcohol moderation, and their
          risk should be reassessed every 5 years.
        </li>
      </ul>
      <p>
        It is important to note that QRISK3 is a tool for <em>primary</em>{" "}
        prevention. It should not be used for patients who already have
        established cardiovascular disease, as they automatically require
        secondary prevention therapies.
      </p>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">Q: Can I use QRISK3 for patients over 85 years old?</strong>
          <p className="mt-1 text-ink-muted">
            A: No. The algorithm is validated only for individuals aged 25 to
            84 years. For patients aged 85 and older, clinicians should
            consider them to be at high risk based on age alone,
            particularly considering their individual frailty and life
            expectancy when deciding on statin therapy.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: Why does it ask about the postcode or Townsend score?</strong>
          <p className="mt-1 text-ink-muted">
            A: Socioeconomic status has a profound, statistically significant
            impact on cardiovascular outcomes independent of traditional
            biomedical risk factors. The Townsend score helps adjust the
            biological risk to account for these environmental and social
            disparities.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: Should I use QRISK3 for someone with Type 1 Diabetes?</strong>
          <p className="mt-1 text-ink-muted">
            A: While QRISK3 can be used for Type 1 Diabetes, NICE advises
            considering statin treatment for all adults with Type 1 Diabetes
            who are older than 40 years, have had diabetes for more than 10
            years, have established nephropathy, or have other CVD risk
            factors, regardless of the explicit score.
          </p>
        </div>
      </div>
    </div>
  );
}
