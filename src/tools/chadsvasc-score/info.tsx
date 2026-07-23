export default function ChadsvascInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Understanding the CHA₂DS₂-VASc Score for Atrial Fibrillation</h2>

      <p>
        Atrial fibrillation (AF) is the most common sustained cardiac
        arrhythmia encountered in clinical practice, characterized by rapid,
        irregular atrial electrical activity. This loss of coordinated atrial
        contraction leads to blood stasis, particularly within the left
        atrial appendage, significantly increasing the risk of thrombus
        formation. If a clot embolizes to the brain, it causes an ischemic
        stroke. Strokes resulting from AF are notoriously severe, often
        leaving patients with profound, irreversible neurological deficits.
      </p>

      <p>
        The primary defense against this catastrophic event is oral
        anticoagulation (OAC). However, anticoagulation inherently carries a
        risk of major bleeding. Therefore, clinicians must carefully weigh
        the risk of stroke against the risk of bleeding for every patient
        with AF. The CHA₂DS₂-VASc score is the internationally recommended,
        gold-standard clinical tool designed to estimate the annual risk of
        stroke in patients with non-valvular atrial fibrillation.
      </p>

      <h3>Evolution: From CHADS₂ to CHA₂DS₂-VASc</h3>
      <p>
        The original CHADS₂ score (Congestive heart failure, Hypertension,
        Age &ge;75, Diabetes, Stroke) was widely used for many years.
        However, it was recognized that CHADS₂ categorized too many patients
        as "intermediate risk," leaving clinicians uncertain about whether to
        prescribe anticoagulation. Furthermore, it failed to account for
        several critical, independent risk factors.
      </p>

      <p>
        The CHA₂DS₂-VASc score refined this by incorporating vascular
        disease, female sex, and lowering the age threshold for risk
        assignment. This updated scoring system is significantly better at
        identifying "truly low-risk" patients—those who safely do not
        require anticoagulation—while providing a more nuanced continuum of
        risk for everyone else.
      </p>

      <h3>Components of the CHA₂DS₂-VASc Score</h3>
      <p>
        The acronym represents the clinical risk factors evaluated. A higher
        score equates to a higher annual stroke risk.
      </p>
      <ul>
        <li>
          <strong>C (Congestive Heart Failure) - 1 Point:</strong> Includes
          clinical heart failure or objectively documented
          moderate-to-severe left ventricular systolic dysfunction (LVEF
          &le; 40%).
        </li>
        <li>
          <strong>H (Hypertension) - 1 Point:</strong> A history of
          hypertension, whether resting blood pressure is currently
          controlled with medications or not.
        </li>
        <li>
          <strong>A₂ (Age &ge; 75 years) - 2 Points:</strong> Advanced age is
          a potent, independent predictor of thromboembolism.
        </li>
        <li>
          <strong>D (Diabetes Mellitus) - 1 Point:</strong> Fasting blood
          glucose &ge; 126 mg/dL or treatment with oral
          hypoglycemics/insulin.
        </li>
        <li>
          <strong>S₂ (Prior Stroke, TIA, or Thromboembolism) - 2 Points:</strong>{" "}
          A previous ischemic event drastically increases the risk of a
          recurrent event.
        </li>
        <li>
          <strong>V (Vascular Disease) - 1 Point:</strong> Includes prior
          myocardial infarction, peripheral artery disease, or complex
          aortic plaque.
        </li>
        <li>
          <strong>A (Age 65-74 years) - 1 Point:</strong> Moderate
          age-related risk.
        </li>
        <li>
          <strong>Sc (Sex Category - Female) - 1 Point:</strong> Female sex
          modifies the risk, though it is usually only considered a risk
          factor in the presence of at least one other non-sex risk factor.
        </li>
      </ul>

      <h3>Clinical Guidelines and Anticoagulation Decisions</h3>
      <p>
        The score provides a theoretical framework, but practical
        application is guided by major cardiological societies (e.g., ESC,
        AHA/ACC/HRS, and NICE). The general consensus for prescribing oral
        anticoagulants (like DOACs—Apixaban, Rivaroxaban, Dabigatran—or
        Warfarin) is as follows:
      </p>

      <ul>
        <li>
          <strong>Score of 0 in Men or 1 in Women:</strong> These patients
          are considered truly low risk. Anticoagulation is generally{" "}
          <strong>not recommended</strong>. Antiplatelet therapy (like
          aspirin) is also no longer recommended solely for stroke
          prevention in AF due to lack of efficacy and non-negligible
          bleeding risk.
        </li>
        <li>
          <strong>Score of 1 in Men or 2 in Women:</strong> These patients
          are considered intermediate risk. Anticoagulation{" "}
          <strong>should be considered</strong>, based on a shared
          decision-making process balancing stroke risk, bleeding risk, and
          patient preference.
        </li>
        <li>
          <strong>Score of &ge; 2 in Men or &ge; 3 in Women:</strong> These
          patients are at high risk. Oral anticoagulation is{" "}
          <strong>strongly recommended</strong> unless absolute
          contraindications exist.
        </li>
      </ul>

      <h3>Limitations and Clinical Caveats</h3>
      <p>
        While robust, the CHA₂DS₂-VASc score is not infallible:
      </p>
      <ol>
        <li>
          <strong>Non-Valvular AF Only:</strong> The score is validated for
          non-valvular AF. Patients with moderate-to-severe mitral stenosis
          or mechanical heart valves are automatically at extremely high
          risk for stroke and require lifelong anticoagulation with
          Warfarin, rendering the CHA₂DS₂-VASc score irrelevant.
        </li>
        <li>
          <strong>Bleeding Risk:</strong> The score only assesses stroke
          risk. It must always be used in conjunction with a bleeding risk
          assessment tool (such as the ORBIT or HAS-BLED scores) to ensure
          the net clinical benefit favors anticoagulation.
        </li>
        <li>
          <strong>Dynamic Risk:</strong> A patient's score can change (e.g.,
          crossing an age threshold, developing diabetes). Therefore, risk
          assessment should be an ongoing, dynamic process, reassessed
          annually.
        </li>
      </ol>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: Does the female sex criterion automatically mean women get
            anticoagulated sooner?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: No. Female sex acts as a risk modifier rather than an
            independent risk factor. A woman with a score of 1 (just for
            being female) is considered "low risk" and does not require
            anticoagulation. The threshold for strong recommendation is
            &ge;2 for men and &ge;3 for women.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Should I use Aspirin instead of an anticoagulant if the score
            is intermediate?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Current guidelines explicitly advise against using
            antiplatelet therapy (Aspirin or Clopidogrel) solely for stroke
            prevention in AF. Antiplatelets offer minimal stroke protection
            compared to anticoagulants, but carry a similar risk of major
            bleeding in the elderly.
          </p>
        </div>
      </div>
    </div>
  );
}
