import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function AcidBaseInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is Acid-Base Analysis?</h2>
        <p>
          Every cell in the human body depends on enzymes that function
          correctly only within a very narrow range of hydrogen ion
          concentration. Arterial blood pH is normally held between 7.35 and
          7.45 — a range that corresponds to a hydrogen ion concentration of
          roughly 35 to 45 nanomoles per litre. Move outside that window by
          even a small amount and protein structure, enzyme kinetics,
          membrane excitability, and oxygen delivery all begin to fail.
          Acid-base analysis is the discipline of working out, from a blood
          gas and a set of electrolytes, exactly which physiological system —
          respiratory or metabolic — has pushed the pH away from normal, and
          whether the body's own compensatory mechanisms are keeping pace.
        </p>
        <p>
          Three systems defend pH under normal conditions: chemical buffers
          (principally the bicarbonate-carbonic acid pair, but also
          haemoglobin, phosphate, and plasma proteins) that act within
          seconds; the lungs, which adjust the rate and depth of ventilation
          to raise or lower carbon dioxide within minutes; and the kidneys,
          which reabsorb or excrete bicarbonate and generate new bicarbonate
          via ammoniagenesis over hours to days. A calculator like this one
          exists because interpreting the interplay of these three systems
          from a single set of numbers is a genuinely difficult, multi-step
          task, and skipping a step is the single most common source of
          missed diagnoses on the ward.
        </p>

        <h2>A Short History: From Henderson to the Bedside Blood Gas</h2>
        <p>
          The mathematical description of buffering dates to Lawrence
          Henderson's 1908 work relating the concentrations of a weak acid
          and its conjugate base to hydrogen ion concentration. In 1916,
          Danish chemist Karl Albert Hasselbalch reformulated Henderson's
          relationship in logarithmic form, giving rise to the
          Henderson-Hasselbalch equation that still underlies every blood gas
          analyser's calculation of pH from measured PaCO₂ and bicarbonate.
          For the first half of the twentieth century, though, this remained
          largely a laboratory curiosity — there was no practical way to
          measure a patient's blood gases at the bedside.
        </p>
        <p>
          That changed after the 1952-53 Copenhagen polio epidemic, during
          which physicians including Bjørn Ibsen and Poul Astrup had to
          manage hundreds of patients with respiratory failure using manual
          positive-pressure ventilation. The clinical urgency of knowing, in
          real time, whether a ventilated patient was being over- or
          under-ventilated drove rapid development of practical blood gas
          electrodes through the 1950s and 1960s. Two rival interpretive
          traditions emerged from this era — the "Boston approach," built
          around empirically derived expected-compensation formulas, and the
          "Copenhagen approach" of Astrup and Ole Siggaard-Andersen, which
          used base excess and a standardised in-vitro titration curve. Most
          calculators used in North America and the UK today, including this
          one, follow the Boston approach because its compensation formulas
          are simple enough to apply at the bedside without a nomogram.
        </p>

        <h2>How to Read an Arterial Blood Gas: A Systematic Approach</h2>
        <p>
          Clinicians are taught to interpret an ABG in a fixed sequence
          precisely because skipping a step reliably leads to missed mixed
          disorders. This calculator automates the same sequence:
        </p>
        <ul>
          <li>
            <strong>Step 1 — Assess the pH.</strong> Is it acidaemic (&lt;7.35),
            alkalaemic (&gt;7.45), or normal? This tells you the net direction
            of the derangement, but not yet the cause.
          </li>
          <li>
            <strong>Step 2 — Assess PaCO₂ and HCO₃⁻ independently.</strong>{" "}
            Determine whether each is high, low, or normal. The one that
            moves in the <em>same direction</em> as the pH abnormality is
            usually the primary process; the other is usually compensatory.
          </li>
          <li>
            <strong>Step 3 — Check whether compensation is appropriate.</strong>{" "}
            Apply the relevant expected-compensation formula (Winter's
            formula, or one of the Boston rules) to the primary disorder. If
            the actual value falls outside the expected range, a second,
            independent acid-base process is present.
          </li>
          <li>
            <strong>Step 4 — Calculate the anion gap</strong> whenever a
            metabolic acidosis is present, correcting for albumin if it is
            available.
          </li>
          <li>
            <strong>Step 5 — If the anion gap is elevated, calculate the
            delta ratio</strong> to look for a coexisting normal-gap process
            or metabolic alkalosis hiding behind the elevated gap.
          </li>
          <li>
            <strong>Step 6 — Assess oxygenation</strong> separately, using
            PaO₂ and the A-a gradient, since a patient can have a perfectly
            "balanced" acid-base picture and still be profoundly hypoxaemic.
          </li>
        </ul>

        <h2>The Four Primary Acid-Base Disorders</h2>
        <p>
          Every acid-base disturbance is built from combinations of four
          primary processes, classified by which system is at fault
          (respiratory vs. metabolic) and which direction the pH is pushed:
        </p>
        <ul>
          <li>
            <strong>Metabolic acidosis</strong> — a primary fall in HCO₃⁻,
            caused either by the addition of a fixed acid (which consumes
            bicarbonate and generates an unmeasured anion, raising the anion
            gap) or by direct loss of bicarbonate (which does not raise the
            anion gap, since chloride rises to take its place).
          </li>
          <li>
            <strong>Metabolic alkalosis</strong> — a primary rise in HCO₃⁻,
            most often from loss of hydrogen ions (prolonged vomiting or
            nasogastric drainage), loss of chloride-rich fluid with volume
            contraction, or diuretic therapy.
          </li>
          <li>
            <strong>Respiratory acidosis</strong> — a primary rise in PaCO₂
            from alveolar hypoventilation, seen in COPD exacerbations, opioid
            or sedative overdose, neuromuscular weakness, and severe chest
            wall or airway disease.
          </li>
          <li>
            <strong>Respiratory alkalosis</strong> — a primary fall in PaCO₂
            from alveolar hyperventilation, driven by anxiety and pain,
            hypoxaemia (a powerful respiratory drive stimulus), pulmonary
            embolism, sepsis, or early salicylate toxicity, which directly
            stimulates the medullary respiratory centre.
          </li>
        </ul>
        <p>
          Any single patient can have one, two, or even three of these
          processes running simultaneously — which is exactly why a
          disciplined, stepwise approach (rather than reading the pH and
          stopping) is essential.
        </p>

        <h2>Worked Example: Putting the Steps Together</h2>
        <p>
          A 58-year-old man with type 1 diabetes presents obtunded, with deep,
          sighing respirations. His arterial blood gas shows pH 7.12, PaCO₂ 18
          mmHg, HCO₃⁻ 7 mEq/L. His electrolytes show Na⁺ 132 mEq/L, Cl⁻ 92
          mEq/L, albumin 3.2 g/dL.
        </p>
        <p>
          <strong>Step 1:</strong> pH 7.12 → acidaemia. <strong>Step 2:</strong>{" "}
          HCO₃⁻ is markedly low (7), moving in the same direction as the pH —
          this is the primary process, a metabolic acidosis. PaCO₂ is also
          low (18), which is the expected compensatory direction (blowing off
          CO₂ to raise pH back toward normal). <strong>Step 3:</strong>{" "}
          Winter's formula predicts an expected PaCO₂ of 1.5 × 7 + 8 = 18.5 ±
          2 mmHg. The measured PaCO₂ of 18 falls squarely within this range,
          confirming appropriate respiratory compensation with no second
          respiratory process. <strong>Step 4:</strong> Anion gap = 132 − (92
          + 7) = 33 mEq/L, markedly elevated (uncorrected normal ≤12);
          correcting for the albumin of 3.2 g/dL adds only 2.5 × (4.0 − 3.2) =
          2 mEq/L, so the gap remains massively elevated at 35 mEq/L.{" "}
          <strong>Step 5:</strong> Delta ratio = (35 − 12) / (24 − 7) = 23 /
          17 = 1.35 — consistent with an uncomplicated high anion gap
          metabolic acidosis and no important second metabolic process. This
          clinical and biochemical picture — an obtunded diabetic patient with
          Kussmaul breathing and a large, uncomplicated high anion gap
          metabolic acidosis — is classic for diabetic ketoacidosis, and the
          calculator's structured breakdown arrives at that conclusion in the
          same six steps a clinician would use at the bedside.
        </p>

        <h2>The Anion Gap: Unmasking Hidden Acids</h2>
        <p>
          Blood is electrically neutral: the sum of all positive charges
          (cations) must exactly equal the sum of all negative charges
          (anions). Routine chemistry panels, however, measure only the
          dominant cation (sodium) and the two dominant measured anions
          (chloride and bicarbonate) — they do not measure albumin,
          phosphate, sulfate, lactate, ketoacids, or the many other
          negatively charged species normally present in plasma. Subtracting
          the measured anions from the measured cation therefore leaves a
          "gap" — <strong>Anion Gap = Na⁺ − (Cl⁻ + HCO₃⁻)</strong> — that
          represents these unmeasured anions, of which albumin is normally
          the largest contributor.
        </p>
        <p>
          A gap that is higher than expected means an unmeasured acid anion
          has been added to the blood — a{" "}
          <strong>high anion gap metabolic acidosis (HAGMA)</strong>, whose
          causes are commonly recalled with the mnemonic{" "}
          <strong>MUDPILES</strong>: Methanol, Uraemia, Diabetic ketoacidosis,
          Propylene glycol/Paracetamol, Isoniazid/Iron, Lactic acidosis,
          Ethylene glycol, and Salicylates. A gap that stays normal despite a
          falling bicarbonate means the lost bicarbonate has been replaced,
          charge-for-charge, by chloride — a{" "}
          <strong>normal (or "non-") anion gap metabolic acidosis (NAGMA)</strong>,
          recalled with <strong>HARDUP</strong>: Hyperalimentation,
          Acetazolamide, Renal tubular acidosis, Diarrhoea, Ureteral
          diversion, and Pancreatic fistula.
        </p>
        <p>
          What counts as a "normal" gap is not a single universal number —
          it depends on the laboratory's analyser. The classic teaching value
          of 12 ± 4 mEq/L (a range of roughly 8–16) comes from older flame
          photometry and colorimetric chloride assays. Since the 1980s, most
          hospital laboratories have moved to ion-selective electrodes, which
          typically read several mEq/L lower, giving a "normal" range closer
          to 3–11 mEq/L on many modern analysers. This calculator uses the
          widely taught cut-off of 12 mEq/L as a reasonable default, but
          always cross-check the result against your own laboratory's stated
          reference interval before drawing a conclusion from a borderline
          value.
        </p>

        <h2>Correcting the Anion Gap for Albumin</h2>
        <p>
          Because albumin is the largest normally unmeasured anion, its
          concentration has an outsized effect on the calculated gap.
          Critically ill patients are very frequently hypoalbuminaemic, and a
          falling albumin lowers the anion gap independently of any change in
          acid-base status — which means a clinically important HAGMA can be
          completely masked by a low albumin, appearing as a deceptively
          "normal" gap. Figge and colleagues quantified this relationship in
          1998, showing that each 1 g/dL fall in albumin lowers the
          measured gap by roughly 2.5 mEq/L. The correction is applied as:
        </p>
        <p>
          <strong>Corrected Anion Gap = Measured Anion Gap + 2.5 × (4.0 − Albumin in g/dL)</strong>
        </p>
        <p>
          Applying this correction routinely in critically ill or
          malnourished patients — rather than only when the uncorrected gap
          looks borderline — is the single most effective way to avoid
          missing a high anion gap process in this population.
        </p>

        <h2>Assessing Compensation: Winter's Formula and the Boston Rules</h2>
        <p>
          Physiological compensation is never perfect and never overshoots —
          the body defends pH, but it does not fully normalise it. Comparing
          the measured value of the "other" system against its statistically
          expected value is what reveals whether a second, independent
          disorder is hiding underneath the primary one. The best known of
          these is <strong>Winter's formula</strong>, derived by Albert,
          Dell, and Winters in 1967 from patients with pure metabolic
          acidosis: expected PaCO₂ = (1.5 × HCO₃⁻) + 8, ± 2 mmHg. If the
          measured PaCO₂ is higher than this range, a concurrent respiratory
          acidosis is present (the patient is not blowing off enough CO₂); if
          it is lower, a concurrent respiratory alkalosis is present.
        </p>
        <p>
          Analogous rules exist for the other three primary disorders. For
          metabolic alkalosis, this calculator uses the commonly cited
          relationship "PaCO₂ rises by roughly 0.7 mmHg for every 1 mEq/L
          rise in HCO₃⁻ above 24, with a ceiling around 55 mmHg" — note that
          several textbooks (Brandis, Hamm, Emmet) each publish a slightly
          different linear regression for this specific rule, which is why
          the calculator applies a wide ±5 mmHg tolerance band and this
          should be treated as a rough guide rather than an exact prediction.
          For acute respiratory acidosis, HCO₃⁻ is expected to rise by about 1
          mEq/L for every 10 mmHg rise in PaCO₂; for chronic respiratory
          acidosis (allowing days for full renal compensation), by 3–4 mEq/L
          per 10 mmHg. For acute respiratory alkalosis, HCO₃⁻ is expected to
          fall by about 2 mEq/L per 10 mmHg fall in PaCO₂; for chronic
          respiratory alkalosis, by about 5 mEq/L per 10 mmHg.
        </p>

        <h2>The Delta Ratio: Detecting a Second, Hidden Disorder</h2>
        <p>
          When the anion gap is elevated, a second question follows: has the
          bicarbonate fallen by exactly the amount the added acid would
          predict, or has something else moved it further? The{" "}
          <strong>delta ratio</strong> (sometimes called delta-delta),
          formalised by Wrenn in 1990, compares the rise in the anion gap to
          the fall in bicarbonate:
        </p>
        <p>
          <strong>Delta Ratio = (Measured AG − 12) ÷ (24 − Measured HCO₃⁻)</strong>
        </p>
        <ul>
          <li><strong>&lt;0.4:</strong> the fall in bicarbonate is much larger than the rise in the gap — a hyperchloraemic (normal gap) pattern predominates, or a mixed HAGMA/NAGMA is present.</li>
          <li><strong>0.4–0.8:</strong> a combined high-gap and normal-gap metabolic acidosis, often seen when diarrhoea or renal failure coexists with a ketoacidosis or lactic acidosis.</li>
          <li><strong>~1–2:</strong> the classic pattern of an uncomplicated high anion gap metabolic acidosis, with bicarbonate falling in step with the rising gap.</li>
          <li><strong>&gt;2:</strong> the gap has risen more than the bicarbonate has fallen — implying the patient started with a higher-than-normal bicarbonate, i.e. a co-existing metabolic alkalosis or a pre-existing compensated chronic respiratory acidosis.</li>
        </ul>
        <p>
          Like the compensation formulas above, the delta ratio is a
          population-derived approximation with genuinely fuzzy boundaries
          around 0.8–1.0 — it is a strong pointer toward a second process,
          not a definitive diagnostic test on its own.
        </p>

        <h2>Oxygenation: The Alveolar-Arterial (A-a) Gradient</h2>
        <p>
          Acid-base status and oxygenation are related but distinct — a
          patient can have a completely normal pH, PaCO₂, and HCO₃⁻ while
          being severely hypoxaemic. The A-a gradient asks whether a low
          PaO₂ is explained purely by hypoventilation (in which case the
          gradient stays normal) or whether an intrinsic lung problem — a
          ventilation-perfusion mismatch, diffusion impairment, or shunt — is
          also present (in which case the gradient widens). It is calculated
          from the simplified alveolar gas equation on room air at sea
          level: <strong>A-a gradient = 150 − (PaCO₂ ÷ 0.8) − PaO₂</strong>.
        </p>
        <p>
          Critically, the "normal" A-a gradient is not a single fixed number
          — it widens with age, by roughly (age ÷ 4) + 4 mmHg, reflecting the
          gradual loss of elastic lung recoil and increasing
          ventilation-perfusion mismatch that comes with normal ageing. A
          gradient of 20 mmHg is unambiguously abnormal in a 20-year-old but
          may be entirely within normal limits for an 80-year-old. This
          calculator applies the age-adjusted formula whenever an age is
          supplied, and falls back to a young-adult default only when it is
          not — always enter age when it is known.
        </p>

        <h2>Clinical Applications Across Specialties</h2>
        <p>
          Structured acid-base interpretation is used everywhere a patient's
          physiology can be pushed to its limits. In the emergency
          department, it is central to unpicking diabetic ketoacidosis,
          salicylate overdose, toxic alcohol ingestion, and severe sepsis. In
          intensive care, ventilated patients require repeated ABG
          interpretation to titrate ventilator settings and detect evolving
          renal or hepatic failure. In nephrology, chronic kidney disease
          produces a slowly progressive normal-gap-then-high-gap metabolic
          acidosis that tracks disease stage. In respiratory medicine, acute
          exacerbations of COPD are staged partly by the degree of
          respiratory acidosis and whether renal compensation has had time to
          occur. In perioperative medicine, unexplained metabolic acidosis
          after major surgery is one of the earliest laboratory clues to
          mesenteric ischaemia or compartment syndrome, often preceding
          clinical deterioration by hours.
        </p>

        <h2>Limitations and Pitfalls</h2>
        <p>
          This calculator, like any structured tool, has boundaries that
          matter clinically:
        </p>
        <ul>
          <li>
            <strong>Venous vs. arterial samples:</strong> the reference
            ranges and formulas used here assume an arterial sample. Venous
            blood gases run systematically higher in PaCO₂ and lower in pH,
            and while venous pH and HCO₃⁻ can be used for rapid screening,
            precise compensation calculations require an arterial sample.
          </li>
          <li>
            <strong>Compensation formulas are population averages, not individual guarantees:</strong>{" "}
            they were derived from group data with real scatter (hence the ±
            tolerance bands) and can be misleading in an individual patient
            with unusual physiology.
          </li>
          <li>
            <strong>Time course matters:</strong> full renal compensation for
            a respiratory disorder takes 3–5 days: a patient just hours into
            an acute COPD exacerbation should be assessed against the
            "acute" formula, not the "chronic" one, even if their history of
            COPD is long-standing.
          </li>
          <li>
            <strong>The anion gap does not diagnose a specific cause:</strong>{" "}
            it narrows the differential to a handful of possibilities (see
            MUDPILES/HARDUP above) but lactate, ketones, toxicology screening,
            and renal function tests are needed to identify the actual
            culprit.
          </li>
          <li>
            <strong>Severe hypoalbuminaemia or paraproteinaemia</strong> (as
            in multiple myeloma) can distort the anion gap in ways the simple
            albumin correction does not fully capture, and results should be
            interpreted cautiously in these populations.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Why do I need to correct the anion gap for albumin?",
            a: "Albumin is the largest normally unmeasured anion in plasma, so a low albumin lowers the calculated gap independently of any acid-base disorder. In a hypoalbuminaemic, critically ill patient, this can completely mask a clinically important high anion gap metabolic acidosis. The correction (adding 2.5 mEq/L for every 1 g/dL the albumin sits below 4.0 g/dL) restores the gap to what it would be at a normal albumin.",
          },
          {
            q: "Can a patient have a normal pH but still have a significant acid-base disorder?",
            a: "Yes. A normal pH with abnormal PaCO₂ and bicarbonate usually indicates a mixed disorder where an acidosis and an alkalosis are occurring simultaneously and largely cancelling each other out — for example, severe vomiting (metabolic alkalosis) occurring alongside diabetic ketoacidosis (metabolic acidosis). The anion gap and delta ratio are often what reveal this picture, since the pH alone hides it.",
          },
          {
            q: "When is Winter's formula used, and when are the other compensation rules used?",
            a: "Winter's formula applies specifically when the primary disorder is a metabolic acidosis, to check whether respiratory compensation (a fall in PaCO₂) is adequate. Separate, differently-derived formulas exist for metabolic alkalosis and for acute versus chronic respiratory acidosis and alkalosis — always match the formula to the primary disorder identified in step 2 of the interpretation sequence.",
          },
          {
            q: "Why does the calculator ask for age when calculating the A-a gradient?",
            a: "The normal A-a gradient widens progressively with age (roughly by age/4 + 4 mmHg) due to normal changes in lung elasticity and ventilation-perfusion matching. Using a single fixed threshold for all ages will over-diagnose an abnormal gradient in older patients and under-diagnose one in younger patients, so supplying age materially improves the accuracy of this specific check.",
          },
          {
            q: "Does a normal anion gap rule out a toxic ingestion like methanol or ethylene glycol?",
            a: "No. Early after ingestion of methanol or ethylene glycol, the parent alcohol itself raises the osmolar gap long before it is metabolised into the toxic organic acids that raise the anion gap. A normal anion gap in a patient with a strong clinical suspicion of toxic alcohol ingestion should prompt an osmolar gap calculation and urgent toxicology involvement rather than reassurance.",
          },
        ]}
      />

      <RelatedTools slugs={["egfr-calculator", "sirs-calculator", "apache-ii-calculator"]} />

      <References
        items={[
          {
            text: "Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med. 1967;66(2):312-322.",
          },
          {
            text: "Figge J, Jabor A, Kazda A, Fencl V. Anion gap and hypoalbuminemia. Crit Care Med. 1998;26(11):1807-1810.",
          },
          {
            text: "Wrenn K. The delta (Δ) gap: an approach to mixed acid-base disorders. Ann Emerg Med. 1990;19(11):1310-1313.",
          },
          {
            text: "Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med. 2014;371(15):1434-1445.",
          },
          {
            text: "Kraut JA, Madias NE. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol. 2007;2(1):162-174.",
          },
          {
            text: "Ayers P, Warrington L. Diagnosis and treatment of simple acid-base disorders. Nutr Clin Pract. 2008;23(2):122-127.",
          },
        ]}
      />
    </>
  );
}
