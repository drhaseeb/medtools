export default function EgfrInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Understanding the eGFR Calculator (CKD-EPI 2021)</h2>

      <p>
        The estimated Glomerular Filtration Rate (eGFR) is widely considered
        the best overall index of kidney function in health and disease. It
        is a mathematical derivation that estimates the volume of fluid
        filtered from the renal glomerular capillaries into the Bowman's
        capsule per unit time. Because measuring the true GFR directly (using
        exogenous markers like inulin or iohexol) is complex, invasive, and
        expensive, clinical practice relies heavily on estimating equations
        based on endogenous serum markers—most commonly serum creatinine.
      </p>

      <h3>Clinical Significance of Glomerular Filtration Rate</h3>
      <p>
        Healthy kidneys filter approximately 90 to 120 milliliters of blood
        every minute. When kidney function declines due to acute kidney
        injury (AKI) or chronic kidney disease (CKD), the filtration rate
        drops. This decline leads to the accumulation of metabolic waste
        products, fluid overload, electrolyte imbalances, and impaired
        hormone synthesis (such as erythropoietin and active vitamin D).
        Accurately estimating the GFR is critical for:
      </p>
      <ul>
        <li>
          <strong>Diagnosing and Staging CKD:</strong> eGFR is the primary
          metric used to classify CKD into stages 1 through 5, which
          dictates clinical management.
        </li>
        <li>
          <strong>Medication Dosing:</strong> Many drugs are cleared by the
          kidneys. Accurate eGFR is essential to adjust drug dosages to
          avoid toxicity or subtherapeutic effects.
        </li>
        <li>
          <strong>Monitoring Disease Progression:</strong> Tracking eGFR over
          time helps clinicians assess the trajectory of kidney decline and
          the effectiveness of interventions.
        </li>
        <li>
          <strong>Timing of Interventions:</strong> Determining the optimal
          time for creating vascular access for dialysis or listing a
          patient for kidney transplantation.
        </li>
      </ul>

      <h3>The CKD-EPI 2021 Equation: A Paradigm Shift</h3>
      <p>
        Historically, equations like the Cockcroft-Gault and the
        Modification of Diet in Renal Disease (MDRD) study equation were used
        to estimate GFR. In 2009, the Chronic Kidney Disease Epidemiology
        Collaboration (CKD-EPI) introduced a new equation that was more
        accurate, especially at higher GFR levels.
      </p>

      <p>
        For many years, estimating equations included a "race multiplier"
        for Black individuals, based on the observation of higher average
        serum creatinine levels in Black populations in certain studies.
        However, the inclusion of race—a social, not biological,
        construct—in clinical algorithms became a subject of intense scrutiny
        and criticism. It was recognized that the race multiplier could lead
        to the overestimation of GFR in Black patients, potentially delaying
        specialist referrals, preemptive transplant listings, and the
        initiation of certain therapies.
      </p>

      <p>
        In response to this, the National Kidney Foundation (NKF) and the
        American Society of Nephrology (ASN) formed a joint task force. The
        result was the development and recommendation of the{" "}
        <strong>CKD-EPI 2021 equation</strong>, which estimates GFR without
        utilizing a race coefficient. This new equation provides a more
        equitable approach to kidney function assessment while maintaining
        high clinical accuracy. It utilizes age, sex, and serum creatinine.
      </p>

      <h3>How to Interpret eGFR Results</h3>
      <p>
        The eGFR is reported in milliliters per minute per 1.73 square meters
        of body surface area (mL/min/1.73 m²). The staging of Chronic Kidney
        Disease (CKD) based on eGFR is broadly defined as follows:
      </p>
      <ul>
        <li>
          <strong>Stage 1:</strong> Normal or high function (eGFR ≥ 90).
          Note: Stage 1 CKD requires other evidence of kidney damage (like
          proteinuria) alongside this eGFR.
        </li>
        <li>
          <strong>Stage 2:</strong> Mildly decreased function (eGFR 60 - 89).
          Again, requires other evidence of kidney damage.
        </li>
        <li>
          <strong>Stage 3a:</strong> Mild to moderately decreased function
          (eGFR 45 - 59).
        </li>
        <li>
          <strong>Stage 3b:</strong> Moderate to severely decreased function
          (eGFR 30 - 44).
        </li>
        <li>
          <strong>Stage 4:</strong> Severely decreased function (eGFR 15 -
          29). Planning for end-stage renal disease (ESRD) typically begins
          here.
        </li>
        <li>
          <strong>Stage 5:</strong> Kidney failure (eGFR &lt; 15). Often
          requires dialysis or transplantation.
        </li>
      </ul>

      <h3>Limitations and Clinical Caveats</h3>
      <p>
        While the eGFR calculator is an indispensable tool, it is not
        without limitations. Clinicians must interpret the results in the
        context of the individual patient:
      </p>
      <ol>
        <li>
          <strong>Non-Steady State:</strong> Estimating equations assume that
          serum creatinine is at a steady state. In Acute Kidney Injury
          (AKI), where creatinine is rapidly changing, the eGFR will be
          highly inaccurate and should not be used.
        </li>
        <li>
          <strong>Extremes of Muscle Mass:</strong> Because creatinine is a
          breakdown product of muscle creatine, patients with extreme muscle
          mass (bodybuilders) or severe muscle wasting (amputees,
          paraplegia, cachexia) will have falsely elevated or depressed
          serum creatinine levels, respectively. In these patients, eGFR
          based on creatinine may not reflect true renal function.
        </li>
        <li>
          <strong>Dietary Influence:</strong> A high meat diet or creatine
          supplementation can transiently elevate serum creatinine
          independent of kidney function.
        </li>
        <li>
          <strong>Alternative Markers:</strong> In scenarios where
          creatinine-based eGFR is suspected to be inaccurate, assessing
          eGFR using Cystatin C—a protein produced by all nucleated cells
          and less affected by muscle mass—is recommended by current
          guidelines.
        </li>
      </ol>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">Q: Why did the new 2021 equation remove the race multiplier?</strong>
          <p className="mt-1 text-ink-muted">
            A: Race is a social construct. Including it in biological
            algorithms was found to cause systemic disparities in care,
            specifically by overestimating kidney function in Black patients
            and delaying critical interventions like transplantation.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Should I use eGFR or Creatinine Clearance (Cockcroft-Gault) for drug dosing?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Historically, the FDA required drug companies to use
            Cockcroft-Gault for pharmacokinetic studies. However, modern
            guidelines increasingly recommend using eGFR (CKD-EPI) for most
            drug dosing, though certain narrow-therapeutic-index drugs may
            still officially recommend Cockcroft-Gault. Clinical judgment is
            required.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: What should I do if my eGFR fluctuates slightly?</strong>
          <p className="mt-1 text-ink-muted">
            A: Minor fluctuations in eGFR are normal and can be influenced by
            hydration status, diet, and minor laboratory variations.
            Persistent declines over several months require medical
            evaluation.
          </p>
        </div>
      </div>
    </div>
  );
}
