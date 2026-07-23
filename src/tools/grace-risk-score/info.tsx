import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function GraceInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the GRACE Risk Score?</h2>
        <p>
          The GRACE (Global Registry of Acute Coronary Events) risk score is a
          validated prognostic tool that estimates in-hospital and
          post-discharge mortality for patients presenting with acute coronary
          syndrome (ACS) — ST-elevation myocardial infarction (STEMI),
          non-ST-elevation myocardial infarction (NSTEMI), and unstable
          angina. Unlike scores built from a single clinical trial population,
          GRACE was derived from an unselected, real-world, multinational
          registry, which is a large part of why it has out-performed
          competing scores (such as TIMI) at discriminating risk across the
          whole spectrum of ACS presentations, from low-risk unstable angina
          to cardiogenic shock.
        </p>
        <p>
          The score converts eight readily available bedside variables — age,
          heart rate, systolic blood pressure, serum creatinine, Killip class,
          cardiac arrest at admission, ST-segment deviation, and elevated
          cardiac biomarkers — into a single number that maps to an estimated
          probability of death. That number, in turn, drives one of the most
          consequential decisions in ACS care: how urgently the patient needs
          coronary angiography.
        </p>

        <h2>History and Development</h2>
        <p>
          The GRACE registry enrolled more than 100,000 patients with ACS
          across 14 countries between 1999 and 2007, deliberately including
          community hospitals and unselected patients rather than only
          tertiary cardiac centres, so that the resulting model would
          generalise to routine practice. The original in-hospital mortality
          model was published by Christopher B. Granger and colleagues in the{" "}
          <em>Archives of Internal Medicine</em> in 2003, and a companion
          model predicting death between hospital discharge and 6 months was
          published by Kim A. Eagle and colleagues in <em>JAMA</em> in 2004.
          Both models share the same eight input variables and a similar
          point-based structure, which is why this calculator, like most
          bedside references, presents a single point total alongside both an
          in-hospital and a 6-month mortality estimate.
        </p>
        <p>
          A materially different tool, "GRACE 2.0," was released later by
          Keith A. A. Fox and colleagues (<em>BMJ Open</em>, 2014) as a
          continuous, non-linear logistic regression model rather than a
          table of discrete point bands. GRACE 2.0 is what powers the
          official web and mobile calculators at gracescore.org, and it can
          produce a slightly different numerical estimate than the classic
          point-based nomogram reproduced here, particularly at the extremes
          of a variable's range. This calculator implements the original,
          discrete point-band GRACE score — the version most widely taught,
          reproduced in textbooks, and embedded in ESC and ACC/AHA guideline
          appendices — not GRACE 2.0. For a single-patient decision where a
          marginal difference between the two models could change management,
          cross-checking against the official GRACE 2.0 calculator is
          reasonable.
        </p>

        <h2>How the Score Is Calculated</h2>
        <p>
          Each of the eight variables contributes points on its own scale,
          and the points are summed to a total that typically ranges from
          around 1 to just over 370:
        </p>
        <ul>
          <li><strong>Age:</strong> 0 points under 30, rising in steps to 100 points at 90 years or older — age is the single largest contributor to the score.</li>
          <li><strong>Heart rate:</strong> 0 points below 50 bpm, rising to 46 points at 200 bpm or higher — both severe bradycardia and severe tachycardia in ACS reflect haemodynamic compromise, so the score treats a very high rate as high risk.</li>
          <li><strong>Systolic blood pressure:</strong> scored in the opposite direction to the other vital signs — the lowest pressures (under 80 mmHg) score the most points (58), falling to 0 points at 200 mmHg or above, because hypotension in ACS signals cardiogenic shock.</li>
          <li><strong>Serum creatinine:</strong> 1 point below 0.4 mg/dL, rising to 28 points at 4.0 mg/dL or above — renal impairment is a powerful independent predictor of mortality in ACS, reflecting both pre-existing vascular disease burden and reduced physiological reserve.</li>
          <li><strong>Killip class:</strong> a bedside clinical assessment of heart-failure severity, from Killip I (no failure, 0 points) to Killip IV (cardiogenic shock, 59 points) — the single heaviest-weighted categorical variable in the score.</li>
          <li><strong>Cardiac arrest at admission:</strong> a flat 39 points if the patient required resuscitation before or during presentation.</li>
          <li><strong>ST-segment deviation:</strong> a flat 28 points for ST depression or transient elevation on the presenting ECG (distinct from the persistent ST-elevation that defines STEMI as a diagnosis).</li>
          <li><strong>Elevated cardiac biomarkers:</strong> a flat 14 points for any troponin (or historically, CK-MB) elevation above the local upper limit of normal.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 68-year-old man presents with NSTEMI. His heart rate is 88 bpm,
          systolic BP is 130 mmHg, and creatinine is 1.1 mg/dL. He is in
          Killip class I, did not arrest, but has ST depression on his ECG
          and an elevated troponin.
        </p>
        <p>
          Points: age 68 → 58; heart rate 88 → 9; SBP 130 → 34; creatinine
          1.1 → 7; Killip I → 0; no cardiac arrest → 0; ST deviation present →
          28; elevated troponin → 14. <strong>Total = 58 + 9 + 34 + 7 + 0 + 0
          + 28 + 14 = 150.</strong> A score of 150 falls in the high-risk
          category (&gt;140), corresponding to an in-hospital mortality above
          3% and a 6-month mortality above 8%. Per the 2023 ESC ACS
          guideline, this places him in the group recommended for an early
          invasive strategy — coronary angiography within 24 hours of
          admission.
        </p>

        <h2>Interpreting the Score</h2>
        <p>
          The score is conventionally divided into three risk tiers, and this
          calculator uses the cut-points most widely reproduced in guideline
          appendices and bedside references:
        </p>
        <ul>
          <li><strong>Low risk (&lt;109 points):</strong> in-hospital mortality under 1%, 6-month mortality under 3%.</li>
          <li><strong>Intermediate risk (109–140 points):</strong> in-hospital mortality 1–3%, 6-month mortality 3–8%.</li>
          <li><strong>High risk (&gt;140 points):</strong> in-hospital mortality above 3%, 6-month mortality above 8%.</li>
        </ul>
        <p>
          These bands should be read as a guide to overall prognosis and
          urgency, not as a precise individual probability — a score of 141
          and a score of 250 are both "high risk," but they are not
          clinically equivalent, and the underlying continuous score (or the
          GRACE 2.0 percentage output) carries more information than the
          three-tier label alone.
        </p>

        <h2>Guideline-Directed Timing of Invasive Management</h2>
        <p>
          The 2023 ESC Guidelines for the management of acute coronary
          syndromes use the GRACE score as one of several criteria — alongside
          recurrent ischaemia, haemodynamic instability, and dynamic ECG
          changes — to select the timing of invasive coronary angiography in
          non-ST-elevation ACS:
        </p>
        <ul>
          <li><strong>GRACE &gt;140, or another very-high-risk feature:</strong> an early invasive strategy (coronary angiography within 24 hours) is recommended; if this is not logistically possible, a delayed invasive strategy within 72 hours is considered an acceptable and safe alternative.</li>
          <li><strong>GRACE 109–140 (intermediate risk), without a very-high-risk feature:</strong> an invasive strategy within 72 hours is reasonable.</li>
          <li><strong>GRACE &lt;109 (low risk):</strong> a more conservative, selectively invasive or ischaemia-guided strategy is appropriate, informed by non-invasive testing and clinical judgement.</li>
        </ul>
        <p>
          Patients with haemodynamic instability, cardiogenic shock,
          recurrent or refractory angina despite treatment, life-threatening
          arrhythmias, or mechanical complications of MI require immediate
          (under 2 hour) angiography regardless of their GRACE score — the
          score is not designed to, and should not, delay recognition of
          these unambiguous emergencies.
        </p>

        <h2>Antithrombotic and Adjunctive Therapy by Risk Tier</h2>
        <p>
          Beyond timing of angiography, the risk tier also informs the
          intensity of antiplatelet and anticoagulant therapy while awaiting
          intervention. Higher-risk patients are more often managed with a
          potent P2Y12 inhibitor (ticagrelor or prasugrel rather than
          clopidogrel) in addition to aspirin, parenteral anticoagulation
          (typically a low-molecular-weight heparin or fondaparinux), and
          closer haemodynamic and rhythm monitoring. The decision to add a
          glycoprotein IIb/IIIa inhibitor is now reserved for bail-out
          situations during percutaneous coronary intervention — such as
          thrombotic complications or no-reflow — rather than routine upstream
          use, reflecting a shift in more recent guidance away from earlier,
          more liberal use of these agents.
        </p>

        <h2>Comparison to Other ACS Risk Scores</h2>
        <p>
          GRACE is one of several validated ACS risk scores, and it is worth
          understanding how it differs from its main alternative, TIMI:
        </p>
        <ul>
          <li><strong>TIMI Risk Score (UA/NSTEMI):</strong> a simpler, seven-variable score developed from a randomised trial population, quicker to calculate at the bedside but with less discriminatory power in unselected, real-world populations, particularly among older patients and those with renal impairment — precisely the groups where GRACE's inclusion of age and creatinine as continuous variables gives it an advantage.</li>
          <li><strong>HEART Score:</strong> designed for undifferentiated chest pain in the emergency department, before a diagnosis of ACS has been confirmed, to decide who needs further cardiac workup at all — a different clinical question from GRACE, which is applied after ACS has already been diagnosed to guide invasive timing.</li>
        </ul>
        <p>
          Multiple validation studies comparing these scores head-to-head
          have consistently found GRACE to have superior discrimination for
          mortality, which is why it — rather than TIMI — is the score
          explicitly embedded in the ESC guideline algorithm for timing of
          invasive management.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          GRACE is calculated on presentation with suspected ACS (once the
          diagnosis is confirmed by ECG and biomarkers) and is typically
          repeated if the patient's clinical trajectory changes — for example
          if they develop new heart failure, arrhythmia, or recurrent chest
          pain, since Killip class and haemodynamic status can shift quickly
          in the first 24–48 hours. It is used at three main decision points:
          selecting the timing of coronary angiography, informing discharge
          planning and the intensity of outpatient follow-up, and — in some
          services — supporting shared decision-making conversations about
          prognosis with patients and families, particularly at the very high
          end of the score where in-hospital mortality can exceed 20–30%.
        </p>

        <h2>External Validation and Real-World Performance</h2>
        <p>
          One of GRACE's defining strengths is how extensively it has been
          externally validated outside its original derivation population.
          Since its publication, the score has been tested in dozens of
          independent cohorts across Europe, North America, and Asia,
          spanning different eras of ACS management, different rates of
          primary PCI availability, and different baseline population risk.
          Across the large majority of these validations, GRACE has retained
          good discrimination — meaning it reliably ranks higher-risk
          patients above lower-risk ones — even though the absolute
          mortality rates observed in more recent, better-treated cohorts are
          often somewhat lower than those in the original derivation tables.
          This distinction between discrimination (relative ranking) and
          calibration (absolute predicted probability matching observed
          outcomes) is important: a score can remain clinically very useful
          for triage and sequencing decisions even as the exact percentage
          it predicts drifts from what is observed in a specific modern
          population, which is one of the main reasons GRACE 2.0 was
          developed — to periodically recalibrate the absolute risk
          estimates against contemporary data while keeping the same
          underlying variables.
        </p>
        <p>
          Several national quality-improvement audits (including the UK's
          Myocardial Ischaemia National Audit Project, MINAP) have used
          GRACE as a standard component of ACS care-pathway monitoring,
          tracking not just whether the score was calculated but whether the
          guideline-recommended action for that risk tier (early invasive
          strategy, specific antiplatelet regimen) was actually delivered —
          reflecting how deeply the score has become embedded in
          quality-of-care measurement, not just individual clinical
          decision-making.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li><strong>Derived before contemporary reperfusion practice matured:</strong> the original cohorts were assembled in the late 1990s and 2000s; absolute mortality rates in modern practice, with earlier revascularisation and more effective antithrombotic therapy, are somewhat lower than the original tables imply, even though the relative risk ordering between patients remains valid.</li>
          <li><strong>Point table vs. GRACE 2.0 discrepancy:</strong> as explained above, this calculator reproduces the classic discrete-point nomogram, not the continuous GRACE 2.0 regression used by the official online calculator; the two can diverge, especially near the boundaries between risk tiers.</li>
          <li><strong>Not a substitute for clinical assessment:</strong> the score does not capture frailty, bleeding risk, cognitive status, or patient preference, all of which materially affect whether an invasive strategy is appropriate, particularly in older or multimorbid patients.</li>
          <li><strong>Requires a confirmed ACS diagnosis:</strong> GRACE assumes the patient already has a working diagnosis of unstable angina, NSTEMI, or STEMI — it is not a tool for differentiating cardiac from non-cardiac chest pain (that role belongs to scores like HEART).</li>
          <li><strong>Does not assess bleeding risk:</strong> a high GRACE score justifying potent antithrombotic therapy must always be weighed against the patient's bleeding risk, which GRACE does not measure at all — separate tools such as the CRUSADE score or ARC-HBR criteria are used for that purpose.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Is this the same as the 'GRACE 2.0' calculator my hospital uses?",
            a: "Not necessarily. This tool implements the original, discrete point-band GRACE score (Granger 2003 / Eagle 2004), which is the version most widely taught and reproduced in guideline appendices. 'GRACE 2.0' (Fox et al, 2014) is a separate, continuous regression model used by the official gracescore.org calculator, and can give a slightly different numerical estimate. Both use the same eight input variables and lead to the same overall clinical conclusions in the great majority of cases.",
          },
          {
            q: "What GRACE score requires urgent angiography?",
            a: "Per the 2023 ESC ACS guidelines, a GRACE score above 140 (or the presence of another very-high-risk feature, such as haemodynamic instability or ongoing ischaemia) should prompt an early invasive strategy — angiography within 24 hours, or within 72 hours if 24 hours is not logistically achievable.",
          },
          {
            q: "Does a low GRACE score mean no angiography is needed?",
            a: "No. A low GRACE score (under 109) supports a more conservative, ischaemia-guided approach rather than immediate angiography, but most guidelines still recommend some form of risk stratification (such as a non-invasive stress test) before discharge, and any patient with recurrent symptoms should be re-evaluated regardless of their initial score.",
          },
          {
            q: "Can GRACE be used for STEMI as well as NSTEMI?",
            a: "Yes. GRACE was derived and validated across the full spectrum of ACS, including STEMI, NSTEMI, and unstable angina, though in STEMI the decision to proceed to primary PCI is usually made on clinical and ECG grounds well before a GRACE score would be calculated.",
          },
          {
            q: "Why does systolic blood pressure score points in the opposite direction to heart rate?",
            a: "Because low blood pressure in ACS is a marker of cardiogenic shock and carries the worst prognosis, while a very high blood pressure in this context does not carry the same mortality risk — the score is not a general haemodynamic scale, it is calibrated purely to the mortality actually observed at each value in the derivation cohort.",
          },
          {
            q: "Does the GRACE score predict bleeding risk?",
            a: "No. GRACE predicts mortality and ischaemic outcomes only. Bleeding risk should be assessed separately, for example with the CRUSADE score or the ARC-HBR (Academic Research Consortium for High Bleeding Risk) criteria, before deciding on the intensity of antithrombotic therapy.",
          },
        ]}
      />

      <RelatedTools
        slugs={["heart-score-calculator", "timi-score-calculator", "curb65-calculator"]}
      />

      <References
        items={[
          {
            text: "Granger CB, Goldberg RJ, Dabbous O, et al. Predictors of hospital mortality in the global registry of acute coronary events. Arch Intern Med. 2003;163(19):2345-2353.",
          },
          {
            text: "Eagle KA, Lim MJ, Dabbous OH, et al. A validated prediction model for all forms of acute coronary syndrome: estimating the risk of 6-month postdischarge death in an international registry. JAMA. 2004;291(22):2727-2733.",
          },
          {
            text: "Fox KAA, Fitzgerald G, Puymirat E, et al. Should patients with acute coronary disease be stratified for management according to their risk? Derivation, external validation and outcomes using the updated GRACE risk score. BMJ Open. 2014;4(2):e004425 (GRACE 2.0).",
          },
          {
            text: "Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720-3826.",
            href: "https://academic.oup.com/eurheartj/article/44/38/3720/7243210",
          },
          {
            text: "GRACE 2.0 ACS Risk Calculator — official online tool.",
            href: "https://www.gracescore.org/",
          },
        ]}
      />
    </>
  );
}
