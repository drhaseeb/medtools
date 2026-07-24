import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function HeparinInfusionInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>Why Weight-Based Heparin Dosing Matters</h2>
        <p>
          Unfractionated heparin (UFH) is one of the oldest anticoagulants
          still in routine hospital use, and also one of the least
          predictable. Its anticoagulant effect depends on binding to
          antithrombin and to circulating plasma proteins, endothelial cells,
          and macrophages in amounts that vary substantially from one patient
          to the next — which means the same milligram-for-milligram dose can
          produce a markedly different anticoagulant effect in two patients of
          different size, illness severity, or protein-binding status. For
          decades, many hospitals dosed IV heparin with a flat starting bolus
          and infusion rate regardless of the patient's weight. A continuous
          IV infusion of unfractionated heparin, titrated against the
          activated partial thromboplastin time (aPTT), is the standard way
          to achieve a therapeutic anticoagulant effect quickly while
          remaining able to reverse it rapidly (heparin's half-life is only
          about 60–90 minutes) if bleeding occurs or a procedure is needed —
          which is precisely why IV UFH remains the anticoagulant of choice in
          settings where rapid reversibility matters, such as around surgery,
          in mechanical heart valve bridging, or in patients with significant
          renal impairment where low-molecular-weight heparin (LMWH)
          accumulates unpredictably. This calculator implements a weight-based
          bolus and infusion calculation together with an aPTT-guided
          titration table modeled on the nomogram that first demonstrated
          weight-based dosing's superiority over fixed dosing.
        </p>

        <h2>History: The Raschke Weight-Based Nomogram</h2>
        <p>
          Before the early 1990s, most hospitals dosed IV heparin with a
          fixed starting bolus (often around 5,000 units) followed by a fixed
          infusion rate (often around 1,000 units/hr), adjusted afterward
          based on aPTT results. In 1993, Raschke and colleagues published a
          randomized controlled trial in the <em>Annals of Internal
          Medicine</em> directly comparing this fixed-dose "standard care"
          nomogram against a weight-based nomogram — an 80 units/kg bolus
          followed by an 18 units/kg/hr infusion, titrated using a
          structured aPTT-based table. The weight-based arm reached the
          therapeutic aPTT range faster, spent more time within the
          therapeutic range overall, and — the finding that changed practice
          — was associated with a roughly five-fold reduction in recurrent
          venous thromboembolism compared with the fixed-dose nomogram,
          without a corresponding increase in major bleeding. That trial is
          the reason weight-based dosing, not fixed dosing, is now the
          default starting point for IV UFH in most institutions, and the
          specific bolus/infusion pair used in this calculator's
          standard-intensity option (80 units/kg and 18 units/kg/hr) comes
          directly from it.
        </p>
        <p>
          It is worth being explicit about what has and has not changed since
          1993. The core weight-based principle — dose the bolus and initial
          infusion in units per kilogram, not as a flat number — has held up
          and is reflected in essentially every modern hospital heparin
          protocol. What has changed is everything downstream of that
          starting point: individual hospitals have derived their own
          titration tables calibrated to their own aPTT reagent, some
          indications use deliberately lower-intensity variants of the
          nomogram, and many laboratories now calibrate — or entirely
          replace — the aPTT with an anti-factor Xa assay. None of this
          invalidates the original nomogram; it means the exact table your
          hospital uses today is very likely a locally adapted descendant of
          it, not an identical copy.
        </p>

        <h2>How This Calculator's Dosing Step Works</h2>
        <p>
          The first part of this tool converts a weight-based bolus and
          infusion order into an actual bolus volume and pump rate, exactly
          as the IV Infusion Rate calculator on this site does for other
          weight-based drips:
        </p>
        <ol>
          <li>
            <strong>Bolus dose (units)</strong> = bolus rate (units/kg) ×
            patient weight (kg), then converted to a volume by dividing by
            the bag's concentration (units/mL).
          </li>
          <li>
            <strong>Initial infusion rate (units/hr)</strong> = infusion rate
            (units/kg/hr) × patient weight (kg), then converted to mL/hr by
            dividing by the same concentration.
          </li>
        </ol>
        <p>
          Three indication presets are offered, because the "right" bolus,
          infusion rate, and target aPTT range are not identical across
          indications:
        </p>
        <ul>
          <li>
            <strong>VTE / ACS, standard-intensity</strong> — 80 units/kg
            bolus, 18 units/kg/hr infusion, targeting an aPTT ratio of
            roughly 1.5–2.3× control. This is the original Raschke nomogram
            and remains the most widely used starting point for standard
            therapeutic anticoagulation with IV UFH.
          </li>
          <li>
            <strong>ACS with fibrinolytic therapy, low-intensity and
            weight-capped</strong> — a 60 units/kg bolus capped at 4,000
            units, and a 12 units/kg/hr infusion capped at 1,000 units/hr,
            targeting a lower aPTT ratio of roughly 1.5–2.0× control. This
            lower-intensity, dose-capped regimen is the adjunctive
            anticoagulation approach described in ACC/AHA STEMI guidance for
            patients receiving fibrinolytic therapy, where the bleeding risk
            of full-intensity heparin on top of a fibrinolytic drug is
            unacceptably high — the caps exist specifically to prevent
            large patients from receiving a dangerously large bolus in this
            higher-bleeding-risk context.
          </li>
          <li>
            <strong>Mechanical heart valve / other high-intensity
            indication</strong> — the same 80 units/kg and 18 units/kg/hr
            starting point, but targeting a higher aPTT ratio, commonly cited
            around 2.0× control (with a broader range of roughly 1.5–2.5×
            reported across sources), reflecting the higher thromboembolic
            risk of a mechanical prosthetic valve. The 2020 ACC/AHA/SCAI
            valvular heart disease guideline is the reference point for this
            option, but exact target ranges for valve bridging vary more
            between institutions than the VTE/ACS target does — confirm the
            specific target your cardiology and pharmacy services use.
          </li>
        </ul>
        <p>
          Whenever a calculated bolus or infusion rate would exceed an
          indication's stated cap, the calculator applies the cap and flags
          it — this matters most for larger patients, where an uncapped
          weight-based calculation in the fibrinolytic-adjunct setting could
          otherwise produce a bolus well above the guideline-recommended
          ceiling.
        </p>

        <h2>The aPTT Titration Table Explained</h2>
        <p>
          The second part of this tool is the titration nomogram itself — the
          lookup table that converts a current aPTT result into a concrete
          action. This calculator reproduces the classic Raschke titration
          table, expressed as a ratio to the laboratory's control aPTT value
          rather than as raw seconds, since raw aPTT seconds are specific to
          each laboratory's reagent and instrument and are not portable
          between institutions, while the ratio to control is at least
          approximately comparable:
        </p>
        <table>
          <thead>
            <tr>
              <th>aPTT ratio (patient ÷ control)</th>
              <th>Bolus</th>
              <th>Hold</th>
              <th>Rate change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;1.2×</td>
              <td>80 units/kg</td>
              <td>None</td>
              <td>+4 units/kg/hr</td>
            </tr>
            <tr>
              <td>1.2–1.5×</td>
              <td>40 units/kg</td>
              <td>None</td>
              <td>+2 units/kg/hr</td>
            </tr>
            <tr>
              <td>1.5–2.3× (target)</td>
              <td>None</td>
              <td>None</td>
              <td>No change</td>
            </tr>
            <tr>
              <td>2.3–3.0×</td>
              <td>None</td>
              <td>None</td>
              <td>−2 units/kg/hr</td>
            </tr>
            <tr>
              <td>&gt;3.0×</td>
              <td>None</td>
              <td>60 minutes</td>
              <td>−3 units/kg/hr</td>
            </tr>
          </tbody>
        </table>
        <p>
          This is the single most important thing to understand about this
          section of the tool: <strong>the ratio bands above are anchored to
          the original nomogram's target of roughly 1.5–2.3× control</strong>,
          which corresponds most closely to the standard-intensity VTE/ACS
          indication. If your patient's target range is actually the
          lower-intensity post-fibrinolytic band (1.5–2.0×) or the
          higher-intensity valve band (~2.0–2.5×), an aPTT ratio that this
          table labels "therapeutic" may sit outside your patient's actual
          target, and a ratio labelled "supratherapeutic" here may still be
          within a higher-intensity target. The tool does not automatically
          re-scale the titration bands to the selected indication, because
          hospitals that use non-standard-intensity targets typically also
          use their own custom-built titration table rather than a simple
          rescaling of Raschke's — always cross-check the recommended action
          against your local written protocol before acting on it, especially
          outside the standard VTE/ACS indication.
        </p>

        <h2>Worked Example</h2>
        <p>
          An 80 kg patient with an acute pulmonary embolism is started on IV
          UFH using the standard-intensity VTE/ACS preset, with a premixed
          bag of 25,000 units in 250 mL (concentration = 100 units/mL).
        </p>
        <p>
          <strong>Bolus:</strong> 80 units/kg × 80 kg = 6,400 units ÷ 100
          units/mL = <strong>64 mL</strong> given as an IV push (per local
          policy, this is usually given from a separate, more concentrated
          preparation rather than the infusion bag itself — check your
          institution's bolus administration policy).
        </p>
        <p>
          <strong>Initial infusion:</strong> 18 units/kg/hr × 80 kg = 1,440
          units/hr ÷ 100 units/mL = <strong>14.4 mL/hr</strong>.
        </p>
        <p>
          An aPTT drawn 6 hours later returns at a ratio of 1.1× control —
          below the 1.5–2.3× target. Per the table above, the nurse
          administers a repeat bolus of 80 units/kg (6,400 units, 64 mL) and
          increases the rate by 4 units/kg/hr (320 units/hr ÷ 100 units/mL =
          3.2 mL/hr), bringing the new rate to 14.4 + 3.2 =
          <strong> 17.6 mL/hr</strong>. A repeat aPTT is drawn 6 hours after
          this change, per the standard monitoring interval described below.
        </p>

        <h2>Monitoring: aPTT Timing and the Shift Toward Anti-Xa Assays</h2>
        <p>
          In the classic nomogram, an aPTT is drawn 6 hours after the initial
          bolus and 6 hours after any subsequent dose change — an interval
          chosen because it approximates four heparin half-lives, enough
          time for the infusion to reach a new steady state before the
          result is used to make another adjustment. Once two consecutive
          aPTT results fall within the therapeutic range, the check interval
          is typically extended to every 24 hours, though local protocols
          vary on this detail.
        </p>
        <p>
          A separate and increasingly important issue is <em>which
          assay</em> is used to monitor heparin at all. The aPTT is a
          functional clotting assay that is sensitive to heparin but also to
          several things that have nothing to do with heparin — lupus
          anticoagulant, factor deficiencies, elevated factor VIII in acute
          illness, and reagent-to-reagent variability — all of which can make
          the aPTT read falsely high or low relative to the patient's actual
          heparin exposure. The alternative is a chromogenic anti-factor Xa
          (anti-Xa) assay, which measures heparin's inhibition of factor Xa
          directly and is less affected by these confounders. Guideline
          groups including the American College of Chest Physicians have
          recommended calibrating aPTT-based therapeutic ranges against a
          target anti-Xa level of roughly 0.3–0.7 IU/mL, and a growing number
          of hospitals now monitor UFH infusions primarily by anti-Xa level
          rather than aPTT, reporting faster time to therapeutic range and
          fewer unnecessary dose changes in some comparative studies —
          though a 2021 systematic review and meta-analysis found the two
          approaches produce broadly similar clinical outcomes overall, and
          not every laboratory offers a validated in-house anti-Xa assay.
          <strong> This calculator's titration table is written in aPTT-ratio
          terms and does not model anti-Xa-based titration</strong> — if your
          institution monitors heparin by anti-Xa level, use your local
          anti-Xa-based nomogram instead, since the two assays are not
          numerically interchangeable action-for-action even though both aim
          at a comparable underlying heparin exposure.
        </p>

        <h2>Heparin-Induced Thrombocytopenia (HIT) Monitoring</h2>
        <p>
          Any patient receiving heparin — unfractionated or low-molecular-
          weight — needs baseline and serial platelet count monitoring to
          screen for heparin-induced thrombocytopenia (HIT), an
          immune-mediated, prothrombotic drug reaction that paradoxically
          causes clotting rather than bleeding despite a falling platelet
          count. The 2018 American Society of Hematology (ASH) guideline on
          HIT suggests platelet count monitoring roughly every 2–3 days in
          patients whose baseline risk of HIT is intermediate or high (i.e.
          receiving therapeutic UFH, particularly after recent surgery),
          typically from around day 4 through day 14 of heparin exposure or
          until heparin is stopped, whichever comes first — since the
          antibody-mediated form of HIT most commonly develops in that
          window. A patient who has received heparin within the preceding 30
          days is at risk of a much more rapid-onset reaction and should have
          monitoring started on day 0. A platelet count that falls by 50% or
          more from baseline, particularly between days 5 and 10 of heparin
          exposure, should prompt an immediate clinical risk assessment (such
          as the 4Ts score) rather than waiting for a scheduled recheck —
          this calculator does not perform HIT risk scoring and is not a
          substitute for that separate clinical assessment.
        </p>

        <h2>Reversal: Why Rapid Reversibility Still Matters</h2>
        <p>
          A large part of IV UFH's continued clinical relevance comes down to
          one property: it can be reversed almost immediately. Protamine
          sulfate, a positively charged protein that binds and neutralizes
          heparin's negative charge, reverses roughly 1 unit of heparin
          activity for every 1 mg administered, calculated from the amount of
          heparin given in the preceding two to three hours (heparin cleared
          before that window has already been substantially metabolized and
          does not need to be accounted for in the reversal dose). Protamine
          is given slowly by IV push or short infusion — rapid administration
          is associated with hypotension and, in rare cases, a serious
          anaphylactoid reaction, which is more common in patients with fish
          allergies, prior protamine exposure (including during prior
          cardiac surgery), or prior use of protamine-containing insulin
          formulations such as NPH. This calculator does not compute a
          protamine reversal dose — it is included here because rapid,
          reliable reversibility with a well-characterized antidote is one of
          the main reasons IV UFH, rather than LMWH or a DOAC, remains the
          anticoagulant of choice in patients who may need urgent surgery,
          who are hemodynamically unstable, or who are at unusually high
          bleeding risk.
        </p>

        <h2>Special Populations</h2>
        <p>
          A few patient groups deserve specific mention beyond the general
          dosing and titration principles above:
        </p>
        <ul>
          <li>
            <strong>Obesity:</strong> heparin distributes largely within the
            vascular compartment and lean tissue rather than fat, so dosing
            by total (actual) body weight in patients with severe obesity can
            theoretically overestimate the dose needed. Evidence here is
            mixed, and practice is inconsistent: some centers dose by actual
            body weight up to a defined ceiling, others use an adjusted body
            weight formula, and some apply a flat maximum bolus regardless of
            calculated dose. This calculator uses actual body weight as
            entered, with no automatic cap outside the fibrinolytic-adjunct
            preset — confirm your institution's approach for patients at the
            extremes of body weight before relying on the raw weight-based
            number.
          </li>
          <li>
            <strong>Pregnancy:</strong> unlike warfarin, heparin (both
            unfractionated and low-molecular-weight) does not cross the
            placenta, making it the anticoagulant class of choice throughout
            pregnancy when therapeutic anticoagulation is needed. IV UFH
            specifically is often preferred over LMWH in the peripartum
            period and in patients with mechanical valves during pregnancy,
            again because of its short half-life and reversibility around
            delivery or urgent cesarean section. Target aPTT ranges and
            monitoring frequency in pregnancy can differ from the
            non-pregnant ranges used elsewhere in this tool because of
            pregnancy-associated changes in clotting factors and heparin
            clearance — an obstetric anticoagulation protocol, not this
            general calculator, should guide dosing in pregnant patients.
          </li>
          <li>
            <strong>Renal impairment:</strong> unfractionated heparin is
            cleared by a combination of rapid saturable binding to
            endothelium and macrophages plus slower renal clearance, and it
            does not accumulate as predictably in renal failure as LMWH does
            — which is exactly why IV UFH is often favored over LMWH in
            patients with significant chronic kidney disease or those
            requiring renal replacement therapy, despite requiring more
            intensive monitoring.
          </li>
        </ul>

        <h2>Comparison to LMWH and Direct Oral Anticoagulants</h2>
        <p>
          IV unfractionated heparin is no longer the default first-line
          anticoagulant for most patients with venous thromboembolism or
          uncomplicated atrial fibrillation — that role has shifted first to
          low-molecular-weight heparin (LMWH) and, for most eligible
          patients today, to direct oral anticoagulants (DOACs) such as
          apixaban or rivaroxaban, reflecting their comparable efficacy,
          fixed or near-fixed dosing, and lack of routine coagulation
          monitoring. IV UFH remains the preferred agent in a specific set of
          circumstances where its short half-life and rapid reversibility
          with protamine are genuinely valuable: hemodynamically unstable
          patients or those who may need an urgent invasive procedure,
          patients with significant renal impairment (LMWH is renally
          cleared and can accumulate unpredictably in this population),
          patients with mechanical heart valves (where DOACs are specifically
          contraindicated based on trial data showing worse outcomes), and
          the immediate post-thrombolysis or peri-procedural period. This
          calculator is built for exactly that IV UFH use case — it is not
          intended for LMWH dosing (which is typically fixed-schedule and
          weight-based without infusion titration) or for DOAC dosing, both
          of which follow entirely different dosing logic.
        </p>

        <h2>Safety Principles Built Into This Tool</h2>
        <ul>
          <li>
            <strong>Every concentration field is editable.</strong> The
            default 25,000 units/250 mL premix is a commonly used
            concentration, but actual bag concentrations vary between
            hospital pharmacies — always confirm against the label on the
            actual bag in front of you.
          </li>
          <li>
            <strong>Weight-based caps are enforced where guideline-defined.</strong>{" "}
            The ACS-with-fibrinolytic preset applies the 4,000 unit bolus and
            1,000 units/hr infusion caps described in ACC/AHA STEMI guidance,
            and flags when a patient's weight-based dose would have exceeded
            them.
          </li>
          <li>
            <strong>Ratio-based titration, not raw seconds.</strong> The
            titration table is expressed as a ratio to control aPTT rather
            than a fixed number of seconds, since raw aPTT values are
            reagent- and instrument-specific and are not safely portable
            between laboratories.
          </li>
          <li>
            <strong>Indication and titration table are deliberately not
            auto-linked.</strong> Selecting a non-standard-intensity
            indication changes the displayed target range, but not the
            titration table's band boundaries, because institutions using
            non-standard targets typically also use a custom-built titration
            table rather than a simple rescaling — this is flagged explicitly
            in the tool rather than silently guessed at.
          </li>
        </ul>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Institutional heparin protocols are not standardized
            nationally.</strong> Unlike many other drug calculations, there
            is no single universally adopted heparin nomogram — bolus doses,
            infusion rates, target ranges, and titration steps genuinely
            differ between hospitals, and sometimes between departments in
            the same hospital. This tool reproduces one well-documented,
            widely cited nomogram; it is a reference point and cross-check,
            not a replacement for the written protocol in use at your
            institution.
          </li>
          <li>
            <strong>Obesity and extremes of body size are not specifically
            adjusted for.</strong> Some evidence suggests standard
            weight-based nomograms may over- or under-dose patients at the
            extremes of body weight, and some institutions cap the weight
            used in the calculation (e.g. using an adjusted or capped weight
            above a certain BMI) or use a separate obesity-specific protocol.
            This calculator uses actual body weight as entered and does not
            apply any such cap automatically.
          </li>
          <li>
            <strong>Renal and hepatic function are not incorporated.</strong>{" "}
            While UFH itself is not primarily renally cleared (unlike LMWH),
            severe hepatic impairment and antithrombin deficiency can alter
            the anticoagulant response to a given dose in ways this
            calculator does not model.
          </li>
          <li>
            <strong>Anti-Xa-based protocols are not modeled.</strong> The
            titration table here is aPTT-ratio based only; institutions using
            anti-Xa monitoring need a separate, anti-Xa-specific titration
            table.
          </li>
          <li>
            <strong>Not a HIT risk calculator.</strong> This tool tells you
            how often to check a platelet count based on general ASH
            guidance; it does not calculate a HIT probability (such as the
            4Ts score) or diagnose HIT.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Why does the calculator use an aPTT ratio instead of a specific number of seconds?",
            a: "Raw aPTT values in seconds depend on the specific reagent and analyzer used by each laboratory, so a '70 second' aPTT does not mean the same thing at every hospital. Expressing the titration bands as a ratio to that laboratory's own control aPTT value is more portable, though even ratio-based ranges can vary somewhat by protocol.",
          },
          {
            q: "Why is the same 80 units/kg + 18 units/kg/hr dosing used for both the VTE/ACS and mechanical valve presets?",
            a: "Both use the original Raschke starting dose, but they target different points on the aPTT-ratio scale — roughly 1.5–2.3x control for standard VTE/ACS therapy, versus a higher target (commonly cited around 2.0x, with a reported range of about 1.5–2.5x) for mechanical valve indications. The starting dose is the same; the titration target differs.",
          },
          {
            q: "Why does the ACS-with-fibrinolytic preset cap the bolus and infusion rate?",
            a: "Giving fibrinolytic therapy already raises bleeding risk substantially. ACC/AHA STEMI guidance caps the adjunctive heparin bolus at 4,000 units and the infusion at 1,000 units/hr specifically so that a weight-based calculation does not produce an unusually large dose in a heavier patient during this higher-risk window.",
          },
          {
            q: "My hospital uses a different titration table than the one shown here — which should I follow?",
            a: "Follow your hospital's protocol. This tool reproduces the classic, widely published Raschke nomogram as a reference and teaching aid, but heparin protocols are not standardized nationally, and your institution's pharmacy-approved nomogram is the one that should guide actual patient care.",
          },
          {
            q: "Does this calculator apply to low-molecular-weight heparin (LMWH) or DOACs?",
            a: "No. LMWH is typically dosed on a fixed weight-based schedule without continuous infusion titration, and DOACs use entirely separate fixed or renal-function-based dosing. This calculator is specifically for continuous IV unfractionated heparin infusions.",
          },
        ]}
      />

      <RelatedTools
        slugs={["iv-infusion-calculator", "warfarin-dosing-calculator", "vte-risk-calculator"]}
      />

      <References
        items={[
          {
            text: "Raschke RA, Reilly BM, Guidry JR, Fontana JR, Srinivas S. The weight-based heparin dosing nomogram compared with a \"standard care\" nomogram: a randomized controlled trial. Ann Intern Med. 1993;119(9):874-881.",
          },
          {
            text: "O'Gara PT, Kushner FG, Ascheim DD, et al. 2013 ACCF/AHA Guideline for the Management of ST-Elevation Myocardial Infarction. Circulation. 2013;127(4):e362-e425.",
          },
          {
            text: "Otto CM, Nishimura RA, Bonow RO, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. J Am Coll Cardiol. 2021;77(4):e25-e197.",
          },
          {
            text: "Garcia DA, Baglin TP, Weitz JI, Samama MM. Parenteral anticoagulants: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: ACCP Guideline. Chest. 2012;141(2 Suppl):e24S-e43S.",
          },
          {
            text: "Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.",
          },
          {
            text: "Stevens SM, Woller SC, Kreuziger LB, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):e545-e608.",
          },
        ]}
      />
    </>
  );
}
