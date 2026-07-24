import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function IvInfusionInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>Why an Infusion Rate Calculator Matters</h2>
        <p>
          Continuous IV infusions of vasopressors, inotropes, sedatives, and
          analgesics are dosed in one set of units — a weight-based rate
          such as mcg/kg/min, or a fixed rate such as mcg/min or units/min —
          but the number that actually has to go into an infusion pump is
          always mL/hr. Converting between the two, correctly, under time
          pressure, is one of the most common calculations in critical
          care — and one of the easiest places for a decimal-point or
          unit-conversion error to slip in. This calculator handles that
          conversion for 12 of the most commonly infused critical-care
          drugs, with the concentration and starting dose preloaded from
          published references but fully editable, since actual premixed
          bag concentrations vary between hospital pharmacies.
        </p>

        <h2>The Underlying Formula</h2>
        <p>
          Every infusion rate calculation reduces to the same three steps,
          regardless of drug:
        </p>
        <ol>
          <li>
            <strong>Find the concentration</strong> of the infusion bag in
            mass (or units) per mL — e.g. a 4 mg vial of norepinephrine
            diluted in 250 mL gives a concentration of 4,000 mcg ÷ 250 mL =
            16 mcg/mL.
          </li>
          <li>
            <strong>Find the total dose the patient needs per minute</strong> —
            for a weight-based drug, multiply the ordered dose (e.g.
            mcg/kg/min) by the patient's weight in kg; for a fixed-rate drug,
            the ordered dose (e.g. mcg/min) already is the total.
          </li>
          <li>
            <strong>Convert to mL/hr</strong> by multiplying the per-minute
            dose by 60 (minutes per hour) and dividing by the concentration
            from step 1.
          </li>
        </ol>
        <p>
          Written as a single equation for a weight-based drug:
        </p>
        <p>
          <strong>
            Rate (mL/hr) = Dose (mcg/kg/min) × Weight (kg) × 60 ÷
            Concentration (mcg/mL)
          </strong>
        </p>
        <p>
          For a fixed-rate drug (no weight term) or a drug dosed per hour
          rather than per minute, the same three steps apply — this
          calculator simply adjusts which terms are included and normalizes
          every drug's time unit to a common per-minute basis internally
          before converting to the hourly pump rate, so mcg/kg/min drugs
          (like norepinephrine) and mg/kg/hr or mcg/kg/hr drugs (like
          midazolam or dexmedetomidine) are handled correctly side by side.
        </p>

        <h2>Worked Example: Norepinephrine</h2>
        <p>
          A 70 kg patient in septic shock is started on norepinephrine at
          0.05 mcg/kg/min, mixed as 4 mg in 250 mL (a standard premix).
          Concentration = 4,000 mcg ÷ 250 mL = 16 mcg/mL. Total dose = 0.05
          mcg/kg/min × 70 kg = 3.5 mcg/min. Rate = 3.5 mcg/min × 60 ÷ 16
          mcg/mL = <strong>13.1 mL/hr</strong> — exactly what this
          calculator returns for those inputs.
        </p>

        <h2>Worked Example: A Fixed-Rate, Hourly-Dosed Drug</h2>
        <p>
          The same 70 kg patient is also started on midazolam for sedation
          at 0.04 mg/kg/hr, mixed as 50 mg in 50 mL. Concentration = 50,000
          mcg ÷ 50 mL = 1,000 mcg/mL. Converting the ordered dose to a
          per-minute basis: 0.04 mg/kg/hr = 40 mcg/kg/hr ÷ 60 = 0.667
          mcg/kg/min. Total dose = 0.667 × 70 kg = 46.7 mcg/min. Rate = 46.7
          × 60 ÷ 1,000 = <strong>2.8 mL/hr</strong>.
        </p>

        <h2>Vasopressors vs. Inotropes vs. Inodilators — What's the Difference?</h2>
        <p>
          The drugs in this calculator's first group are grouped together
          as "vasopressors and inotropes," but they act on distinct
          receptors and serve different physiological goals, which is why
          picking the right agent matters as much as calculating its rate
          correctly.
        </p>
        <ul>
          <li>
            <strong>Pure vasopressors</strong> (phenylephrine, and
            vasopressin acting via V1 receptors) increase systemic vascular
            resistance without directly increasing cardiac contractility —
            useful when tachyarrhythmia limits catecholamine use, but they
            do nothing to help a failing heart pump better.
          </li>
          <li>
            <strong>Vasopressor-inotropes</strong> (norepinephrine,
            epinephrine, dopamine) act on both alpha receptors
            (vasoconstriction) and beta-1 receptors (increased
            contractility and heart rate) to varying degrees, which is why
            norepinephrine is the default first-line agent in septic
            shock — it raises blood pressure while largely preserving
            cardiac output.
          </li>
          <li>
            <strong>Pure inotropes</strong> (dobutamine) increase
            contractility with comparatively little vasoconstrictor
            effect, and can even cause vasodilation — used for cardiogenic
            shock and low-cardiac-output states, not as primary
            blood-pressure agents.
          </li>
          <li>
            <strong>Inodilators</strong> (milrinone) increase contractility
            while actively vasodilating, useful in cardiogenic shock with
            high afterload, but they can worsen hypotension and require
            caution in renal impairment given renal clearance.
          </li>
        </ul>

        <h2>Current Practice: Peripheral Vasopressor Administration</h2>
        <p>
          Older teaching held that vasopressors must always be given
          through a central line, out of concern for tissue injury if a
          peripheral line extravasates. The 2021 Surviving Sepsis Campaign
          guidelines explicitly softened this: they suggest starting
          vasopressors peripherally rather than delaying treatment while
          waiting for central venous access, provided the peripheral line
          is closely monitored and promptly changed if there are any signs
          of infiltration. This reflects a broader shift in critical care
          practice toward not letting line access delay time-critical
          therapy — but it does not remove the need for vigilant
          monitoring of the peripheral site, and local protocols on
          maximum peripheral vasopressor duration/dose still vary.
        </p>

        <h2>Sedation and Analgesia: The "Analgesia-First" Approach</h2>
        <p>
          The second group of drugs in this calculator — propofol,
          midazolam, fentanyl, and dexmedetomidine — reflects current ICU
          sedation practice as set out in the 2018 PADIS guidelines (Pain,
          Agitation/sedation, Delirium, Immobility, and Sleep disruption).
          Key principles from that guideline that shape how these drugs
          are actually used at the bedside:
        </p>
        <ul>
          <li>
            <strong>Analgesia-first (analgosedation):</strong> treat pain
            adequately before adding a sedative, since untreated pain
            itself drives agitation — this is why fentanyl is grouped
            alongside the sedatives here rather than treated as an
            afterthought.
          </li>
          <li>
            <strong>Lighter sedation targets:</strong> current practice
            favors the lightest effective sedation (assessed with a
            validated scale such as RASS) rather than deep sedation by
            default, since deep sedation is associated with longer
            ventilation time and worse outcomes.
          </li>
          <li>
            <strong>Non-benzodiazepine-first:</strong> propofol or
            dexmedetomidine are generally preferred over benzodiazepines
            like midazolam for routine ICU sedation, reserving
            benzodiazepines for specific indications (alcohol withdrawal,
            seizure management, or when the preferred agents are
            contraindicated) given the association between benzodiazepine
            sedation and delirium.
          </li>
        </ul>

        <h2>Safety Principles Built Into This Tool</h2>
        <ul>
          <li>
            <strong>Every concentration field is editable.</strong> This
            calculator preloads a commonly cited premix concentration for
            each drug, but actual concentrations vary by hospital pharmacy
            and by indication. Always confirm against the actual bag label
            in front of you before setting a pump rate from any
            calculator, including this one.
          </li>
          <li>
            <strong>Typical ranges are references, not hard limits.</strong>{" "}
            A dose outside the shown range is flagged, but clinical
            scenarios exist where doses above a "typical" range are
            appropriate (e.g. refractory shock) — the flag is there to
            prompt a deliberate double-check, not to block a clinical
            decision.
          </li>
          <li>
            <strong>Fixed-rate vs. weight-based is drug-specific, not
            optional.</strong> Vasopressin and nitroglycerin are
            intentionally NOT weight-adjusted in this tool, because they
            are conventionally dosed as fixed infusions regardless of
            patient size — mixing up a weight-based and fixed-rate
            convention for the wrong drug is a known real-world dosing
            error this design specifically guards against.
          </li>
        </ul>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Reference ranges are general, not patient-specific.</strong>{" "}
            Actual target doses depend on the clinical indication, organ
            function, concurrent medications, and local protocol — this
            tool converts units correctly but does not replace clinical
            titration against physiological targets (MAP, sedation score,
            pain score, cardiac index, etc.).
          </li>
          <li>
            <strong>Renal and hepatic adjustment isn't automatic.</strong>{" "}
            Drugs like milrinone (renally cleared) and midazolam
            (hepatically metabolized with active metabolites that
            accumulate in renal impairment) need dose adjustment in organ
            dysfunction that this calculator does not apply automatically —
            it computes the rate for whatever dose you enter.
          </li>
          <li>
            <strong>Pump libraries and smart-pump limits are separate.</strong>{" "}
            Many institutions use "smart pumps" with drug libraries that
            enforce dose-range limits and require independent
            double-checks for high-alert medications — this calculator is
            a planning and cross-check aid, not a replacement for your
            institution's smart-pump safety systems or double-check
            policy for high-alert IV medications.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Why does the calculator show a warning for some doses but not others?",
            a: "It flags any entered dose that falls outside the typical published range for that drug. This is a prompt to double-check, not a hard block — legitimate clinical scenarios (e.g. refractory shock, tolerance) can require doses outside a 'typical' range.",
          },
          {
            q: "Why are vasopressin and nitroglycerin not weight-based?",
            a: "Both are conventionally dosed as fixed infusion rates (units/min and mcg/min respectively) regardless of patient weight, unlike most other vasopressors and sedatives. This calculator deliberately does not apply a weight multiplier to these two, matching standard clinical convention.",
          },
          {
            q: "The concentration in my hospital's premixed bag is different from the default — what should I do?",
            a: "Edit the 'Amount in bag' and 'Bag volume' fields to match your institution's actual label. The calculator recomputes the concentration and rate immediately — the preloaded defaults are commonly cited starting points, not a universal standard.",
          },
          {
            q: "Can I use this for pediatric patients?",
            a: "The unit conversion math is the same regardless of age, but the typical dose ranges shown are drawn from adult critical-care references. Paediatric vasopressor and sedation dosing has its own weight-based ranges and should be checked against a paediatric-specific reference or your institution's paediatric protocol.",
          },
        ]}
      />

      <RelatedTools slugs={["heparin-infusion-calculator", "warfarin-dosing-calculator", "ibw-calculator"]} />

      <References
        items={[
          {
            text: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.",
          },
          {
            text: "Devlin JW, Skrobik Y, Gélinas C, et al. Clinical practice guidelines for the prevention and management of pain, anxiety, agitation/sedation, delirium, immobility, and sleep disruption in adult patients in the ICU (PADIS). Crit Care Med. 2018;46(9):e825-e873.",
          },
        ]}
      />
    </>
  );
}
