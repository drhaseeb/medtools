import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function VteInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Are the Wells' Criteria?</h2>
        <p>
          Venous thromboembolism (VTE) describes two closely related
          conditions: deep vein thrombosis (DVT), a blood clot forming within
          a deep vein — most often in the calf or thigh — and pulmonary
          embolism (PE), where part of that clot breaks free and lodges in
          the pulmonary arterial circulation. A large PE can cause acute
          right heart strain, haemodynamic collapse, and death, which is why
          rapid, reliable risk stratification of suspected VTE is one of the
          most consequential diagnostic pathways in emergency and acute
          medicine.
        </p>
        <p>
          The trouble is that neither condition can be reliably diagnosed —
          or excluded — from symptoms and signs alone. Calf pain, swelling,
          and breathlessness are common, non-specific complaints with dozens
          of alternative explanations, from a ruptured Baker's cyst and
          cellulitis to musculoskeletal strain and simple anxiety. The Wells'
          criteria, developed by the Canadian haematologist Philip Wells and
          colleagues through the 1990s and 2000s, convert a clinical
          assessment into a numerical pre-test probability that determines
          which patients can be safely investigated with a blood test alone
          and which need imaging without delay.
        </p>

        <h2>Two Related But Distinct Scores</h2>
        <p>
          "Wells' score" actually refers to two separate, independently
          derived and validated instruments — one for suspected DVT and one
          for suspected PE. They share a common logic (weighting historical
          risk factors, examination findings, and the clinician's own
          gestalt about alternative diagnoses) but use entirely different
          criteria and point values, and must not be confused with one
          another. This calculator implements both, selected via the tab at
          the top of the tool.
        </p>

        <h2>Wells' Score for DVT: Criteria and Points</h2>
        <p>
          The 2-level DVT Wells score — the version currently recommended by
          NICE guideline NG158 — evaluates nine risk factors that each add 1
          point, plus a tenth item that subtracts 2 points for clinical
          judgement:
        </p>
        <ol>
          <li><strong>Active cancer (+1):</strong> treatment ongoing, within the previous 6 months, or palliative — malignancy induces a systemic hypercoagulable state through multiple mechanisms including tissue factor expression by tumour cells.</li>
          <li><strong>Paralysis, paresis, or recent plaster immobilisation of the lower limb (+1):</strong> immobility causes profound venous stasis, the first arm of Virchow's triad.</li>
          <li><strong>Recently bedridden ≥3 days, or major surgery within 12 weeks requiring general or regional anaesthesia (+1):</strong> combines stasis with the endothelial injury and acute-phase hypercoagulability that follows surgery.</li>
          <li><strong>Localised tenderness along the deep venous system (+1):</strong> tenderness specifically over the femoral vein or in the popliteal fossa is more specific for DVT than generalised calf discomfort.</li>
          <li><strong>Entire leg swollen (+1):</strong> suggests a more proximal (iliofemoral) obstruction to venous return.</li>
          <li><strong>Calf swelling &gt;3 cm compared with the asymptomatic leg (+1):</strong> measured 10 cm below the tibial tuberosity, giving an objective, reproducible measurement of asymmetry.</li>
          <li><strong>Pitting oedema confined to the symptomatic leg (+1):</strong> unilateral, rather than the bilateral oedema typical of cardiac, renal, or hepatic causes.</li>
          <li><strong>Collateral non-varicose superficial veins (+1):</strong> when the deep system is obstructed, blood is diverted into superficial collaterals, causing them to become visibly engorged.</li>
          <li><strong>Previously documented DVT (+1):</strong> a personal history of VTE is one of the strongest predictors of recurrence, reflecting either an anatomical predisposition or an underlying, sometimes undiagnosed, thrombophilia.</li>
          <li><strong>An alternative diagnosis at least as likely as DVT (−2):</strong> the only subjective, judgement-based item in the score — if the clinician genuinely believes cellulitis, a ruptured Baker's cyst, or post-operative swelling is at least as probable an explanation, 2 points are subtracted.</li>
        </ol>
        <p>
          The two-level model in current use classifies a total score of 1 or
          less as <strong>"DVT unlikely"</strong> and a score of 2 or more as{" "}
          <strong>"DVT likely."</strong> This dichotomised version has
          replaced the original three-tier model (low/moderate/high) in most
          contemporary pathways because it maps directly onto a simple
          two-branch diagnostic algorithm.
        </p>

        <h2>Wells' Score for PE: Criteria and Points</h2>
        <p>
          The Wells' PE score uses seven variables, several of which carry a
          weight of 1.5 points rather than a whole number — a detail that
          matters when applying the dichotomised cutoff, discussed below:
        </p>
        <ol>
          <li><strong>Clinical signs and symptoms of DVT (+3):</strong> at minimum, leg swelling with pain on palpation of the deep veins.</li>
          <li><strong>PE is the #1 diagnosis, or equally likely as an alternative (+3):</strong> this is the single most heavily weighted item in the entire score and, like the equivalent DVT criterion, depends on clinical gestalt rather than an objective finding.</li>
          <li><strong>Heart rate &gt;100 bpm (+1.5):</strong> tachycardia is a common but non-specific compensatory response to the physiological effects of pulmonary vascular obstruction.</li>
          <li><strong>Immobilisation for ≥3 days, or surgery within the previous 4 weeks (+1.5):</strong> the same venous stasis and post-surgical hypercoagulable mechanism as in the DVT score.</li>
          <li><strong>Previous objectively diagnosed DVT or PE (+1.5):</strong> prior VTE substantially raises the pre-test probability of a recurrent event.</li>
          <li><strong>Haemoptysis (+1):</strong> reflects pulmonary infarction distal to an occluded vessel.</li>
          <li><strong>Malignancy — treated within 6 months, or palliative (+1):</strong> the same hypercoagulable mechanism as in the DVT score.</li>
        </ol>
        <p>
          The two-level (dichotomised) model, validated in the landmark
          Christopher study, classifies a score of <strong>4 points or
          fewer as "PE unlikely"</strong> and a score of{" "}
          <strong>more than 4 points (i.e. 4.5 or above) as "PE
          likely."</strong> Because several items carry half-point values, it
          is entirely possible to reach a score of exactly 4.5 — for example,
          tachycardia (1.5) plus recent immobilisation (1.5) plus haemoptysis
          (1) plus malignancy (1) — and this must be classified as "likely,"
          not "unlikely." Applying a cutoff of "5 or more" rather than
          "more than 4" would misclassify any patient landing on a half-point
          total between 4 and 5, understating their risk category.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 54-year-old woman with treated breast cancer, currently on
          chemotherapy, presents with acute pleuritic chest pain and mild
          breathlessness three weeks after a long-haul flight. On
          examination her heart rate is 108 bpm, and she has mild left calf
          swelling and tenderness along the popliteal fossa on that side.
          There is no haemoptysis, and the clinician judges PE to be at least
          as likely as any alternative diagnosis, given the recent
          immobility, active malignancy, and examination findings.
        </p>
        <p>
          Scoring against the PE criteria: clinical signs/symptoms of DVT
          (+3), PE equally or more likely than an alternative diagnosis (+3),
          heart rate &gt;100 (+1.5), malignancy (+1), giving a{" "}
          <strong>total Wells' PE score of 8.5</strong>. This comfortably
          exceeds the "more than 4" threshold, placing her in the "PE likely"
          category — she should proceed directly to CT pulmonary angiography
          (CTPA) rather than a D-dimer, and empirical therapeutic
          anticoagulation should be considered while awaiting the scan if
          there is likely to be any delay in imaging and no contraindication
          to anticoagulation exists.
        </p>

        <h2>The Diagnostic Algorithm</h2>
        <p>
          The entire clinical value of the Wells' scores lies in how they
          gate the next diagnostic step, per NICE NG158:
        </p>
        <ul>
          <li><strong>DVT unlikely (≤1):</strong> obtain a D-dimer, ideally within 4 hours. A negative result — using the age-adjusted threshold in patients over 50 (age in years × 10 µg/L FEU, rather than a fixed 500 µg/L cutoff) — effectively excludes DVT without imaging. A positive D-dimer requires a proximal leg vein ultrasound.</li>
          <li><strong>DVT likely (≥2):</strong> proceed directly to proximal leg vein ultrasound, bypassing D-dimer. If the scan is negative but clinical suspicion remains high, NICE recommends either a repeat scan in one week or a D-dimer to determine whether whole-leg imaging is needed, since an isolated distal (calf-vein) clot can be missed on a single proximal-only scan.</li>
          <li><strong>PE unlikely (≤4):</strong> obtain a high-sensitivity D-dimer. A negative result carries a sensitivity for excluding PE of around 97% in this population and allows safe discharge without CTPA. A positive result requires CTPA.</li>
          <li><strong>PE likely (&gt;4):</strong> proceed directly to CTPA, without an intervening D-dimer (a negative D-dimer is not reassuring enough in this pre-test probability band to safely exclude PE). Consider interim therapeutic anticoagulation while awaiting the scan if there is an anticipated delay and no contraindication.</li>
        </ul>

        <h2>Historical Note: Three-Tier vs Two-Tier Models</h2>
        <p>
          Both Wells' scores were originally validated with a three-tier
          model (low/moderate/high probability). The two-tier (dichotomised)
          models used today — "unlikely/likely" — were validated
          specifically to integrate more cleanly with a binary D-dimer-first
          or imaging-first pathway, and are now the versions recommended by
          NICE, the American College of Physicians, and most contemporary
          emergency medicine guidance. The three-tier model is still
          occasionally encountered in older literature and some non-UK
          protocols, but this calculator implements the current two-tier
          approach for both DVT and PE.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          Beyond the initial emergency department assessment, Wells' scoring
          is embedded in ambulatory VTE pathways where GPs or community
          services can arrange same-day D-dimer testing for low-probability
          patients without requiring hospital attendance, and in hospital
          "PE rule-out" protocols that combine Wells' scoring with the
          PERC (Pulmonary Embolism Rule-out Criteria) rule to identify very
          low-risk patients in whom no further testing — not even a D-dimer —
          is required. It also informs pre-test probability adjustments
          in pregnancy and cancer populations, although the standard Wells'
          criteria and D-dimer thresholds require modification in both
          groups, as discussed below.
        </p>

        <h2>Limitations and Special Populations</h2>
        <ul>
          <li><strong>Pregnancy:</strong> D-dimer rises physiologically throughout pregnancy, and the standard Wells' criteria and D-dimer thresholds are not validated in pregnant patients. Pregnancy-specific pathways (such as the LEFt rule for DVT, incorporating leg symptoms, first trimester presentation, and difference in calf circumference) are used instead.</li>
          <li><strong>Cancer patients:</strong> active malignancy scores points in both Wells' scores and independently elevates D-dimer, reducing its specificity and sometimes prompting direct imaging even at a nominally "unlikely" score in centres following cancer-specific VTE pathways.</li>
          <li><strong>Subjectivity of the "alternative diagnosis" item:</strong> both scores include a criterion resting on clinical judgement rather than an objective finding, which is the single largest source of inter-observer variability in the score, particularly for less experienced assessors.</li>
          <li><strong>Not validated for upper-extremity DVT:</strong> the DVT criteria apply specifically to the lower limb; upper-extremity DVT (often catheter-associated or effort-related) requires a separate diagnostic approach.</li>
          <li><strong>Recurrent VTE on the same limb:</strong> a prior DVT complicates both clinical examination (post-thrombotic changes may mimic acute findings) and D-dimer interpretation, and often warrants imaging regardless of score.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "If the Wells' score is 'likely,' is a D-dimer still worth doing?",
            a: "Generally no for diagnostic purposes — a negative D-dimer in a 'likely' patient is not reassuring enough to avoid imaging, and D-dimer should not be used to defer or avoid the ultrasound or CTPA in this group. It may still occasionally be measured for other reasons (e.g. baseline before anticoagulation), but it should not change the imaging decision.",
          },
          {
            q: "Why does the PE score use a cutoff of 'more than 4' rather than '5 or more'?",
            a: "Because several criteria carry 1.5-point weights, a total of 4.5 is a valid possible score. The Christopher study's validated two-level cutoff is 'more than 4' — which includes 4.5 — so a threshold written as '5 or more' would incorrectly classify a 4.5 score as low-probability.",
          },
          {
            q: "Can these scores be used in pregnancy?",
            a: "No. Neither the standard Wells' DVT score nor the standard D-dimer thresholds are validated in pregnancy, since D-dimer rises physiologically as pregnancy progresses. Pregnancy-specific tools, such as the LEFt rule, should be used instead.",
          },
          {
            q: "What is Virchow's triad and why does it matter here?",
            a: "Virchow's triad is the classic framework describing the three broad mechanisms of venous thrombosis: stasis (immobility, long-haul travel), endothelial injury (surgery, trauma, indwelling catheters), and hypercoagulability (cancer, pregnancy, inherited thrombophilia, oestrogen therapy). Most items in both Wells' scores map directly onto one of these three categories, which is why understanding the triad makes the score's logic easier to remember and apply.",
          },
          {
            q: "What is the age-adjusted D-dimer threshold?",
            a: "In patients over 50, D-dimer rises with age even in the absence of thrombosis, reducing the specificity of a fixed threshold. The age-adjusted threshold (age in years × 10 µg/L FEU, instead of a flat 500 µg/L) increases the proportion of older patients who can safely avoid imaging without materially increasing missed diagnoses, and is recommended by NICE and most contemporary VTE guidelines.",
          },
        ]}
      />

      <RelatedTools
        slugs={["pesi-calculator", "curb65-calculator", "has-bled-calculator"]}
      />

      <References
        items={[
          {
            text: "Wells PS, Anderson DR, Bormanis J, et al. Value of assessment of pretest probability of deep-vein thrombosis in clinical management. Lancet. 1997;350(9094):1795-1798.",
          },
          {
            text: "Wells PS, Anderson DR, Rodger M, et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003;349(13):1227-1235.",
          },
          {
            text: "Wells PS, Anderson DR, Rodger M, et al. Derivation of a simple clinical model to categorize patients probability of pulmonary embolism: increasing the models utility with the SimpliRED D-dimer. Thromb Haemost. 2000;83(3):416-420.",
          },
          {
            text: "van Belle A, Büller HR, Huisman MV, et al; Christopher Study Investigators. Effectiveness of managing suspected pulmonary embolism using an algorithm combining clinical probability, D-dimer testing, and computed tomography. JAMA. 2006;295(2):172-179.",
          },
          {
            text: "National Institute for Health and Care Excellence. Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (NG158). Published 26 March 2020.",
            href: "https://www.nice.org.uk/guidance/ng158",
          },
        ]}
      />
    </>
  );
}
