export default function OrbitInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Understanding the ORBIT Bleeding Risk Score for Atrial Fibrillation</h2>

      <p>
        When managing patients with atrial fibrillation (AF), the decision
        to initiate oral anticoagulation is always a delicate balancing act.
        On one side of the scale lies the imperative to prevent devastating
        ischemic strokes (assessed via the CHA₂DS₂-VASc score). On the other
        side is the inherent, unavoidable risk of major hemorrhage caused by
        the anticoagulants themselves. To make an informed, patient-centered
        decision, clinicians must objectively quantify this bleeding risk.
      </p>

      <p>
        The Outcomes Registry for Better Informed Treatment of Atrial
        Fibrillation (ORBIT) bleeding risk score is a highly validated
        clinical tool designed precisely for this purpose. Recognized by
        major guidelines, including the UK's National Institute for Health
        and Care Excellence (NICE), the ORBIT score provides a simple,
        robust estimation of the risk of major bleeding in patients on oral
        anticoagulants.
      </p>

      <h3>Why the ORBIT Score is Preferred</h3>
      <p>
        For many years, the HAS-BLED score was the predominant tool for
        assessing bleeding risk. However, the ORBIT score has emerged as a
        preferred alternative in several recent guidelines, particularly in
        the UK. The reasons for this shift include:
      </p>

      <ul>
        <li>
          <strong>Simplicity and Pragmatism:</strong> ORBIT relies on five
          easily accessible clinical parameters, avoiding some of the
          subjective or difficult-to-obtain metrics in other scores (like
          "labile INRs," which are irrelevant for patients on modern Direct
          Oral Anticoagulants or DOACs).
        </li>
        <li>
          <strong>Validation in DOAC Eras:</strong> The ORBIT score was
          developed and validated in a contemporary cohort of patients, many
          of whom were treated with DOACs, making it highly applicable to
          modern clinical practice compared to older scores validated
          primarily in Warfarin-treated populations.
        </li>
        <li>
          <strong>Improved Predictive Accuracy:</strong> Numerous
          independent validation studies have demonstrated that ORBIT has
          superior discrimination and calibration compared to HAS-BLED for
          predicting major bleeding events.
        </li>
      </ul>

      <h3>The Five Components of the ORBIT Score</h3>
      <p>
        The ORBIT score assigns point values based on the presence of five
        independent risk factors. The total score ranges from 0 to 7.
      </p>
      <ol>
        <li>
          <strong>Older Age (&ge; 74 years) [1 Point]:</strong> Age is a
          significant predictor of both stroke and bleeding. Physiologic
          changes, increased frailty, and altered pharmacokinetics make the
          elderly more susceptible to hemorrhage.
        </li>
        <li>
          <strong>Reduced Hemoglobin / Anemia [2 Points]:</strong> Defined as
          hemoglobin &lt; 13 g/dL for men and &lt; 12 g/dL for women.
          Pre-existing anemia often indicates an underlying source of
          chronic blood loss (e.g., gastrointestinal) or hematologic
          vulnerability.
        </li>
        <li>
          <strong>Bleeding History [2 Points]:</strong> A prior history of
          major gastrointestinal bleeding, intracranial hemorrhage, or other
          significant bleeding events is one of the strongest predictors of
          a future event.
        </li>
        <li>
          <strong>Insufficient Kidney Function [1 Point]:</strong> Defined
          as an eGFR &lt; 60 mL/min/1.73m². Renal impairment decreases the
          clearance of many anticoagulants (especially DOACs), leading to
          drug accumulation and higher bleeding risk. It also causes uremic
          platelet dysfunction.
        </li>
        <li>
          <strong>Treatment with Antiplatelets [1 Point]:</strong> The
          concurrent use of antiplatelet agents (like Aspirin, Clopidogrel,
          Ticagrelor) with an anticoagulant dramatically increases the risk
          of bleeding.
        </li>
      </ol>

      <h3>Interpreting the ORBIT Score</h3>
      <p>
        The cumulative score categorizes the patient into a bleeding risk
        tier, which corresponds to an estimated rate of major bleeding
        events per 100 patient-years:
      </p>

      <ul>
        <li>
          <strong>Score 0 - 2 (Low Risk):</strong> Corresponds to
          approximately 2.4 major bleeds per 100 patient-years.
        </li>
        <li>
          <strong>Score 3 (Medium Risk):</strong> Corresponds to
          approximately 4.7 major bleeds per 100 patient-years.
        </li>
        <li>
          <strong>Score 4 - 7 (High Risk):</strong> Corresponds to
          approximately 8.1 major bleeds per 100 patient-years.
        </li>
      </ul>

      <h3>Clinical Application and Caveats</h3>
      <p>
        The most crucial concept regarding any bleeding risk score is this:{" "}
        <strong>
          A high bleeding score is NOT an absolute contraindication to
          anticoagulation.
        </strong>
      </p>

      <p>
        The purpose of the ORBIT score is not to deny patients stroke
        prevention. Paradoxically, patients with the highest bleeding risk
        often have the highest baseline stroke risk and stand to gain the
        most absolute benefit from anticoagulation.
      </p>

      <p>Instead, a high ORBIT score should be used to:</p>
      <ul>
        <li>
          <strong>Identify Modifiable Risk Factors:</strong> Address the
          components driving the score. Can the concurrent aspirin be
          stopped? Can the anemia be investigated and treated? Can blood
          pressure (a general bleeding risk factor) be better controlled?
        </li>
        <li>
          <strong>Guide Drug Selection and Dosing:</strong> In patients with
          high risk, particularly driven by renal impairment, selecting a
          DOAC with a safer renal profile (like Apixaban) and ensuring
          appropriate dose reduction is vital.
        </li>
        <li>
          <strong>Increase Monitoring:</strong> High-risk patients require
          more frequent follow-up, tighter blood pressure control, and
          regular monitoring of hemoglobin and renal function.
        </li>
      </ul>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">Q: Should I use HAS-BLED or ORBIT?</strong>
          <p className="mt-1 text-ink-muted">
            A: It often depends on your local or national guidelines. NICE
            currently recommends ORBIT due to its simplicity and robust
            validation in modern DOAC cohorts. However, both are accepted
            clinical tools.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: If my patient has a high ORBIT score and a high CHA₂DS₂-VASc
            score, what do I do?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: In the vast majority of cases, the net clinical benefit
            favors anticoagulation. A major ischemic stroke is usually more
            devastating (and more likely) than a major bleed. Proceed with
            anticoagulation but mitigate modifiable bleeding risks
            aggressively.
          </p>
        </div>
      </div>
    </div>
  );
}
