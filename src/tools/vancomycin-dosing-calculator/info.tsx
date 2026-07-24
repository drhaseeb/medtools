import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function VancomycinDosingInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What This Calculator Does</h2>
        <p>
          Vancomycin is a glycopeptide antibiotic and one of the most
          frequently prescribed drugs for serious methicillin-resistant{" "}
          <em>Staphylococcus aureus</em> (MRSA) infections — bacteraemia,
          endocarditis, osteomyelitis, and severe skin/soft-tissue or
          pulmonary infections. It is also one of the least forgiving drugs
          in routine hospital use: it has a narrow therapeutic index, its
          clearance depends almost entirely on the kidneys, and both
          under-dosing (treatment failure, resistance selection) and
          over-dosing (acute kidney injury) are common and clinically
          important. This tool estimates a renal-function-adjusted loading
          dose and an empiric maintenance dose/interval from a patient's age,
          sex, height, actual body weight, and serum creatinine, and flags
          the specific situations — severe renal impairment and
          hemodialysis — where a formula should not be used at all. It
          reflects current AUC-guided dosing practice rather than the older
          trough-only teaching still found in many textbooks. Once a peak and
          trough level are available, an optional second section calculates
          an estimated AUC₂₄ and a suggested dose adjustment using the same
          bedside pharmacokinetic method the 2020 guideline describes for
          programs without access to Bayesian dosing software.
        </p>

        <h2>Why Vancomycin Dosing Has to Be Individualized</h2>
        <p>
          Unlike a drug with a wide safety margin, vancomycin's efficacy and
          toxicity both track the same underlying variable: total drug
          exposure over time. Too little exposure risks a sub-therapeutic
          concentration against the target organism — a particular concern
          for MRSA strains with a minimum inhibitory concentration (MIC) at
          the upper end of the susceptible range — while too much exposure
          is directly associated with vancomycin-induced acute kidney
          injury. Because vancomycin is cleared almost entirely unchanged by
          the kidneys, and because renal function varies enormously between
          patients of the same weight (a frail 80-year-old and a muscular
          25-year-old with the same serum creatinine can have very different
          true clearances), a single fixed dose cannot safely serve every
          patient. Dosing must be estimated from the patient's renal
          function at the outset, and then refined using drug-level
          monitoring — which is exactly what changed substantially with the
          2020 consensus guideline discussed below.
        </p>

        <h2>The 2020 Consensus Guideline: From Trough-Only to AUC-Guided Dosing</h2>
        <p>
          For roughly a decade, standard U.S. practice — based on a 2009
          consensus guideline — was to target a single trough concentration
          of 15–20 mcg/mL for serious MRSA infections, on the assumption that
          a trough in this range reliably predicted adequate total drug
          exposure. Subsequent pharmacokinetic research showed this
          assumption was flawed: trough concentration correlates only
          loosely with the parameter that actually predicts both efficacy
          and toxicity, the ratio of the area under the 24-hour
          concentration-time curve to the MIC (AUC₂₄/MIC). Chasing a trough
          of 15–20 mcg/mL as a blanket target was subsequently linked to
          substantially higher rates of nephrotoxicity than AUC-based dosing
          achieving the same efficacy target, without a clear benefit in
          outcomes.
        </p>
        <p>
          In response, ASHP, the Infectious Diseases Society of America
          (IDSA), the Pediatric Infectious Diseases Society (PIDS), and the
          Society of Infectious Diseases Pharmacists (SIDP) published a
          revised consensus guideline in 2020 (Rybak et al., <em>American
          Journal of Health-System Pharmacy</em>, 2020). Its central change:
          for serious MRSA infections, clinicians should target an
          AUC₂₄/MIC ratio of 400–600 mg·h/L (assuming a standard MIC of 1
          mg/L by broth microdilution), calculated using either Bayesian
          software fed by one or two measured levels, or — if such software
          is unavailable — first-order pharmacokinetic equations. Routine
          isolated trough monitoring as the primary target was explicitly
          de-emphasized. The upper bound of 600 mg·h/L is not arbitrary:
          pooled data show nephrotoxicity risk climbs sharply once daily AUC
          exposure rises into the 600s and beyond, so the 400–600 window is
          deliberately framed as balancing efficacy against that
          accumulating renal risk, rather than as a target to exceed for
          extra safety margin.
        </p>
        <p>
          It is worth being precise about what each part of this calculator
          does. The first section provides the empiric starting regimen the
          AUC-guided workflow itself begins from: a weight-based loading dose
          and a renal-function-based maintenance dose/interval, calculated
          the same way a pharmacist would before the first level is ever
          drawn. The second, optional section accepts a peak and trough level
          once they are available and estimates an AUC₂₄ from them using
          closed-form first-order pharmacokinetic equations — the same
          bedside method the 2020 guideline describes as the fallback for
          programs without Bayesian dosing software, detailed further below.
          Neither section replaces true Bayesian dosing software where it is
          available, and every dose this tool returns — empiric or
          level-adjusted — should be treated as a starting point subject to
          clinical judgment and further monitoring, not a final,
          unmonitored prescription.
        </p>

        <h2>Estimating Renal Function: The Cockcroft-Gault Equation</h2>
        <p>
          Unlike many other areas of modern nephrology and general
          medication dosing, which have largely moved to the CKD-EPI
          equation for estimated glomerular filtration rate (eGFR),
          vancomycin dosing has specifically continued to rely on the older{" "}
          <strong>Cockcroft-Gault</strong> equation for estimated creatinine
          clearance (CrCl). This is a deliberate, guideline-endorsed choice
          rather than an oversight: nearly all of the published vancomycin
          population pharmacokinetic models — including the models built
          into the Bayesian software packages recommended by the 2020
          guideline — were themselves derived and validated using
          Cockcroft-Gault CrCl as the renal-function input. Substituting a
          CKD-EPI eGFR (which is normalized to a standard 1.73 m² body
          surface area and was derived from a different patient population
          for a different purpose) into a vancomycin dosing equation
          introduces a mismatch the original models were never validated
          against. For this reason, Cockcroft-Gault remains the standard for
          vancomycin — and several other renally cleared, narrow-therapeutic-
          index drugs — even in institutions that use CKD-EPI for general
          eGFR reporting.
        </p>
        <p>
          The equation, developed by Cockcroft and Gault in 1976, is:
        </p>
        <p>
          <strong>
            CrCl (mL/min) = [(140 − age) × weight (kg)] ÷ (72 × serum
            creatinine (mg/dL))
          </strong>{" "}
          — multiplied by 0.85 if the patient is female.
        </p>
        <p>
          The equation was derived using patients' actual body weight, but it
          was derived in a population that did not include a meaningful
          number of obese patients, and using raw actual body weight in a
          significantly overweight or obese patient overestimates true
          creatinine clearance (since fat mass contributes little to
          creatinine generation). Common practice — the convention this
          calculator follows — is:
        </p>
        <ul>
          <li>
            If actual body weight is at or below ideal body weight (IBW,
            via the Devine formula), use <strong>actual body weight</strong>.
          </li>
          <li>
            If actual body weight is above IBW but not by more than roughly
            30%, actual body weight is still commonly used.
          </li>
          <li>
            If actual body weight exceeds IBW by more than about 30%
            (significant obesity), an <strong>adjusted body weight</strong>{" "}
            — IBW + 0.4 × (actual weight − IBW) — is substituted in the
            equation instead, to avoid overestimating renal clearance in a
            way that would lead to an under-dosed regimen.
          </li>
        </ul>
        <p>
          This calculator applies that same weight-selection logic
          automatically and reports which weight basis was used for
          transparency.
        </p>

        <h2>Loading Dose Rationale</h2>
        <p>
          A loading dose exists to solve a specific timing problem:
          vancomycin takes several half-lives to reach steady-state
          concentrations on a fixed maintenance regimen, and in a
          renally-impaired patient on an extended dosing interval, that can
          mean days of sub-therapeutic exposure at the very start of
          treatment — precisely when source control has not yet occurred
          and bacterial burden is highest. A single, larger loading dose,
          calculated from <strong>actual body weight</strong> and given
          before renal function is factored in, rapidly achieves a
          therapeutic concentration regardless of how slowly the patient
          will subsequently clear the drug.
        </p>
        <p>
          The 2020 consensus guideline supports a loading dose of{" "}
          <strong>20–25 mg/kg actual body weight</strong> in seriously ill
          patients with suspected or confirmed MRSA infection, and this
          calculator uses 25 mg/kg (the upper, more aggressive end of that
          range, appropriate for critically ill or septic patients) capped
          at a commonly used practical ceiling of 3,000 mg for any single
          dose, regardless of how large the calculated dose would otherwise
          be. Because it is intended as a single, rapid-loading dose rather
          than a sustained regimen, it is deliberately <strong>not</strong>{" "}
          reduced for renal impairment — a patient with severe kidney
          disease still benefits from reaching a therapeutic concentration
          quickly; it is only the drug's subsequent elimination, and
          therefore the maintenance interval, that renal function should
          govern.
        </p>

        <h2>Maintenance Dosing and Interval Selection</h2>
        <p>
          Maintenance dosing is also calculated from actual body weight —{" "}
          <strong>15–20 mg/kg per dose</strong> is the standard empiric
          range — but unlike the loading dose, the interval between doses is
          stretched out as renal function falls, since a patient who clears
          the drug more slowly needs longer between doses to avoid
          accumulation. This calculator uses commonly cited empiric starting
          intervals based on estimated CrCl:
        </p>
        <ul>
          <li><strong>CrCl ≥ 90 mL/min</strong> (normal/augmented clearance): every 8–12 hours.</li>
          <li><strong>CrCl 50–89 mL/min</strong> (mildly reduced): every 12 hours.</li>
          <li><strong>CrCl 20–49 mL/min</strong> (moderately reduced): every 24 hours.</li>
          <li>
            <strong>CrCl &lt; 20 mL/min</strong> or hemodialysis: no fixed
            interval is offered — see the special-populations section below.
          </li>
        </ul>
        <p>
          These intervals are deliberately framed as an{" "}
          <em>empiric starting point</em>, exactly as they would be used in
          practice on day one of therapy, before the first vancomycin level
          is drawn. From that point forward, the 2020 guideline recommends
          the dose and interval be refined using AUC-guided monitoring
          rather than left on the initial empiric regimen for the duration
          of treatment — particularly for therapy courses beyond a few days,
          in critically ill patients, or in anyone with unstable renal
          function.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 58-year-old man, 82 kg, 175 cm tall, is admitted with MRSA
          bacteraemia. Serum creatinine is 1.0 mg/dL. His Devine IBW is
          50 + 2.3 × (68.9 − 60) ≈ 70.5 kg; since his actual weight (82 kg)
          is only about 16% above IBW — under the ~30% threshold — actual
          body weight is used directly in the Cockcroft-Gault equation:
          CrCl = [(140 − 58) × 82] ÷ (72 × 1.0) ≈{" "}
          <strong>93 mL/min</strong>, i.e. essentially normal renal
          function.
        </p>
        <p>
          Loading dose: 25 mg/kg × 82 kg ≈ 2,050 mg, rounded to{" "}
          <strong>2,000 mg IV once</strong> (well under the 3,000 mg
          ceiling). Maintenance dose: 15–20 mg/kg × 82 kg ≈{" "}
          <strong>1,250–1,650 mg IV every 8–12 hours</strong>, since his CrCl
          of 93 mL/min falls in the normal/augmented-clearance band. A
          trough or, ideally, an AUC-guided assessment (via Bayesian
          software or a paired peak/trough) would then be obtained around
          the third or fourth maintenance dose to confirm the regimen is
          achieving an AUC₂₄/MIC in the 400–600 range, and adjusted from
          there.
        </p>

        <h2>Special Populations: Obesity</h2>
        <p>
          Obesity affects vancomycin dosing in two separate ways that are
          easy to conflate. First, for the loading and maintenance{" "}
          <em>doses themselves</em>, current guidance is to use{" "}
          <strong>actual (total) body weight</strong>, not an adjusted or
          ideal weight — vancomycin's volume of distribution scales
          reasonably well with total body weight even in obesity, and
          under-dosing an obese patient by using IBW has repeatedly been
          shown to produce sub-therapeutic exposure. Second, for the{" "}
          <em>Cockcroft-Gault renal function estimate</em> that determines
          the dosing interval, an adjusted body weight is substituted once
          the patient is significantly above ideal weight, precisely
          because raw actual weight in that specific equation overstates
          true clearance, as explained above. These two decisions point in
          different directions (actual weight for the dose, adjusted weight
          for the renal-function estimate feeding the interval) and mixing
          them up is a recognized, real-world dosing error. In morbid
          obesity, empiric mg/kg dosing becomes progressively less reliable
          and many centers cap the total empiric dose and move to
          pharmacokinetic-consult or Bayesian dosing earlier rather than
          extrapolating a fixed mg/kg formula to very high total doses.
        </p>

        <h2>Special Populations: Renal Impairment, AKI, and Hemodialysis</h2>
        <p>
          This calculator deliberately declines to output a formulaic
          maintenance regimen in two situations, and instead flags them for
          specialist input:
        </p>
        <ul>
          <li>
            <strong>Severe renal impairment (CrCl &lt; 20 mL/min):</strong>{" "}
            at this level of renal dysfunction, vancomycin elimination is
            slow, highly variable between patients, and prone to
            unpredictable accumulation. A fixed interval extrapolated from a
            simple nomogram is far more likely to be wrong at this end of
            the renal-function spectrum, and level-guided, individualized
            dosing (pharmacokinetic consult, or Bayesian software) is
            standard practice rather than an optional refinement.
          </li>
          <li>
            <strong>Intermittent hemodialysis:</strong> HD patients require
            an entirely different framework, not a longer version of the
            same interval-based nomogram. A loading dose in a similar
            15–25 mg/kg actual-body-weight range is still generally used,
            but subsequent maintenance dosing depends on the specific
            dialysis membrane (high-flux membranes clear a clinically
            significant amount of vancomycin; older low-flux membranes
            largely do not), the time elapsed since the previous session,
            and a pre-dialysis (trough) level — commonly re-dosed at the end
            of, or during, a dialysis session rather than on a fixed
            clock-based interval. This is highly protocol- and
            institution-dependent, which is exactly why this calculator
            flags it for pharmacy/nephrology dosing rather than guessing.
          </li>
          <li>
            <strong>Acute kidney injury (AKI):</strong> the Cockcroft-Gault
            equation assumes stable, steady-state renal function. In acute
            AKI, a rising creatinine understates true impairment (clearance
            is falling faster than creatinine is rising to reflect it),
            while a falling creatinine during recovery can overstate
            remaining impairment. Any single creatinine value in a patient
            with rapidly changing renal function should be interpreted with
            this lag in mind, and dosing in AKI generally warrants closer,
            more frequent level-based reassessment than in a patient with
            stable chronic kidney disease.
          </li>
        </ul>

        <h2>Monitoring in Practice</h2>
        <p>
          The 2020 guideline's preferred monitoring method is Bayesian
          software (using population pharmacokinetic models fitted to the
          individual patient from one or, ideally, two measured levels),
          which can estimate the AUC₂₄ directly without requiring precisely
          timed peak-and-trough sampling. Where Bayesian software is not
          available, first-order pharmacokinetic equations using a single
          trough (and sometimes a peak) can approximate the AUC, though with
          less precision. In settings where neither is readily available, a
          trough target of 15–20 mcg/mL — the old primary target — is still
          used by some programs purely as a practical surrogate for AUC in
          the 400–600 range, on the understanding that this is an
          approximation carried over from prior practice rather than the
          guideline's preferred method. Regardless of which method is used,
          the guideline recommends monitoring be individualized to illness
          severity and treatment duration — a single dose of intravenous
          antibiotics for line-flush indications does not need the same
          scrutiny as a multi-week course for endocarditis.
        </p>

        <h2>AUC-Guided Dose Adjustment From a Peak and Trough Level</h2>
        <p>
          Once a patient has been on a steady maintenance regimen long enough
          to reach steady state, a peak and trough level drawn during the
          same dosing interval let this calculator estimate the current
          AUC₂₄ and suggest a proportional dose adjustment — using the
          classic two-level ("Sawchuk-Zaske") first-order pharmacokinetic
          equations method, the same approach the 2020 consensus guideline
          points to as a bedside fallback where Bayesian dosing software
          isn't available.
        </p>
        <p>The calculation proceeds in four closed-form steps — no iterative solving is required:</p>
        <ol>
          <li>
            <strong>Elimination rate constant (Ke):</strong> from the peak
            and trough levels and the time between when they were drawn,
            Ke = ln(peak ÷ trough) ÷ (time between the two draws). Half-life
            = ln(2) ÷ Ke.
          </li>
          <li>
            <strong>Back-extrapolated true peak:</strong> because the peak
            sample is usually drawn 1–2 hours after the infusion actually
            ends (to allow drug distribution), the measured peak is slightly
            lower than the true concentration at the moment infusion stopped.
            This calculator extrapolates back to that true peak using Ke and
            the time elapsed between the end of infusion and the peak draw.
          </li>
          <li>
            <strong>AUC for one dosing interval:</strong> the concentration
            curve within one interval is split into two segments — a rising,
            roughly linear segment during the infusion itself, and a
            log-linear declining segment from the true peak down to the
            trough — and each is summed using the standard trapezoidal
            formulas for those segments, then added together.
          </li>
          <li>
            <strong>Scaling to AUC₂₄:</strong> the single-interval AUC is
            scaled by (24 ÷ dosing interval) to get the standard 24-hour AUC
            used for the 400–600 mg·h/L target comparison.
          </li>
        </ol>
        <p>
          From there, adjusting the dose is straightforward first-order
          pharmacokinetics: because AUC is directly proportional to total
          daily dose at steady state (holding the interval constant),
          new daily dose = current daily dose × (target AUC₂₄ ÷ estimated
          AUC₂₄). This calculator applies that proportionality against both
          ends of the 400–600 target range and reports the resulting dose
          range, rounded to a practical increment.
        </p>
        <p>
          <strong>Worked example:</strong> a patient receiving vancomycin
          1,250 mg IV every 12 hours has a peak of 30 mg/L drawn 1 hour after
          a 1-hour infusion ends, and a trough of 12 mg/L drawn just before
          the next dose. Time between the two draws = 12 − 1 − 1 = 10 hours,
          so Ke = ln(30 ÷ 12) ÷ 10 ≈ 0.092/hr (half-life ≈ 7.6 hours). The
          true peak, back-extrapolated by 1 hour, is 30 × e^(0.092×1) ≈ 32.9
          mg/L. AUC for this interval = [1 × (32.9 + 12) ÷ 2] + [(32.9 − 12)
          ÷ 0.092] ≈ 22.4 + 227.8 ≈ 250.3 mg·h/L, and AUC₂₄ = 250.3 × (24 ÷
          12) ≈ <strong>501 mg·h/L</strong> — already within the 400–600
          target, so only a small adjustment (this calculator suggests
          1,000–1,500 mg at the same interval) would be needed to keep it
          centered in range as circumstances change.
        </p>
        <p>
          <strong>Safety caveats specific to this feature:</strong> the whole
          calculation depends on accurate draw timing and true steady state —
          for q8–q12h dosing that generally means waiting until before the
          4th or 5th dose, and for q24h dosing before the 3rd dose, later
          still if renal function is significantly impaired or unstable.
          A trough drawn late, a peak drawn too early (before distribution is
          complete), or levels drawn before steady state will all distort
          the estimate, sometimes substantially. This equations-based method
          is also inherently less accurate than true Bayesian dosing software
          (which can incorporate a population prior and handle imperfect
          sample timing), and any significant change in renal function
          invalidates a previous estimate and warrants a fresh level.
        </p>

        <h2>Limitations of This Calculator</h2>
        <ul>
          <li>
            <strong>The AUC-guided adjustment section is an equations-based
            bedside estimate, not Bayesian software.</strong> It requires
            accurately timed peak and trough levels at true steady state and
            is inherently less precise than a validated Bayesian dosing
            program — use Bayesian software where your institution has
            access to it.
          </li>
          <li>
            <strong>Cockcroft-Gault has known limitations</strong>{" "}
            in patients with extremes of muscle mass (amputees,
            malnutrition, bodybuilders), in acute/unstable renal function,
            and in advanced age — treat the estimated CrCl as an estimate,
            not a measured value.
          </li>
          <li>
            <strong>Severe renal impairment and hemodialysis outputs are
            intentionally non-formulaic</strong> and require pharmacy/
            nephrology input — this is a deliberate safety design choice,
            not a missing feature.
          </li>
          <li>
            <strong>Not validated for pediatric patients.</strong>{" "}
            Pediatric vancomycin dosing uses different weight-based (mg/kg)
            regimens and its own AUC targets, with its own guidance within
            the 2020 consensus document — this tool is for adults only.
          </li>
          <li>
            <strong>Local antimicrobial stewardship policy always
            takes precedence.</strong> Institutional protocols, formulary
            premixed concentrations, and pharmacy dosing services should
            override a general calculator whenever the two disagree.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Why does this calculator use Cockcroft-Gault instead of CKD-EPI/eGFR?",
            a: "Because the population pharmacokinetic models vancomycin dosing (including the Bayesian software recommended by the 2020 consensus guideline) were built and validated using Cockcroft-Gault creatinine clearance, not CKD-EPI eGFR. Substituting eGFR would introduce a mismatch these models were never validated against, so Cockcroft-Gault remains the standard specifically for vancomycin and several other renally cleared, narrow-therapeutic-index drugs.",
          },
          {
            q: "Is a trough of 15-20 mcg/mL still the goal?",
            a: "No, not as the primary target. The 2020 ASHP/IDSA/PIDS/SIDP consensus guideline shifted the primary target to an AUC24/MIC of 400-600 mg·h/L, determined ideally with Bayesian software from one or two levels, because a trough of 15-20 mcg/mL was associated with more nephrotoxicity without a clear efficacy advantage over AUC-guided dosing. A trough in that range is still used by some programs only as a practical surrogate where AUC tools are unavailable.",
          },
          {
            q: "Why is the loading dose not reduced for kidney impairment?",
            a: "A loading dose is a single, one-time dose meant to rapidly reach a therapeutic concentration before the maintenance regimen reaches steady state. Renal function affects how quickly the drug is subsequently cleared, which is why it changes the maintenance interval — but it does not change how much drug is needed to fill the patient's volume of distribution in the first place, which is what the loading dose targets.",
          },
          {
            q: "Why does the calculator refuse to give a maintenance dose for hemodialysis patients?",
            a: "Hemodialysis maintenance dosing depends on the specific dialysis membrane (high-flux vs. low-flux), time since the last session, residual renal function, and a pre-dialysis level, not on a fixed calendar interval. Because this varies so much by institution and dialysis modality, a generic formula would be unsafe here — dosing and redosing should be handled by pharmacy/nephrology.",
          },
          {
            q: "Should I use actual, ideal, or adjusted body weight?",
            a: "Use actual body weight for the loading and maintenance doses themselves. For the Cockcroft-Gault renal function estimate specifically, use actual body weight if it is close to or below ideal body weight, and switch to an adjusted body weight only once actual weight exceeds ideal body weight by roughly 30% or more — this calculator applies that rule automatically and reports which weight basis it used.",
          },
          {
            q: "Can this calculator be used for children?",
            a: "No. It is built and validated for adults (18 years and older) only. Pediatric vancomycin dosing uses separate weight-based regimens and its own AUC targets, addressed separately within the 2020 consensus guideline.",
          },
          {
            q: "When should I use the AUC-guided adjustment section instead of the empiric dose?",
            a: "Once the patient has been on a stable maintenance regimen long enough to reach steady state (generally before the 4th-5th dose for q8-12h dosing, or the 3rd dose for q24h dosing) and has a peak and trough level drawn. Before that point, use the empiric starting regimen from the first section.",
          },
          {
            q: "Is this the same as Bayesian dosing software?",
            a: "No. This uses the classic two-level (Sawchuk-Zaske) first-order pharmacokinetic equations, a closed-form bedside method the 2020 guideline describes as a fallback where Bayesian software isn't available. Bayesian software can use a single level plus a population model and handle imperfect sample timing more robustly, and is guideline-preferred where accessible.",
          },
          {
            q: "What happens if my peak level is lower than my trough level?",
            a: "The calculator will flag this as invalid rather than return a number. A peak below the trough almost always means a sample timing or labeling error (e.g., the samples were swapped, or the 'peak' was actually drawn pre-dose) — recheck the draw times and sample labels before re-entering the levels.",
          },
        ]}
      />

      <RelatedTools slugs={["egfr-calculator", "ibw-calculator", "iv-infusion-calculator"]} />

      <References
        items={[
          {
            text: "Rybak MJ, Le J, Lodise TP, et al. Therapeutic monitoring of vancomycin for serious methicillin-resistant Staphylococcus aureus infections: A revised consensus guideline and review by the American Society of Health-System Pharmacists, the Infectious Diseases Society of America, the Pediatric Infectious Diseases Society, and the Society of Infectious Diseases Pharmacists. Am J Health Syst Pharm. 2020;77(11):835-864.",
            href: "https://academic.oup.com/ajhp/article/77/11/835/5810200",
          },
          {
            text: "Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine. Nephron. 1976;16(1):31-41.",
          },
          {
            text: "Devine BJ. Gentamicin therapy. Drug Intell Clin Pharm. 1974;8:650-655.",
          },
          {
            text: "Infectious Diseases Society of America. ASHP/PIDS/SIDP/IDSA Revised Consensus Guideline and Review for Therapeutic Monitoring of Vancomycin for Serious Methicillin-Resistant Staphylococcus aureus Infections.",
            href: "https://www.idsociety.org/practice-guideline/vancomycin/",
          },
          {
            text: "Pai MP, Neely M, Rodvold KA, Lodise TP. Innovative approaches to optimizing the delivery of vancomycin in individual patients. Adv Drug Deliv Rev. 2014;77:50-57.",
          },
        ]}
      />
    </>
  );
}
