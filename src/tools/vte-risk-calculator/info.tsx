export default function VteInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the Wells' Criteria for Deep Vein Thrombosis (DVT)</h2>

      <p>
        Deep Vein Thrombosis (DVT) is a potentially life-threatening
        condition characterized by the formation of a blood clot within a
        deep vein, most commonly in the lower extremities. If a portion of
        the clot breaks off, it can travel through the venous system to the
        lungs, causing a Pulmonary Embolism (PE), which carries a high
        mortality rate.
      </p>

      <p>
        Diagnosing DVT based solely on clinical examination is notoriously
        difficult because its classic symptoms (leg pain, swelling,
        erythema, and warmth) are non-specific and overlap with numerous
        other conditions like cellulitis, ruptured Baker's cyst, superficial
        thrombophlebitis, and muscle tears. The Wells' Criteria for DVT was
        developed by Dr. Philip Wells to provide a structured, objective,
        and validated method to estimate the pre-test probability of a
        patient having a DVT before proceeding to expensive or invasive
        diagnostic imaging.
      </p>

      <h3>Clinical Utility and The Diagnostic Algorithm</h3>
      <p>
        The primary goal of the Wells' Score is to stratify patients into
        risk categories to guide the diagnostic workup. The standard
        approach involves combining the Wells' Score with D-dimer testing:
      </p>

      <ul>
        <li>
          <strong>Low Pre-test Probability (Score &lt; 2):</strong> In these
          patients, the first step is usually a high-sensitivity D-dimer
          blood test. D-dimer is a fibrin degradation product present in the
          blood after a clot is degraded by fibrinolysis. It is highly
          sensitive but poorly specific. If the D-dimer is <em>negative</em>{" "}
          in a low-risk patient, a DVT is effectively ruled out without the
          need for an ultrasound.
        </li>
        <li>
          <strong>High Pre-test Probability (Score &ge; 2):</strong> In
          these patients, the likelihood of a DVT is significant enough that
          a negative D-dimer cannot safely rule it out. Therefore, these
          patients should bypass the D-dimer and proceed directly to a
          proximal compression ultrasonography (venous Doppler ultrasound)
          of the leg.
        </li>
      </ul>

      <h3>Variables Evaluated in the Wells' Criteria</h3>
      <p>
        The calculator assesses ten specific clinical variables. Nine of
        these are risk factors or physical signs that add 1 point each, and
        one is a clinical judgment criterion that subtracts 2 points:
      </p>
      <ol>
        <li>
          <strong>Active Cancer (1 Point):</strong> Treatment ongoing,
          within the previous 6 months, or palliative. Malignancy induces a
          hypercoagulable state.
        </li>
        <li>
          <strong>Paralysis, Paresis, or Recent Plaster Immobilization (1 Point):</strong>{" "}
          Immobility leads to profound venous stasis, a key component of
          Virchow's Triad.
        </li>
        <li>
          <strong>
            Recently Bedridden for &ge; 3 Days or Major Surgery Within 12
            Weeks (1 Point):
          </strong>{" "}
          Requiring general or regional anesthesia. Post-operative states
          combine stasis with endothelial injury and hypercoagulability.
        </li>
        <li>
          <strong>
            Localized Tenderness Along the Distribution of the Deep Venous
            System (1 Point):
          </strong>{" "}
          Such as tenderness in the popliteal fossa or along the femoral
          vein, which is more specific than generalized calf pain.
        </li>
        <li>
          <strong>Entire Leg Swollen (1 Point):</strong> Indicative of a
          significant proximal blockage in the venous system (e.g.,
          iliofemoral DVT).
        </li>
        <li>
          <strong>
            Calf Swelling &ge; 3 cm Larger Than Asymptomatic Side (1 Point):
          </strong>{" "}
          Measured 10 cm below the tibial tuberosity. Objective evidence of
          unilateral edema.
        </li>
        <li>
          <strong>
            Pitting Edema Confined to the Symptomatic Leg (1 Point):
          </strong>{" "}
          Must be distinctly worse than in the asymptomatic leg.
        </li>
        <li>
          <strong>Collateral Superficial Veins (Non-Varicose) (1 Point):</strong>{" "}
          When deep veins are blocked, blood is shunted to superficial
          veins, causing them to engorge.
        </li>
        <li>
          <strong>Previously Documented DVT (1 Point):</strong> A history of
          DVT indicates a propensity for thrombosis, whether due to anatomic
          factors or underlying thrombophilia.
        </li>
        <li>
          <strong>Alternative Diagnosis at Least as Likely as DVT (-2 Points):</strong>{" "}
          This is the crucial clinical judgment step. If the clinician
          strongly suspects cellulitis, muscle strain, or heart failure
          exacerbation based on the history and exam, points are subtracted,
          appropriately lowering the pre-test probability of DVT.
        </li>
      </ol>

      <h3>Two-Tier vs. Three-Tier Scoring Models</h3>
      <p>
        Historically, the Wells' Score used a three-tier model (Low,
        Moderate, and High Risk). However, contemporary clinical practice,
        including guidelines from the American College of Physicians (ACP)
        and the American Academy of Family Physicians (AAFP), heavily favors
        the simplified <strong>Two-Tier model</strong> for ease of use and
        clearer integration with D-dimer testing:
      </p>
      <ul>
        <li>
          <strong>DVT Unlikely:</strong> Score 0 or 1. (Proceed to D-dimer).
        </li>
        <li>
          <strong>DVT Likely:</strong> Score 2 or more. (Proceed to
          Ultrasound).
        </li>
      </ul>

      <h3>Limitations and Caveats</h3>
      <p>
        While an indispensable tool, the Wells' criteria must be used
        appropriately:
      </p>
      <ul>
        <li>
          <strong>Not for Upper Extremity DVT:</strong> The criteria were
          validated exclusively for lower extremity DVT. Upper extremity
          DVTs (often associated with central venous catheters or effort
          thrombosis) require a different clinical approach.
        </li>
        <li>
          <strong>Pregnancy:</strong> The standard Wells' criteria and
          D-dimer thresholds are not validated for use in pregnant patients,
          as D-dimer naturally elevates during pregnancy and the anatomical
          risk factors differ. The LEFt rule is often used instead.
        </li>
        <li>
          <strong>Subjectivity:</strong> The criterion "Alternative
          diagnosis at least as likely" introduces a significant element of
          subjective clinical judgment, meaning less experienced clinicians
          might calculate different scores for the same patient.
        </li>
      </ul>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: If the Wells' score is high, do I still need a D-dimer?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Generally, no. A negative D-dimer in a "DVT Likely" patient is
            not reassuring enough to safely discharge them without imaging.
            You should proceed directly to a venous ultrasound.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: What is Virchow's Triad?</strong>
          <p className="mt-1 text-ink-muted">
            A: It is the fundamental pathophysiological framework for venous
            thrombosis, comprising three broad categories: venous stasis
            (immobility), endothelial injury (surgery, trauma), and
            hypercoagulability (cancer, genetics, oral contraceptives). The
            Wells' criteria effectively look for clinical evidence of these
            three categories.
          </p>
        </div>
      </div>
    </div>
  );
}
