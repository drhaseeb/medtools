export default function GraceInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the GRACE Risk Score for Acute Coronary Syndrome</h2>

      <p>
        The Global Registry of Acute Coronary Events (GRACE) risk score is a
        highly validated, universally recognized clinical tool used to
        predict mortality in patients presenting with the entire spectrum of
        Acute Coronary Syndrome (ACS). This encompasses ST-segment elevation
        myocardial infarction (STEMI), non-ST-segment elevation myocardial
        infarction (NSTEMI), and unstable angina. By objectively stratifying
        patients based on their individual risk profile, the GRACE score
        empowers clinicians to make critical, evidence-based decisions
        regarding the urgency and type of medical interventions required.
      </p>

      <h3>Clinical Significance of Risk Stratification in ACS</h3>
      <p>
        Acute Coronary Syndrome represents a medical emergency where coronary
        blood flow is suddenly decreased, resulting in myocardial ischemia
        or infarction. However, not all ACS patients face the same immediate
        risk of death. Some patients have a relatively stable plaque rupture
        that can be managed medically, while others are on the precipice of
        cardiogenic shock or fatal arrhythmias.
      </p>

      <p>
        The GRACE score was developed from a multinational registry of over
        100,000 patients, ensuring its robustness across diverse
        populations. The primary objective of utilizing this score is to
        guide the timing of invasive strategies (like coronary angiography
        and percutaneous coronary intervention) in NSTEMI and unstable
        angina patients. High-risk patients benefit profoundly from an early
        invasive strategy, while low-risk patients may safely undergo a
        conservative, ischemia-guided approach, sparing them unnecessary
        procedural risks.
      </p>

      <h3>Variables Used in the GRACE Score</h3>
      <p>
        The calculator utilizes eight distinct clinical variables, available
        shortly after patient presentation, making it highly practical for
        the emergency department or cardiac care unit:
      </p>
      <ul>
        <li><strong>Age:</strong> Advanced age is one of the strongest independent predictors of mortality in ACS.</li>
        <li><strong>Heart Rate:</strong> Tachycardia reflects increased sympathetic tone, myocardial oxygen demand, and potential hemodynamic compromise.</li>
        <li><strong>Systolic Blood Pressure:</strong> Lower systolic blood pressures indicate compromised left ventricular function and impending cardiogenic shock.</li>
        <li><strong>Serum Creatinine:</strong> Renal dysfunction is closely linked to adverse cardiovascular outcomes and influences the clearance of antithrombotic medications.</li>
        <li><strong>Killip Class:</strong> A physical examination-based classification assessing the severity of heart failure (from Class I: no heart failure, to Class IV: cardiogenic shock).</li>
        <li><strong>Cardiac Arrest at Admission:</strong> Indicates profound electrical instability and massive ischemic burden.</li>
        <li><strong>ST-Segment Deviation:</strong> The presence of ST-segment depression on the ECG indicates significant, ongoing myocardial ischemia.</li>
        <li><strong>Elevated Cardiac Enzymes:</strong> Positive troponin or CK-MB confirms myocardial necrosis.</li>
      </ul>

      <h3>Interpretation and Clinical Guidelines</h3>
      <p>
        The GRACE score yields a numerical value that translates into a
        predicted probability of mortality at 6 months post-discharge. Based
        on this calculated risk, international guidelines (including the
        European Society of Cardiology and the American College of
        Cardiology/American Heart Association) provide distinct
        recommendations:
      </p>

      <ul>
        <li>
          <strong>Low Risk (GRACE Score &lt; 109):</strong> Predicted 6-month
          mortality &lt; 3%. An ischemia-guided strategy is often
          appropriate. Invasive angiography is reserved for those who
          experience recurrent ischemia despite optimal medical therapy or
          demonstrate high risk on non-invasive stress testing.
        </li>
        <li>
          <strong>Intermediate Risk (GRACE Score 109 - 140):</strong>
          Predicted 6-month mortality 3% - 8%. An invasive strategy is
          recommended, generally within 72 hours of admission.
        </li>
        <li>
          <strong>High Risk (GRACE Score &gt; 140):</strong> Predicted
          6-month mortality &gt; 8%. An early invasive strategy is strongly
          recommended, typically within 24 hours of admission, to define
          coronary anatomy and restore adequate perfusion to the
          jeopardized myocardium.
        </li>
      </ul>

      <h3>Limitations of the GRACE Score</h3>
      <p>While an exceptional tool, the GRACE score must be applied judiciously:</p>
      <ul>
        <li><strong>Snapshot in Time:</strong> The score relies on admission variables. A patient who arrives stable (low initial score) but rapidly deteriorates requires immediate intervention regardless of their initial GRACE score calculation.</li>
        <li><strong>Exclusion of Comorbidities:</strong> The score does not explicitly account for significant co-morbid conditions such as severe anemia, active bleeding, frailty, or advanced malignancy, which heavily influence the decision for invasive procedures.</li>
        <li><strong>Not for STEMI Triage:</strong> While the GRACE score predicts mortality in STEMI, it does not alter the immediate treatment paradigm. STEMI universally requires emergent reperfusion therapy (primary PCI or thrombolysis) irrespective of the GRACE score.</li>
      </ul>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">Q: How does GRACE compare to the TIMI Risk Score?</strong>
          <p className="mt-1 text-ink-muted">
            A: The TIMI score is older, simpler to calculate at the bedside,
            and uses fewer continuous variables. However, the GRACE score
            has consistently demonstrated superior discrimination and
            predictive accuracy for both in-hospital and 6-month mortality
            across numerous validation studies.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: Does the GRACE score predict the risk of bleeding?</strong>
          <p className="mt-1 text-ink-muted">
            A: No. The GRACE score specifically predicts mortality/ischemic
            outcomes. The CRUSADE score or the ARC-HBR criteria should be
            calculated separately to assess a patient's risk of major
            bleeding before initiating potent antithrombotic therapies.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: Should the GRACE score be recalculated during hospitalization?</strong>
          <p className="mt-1 text-ink-muted">
            A: The validated GRACE score utilizes admission variables. While
            clinical deterioration changes the patient's risk profile
            dynamically, the formal score is intended as an initial triage
            and stratification tool.
          </p>
        </div>
      </div>
    </div>
  );
}
