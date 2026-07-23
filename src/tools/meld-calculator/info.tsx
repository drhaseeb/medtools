import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function MeldInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the MELD Score?</h2>
        <p>
          The Model for End-Stage Liver Disease (MELD) is a mathematical
          formula that turns a handful of routine blood tests into a single
          number describing how sick a patient's liver disease has made them
          — and, critically, how likely they are to die in the next three
          months without a transplant. Since 2002 it has been the backbone
          of liver allocation in the United States, and equivalent
          MELD-based systems are used across Europe, the United Kingdom, and
          much of Asia. Wherever it is used, the underlying philosophy is
          the same: donor livers are desperately scarce, so the organ should
          go to the patient who will die soonest without one, not to
          whoever has waited longest or whoever's physician is most
          persuasive.
        </p>
        <p>
          This calculator implements <strong>MELD 3.0</strong>, the version
          adopted by the Organ Procurement and Transplantation Network
          (OPTN) and the United Network for Organ Sharing (UNOS) as the sole
          liver-allocation standard in the United States on 13 July 2023,
          replacing MELD-Na. It also displays the legacy MELD and MELD-Na
          scores alongside, clearly labeled, purely for education and
          historical comparison — they are not appropriate for allocation
          decisions in 2026 and should not be quoted to patients as "their
          MELD score" in a transplant context.
        </p>

        <h2>History and Development</h2>
        <p>
          The score's origin has nothing to do with transplantation. In
          2000, Patrick Kamath and colleagues at the Mayo Clinic derived it
          to predict short-term survival in cirrhotic patients undergoing
          Transjugular Intrahepatic Portosystemic Shunt (TIPS) procedures —
          an entirely different clinical question. The formula performed so
          well at predicting mortality in that unrelated population that
          UNOS adopted it in February 2002 to replace the older Child-Turcotte-Pugh
          (CTP) classification for prioritizing patients on the liver
          transplant waiting list, ending an allocation system that had
          previously relied heavily on waiting time — a metric that
          rewarded patience rather than medical urgency and that sicker,
          faster-deteriorating patients often did not live long enough to
          benefit from.
        </p>
        <p>
          The original three-variable MELD was refined twice since. In
          January 2016, UNOS incorporated serum sodium, creating MELD-Na,
          after multiple cohort studies showed that hyponatremia — a marker
          of advanced portal hypertension and neurohormonal derangement in
          decompensated cirrhosis — independently predicted waitlist death
          even after accounting for bilirubin, creatinine, and INR. Then,
          following years of accumulating evidence that the creatinine-based
          formula systematically under-scored women (discussed in detail
          below), Kim and colleagues published the MELD 3.0 model in
          <em> Gastroenterology</em> in 2021, and OPTN implemented it as the
          new national standard in July 2023.
        </p>

        <h2>The MELD 3.0 Formula</h2>
        <p>
          MELD 3.0 uses six inputs — female sex, bilirubin, sodium, INR,
          creatinine, and albumin — with interaction terms between sodium
          and bilirubin, and between albumin and creatinine. The exact
          formula, as published by Kim WR et al. (Gastroenterology.
          2021;161(6):1887-1895) and implemented in this calculator, is:
        </p>
        <p>
          <strong>MELD 3.0 =</strong> 1.33 (if female) + 4.56 × ln(bilirubin)
          + 0.82 × (137 − Na) − [0.24 × (137 − Na) × ln(bilirubin)] + 9.09 ×
          ln(INR) + 11.14 × ln(creatinine) + 1.85 × (3.5 − albumin) − [1.83
          × (3.5 − albumin) × ln(creatinine)] + 6
        </p>
        <p>
          Before entering the formula, each laboratory value is bounded to
          the range over which the model was fitted and validated, and the
          final result is rounded to the nearest whole number and bounded to
          the 6–40 scale:
        </p>
        <ul>
          <li><strong>Bilirubin:</strong> minimum 1.0 mg/dL (no upper cap).</li>
          <li><strong>Sodium:</strong> bounded to 125–137 mEq/L.</li>
          <li><strong>INR:</strong> minimum 1.0 (no upper cap).</li>
          <li><strong>Creatinine:</strong> minimum 1.0 mg/dL, maximum 3.0 mg/dL. If the patient has received dialysis at least twice in the preceding week, or 24 hours of continuous renal replacement therapy (CRRT), creatinine is automatically set to the maximum of 3.0 mg/dL, since a dialyzed patient's measured creatinine reflects the dialysis prescription rather than native renal function.</li>
          <li><strong>Albumin:</strong> bounded to 1.5–3.5 g/dL.</li>
        </ul>
        <p>
          Note the creatinine ceiling dropped from 4.0 mg/dL under the
          legacy formula to 3.0 mg/dL under MELD 3.0 — a deliberate change
          that reduces the very heavy weight creatinine carried in the
          original equation, a weight that turned out to be a major driver
          of the sex disparity described below.
        </p>

        <h2>Why MELD 3.0 Replaced MELD-Na: The Sex Disparity</h2>
        <p>
          The single biggest motivation for MELD 3.0 was correcting a
          well-documented inequity: women on the liver transplant waiting
          list were dying, or being delisted for being too sick to
          transplant, at meaningfully higher rates than men with equivalent
          liver disease severity — and were less likely to receive a
          transplant at any given MELD score. Multiple large registry
          studies traced much of this gap to serum creatinine. Creatinine is
          a function not just of kidney filtration but of muscle mass, and
          women — who have, on average, lower muscle mass than men of
          similar age and body size — generate less creatinine for the same
          degree of renal impairment. A woman and a man with genuinely
          equivalent glomerular filtration could therefore present with
          different serum creatinine values, and because creatinine entered
          the legacy MELD equation as a heavily weighted logarithmic term,
          that anatomical difference translated directly into a lower score
          — and lower transplant priority — for the woman, despite equal
          underlying mortality risk.
        </p>
        <p>
          MELD 3.0 addresses this in two complementary ways. First, it adds
          a flat 1.33-point bonus for female sex, a direct correction
          derived from the regression coefficients in the validation
          cohort. Second, it lowers the influence of creatinine (partly via
          the reduced 3.0 mg/dL ceiling) while adding albumin — a marker of
          hepatic synthetic function and nutritional/frailty status that is
          not confounded by sex-based differences in muscle mass in the same
          way creatinine is. Together, these changes measurably narrowed —
          though did not completely eliminate — the sex gap in predicted
          waitlist mortality when the model was validated against more than
          70,000 U.S. transplant candidates.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 54-year-old woman with alcohol-related cirrhosis is evaluated
          for transplant listing. Her labs: bilirubin 3.4 mg/dL, creatinine
          1.1 mg/dL (no dialysis), INR 1.9, sodium 129 mEq/L, albumin 2.6
          g/dL.
        </p>
        <p>
          Applying the bounds: bilirubin stays 3.4 (above the 1.0 floor);
          creatinine stays 1.1 (within 1.0–3.0); INR stays 1.9; sodium stays
          129 (within 125–137); albumin stays 2.6 (within 1.5–3.5).
        </p>
        <p>
          Substituting into the formula: 1.33 (female) + 4.56 × ln(3.4) +
          0.82 × (137 − 129) − 0.24 × (137 − 129) × ln(3.4) + 9.09 × ln(1.9)
          + 11.14 × ln(1.1) + 1.85 × (3.5 − 2.6) − 1.83 × (3.5 − 2.6) × ln(1.1)
          + 6. Working through each term: 1.33 + 5.63 + 6.56 − 2.31 + 5.66 +
          1.16 + 1.67 − 0.16 + 6 ≈ 25.5, which rounds to a{" "}
          <strong>MELD 3.0 of 26</strong>. For comparison, the legacy MELD
          formula (bilirubin, INR, creatinine only) on the same labs yields
          roughly 21, and legacy MELD-Na (adding sodium) yields roughly 25 —
          illustrating how the sex term and albumin can meaningfully shift a
          patient's calculated priority relative to the pre-2023 formulas.
        </p>

        <h2>Interpreting the Score</h2>
        <p>
          The MELD scale runs from 6 (best) to 40 (worst), and every
          additional point corresponds to a real, roughly log-linear
          increase in 90-day mortality risk without transplantation. The
          decade-based mortality bands most consistently cited in the
          literature (Wiesner et al., Gastroenterology 2003, using the
          original three-variable MELD in the OPTN waitlist cohort) are:
        </p>
        <ul>
          <li><strong>&lt;10:</strong> approximately 1.9% 90-day mortality — low urgency, routine outpatient follow-up.</li>
          <li><strong>10–19:</strong> approximately 6.0% — active monitoring, discuss transplant-center referral if the trend is worsening.</li>
          <li><strong>20–29:</strong> approximately 19.6% — most centers will actively list and prioritize a patient in this range.</li>
          <li><strong>30–39:</strong> approximately 52.6% — very high urgency; hospitalization is frequently required.</li>
          <li><strong>≥40:</strong> approximately 71.3% — the ceiling of the scale; among the highest-priority candidates nationally.</li>
        </ul>
        <p>
          A widely used clinical rule of thumb is that a MELD of 15 or above
          identifies the point at which the survival benefit of
          transplantation is expected to exceed the risk of the operation
          itself — patients below 15 are, on average, better served by
          continued medical management than by using a scarce donor organ.
          This threshold is a guideline for shared decision-making, not an
          absolute cutoff, and individual patients are evaluated by
          multidisciplinary transplant teams who weigh the score alongside
          comorbidities, functional status, and disease trajectory.
        </p>

        <h2>MELD Exception Points</h2>
        <p>
          The calculated (or "laboratory") MELD score does not capture every
          life-threatening complication of liver disease. Some conditions
          carry a high risk of death or of the patient becoming untransplantable
          without meaningfully deranging bilirubin, creatinine, INR, sodium,
          or albumin. The most important example is hepatocellular carcinoma
          (HCC) within transplant criteria — a tumor can be lethal long
          before it affects synthetic liver function. For these patients,
          OPTN's National Liver Review Board grants standardized "exception"
          MELD points that increase over time on the waiting list, ensuring
          equitable access relative to candidates whose native MELD score
          reflects their true urgency. Other recognized exception
          diagnoses include hepatopulmonary syndrome, portopulmonary
          hypertension, familial amyloid polyneuropathy, and a small number
          of other rare conditions defined in OPTN policy.
        </p>

        <h2>Clinical Applications Beyond Transplant Listing</h2>
        <p>
          Although it was built for the transplant waiting list, MELD is
          used far more broadly today. Hepatologists and gastroenterologists
          routinely calculate it to risk-stratify hospitalized cirrhotic
          patients, to decide whether a patient can tolerate a
          Transjugular Intrahepatic Portosystemic Shunt (TIPS) for refractory
          ascites or variceal bleeding (its original validated use — a MELD
          above roughly 18–20 is generally considered a relative
          contraindication to elective TIPS because of high procedural
          mortality), and to estimate perioperative risk before
              non-transplant abdominal or cardiac surgery. A MELD score above
          approximately 15–20 is widely used as a signal to defer elective
          surgery, discuss the case with hepatology, and optimize the
          patient medically first, given the sharply increased risk of
          postoperative hepatic decompensation, coagulopathy-related
          bleeding, and death in patients with advanced synthetic
          dysfunction.
        </p>
        <p>
          MELD is also used in research and quality-improvement settings as
          a standardized severity adjustor, allowing outcomes to be compared
          fairly across hospitals, surgeons, and time periods despite very
          different underlying patient populations.
        </p>

        <h2>Comparison to the Child-Pugh Score</h2>
        <p>
          Before MELD, the Child-Turcotte-Pugh (CTP) score was the standard
          tool for grading cirrhosis severity, and it remains in wide use
          today for purposes MELD was not designed for. CTP combines two
          objective laboratory values (bilirubin, albumin) and INR with two
          subjective clinical assessments — the severity of ascites and the
          grade of hepatic encephalopathy — each scored 1 to 3. Its strength
          is that it captures decompensation events (ascites, encephalopathy)
          that MELD's purely biochemical formula does not directly measure;
          its weakness is exactly that subjectivity — "moderate" ascites
          looks different to different examiners, and both ascites and
          encephalopathy respond dramatically to diuretics and lactulose
          therapy, meaning the same underlying liver disease can generate a
          different CTP class depending on how recently the patient took
          their medication. MELD's exclusively laboratory-based design was
          adopted specifically to remove this inter-observer variability
          from the allocation process. In practice, the two scores are
          complementary: CTP remains useful for staging cirrhosis and
          estimating surgical risk in general hepatology practice, while
          MELD (now MELD 3.0) is the instrument that determines transplant
          priority.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Validated for chronic disease, not acute liver failure:</strong>{" "}
            MELD was derived and validated in patients with cirrhosis. Acute
            liver failure — for example from acetaminophen (paracetamol)
            overdose, acute viral hepatitis, or drug-induced liver injury in
            a previously healthy liver — progresses on a much faster
            timescale and is assessed instead with the King's College
            Criteria, which can qualify a patient for the highest-urgency
            "Status 1A" transplant listing.
          </li>
          <li>
            <strong>Does not capture every decompensation event:</strong>{" "}
            Refractory ascites, recurrent hepatic encephalopathy, and
            variceal bleeding all carry independent mortality risk that may
            not be fully reflected in bilirubin, creatinine, INR, sodium,
            and albumin at a single point in time — part of the rationale
            for the exception-points process described above.
          </li>
          <li>
            <strong>Anticoagulation confounds INR:</strong> A patient on
            warfarin for an unrelated indication (such as atrial
            fibrillation or a mechanical heart valve) will have an elevated
            INR that does not reflect hepatic synthetic dysfunction,
            artificially inflating the score. OPTN policy addresses this
            with specific INR-exception procedures.
          </li>
          <li>
            <strong>Laboratory variability:</strong> Bilirubin and,
            especially, INR values can differ meaningfully between
            laboratories and testing methods (particularly INR, which
            depends on the thromboplastin reagent used), introducing
            variability the formula itself cannot correct for.
          </li>
          <li>
            <strong>A statistical model, not a certainty:</strong> Like any
            regression-derived score, MELD 3.0 describes average outcomes
            across a large population. It does not guarantee that an
            individual patient with a given score will die, or survive,
            within any specific timeframe, and it should always be
            interpreted alongside the full clinical picture by an
            experienced transplant team.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Is MELD 3.0 the same as MELD-Na?",
            a: "No. MELD-Na (2016) added only sodium to the original three-variable formula. MELD 3.0 (2023) is a further, separate revision that adds a sex term and serum albumin, adjusts the creatinine ceiling, and has fully replaced MELD-Na as the U.S. national liver-allocation standard since 13 July 2023.",
          },
          {
            q: "Why does MELD 3.0 give women extra points?",
            a: "The added 1.33-point term for female sex is a direct statistical correction for the systematic under-scoring of women that occurred under the creatinine-heavy legacy formula, since women generate less creatinine than men for an equivalent degree of kidney impairment due to lower average muscle mass. It is not an arbitrary adjustment — it was derived from regression analysis of tens of thousands of real transplant candidates and validated to reduce (though not eliminate) the sex gap in waitlist mortality.",
          },
          {
            q: "What happens if a patient is on dialysis?",
            a: "If a patient has received dialysis at least twice in the preceding week, or 24 hours of continuous renal replacement therapy (CRRT), their creatinine is automatically set to the formula's maximum value (3.0 mg/dL under MELD 3.0) rather than using the measured lab value, since dialysis artificially lowers measured creatinine regardless of native kidney function.",
          },
          {
            q: "Can MELD be used for children?",
            a: "No. Children awaiting liver transplant in the U.S. are prioritized using the Pediatric End-Stage Liver Disease (PELD) score, a separate formula that accounts for growth failure and age in addition to bilirubin, INR, and albumin, reflecting the different physiology and disease course of pediatric liver disease.",
          },
          {
            q: "Does a low MELD score mean a patient does not need a transplant?",
            a: "Not necessarily. A low laboratory MELD score means the biochemical markers of liver failure are relatively preserved, but life-threatening complications such as recurrent variceal bleeding, hepatocellular carcinoma, or refractory ascites may still make transplantation urgent. This is exactly the situation the MELD exception points process is designed to address.",
          },
        ]}
      />

      <RelatedTools slugs={["child-pugh-score", "apache-ii-calculator", "egfr-calculator"]} />

      <References
        items={[
          {
            text: "Kim WR, Mannalithara A, Heimbach JK, et al. MELD 3.0: The Model for End-Stage Liver Disease Updated for the Modern Era. Gastroenterology. 2021;161(6):1887-1895.e4.",
          },
          {
            text: "Kamath PS, Wiesner RH, Malinchoc M, et al. A model to predict survival in patients with end-stage liver disease. Hepatology. 2001;33(2):464-470.",
          },
          {
            text: "Wiesner R, Edwards E, Freeman R, et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology. 2003;124(1):91-96.",
          },
          {
            text: "Organ Procurement and Transplantation Network. Improving Liver Allocation: MELD 3.0 Policy Notice, effective 13 July 2023.",
            href: "https://www.hrsa.gov/sites/default/files/hrsa/optn/improving-liver-allocation-meld-30-faq.pdf",
          },
          {
            text: "Biggins SW, Kim WR, Terrault NA, et al. Evidence-based incorporation of serum sodium concentration into MELD. Gastroenterology. 2006;130(6):1652-1660.",
          },
          {
            text: "Pugh RN, Murray-Lyon IM, Dawson JL, Pietroni MC, Williams R. Transection of the oesophagus for bleeding oesophageal varices. Br J Surg. 1973;60(8):646-649.",
          },
        ]}
      />
    </>
  );
}
