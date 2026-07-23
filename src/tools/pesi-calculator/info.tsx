import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function PesiInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the Pulmonary Embolism Severity Index?</h2>
        <p>
          Acute pulmonary embolism (PE) is one of the most clinically
          unpredictable diagnoses in emergency and acute medicine. Two
          patients with an identical CT pulmonary angiogram report — a
          segmental clot in the right lower lobe, say — can have wildly
          different short-term outcomes depending on their age,
          cardiopulmonary reserve, and physiological response to the
          embolic burden. One may be entirely asymptomatic and safe for
          same-day discharge; the other, an elderly patient with heart
          failure and tachycardia, may be at meaningfully increased risk of
          death within 30 days. The Pulmonary Embolism Severity Index (PESI)
          is a validated clinical prediction rule that converts eleven
          readily available pieces of bedside information into a single
          score that estimates that 30-day mortality risk and stratifies
          patients into five severity classes, from very low to very high
          risk.
        </p>
        <p>
          Its central clinical purpose is disposition: deciding which
          patients with confirmed PE are safe for early discharge or fully
          outpatient treatment with a direct oral anticoagulant, and which
          require inpatient admission, closer monitoring, or escalation to
          advanced therapy. It does this using only variables already
          collected during a standard initial assessment — no additional
          blood test or imaging is required to calculate it, which is part
          of why it has been adopted so widely into international
          guidelines.
        </p>

        <h2>History and Derivation</h2>
        <p>
          The PESI was derived and validated by Drahomir Aujesky and
          colleagues, published in the American Journal of Respiratory and
          Critical Care Medicine in 2005. The rule was built using a large
          retrospective cohort of over 15,000 patients diagnosed with PE
          across 186 hospitals in Pennsylvania, with 30-day all-cause
          mortality as the outcome the model was trained to predict. Using
          logistic regression, the investigators identified eleven variables
          that were independently associated with mortality, weighted each
          according to its regression coefficient, and grouped patients into
          five risk classes by total score. The rule was subsequently
          externally validated in an independent cohort, an essential step
          that distinguishes a clinical prediction rule ready for bedside
          use from one that is merely a promising statistical model fitted
          to a single dataset.
        </p>
        <p>
          What made PESI notable at the time of its publication was that it
          out-performed clinical gestalt and simpler severity markers using
          only information available within minutes of a patient arriving in
          the emergency department — no need to wait for troponin,
          brain natriuretic peptide, or an echocardiogram, all of which take
          time to obtain and are not universally available out of hours.
          This made it immediately practical for real-time triage decisions,
          which is a large part of why it was adopted into both European
          Society of Cardiology (ESC) and American College of Chest
          Physicians (CHEST) guidelines for the management of acute PE.
        </p>

        <h2>The Eleven PESI Variables and Their Points</h2>
        <p>
          The score is purely additive — there is no multiplication or
          conditional logic, only a running total across eleven variables,
          most of them simple yes/no clinical findings:
        </p>
        <ul>
          <li><strong>Age:</strong> add a number of points equal to the patient's age in years. This is the single largest and most consistent contributor to the total score, reflecting age as an independent, powerful predictor of mortality after PE.</li>
          <li><strong>Male sex:</strong> +10 points. Male patients have a modestly higher case-fatality rate after PE than female patients of the same age and comorbidity burden, for reasons that remain incompletely understood.</li>
          <li><strong>Cancer</strong> (active, including patients undergoing treatment): +30 points — the single largest categorical contributor in the score, reflecting both the competing mortality risk from malignancy itself and cancer's association with more severe, harder-to-treat thrombosis.</li>
          <li><strong>Chronic heart failure:</strong> +10 points, reflecting reduced physiological reserve to compensate for the acute right ventricular afterload increase that PE causes.</li>
          <li><strong>Chronic lung disease:</strong> +10 points, for the same underlying reason — reduced cardiopulmonary reserve.</li>
          <li><strong>Heart rate ≥110 beats per minute:</strong> +20 points, a marker of early haemodynamic compensation for obstructive shock.</li>
          <li><strong>Systolic blood pressure &lt;100 mmHg:</strong> +30 points, reflecting frank haemodynamic compromise.</li>
          <li><strong>Respiratory rate ≥30 breaths per minute:</strong> +20 points, a marker of severe physiological stress and impending respiratory failure.</li>
          <li><strong>Temperature &lt;36°C:</strong> +20 points. Relative hypothermia in this context is a marker of poor perfusion and physiological decompensation, similarly to its role in sepsis scoring systems.</li>
          <li><strong>Altered mental status</strong> (confusion, lethargy, stupor, or coma): +60 points — by far the single largest point contribution of any variable, reflecting that altered consciousness in acute PE usually indicates critically reduced cerebral perfusion from falling cardiac output.</li>
          <li><strong>Arterial oxygen saturation &lt;90%</strong> on room air: +20 points, reflecting severe ventilation-perfusion mismatch or shunt from the embolic burden.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 74-year-old man with known chronic obstructive pulmonary disease
          presents with pleuritic chest pain and is confirmed to have a
          segmental PE on CT pulmonary angiogram. His heart rate is 118 bpm,
          systolic blood pressure is 128 mmHg, respiratory rate is 22, oxygen
          saturation is 94% on air, temperature is 36.8°C, and he is fully
          alert and orientated. He has no history of cancer or heart
          failure.
        </p>
        <p>
          His score is built as follows: age 74 (+74) + male sex (+10) +
          chronic lung disease (+10) + heart rate ≥110 (+20) = <strong>114
          points</strong>. This falls into Class IV (106–125 points),
          corresponding to an estimated 30-day mortality of roughly 4.0–11.4%.
          Per current guidance, this places him in the high-risk-for-adverse-
          outcome category requiring hospital admission and echocardiography
          to formally assess for right ventricular dysfunction, even though
          his blood pressure and oxygen saturation are both reassuring in
          isolation — illustrating how PESI captures cumulative risk (here,
          driven mostly by his age and heart rate) that a quick glance at the
          vital signs chart alone would understate.
        </p>

        <h2>Interpreting the Five Risk Classes</h2>
        <p>
          The total score sorts the patient into one of five classes, each
          with an associated estimated 30-day mortality drawn from the
          derivation and validation literature:
        </p>
        <ul>
          <li><strong>Class I — Very low risk:</strong> ≤65 points; 30-day mortality approximately 0–1.6%.</li>
          <li><strong>Class II — Low risk:</strong> 66–85 points; approximately 1.7–3.5%.</li>
          <li><strong>Class III — Intermediate risk:</strong> 86–105 points; approximately 3.2–7.1%.</li>
          <li><strong>Class IV — High risk:</strong> 106–125 points; approximately 4.0–11.4%.</li>
          <li><strong>Class V — Very high risk:</strong> &gt;125 points; approximately 10.0–24.5%.</li>
        </ul>
        <p>
          Classes I and II are conventionally grouped together as "low
          risk" for guideline purposes — patients in either class have a
          consistently low probability of early death and are the group in
          whom early discharge or fully outpatient management is most
          strongly supported by the evidence.
        </p>

        <h2>Clinical Applications: Guiding Disposition</h2>
        <p>
          PESI's primary use is at the point of diagnosis, immediately after
          PE is confirmed, to decide where the patient should be treated.
        </p>
        <ul>
          <li>
            <strong>Class I–II (low risk):</strong> current ESC and CHEST
            guidance supports considering early discharge — sometimes
            directly from the emergency department — with a direct oral
            anticoagulant such as apixaban or rivaroxaban, provided there is
            no other reason for admission: significant bleeding risk,
            inadequate social support, poor renal or hepatic function,
            pregnancy, or a low oxygen saturation that itself would warrant
            observation regardless of the PESI class. Follow-up should be
            arranged within the first days after discharge to confirm
            clinical stability and anticoagulant tolerance.
          </li>
          <li>
            <strong>Class III (intermediate risk):</strong> admission is
            standard, with further risk stratification recommended —
            specifically echocardiography or CT-derived assessment of right
            ventricular size/function, and a cardiac biomarker (troponin,
            and often BNP or NT-proBNP). Patients positive on both
            imaging and biomarker testing are reclassified as
            "intermediate-high risk" under the ESC framework and require
            closer monitoring, with rescue thrombolysis reserved for those
            who subsequently deteriorate haemodynamically, rather than
            given upfront.
          </li>
          <li>
            <strong>Class IV–V (high and very high risk):</strong> admission
            to a monitored bed or intensive care unit, with a low threshold
            for echocardiography, senior specialist involvement, and — in
            Class V patients with overt haemodynamic instability (systolic
            blood pressure &lt;90 mmHg or shock) — consideration of systemic
            thrombolysis (commonly alteplase 100 mg intravenously over 2
            hours) or, where thrombolysis is contraindicated or fails,
            surgical or catheter-based embolectomy.
          </li>
        </ul>

        <h2>The Simplified PESI (sPESI)</h2>
        <p>
          Because the original PESI requires summing eleven separately
          weighted variables — practical, but not instantaneous at the
          bedside — Jiménez and colleagues published a simplified version,
          the sPESI, in the Archives of Internal Medicine in 2010. The
          sPESI reduces the rule to six binary variables, each worth exactly
          one point: age over 80 years, active cancer, chronic
          cardiopulmonary disease (heart failure or chronic lung disease
          combined into a single item), heart rate 110 bpm or more, systolic
          blood pressure under 100 mmHg, and oxygen saturation under 90%. A
          score of 0 identifies a low-risk group with a 30-day mortality
          around 1.1%, essentially equivalent to PESI Class I/II; a score of
          1 or more identifies a substantially higher-risk group, with 30-day
          mortality around 8.9% in the original validation. The trade-off is
          resolution: sPESI is faster to calculate but collapses everything
          above "low risk" into a single higher-risk category, without the
          finer Class III/IV/V gradation that the full PESI provides for
          more unwell patients.
        </p>

        <h2>Comparison to Other Pulmonary Embolism Tools</h2>
        <p>
          PESI is a prognostic tool, not a diagnostic one, and it sits
          alongside — rather than replaces — the tools used earlier in the
          diagnostic pathway.
        </p>
        <ul>
          <li>
            <strong>Wells' Criteria and the Geneva Score:</strong> both
            estimate the pre-test probability that a patient with suspected
            PE actually has one, used to decide whether D-dimer testing or
            direct CT pulmonary angiography is the appropriate next step.
            They are applied <em>before</em> a diagnosis is confirmed;
            PESI is applied only <em>after</em> imaging has confirmed PE is
            present.
          </li>
          <li>
            <strong>Hestia criteria:</strong> an alternative, purely
            binary (all-or-nothing) checklist developed specifically to
            select patients suitable for outpatient treatment, incorporating
            some practical/social factors (such as home oxygen requirement
            or history of bleeding) that PESI does not capture. Several
            head-to-head studies have found Hestia and sPESI perform
            similarly for identifying low-risk patients, and some centres
            use them in combination — reserving outpatient treatment for
            patients who screen low-risk on both.
          </li>
          <li>
            <strong>Right ventricular dysfunction on imaging and cardiac
            biomarkers:</strong> for intermediate-risk patients specifically,
            these are used as a second-stage stratification tool layered on
            top of the PESI/sPESI result, not as a replacement for it — the
            current ESC risk model requires all three pieces of information
            (clinical score, imaging, biomarker) together to sub-classify
            intermediate-risk patients as intermediate-low versus
            intermediate-high risk.
          </li>
        </ul>

        <h2>Limitations</h2>
        <p>
          PESI is a rigorously validated tool, but it has recognised
          limitations that must be kept in mind when using it:
        </p>
        <ul>
          <li>
            <strong>It predicts mortality, not the need for advanced
            therapy.</strong> A young, otherwise fit patient with a large,
            haemodynamically significant PE and severe right ventricular
            strain may still score relatively low on PESI purely because
            youth contributes few points, even though they may need urgent
            escalation. PESI should never override clear signs of acute
            haemodynamic compromise.
          </li>
          <li>
            <strong>It was derived in a specific population.</strong> The
            original cohort was drawn entirely from Pennsylvania hospitals;
            while subsequent external validation studies in other countries
            have generally confirmed its performance, some population-level
            differences in accuracy have been reported, particularly at the
            Class III/IV boundary.
          </li>
          <li>
            <strong>It does not incorporate imaging or biomarkers.</strong>
            This is a deliberate design choice for speed and universal
            availability, but it means PESI alone provides less granular
            risk information for intermediate-risk patients than it does
            once combined with echocardiography and troponin.
          </li>
          <li>
            <strong>Renal function, bleeding risk, and social factors are
            not scored</strong> even though they materially affect whether
            outpatient anticoagulation is actually safe for an individual
            patient — these must be assessed separately alongside the PESI
            result before a discharge decision is finalised.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can a patient with a confirmed PE really be sent home from the emergency department?",
            a: "Yes, for carefully selected low-risk patients. With the availability of direct oral anticoagulants such as apixaban and rivaroxaban, and validated risk tools such as PESI, Class I and Class II patients are increasingly managed entirely as outpatients when there is no other reason for admission — significant bleeding risk, poor social support, or an oxygen saturation or comorbidity profile that itself warrants observation.",
          },
          {
            q: "Is PESI used to diagnose pulmonary embolism?",
            a: "No. PESI is strictly a prognostic tool applied after PE has already been confirmed, typically by CT pulmonary angiogram or ventilation-perfusion scan. Diagnosis relies on pre-test probability tools such as the Wells' Criteria or Geneva Score, followed by D-dimer testing and/or imaging.",
          },
          {
            q: "What is the difference between PESI and sPESI?",
            a: "PESI uses eleven separately weighted variables and produces five risk classes. The simplified PESI (sPESI) uses six binary variables, each worth one point, and produces only two groups — low risk (score 0) and higher risk (score ≥1). sPESI is faster to calculate but provides less detail among higher-risk patients.",
          },
          {
            q: "Does a low PESI score rule out the need for hospital admission?",
            a: "Not by itself. A low PESI score identifies a patient at low risk of 30-day mortality from the PE itself, but the final decision to discharge must also account for bleeding risk, renal and hepatic function, ability to obtain and take anticoagulants correctly, and social support at home.",
          },
          {
            q: "Should PESI be recalculated if the patient's condition changes?",
            a: "Yes. PESI reflects the patient's status at the time of calculation. A patient who develops new tachycardia, hypotension, hypoxia, or altered mental status after initial assessment should be reassessed and, if appropriate, escalated regardless of their initial score.",
          },
        ]}
      />

      <RelatedTools slugs={["vte-risk-calculator", "has-bled-calculator", "chadsvasc-score"]} />

      <References
        items={[
          {
            text: "Aujesky D, Obrosky DS, Stone RA, et al. Derivation and validation of a prognostic model for pulmonary embolism. Am J Respir Crit Care Med. 2005;172(8):1041-1046.",
          },
          {
            text: "Jiménez D, Aujesky D, Moores L, et al. Simplification of the pulmonary embolism severity index for prognostication in patients with acute symptomatic pulmonary embolism. Arch Intern Med. 2010;170(15):1383-1389.",
          },
          {
            text: "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603.",
            href: "https://academic.oup.com/eurheartj/article/41/4/543/5556136",
          },
          {
            text: "Zondag W, Mos ICM, Creemers-Schild D, et al. Outpatient treatment in patients with acute pulmonary embolism: the Hestia Study. J Thromb Haemost. 2011;9(8):1500-1507.",
          },
          {
            text: "MDCalc. Pulmonary Embolism Severity Index (PESI).",
            href: "https://www.mdcalc.com/calc/1304/pulmonary-embolism-severity-index-pesi",
          },
        ]}
      />
    </>
  );
}
