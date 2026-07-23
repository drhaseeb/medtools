import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function TimiInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the TIMI Risk Score?</h2>
        <p>
          The TIMI Risk Score for Unstable Angina (UA) and Non-ST-Elevation
          Myocardial Infarction (NSTEMI) is a seven-point bedside tool that
          estimates a patient's short-term risk of a serious cardiac
          complication once a diagnosis of UA/NSTEMI is suspected or
          confirmed. It answers a narrow but critical question: among
          patients who already have acute coronary syndrome (ACS), who is
          most likely to die, re-infarct, or need urgent revascularization
          in the next two weeks, and therefore who should be prioritized for
          an early invasive strategy versus managed conservatively?
        </p>
        <p>
          Unlike scores designed to separate cardiac from non-cardiac chest
          pain in an undifferentiated population, TIMI was built and
          validated exclusively in patients with an established diagnosis of
          UA/NSTEMI. This distinction matters enormously for how the score
          should — and should not — be used, and it is discussed at length
          in the limitations section below.
        </p>

        <h2>History and Development</h2>
        <p>
          The score was derived and published in 2000 by Elliott Antman and
          colleagues on behalf of the Thrombolysis in Myocardial Infarction
          (TIMI) Study Group, in the <em>Journal of the American Medical
          Association</em>. It was built using data from 1,957 patients
          enrolled in the TIMI 11B trial and then externally validated in
          1,953 patients from the ESSENCE trial — both large, contemporary
          randomized trials of antithrombotic therapy in UA/NSTEMI. This
          derivation-and-validation design, using two independent trial
          cohorts rather than a single dataset, is one of the reasons the
          score has held up so well over more than two decades of subsequent
          use.
        </p>
        <p>
          At the time, ACS management was moving from a uniformly
          conservative, ischemia-guided approach toward selectively
          aggressive early angiography and revascularization for
          higher-risk patients. The TIMI investigators wanted a tool simple
          enough to calculate at the bedside from information already
          available within the first hour of assessment — history, ECG, and
          a single biomarker — that could reliably separate patients who
          would benefit most from an early invasive strategy from those who
          would not.
        </p>

        <h2>The Seven Components of the Score</h2>
        <p>
          The elegance of the TIMI score is that each of its seven variables
          carries exactly one point, with no weighting, so the total is a
          simple count from 0 to 7. Each of the following, if present, adds
          one point:
        </p>
        <ul>
          <li>
            <strong>Age 65 or older.</strong> Older patients have more
            extensive underlying coronary disease and worse outcomes for
            any given severity of presentation.
          </li>
          <li>
            <strong>Three or more traditional CAD risk factors.</strong>{" "}
            Family history of premature coronary disease, hypertension,
            hypercholesterolemia, diabetes mellitus, or current smoking —
            the same five factors used in most cardiovascular risk
            calculators, counted here as a simple threshold rather than a
            weighted score.
          </li>
          <li>
            <strong>Known coronary stenosis of 50% or more.</strong> A
            documented angiographic finding, prior myocardial infarction, or
            prior revascularization (PCI or CABG) all satisfy this
            criterion, since they all indicate the presence of established,
            flow-limiting coronary disease.
          </li>
          <li>
            <strong>Aspirin use in the preceding seven days.</strong> This is
            perhaps the least intuitive of the seven variables. It functions
            as a marker of higher baseline cardiovascular risk (aspirin was
            presumably prescribed for a reason) and, more specifically, of
            an ischemic event occurring despite background antiplatelet
            therapy — a red flag for an especially active thrombotic process
            or genuine aspirin resistance.
          </li>
          <li>
            <strong>Two or more anginal episodes in the prior 24 hours.</strong>{" "}
            Frequent, recurring, "stuttering" chest pain reflects an unstable
            atherosclerotic plaque with intermittent thrombus formation and
            embolization, rather than a single, static lesion.
          </li>
          <li>
            <strong>ST-segment deviation of 0.5&nbsp;mm or more.</strong> New
            or presumed-new horizontal ST depression, or transient ST
            elevation lasting under 20 minutes, on the presenting ECG —
            direct electrocardiographic evidence of active ischemia.
          </li>
          <li>
            <strong>Elevated cardiac biomarkers.</strong> A positive
            troponin (or, in the original 2000 cohort, CK-MB) confirms that
            myocardial necrosis has already occurred, which is what
            distinguishes NSTEMI from unstable angina.
          </li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 68-year-old man with hypertension, type 2 diabetes, and
          hyperlipidemia presents with two episodes of central chest
          tightness overnight. He takes daily aspirin for known coronary
          disease (prior PCI). His ECG shows 1&nbsp;mm of horizontal ST
          depression in the lateral leads, and his initial high-sensitivity
          troponin is mildly elevated.
        </p>
        <p>
          Scoring each criterion: age ≥65 (+1), ≥3 risk factors — hypertension,
          diabetes, hyperlipidemia (+1), known coronary stenosis from prior
          PCI (+1), aspirin in the last 7 days (+1), ≥2 anginal episodes in
          24 hours (+1), ST deviation ≥0.5&nbsp;mm (+1), and a positive
          troponin (+1). His total is <strong>7/7</strong>, placing him in
          the highest risk category with an estimated 14-day composite event
          rate of roughly 40.9% — this patient warrants an early invasive
          strategy, potent antiplatelet therapy, and prompt senior
          cardiology involvement.
        </p>

        <h2>Interpreting the Total Score</h2>
        <p>
          The total score (0–7) is conventionally grouped into three risk
          bands, each with a corresponding 14-day rate of the composite
          endpoint of all-cause mortality, new or recurrent myocardial
          infarction, or severe recurrent ischemia requiring urgent
          revascularization, exactly as reported in the original derivation
          and validation cohorts:
        </p>
        <ul>
          <li><strong>0–2 — Low risk:</strong> 4.7% (score 0–1) to 8.3% (score 2).</li>
          <li><strong>3–4 — Intermediate risk:</strong> 13.2% (score 3) to 19.9% (score 4).</li>
          <li><strong>5–7 — High risk:</strong> 26.2% (score 5) up to 40.9% (score 6–7).</li>
        </ul>
        <p>
          It is worth noting explicitly that a score of 0 or 1 does not, on
          its own, confirm that a patient is safe for discharge from the
          emergency department — TIMI was designed to stratify patients
          already carrying a UA/NSTEMI diagnosis, not to rule ACS in or out
          in an undifferentiated chest pain population. A separate,
          validated pathway (most commonly the HEART score, discussed below)
          should be used for that earlier triage decision.
        </p>

        <h2>Clinical Application and Current Guidelines</h2>
        <p>
          The TIMI score's original clinical purpose — deciding who needs
          early angiography — remains its main use today, though the
          guideline landscape around it has evolved considerably since
          2000. Both the 2023 ESC Guidelines for the management of acute
          coronary syndromes and the newer 2025 ACC/AHA/ACEP/NAEMSP/SCAI
          Guideline for the Management of Patients with Acute Coronary
          Syndromes now anchor the specific <em>timing</em> of invasive
          angiography primarily to the GRACE risk score, not TIMI. Under
          current guidance, an early invasive strategy (angiography within
          24 hours) is recommended for patients with a GRACE score above
          140 or other very-high-risk features (refractory angina,
          hemodynamic or electrical instability, mechanical complications —
          for whom angiography should be immediate, within 2 hours);
          patients who do not meet these thresholds but are still
          intermediate- or high-risk are generally taken for angiography
          before hospital discharge.
        </p>
        <p>
          The 2025 ACC/AHA guideline explicitly states that GRACE and TIMI
          are both "well validated" for risk stratification and "may be
          useful for helping to guide some therapeutic decisions," but adds
          the important caveat that neither should be used as a
          <em> diagnostic</em> test — they stratify risk within a population
          already suspected or confirmed to have ACS. In practice, this
          means TIMI today functions as a well-validated adjunct — useful
          for structuring the conversation about antiplatelet intensity,
          anticoagulation choice, and shared decision-making with the
          patient — rather than as the primary determinant of exactly which
          hour a patient goes to the catheterization laboratory.
        </p>
        <p>
          Score-driven management in practice generally follows this
          pattern:
        </p>
        <ul>
          <li>
            <strong>Low risk (0–2):</strong> A conservative,
            ischemia-guided strategy is often appropriate — dual antiplatelet
            therapy, risk-factor optimization, and objective ischemia
            testing (exercise or pharmacologic stress testing, or CT
            coronary angiography) prior to discharge, reserving invasive
            angiography for those with a positive stress test or recurrent
            symptoms.
          </li>
          <li>
            <strong>Intermediate risk (3–4):</strong> These patients derive a
            clear benefit from an early invasive strategy, generally within
            24–72 hours, together with dual antiplatelet therapy and
            parenteral anticoagulation (typically fondaparinux or a
            low-molecular-weight heparin, per current ESC and ACC/AHA
            dosing guidance).
          </li>
          <li>
            <strong>High risk (5–7):</strong> An early invasive strategy is
            strongly favored, ideally within 24 hours if the GRACE score
            also crosses the high-risk threshold; potent P2Y12 inhibition
            (ticagrelor, or prasugrel once the coronary anatomy is known),
            anticoagulation, and — in troponin-positive patients proceeding
            to PCI — a glycoprotein IIb/IIIa inhibitor may be considered on
            a case-by-case basis, together with prompt senior cardiology
            input.
          </li>
        </ul>

        <h2>TIMI Compared to HEART and GRACE</h2>
        <p>
          Three risk scores dominate acute coronary syndrome practice, and
          they answer three subtly different questions, which is the single
          most common source of confusion when they are used
          interchangeably.
        </p>
        <ul>
          <li>
            <strong>HEART score:</strong> Designed and validated in an
            undifferentiated emergency department chest pain population —
            patients in whom ACS is only a possibility, not yet a
            diagnosis. It incorporates the clinician's own gestalt
            impression of the history as one of its five components, which
            TIMI does not. For the initial triage question — "does this
            chest pain need any further cardiac workup at all?" — HEART
            consistently outperforms TIMI, which is why most modern
            emergency-department chest pain pathways use HEART (or a
            similar clinical decision pathway) first, and reserve TIMI for
            patients in whom ACS has already been diagnosed or is strongly
            suspected.
          </li>
          <li>
            <strong>GRACE score:</strong> A more complex, statistically
            weighted score (using continuous variables like heart rate,
            systolic blood pressure, and creatinine, rather than simple
            present/absent criteria) derived from a large international ACS
            registry. GRACE has consistently shown superior discrimination
            for mortality across the full spectrum of ACS, including
            STEMI, and — as described above — is now the score both major
            international ACS guidelines use to set the specific timing
            threshold for invasive angiography. GRACE requires a
            calculator or app to compute in practice, whereas TIMI can be
            tallied on a single hand.
          </li>
        </ul>
        <p>
          In everyday practice, a common and complementary approach is to
          use TIMI (or HEART, in the undifferentiated setting) as an
          easily-remembered bedside gestalt check, while calculating GRACE
          formally to set concrete timing decisions and to document
          risk-stratification in the notes — the two are not competitors so
          much as tools operating at different levels of precision.
        </p>

        <h2>Statistical Performance and Subsequent Validation</h2>
        <p>
          Beyond the original TIMI 11B derivation and ESSENCE validation,
          the score has been re-tested in numerous subsequent cohorts over
          the past two decades, including registries assembled well after
          the introduction of high-sensitivity troponin assays and
          contemporary antiplatelet regimens. Across this literature, the
          TIMI score consistently demonstrates a clear, statistically
          significant gradient of increasing event rates with increasing
          score — the core finding that has never been seriously
          challenged — even as the absolute event rates at each score level
          have drifted somewhat over time, generally downward, reflecting
          genuine improvements in background medical therapy (more potent
          antiplatelet agents, statins, and earlier revascularization) since
          2000 rather than any flaw in the score's discrimination. This is
          a normal and expected pattern for any risk score that has been in
          continuous use for a long period: the relative ranking of
          patients by risk remains valid even as the absolute numbers
          attached to each risk band shift with advances in treatment, which
          is one reason contemporary guidelines increasingly favor combining
          TIMI with a more frequently recalibrated tool such as GRACE for
          absolute risk estimation.
        </p>
        <p>
          Comparative studies measuring the area under the receiver
          operating characteristic curve (a standard measure of a score's
          ability to discriminate between patients who will and will not
          have an event) have generally found TIMI's discrimination to be
          adequate but modest compared with GRACE, which was specifically
          built with statistically weighted continuous variables for
          exactly this purpose. This is an expected and accepted trade-off:
          TIMI sacrifices some statistical discrimination for a level of
          bedside simplicity — seven yes/no questions, tallied by hand in
          under a minute — that a fully weighted logistic regression model
          like GRACE cannot match without a calculator or smartphone app.
        </p>

        <h2>Worked Comparison: Low- Versus High-Risk Presentations</h2>
        <p>
          It is instructive to contrast two patients at opposite ends of
          the score to see how the same diagnosis (NSTEMI) can carry very
          different short-term risk. A 40-year-old smoker with no other
          risk factors, no prior cardiac history, presenting with a single
          episode of chest pain, a normal ECG, and a modestly elevated
          troponin scores only 1 point (positive biomarker) — a 14-day
          event rate of roughly 4.7%, supporting a more conservative
          initial approach with close follow-up and risk-factor
          modification. Contrast this with a 72-year-old patient with
          diabetes, hypertension, and hyperlipidemia (three risk factors),
          known coronary disease, on aspirin, with recurrent chest pain,
          ST depression, and a clearly elevated troponin — six points, and
          a 14-day event rate above 40%. Both patients technically carry
          the same NSTEMI diagnosis, but the score makes explicit just how
          differently their short-term trajectories are likely to unfold,
          and therefore how differently they should be triaged, monitored,
          and treated in the following 24 to 72 hours.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Not for STEMI.</strong> A separate "TIMI Risk Score for
            STEMI" exists and uses entirely different variables; the score
            described here applies only to UA/NSTEMI. ST-elevation MI
            requires immediate reperfusion therapy regardless of any risk
            score.
          </li>
          <li>
            <strong>Not a diagnostic or ED-triage tool.</strong> TIMI was
            derived in patients already diagnosed with UA/NSTEMI. Applying
            it to undifferentiated chest pain patients — where the pretest
            probability of ACS is much lower and non-cardiac causes
            dominate — was not how it was validated and performs poorly
            for that purpose; use HEART or a similar pathway instead for
            that initial decision.
          </li>
          <li>
            <strong>Equal weighting is a simplification.</strong> Each
            criterion contributes exactly one point regardless of its
            individual strength of association with outcome. A positive
            troponin and a history of aspirin use are treated as
            numerically equivalent, even though few clinicians would
            consider them equally informative in isolation — the score's
            validated predictive power comes from the sum, not from any
            single component.
          </li>
          <li>
            <strong>Troponin assay era.</strong> The original cohort used
            older-generation troponin and CK-MB assays. Modern
            high-sensitivity troponin assays detect smaller degrees of
            myocardial injury than were available in 2000; current
            guidance is simply to apply the "elevated cardiac markers"
            point whenever a validated high-sensitivity assay returns above
            the sex-specific 99th-percentile upper reference limit.
          </li>
          <li>
            <strong>Does not replace clinical gestalt or the full clinical
            picture.</strong> Hemodynamic instability, ongoing refractory
            pain, and mechanical complications warrant immediate invasive
            management regardless of the calculated TIMI score.
          </li>
        </ul>

        <h2>Documentation and Practical Tips</h2>
        <p>
          Document each of the seven criteria individually rather than only
          the final total — this both demonstrates the clinical reasoning
          behind the score and allows a colleague reviewing the chart later
          to see exactly which risk factors were present, which matters if
          the clinical picture (for example, a repeat troponin) changes a
          few hours later. Because the score's seven inputs are usually all
          available from the initial assessment — history, a basic
          cardiovascular risk-factor review, the presenting ECG, and the
          first troponin — TIMI can typically be finalized within the first
          hour of a patient's emergency department stay, well before
          admission decisions need to be made.
        </p>
        <p>
          Recalculating the score is rarely necessary once the diagnosis of
          UA/NSTEMI and the initial workup are complete, since its inputs
          are largely fixed at presentation (age, history, and the index
          ECG and troponin). If a repeat troponin later becomes positive
          having been initially normal, this simply confirms the NSTEMI
          diagnosis and should prompt a formal recalculation, since it adds
          a point that may shift the patient into a higher risk band.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can I use the TIMI UA/NSTEMI score for a patient with ST-elevation MI (STEMI)?",
            a: "No. A separate, differently weighted 'TIMI Risk Score for STEMI' exists. The score on this page is validated only for unstable angina and NSTEMI. STEMI always requires immediate reperfusion therapy (primary PCI or thrombolysis) regardless of any risk score.",
          },
          {
            q: "Does the TIMI score account for high-sensitivity troponin?",
            a: "The original 2000 score predates widespread high-sensitivity troponin (hs-cTn) assays. Current practice simply applies the biomarker point whenever a validated hs-cTn assay returns above the sex-specific 99th-percentile upper reference limit — a positive hs-cTn essentially guarantees at least one point and often correlates with other positive criteria, pushing the total toward the intermediate-to-high range.",
          },
          {
            q: "Is a TIMI score of 0–1 enough to safely discharge a patient with chest pain?",
            a: "Not on its own. TIMI was derived in patients already diagnosed with UA/NSTEMI, not to determine whether ACS is present at all. For that earlier triage decision in undifferentiated chest pain, use a validated ED chest-pain pathway such as HEART, ideally combined with serial high-sensitivity troponin testing.",
          },
          {
            q: "Should TIMI or GRACE be used to decide the timing of angiography?",
            a: "Current international guidance (2023 ESC and 2025 ACC/AHA ACS guidelines) anchors the specific timing threshold for invasive angiography to the GRACE score (early invasive <24h for GRACE >140), with TIMI serving as a well-validated, easily calculated adjunct rather than the primary timing determinant.",
          },
          {
            q: "Does aspirin use in the past 7 days really increase risk?",
            a: "It is counterintuitive but well validated: an ischemic event occurring despite background aspirin therapy suggests either a particularly aggressive thrombotic process, a higher baseline cardiovascular risk profile (aspirin was likely prescribed for a reason), or possible aspirin resistance — all of which are associated with worse 14-day outcomes in the original derivation cohort.",
          },
        ]}
      />

      <RelatedTools
        slugs={["heart-score-calculator", "grace-risk-score", "chadsvasc-score"]}
      />

      <References
        items={[
          {
            text: "Antman EM, Cohen M, Bernink PJ, et al. The TIMI risk score for unstable angina/non-ST elevation MI: a method for prognostication and therapeutic decision making. JAMA. 2000;284(7):835-842.",
          },
          {
            text: "Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720-3826.",
            href: "https://academic.oup.com/eurheartj/article/44/38/3720/7243210",
          },
          {
            text: "Rao SV, O'Donoghue ML, Ruel M, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation. 2025;151(13):e771-e862.",
            href: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309",
          },
          {
            text: "Six AJ, Backus BE, Kelder JC. Chest pain in the emergency room: value of the HEART score. Neth Heart J. 2008;16(6):191-196.",
          },
          {
            text: "Gulati M, Levy PD, Mukherjee D, et al. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation and Diagnosis of Chest Pain. Circulation. 2021;144(22):e368-e454.",
          },
        ]}
      />
    </>
  );
}
