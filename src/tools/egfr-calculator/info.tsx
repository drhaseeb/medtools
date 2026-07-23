import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function EgfrInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is eGFR and Why It Matters</h2>
        <p>
          The glomerular filtration rate (GFR) is the volume of blood
          filtered by the kidneys' glomeruli per minute, and it is the
          single best overall measure of kidney function. Directly measuring
          true GFR requires an infusion of an exogenous filtration marker
          such as inulin or iohexol — accurate, but impractical for routine
          care. In everyday practice, GFR is instead <em>estimated</em>{" "}
          (hence "eGFR") from a simple blood test — serum creatinine — using
          an equation that adjusts for age and sex, which act as proxies for
          an individual's baseline muscle mass and creatinine generation
          rate.
        </p>
        <p>
          eGFR underpins the definition, staging, and monitoring of chronic
          kidney disease (CKD) worldwide, guides drug dosing for renally
          cleared medications, and is one of the most frequently calculated
          numbers in both primary and secondary care.
        </p>

        <h2>From Cockcroft-Gault to CKD-EPI 2021</h2>
        <p>
          Creatinine-based kidney function estimation has gone through
          several generations. The Cockcroft-Gault equation (1976) estimates
          creatinine clearance rather than true GFR and remains widely used
          specifically for drug-dosing decisions because most dosing tables
          were originally validated against it. The Modification of Diet in
          Renal Disease (MDRD) equation (1999) was the first widely adopted
          GFR-estimating equation but performs poorly at near-normal GFR
          values. The CKD-EPI (Chronic Kidney Disease Epidemiology
          Collaboration) equation, first published in 2009, improved
          accuracy across the full range of kidney function and became the
          preferred equation in most international guidelines.
        </p>
        <p>
          The original 2009 CKD-EPI equation included a coefficient that
          produced a higher eGFR for patients recorded as Black, based on
          population-level differences in average muscle mass observed in
          the derivation cohorts. This race-based adjustment came under
          increasing scrutiny for embedding a biological assumption about
          race into a supposedly objective lab value, with data suggesting
          it could delay Black patients' referral to nephrology, transplant
          listing, and other race-independent care thresholds. In response,
          a joint task force of the National Kidney Foundation (NKF) and the
          American Society of Nephrology (ASN) commissioned a new, race-free
          CKD-EPI equation, published by Inker and colleagues in 2021 in the{" "}
          <em>New England Journal of Medicine</em>, developed and validated
          across a large, diverse pooled cohort. This race-free 2021
          CKD-EPI creatinine equation is what this calculator implements,
          and it has since been adopted as the recommended equation by
          KDIGO (Kidney Disease: Improving Global Outcomes) and major
          national nephrology bodies.
        </p>

        <h2>The Equation, Step by Step</h2>
        <p>
          The 2021 CKD-EPI creatinine equation takes the general form:
        </p>
        <p>
          eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)⁻¹·²⁰⁰ × 0.9938^age ×
          (1.012 if female)
        </p>
        <p>
          where Scr is serum creatinine in mg/dL, κ (kappa) is 0.7 for
          females and 0.9 for males, and α (alpha) is −0.241 for females and
          −0.302 for males. The two exponent terms — one applied when
          creatinine is at or below the sex-specific reference point (κ) and
          one applied when it's above — together shape the equation's
          non-linear relationship between creatinine and GFR, which is much
          steeper at low creatinine values than at high ones. If creatinine
          is measured in µmol/L, this calculator first converts it to mg/dL
          by dividing by 88.42.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 58-year-old woman has a serum creatinine of 1.1 mg/dL. Since
          this is above her κ of 0.7, the ratio Scr/κ = 1.57 is used in the
          second exponent term (the first term uses the minimum of the
          ratio and 1, which caps at 1 whenever creatinine exceeds κ).
          Working through the equation with age 58 and the female sex
          factor of 1.012 gives an eGFR of approximately 58 mL/min/1.73m² —
          placing her in CKD stage G3a (mildly-to-moderately decreased),
          which per this calculator's guidance would prompt monitoring
          every 6–12 months and a review of nephrotoxic medications, rather
          than urgent referral.
        </p>

        <h2>CKD Staging and What Each Stage Means</h2>
        <p>
          KDIGO stages CKD by GFR category (G1 through G5), summarized in
          the reference table on this page. Critically, a single eGFR
          reading below 60 does not by itself define CKD — the KDIGO
          definition requires markers of kidney damage or a GFR below 60
          mL/min/1.73m² to be present for <strong>at least three months</strong>,
          confirmed on at least two occasions, since an isolated low reading
          can reflect a transient acute kidney injury rather than chronic
          disease. Modern KDIGO guidance also stages CKD using a combined
          "heat-map" of GFR category (G1–G5) and albuminuria category (A1:
          normal to mildly increased, A2: moderately increased, A3:
          severely increased, based on the urine albumin-to-creatinine
          ratio, uACR) — two patients with an identical eGFR of 55 but
          different albuminuria categories carry meaningfully different
          risks of progression to kidney failure and cardiovascular
          events, which eGFR alone cannot capture.
        </p>

        <h2>Clinical Actions by Stage</h2>
        <ul>
          <li>
            <strong>G1–G2 (eGFR ≥60):</strong> no CKD on GFR grounds alone
            (unless albuminuria or other kidney damage markers are
            present); re-check annually if risk factors such as diabetes
            or hypertension exist.
          </li>
          <li>
            <strong>G3a–G3b (eGFR 30–59):</strong> monitor every 6–12
            months, review and dose-adjust nephrotoxic and renally cleared
            medications, and screen for CKD complications such as anaemia
            and mineral bone disease as GFR falls further within this
            range.
          </li>
          <li>
            <strong>G4 (eGFR 15–29):</strong> pre-end-stage renal disease
            management — urgent nephrology referral, medication
            dose-adjustment, and early discussion and preparation for
            renal replacement therapy (dialysis or pre-emptive
            transplantation) before it becomes urgently needed.
          </li>
          <li>
            <strong>G5 (eGFR &lt;15):</strong> kidney failure — immediate
            nephrology involvement and active renal replacement therapy
            planning.
          </li>
        </ul>

        <h2>Limitations of Creatinine-Based eGFR</h2>
        <ul>
          <li>
            <strong>Muscle mass extremes:</strong> creatinine is a
            byproduct of muscle metabolism, so eGFR is systematically
            overestimated in patients with very low muscle mass (frailty,
            amputation, malnutrition, spinal cord injury) and can be
            underestimated in very muscular individuals (bodybuilders) —
            in either case, the age/sex-based formula does not fully
            correct for an unusual body composition.
          </li>
          <li>
            <strong>Dietary influence:</strong> a high-meat diet or
            creatine supplementation can transiently raise serum
            creatinine independent of true kidney function.
          </li>
          <li>
            <strong>Not valid in acute kidney injury:</strong> the CKD-EPI
            equation assumes creatinine is at a physiological steady
            state. In acute kidney injury, creatinine is actively rising
            or falling and does not yet reflect true current filtration —
            eGFR should not be used to stage or guide management of AKI.
          </li>
          <li>
            <strong>Cystatin C as an alternative or adjunct:</strong>{" "}
            KDIGO guidance recommends confirming a GFR-based CKD diagnosis
            with a cystatin C-based or combined creatinine-cystatin C
            equation in situations where creatinine alone is considered
            unreliable, since cystatin C is less dependent on muscle mass.
          </li>
          <li>
            <strong>Not validated under 18:</strong> this calculator, like
            the underlying 2021 CKD-EPI creatinine equation, is derived
            and validated in adults; paediatric kidney function should be
            estimated using a paediatric-specific equation (e.g. the
            bedside Schwartz formula).
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Why doesn't this calculator ask for race anymore?",
            a: "The 2021 CKD-EPI creatinine equation, implemented here, deliberately removed the race coefficient that was part of the original 2009 equation. It was developed and validated on a large, diverse cohort without a race adjustment and is now the equation recommended by KDIGO and most national nephrology bodies.",
          },
          {
            q: "Is a single low eGFR reading enough to diagnose CKD?",
            a: "No. CKD requires evidence of kidney damage or a GFR below 60 persisting for at least three months, confirmed on at least two separate occasions — a single reading may reflect a transient, reversible acute kidney injury rather than chronic disease.",
          },
          {
            q: "Should eGFR be used to stage acute kidney injury?",
            a: "No. eGFR equations assume creatinine has reached a stable, steady-state value. In acute kidney injury, creatinine is actively changing and does not yet reflect the current true filtration rate, so AKI staging uses absolute and relative creatinine rise (or urine output), not eGFR.",
          },
          {
            q: "Why does urine albumin-to-creatinine ratio (uACR) matter alongside eGFR?",
            a: "KDIGO staging combines GFR category with albuminuria category into a single risk grid, because two people with the same eGFR but different amounts of albuminuria have meaningfully different risks of progressing to kidney failure and of cardiovascular events — eGFR alone doesn't capture that distinction.",
          },
        ]}
      />

      <RelatedTools slugs={["ibw-calculator", "acid-base-calculator", "meld-calculator"]} />

      <References
        items={[
          {
            text: "Inker LA, Eneanya ND, Coresh J, et al. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med. 2021;385(19):1737-1749.",
          },
          {
            text: "Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease.",
            href: "https://kdigo.org/guidelines/ckd-evaluation-and-management/",
          },
          {
            text: "Levey AS, Stevens LA, Schmid CH, et al. A new equation to estimate glomerular filtration rate. Ann Intern Med. 2009;150(9):604-612.",
          },
        ]}
      />
    </>
  );
}
