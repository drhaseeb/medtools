export default function HasBledInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Understanding the HAS-BLED Bleeding Risk Score for Atrial Fibrillation</h2>

      <p>
        Anticoagulation therapy is the cornerstone of stroke prevention in
        patients with atrial fibrillation (AF). While oral anticoagulants
        (OACs) such as Warfarin and Direct Oral Anticoagulants (DOACs) are
        highly effective at preventing ischemic strokes, they inevitably
        increase the patient's risk of major hemorrhage, including
        devastating intracranial bleeds. For decades, clinicians struggled to
        objectively weigh this risk-benefit ratio.
      </p>

      <p>
        The HAS-BLED score was developed to provide a simple, validated
        clinical tool to assess the 1-year risk of major bleeding in patients
        with AF. Introduced in 2010, it quickly became the most widely
        recognized and utilized bleeding risk score globally, endorsed by
        major international bodies like the European Society of Cardiology
        (ESC).
      </p>

      <h3>The Components of the HAS-BLED Score</h3>
      <p>
        The acronym HAS-BLED stands for the seven clinical risk factors that
        comprise the score. Each factor present adds 1 point to the total
        score, yielding a maximum possible score of 9.
      </p>

      <ul>
        <li>
          <strong>H - Hypertension (1 point):</strong> Uncontrolled
          hypertension, defined specifically as systolic blood pressure
          consistently &gt;160 mmHg. High pressure places immense mechanical
          stress on blood vessels, increasing the risk of rupture,
          particularly in the brain.
        </li>
        <li>
          <strong>A - Abnormal Renal or Liver Function (1 or 2 points):</strong>
          <ul>
            <li>
              <em>Renal:</em> Chronic dialysis, renal transplantation, or
              serum creatinine &ge; 2.26 mg/dL. Impaired kidneys fail to clear
              anticoagulants effectively.
            </li>
            <li>
              <em>Liver:</em> Cirrhosis or biochemical evidence of
              significant hepatic derangement (e.g., bilirubin &gt; 2x upper
              limit of normal with AST/ALT &gt; 3x upper limit). The liver
              synthesizes essential clotting factors.
            </li>
          </ul>
        </li>
        <li>
          <strong>S - Stroke History (1 point):</strong> A prior ischemic
          stroke often leaves damaged, friable brain tissue that is highly
          susceptible to secondary hemorrhagic transformation when exposed to
          anticoagulants.
        </li>
        <li>
          <strong>B - Bleeding History or Predisposition (1 point):</strong> A
          previous major bleeding event (e.g., severe gastrointestinal bleed)
          or a known bleeding diathesis (e.g., severe thrombocytopenia or
          hemophilia).
        </li>
        <li>
          <strong>L - Labile INRs (1 point):</strong> For patients on
          Warfarin, a Time in Therapeutic Range (TTR) &lt; 60% significantly
          increases bleeding risk. Note: This criterion is not applicable to
          patients taking DOACs.
        </li>
        <li>
          <strong>E - Elderly (1 point):</strong> Age &gt; 65 years. The
          elderly have increased vascular fragility, higher fall risks, and
          altered drug pharmacokinetics.
        </li>
        <li>
          <strong>D - Drugs or Alcohol (1 or 2 points):</strong>
          <ul>
            <li>
              <em>Drugs:</em> Concomitant use of medications that increase
              bleeding risk, primarily antiplatelet agents (Aspirin,
              Clopidogrel) or NSAIDs (Ibuprofen, Naproxen).
            </li>
            <li>
              <em>Alcohol:</em> Excessive alcohol consumption (&ge; 8 drinks
              per week) impairs liver function, increases fall risk, and
              causes gastric mucosal irritation.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Interpreting the HAS-BLED Score</h3>
      <p>The score categorizes patients into varying levels of bleeding risk:</p>
      <ul>
        <li>
          <strong>Score 0-2 (Low to Moderate Risk):</strong> Approximately
          1-2% risk of major bleeding per year.
        </li>
        <li>
          <strong>Score &ge; 3 (High Risk):</strong> Approximately 4-12% risk
          of major bleeding per year.
        </li>
      </ul>

      <h3>The Critical Rule of HAS-BLED: Do Not Withhold Treatment</h3>
      <p>
        A frequent and dangerous misconception in clinical practice is that a
        high HAS-BLED score (&ge;3) is an absolute contraindication to oral
        anticoagulation. <strong>This is incorrect.</strong>
      </p>

      <p>
        Major cardiovascular guidelines explicitly state that a high bleeding
        risk score should <em>not</em> be used as the sole reason to withhold
        anticoagulation from a patient who is at high risk of stroke (e.g., a
        high CHA₂DS₂-VASc score). In almost all scenarios, the clinical
        benefit of preventing a massive ischemic stroke heavily outweighs the
        risk of a major bleed.
      </p>

      <p>Instead, a high HAS-BLED score is a "flag" that should prompt the clinician to:</p>
      <ol>
        <li>
          <strong>Correct Modifiable Risk Factors:</strong> Address the 'H'
          by strictly controlling blood pressure below 160 mmHg. Address the
          'D' by stopping unnecessary NSAIDs or discontinuing Aspirin if
          there is no strong indication for it. Address the 'L' by switching
          a patient with poorly controlled Warfarin to a DOAC. Counsel the
          patient on reducing alcohol intake.
        </li>
        <li>
          <strong>Choose the Right Drug:</strong> If renal function is
          impaired, select an anticoagulant with a favorable renal profile
          (like Apixaban) and ensure dose adjustments are made according to
          guidelines.
        </li>
        <li>
          <strong>Increase Surveillance:</strong> High-risk patients should
          be reviewed more frequently (e.g., every 1-3 months instead of
          every 6 months) to monitor hemoglobin, renal function, and
          medication compliance.
        </li>
      </ol>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">Q: Is HAS-BLED better than the ORBIT score?</strong>
          <p className="mt-1 text-ink-muted">
            A: Both are validated tools. The UK's NICE guidelines recently
            shifted preference to the ORBIT score due to its simplicity and
            robust validation in modern DOAC cohorts, whereas HAS-BLED was
            originally validated heavily in Warfarin populations. However,
            HAS-BLED remains widely used and specifically highlights
            modifiable risk factors (like labile INRs and blood pressure)
            brilliantly.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: If my patient only takes low-dose Aspirin (81mg), does that
            still count as a point for 'Drugs'?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Yes. Concomitant use of any antiplatelet agent, even low-dose
            aspirin, significantly increases the risk of bleeding when
            combined with an oral anticoagulant. Unless the patient has a
            recent coronary stent, the aspirin can often be safely
            discontinued.
          </p>
        </div>
      </div>
    </div>
  );
}
