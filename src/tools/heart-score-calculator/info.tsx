import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function HeartScoreInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the HEART Score?</h2>
        <p>
          The HEART score is a five-part clinical decision tool used in
          emergency departments to estimate the short-term risk of a Major
          Adverse Cardiac Event (MACE) in patients presenting with chest
          pain. Its purpose is deliberately narrower and earlier in the
          diagnostic pathway than most other cardiac risk scores: rather
          than stratifying patients who already carry a diagnosis of acute
          coronary syndrome, HEART is applied at the very first assessment
          of undifferentiated chest pain, before any diagnosis has been
          made, to help decide who can be safely discharged and who needs
          further inpatient workup.
        </p>
        <p>
          Chest pain accounts for a very large share of emergency department
          presentations worldwide, and the overwhelming majority of these
          patients do not have acute coronary syndrome — musculoskeletal
          pain, gastro-oesophageal reflux, anxiety, and other benign causes
          are far more common. Before HEART, the practical response to this
          uncertainty was often defensive: admit broadly, observe for
          extended periods, and perform stress testing "just in case." This
          approach caught genuine ACS but at an enormous cost in
          overcrowding, unnecessary testing, false-positive results, and
          patient inconvenience. HEART was built specifically to allow safe,
          confident discharge of a large proportion of low-risk patients
          directly from the emergency department.
        </p>

        <h2>History and Development</h2>
        <p>
          The HEART score was developed and first published in 2008 by Arend
          Six, Barbra Backus, and Jacob Kelder in the <em>Netherlands Heart
          Journal</em>, under the title "Chest pain in the emergency room:
          value of the HEART score." The authors deliberately designed it
          around information available to any emergency physician within
          minutes of a patient's arrival: a directed history, the
          presenting ECG, the patient's age, a review of cardiovascular risk
          factors, and a single troponin measurement.
        </p>
        <p>
          A defining feature — and, at the time, a somewhat unconventional
          choice — was the deliberate inclusion of clinical gestalt as a
          scored variable. Most risk scores exclude subjective clinical
          impression in favor of purely "objective" criteria, on the theory
          that gestalt cannot be standardized between observers. The HEART
          authors took the opposite view: an experienced clinician's overall
          impression of whether a history sounds cardiac carries genuine
          diagnostic information that a checklist of individual symptom
          descriptors cannot fully capture, and excluding it would throw away
          real signal. This design choice was subsequently validated in a
          multinational study led by Backus and colleagues, published in the
          <em> International Journal of Cardiology</em> in 2013, which
          confirmed HEART's performance across multiple European emergency
          departments and cemented its place in international practice.
        </p>

        <h2>The Five Components of the Score</h2>
        <p>
          HEART is an acronym for its five components, each scored 0, 1, or
          2 points, for a total possible range of 0 to 10:
        </p>
        <ul>
          <li>
            <strong>H — History.</strong> The only component based on
            clinical gestalt rather than a discrete finding. A history
            regarded as <em>highly suspicious</em> — classic substernal
            pressure radiating to the arm or jaw, associated with
            diaphoresis, brought on by exertion and relieved by rest or
            nitrates — scores 2. A <em>moderately suspicious</em> history
            with a mix of typical and atypical features scores 1. A history
            regarded as <em>slightly suspicious</em> — sharp, pleuritic,
            positional, or reproducible on palpation — scores 0.
          </li>
          <li>
            <strong>E — ECG.</strong> Significant ST-segment depression (new
            or presumed new) scores 2. Non-specific repolarization
            abnormalities — T-wave inversion, left bundle branch block,
            paced rhythm, or a pattern consistent with digoxin effect —
            score 1. A normal ECG scores 0.
          </li>
          <li>
            <strong>A — Age.</strong> Age 65 or older scores 2; 45 to 64
            scores 1; under 45 scores 0. This mirrors the well-established
            relationship between advancing age and coronary artery disease
            prevalence.
          </li>
          <li>
            <strong>R — Risk factors.</strong> The traditional
            cardiovascular risk factors — hypertension,
            hypercholesterolemia, diabetes mellitus, obesity (BMI &gt; 30),
            current or recent smoking, and family history of premature
            coronary disease — are counted. Three or more risk factors, or
            any known history of atherosclerotic disease (prior MI, PCI,
            CABG, stroke, or peripheral arterial disease), scores 2. One or
            two risk factors scores 1. No known risk factors scores 0.
          </li>
          <li>
            <strong>T — Troponin.</strong> A troponin more than three times
            the assay's upper reference limit scores 2. A troponin between
            one and three times the upper limit scores 1. A troponin at or
            below the upper reference limit scores 0.
          </li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 58-year-old woman with hypertension and type 2 diabetes presents
          with two hours of central chest heaviness radiating to her left
          arm, associated with sweating, which began while climbing stairs.
          Her ECG is normal. Her initial high-sensitivity troponin is at the
          upper limit of the reference range.
        </p>
        <p>
          Her history is highly suspicious for cardiac chest pain (H = 2).
          Her ECG is normal (E = 0). She is 58, in the 45–64 band (A = 1).
          She has two risk factors — hypertension and diabetes (R = 1). Her
          troponin is at, not above, the reference limit (T = 0). Her total
          is <strong>H2 + E0 + A1 + R1 + T0 = 4</strong>, placing her in the
          intermediate-risk band. Despite a reassuring ECG and a
          normal initial troponin, her total score indicates she should be
          admitted for serial troponin testing and further evaluation rather
          than discharged directly — illustrating precisely why HEART
          integrates several data points rather than relying on any single
          reassuring result.
        </p>

        <h2>Interpreting the Total Score</h2>
        <p>
          The HEART score predicts the risk of MACE — defined in the
          original and validation studies as all-cause mortality, myocardial
          infarction, or coronary revascularization (PCI or CABG) — within
          six weeks of presentation. The total is grouped into three bands:
        </p>
        <ul>
          <li>
            <strong>0–3 — Low risk:</strong> Approximately 0.9–1.7% MACE risk
            in the original derivation and prospective validation cohorts.
            This is generally considered an acceptable threshold for safe
            discharge from the emergency department without further
            inpatient testing.
          </li>
          <li>
            <strong>4–6 — Intermediate risk:</strong> Approximately 12–17%
            MACE risk. These patients typically warrant admission (or
            placement in a dedicated chest pain observation unit) for serial
            troponin measurements and, in most cases, provocative stress
            testing or coronary CT angiography before a decision to
            discharge.
          </li>
          <li>
            <strong>7–10 — High risk:</strong> Approximately 50–65% MACE
            risk. These patients should be treated as having probable acute
            coronary syndrome, with admission, dual antiplatelet therapy
            where indicated, and an early invasive strategy per current ACS
            guidelines.
          </li>
        </ul>
        <p>
          It is worth being transparent that "low risk" is not "no risk": a
          score of 0–3 still carries a small but real residual MACE
          probability, and several more recent real-world validation cohorts
          have reported MACE rates modestly above the original 0.9–1.7%
          figure at a HEART score of exactly 3 (up to roughly 4% in one
          single-site retrospective series). This is precisely why the
          HEART Pathway (below) pairs the score with objective serial
          biomarker testing rather than relying on the score in isolation,
          and why the score is always described as a decision <em>aid</em>
          rather than a stand-alone rule.
        </p>

        <h2>The HEART Pathway and High-Sensitivity Troponin</h2>
        <p>
          The "HEART Pathway" refers to the combination of a HEART score
          with structured serial troponin testing, and it is this
          combination — not the score alone — that has been most
          rigorously studied for safe early discharge. In the pathway,
          patients with a HEART score of 0–3 <em>and</em> two negative
          troponin measurements (classically at 0 and 3 hours, though
          modern high-sensitivity assays permit 0/1-hour or 0/2-hour
          protocols in validated centers) have a 30-day MACE risk
          approaching zero in multiple prospective studies, supporting
          direct discharge with outpatient follow-up rather than admission.
          The 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the
          Evaluation and Diagnosis of Chest Pain explicitly endorses the use
          of validated clinical decision pathways — citing HEART among the
          examples — as a routine part of chest pain triage in both the
          emergency department and outpatient settings, a position carried
          forward into the 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the
          Management of Patients with Acute Coronary Syndromes, which
          references the same risk-tier definitions.
        </p>

        <h2>Clinical Applications Beyond the Emergency Department</h2>
        <p>
          While HEART's primary home is the emergency department, its
          influence extends further. Chest pain observation units and rapid
          access chest pain clinics frequently use a HEART score calculated
          at the point of referral to prioritize which patients need same-day
          assessment versus a routine outpatient slot. Some ambulance and
          prehospital services have also begun incorporating simplified
          HEART-style assessments to guide transport destination decisions,
          although the evidence base for prehospital use is considerably
          less mature than for in-hospital application, since a formal
          troponin result and full ECG interpretation are rarely available
          to paramedics.
        </p>
        <p>
          The score is also widely used as a teaching framework: because it
          forces the assessor to separately consider history, ECG,
          demographics, risk-factor burden, and biomarker status, it is
          often used to structure how trainees present and reason through
          chest pain cases, independent of whether the final score is
          formally documented in every case.
        </p>

        <h2>HEART Compared to TIMI and GRACE</h2>
        <p>
          The TIMI risk score predates HEART by eight years and was, for a
          period, used off-label to triage undifferentiated chest pain in
          the emergency department simply because no better validated
          alternative existed. However, TIMI was derived exclusively in
          patients already diagnosed with unstable angina or NSTEMI — a
          population with a much higher pretest probability of disease than
          a typical emergency department chest pain cohort. When applied to
          undifferentiated patients, TIMI performs noticeably worse at
          identifying a truly low-risk group than HEART does, largely
          because it omits any measure of clinical gestalt and was never
          validated for this earlier triage question. HEART, purpose-built
          and validated on exactly this population, has become the preferred
          initial tool in most modern emergency medicine chest-pain
          pathways, with TIMI reserved for patients in whom ACS has already
          been diagnosed.
        </p>
        <p>
          The GRACE score, by contrast, is a more complex, statistically
          weighted tool built from an international ACS registry, using
          continuous physiological variables (heart rate, systolic blood
          pressure, creatinine) rather than simple categorical criteria.
          GRACE offers superior discrimination for mortality across the full
          spectrum of confirmed ACS and is the score current international
          guidelines use to set the specific timing of invasive angiography
          — but, like TIMI, it was not designed or validated for the
          earlier question of whether a patient with undifferentiated chest
          pain has ACS at all. In short: HEART for initial ED triage, then
          TIMI and/or GRACE once a diagnosis of ACS is established.
        </p>

        <h2>Validation Literature and Real-World Performance</h2>
        <p>
          Beyond the original 2008 derivation, the HEART score has been
          subjected to more external validation than almost any other chest
          pain decision tool. The 2013 multinational prospective validation
          by Backus and colleagues, conducted across ten Dutch hospitals in
          more than 2,400 patients, confirmed the three risk bands and
          their approximate MACE rates, and importantly showed that the
          score's performance was consistent across different hospital
          types (academic centers and community hospitals alike) — a
          reassuring finding, since a tool that only performs well in the
          specialized center where it was invented would be of limited
          practical value. Subsequent meta-analyses pooling dozens of
          validation cohorts from North America, Europe, and Australasia
          have generally confirmed a "low risk" MACE rate below 2%, though,
          as noted above, individual site-level figures do show some
          spread, which is expected of any clinical prediction rule applied
          across genuinely different patient populations and local
          troponin assays.
        </p>
        <p>
          One consistent theme across this validation literature is that
          the HEART score performs best when its individual components are
          assessed by a trained, experienced clinician following a
          structured definition of each category, rather than applied
          casually. Several studies examining inter-rater agreement have
          found that the "History" and, to a lesser extent, "ECG"
          components carry the most between-observer variability, which is
          precisely why many emergency departments now use structured
          proformas or electronic decision-support prompts listing the
          specific descriptive criteria for each point value, rather than
          leaving the scoring purely to individual habit or memory.
        </p>

        <h2>Atypical Presentations and Health Equity Considerations</h2>
        <p>
          A recurring concern raised in the literature is that any score
          incorporating clinical gestalt about "typical" cardiac symptoms
          risks systematically under-scoring patients whose presentations
          differ from the classic substernal-pressure-radiating-to-the-arm
          pattern that the "highly suspicious" category was written to
          describe. Women, older adults, and patients with diabetes are all
          recognized to present more frequently with atypical
          symptoms — dyspnea, nausea, fatigue, or epigastric discomfort
          rather than classic chest pressure — and a clinician unfamiliar
          with this pattern may reflexively score the History component as
          only "slightly" or "moderately" suspicious even when the
          underlying event is genuinely cardiac. This is not a flaw unique
          to HEART — it reflects a well-documented, broader pattern of
          under-recognition of atypical ACS presentations across
          medicine — but it is an important reason why an isolated low
          History score in a patient from one of these groups should
          prompt extra caution rather than reflexive reassurance,
          particularly when other objective findings (ECG changes, elevated
          troponin, or a strongly concerning risk-factor profile) are
          present.
        </p>

        <h2>Limitations and Special Populations</h2>
        <ul>
          <li>
            <strong>Subjectivity of the History component.</strong> Because
            the "H" criterion is explicitly based on clinical gestalt, it
            introduces genuine inter-observer variability — two clinicians
            reviewing the same history could reasonably assign different
            scores. This is an accepted trade-off for the added predictive
            value gestalt provides, but it means HEART is less purely
            "objective" than scores such as GRACE.
          </li>
          <li>
            <strong>Not validated for STEMI, unstable patients, or a
            confirmed ACS diagnosis.</strong> Patients with ST-elevation MI,
            hemodynamic instability, or an already-confirmed diagnosis of
            ACS should proceed directly to guideline-directed management;
            the score's derivation cohort specifically excluded patients who
            were already known to have STEMI.
          </li>
          <li>
            <strong>Chronic kidney disease and baseline troponin
            elevation.</strong> Patients with renal impairment or other
            chronic conditions that cause baseline troponin elevation can
            score points on the "T" criterion without an acute event; the
            score performs less reliably in this population and should be
            interpreted alongside a known baseline troponin trend where
            available.
          </li>
          <li>
            <strong>Real-world validation shows some drift from the
            original figures.</strong> As noted above, contemporary
            single-site cohorts have reported MACE rates at a HEART score of
            3 modestly higher than the original derivation studies — a
            reminder that any clinical score's real-world performance can
            vary by population, and that the score should always inform,
            not replace, clinical judgement.
          </li>
          <li>
            <strong>Known coronary disease can still score low.</strong> It
            is mathematically possible for a patient with previously stented
            coronary disease to score only 3 (for example: History 0, ECG 0,
            Age 0, Risk factors 2 for known atherosclerotic disease, Troponin
            0). Many institutions require a more comprehensive evaluation for
            patients with known coronary disease regardless of a technically
            low score.
          </li>
        </ul>

        <h2>Documentation and Practical Tips</h2>
        <p>
          As with any clinical score built from multiple subjective and
          objective inputs, the individual component values are at least as
          clinically useful as the final total, and both should be
          documented explicitly — for example "H1 E0 A2 R1 T0 = 4" rather
          than only "HEART 4." This allows a colleague reviewing the chart
          later, or the clinician making the eventual discharge decision, to
          see immediately which specific finding (age, risk factors, an
          equivocal history) is driving an intermediate score, rather than
          having to re-derive the components from scratch. It is also good
          practice to record the specific reasoning behind the History
          score in a sentence or two, given how much inter-observer
          variability this component in particular can carry — "history
          scored as highly suspicious given classic exertional pressure
          with radiation and diaphoresis" is far more useful to the next
          clinician than the bare number 2.
        </p>
        <p>
          Because the score depends on a troponin result, it cannot be
          finalized instantaneously at triage — the History, ECG, Age, and
          Risk factor components can all be scored within the first few
          minutes, but the Troponin component requires waiting for the
          laboratory (or point-of-care) result, which typically takes
          somewhere between 15 minutes and an hour depending on the
          assay and local laboratory turnaround. Many departments therefore
          calculate a "provisional" four-component score at the bedside to
          guide immediate initial decisions (further monitoring, repeat ECG,
          analgesia), and finalize the full HEART score once the troponin
          returns.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can I discharge a patient with a HEART score of 3 who has known coronary stents?",
            a: "It is mathematically possible to score a 3 even with known coronary disease (for example History 0, ECG 0, Age 0, Risk factors 2, Troponin 0). However, clinical judgement must prevail — many institutions require a more comprehensive evaluation for patients with known coronary disease regardless of a technically low HEART score.",
          },
          {
            q: "Is the History component based on the patient's or the doctor's assessment?",
            a: "The History score is explicitly based on the examining clinician's own gestalt interpretation of the presenting story, not a checklist the patient completes. This deliberate design choice reflects the original authors' view that an experienced clinician's overall impression carries genuine diagnostic value beyond a simple list of symptom descriptors.",
          },
          {
            q: "Does HEART replace the need for serial troponin testing?",
            a: "No. The strongest evidence for safe early discharge comes from the 'HEART Pathway' — a HEART score of 0-3 combined with two negative serial troponin measurements (0/3h, or 0/1h with a validated high-sensitivity assay) — not from the HEART score in isolation.",
          },
          {
            q: "Can HEART be used for patients with confirmed STEMI or already-diagnosed ACS?",
            a: "No. HEART was derived and validated in patients with undifferentiated chest pain before any diagnosis was made. STEMI requires immediate reperfusion regardless of any score, and patients with an already-confirmed ACS diagnosis should be risk-stratified with TIMI or GRACE instead.",
          },
          {
            q: "How reliable is a HEART score of 0-3 in real-world practice?",
            a: "The original and validation studies reported a 0.9-1.7% MACE risk for scores 0-3, but some more recent single-site cohorts have reported figures up to roughly 4%. This variability underlines why the score is used as a decision aid alongside serial troponin testing and clinical judgement, rather than as a stand-alone discharge rule.",
          },
        ]}
      />

      <RelatedTools
        slugs={["timi-score-calculator", "grace-risk-score", "chadsvasc-score"]}
      />

      <References
        items={[
          {
            text: "Six AJ, Backus BE, Kelder JC. Chest pain in the emergency room: value of the HEART score. Neth Heart J. 2008;16(6):191-196.",
          },
          {
            text: "Backus BE, Six AJ, Kelder JC, et al. A prospective validation of the HEART score for chest pain patients at the emergency department. Int J Cardiol. 2013;168(3):2153-2158.",
          },
          {
            text: "Gulati M, Levy PD, Mukherjee D, et al. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation and Diagnosis of Chest Pain. Circulation. 2021;144(22):e368-e454.",
          },
          {
            text: "Rao SV, O'Donoghue ML, Ruel M, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation. 2025;151(13):e771-e862.",
            href: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309",
          },
          {
            text: "Antman EM, Cohen M, Bernink PJ, et al. The TIMI risk score for unstable angina/non-ST elevation MI: a method for prognostication and therapeutic decision making. JAMA. 2000;284(7):835-842.",
          },
        ]}
      />
    </>
  );
}
