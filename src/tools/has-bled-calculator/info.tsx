import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function HasBledInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the HAS-BLED Score?</h2>
        <p>
          Oral anticoagulation is the cornerstone of stroke prevention in
          atrial fibrillation (AF): it reduces ischaemic stroke risk by
          roughly two-thirds, but that protection comes at the cost of an
          increased risk of major bleeding, including the most feared
          complication, intracranial haemorrhage. For decades, clinicians had
          no standardised way to weigh that trade-off beyond individual
          judgement. The HAS-BLED score was developed to fill that gap: a
          simple, nine-point bedside tool that estimates a patient's 1-year
          risk of major bleeding while anticoagulated for AF.
        </p>
        <p>
          Crucially, HAS-BLED was never designed to be a reason to withhold
          anticoagulation. Its intended use is the opposite: to flag which
          bleeding-risk factors are modifiable, prompt their correction, and
          identify patients who need closer follow-up — not to identify
          patients who should be denied treatment that is protecting them
          from a stroke.
        </p>

        <h2>History and Development</h2>
        <p>
          The score was developed by Ron Pisters and colleagues and published
          in <em>Chest</em> in 2010, derived from 3,978 patients with AF
          enrolled in the Euro Heart Survey, most of whom were treated with
          vitamin K antagonists (warfarin) rather than the direct oral
          anticoagulants (DOACs) that are now first-line therapy. It was
          designed deliberately to be simple enough to calculate from
          information already in a typical AF consultation, in direct
          contrast to some earlier, more complex bleeding-risk models that
          required laboratory data not routinely available at the point of
          the anticoagulation decision.
        </p>
        <p>
          HAS-BLED was endorsed as the preferred bleeding-risk tool in the
          2010 and 2020 European Society of Cardiology (ESC) atrial
          fibrillation guidelines. The most recent, 2024 ESC AF guideline
          update took a different position: rather than continuing to
          recommend one specific structured score, it advises addressing
          modifiable bleeding risk factors directly, while noting that a
          score such as HAS-BLED "should be considered" to help identify
          patients — specifically those scoring 3 or more — who warrant
          earlier and more frequent clinical review. In practice, HAS-BLED
          remains extremely widely used in clinical documentation, national
          guidelines outside the ESC (including several NICE-endorsed care
          pathways), and electronic health record decision support, even as
          the most recent European guideline language has become more
          circumspect about mandating any single score.
        </p>

        <h2>How the Score Is Calculated</h2>
        <p>
          Each letter of the acronym represents a risk factor, and every
          factor present contributes one point (two components — renal/liver
          function and drugs/alcohol — can each independently contribute up
          to 2 points if both their sub-criteria are met), for a maximum
          possible score of 9:
        </p>
        <ul>
          <li><strong>H — Hypertension (1 point):</strong> uncontrolled hypertension, specifically defined as a systolic blood pressure persistently above 160 mmHg — a stricter, bleeding-specific threshold than the blood pressure definition used in stroke-risk scores like CHA₂DS₂-VASc.</li>
          <li><strong>A — Abnormal renal or liver function (1 point each, up to 2):</strong> renal impairment is defined as chronic dialysis, renal transplantation, or a serum creatinine ≥200 µmol/L (≈2.26 mg/dL); liver impairment is defined as cirrhosis or biochemical evidence of significant hepatic derangement (bilirubin more than twice the upper limit of normal together with AST/ALT/ALP more than three times the upper limit).</li>
          <li><strong>S — Stroke (1 point):</strong> any prior ischaemic stroke, which leaves the brain parenchyma more vulnerable to haemorrhagic transformation.</li>
          <li><strong>B — Bleeding history or predisposition (1 point):</strong> a previous major bleeding episode, or a predisposing condition such as significant anaemia or thrombocytopenia.</li>
          <li><strong>L — Labile INR (1 point):</strong> for patients specifically on warfarin, a Time in Therapeutic Range (TTR) below 60%, or otherwise unstable/frequently supratherapeutic INR readings — this criterion does not apply to patients on a DOAC, since they do not require INR monitoring.</li>
          <li><strong>E — Elderly (1 point):</strong> age over 65 years.</li>
          <li><strong>D — Drugs or alcohol (1 point each, up to 2):</strong> concurrent use of antiplatelet agents (aspirin, clopidogrel) or NSAIDs counts as one point; heavy alcohol use (≥8 units per week) counts as a separate point.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 72-year-old man with AF has poorly controlled hypertension
          (systolic readings consistently around 170 mmHg), takes low-dose
          aspirin for previous coronary stenting, and drinks around 20 units
          of alcohol per week. He has normal renal and liver function, no
          prior stroke or bleeding history, and — being on a DOAC rather than
          warfarin — has no INR to assess.
        </p>
        <p>
          His score is built as follows: Hypertension (+1), Age &gt;65 (+1),
          Drugs — antiplatelet (+1), Alcohol — excess use (+1), for a{" "}
          <strong>total HAS-BLED score of 4</strong>, placing him in the
          high-risk category. Three of his four points are modifiable: his
          blood pressure can be brought under 160 mmHg, the ongoing need for
          aspirin alongside his anticoagulant should be reviewed with
          cardiology, and his alcohol intake can be addressed directly. His
          stroke risk (assessed separately with CHA₂DS₂-VASc) should still
          guide the decision to anticoagulate — the HAS-BLED score here is a
          prompt for risk-factor modification and closer follow-up, not a
          reason to stop his anticoagulant.
        </p>

        <h2>Interpreting the Score</h2>
        <p>
          The bleeding rates below are the original 1-year major bleeding
          rates reported by Pisters and colleagues in the 2010 derivation
          cohort, expressed as bleeds per 100 patient-years:
        </p>
        <ul>
          <li>Score 0: 1.13</li>
          <li>Score 1: 1.02</li>
          <li>Score 2: 1.88</li>
          <li>Score 3: 3.74</li>
          <li>Score 4: 8.70</li>
          <li>Score 5: 12.50</li>
        </ul>
        <p>
          Note that the rate at score 1 (1.02) is marginally lower than at
          score 0 (1.13) — a small, non-monotonic quirk of the original
          derivation cohort at the low-risk end, similar to features seen in
          other derivation-cohort tables at the extremes of small sample
          sizes. The overall, clinically meaningful pattern is unambiguous:
          bleeding risk rises modestly from score 0 to 2, then climbs
          sharply from score 3 onward — the risk at score 5 is more than ten
          times the risk at score 0. A score of 3 or more is conventionally
          labelled "high risk" and is the threshold most guidelines and
          electronic prescribing systems use to trigger a bleeding-risk
          alert or flag for closer review.
        </p>

        <h2>The Critical Rule: Do Not Withhold Anticoagulation</h2>
        <p>
          The single most important teaching point associated with HAS-BLED
          is also the one most often misapplied in practice: a high score is
          <em> not</em> a reason to withhold anticoagulation from a patient
          who has a meaningful stroke risk. In the overwhelming majority of
          patients with both a high HAS-BLED score and a high CHA₂DS₂-VASc
          score, the net clinical benefit still favours anticoagulation,
          because an ischaemic stroke is, on average, more disabling and more
          often fatal than a major bleed — most major bleeds, even
          gastrointestinal ones, are treatable, whereas a large cardioembolic
          stroke frequently is not.
        </p>
        <p>
          The correct clinical response to a high HAS-BLED score is
          threefold: correct every modifiable risk factor identified by the
          score (blood pressure control, discontinuing unnecessary
          antiplatelets or NSAIDs, improving INR stability or switching to a
          DOAC, addressing alcohol use); choose the anticoagulant with the
          most favourable bleeding profile for that patient (DOACs as a class
          have significantly lower rates of intracranial haemorrhage than
          warfarin, and apixaban in particular has shown the lowest major
          bleeding rates among the DOACs in head-to-head registry data); and
          increase the frequency of clinical review, rather than abandoning
          anticoagulation altogether.
        </p>

        <h2>Performance in Contemporary DOAC-Treated Populations</h2>
        <p>
          A recurring theme in more recent validation studies is that
          HAS-BLED's discrimination — its ability to separate genuinely
          high-bleeding-risk patients from low-risk ones — is somewhat
          weaker in patients treated with DOACs than it was in the original,
          largely warfarin-treated derivation cohort. This makes intuitive
          sense: DOACs as a class carry substantially lower rates of
          intracranial haemorrhage than warfarin, and the "labile INR"
          criterion, worth a full point in the original score, simply does
          not apply to the majority of contemporary patients who are started
          on a DOAC first-line. Several head-to-head comparisons of HAS-BLED
          against newer scores such as ORBIT and the DOAC score (developed
          specifically in DOAC-treated cohorts) have found broadly similar,
          moderate discriminatory performance across all of them — none of
          the available bleeding-risk scores achieves the kind of strong,
          reliable discrimination that CHA₂DS₂-VASc achieves for stroke risk,
          which is part of why the most recent ESC guideline update stepped
          back from mandating any single tool. In practice, this means
          clinicians should treat any bleeding-risk score, HAS-BLED included,
          as a structured prompt to review modifiable factors rather than as
          a precise individual probability of bleeding.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          HAS-BLED is calculated alongside — never instead of — a stroke-risk
          score such as CHA₂DS₂-VASc, at the point of any new anticoagulation
          decision in AF, at routine annual review, and whenever a patient's
          circumstances change materially (a new fall, a new diagnosis of
          renal or liver impairment, a change in alcohol use, or the addition
          of a new interacting medication). It is also widely embedded in
          electronic prescribing systems, which often surface an automatic
          HAS-BLED calculation and alert when a clinician prescribes an
          anticoagulant alongside an antiplatelet or NSAID.
        </p>

        <h2>Comparison to Other Bleeding-Risk Scores</h2>
        <ul>
          <li><strong>ORBIT score:</strong> a newer, five-variable bleeding-risk score derived and validated specifically in contemporary, real-world anticoagulated cohorts (including DOAC users), which some analyses have found to be somewhat better calibrated in modern practice than HAS-BLED, whose derivation cohort was predominantly warfarin-treated. Several national bodies now present ORBIT alongside or instead of HAS-BLED for this reason.</li>
          <li><strong>ATRIA bleeding score:</strong> an older US-derived alternative, less widely used internationally than HAS-BLED or ORBIT.</li>
          <li><strong>HEMORR₂HAGES:</strong> an earlier, more complex bleeding-risk score that HAS-BLED was partly designed to improve upon by reducing the number and complexity of variables required.</li>
        </ul>
        <p>
          Despite the emergence of newer alternatives, HAS-BLED remains the
          most widely recognised and used bleeding-risk score globally,
          partly due to its memorable acronym and partly because — unlike
          some competitors — several of its components (hypertension, labile
          INR, concurrent drugs, alcohol use) are explicitly modifiable,
          which fits directly into the clinical action the score is meant to
          prompt.
        </p>

        <h2>Special Populations</h2>
        <p>
          Certain patient groups warrant specific comment beyond the standard
          score. In patients with significant chronic kidney disease, the
          "abnormal renal function" criterion already captures the most
          severe end of the spectrum (dialysis, transplant, or a markedly
          elevated creatinine), but clinicians should remember that
          moderate CKD not meeting this threshold still meaningfully alters
          anticoagulant choice and dosing (several DOACs require dose
          reduction, or are contraindicated, at specific creatinine clearance
          cut-offs that are independent of the HAS-BLED calculation itself).
          In frail, older patients — a population increasingly recognised as
          distinct from "elderly" defined purely by a chronological age
          cut-off of 65 — falls risk is not explicitly captured anywhere in
          HAS-BLED, despite being a common reason clinicians cite for
          hesitating to anticoagulate; multiple analyses have shown that the
          theoretical bleeding risk from a fall serious enough to cause
          intracranial haemorrhage is rarely high enough, on its own, to
          outweigh the stroke-prevention benefit of anticoagulation, and a
          history of falls should prompt a falls-prevention referral rather
          than automatic anticoagulant avoidance. In patients with active
          cancer, bleeding risk is frequently elevated through mechanisms
          HAS-BLED does not capture at all (tumour-related thrombocytopenia,
          mucosal friability, drug interactions with chemotherapy), and
          oncology input alongside cardiology is usually appropriate when
          balancing anticoagulation decisions in this group.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li><strong>Derived predominantly in warfarin-treated patients:</strong> the original cohort long preceded widespread DOAC use, and the "labile INR" criterion does not apply at all to the majority of contemporary patients who are prescribed a DOAC first-line.</li>
          <li><strong>Overlapping risk factors:</strong> several HAS-BLED criteria (age, prior stroke, hypertension) are also stroke-risk factors in CHA₂DS₂-VASc, meaning a patient's bleeding and stroke risk scores are correlated rather than independent — a structural limitation the 2024 ESC guideline update specifically cited when it declined to mandate a single bleeding score.</li>
          <li><strong>Not intended as a stand-alone treatment gate:</strong> as emphasised above, the score should never, by itself, be used to withhold anticoagulation from a patient with meaningful stroke risk.</li>
          <li><strong>Point-in-time assessment:</strong> like CHA₂DS₂-VASc, HAS-BLED should be reassessed periodically rather than calculated once and never revisited, since risk factors such as renal function, blood pressure control, and concurrent medications commonly change over time.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Should a high HAS-BLED score stop me from starting anticoagulation?",
            a: "No. A high score should prompt correction of modifiable bleeding risk factors and closer follow-up, not withholding of anticoagulation. In most patients with a meaningful stroke risk, the benefit of stroke prevention still outweighs the bleeding risk, even at a high HAS-BLED score.",
          },
          {
            q: "Does the 'labile INR' criterion apply to patients on a DOAC?",
            a: "No. The labile INR (Time in Therapeutic Range) criterion is specific to patients taking warfarin or another vitamin K antagonist, since DOACs do not require INR monitoring. Patients on a DOAC simply do not score a point for this criterion.",
          },
          {
            q: "Is HAS-BLED still recommended by current guidelines?",
            a: "It remains very widely used, but the 2024 ESC atrial fibrillation guideline update moved away from mandating any single structured bleeding score, instead emphasising direct identification and correction of modifiable bleeding risk factors, while still noting that a score such as HAS-BLED can help flag patients (score ≥3) for closer review.",
          },
          {
            q: "How is HAS-BLED different from the ORBIT score?",
            a: "ORBIT uses fewer variables and was derived and validated in more contemporary, DOAC-era cohorts, which some studies suggest gives it better calibration in modern practice. HAS-BLED remains more widely recognised and explicitly highlights several modifiable risk factors (labile INR, concurrent drugs, alcohol) that ORBIT does not include.",
          },
          {
            q: "What does a score of 0 mean?",
            a: "A score of 0 indicates a low estimated bleeding risk (roughly 1 bleed per 100 patient-years in the original derivation cohort) and supports proceeding with anticoagulation per the patient's stroke-risk assessment, with routine annual review.",
          },
        ]}
      />

      <RelatedTools slugs={["chadsvasc-score", "orbit-score-calculator", "warfarin-dosing-calculator"]} />

      <References
        items={[
          {
            text: "Pisters R, Lane DA, Nieuwlaat R, de Vos CB, Crijns HJGM, Lip GYH. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation: the Euro Heart Survey. Chest. 2010;138(5):1093-1100.",
          },
          {
            text: "Van Gelder IC, Rienstra M, Bunting KV, et al. 2024 ESC Guidelines for the management of atrial fibrillation developed in collaboration with the European Association for Cardio-Thoracic Surgery (EACTS). Eur Heart J. 2024;45(36):3314-3414.",
            href: "https://academic.oup.com/eurheartj/article/45/36/3314/7738779",
          },
          {
            text: "Hindricks G, Potpara T, Dagres N, et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation developed in collaboration with the European Association for Cardio-Thoracic Surgery (EACTS). Eur Heart J. 2021;42(5):373-498.",
          },
          {
            text: "O'Brien EC, Simon DN, Thomas LE, et al. The ORBIT bleeding score: a simple bedside score to assess bleeding risk in atrial fibrillation. Eur Heart J. 2015;36(46):3258-3264.",
          },
        ]}
      />
    </>
  );
}
