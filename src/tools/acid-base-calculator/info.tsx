export default function AcidBaseInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Understanding Acid-Base Analysis and the Anion Gap</h2>

      <p>
        The maintenance of normal blood pH (7.35–7.45) is a fundamental
        physiological priority. The body employs complex, interwoven
        buffering systems—primarily the bicarbonate buffer system,
        respiratory regulation via the lungs, and metabolic regulation via
        the kidneys—to tightly control hydrogen ion concentration. When
        disease states overwhelm these mechanisms, acid-base derangements
        occur. Analyzing an Arterial Blood Gas (ABG) along with the serum
        electrolyte profile is a critical skill for identifying the
        underlying pathology and directing life-saving therapy.
      </p>

      <h3>The Four Primary Acid-Base Disorders</h3>
      <p>
        Acid-base disorders are classified based on the primary
        pathophysiological driver (respiratory vs. metabolic) and the
        direction of the pH shift (acidosis vs. alkalosis):
      </p>
      <ul>
        <li>
          <strong>Metabolic Acidosis:</strong> Characterized by a primary
          decrease in serum bicarbonate (HCO3-) leading to a drop in pH. It
          is broadly categorized into Anion Gap (AG) and Non-Anion Gap (NAG)
          metabolic acidosis, depending on whether unmeasured anions are
          driving the process.
        </li>
        <li>
          <strong>Metabolic Alkalosis:</strong> Characterized by a primary
          increase in serum bicarbonate (HCO3-) and an elevated pH. It is
          often caused by volume depletion (contraction alkalosis), gastric
          acid loss (severe vomiting), or diuretic use.
        </li>
        <li>
          <strong>Respiratory Acidosis:</strong> Caused by hypoventilation
          leading to an accumulation of carbon dioxide (PaCO2) and a drop in
          pH. Common causes include COPD exacerbations, opiate overdose, or
          neuromuscular diseases.
        </li>
        <li>
          <strong>Respiratory Alkalosis:</strong> Caused by hyperventilation
          leading to excessive blowing off of carbon dioxide (PaCO2) and a
          rise in pH. It can be triggered by anxiety, pain, hypoxia, or early
          salicylate toxicity.
        </li>
      </ul>

      <h3>The Anion Gap: Diagnosing Metabolic Acidosis</h3>
      <p>
        When a metabolic acidosis is identified, calculating the Anion Gap is
        the mandatory next step. The principle of electroneutrality dictates
        that the total number of positive charges (cations) in the blood
        must equal the total number of negative charges (anions).
      </p>

      <p>
        Routinely, we only measure the major cation (Sodium, Na+) and the
        major anions (Chloride, Cl-, and Bicarbonate, HCO3-). Because we do
        not measure all the negative ions in the blood (such as albumin,
        phosphates, sulfates, and organic acids), the measured sodium is
        always higher than the sum of measured chloride and bicarbonate.
        This "gap" represents the unmeasured anions.
      </p>

      <p>
        <strong>Formula:</strong> Anion Gap = Na+ - (Cl- + HCO3-)
      </p>
      <p>
        <em>Normal Range:</em> Typically 8 to 12 mEq/L.
      </p>

      <p>
        <strong>High Anion Gap Metabolic Acidosis (HAGMA):</strong> This
        occurs when an exogenous or endogenous acid is added to the blood.
        The acid dissociates, consuming bicarbonate (lowering HCO3-) while
        leaving behind an unmeasured anion, thus increasing the gap. Common
        causes are remembered by the mnemonic MUDPILES: Methanol, Uremia,
        Diabetic Ketoacidosis, Propylene Glycol, Isoniazid/Infection, Lactic
        Acidosis, Ethylene Glycol, and Salicylates.
      </p>

      <p>
        <strong>Normal Anion Gap Metabolic Acidosis (NAGMA):</strong> Also
        known as hyperchloremic metabolic acidosis. This occurs when
        bicarbonate is lost from the body (e.g., via severe diarrhea or
        renal tubular acidosis), and the kidneys retain chloride to maintain
        electroneutrality. Because chloride is a measured anion, the gap
        remains normal.
      </p>

      <h3>Secondary Compensation and Mixed Disorders</h3>
      <p>
        The body never fully compensates to a completely normal pH, but it
        attempts to mitigate the primary disorder. For example, if a patient
        has a severe metabolic acidosis (low bicarbonate), the brainstem will
        trigger hyperventilation (Kussmaul respirations) to blow off PaCO2,
        creating a secondary respiratory alkalosis to buffer the pH.
      </p>
      <p>
        Calculating expected compensation (such as Winter's Formula for
        metabolic acidosis) is vital. If the measured PaCO2 does not match
        the expected PaCO2, it indicates the presence of a second,
        independent acid-base disorder (a "mixed" disorder), revealing a
        more complex clinical picture.
      </p>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">Q: Why do I need to correct the Anion Gap for albumin?</strong>
          <p className="mt-1 text-ink-muted">
            A: Albumin is a major unmeasured anion in the blood. If a patient
            is severely malnourished or critically ill and has low albumin
            (hypoalbuminemia), their baseline anion gap will be lower.
            Failing to correct for low albumin can cause a clinician to miss
            a High Anion Gap Metabolic Acidosis. A common rule is to add 2.5
            to the calculated Anion Gap for every 1 g/dL that the serum
            albumin is below 4.0 g/dL.
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: Can a patient have a normal pH but still have an acid-base disorder?</strong>
          <p className="mt-1 text-ink-muted">
            A: Yes. A completely normal pH in the setting of abnormal PaCO2
            and Bicarbonate usually signifies a mixed acid-base disorder
            where an acidosis and an alkalosis are occurring simultaneously
            and "canceling" each other out on the pH scale. For example, a
            patient with severe vomiting (metabolic alkalosis) and diabetic
            ketoacidosis (metabolic acidosis).
          </p>
        </div>
        <div>
          <strong className="text-ink">Q: When is Winter's Formula used?</strong>
          <p className="mt-1 text-ink-muted">
            A: Winter's Formula (Expected PaCO2 = [1.5 × HCO3-] + 8 ± 2) is
            used exclusively when the primary disorder is Metabolic
            Acidosis, to determine if the respiratory compensation is
            appropriate or if a concurrent respiratory disorder exists.
          </p>
        </div>
      </div>
    </div>
  );
}
