export default function TimiInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the TIMI Risk Score for UA/NSTEMI</h2>

      <p>
        Patients presenting to the emergency department with chest pain and
        suspected Acute Coronary Syndrome (ACS) represent a high-stakes,
        high-volume clinical challenge. Rapid, accurate risk stratification
        is essential to identify those who require aggressive antithrombotic
        therapy and an early invasive strategy (coronary angiography), versus
        those who can be safely managed with a conservative, ischemia-guided
        approach.
      </p>

      <p>
        Developed by the Thrombolysis in Myocardial Infarction (TIMI) study
        group in 2000, the TIMI Risk Score for Unstable Angina (UA) and
        Non-ST Elevation Myocardial Infarction (NSTEMI) was one of the first
        widely adopted, simple bedside tools to predict the 14-day risk of
        all-cause mortality, new or recurrent myocardial infarction (MI), or
        severe recurrent ischemia requiring urgent revascularization.
      </p>

      <h3>The Seven Components of the TIMI Score</h3>
      <p>
        The brilliance of the TIMI score lies in its simplicity. It requires
        no complex calculations or specialized diagnostic equipment beyond a
        standard ECG, basic cardiac biomarkers, and a clinical history. The
        score is calculated by assigning one point for the presence of each
        of the following seven independent risk variables:
      </p>

      <ol>
        <li>
          <strong>Age &ge; 65 years:</strong> Advanced age correlates
          directly with more extensive coronary artery disease and worse
          outcomes.
        </li>
        <li>
          <strong>&ge; 3 CAD Risk Factors:</strong> The presence of at least
          three traditional risk factors (hypertension,
          hypercholesterolemia, diabetes mellitus, family history of
          premature CAD, or current smoking).
        </li>
        <li>
          <strong>Known CAD (Stenosis &ge; 50%):</strong> A documented
          history of significant coronary stenosis (e.g., from a prior
          angiogram, prior MI, or prior CABG/PCI) dramatically increases the
          likelihood that the current chest pain is ischemic in origin.
        </li>
        <li>
          <strong>Aspirin Use in Past 7 Days:</strong> This is a marker of a
          higher baseline risk profile and suggests that the acute ischemic
          event occurred <em>despite</em> baseline antiplatelet therapy,
          indicating an aggressive thrombotic process or aspirin resistance.
        </li>
        <li>
          <strong>Severe Angina (&ge; 2 episodes in 24 hours):</strong>
          High-frequency, stuttering chest pain is a hallmark of unstable,
          volatile plaque morphology and impending vessel occlusion.
        </li>
        <li>
          <strong>ST Deviation &ge; 0.5 mm:</strong> Transient ST-segment
          depression (or transient elevation) on the presenting ECG
          signifies significant, ongoing myocardial ischemia.
        </li>
        <li>
          <strong>Elevated Cardiac Markers:</strong> Positive serum troponin
          (or CK-MB) confirms myocardial necrosis has already occurred,
          distinguishing NSTEMI from Unstable Angina.
        </li>
      </ol>

      <h3>Interpreting the TIMI Risk Score</h3>
      <p>
        The total score ranges from 0 to 7. The corresponding 14-day risk of
        the composite endpoint (death, MI, urgent revascularization)
        increases sharply with the score:
      </p>
      <ul>
        <li><strong>Score 0 - 1:</strong> ~4.7% risk (Low Risk).</li>
        <li><strong>Score 2:</strong> ~8.3% risk (Low Risk).</li>
        <li><strong>Score 3:</strong> ~13.2% risk (Intermediate Risk).</li>
        <li><strong>Score 4:</strong> ~19.9% risk (Intermediate Risk).</li>
        <li><strong>Score 5:</strong> ~26.2% risk (High Risk).</li>
        <li><strong>Score 6 - 7:</strong> ~40.9% risk (High Risk).</li>
      </ul>

      <h3>Clinical Application and Guideline Recommendations</h3>
      <p>The TIMI score directly influences acute management decisions:</p>

      <ul>
        <li>
          <strong>Low Risk (0-2):</strong> These patients may be appropriate
          for a conservative strategy. This involves optimal medical therapy
          (aspirin, beta-blockers, statins, and a P2Y12 inhibitor if
          indicated) and non-invasive stress testing prior to discharge to
          provoke and document ischemia.
        </li>
        <li>
          <strong>Intermediate to High Risk (&ge; 3):</strong> Major
          guidelines (such as the ACC/AHA) strongly recommend an early
          invasive strategy for these patients. This typically means
          proceeding to coronary angiography within 24 to 72 hours.
          Furthermore, these patients derive a massive mortality and
          morbidity benefit from aggressive medical therapies, such as the
          addition of Glycoprotein IIb/IIIa inhibitors or potent P2Y12
          inhibitors (like Ticagrelor or Prasugrel), compared to low-risk
          cohorts.
        </li>
      </ul>

      <h3>TIMI vs. HEART vs. GRACE</h3>
      <p>While historically paramount, the TIMI score's role in modern practice is shifting:</p>
      <ul>
        <li>
          <strong>Compared to the HEART Score:</strong> The HEART score is
          now preferred by many emergency physicians for the initial triage
          of <em>undifferentiated</em> chest pain. TIMI was designed
          specifically for patients who already have a high clinical
          suspicion or confirmed diagnosis of ACS. TIMI is less effective
          than the HEART score at ruling out major adverse cardiac events
          (MACE) in low-risk ED populations.
        </li>
        <li>
          <strong>Compared to the GRACE Score:</strong> The GRACE score is
          more complex to calculate but has consistently demonstrated
          superior discrimination for predicting mortality across the entire
          spectrum of ACS compared to TIMI. Many cardiology societies now
          preferentially recommend GRACE for detailed risk stratification.
        </li>
      </ul>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: Can I use the TIMI score for a patient with an ST-Elevation MI
            (STEMI)?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: No. There is a separate "TIMI Risk Score for STEMI." The score
            described here is exclusively validated for Unstable Angina and
            NSTEMI. STEMI requires immediate reperfusion therapy (primary PCI
            or thrombolytics) regardless of any risk score.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Does the TIMI score account for high-sensitivity Troponin
            (hs-Tn)?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: The original TIMI score was developed before the widespread
            use of hs-Tn. However, modern guidelines incorporate hs-Tn into
            the "Elevated Cardiac Markers" criterion. The presence of a
            positive hs-Tn essentially guarantees the patient is at least
            intermediate risk (scoring points for the biomarker, and likely
            others), pushing them toward an invasive strategy.
          </p>
        </div>
      </div>
    </div>
  );
}
