import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function SgarbossaCriteriaInfo() {
  return (
    <>
      <ReviewedBadge updated="August 2026" />

      <div className="prose max-w-none">
        <h2>What Are the Sgarbossa Criteria?</h2>
        <p>
          The Sgarbossa criteria are a set of ECG findings used to diagnose
          acute myocardial infarction in patients whose baseline QRS
          morphology — because of a left bundle branch block (LBBB) or a
          ventricular-paced rhythm — already produces the kind of ST-segment
          and T-wave distortion that would normally point toward a STEMI.
          Standard STEMI criteria rely on ST elevation that is unexpected
          given the QRS; in LBBB and ventricular pacing, the QRS is already
          abnormal and produces expected, appropriately "discordant" ST
          changes as a normal consequence of the abnormal depolarisation
          sequence — so the ordinary STEMI checklist cannot be applied
          without a way to separate that expected discordance from a
          genuinely ischaemic change layered on top of it.
        </p>
        <p>
          This is a genuinely high-stakes diagnostic gap: a new LBBB with a
          convincing history was, for many years, treated as a STEMI
          equivalent by default, sending large numbers of patients to the
          catheterisation lab. But most patients with LBBB do not have an
          acute occlusion, and blanket activation for every new or
          presumed-new LBBB produces a substantial false-activation rate.
          Sgarbossa's criteria were built to bring some of the same
          discriminating power used for normal ECGs to this specific,
          otherwise ambiguous situation.
        </p>

        <h2>History and Development</h2>
        <p>
          Elena Sgarbossa and colleagues derived and published the original
          criteria in 1996 in the{" "}
          <em>New England Journal of Medicine</em>, using data from the
          GUSTO-1 trial — a large international thrombolytic-therapy trial —
          restricted to the subset of patients with LBBB. From this
          population they identified three ECG findings independently
          associated with a confirmed diagnosis of acute myocardial
          infarction, and assigned each a weight based on its statistical
          strength of association, producing a simple additive score.
        </p>

        <h2>The Three Original Criteria and Their Weights</h2>
        <ul>
          <li>
            <strong>Concordant ST elevation ≥ 1mm, in a lead with a positive
            (upright) QRS — 5 points.</strong> "Concordant" means the ST
            segment moves in the same direction as the majority of the QRS
            complex — the single strongest and most specific of the three
            findings, since ordinary LBBB does not produce this pattern.
          </li>
          <li>
            <strong>Concordant ST depression ≥ 1mm, in lead V1, V2, or V3 —
            3 points.</strong>
          </li>
          <li>
            <strong>Excessively discordant ST elevation ≥ 5mm, in a lead
            with a negative (discordant) QRS — 2 points.</strong> Some
            discordant ST elevation is expected in LBBB; this criterion
            flags when it is unusually large in absolute terms.
          </li>
        </ul>
        <p>
          A total score of <strong>3 or more</strong> is the diagnostic
          threshold. Reported performance has varied meaningfully between
          cohorts: the original derivation sample reported a sensitivity of
          around 78% and specificity of 90%, while the paper's own
          validation sample — more often quoted in subsequent literature —
          reported a much lower sensitivity of approximately 36% alongside a
          specificity of 96%. A later pooled analysis by Tabas and
          colleagues (2008), combining roughly 1,600 patients across ten
          studies, reported sensitivity as low as around 20%, with
          specificity remaining consistently high at 90–98% across studies.
          The pattern across this literature is consistent even though the
          exact numbers vary: the original criteria are highly specific — a
          positive result is strong evidence of infarction — but insensitive,
          meaning a negative result cannot be used to rule MI out.
        </p>

        <h2>The Modified (Smith) Criteria</h2>
        <p>
          The original third criterion's main weakness is that a fixed 5mm
          cutoff does not account for how QRS voltage varies between leads
          and between patients — the same absolute millimetre of ST
          elevation is far more significant on top of a small S-wave than on
          top of a very deep one. Stephen Smith and colleagues addressed
          this in a 2012 <em>Annals of Emergency Medicine</em> paper by
          replacing the fixed 5mm rule with a proportionality rule: an{" "}
          <strong>ST/S ratio of ≤ −0.25</strong> — that is, ST elevation
          equal to at least 25% of the depth of the preceding S-wave, in a
          lead with discordant ST elevation. The first two criteria
          (concordant ST elevation and concordant ST depression in V1–V3)
          were left unchanged.
        </p>
        <p>
          The modified rule also changed how the criteria are combined:
          rather than summing weighted points to a threshold of 3, the{" "}
          <strong>modified criteria are met if any single one of the three
          findings is present</strong> — there is no point total to
          calculate. This combination — replacing an absolute cutoff with a
          proportional one, and replacing a weighted score with an any-one-
          positive rule — substantially improved sensitivity for detecting
          acute coronary occlusion while preserving the high specificity of
          the original criteria, and it is now the version generally
          preferred in emergency and cardiology practice over the original
          1996 weighting.
        </p>

        <h2>Application to Ventricular-Paced Rhythm</h2>
        <p>
          Both the original and modified criteria are described as
          applicable to ventricular-paced rhythm as well as to LBBB, since a
          paced rhythm produces a similar "artificial LBBB-like" QRS
          morphology with the same discordance problem. Formal validation in
          paced rhythm accumulated later than the original LBBB studies; a
          2021 study specifically examining paced rhythm reported a marked
          sensitivity advantage for the modified criteria over the original
          (approximately 81% vs 56%), consistent with the same pattern seen
          in LBBB. Criteria are noted to be less reliable during very fast
          paced rates, and, as with any ECG interpretation, are degraded by
          baseline artifact.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 68-year-old man with a known chronic LBBB presents with acute
          chest pain. His ECG shows a discordant (negative-QRS) lead with
          8mm of ST elevation on top of a 40mm S-wave.
        </p>
        <p>
          Under the <strong>original criteria</strong>, 8mm meets the ≥5mm
          discordant threshold, contributing 2 points — if no concordant
          changes are present elsewhere, his total score is only 2, which
          falls below the ≥3 threshold and would be read as{" "}
          <strong>negative</strong>, despite a genuinely large absolute ST
          elevation. Under the <strong>modified criteria</strong>, the ST/S
          ratio here is 8/40 = 0.20 in magnitude — which does <em>not</em>{" "}
          meet the ≤ −0.25 threshold either, so this particular example
          would also be negative by the modified rule. This illustrates why
          the ratio, not just the absolute millimetre count, is the
          deciding factor under the modified criteria — a lead with a
          smaller S-wave showing the same 8mm of ST elevation could easily
          cross the ratio threshold and flag positive, while this one, with
          its very deep S-wave, does not.
        </p>

        <h2>Clinical Application and Limitations</h2>
        <ul>
          <li>
            <strong>A negative result never rules out MI.</strong> Even the
            best-performing version of these criteria has insufficient
            sensitivity to exclude acute coronary occlusion on its own.
            Serial ECGs, troponin measurement, and clinical assessment
            remain necessary regardless of the Sgarbossa result.
          </li>
          <li>
            <strong>Current guidance has moved away from "new LBBB = STEMI"
            by default.</strong> Contemporary ACC/AHA guidance no longer
            treats a new or presumed-new LBBB alone as a STEMI-equivalent,
            instead favouring objective ECG criteria such as the
            modified Sgarbossa rule to decide who needs emergent
            catheterisation, reducing unnecessary catheter-lab activations
            for patients whose LBBB is not accompanied by a genuine acute
            occlusion.
          </li>
          <li>
            <strong>Confounders reduce reliability.</strong> Severe
            tachycardia, hyperkalaemia, and baseline artifact can all distort
            the ST-segment and QRS measurements the criteria depend on.
          </li>
          <li>
            <strong>A diagnostic aid, not a replacement for angiography.</strong>{" "}
            A positive result supports urgent reperfusion therapy; it does
            not itself identify the culprit vessel or replace angiographic
            assessment.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Which version should I use — original or modified?",
            a: "The Modified (Smith) criteria are generally preferred in current practice: they preserve the high specificity of the original 1996 criteria while substantially improving sensitivity, by replacing the fixed 5mm discordant-ST-elevation cutoff with a proportional ST/S ratio.",
          },
          {
            q: "Does a negative Sgarbossa result rule out a heart attack?",
            a: "No. Even the modified criteria are not sensitive enough to exclude acute MI on their own. A negative result should be followed by serial ECGs, troponin testing, and ongoing clinical assessment.",
          },
          {
            q: "Do these criteria apply to a paced rhythm, or only to LBBB?",
            a: "Both. Ventricular-paced rhythm produces a similar QRS discordance pattern to LBBB, and both the original and modified criteria are described as applicable, though the modified criteria show a clearer sensitivity advantage over the original in paced rhythm specifically.",
          },
          {
            q: "Is a new LBBB by itself still treated as a STEMI-equivalent?",
            a: "No, not by current guidance. Practice has moved away from automatically treating every new or presumed-new LBBB as a STEMI-equivalent, in favour of applying objective ECG criteria — such as the modified Sgarbossa rule — alongside clinical judgement to decide who needs emergent catheterisation.",
          },
        ]}
      />

      <RelatedTools slugs={["heart-score-calculator", "timi-score-calculator", "grace-risk-score"]} />

      <References
        items={[
          {
            text: "Sgarbossa EB, Pinski SL, Barbagelata A, et al. Electrocardiographic diagnosis of evolving acute myocardial infarction in the presence of left bundle-branch block. N Engl J Med. 1996;334(8):481-487.",
          },
          {
            text: "Smith SW, Dodd KW, Henry TD, Dvorak DM, Pearce LA. Diagnosis of ST-elevation myocardial infarction in the presence of left bundle branch block with the ST-elevation to S-wave ratio in a modified Sgarbossa rule. Ann Emerg Med. 2012;60(6):766-776.",
          },
          {
            text: "Tabas JA, Rodriguez RM, Seligman HK, Goldschlager NF. Electrocardiographic criteria for detecting acute myocardial infarction in patients with left bundle branch block: a meta-analysis. Ann Emerg Med. 2008;52(4):329-336.",
          },
        ]}
      />
    </>
  );
}
