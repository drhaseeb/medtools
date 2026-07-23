import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function IbwInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>Why Weight-Based Dosing Needs More Than a Bathroom Scale</h2>
        <p>
          Total body weight (TBW) — the number on the scale — seems like the
          obvious basis for weight-based drug dosing, but it can be
          seriously misleading, particularly as global rates of obesity
          rise. The body is made up of distinct compartments — lean mass
          (muscle, organs, bone) and adipose (fat) tissue — and drugs
          distribute into those compartments very differently depending on
          their chemical properties. Ideal Body Weight (IBW), Adjusted Body
          Weight (ABW), and Lean Body Weight (LBW) were all developed to
          give clinicians a more pharmacokinetically accurate weight to
          dose from than TBW alone.
        </p>

        <h2>Hydrophilic vs Lipophilic Drugs — Why It Matters</h2>
        <p>
          Water-soluble (hydrophilic) drugs — most antibiotics, for example
          — distribute mainly into lean tissue and extracellular fluid.
          Adipose tissue contains relatively little water, so excess fat
          mass adds comparatively little extra volume for these drugs to
          spread into. Dosing a hydrophilic drug by TBW in an obese patient
          can therefore produce dangerously high levels relative to their
          actual volume of distribution. Fat-soluble (lipophilic) drugs —
          many anaesthetic and sedative agents — behave the opposite way,
          readily distributing into adipose tissue; dosing these purely by
          IBW in an obese patient can under-dose them, since a meaningful
          fraction of the drug is sequestered in fat that IBW ignores
          entirely. Choosing the right weight for the right drug is the
          entire point of this calculator.
        </p>

        <h2>The Devine Formula for Ideal Body Weight</h2>
        <p>
          The most widely used IBW formula was devised by Dr. B.J. Devine
          in 1974, originally as an internal aid for calculating digoxin
          and aminoglycoside doses, and subsequently became the de facto
          clinical standard through its adoption in pharmacokinetic
          literature and drug-dosing references rather than through formal
          prospective validation:
        </p>
        <ul>
          <li><strong>Male:</strong> IBW = 50 kg + 2.3 kg for every inch over 5 feet</li>
          <li><strong>Female:</strong> IBW = 45.5 kg + 2.3 kg for every inch over 5 feet</li>
        </ul>
        <p>
          The lower baseline for females reflects average differences in
          bone density and lean muscle mass at a given height. For patients
          under 5 feet tall, the formula has no defined correction term —
          this calculator, consistent with common clinical practice, holds
          IBW at the base value (50 kg male / 45.5 kg female) rather than
          extrapolating the per-inch adjustment below that height, and
          flags this explicitly since the formula's accuracy is reduced in
          this range.
        </p>

        <h2>Adjusted Body Weight for Obese Patients</h2>
        <p>
          When a patient's actual body weight substantially exceeds their
          IBW, dosing certain hydrophilic drugs by IBW alone can
          under-treat them, because obese patients do carry some genuinely
          increased lean mass and expanded extracellular fluid volume
          compared to a non-obese person of the same height — just not as
          much extra volume as their raw excess weight would suggest.
          Adjusted Body Weight splits the difference:
        </p>
        <p>ABW = IBW + 0.4 × (Actual Body Weight − IBW)</p>
        <p>
          The trigger point for switching from IBW to ABW is cited
          inconsistently across institutions and drug classes — commonly
          somewhere between actual weight 120% and 130% of IBW. This
          calculator uses 120% as a conservative, widely-cited threshold
          (used, for example, in many aminoglycoside dosing protocols), but
          always confirm the exact threshold against your local
          antimicrobial or pharmacy dosing guideline, since it is not
          universally standardized.
        </p>

        <h2>Lean Body Weight (Janmahasatian Equation)</h2>
        <p>
          A separate, more recent approach — Lean Body Weight (LBW) —
          estimates the mass of non-fat tissue directly rather than
          approximating it from height and sex alone. This calculator uses
          the Janmahasatian equation (2005), derived from dual-energy X-ray
          absorptiometry (DEXA) reference data and validated across a wide
          BMI range including severe obesity, unlike some older LBW formulas
          that become unreliable at high BMI:
        </p>
        <ul>
          <li><strong>Male:</strong> LBW = (9270 × TBW) / (6680 + 216 × BMI)</li>
          <li><strong>Female:</strong> LBW = (9270 × TBW) / (8780 + 244 × BMI)</li>
        </ul>
        <p>
          LBW is increasingly favored for dosing certain agents — notably
          propofol maintenance infusions and some chemotherapy protocols —
          where dosing by a body-composition estimate that accounts for
          actual measured weight and BMI is considered more physiologically
          accurate than the height-and-sex-only Devine formula, especially
          in patients with obesity.
        </p>

        <h2>Which Weight to Use — A Practical Guide</h2>
        <ul>
          <li>
            <strong>IBW:</strong> the default for most standard weight-based
            dosing in a non-obese patient, and the standard weight used to
            calculate protective lung-ventilation tidal volumes.
          </li>
          <li>
            <strong>ABW:</strong> used for selected hydrophilic drugs with a
            narrow therapeutic index in obese patients — classically
            aminoglycosides, and sometimes vancomycin loading — per local
            protocol.
          </li>
          <li>
            <strong>LBW:</strong> increasingly used for propofol maintenance
            dosing and in some oncology dosing protocols, particularly in
            patients with obesity where IBW alone may under-dose and TBW
            may over-dose.
          </li>
          <li>
            <strong>TBW:</strong> still appropriate for many drugs,
            including most induction doses (e.g. propofol induction) and
            drugs with a wide therapeutic index where precise
            body-composition dosing offers little safety benefit.
          </li>
        </ul>
        <p>
          Always confirm the recommended dosing weight against the specific
          drug's product information or your institution's pharmacy
          reference — this varies by drug, and the guidance above is a
          general pattern, not a universal rule.
        </p>

        <h2>Worked Example</h2>
        <p>
          A male patient is 178 cm tall (70.1 inches) and weighs 110 kg.
          His IBW = 50 + 2.3 × (70.1 − 60) = 50 + 23.2 ≈{" "}
          <strong>73.2 kg</strong>. Since his actual weight of 110 kg is
          well above 120% of that (87.8 kg), his Adjusted Body Weight = 73.2
          + 0.4 × (110 − 73.2) ≈ <strong>87.9 kg</strong> — the weight that
          would typically be used for an aminoglycoside dose, rather than
          either his full 110 kg or his 73.2 kg IBW alone.
        </p>

        <h2>Key Clinical Application: Lung-Protective Ventilation</h2>
        <p>
          One of the most safety-critical uses of IBW is calculating tidal
          volumes for mechanically ventilated patients, particularly those
          with acute respiratory distress syndrome (ARDS). Lung size is
          determined by height and sex, not by total body weight — an
          obese patient does not have proportionally larger lungs than a
          lean patient of the same height. Ventilating by TBW in an obese
          patient can deliver dangerously excessive tidal volumes relative
          to actual lung capacity, causing volutrauma and barotrauma.
          Lung-protective ventilation strategies (typically 4–8 mL/kg)
          are calculated using IBW specifically for this reason.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Amputation and limb loss:</strong> the Devine formula
            assumes standard body proportions; IBW should be adjusted
            downward to account for missing limb mass in amputee patients.
          </li>
          <li>
            <strong>Not a health or nutritional target:</strong> IBW is a
            pharmacokinetic dosing tool, not a healthy-weight goal — it
            should not be used in nutritional counselling or as an
            aesthetic benchmark.
          </li>
          <li>
            <strong>Paediatric patients:</strong> the Devine formula is
            validated in adults only; children are dosed using
            paediatric-specific weight-based or body-surface-area methods.
          </li>
          <li>
            <strong>Drug-specific thresholds vary:</strong> as noted above,
            the exact percentage-of-IBW trigger for switching to ABW is not
            universally standardized — always check local or
            manufacturer guidance for a specific drug.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "When should Adjusted Body Weight be used instead of Ideal Body Weight?",
            a: "ABW is typically considered when actual body weight exceeds roughly 120-130% of IBW (the exact threshold varies by institution and drug), specifically for hydrophilic drugs with a narrow therapeutic index, such as aminoglycosides.",
          },
          {
            q: "Why are the male and female IBW formulas different?",
            a: "The formulas reflect average population differences in lean muscle mass and bone density between men and women at the same height, giving men a higher baseline weight (50 kg vs 45.5 kg) before the per-inch height adjustment is added.",
          },
          {
            q: "Is IBW the same as a 'healthy weight'?",
            a: "No. IBW is a pharmacokinetic dosing tool designed to estimate lean body mass for medication calculations, not a target or recommendation for healthy body weight, which depends on many other individual health factors.",
          },
          {
            q: "Does IBW apply to children?",
            a: "No. The Devine formula was derived and is validated in adults only. Paediatric dosing uses dedicated paediatric weight-based or body-surface-area methods, not the adult IBW/ABW formulas.",
          },
        ]}
      />

      <RelatedTools slugs={["egfr-calculator", "warfarin-dosing-calculator", "meld-calculator"]} />

      <References
        items={[
          {
            text: "Devine BJ. Gentamicin therapy. Drug Intell Clin Pharm. 1974;8:650-655.",
          },
          {
            text: "Janmahasatian S, Duffull SB, Ash S, Ward LC, Byrne NM, Green B. Quantification of lean bodyweight. Clin Pharmacokinet. 2005;44(10):1051-1065.",
          },
          {
            text: "ARDS Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med. 2000;342(18):1301-1308.",
          },
        ]}
      />
    </>
  );
}
