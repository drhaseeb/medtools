import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function ApacheIiInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the APACHE II Score?</h2>
        <p>
          The Acute Physiology and Chronic Health Evaluation II (APACHE II)
          score is one of the oldest and most extensively validated
          severity-of-illness scoring systems in critical care medicine. It
          converts twelve routine physiological measurements, a patient's
          age, and their pre-existing chronic health status into a single
          number, from 0 to 71, that estimates the probability of
          in-hospital death for a critically ill adult. Published by William
          Knaus and colleagues in 1985, it remains a cornerstone of ICU
          research, benchmarking, and quality-improvement programs
          worldwide, more than four decades after its introduction — a
          remarkable lifespan for any clinical instrument in a field that
          changes as quickly as intensive care.
        </p>
        <p>
          It is important to be clear about what APACHE II is for. It was
          designed, and has been validated, to describe the average outcome
          of a <em>population</em> of ICU patients with a similar score — it
          was never intended, and should never be used, as the sole basis
          for an individual treatment decision or a conversation about
          withdrawing care for one specific patient.
        </p>

        <h2>History and Development</h2>
        <p>
          The original APACHE score was published in 1981 by Knaus and
          colleagues at George Washington University, using 34
          physiological variables — a system so cumbersome to collect that
          it saw little routine clinical use. In 1985, the same group
          published APACHE II in <em>Critical Care Medicine</em>, having
          used statistical modeling on a multicenter U.S. cohort of over
          5,800 ICU admissions to identify which variables actually carried
          independent predictive weight. The result trimmed the original 34
          variables to twelve acute physiological measurements plus age and
          chronic health status — a substantial simplification that made
          the score practical to calculate at the bedside while retaining
          most of its discriminative power. APACHE II went on to become the
          most widely cited severity score in the critical care literature,
          and although the same research group later published APACHE III
          (1991) and APACHE IV (2006) with expanded variable sets and
          disease-specific coefficients, APACHE II remains in routine use
          today because it is free to use, requires no proprietary
          software, and its performance — while dated — is well understood
          and extensively benchmarked.
        </p>

        <h2>How the Score Is Calculated</h2>
        <p>
          The APACHE II total is the sum of three independently calculated
          components, using the <strong>worst value recorded during the
          first 24 hours</strong> of ICU admission for every physiological
          variable. Using the worst rather than the admission value is a
          deliberate design choice: it captures the full extent of the
          patient's acute derangement, including any deterioration that
          occurred shortly after arrival, rather than a possibly-misleading
          snapshot taken at the moment of admission.
        </p>

        <h2>Part 1 — The Acute Physiology Score (APS)</h2>
        <p>
          Twelve physiological variables are each assigned 0 to 4 points,
          with 0 representing a normal value and 4 representing the most
          extreme derangement in either direction (both severe
          hyperthermia and severe hypothermia score 4, for example). The
          twelve variables are: rectal temperature, mean arterial pressure,
          heart rate, respiratory rate, oxygenation (A-a gradient if FiO₂ ≥
          0.5, or PaO₂ directly if FiO₂ &lt; 0.5), arterial pH (or serum
          bicarbonate if no arterial blood gas is available), serum sodium,
          serum potassium, serum creatinine, hematocrit, white blood cell
          count, and the Glasgow Coma Scale.
        </p>
        <p>
          Two of these variables deserve specific comment because they are
          common sources of scoring error:
        </p>
        <ul>
          <li>
            <strong>Serum creatinine:</strong> this is the one variable in
            the APS with an asymmetric point table — normal range
            (0.6–1.4 mg/dL) scores 0, but even a <em>low</em> creatinine
            below 0.6 mg/dL scores 2 points, not 0, per the original Knaus
            table (a genuine quirk of the score, not an error). Separately,
            if the renal derangement is due to acute renal failure, the
            calculated creatinine points are doubled — recognizing that
            acute kidney injury carries substantially higher mortality than
            chronic or pre-existing renal impairment producing the same
            numeric creatinine.
          </li>
          <li>
            <strong>Glasgow Coma Scale:</strong> rather than being scored on
            its own 0–4 scale like the other variables, the neurological
            component contributes (15 − actual GCS) points directly — so a
            patient in deep coma with a GCS of 3 contributes 12 points to
            the APS, reflecting how heavily neurological status weighs on
            overall prognosis.
          </li>
        </ul>

        <h2>Part 2 — Age Points</h2>
        <p>
          Physiological reserve declines with age, and APACHE II accounts
          for this with a simple banded scale: 0 points below 45 years, 2
          points from 45–54, 3 points from 55–64, 5 points from 65–74, and
          6 points at 75 or older.
        </p>

        <h2>Part 3 — Chronic Health Points</h2>
        <p>
          Points are added only when a patient has a history of severe,
          strictly defined organ system insufficiency or is
          immunocompromised, <em>and</em> is unable to lead a normal active
          life as a result. The qualifying conditions are deliberately
          narrow — biopsy-proven cirrhosis with portal hypertension or a
          prior episode of variceal bleeding or hepatic failure; NYHA Class
          IV cardiovascular disease; severe chronic obstructive or
          restrictive lung disease with chronic hypoxia, hypercapnia, or
          severe exercise limitation; chronic dialysis dependence; or
          immunocompromise from disease or therapy. If the criterion is met,
          the point value then depends on the nature of the ICU admission:
          5 points for a non-operative or emergency post-operative
          admission, but only 2 points for an elective post-operative
          admission — the logic being that a patient who was well enough to
          be scheduled for elective surgery, and whose team chose to
          proceed, represents a lower-risk subgroup than a patient in the
          same chronic-health category who deteriorated acutely or required
          emergency surgery.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 68-year-old man is admitted to intensive care with septic shock
          secondary to pneumonia. His worst values in the first 24 hours:
          temperature 39.2°C, mean arterial pressure 58 mmHg, heart rate 128
          bpm, respiratory rate 32/min, PaO₂ 58 mmHg on FiO₂ 0.4, sodium 133
          mEq/L, potassium 5.7 mEq/L, creatinine 2.2 mg/dL (attributed to
          acute renal failure from hypoperfusion), hematocrit 33%, WBC 22 ×
          10³/mm³, serum bicarbonate 17 mEq/L (no arterial blood gas taken),
          and a GCS of 12. He has no qualifying chronic health condition.
        </p>
        <p>
          Scoring each variable: temperature 39.2°C → 3; MAP 58 → 2; heart
          rate 128 → 2; respiratory rate 32 → 1; PaO₂ 58 (55–60 mmHg range)
          → 3; sodium 133 → 0; potassium 5.7 → 2; creatinine 2.2 mg/dL
          normally scores 3, doubled for acute renal failure → 6; hematocrit
          33% → 0; WBC 22 → 2; bicarbonate 17 mEq/L → 2; GCS contribution
          (15 − 12) → 3. Summing the APS: 3+2+2+1+3+0+2+6+0+2+2+3 = 26. Age
          68 adds 5 points. No chronic health points apply. Total APACHE II
          = 26 + 5 + 0 = <strong>31</strong>, placing him in the very-high-severity
          band.
        </p>

        <h2>Interpreting the Total Score and Predicting Mortality</h2>
        <p>
          The raw APACHE II total (0–71) is not, by itself, a mortality
          percentage. In the original methodology, the total score is
          combined with a disease-specific weighting coefficient — one of
          around fifty categories describing the patient's principal reason
          for ICU admission (for example, sepsis, cardiogenic shock, or
          post-operative care following elective aortic surgery) — inside a
          multivariable logistic regression equation to generate an
          individualized predicted mortality. This calculator uses a
          simplified single-variable logistic approximation based on the
          total score alone, which is a reasonable way to communicate
          relative severity at the bedside but is <em>not</em> the full
          Knaus equation and will systematically differ from the true,
          diagnosis-adjusted predicted mortality — particularly for
          diagnoses at the extremes of the original weighting table. As a
          general heuristic, higher scores map onto substantially higher
          risk: scores under 10 are typically associated with single-digit
          mortality, scores in the 20s often correspond to mortality in the
          30–50% range, and scores above 30 are associated with very high
          mortality, though the exact percentage for any individual patient
          depends heavily on their primary diagnosis and cannot be read
          precisely off the total score alone.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          APACHE II's primary modern use is not bedside triage but
          benchmarking and research: intensive care units use aggregated
          APACHE II scores (and the corresponding standardized mortality
          ratio — observed deaths divided by APACHE-predicted deaths) to
          compare their case-mix-adjusted performance year over year and
          against other units, and to make the case for staffing,
          equipment, or protocol changes when their observed mortality is
          higher than predicted for their patient population. It is also
          one of the most commonly used stratification variables in
          critical care clinical trials, ensuring that treatment and control
          arms have comparable baseline severity of illness. At the
          individual patient level, a rising APACHE II score over
          successive ICU days — even though the formal score is designed
          for a single 24-hour window — is used informally by many units as
          one input, among many, into conversations about escalating or
          limiting therapy.
        </p>

        <h2>Comparison to Other ICU Severity Scores</h2>
        <ul>
          <li>
            <strong>SOFA (Sequential Organ Failure Assessment):</strong>{" "}
            where APACHE II gives a single snapshot of mortality risk based
            on the worst physiology in the first 24 hours, SOFA is designed
            to be recalculated daily and tracks the trajectory of six
            specific organ systems over time. SOFA's simplicity and its
            explicit organ-by-organ structure are why it — rather than
            APACHE II — was adopted as the organ-dysfunction criterion in
            the Sepsis-3 definition of sepsis.
          </li>
          <li>
            <strong>SAPS II / SAPS 3 (Simplified Acute Physiology Score):</strong>{" "}
            a European-developed contemporary of APACHE II with a similar
            purpose and a comparable, though not identical, variable set and
            statistical methodology. Different countries and registries have
            historically favored one system over the other, which
            complicates direct cross-study comparison.
          </li>
          <li>
            <strong>APACHE III and IV:</strong> the same research group's
            later revisions add more physiological variables and
            diagnosis-specific coefficients, improving discrimination, but
            both are proprietary and require licensed software — a major
            reason APACHE II, despite its age, remains far more widely used
            in everyday practice and in the published literature.
          </li>
        </ul>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Dated calibration:</strong> the coefficients were
            derived from a mid-1980s patient cohort. Critical care has
            changed enormously since then — lung-protective ventilation,
            early goal-directed sepsis therapy, and modern renal replacement
            techniques have all improved survival for a given level of
            physiological derangement — so APACHE II frequently
            <em> overestimates</em> mortality in contemporary ICUs, a
            phenomenon documented repeatedly in the validation literature.
          </li>
          <li>
            <strong>Lead-time bias:</strong> a patient who receives
            excellent resuscitation in the emergency department or on the
            ward for many hours before ICU admission may arrive with
            near-normal "worst 24-hour" values, generating an artificially
            low score that understates how sick they actually were at the
            true onset of their critical illness.
          </li>
          <li>
            <strong>Requires the diagnosis-specific coefficient for true mortality prediction:</strong>{" "}
            the raw total score alone, without the disease-category
            weighting, is a good measure of relative severity but an
            imprecise estimate of an individual patient's actual mortality
            risk.
          </li>
          <li>
            <strong>Labor-intensive:</strong> collecting twelve
            physiological variables plus GCS, age, and chronic health status
            is far more time-consuming than simpler modern scores such as
            qSOFA, which is one reason APACHE II has been displaced from
            rapid bedside triage even as it remains dominant in research and
            benchmarking.
          </li>
          <li>
            <strong>Not diagnosis-specific:</strong> two patients with
            identical scores but very different underlying diagnoses (for
            example, an elective post-operative patient versus a patient
            with septic shock) do not necessarily share the same true
            mortality risk, which is exactly why the full APACHE
            methodology layers a diagnosis-specific coefficient on top of
            the raw score.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Why does low creatinine still score points in APACHE II?",
            a: "This is a genuine and well-recognized quirk of the original 1985 point table, not an error: while every other physiological variable scores 0 across its entire normal range, creatinine below 0.6 mg/dL still scores 2 points. It was derived directly from the statistical modeling of the original validation cohort and has been preserved unchanged in every subsequent official reproduction of the score.",
          },
          {
            q: "What counts as 'acute renal failure' for the creatinine-doubling rule?",
            a: "The original Knaus methodology leaves this to clinical judgment rather than a strict laboratory definition, but it is generally applied when the elevated creatinine reflects a new, acute deterioration in kidney function during the current illness — as opposed to a patient's stable, chronic baseline creatinine from pre-existing chronic kidney disease.",
          },
          {
            q: "Does a high APACHE II score mean a patient will definitely die?",
            a: "No. APACHE II describes average outcomes for a population of patients with a similar score and diagnosis category — it does not predict the outcome of a specific individual with certainty. It should never be used as the sole basis for withdrawing or withholding treatment; that decision requires full clinical context, discussion with the patient and family, and multidisciplinary input.",
          },
          {
            q: "Why do I need my diagnosis to get an accurate mortality prediction?",
            a: "The complete APACHE II methodology combines the raw physiological/age/chronic-health score with a coefficient specific to the patient's principal reason for ICU admission, since a given level of physiological derangement carries different prognostic weight depending on the underlying disease process. This calculator provides a simplified score-only approximation for education and relative severity comparison; it is not a substitute for the full, diagnosis-adjusted equation.",
          },
          {
            q: "How is APACHE II different from SOFA in the definition of sepsis?",
            a: "The Sepsis-3 international consensus definition (2016) specifically uses a rise in SOFA score, not APACHE II, to define sepsis-associated organ dysfunction, because SOFA is simpler to recalculate daily and its six-organ-system structure maps directly onto the concept of new organ dysfunction caused by infection.",
          },
        ]}
      />

      <RelatedTools slugs={["gcs-calculator", "meld-calculator", "sirs-calculator"]} />

      <References
        items={[
          {
            text: "Knaus WA, Draper EA, Wagner DP, Zimmerman JE. APACHE II: a severity of disease classification system. Crit Care Med. 1985;13(10):818-829.",
          },
          {
            text: "Knaus WA, Zimmerman JE, Wagner DP, Draper EA, Lawrence DE. APACHE — acute physiology and chronic health evaluation: a physiologically based classification system. Crit Care Med. 1981;9(8):591-597.",
          },
          {
            text: "Knaus WA, Wagner DP, Draper EA, et al. The APACHE III prognostic system. Chest. 1991;100(6):1619-1636.",
          },
          {
            text: "Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.",
          },
          {
            text: "Merck Manual Professional Edition. Acute Physiologic Assessment and Chronic Health Evaluation (APACHE) II Scoring System.",
            href: "https://www.merckmanuals.com/professional/multimedia/table/acute-physiologic-assessment-and-chronic-health-evaluation-apache-ii-scoring-system",
          },
          {
            text: "Vincent JL, Moreno R. Clinical review: scoring systems in the critically ill. Crit Care. 2010;14(2):207.",
          },
        ]}
      />
    </>
  );
}
