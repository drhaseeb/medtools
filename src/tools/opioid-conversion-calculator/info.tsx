import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function OpioidConversionInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is a Morphine Milligram Equivalent (MME)?</h2>
        <p>
          Opioids differ enormously in potency — 1 mg of hydromorphone is not
          remotely equivalent to 1 mg of morphine — which makes it hard to
          answer a simple question: how much total opioid, of any kind, is a
          patient actually taking? The Morphine Milligram Equivalent (MME) is
          a standardized unit designed to solve exactly that problem. Every
          opioid a patient is prescribed is multiplied by a conversion factor
          that expresses its potency relative to oral morphine, and the
          results are summed into a single number: total MME per day. A
          patient taking oxycodone 10 mg four times daily and hydrocodone 5
          mg twice daily is, on this metric, taking (10 × 1.5 × 4) + (5 × 1 ×
          2) = 70 MME/day, even though the two drugs are never directly
          compared in clinical practice.
        </p>
        <p>
          This calculator lets you add every opioid a patient is currently
          taking — including more than one at a time, which is common in
          real practice (e.g., a long-acting opioid plus a short-acting
          "breakthrough" opioid) — and returns both the per-drug contribution
          and the summed total daily MME, flagged against the current CDC
          reassessment thresholds discussed below.
        </p>

        <h2>Why MME Exists: History and the CDC Guideline</h2>
        <p>
          MME was developed as an epidemiological and surveillance tool, not
          a bedside dosing tool. Public health researchers and prescription
          drug monitoring programs (PDMPs) needed a way to compare opioid
          exposure across an entire population of patients taking dozens of
          different drugs at different strengths, in order to track overdose
          risk, identify high-risk prescribing patterns, and evaluate policy
          interventions. That population-level origin is essential context
          for everything else in this article: MME was never validated as a
          method for calculating an individual patient's next dose when
          switching drugs, only for describing aggregate exposure.
        </p>
        <p>
          The Centers for Disease Control and Prevention (CDC) published its
          first opioid prescribing guideline for chronic pain in 2016, which
          popularized MME thresholds of 50 and 90 MME/day as prompts for
          caution. That guideline was widely — and, according to the CDC's
          own 2022 update, often wrongly — applied as a rigid, hard ceiling
          by pharmacies, insurers, and some clinicians, in some cases leading
          to forced tapers, patient abandonment, and untreated pain. In
          response, the CDC published a revised <em>Clinical Practice
          Guideline for Prescribing Opioids for Pain — United States, 2022</em>{" "}
          (Dowell et al., MMWR Recommendations and Reports), which keeps MME
          as a useful reference concept but explicitly reframes the
          thresholds as prompts for individualized reassessment, not
          automatic cutoffs. That 2022 guideline remains the current, most
          authoritative U.S. clinical guidance on opioid prescribing and MME
          thresholds as of this writing, and it is the basis for the
          thresholds and conversion factors used in this calculator.
        </p>

        <h2>How This Calculator Works</h2>
        <p>
          For each opioid you add, you can enter either a dose per
          administration and a frequency per day (the calculator multiplies
          these to get a total daily dose), or the total daily dose directly
          if you already know it. That total is then multiplied by the
          drug's MME conversion factor to produce its MME/day contribution.
          Add as many opioids as the patient is actually taking — a common
          real-world scenario is a scheduled long-acting opioid plus an
          as-needed short-acting opioid for breakthrough pain — and the
          calculator sums every row into a single total daily MME.
        </p>
        <p>
          Two drugs are handled differently from the rest, because a flat
          multiplier would be inaccurate or misleading for them:
          transdermal fentanyl (dosed as a continuous patch in mcg/hr rather
          than a discrete oral dose-and-frequency) and methadone (whose
          potency relative to morphine is not constant but rises as the
          total daily dose increases). Both are explained in detail below.
        </p>

        <h2>The Standard Oral Conversion Factors</h2>
        <p>
          The oral conversion factors used in this calculator are drawn from
          the CDC's published MME conversion-factor table, which the CDC
          states accounts for more than 99% of the opioid oral pain
          medications dispensed by U.S. retail pharmacies:
        </p>
        <ul>
          <li><strong>Codeine:</strong> × 0.15</li>
          <li><strong>Hydrocodone:</strong> × 1</li>
          <li><strong>Morphine:</strong> × 1 (the reference drug — by definition its own factor is 1)</li>
          <li><strong>Tramadol:</strong> × 0.1</li>
          <li><strong>Oxycodone:</strong> × 1.5</li>
          <li><strong>Hydromorphone:</strong> × 4</li>
        </ul>
        <p>
          A critical limitation applies to every one of these numbers: they
          are analytic conversion factors used to standardize prescription
          data for surveillance, <em>not</em> validated equianalgesic ratios
          for clinical dose conversion. The CDC's own published guidance is
          explicit that these factors should not be used to calculate the
          starting dose of a new opioid when switching a patient from one
          drug to another — a point important enough that it has its own
          section later in this article. Individual response to any given
          opioid varies with genetics (e.g., CYP2D6 metabolizer status, which
          affects codeine and tramadol activation), renal and hepatic
          function, drug interactions, and incomplete cross-tolerance, none
          of which a flat multiplier can capture.
        </p>

        <h2>Converting IV and SC Doses to an Oral Equivalent</h2>
        <p>
          Morphine, hydromorphone, oxycodone, and tramadol are all commonly
          given by injection as well as by mouth — morphine and hydromorphone
          routinely by IV or subcutaneous (SC) infusion in hospital and
          palliative care settings, tramadol frequently by IV in many
          countries outside the United States, and oxycodone by IV in some
          countries where a parenteral formulation is marketed (it is not
          available in the U.S.). Because oral opioids undergo first-pass
          hepatic metabolism before reaching the bloodstream while IV and SC
          doses bypass this almost entirely, an oral dose and a parenteral
          dose of the same drug are not equivalent milligram-for-milligram —
          this calculator lets you select the route for these four drugs and
          converts to an oral-equivalent dose before applying the usual MME
          factor.
        </p>
        <p>
          IV and SC doses of the same drug are treated identically here,
          since both routes deliver close to 100% of the dose into the
          circulation, unlike oral administration.
        </p>
        <ul>
          <li>
            <strong>Morphine:</strong> published oral:parenteral ratios
            genuinely differ by region. A 32-institution U.S. survey and
            widely used U.S. palliative care references (e.g., Fast Facts and
            Concepts #36) commonly cite <strong>3:1</strong> (3 mg oral ≈ 1
            mg IV/SC). UK palliative care practice, following the Palliative
            Care Formulary (Twycross/Wilcock) and supported by a small
            crossover pharmacokinetic study (Takahashi et al.), more commonly
            uses <strong>2:1</strong>. This calculator lets you toggle
            between these two conventions rather than picking one silently —
            use whichever matches your local practice or training background.
          </li>
          <li>
            <strong>Hydromorphone:</strong> similarly convention-dependent —
            commonly cited as <strong>5:1</strong> in U.S. sources, or{" "}
            <strong>4:1</strong> in some other references. The same US/UK
            toggle applies to hydromorphone.
          </li>
          <li>
            <strong>Tramadol (IV):</strong> there is no well-established,
            widely agreed conversion ratio for IV tramadol — a 2023 survey
            found tramadol had the most variable reported ratio of any opioid
            studied. This calculator uses an approximate 1:1 ratio (broadly
            consistent with tramadol's ~70% oral bioavailability) but flags
            it explicitly as a low-confidence estimate.
          </li>
          <li>
            <strong>Oxycodone (IV):</strong> IV oxycodone is not marketed in
            the United States and has fewer large comparative studies than
            morphine or hydromorphone. This calculator uses an approximate
            2:1 ratio based on available comparative data, also flagged as
            lower-confidence than the morphine/hydromorphone ratios.
          </li>
        </ul>
        <p>
          <strong>An important scope caveat applies to this whole feature:</strong>{" "}
          the CDC's MME guidance is explicitly scoped to oral and transdermal
          opioids in outpatients — it does not officially endorse converting
          parenteral doses into an MME risk score, and clinical calculators
          such as MDCalc's MME tool explicitly state they should not be used
          for IV-to-oral conversions. The route-conversion feature here is
          provided as a convenience for documentation and rough risk-flagging
          only. It should never be used to calculate an actual prescribing
          dose when switching a patient between routes — equianalgesic ratios
          are population averages with wide individual variability (one
          widely cited analysis found individual conversion ratios ranging
          roughly 3-fold above and below the population average), and the
          same 25-50% empiric dose reduction discussed later in this article
          for opioid rotation applies with at least as much force to a
          route change.
        </p>

        <h2>Methadone: Why Its Conversion Factor Is Not Constant</h2>
        <p>
          Unlike every other opioid in this calculator, methadone does not
          use a single MME multiplier. Early surveillance work used a flat
          factor (commonly cited as 3–4), but analyses of methadone's
          pharmacology showed this systematically underestimated its
          effective potency at higher doses — methadone accumulates due to
          its long and variable half-life, and it has additional NMDA-
          receptor antagonist activity that becomes proportionally more
          significant at higher total daily exposure. To correct for this,
          the CDC adopted a dose-tiered conversion factor that increases in
          steps as the total daily methadone dose rises:
        </p>
        <ul>
          <li><strong>1–20 mg/day:</strong> factor × 4</li>
          <li><strong>21–40 mg/day:</strong> factor × 8</li>
          <li><strong>41–60 mg/day:</strong> factor × 10</li>
          <li><strong>≥61 mg/day:</strong> factor × 12</li>
        </ul>
        <p>
          This calculator applies the correct tier automatically based on the
          total daily methadone dose you enter — you do not need to look up
          or select the tier yourself. This is a real and clinically
          important safety nuance: a clinician who mentally applies a single,
          low, flat factor to a high-dose methadone regimen will substantially
          <em> underestimate</em> that patient's true opioid burden and
          overdose risk. Methadone's unusual pharmacokinetics — a long and
          unpredictable half-life that can extend well beyond its analgesic
          duration, meaning the drug can keep accumulating in the body for
          days after a dose increase, well after any apparent clinical effect
          has worn off — is also why methadone is disproportionately
          represented in opioid overdose deaths relative to how often it is
          prescribed, a pattern the CDC has specifically documented and
          flagged as a Vital Signs report. For this reason, methadone
          initiation, dose adjustment, and any rotation onto or off methadone
          should involve a clinician with specific experience in methadone
          dosing, or a pain/palliative medicine specialist.
        </p>

        <h2>Fentanyl Patch: A Different Basis for Conversion</h2>
        <p>
          Transdermal fentanyl is not dosed as a discrete oral tablet taken
          at a certain frequency — it is a continuous-release patch, applied
          to intact skin and typically changed every 72 hours, with its
          strength expressed as a delivery rate in micrograms per hour
          (mcg/hr). Because of this fundamentally different route and
          release profile, fentanyl cannot be converted using the same
          "dose × frequency × factor" arithmetic used for oral opioids. The
          CDC's published analytic approach instead applies a single
          multiplier directly to the patch's mcg/hr rating: MME/day = patch
          strength (mcg/hr) × 2.4. This reproduces the commonly cited
          clinical correspondence — a 25 mcg/hr patch corresponds to roughly
          60 mg of oral morphine per 24 hours, and a 100 mcg/hr patch to
          roughly 240 mg — which is why this calculator asks only for patch
          strength, with no separate "frequency" field.
        </p>
        <p>
          Even so, this factor should be treated with real caution. Published
          clinical equianalgesic ratios between transdermal fentanyl and oral
          morphine vary considerably across references — commonly cited
          ranges span roughly 80:1 to 150:1 — reflecting genuinely wide
          inter-individual variability in absorption (affected by fever,
          cachexia, skin thickness, and local blood flow at the application
          site) and in fentanyl's clinical potency more broadly. The 2.4
          multiplier used here is the CDC's standardized analytic factor for
          MME surveillance purposes; it is a reasonable, widely used
          approximation, but it is not a substitute for a specialist-guided
          conversion if you are actually initiating or rotating a patient
          onto transdermal fentanyl.
        </p>

        <h2>Worked Example: A Patient on Multiple Concurrent Opioids</h2>
        <p>
          A patient with chronic pain is prescribed extended-release
          morphine 30 mg twice daily for baseline pain control, plus
          oxycodone 5 mg up to four times daily as needed for breakthrough
          pain, and is also using a 25 mcg/hr fentanyl patch that was never
          discontinued when the oral regimen was started (a real and
          dangerous scenario this calculator is specifically designed to
          catch). Calculating each component separately:
        </p>
        <ul>
          <li>Morphine: 30 mg × 2/day × 1 = 60 MME/day</li>
          <li>Oxycodone: 5 mg × 4/day × 1.5 = 30 MME/day</li>
          <li>Fentanyl patch: 25 mcg/hr × 2.4 = 60 MME/day</li>
        </ul>
        <p>
          Summed together, this patient's total daily MME is 60 + 30 + 60 =
          <strong> 150 MME/day</strong> — well above the CDC's 90 MME/day
          higher-risk threshold, even though no single component looks
          alarming in isolation. This is precisely the scenario MME
          surveillance was designed to surface: overlapping prescriptions
          from different indications or different prescribers that, taken
          individually, might each look moderate, but together represent
          substantial combined opioid exposure and overdose risk.
        </p>

        <h2>The CDC's 50 and 90 MME/Day Thresholds</h2>
        <p>
          The 2022 CDC Clinical Practice Guideline (Recommendation 4)
          advises that clinicians should carefully reassess individual
          benefits and risks before increasing a patient's total dosage to
          50 MME/day or more, and should use particular caution and
          carefully justify any decision to increase further at or above 90
          MME/day, since evidence of added benefit above this level is
          limited while overdose risk continues to climb. These are the
          same numeric thresholds carried over from the CDC's original 2016
          guideline, and they remain current as of the 2022 update.
        </p>
        <p>
          What changed substantively in 2022 is not the numbers but how they
          should be used. The CDC explicitly states that these thresholds
          are not intended to function as hard, inflexible limits or as a
          basis for abrupt, involuntary dose reductions — a pattern of
          rigid application after 2016 that the CDC itself identified as
          having caused patient harm, including undertreated pain, functional
          decline, and precipitated withdrawal in patients tapered too
          quickly. Practically, this means a total MME above 50, and
          especially above 90, should trigger a deliberate, documented
          reassessment — of pain control, function, risk factors for
          overdose (concurrent benzodiazepines or other sedatives, sleep
          apnea, renal or hepatic impairment, substance use history), and
          whether naloxone co-prescribing is appropriate — rather than an
          automatic, forced reduction in dose.
        </p>

        <h2>The Most Important Caution: MME Is Not a Dosing Instruction</h2>
        <p>
          This is the single most important limitation of this calculator,
          and of MME generally, and it deserves to be stated plainly: MME
          conversion factors were built for population-level surveillance of
          opioid exposure, not for calculating the starting dose of a new
          opioid when a patient is actually being switched or rotated. Using
          a calculated MME-equivalent dose as the literal starting dose of a
          new opioid is a well-documented, real-world cause of fatal
          overdose, and it is explicitly warned against in the CDC's own
          published guidance.
        </p>
        <p>
          The reason is incomplete cross-tolerance: a patient who has built
          up tolerance to one opioid does not carry that same degree of
          tolerance over to a different opioid, even at a mathematically
          "equivalent" dose — partly because of differences in receptor
          binding, metabolism, and individual pharmacogenomics between
          drugs. Prescribing the full calculated equivalent dose of a new
          opioid can therefore produce a substantially larger clinical
          effect than intended, including respiratory depression and death,
          even though the arithmetic is technically correct.
        </p>
        <p>
          The accepted clinical safeguard, described in opioid-rotation
          literature such as the expert consensus review by Fine and
          Portenoy, is to calculate the equivalent dose and then reduce it —
          commonly by roughly 25–50% for most opioids — before prescribing,
          and then titrate upward against the patient's actual response.
          Methadone requires even greater caution and a larger empiric
          reduction given its accumulation risk, and should not be dosed
          from a simple equivalence calculation at all without specialist
          input. This calculator deliberately does not offer an "automatic
          rotation dose" output for exactly this reason — it reports total
          exposure for risk assessment, and any actual conversion decision
          must be made by a clinician, with an empiric safety reduction
          built in, and close follow-up.
        </p>

        <h2>Special Populations and Additional Cautions</h2>
        <ul>
          <li>
            <strong>Opioid-naive patients:</strong> conversion factors and
            MME thresholds were derived largely from patients already on
            chronic opioid therapy. An opioid-naive patient should generally
            be started at a low dose regardless of what an MME calculation
            might suggest, since they have no baseline tolerance at all.
          </li>
          <li>
            <strong>Concurrent CNS depressants:</strong> co-prescribed
            benzodiazepines, other sedative-hypnotics, muscle relaxants, or
            alcohol use substantially raise overdose risk at any given MME,
            because respiratory depression from multiple CNS depressants is
            more than additive. The CDC guideline specifically recommends
            avoiding concurrent benzodiazepine and opioid prescribing where
            possible.
          </li>
          <li>
            <strong>Renal and hepatic impairment:</strong> reduced clearance
            of active opioids or their metabolites (e.g., morphine's
            active metabolites in renal failure) can raise effective
            exposure well above what an MME calculation — which does not
            adjust for organ function — would suggest.
          </li>
          <li>
            <strong>Sleep apnea and respiratory disease:</strong> obstructive
            sleep apnea, COPD, and other conditions that impair ventilatory
            drive increase the risk of opioid-induced respiratory depression
            at any given dose.
          </li>
          <li>
            <strong>Pregnancy:</strong> opioid dosing decisions in pregnancy
            require specialist input beyond an MME calculation, balancing
            maternal pain control against fetal and neonatal risk.
          </li>
          <li>
            <strong>Pediatric patients:</strong> the conversion factors and
            thresholds used here come from adult data and are not validated
            for pediatric dosing.
          </li>
        </ul>

        <h2>Limitations of MME as a Metric</h2>
        <p>
          Beyond the cautions already discussed, it is worth being explicit
          about what MME cannot tell you. It does not measure or predict
          analgesic efficacy for an individual patient — two patients on the
          same MME/day can have very different pain control and very
          different side-effect burdens. It does not account for tolerance
          that develops over time with stable, long-term use, which is
          different from cross-tolerance to a new opioid. It does not
          capture route of administration effects beyond what the
          conversion factor already assumes (all factors here assume oral
          administration except the fentanyl patch, which is transdermal).
          And it was derived from population prescribing data, not from
          individually titrated equianalgesic trials, so any single
          patient's true relative sensitivity to two different opioids can
          reasonably fall outside what the published factors predict.
        </p>
        <p>
          For all of these reasons, this calculator — like any MME tool —
          is best used as a structured way to notice cumulative opioid
          exposure and prompt a deliberate risk conversation, not as a
          precision instrument for individualizing a specific patient's
          dose.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can I use the calculated MME to figure out the starting dose of a new opioid?",
            a: "No. MME conversion factors are designed for population-level surveillance of opioid exposure, not for calculating an individual patient's dose when switching opioids. Because of incomplete cross-tolerance, prescribing a new opioid at its full calculated equivalent dose is a well-documented cause of fatal overdose. If you are actually rotating opioids, reduce the calculated equivalent dose (commonly by roughly 25-50%, more for methadone) and titrate to effect — ideally with specialist input for complex cases.",
          },
          {
            q: "Why doesn't methadone use a single conversion factor like the other opioids?",
            a: "Methadone's potency relative to morphine rises as the total daily dose increases, due to its long, variable half-life and additional NMDA-receptor antagonist activity. Using a single flat factor — especially a low one — significantly underestimates true opioid exposure at higher methadone doses, which is part of why methadone is disproportionately involved in opioid overdose deaths. This calculator automatically applies the correct CDC dose-tiered factor (4, 8, 10, or 12) based on the total daily dose you enter.",
          },
          {
            q: "Why does the fentanyl patch only ask for one number, not a dose and frequency?",
            a: "Transdermal fentanyl is a continuous-release patch typically changed every 72 hours, with its strength already expressed as a delivery rate in micrograms per hour (mcg/hr) rather than a discrete dose taken at intervals. The calculator applies the CDC's conversion factor (2.4 x mcg/hr) directly to that patch strength.",
          },
          {
            q: "Are the 50 and 90 MME/day thresholds hard limits I must not exceed?",
            a: "No. The CDC's 2022 guideline explicitly states these are prompts for individualized reassessment of benefits and risks, not rigid cutoffs or mandatory dose ceilings. The CDC has specifically warned against rigid, across-the-board application of these thresholds (such as forced tapers), which it found caused patient harm after its 2016 guideline was misapplied this way.",
          },
          {
            q: "Does a low total MME mean a patient is not at risk of overdose?",
            a: "Not necessarily. Overdose risk also depends on factors this calculator does not capture, including concurrent benzodiazepines or other sedatives, alcohol use, sleep apnea, renal or hepatic impairment, and whether the patient is opioid-naive. A low MME total is reassuring but is not, on its own, a complete risk assessment.",
          },
          {
            q: "Can this calculator be used for children or in pregnancy?",
            a: "No. The conversion factors and CDC thresholds used here are derived from adult prescribing and outcomes data and are not validated for pediatric patients. Opioid dosing in pregnancy requires specialist input that goes well beyond an MME calculation, balancing maternal analgesia against fetal and neonatal considerations.",
          },
          {
            q: "Why is there a US/UK toggle for morphine and hydromorphone route conversion?",
            a: "Published oral:parenteral ratios genuinely differ between commonly used U.S. references (3:1 for morphine, 5:1 for hydromorphone) and UK palliative care convention (2:1 and 4:1, per the Palliative Care Formulary). Rather than silently picking one, this calculator lets you choose the convention that matches your local practice.",
          },
          {
            q: "Should I use the route-converted MME to decide a patient's actual IV or SC dose?",
            a: "No. This feature converts a parenteral dose to an oral-equivalent purely for MME risk-flagging and documentation. The CDC's MME guidance is scoped to oral/transdermal opioids and does not endorse this for prescribing decisions, and equianalgesic ratios have wide individual variability. Any actual route or opioid switch should use a smaller empiric dose with close titration, as described earlier in this article.",
          },
        ]}
      />

      <RelatedTools
        slugs={["iv-infusion-calculator", "warfarin-dosing-calculator", "heparin-infusion-calculator"]}
      />

      <References
        items={[
          {
            text: "Dowell D, Ragan KR, Jones CM, Baldwin GT, Chou R. CDC Clinical Practice Guideline for Prescribing Opioids for Pain — United States, 2022. MMWR Recomm Rep. 2022;71(3):1-95.",
            href: "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
          },
          {
            text: "Centers for Disease Control and Prevention, National Center for Injury Prevention and Control. Opioid Oral Morphine Milligram Equivalent (MME) Conversion Factors and data resources.",
            href: "https://archive.cdc.gov/www_cdc_gov/opioids/data-resources/index.html",
          },
          {
            text: "Dowell D, Haegerich TM, Chou R. CDC Guideline for Prescribing Opioids for Chronic Pain — United States, 2016. MMWR Recomm Rep. 2016;65(1):1-49.",
          },
          {
            text: "Centers for Disease Control and Prevention. Vital Signs: Risk for Overdose from Methadone Used for Pain Relief — United States, 1999-2010. MMWR Morb Mortal Wkly Rep. 2012;61(26):493-497.",
          },
          {
            text: "Fine PG, Portenoy RK; Ad Hoc Expert Panel on Evidence Review and Guidelines for Opioid Rotation. Establishing 'best practices' for opioid rotation: conclusions of an expert panel. J Pain Symptom Manage. 2009;38(3):418-425.",
          },
          {
            text: "Dowell D, Compton WM, Giroir BP. Prescribing Opioids for Pain — The New CDC Clinical Practice Guideline. N Engl J Med. 2022;387(22):2011-2013.",
          },
          {
            text: "Pereira J, Lawlor P, Vigano A, Dorgan M, Bruera E. Equianalgesic dose ratios for opioids: a critical review and proposal for long-term dosing. J Pain Symptom Manage. 2001;22(2):672-687.",
          },
          {
            text: "McPherson ML. Fast Facts and Concepts #36: Basics of Opioid Equianalgesic Dosing. Palliative Care Network of Wisconsin.",
          },
          {
            text: "Takahashi M, Ohara T, Yamanaka H, et al. The oral-to-intravenous equianalgesic ratio of morphine based on plasma concentrations of morphine and metabolites in advanced cancer patients. Support Care Cancer. 2003;11(2):60-66.",
          },
          {
            text: "Twycross R, Wilcock A, Howard P (eds). Palliative Care Formulary (PCF), current edition.",
          },
        ]}
      />
    </>
  );
}
