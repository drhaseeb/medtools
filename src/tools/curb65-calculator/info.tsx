import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function Curb65Info() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is CURB-65?</h2>
        <p>
          Community-acquired pneumonia (CAP) ranges enormously in severity —
          from a mild chest infection that clears with a five-day course of
          oral antibiotics at home, to fulminant septic shock requiring
          intensive care. The first, and arguably most consequential,
          decision a clinician makes when a patient presents with CAP is not
          which antibiotic to prescribe, but where the patient should be
          treated: at home, on a general ward, or in a high-dependency or
          intensive care setting. CURB-65 is a five-variable clinical
          prediction rule, championed by the British Thoracic Society (BTS),
          designed to make that decision objective and reproducible rather
          than dependent on an individual clinician's gestalt.
        </p>
        <p>
          Its enduring popularity comes from its simplicity: all five
          variables can be obtained from a basic set of observations, a
          simple bedside cognitive check, and a single blood test — no
          arterial blood gas, and none of the extensive comorbidity
          weighting required by its main competitor, the Pneumonia Severity
          Index (PSI).
        </p>

        <h2>History and Development</h2>
        <p>
          CURB-65 was developed by W. S. Lim and colleagues and published in{" "}
          <em>Thorax</em> in 2003, building on an earlier, hospital-only
          version (the "CURB" score, without the age criterion) that had been
          derived from British Thoracic Society audit data in the 1990s. The
          2003 study, a prospective, multicentre validation across the UK,
          New Zealand, and the Netherlands, added age ≥65 as a fifth
          criterion and confirmed the score's ability to stratify over 1,000
          patients with CAP into low-, moderate-, and high-risk groups with
          clearly separated 30-day mortality rates. The score's name is a
          mnemonic for its five components: Confusion, Urea, Respiratory
          rate, Blood pressure, and age 65 or older.
        </p>

        <h2>How the Score Is Calculated</h2>
        <p>
          One point is awarded for each of the following five criteria that
          is present, for a maximum score of 5:
        </p>
        <ul>
          <li><strong>C — Confusion (1 point):</strong> new disorientation in person, place, or time, or an Abbreviated Mental Test Score (AMTS) of 8 or less. New confusion in the context of an acute infection reflects either hypoxaemia, hypoperfusion, or sepsis-associated encephalopathy, and is a well-recognised marker of severe illness across many acute conditions, not only pneumonia.</li>
          <li><strong>U — Urea (1 point):</strong> serum urea above 7 mmol/L (approximately 19–20 mg/dL blood urea nitrogen). An elevated urea in pneumonia typically reflects dehydration, pre-renal acute kidney injury from reduced perfusion, or increased protein catabolism from severe systemic infection — importantly, it is measured because it independently predicts mortality, not merely because it reflects renal function.</li>
          <li><strong>R — Respiratory rate (1 point):</strong> 30 breaths per minute or higher. Tachypnoea is one of the earliest and most sensitive markers of physiological decompensation in respiratory infection, often preceding measurable falls in oxygen saturation.</li>
          <li><strong>B — Blood pressure (1 point):</strong> systolic blood pressure below 90 mmHg, or diastolic blood pressure 60 mmHg or below. Hypotension in pneumonia signals septic shock — the infection has produced systemic vasodilation and capillary leak severe enough to compromise perfusion.</li>
          <li><strong>65 — Age (1 point):</strong> 65 years or older. Advancing age is associated with immunosenescence, reduced physiological reserve, and a higher burden of cardiopulmonary comorbidity, all of which independently increase mortality from pneumonia.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 71-year-old woman presents with cough, fever, and increasing
          breathlessness. She is oriented and conversing normally
          (AMTS not reduced), her urea is 8.2 mmol/L, her respiratory rate is
          24/min, and her blood pressure is 118/74 mmHg.
        </p>
        <p>
          Scoring: no confusion (0), urea &gt;7 mmol/L (+1), respiratory rate
          under 30 (0), blood pressure not low (0), age ≥65 (+1). Her{" "}
          <strong>total CURB-65 score is 2</strong>, placing her in the
          intermediate-risk category with an approximate 30-day mortality of
          9%. Current guidance supports either a short-stay hospital
          admission or closely supervised outpatient management (for example
          via a "hospital at home" or virtual ward pathway where available),
          rather than either simple discharge or full inpatient admission —
          illustrating exactly the intermediate-tier decision CURB-65 is
          designed to support.
        </p>

        <h2>Interpreting the Score</h2>
        <p>
          The total score maps onto three risk tiers, each with an associated
          approximate 30-day mortality drawn from the original Lim 2003
          validation cohort:
        </p>
        <ul>
          <li><strong>Score 0–1 (low risk):</strong> 30-day mortality approximately 0.7–2.1%. Outpatient (oral antibiotic) treatment is usually appropriate provided the patient can tolerate oral intake, is not hypoxic, and has adequate social support for safe recovery at home.</li>
          <li><strong>Score 2 (intermediate risk):</strong> 30-day mortality approximately 9%. Short-stay inpatient admission, or a closely supervised outpatient/ambulatory pathway, is generally recommended.</li>
          <li><strong>Score 3 (high risk):</strong> 30-day mortality approximately 14.5%. Hospital admission is recommended, with assessment for whether the severity warrants escalation to a higher level of care.</li>
          <li><strong>Score 4–5 (severe, critical risk):</strong> 30-day mortality 40–57%. Urgent admission with consideration of HDU/ICU-level care is required, alongside prompt, broad-spectrum intravenous antibiotics and close monitoring for respiratory failure and septic shock.</li>
        </ul>

        <h2>The CRB-65 Alternative</h2>
        <p>
          In primary care or any setting without immediate access to a urea
          measurement, the simplified CRB-65 score omits the urea criterion
          entirely, leaving a maximum score of 4 (Confusion, Respiratory
          rate, Blood pressure, age ≥65). A CRB-65 of 0 is associated with a
          low enough mortality risk to support management in the community
          with follow-up, while any score of 1 or more should prompt
          consideration of hospital referral for further assessment — this
          makes CRB-65 particularly useful for GPs deciding, from a home
          visit, whether a patient needs same-day hospital assessment.
        </p>

        <h2>Guideline Status</h2>
        <p>
          CURB-65 was endorsed in the UK's NICE guideline CG191 (2014,
          reviewed 2019), which has since been formally replaced by the
          broader NICE guideline NG250 (<em>Pneumonia: diagnosis and
          management</em>), published in September 2025. NG250 continues to
          recommend CURB-65 (alongside clinical judgement) for assessing
          severity in patients admitted to hospital, while shifting some
          related recommendations — for example, basing the choice of
          antibiotic more directly on overall clinical severity assessment
          rather than a rigid CRB65/CURB65 cut-off alone, and adding a role
          for CRP or procalcitonin to monitor treatment response in
          hospitalised patients. The core CURB-65 scoring criteria and risk
          tiers described in this article are unchanged from the original
          2003 derivation.
        </p>

        <h2>Why Site-of-Care Decisions Matter So Much</h2>
        <p>
          It is worth pausing on why a five-variable bedside score has such
          an outsized role in pneumonia management. Under-triaging a
          high-risk patient to home treatment risks a preventable death from
          untreated septic shock or respiratory failure; over-triaging a
          genuinely low-risk patient to hospital admission exposes them to
          the well-documented harms of unnecessary hospitalisation —
          hospital-acquired infections (including, notably, a small but real
          risk of acquiring a different, often more resistant, pathogen),
          venous thromboembolism from immobility, delirium in older patients
          unfamiliar with an unfamiliar environment, and the simple
          opportunity cost of an occupied hospital bed during periods of high
          demand. A validated, reproducible score reduces both types of
          error compared with unaided clinical judgement, which is why
          national audits have consistently shown that formal CURB-65
          documentation is associated with more appropriate admission
          decisions than clinical judgement alone, particularly among junior
          clinicians early in training.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          CURB-65 is calculated at first assessment of any patient with
          suspected or confirmed community-acquired pneumonia — in the
          emergency department, on the general medical take, or by a
          general practitioner assessing a patient at home or in clinic. It
          directly informs the site-of-care decision (home, ward, or
          escalated care), the urgency and route of antibiotic
          administration (oral versus intravenous), and the intensity of
          initial monitoring. Many hospitals also link the score to local
          antibiotic protocols, since national and local antimicrobial
          guidance typically differentiates first-line therapy for
          low-severity CAP (commonly amoxicillin or a macrolide) from
          moderate-to-high-severity CAP (typically a beta-lactam plus a
          macrolide, or a respiratory fluoroquinolone in specific
          circumstances).
        </p>

        <h2>Comparison to the Pneumonia Severity Index (PSI)</h2>
        <p>
          The Pneumonia Severity Index, developed slightly earlier in the
          United States, uses around 20 variables — including specific
          comorbidities, laboratory values, and a two-step risk
          stratification process — to predict mortality with somewhat
          greater precision than CURB-65, particularly at identifying truly
          low-risk patients who can safely avoid admission. Its complexity,
          however, makes it slower to calculate at the bedside and less
          practical in a busy emergency department without integrated
          electronic calculation. The Infectious Diseases Society of America
          (IDSA) guidelines have historically favoured PSI, while UK and
          many European guidelines favour CURB-65 for its speed and
          simplicity; in practice, both are validated, and either may be
          reasonable depending on local workflow and familiarity.
        </p>

        <h2>Performance Across Different Patient Groups</h2>
        <p>
          CURB-65 has been externally validated in dozens of cohorts across
          many countries since 2003, and its overall performance has held up
          well, but several specific populations deserve mention. In elderly
          nursing-home residents, the age criterion alone means many
          residents automatically start at 1 point regardless of how unwell
          they otherwise appear, which can push mildly-unwell patients into
          the "intermediate" category more readily than in a younger
          population — clinicians working in this setting often weight the
          other four criteria, and the overall clinical picture, more
          heavily than the score in isolation. During the COVID-19 pandemic,
          several studies examined CURB-65's performance in patients with
          COVID-19 pneumonia specifically, since the original score was
          derived and validated only in bacterial community-acquired
          pneumonia; the general finding was that CURB-65 still provided
          useful, if imperfect, risk stratification in COVID-19, but tended
          to underestimate the need for escalated respiratory support in
          some patients, because it does not directly measure oxygenation —
          reinforcing the point made below that hypoxia must always be
          assessed independently of the score. In immunocompromised
          patients, including those with HIV, haematological malignancy, or
          on immunosuppressive therapy, CURB-65 has generally performed less
          reliably, and a lower threshold for admission is usually applied
          regardless of the calculated score, since the score's variables
          were not designed to capture the additional risks specific to
          immune suppression.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li><strong>Does not include oxygenation:</strong> CURB-65 does not directly assess oxygen saturation. A patient can score 0 on CURB-65 despite significant hypoxaemia; regardless of the calculated score, hypoxia (SpO₂ below 94% on air, or below the patient's individual target range) should independently mandate admission.</li>
          <li><strong>Does not account for comorbidity burden:</strong> unlike PSI, CURB-65 does not explicitly weight conditions such as active malignancy, advanced heart failure, or severe COPD — a young patient with a low score but a significant underlying illness may still need admission on clinical grounds.</li>
          <li><strong>Social and functional factors are not captured:</strong> a low score does not override the need for admission in a patient who cannot tolerate oral medication, lacks safe social support, or has significant frailty or cognitive impairment that would make safe home management unrealistic.</li>
          <li><strong>A single snapshot in time:</strong> the score should be reassessed if a patient's clinical trajectory changes, since a patient discharged with a low initial score can still deteriorate.</li>
          <li><strong>Validated for community-acquired pneumonia specifically:</strong> it was not designed for, and should not be used to risk-stratify, hospital-acquired or ventilator-associated pneumonia, which have different risk profiles and causative organisms.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Which is better, CURB-65 or the Pneumonia Severity Index (PSI)?",
            a: "It depends on the setting. CURB-65 is faster and simpler to calculate, which is why UK and many European guidelines prefer it. PSI uses roughly 20 variables and is somewhat more precise at identifying genuinely low-risk patients for safe discharge, which is why it is favoured in some US guidance (IDSA). Both are well-validated tools for the same underlying decision.",
          },
          {
            q: "Does a high CURB-65 score dictate which antibiotic to use?",
            a: "It strongly informs the choice. Low-severity CAP is typically treated with a narrower-spectrum oral agent (such as amoxicillin or a macrolide), while moderate-to-high-severity CAP usually requires broader-spectrum intravenous therapy per local protocol. Current NICE guidance (NG250) also emphasises overall clinical severity assessment, not the score in isolation, when selecting antibiotics.",
          },
          {
            q: "What should I do if urea isn't available?",
            a: "Use CRB-65 instead, which omits the urea criterion and has a maximum score of 4. A CRB-65 score of 0 supports community management, while any score of 1 or more should prompt consideration of hospital referral — this makes it a practical tool for primary care or pre-hospital assessment.",
          },
          {
            q: "Can a patient with a CURB-65 score of 0 still need admission?",
            a: "Yes. Hypoxia, inability to tolerate oral intake or medication, significant comorbidity, frailty, or lack of safe social support at home can all independently mandate admission regardless of the calculated score — CURB-65 is a decision aid, not a substitute for overall clinical judgement.",
          },
          {
            q: "Is CURB-65 still current, given NICE guidance has changed?",
            a: "Yes. NICE's original pneumonia guideline (CG191) was replaced by NG250 in September 2025, but NG250 continues to recommend CURB-65 alongside clinical judgement for severity assessment in patients presenting to hospital. What changed is that antibiotic choice is now based more directly on overall severity assessment, and CRP/procalcitonin have an added role in monitoring treatment response.",
          },
        ]}
      />

      <RelatedTools slugs={["sirs-calculator", "alvarado-score", "apache-ii-calculator"]} />

      <References
        items={[
          {
            text: "Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study. Thorax. 2003;58(5):377-382.",
          },
          {
            text: "National Institute for Health and Care Excellence. Pneumonia: diagnosis and management (NG250). Published 2 September 2025.",
            href: "https://www.nice.org.uk/guidance/ng250",
          },
          {
            text: "Lim WS, Baudouin SV, George RC, et al. BTS guidelines for the management of community acquired pneumonia in adults: update 2009. Thorax. 2009;64(Suppl 3):iii1-55.",
          },
          {
            text: "Fine MJ, Auble TE, Yealy DM, et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med. 1997;336(4):243-250 (Pneumonia Severity Index).",
          },
        ]}
      />
    </>
  );
}
