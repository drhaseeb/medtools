import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function BlatchfordInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the Glasgow-Blatchford Score?</h2>
        <p>
          The Glasgow-Blatchford Score (GBS) is a validated risk
          stratification tool used to assess patients presenting with acute
          upper gastrointestinal bleeding (UGIB). Unlike scoring systems
          that require the results of endoscopy, the GBS relies entirely on
          variables available at the bedside on first presentation — basic
          observations and a routine blood panel — which makes it uniquely
          useful for the very first triage decision in the emergency
          department, before any specialist gastroenterology input is
          available.
        </p>
        <p>
          The score ranges from 0 to 23. Its central clinical purpose is not
          to grade severity in a smooth, linear way but to answer one sharp
          binary question: is this patient safe to send home without
          admission? A score of exactly 0 identifies a subgroup of patients
          at extremely low risk of needing any hospital-based intervention,
          while any score above 0 flags a patient who should be admitted for
          further assessment.
        </p>

        <h2>History and Development</h2>
        <p>
          The score was developed by Oliver Blatchford and colleagues at
          the Glasgow Royal Infirmary and published in <em>The Lancet</em> in
          2000 under the title "A risk score to predict need for treatment
          for upper-gastrointestinal haemorrhage." The study's design
          reflected a specific clinical problem: existing severity scores
          for UGIB, most notably the Rockall score, required endoscopic
          findings to be complete, meaning they could not help clinicians
          decide whether a patient needed admission and endoscopy in the
          first place — they could only be applied after the fact. Blatchford's
          team set out to build a purely pre-endoscopic tool using variables
          that were already routinely measured within minutes of a
          patient's arrival: haemoglobin, blood urea, systolic blood
          pressure, heart rate, and a small set of history items (melaena,
          syncope, known hepatic disease, known cardiac failure). The
          resulting score was explicitly validated against a composite
          "need for intervention" endpoint — blood transfusion, endoscopic
          therapy, surgery, or death — rather than against endoscopic
          findings themselves, which is precisely what makes it usable at
          the point of triage.
        </p>

        <h2>How the Score Is Calculated</h2>
        <p>
          Each variable contributes points independently, and the points
          are simply summed; there is no adjustment or weighting between
          variables. The full point allocation used by this calculator is:
        </p>
        <ul>
          <li>
            <strong>Blood urea (mmol/L):</strong> 6.5–&lt;8.0 → 2 points;
            8.0–&lt;10.0 → 3 points; 10.0–&lt;25.0 → 4 points; ≥25.0 → 6
            points. Below 6.5 mmol/L scores 0.
          </li>
          <li>
            <strong>Haemoglobin, men (g/L):</strong> 120–129 → 1 point;
            100–119 → 3 points; &lt;100 → 6 points. ≥130 scores 0.
          </li>
          <li>
            <strong>Haemoglobin, women (g/L):</strong> 100–119 → 1 point;
            &lt;100 → 6 points. ≥120 scores 0.
          </li>
          <li>
            <strong>Systolic blood pressure (mmHg):</strong> 100–109 → 1
            point; 90–99 → 2 points; &lt;90 → 3 points. ≥110 scores 0.
          </li>
          <li><strong>Pulse ≥100/min:</strong> 1 point.</li>
          <li><strong>Melaena present:</strong> 1 point.</li>
          <li><strong>Syncope:</strong> 2 points.</li>
          <li><strong>Known hepatic disease:</strong> 2 points.</li>
          <li><strong>Known cardiac failure:</strong> 2 points.</li>
        </ul>
        <p>
          The elevated blood urea seen in UGIB is a genuine physiological
          signature of the bleed itself, not a coincidental laboratory
          finding: digested haemoglobin releases large quantities of
          protein into the gut lumen, which is then absorbed and metabolised
          to urea, raising the blood urea disproportionately to creatinine.
          The magnitude of the urea rise correlates with the volume of
          blood that has been shed and digested, which is why it carries
          the single largest point weighting in the score at the highest
          threshold.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 58-year-old man presents with melaena and one episode of
          pre-syncope. His observations show a systolic BP of 96 mmHg and a
          pulse of 108/min. Blood tests return a haemoglobin of 108 g/L and
          a urea of 11.2 mmol/L. He has no known liver or cardiac disease.
        </p>
        <p>
          Scoring each variable: urea 11.2 falls in the 10.0–25.0 band (+4);
          haemoglobin 108 g/L in a man falls in the 100–119 band (+3);
          systolic BP 96 falls in the 90–99 band (+2); pulse ≥100 (+1);
          melaena present (+1); syncope present (+2). His total is{" "}
          <strong>4 + 3 + 2 + 1 + 1 + 2 = 13</strong>. A score this high
          places him well above the "very high risk" threshold of 6,
          correlating with a greater than 50% likelihood of needing
          transfusion, endoscopic therapy, or surgery — this patient
          requires urgent resuscitation, senior review, and early endoscopy,
          not simply routine admission.
        </p>

        <h2>Interpreting the Score</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-surface-2 text-left text-xs uppercase tracking-wide text-ink-muted">
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Risk category</th>
                <th className="px-4 py-3">Typical recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line/60">
                <td className="px-4 py-3 font-semibold text-good">0</td>
                <td className="px-4 py-3">Low risk</td>
                <td className="px-4 py-3">
                  Consider early discharge with outpatient follow-up (per NICE CG141)
                </td>
              </tr>
              <tr className="border-b border-line/60">
                <td className="px-4 py-3 font-semibold text-warn">1–6</td>
                <td className="px-4 py-3">High risk</td>
                <td className="px-4 py-3">
                  Admission required; endoscopy timing guided by stability
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-bad">&gt;6</td>
                <td className="px-4 py-3">Very high risk</td>
                <td className="px-4 py-3">
                  &gt;50% probability of needing intervention; urgent resuscitation and early endoscopy
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The GBS is deliberately built to be highly sensitive rather than
          highly specific: in the original validation cohort, roughly 16%
          of all patients presenting with UGIB scored 0, and essentially
          none of them went on to need transfusion, endoscopic
          intervention, or died. This is what makes a score of 0
          reassuring enough to support outpatient management. The trade-off
          is that many patients scoring 1 or 2 will also, in the end, not
          require any active intervention — the score is intentionally
          weighted to avoid missing anyone at the low-risk end, at the cost
          of flagging some patients for admission who did not strictly need
          it.
        </p>

        <h2>Current NICE Guidance</h2>
        <p>
          In the United Kingdom, the relevant guideline is NICE Clinical
          Guideline 141, "Acute upper gastrointestinal bleeding in over
          16s: management," first published in June 2012 and subsequently
          updated. CG141 recommends using a risk-scoring tool — the GBS at
          first assessment, and the full Rockall score after endoscopy — to
          guide the timing of endoscopy and the suitability of a patient for
          early discharge. NICE specifically recommends considering early
          discharge for patients with a pre-endoscopy Blatchford score of 0,
          and recommends offering endoscopy immediately after resuscitation
          in patients who are haemodynamically unstable, or within 24 hours
          of admission for everyone else. As of this review, CG141 remains
          the current, active NICE guideline covering this topic and has
          not been withdrawn or replaced by a renumbered guideline — readers
          should always confirm the guideline's status directly on the NICE
          website before relying on it for a specific clinical decision, as
          individual recommendations are periodically reviewed and updated
          even when the guideline number itself stays the same.
        </p>

        <h2>Glasgow-Blatchford Score vs. Rockall Score</h2>
        <p>
          Clinicians frequently use both scores at different points along
          the same clinical pathway rather than choosing one over the
          other:
        </p>
        <ul>
          <li>
            <strong>Glasgow-Blatchford Score (pre-endoscopy):</strong> uses
            only bedside and laboratory variables available at
            presentation. It is the preferred tool for the initial triage
            decision — admit versus discharge, urgent versus routine
            endoscopy — precisely because it does not require endoscopy to
            have already happened.
          </li>
          <li>
            <strong>Full Rockall Score (post-endoscopy):</strong> combines
            pre-endoscopy clinical variables (age, shock, comorbidity) with
            endoscopic findings (diagnosis, stigmata of recent haemorrhage)
            to predict mortality and rebleeding risk. It cannot be
            completed until endoscopy has occurred, so it is used to guide
            post-procedure disposition and monitoring rather than the
            initial admission decision.
          </li>
        </ul>
        <p>
          A large 2017 international multicentre comparison published in{" "}
          <em>BMJ</em> found the GBS to be the most accurate of several
          competing scores (including Rockall and AIMS65) specifically for
          predicting the need for intervention or death, reinforcing its
          role as the preferred pre-endoscopy triage instrument.
        </p>

        <h2>Clinical Applications Beyond Triage</h2>
        <p>
          Beyond the binary discharge decision, the GBS is used to
          prioritise resource allocation in busy endoscopy units — patients
          with very high scores are typically moved to the top of the
          endoscopy list — and to standardise handover communication
          between emergency medicine, gastroenterology, and general
          surgical teams. Some emergency departments have incorporated a
          GBS of 0 into a formal "safe discharge" pathway with structured
          safety-netting advice and a scheduled outpatient endoscopy,
          reducing unnecessary admissions for a condition that otherwise
          carries a significant inpatient bed burden.
        </p>

        <h2>Limitations and Special Populations</h2>
        <ul>
          <li>
            <strong>Sensitivity over specificity:</strong> because the score
            is tuned to minimise missed high-risk patients, it has
            relatively low specificity at the low-risk end — many patients
            scoring 1–2 who are flagged for admission will not, in the end,
            need transfusion or endoscopic therapy. This should be
            explained to admitting teams so a "positive" score is not
            over-interpreted as certain need for intervention.
          </li>
          <li>
            <strong>Renal impairment:</strong> patients with chronic kidney
            disease have a persistently elevated baseline urea unrelated to
            any GI bleed, which can artificially inflate the score in this
            population; the degree of urea elevation should be interpreted
            relative to the patient's known baseline where available.
          </li>
          <li>
            <strong>Beta-blockers and pulse:</strong> patients on
            rate-limiting medication may not mount the expected tachycardic
            response to blood loss, meaning the pulse component may
            under-represent true haemodynamic compromise in this group.
          </li>
          <li>
            <strong>Not validated for lower GI bleeding:</strong> the GBS was
            derived and validated specifically in upper GI bleeding and
            should not be applied to suspected lower GI (colonic) bleeding,
            which has its own dedicated risk scores (such as the Oakland
            score).
          </li>
          <li>
            <strong>Unit errors:</strong> haemoglobin is scored here in g/L
            (the SI convention used in UK and European laboratories); the
            original US-based publication reported haemoglobin in g/dL.
            Entering a g/dL value into a g/L field (or vice versa) will
            produce a grossly wrong score, so units should always be
            double-checked against the local laboratory report.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Does a Glasgow-Blatchford Score of 0 mean a patient definitely does not need endoscopy?",
            a: "A score of 0 identifies a group at very low risk of needing transfusion, endoscopic therapy, surgery, or death, and supports considering outpatient management with follow-up. It is not an absolute guarantee, and clinical judgement — including patient reliability, distance from care, and ability to return promptly if symptoms recur — should always be factored in alongside the score.",
          },
          {
            q: "Why does the score use blood urea rather than creatinine?",
            a: "Digested blood in the gut is absorbed and metabolised to urea, causing a disproportionate rise in blood urea relative to creatinine in upper GI bleeding specifically. Creatinine, which mainly reflects renal filtration, does not show this same bleeding-specific rise and would not carry the same discriminatory value.",
          },
          {
            q: "Can the Glasgow-Blatchford Score be used for lower GI bleeding?",
            a: "No. The GBS was derived and validated exclusively in patients with upper gastrointestinal bleeding. Suspected lower GI (colonic) bleeding should be assessed with a dedicated tool such as the Oakland score instead.",
          },
          {
            q: "How is the Glasgow-Blatchford Score different from the Rockall Score?",
            a: "The GBS uses only variables available before endoscopy and is used for the initial admission/discharge decision. The full Rockall score additionally requires endoscopic findings and is used afterward, mainly to predict mortality and rebleeding risk and guide post-procedure monitoring.",
          },
          {
            q: "Is NICE CG141 still the current guideline for upper GI bleeding in the UK?",
            a: "Yes, as of this review CG141 remains NICE's active guideline for acute upper gastrointestinal bleeding in adults, though individual recommendations within it are periodically reviewed. Always check the NICE website directly for the guideline's current status before relying on it for an active clinical decision.",
          },
        ]}
      />

      <RelatedTools slugs={["heart-score-calculator", "curb65-calculator", "meld-calculator"]} />

      <References
        items={[
          {
            text: "Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet. 2000;356(9238):1318-1321.",
          },
          {
            text: "National Institute for Health and Care Excellence. Acute upper gastrointestinal bleeding in over 16s: management (CG141). Published June 2012.",
            href: "https://www.nice.org.uk/guidance/cg141",
          },
          {
            text: "Stanley AJ, et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ. 2017;356:i6432.",
          },
          {
            text: "Stanley AJ, et al. Multicentre comparison of the Glasgow Blatchford and Rockall Scores in the prediction of clinical end-points after upper gastrointestinal haemorrhage. Aliment Pharmacol Ther. 2011;34(4):470-475.",
          },
          {
            text: "Oakland K, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. Gut. 2019;68(5):776-789.",
          },
        ]}
      />
    </>
  );
}
