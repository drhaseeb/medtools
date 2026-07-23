export default function PesiInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the Pulmonary Embolism Severity Index (PESI)</h2>

      <p>
        A acute Pulmonary Embolism (PE) is a life-threatening cardiovascular
        emergency that occurs when a blood clot (usually a deep vein
        thrombosis from the legs) dislodges and occludes the pulmonary
        arterial system. The clinical presentation of a PE ranges
        drastically—from entirely asymptomatic incidental findings on a CT
        scan to sudden cardiovascular collapse and death.
      </p>

      <p>
        Given this massive spectrum of severity, clinicians need a reliable,
        objective way to determine which patients are at high risk of rapid
        deterioration (requiring intensive care unit admission and potential
        thrombolysis) and which patients are at such low risk that they can
        be safely discharged from the emergency department for outpatient
        management with direct oral anticoagulants (DOACs). The Pulmonary
        Embolism Severity Index (PESI) is the most rigorously validated
        prognostic tool for exactly this purpose.
      </p>

      <h3>Variables of the PESI Score</h3>
      <p>
        The original PESI score calculates a 30-day mortality risk based on
        11 distinct clinical variables that are readily available at the
        time of presentation:
      </p>

      <ul>
        <li>
          <strong>Demographics:</strong> Age (adds points equal to age in
          years) and Male sex (+10 points). Age is the single strongest
          driver of the PESI score.
        </li>
        <li>
          <strong>Comorbidities:</strong> Cancer (+30 points), Heart failure
          (+10 points), and Chronic lung disease (+10 points). These
          indicate a decreased physiological reserve to handle the acute
          right ventricular strain caused by a PE.
        </li>
        <li>
          <strong>Vital Signs:</strong> Pulse ≥ 110 bpm (+20 points),
          Systolic Blood Pressure &lt; 100 mmHg (+30 points), Respiratory
          Rate ≥ 30 breaths/min (+20 points), Temperature &lt; 36°C (+20
          points). These are direct markers of hemodynamic compromise,
          shock, and severe respiratory distress.
        </li>
        <li>
          <strong>Clinical Status:</strong> Altered mental status (+60
          points) and Arterial oxygen saturation &lt; 90% (+20 points).
          Altered mental status in this context often reflects profound
          cerebral hypoperfusion due to falling cardiac output.
        </li>
      </ul>

      <h3>Interpreting the Risk Classes</h3>
      <p>
        The total point score categorizes the patient into one of five risk
        classes, each correlating with a specific 30-day mortality rate:
      </p>
      <ul>
        <li><strong>Class I (Very Low Risk):</strong> ≤ 65 points (0 - 1.6% mortality).</li>
        <li><strong>Class II (Low Risk):</strong> 66 - 85 points (1.7 - 3.5% mortality).</li>
        <li><strong>Class III (Intermediate Risk):</strong> 86 - 105 points (3.2 - 7.1% mortality).</li>
        <li><strong>Class IV (High Risk):</strong> 106 - 125 points (4.0 - 11.4% mortality).</li>
        <li><strong>Class V (Very High Risk):</strong> &gt; 125 points (10.0 - 24.5% mortality).</li>
      </ul>

      <h3>Clinical Application: Outpatient vs. Inpatient Management</h3>
      <p>
        Current international guidelines from the European Society of
        Cardiology (ESC) and the American College of Chest Physicians
        (CHEST) heavily rely on PESI for disposition decisions:
      </p>

      <p>
        <strong>Classes I and II (Low Risk):</strong> These patients have an
        excellent short-term prognosis. Guidelines strongly suggest they be
        considered for early discharge (within 24-48 hours) or even
        immediate discharge from the ED for outpatient treatment, provided
        there are no other medical or social reasons for admission (e.g.,
        active bleeding risk, severe pain, inability to afford medications,
        or lack of support at home).
      </p>

      <p>
        <strong>Classes III to V (Intermediate to High Risk):</strong> These
        patients require hospital admission. For intermediate-risk patients,
        further risk stratification with echocardiography (to check for
        right ventricular dysfunction) and biomarker testing (Troponin, BNP)
        is required. High-risk patients, particularly those with
        hemodynamic instability (Class V), may require ICU-level care and
        consideration for advanced therapies like systemic thrombolysis or
        catheter-directed embolectomy.
      </p>

      <h3>The Simplified PESI (sPESI)</h3>
      <p>
        Because the original PESI requires adding specific weighted points,
        a Simplified PESI (sPESI) was developed for faster bedside use. The
        sPESI uses only 6 variables: Age &gt; 80, Cancer, Chronic
        cardiopulmonary disease, Heart rate ≥ 110, Systolic BP &lt; 100, and
        O2 saturation &lt; 90%. Each variable is worth 1 point. A score of 0
        indicates low risk (equivalent to PESI Class I/II), and a score of ≥
        1 indicates high risk. While easier to calculate, it provides less
        granular risk stratification for the sicker patients compared to the
        full PESI.
      </p>

      <h3>Limitations</h3>
      <p>
        The PESI score is an exceptional tool but does not replace clinical
        judgment. It predicts mortality, not necessarily the specific need
        for advanced interventions. For instance, a young, otherwise
        healthy 30-year-old with a massive PE causing severe right
        ventricular strain might have a relatively low PESI score purely due
        to their age, yet they require aggressive inpatient management. PESI
        should always be integrated with echocardiographic findings and
        cardiac biomarkers.
      </p>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: Can a patient with a PE really be sent home from the ED?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Yes. Historically, all PE patients were admitted for IV
            heparin bridges. With the advent of DOACs (like Rivaroxaban and
            Apixaban) and validated tools like PESI, low-risk patients
            (Class I or II) are increasingly treated entirely as
            outpatients, which improves patient satisfaction and reduces
            hospital-acquired complications.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: Is PESI used to diagnose a PE?</strong>
          <p className="mt-1 text-ink-muted">
            A: No. PESI is strictly a prognostic tool used <em>after</em> a
            PE has been definitively diagnosed (usually via a CT Pulmonary
            Angiogram). Tools like the Wells' Criteria or Geneva Score are
            used for initial diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}
