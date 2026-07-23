export default function HeartScoreInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the HEART Score for Chest Pain</h2>

      <p>
        Chest pain is one of the most common chief complaints in emergency
        departments globally. While the majority of cases are non-cardiac
        (e.g., gastroesophageal reflux, musculoskeletal pain, anxiety), a
        critical subset represents acute coronary syndrome (ACS).
        Differentiating between the two rapidly and safely is the primary
        mandate of the emergency physician.
      </p>

      <p>
        The historical approach often involved admitting patients for
        prolonged observation and extensive non-invasive stress testing "just
        in case." This defensive strategy led to massive hospital
        overcrowding, astronomical costs, and iatrogenic harm from
        false-positive tests. The HEART score was developed specifically for
        the emergency department to safely identify a large cohort of
        low-risk patients who can be discharged directly home without
        further testing.
      </p>

      <h3>The Superiority of HEART over TIMI</h3>
      <p>
        Prior to the HEART score, emergency physicians often used the TIMI
        score to risk-stratify chest pain. However, the TIMI score was
        derived from patients already diagnosed with unstable angina or
        NSTEMI. Applying it to the undifferentiated emergency department
        population (where the prevalence of actual disease is much lower)
        led to poor performance. The HEART score was purposefully built and
        validated on an undifferentiated ED population, incorporating the
        physician's clinical gestalt, making it vastly superior for initial
        triage.
      </p>

      <h3>The Five Pillars of the HEART Score</h3>
      <p>
        The acronym HEART represents the five components evaluated. Each
        component is scored 0, 1, or 2, yielding a maximum score of 10.
      </p>

      <ol>
        <li>
          <strong>H - History:</strong> This element uniquely incorporates
          clinical gestalt.
          <ul>
            <li>
              Highly suspicious (2 points): Classic crushing, left-sided
              pressure radiating to the jaw/arm with diaphoresis.
            </li>
            <li>Moderately suspicious (1 point): Mixed features.</li>
            <li>
              Slightly suspicious (0 points): Sharp, pleuritic, positional
              pain, or reproducible on palpation.
            </li>
          </ul>
        </li>
        <li>
          <strong>E - ECG:</strong>
          <ul>
            <li>
              Significant ST depression (2 points): Indicates high
              likelihood of ischemia.
            </li>
            <li>
              Non-specific repolarization abnormalities (1 point): e.g.,
              T-wave inversions, LBBB, pacemaker.
            </li>
            <li>Normal (0 points).</li>
          </ul>
        </li>
        <li>
          <strong>A - Age:</strong> Age correlates strongly with coronary
          artery disease prevalence.
          <ul>
            <li>&ge; 65 years (2 points).</li>
            <li>45 - 64 years (1 point).</li>
            <li>&le; 45 years (0 points).</li>
          </ul>
        </li>
        <li>
          <strong>R - Risk Factors:</strong> (Hypertension,
          hypercholesterolemia, diabetes, obesity, smoking, family history).
          <ul>
            <li>&ge; 3 risk factors, or history of atherosclerotic disease (2 points).</li>
            <li>1 or 2 risk factors (1 point).</li>
            <li>No risk factors (0 points).</li>
          </ul>
        </li>
        <li>
          <strong>T - Troponin:</strong>
          <ul>
            <li>&ge; 3x normal limit (2 points): Indicates significant myocardial necrosis.</li>
            <li>1 - 3x normal limit (1 point).</li>
            <li>&le; normal limit (0 points).</li>
          </ul>
        </li>
      </ol>

      <h3>Interpreting the Score: The Pathway to Discharge</h3>
      <p>
        The HEART score predicts the 6-week risk of a Major Adverse Cardiac
        Event (MACE), defined as all-cause mortality, myocardial infarction,
        or the need for coronary revascularization.
      </p>

      <ul>
        <li>
          <strong>Score 0 - 3 (Low Risk):</strong> The MACE risk is
          approximately 0.9% to 1.7%. This is widely considered an
          acceptable threshold for safe discharge from the ED without the
          need for further inpatient testing or observation.
        </li>
        <li>
          <strong>Score 4 - 6 (Intermediate Risk):</strong> The MACE risk is
          12% to 16.6%. These patients require admission (or placement in a
          chest pain observation unit) for serial troponins and likely
          provocative stress testing or CT angiography before discharge.
        </li>
        <li>
          <strong>Score 7 - 10 (High Risk):</strong> The MACE risk is 50% to
          65%. These patients require immediate admission, aggressive
          medical management, and likely an early invasive coronary
          angiogram.
        </li>
      </ul>

      <h3>HEART Pathway and High-Sensitivity Troponin</h3>
      <p>
        The introduction of High-Sensitivity Troponin (hs-Tn) assays has
        further enhanced the HEART score, giving rise to the "HEART
        Pathway." This protocol combines a HEART score &le; 3 with a negative
        troponin at 0 and 3 hours (or even 0 and 1 hour with specific
        assays). Patients who negative the pathway have a 30-day MACE risk
        approaching 0%, cementing the score's role as the definitive
        standard of care for low-risk chest pain.
      </p>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: Can I discharge a patient with a HEART score of 3 if they have
            a known history of coronary stents?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: It is mathematically possible to score a 3 even with known
            disease (History 0, ECG 0, Age 0, Risk 2, Trop 0 = 2). However,
            clinical judgment must prevail. Many institutions require
            patients with known coronary disease to undergo a more
            comprehensive evaluation, regardless of a technically low HEART
            score.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Does the "History" score rely on the patient or the doctor?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: The History score is explicitly based on the physician's
            clinical gestalt and subjective interpretation of the patient's
            story. It acknowledges that experienced clinicians often "know"
            when pain is cardiac, even if the patient lacks classic textbook
            symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}
