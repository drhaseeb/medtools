import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function ChadsvascInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the CHA₂DS₂-VASc Score?</h2>
        <p>
          The CHA₂DS₂-VASc score is the internationally recommended tool for
          estimating the annual risk of ischaemic stroke and systemic
          thromboembolism in patients with non-valvular atrial fibrillation
          (AF) or atrial flutter. Atrial fibrillation causes disorganised,
          rapid atrial electrical activity that abolishes coordinated atrial
          contraction. Blood stagnates in the left atrium — particularly
          within the left atrial appendage, a blind-ending pouch with
          sluggish flow — and this stasis is one component of Virchow's
          triad that predisposes to clot formation. If a thrombus embolises
          to the cerebral circulation, the result is a stroke that is, on
          average, more disabling and more often fatal than an
          age-matched stroke of non-cardioembolic origin, because the clots
          tend to be larger and lodge more proximally.
        </p>
        <p>
          The clinical dilemma this score exists to resolve is straightforward
          to state but hard to individualise: oral anticoagulation reduces
          stroke risk in AF by roughly two-thirds, but every anticoagulant
          carries a real, competing risk of major bleeding. CHA₂DS₂-VASc gives
          clinicians and patients a validated, reproducible number to anchor
          that conversation, rather than relying on gestalt.
        </p>

        <h2>History: From CHADS₂ to CHA₂DS₂-VASc</h2>
        <p>
          The original CHADS₂ score (Congestive heart failure, Hypertension,
          Age ≥75, Diabetes, prior Stroke/TIA counted twice) was published by
          Gage and colleagues in 2001 and served as the dominant stroke risk
          tool for the following decade. Its major weakness became apparent
          in practice: a large proportion of AF patients — often a third or
          more of a typical cohort — scored 0 or 1 and were labelled
          "intermediate risk," a category that gave clinicians little
          practical guidance and left genuinely low-risk patients bundled in
          with those who actually warranted anticoagulation.
        </p>
        <p>
          In 2010, Gregory Lip and colleagues published a refinement in{" "}
          <em>Chest</em>, derived from the Euro Heart Survey on Atrial
          Fibrillation, that added three further independent stroke risk
          factors CHADS₂ had ignored: vascular disease, an age band of 65–74
          (rather than only ≥75), and female sex as a risk-modifying
          category. The result — CHA₂DS₂-VASc — dramatically shrank the
          proportion of patients left in a genuinely ambiguous middle
          category and, critically, was far better at confirming which
          patients were truly low-risk and safe to leave without
          anticoagulation, which was the more clinically consequential gap in
          the original score.
        </p>

        <h2>How the Score Is Calculated</h2>
        <p>
          Each letter of the acronym corresponds to a risk factor, and the
          subscript numbers indicate factors that carry double weight. The
          maximum possible score is 9.
        </p>
        <ul>
          <li><strong>C — Congestive heart failure (1 point):</strong> clinical heart failure of any cause, or objective evidence of moderate-to-severe left ventricular systolic dysfunction (LVEF ≤40%), whether or not the patient is currently symptomatic.</li>
          <li><strong>H — Hypertension (1 point):</strong> a documented history of hypertension, regardless of whether blood pressure is currently controlled on treatment, or a resting blood pressure persistently ≥140/90 mmHg.</li>
          <li><strong>A₂ — Age ≥75 years (2 points):</strong> advanced age is one of the strongest independent predictors of thromboembolism in AF, reflecting both atrial remodelling and a generally more prothrombotic, atherosclerotic vascular bed.</li>
          <li><strong>D — Diabetes mellitus (1 point):</strong> fasting glucose ≥7 mmol/L (126 mg/dL) or treatment with oral hypoglycaemic agents or insulin.</li>
          <li><strong>S₂ — Prior stroke, TIA, or thromboembolism (2 points):</strong> a previous cerebrovascular or systemic embolic event is the single strongest predictor in the score, reflecting a patient's demonstrated propensity to form and embolise clot.</li>
          <li><strong>V — Vascular disease (1 point):</strong> prior myocardial infarction, peripheral arterial disease, or complex aortic plaque on imaging.</li>
          <li><strong>A — Age 65–74 years (1 point):</strong> an intermediate age band added in the 2010 refinement.</li>
          <li><strong>Sc — Sex category, female (1 point):</strong> female sex is treated as a risk-modifying factor rather than an independent driver of risk — its clinical significance is discussed in detail below.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 68-year-old woman with AF has treated hypertension and type 2
          diabetes, with no history of heart failure, stroke, or vascular
          disease. Her score is built as follows: Age 65–74 (+1), Hypertension
          (+1), Diabetes (+1), and Sex category female (+1), for a{" "}
          <strong>total CHA₂DS₂-VASc score of 4</strong>. Because three of
          those four points come from factors other than her sex, she falls
          clearly into the high-risk category regardless of how the sex
          criterion is weighted, and current guidance would recommend
          offering a direct oral anticoagulant after a bleeding-risk
          assessment (for example with the ORBIT score) and a discussion of
          her preferences.
        </p>

        <h2>Interpreting the Score and Anticoagulation Thresholds</h2>
        <p>
          NICE guideline NG196 (<em>Atrial fibrillation: diagnosis and
          management</em>) frames the anticoagulation decision around the
          raw CHA₂DS₂-VASc score, with an explicit caveat for the sex
          criterion:
        </p>
        <ul>
          <li><strong>Score of 0 (any sex), or 1 arising solely from female sex:</strong> anticoagulation is not routinely offered — annual stroke risk is low enough that the bleeding risk of anticoagulation is unlikely to be outweighed by benefit for most patients.</li>
          <li><strong>Score of 1 in men (from a non-sex risk factor), or a score in women where the only points beyond the sex criterion sum to 1:</strong> anticoagulation should be <em>considered</em>, individualised to bleeding risk and patient preference.</li>
          <li><strong>Score of 2 or more (any sex), where that score is not derived solely from sex plus one other minor factor):</strong> NICE recommends anticoagulation should be <em>offered</em>, taking bleeding risk into account.</li>
        </ul>
        <p>
          NICE is explicit that female sex should never, by itself, be used
          as the trigger for anticoagulation — it only matters as a risk
          modifier once at least one other stroke risk factor is present.
          This is why many clinical summaries describe the practical
          thresholds as "male ≥2 / female ≥3 to offer" and "male 1 / female 2
          to consider" — those thresholds are the arithmetic consequence of
          treating the isolated female-sex point as not, by itself,
          sufficient to escalate a patient's risk category.
        </p>
        <p>
          Antiplatelet monotherapy (aspirin or clopidogrel alone) is not
          recommended for stroke prevention in AF at any score — trial data
          consistently show it offers materially less stroke protection than
          anticoagulation while carrying a similar bleeding risk to
          anticoagulants in older patients, so it is not an acceptable
          fallback for patients who decline or cannot tolerate an
          anticoagulant.
        </p>

        <h2>Annual Stroke Rate by Score</h2>
        <p>
          The table below reproduces the adjusted annual stroke rate from the
          original Euro Heart Survey derivation cohort used by Lip and
          colleagues, and is the same reference table this calculator uses
          to display an estimated event rate alongside the score:
        </p>
        <ul>
          <li>Score 0: 0% per year</li>
          <li>Score 1: 1.3% per year</li>
          <li>Score 2: 2.2% per year</li>
          <li>Score 3: 3.2% per year</li>
          <li>Score 4: 4.0% per year</li>
          <li>Score 5: 6.7% per year</li>
          <li>Score 6: 9.8% per year</li>
          <li>Score 7: 9.6% per year</li>
          <li>Score 8: 6.7% per year</li>
          <li>Score 9: 15.2% per year</li>
        </ul>
        <p>
          Two features of this table are worth explaining rather than
          smoothing over. First, the rate at score 7 (9.6%) is nominally
          lower than at score 6 (9.8%), and the rate at score 8 (6.7%) dips
          below both — these are genuine features of the original small
          derivation cohort at the extreme end of the score, where very few
          patients scored 7, 8, or 9, so the confidence intervals around
          those individual rates are wide. Clinicians should treat the
          general trend — a score of 5 and above carries a materially higher
          stroke rate than a score of 0–2 — as the clinically meaningful
          signal, rather than reading the exact percentage at each individual
          point as a precise estimate.
        </p>

        <h2>Anticoagulant Choice</h2>
        <p>
          Once the decision to anticoagulate has been made, direct oral
          anticoagulants (DOACs) — apixaban, dabigatran, edoxaban and
          rivaroxaban — are preferred over vitamin K antagonists (warfarin)
          for most patients with non-valvular AF, based on comparable or
          superior efficacy, a materially lower rate of intracranial
          haemorrhage, and no requirement for routine INR monitoring. Warfarin
          remains the anticoagulant of choice for patients with moderate to
          severe mitral stenosis or a mechanical heart valve — a population
          in whom DOACs have shown inferior outcomes and are specifically
          contraindicated — and for patients with significant renal
          impairment beyond the labelled range of the available DOACs.
        </p>

        <h2>Clinical Applications Beyond the Simple Score</h2>
        <p>
          CHA₂DS₂-VASc is applied at multiple points in the AF care pathway:
          at the time of new AF diagnosis to decide whether to start
          anticoagulation; at routine annual review, since the score is
          dynamic and a patient who ages into a new age band or develops a
          new risk factor (hypertension, diabetes, vascular disease) may
          cross a treatment threshold even without any change in their AF
          itself; and before elective cardioversion or catheter ablation,
          where periprocedural anticoagulation strategy is informed by the
          same score. It is also incorporated into decisions around stopping
          anticoagulation — NICE recommends that any decision to withdraw
          anticoagulation should involve a fresh CHA₂DS₂-VASc calculation
          alongside a bleeding-risk score such as ORBIT, not simply a
          continuation of a decision made years earlier under different
          circumstances.
        </p>

        <h2>Comparison to Other Stroke Risk Tools</h2>
        <p>
          CHA₂DS₂-VASc has substantially displaced its predecessor CHADS₂ in
          most contemporary guidelines because of its superior performance at
          identifying genuinely low-risk patients, though CHADS₂ is still
          occasionally referenced in older literature and some non-UK
          protocols. More recently, a sex-neutral variant — CHA₂DS₂-VA, which
          simply removes the female-sex point entirely rather than treating
          it as a conditional modifier — has been proposed and is under
          active evaluation by some European groups, on the basis that
          registry data on modern, well-treated AF populations suggest the
          independent contribution of female sex to stroke risk may be
          smaller than the original 2010 derivation implied. As of this
          review, NICE NG196 and the major international society guidelines
          continue to use the standard CHA₂DS₂-VASc score with the
          conditional sex-modifier approach described above, so that remains
          the tool implemented in this calculator; clinicians should watch
          for updates as the evidence on CHA₂DS₂-VA matures.
        </p>

        <h2>Limitations and Special Populations</h2>
        <ul>
          <li><strong>Non-valvular AF only:</strong> the score was derived and validated in patients without moderate-to-severe mitral stenosis or a mechanical valve. Those patients are automatically considered high-risk and require anticoagulation (typically warfarin) irrespective of their CHA₂DS₂-VASc score.</li>
          <li><strong>Bleeding risk is assessed separately:</strong> CHA₂DS₂-VASc says nothing about bleeding risk. It must always be paired with a bleeding-risk tool such as ORBIT (or HAS-BLED) so that the decision reflects net clinical benefit, not stroke risk in isolation.</li>
          <li><strong>Dynamic, not one-off:</strong> a patient's score changes as they age or develop new comorbidities. Reassessment at least annually, and at any significant new diagnosis, is recommended.</li>
          <li><strong>Paroxysmal AF carries the same risk as persistent/permanent AF:</strong> the score does not distinguish AF pattern or burden — even infrequent, brief episodes of AF confer thromboembolic risk requiring the same risk stratification.</li>
          <li><strong>Not validated for isolated atrial flutter without a history of AF</strong> in some cohorts, though it is widely applied to atrial flutter in practice given the shared thromboembolic mechanism.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Does being female automatically mean a patient needs anticoagulation sooner?",
            a: "No. NICE is explicit that the female-sex point should not, by itself, trigger anticoagulation. It only matters as a modifier once at least one other risk factor is present — a woman with AF and no other risk factors (score of 1, from sex alone) is treated the same as a man with a score of 0.",
          },
          {
            q: "Can aspirin be used instead of an anticoagulant for an intermediate score?",
            a: "No. Current guidance explicitly advises against antiplatelet monotherapy for stroke prevention in AF at any CHA₂DS₂-VASc score, because it provides substantially less stroke protection than anticoagulation while carrying a comparable bleeding risk in older adults.",
          },
          {
            q: "What if my patient has both a high CHA₂DS₂-VASc score and a high bleeding-risk score?",
            a: "In the large majority of such patients, the net clinical benefit still favours anticoagulation, because an ischaemic stroke is typically more devastating and more likely than a major bleed. A high bleeding score should prompt correction of modifiable bleeding risk factors and closer monitoring, not automatic withholding of anticoagulation.",
          },
          {
            q: "Is CHA₂DS₂-VASc valid for patients with a mechanical heart valve or mitral stenosis?",
            a: "No. These patients are excluded from the validation population and are considered high-risk by definition, requiring anticoagulation with warfarin regardless of their calculated score. DOACs are specifically contraindicated in this group.",
          },
          {
            q: "How often should the score be recalculated?",
            a: "At least annually, and whenever a new relevant diagnosis is made (hypertension, diabetes, vascular disease, a new thromboembolic event) or the patient crosses an age threshold (65 or 75), since any of these can change the anticoagulation recommendation.",
          },
        ]}
      />

      <RelatedTools
        slugs={["orbit-score-calculator", "has-bled-calculator", "warfarin-dosing-calculator"]}
      />

      <References
        items={[
          {
            text: "Lip GYH, Nieuwlaat R, Pisters R, Lane DA, Crijns HJGM. Refining clinical risk stratification for predicting stroke and thromboembolism in atrial fibrillation using a novel risk factor-based approach: the Euro Heart Survey on Atrial Fibrillation. Chest. 2010;137(2):263-272.",
          },
          {
            text: "National Institute for Health and Care Excellence. Atrial fibrillation: diagnosis and management (NG196). Published 27 April 2021.",
            href: "https://www.nice.org.uk/guidance/ng196",
          },
          {
            text: "Gage BF, Waterman AD, Shannon W, Boechler M, Rich MW, Radford MJ. Validation of clinical classification schemes for predicting stroke: results from the National Registry of Atrial Fibrillation. JAMA. 2001;285(22):2864-2870.",
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
