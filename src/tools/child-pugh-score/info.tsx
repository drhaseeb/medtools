import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function ChildPughInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the Child-Pugh Score?</h2>
        <p>
          The Child-Pugh score (sometimes called the Child-Turcotte-Pugh, or
          CTP, score) is one of the oldest prognostic tools still in routine
          clinical use anywhere in medicine. It converts five simple,
          widely-available clinical and laboratory findings into a single
          number that stratifies patients with cirrhosis or chronic liver
          disease into one of three severity classes — A, B, or C — each
          carrying a distinct outlook for survival, surgical risk, and drug
          handling. Despite being more than half a century old and despite
          the arrival of more statistically sophisticated alternatives, it
          remains embedded in day-to-day hepatology, general surgery, and
          pharmacology practice because it is fast to calculate, requires no
          special equipment, and has been validated across an enormous body
          of subsequent research.
        </p>

        <h2>History and Development</h2>
        <p>
          The score's origin lies in a 1964 paper by Charles G. Child and
          Jeremiah G. Turcotte, who were trying to predict which patients
          with cirrhosis and bleeding oesophageal varices would survive a
          portocaval shunt operation — a major, high-risk surgery used at
          the time to reduce portal pressure. Their original classification
          combined five variables: bilirubin, albumin, ascites,
          encephalopathy, and nutritional status. In 1973, Royston N. H.
          Pugh and colleagues, working on the same clinical question for a
          different variceal surgery (oesophageal transection), modified the
          score in two important ways: nutritional status — a somewhat
          subjective variable — was replaced with prothrombin time (a direct,
          objective measure of the liver's synthetic function), and each of
          the five variables was scored on a 1-to-3-point scale, summed into
          a total ranging from 5 to 15. This is essentially the version used
          today, with prothrombin time seconds later converted into the
          standardized International Normalized Ratio (INR) as INR testing
          became universal in the 1980s.
        </p>
        <p>
          It is worth appreciating how unusual the score's longevity is: it
          was designed to answer one very specific surgical question in
          1973, using variables selected mostly for practicality rather than
          from a formal, computer-driven statistical derivation process (the
          method used to build most modern risk scores). That it has
          remained clinically useful for surgical risk, drug dosing, and
          general prognostication across an entirely different era of liver
          disease management — including transplantation, direct-acting
          antivirals for hepatitis C, and modern intensive care — is a
          testament to how strongly its five variables capture the core
          physiology of hepatic decompensation.
        </p>

        <h2>The Five Variables and Their Scoring</h2>
        <p>
          Each of the five variables is scored from 1 (least severe) to 3
          (most severe), and the five component scores are summed to give
          the total Child-Pugh score:
        </p>
        <ol>
          <li>
            <strong>Total bilirubin</strong> — reflects the liver's ability
            to conjugate and excrete bilirubin; a rising level indicates
            worsening hepatocellular or cholestatic dysfunction.
            <ul>
              <li>&lt; 2.0 mg/dL (&lt; 34 µmol/L): 1 point</li>
              <li>2.0–3.0 mg/dL (34–51 µmol/L): 2 points</li>
              <li>&gt; 3.0 mg/dL (&gt; 51 µmol/L): 3 points</li>
            </ul>
            For primary biliary cholangitis or primary sclerosing
            cholangitis, higher bilirubin thresholds (historically around
            &lt;4, 4–10, and &gt;10 mg/dL) have sometimes been used, since
            these cholestatic diseases produce markedly elevated bilirubin
            independent of the degree of hepatocellular synthetic failure —
            though most modern calculators, including this tool, apply the
            standard thresholds uniformly for simplicity and consistency
            with the version most widely taught and used today.
          </li>
          <li>
            <strong>Serum albumin</strong> — the major protein synthesized
            by the liver; a falling level over weeks to months reflects
            chronic loss of synthetic capacity (unlike bilirubin and INR,
            which can change acutely).
            <ul>
              <li>&gt; 3.5 g/dL: 1 point</li>
              <li>2.8–3.5 g/dL: 2 points</li>
              <li>&lt; 2.8 g/dL: 3 points</li>
            </ul>
          </li>
          <li>
            <strong>INR (originally prothrombin time)</strong> — the liver
            synthesizes most coagulation factors; a prolonged INR reflects
            acute synthetic failure and is one of the fastest-changing
            markers of hepatic decompensation.
            <ul>
              <li>&lt; 1.7: 1 point</li>
              <li>1.7–2.2: 2 points</li>
              <li>&gt; 2.2: 3 points</li>
            </ul>
          </li>
          <li>
            <strong>Ascites</strong> — pathological accumulation of fluid in
            the peritoneal cavity, driven by the combination of portal
            hypertension and low oncotic pressure from hypoalbuminaemia.
            <ul>
              <li>Absent: 1 point</li>
              <li>Mild, or controlled with diuretics: 2 points</li>
              <li>Moderate to severe, or refractory to treatment: 3 points</li>
            </ul>
          </li>
          <li>
            <strong>Hepatic encephalopathy</strong> — a spectrum of
            neuropsychiatric disturbance caused by the failing liver's
            inability to clear gut-derived neurotoxins, principally ammonia,
            graded using the West Haven criteria.
            <ul>
              <li>None: 1 point</li>
              <li>Grade I–II (mild confusion, asterixis, reversed sleep pattern): 2 points</li>
              <li>Grade III–IV (marked confusion, somnolence, to coma): 3 points</li>
            </ul>
          </li>
        </ol>

        <h2>Worked Example</h2>
        <p>
          A 58-year-old man with alcohol-related cirrhosis is admitted with
          new ascites. His bilirubin is 2.4 mg/dL (2 points), albumin is 3.0
          g/dL (2 points), INR is 1.5 (1 point), his ascites is moderate but
          responding to diuretics (2 points), and he has no encephalopathy
          (1 point).
        </p>
        <p>
          His total score is <strong>2 + 2 + 1 + 2 + 1 = 8</strong>, placing
          him in <strong>Class B</strong> — significant functional
          compromise, with an approximate 1-year survival around 80% and
          2-year survival around 60%. In practical terms, this patient should
          have any elective surgery deferred pending multidisciplinary
          discussion, most medications reviewed for hepatic dose adjustment,
          and — because he has now decompensated with ascites — referral for
          consideration of liver transplant assessment, since decompensation
          of any kind is itself a trigger for transplant work-up regardless
          of the exact numeric score.
        </p>

        <h2>Interpreting the Classes</h2>
        <p>
          The total score, ranging from 5 to 15, sorts patients into three
          classes that are widely used as shorthand throughout hepatology,
          surgery, and pharmacology:
        </p>
        <ul>
          <li>
            <strong>Class A (score 5–6) — well-compensated disease:</strong>{" "}
            approximate 1-year survival close to 100%, 2-year survival
            around 85%. Elective surgery is generally well tolerated with
            appropriate perioperative care.
          </li>
          <li>
            <strong>Class B (score 7–9) — significant functional
            compromise:</strong> approximate 1-year survival around 80%,
            2-year survival around 60%. Elective surgery carries meaningfully
            increased risk and should involve multidisciplinary
            (hepatology, anaesthetic, and surgical) input before proceeding.
          </li>
          <li>
            <strong>Class C (score 10–15) — decompensated disease:</strong>{" "}
            approximate 1-year survival around 45%, 2-year survival around
            35%. Elective surgery is generally considered contraindicated
            given prohibitive operative risk; urgent transplant assessment
            and, where appropriate, palliative care input should be
            considered.
          </li>
        </ul>
        <p>
          These survival figures are widely cited approximations drawn from
          the substantial body of cohort studies that have followed the
          original 1973 classification; individual studies report somewhat
          different exact percentages depending on the underlying cause of
          liver disease, era of study, and available treatments, so they
          should be treated as a general guide to prognosis rather than an
          exact, patient-specific probability.
        </p>

        <h2>Clinical Applications</h2>
        <p>
          The Child-Pugh score's continued relevance rests on three main
          uses:
        </p>
        <ul>
          <li>
            <strong>Drug dosing in hepatic impairment:</strong> because the
            liver is the primary site of metabolism for a huge proportion of
            drugs, regulatory agencies including the FDA and EMA require
            pharmaceutical manufacturers to study and report drug clearance
            across Child-Pugh classes A, B, and C during development.
            Consequently, an enormous number of drug package inserts and
            national formularies express their hepatic dosing guidance
            directly in terms of Child-Pugh class, making this score the
            practical, everyday link between a patient's liver disease
            severity and a safe prescribing decision.
          </li>
          <li>
            <strong>Perioperative risk assessment:</strong> for cirrhotic
            patients requiring surgery unrelated to their liver disease
            (cholecystectomy, hernia repair, hip replacement), Child-Pugh
            class remains one of the most consistently used predictors of
            postoperative morbidity and mortality, informing decisions about
            whether, when, and how to operate.
          </li>
          <li>
            <strong>Eligibility for specific interventions:</strong> advanced
            Child-Pugh class is a recognized contraindication, or at least a
            major caution, for interventions including transjugular
            intrahepatic portosystemic shunt (TIPS) placement and certain
            systemic therapies for hepatocellular carcinoma, where the risk
            of precipitating liver failure in a poorly compensated patient
            outweighs the potential benefit.
          </li>
        </ul>

        <h2>Child-Pugh vs. MELD: Which Score to Use When</h2>
        <p>
          The Model for End-Stage Liver Disease (MELD) score, built from
          bilirubin, INR, and creatinine (with a sodium correction, MELD-Na,
          now used for transplant allocation in the UK and much of the
          world), has become the dominant score for one specific purpose:
          prioritizing patients on liver transplant waiting lists. It was
          derived using formal statistical modelling against a
          transplant-specific outcome, giving it superior discrimination for
          that narrow question. Child-Pugh, by contrast, remains the more
          practical everyday tool for general prognostic conversation, drug
          dosing decisions, and perioperative risk communication — precisely
          because it is quick to calculate at the bedside without a
          calculator, and because so much existing prescribing guidance is
          already anchored to its three simple classes rather than to a MELD
          number. In practice, most hepatology services use both scores for
          the purpose each is best suited to, rather than choosing one over
          the other.
        </p>

        <h2>Limitations and Criticisms</h2>
        <p>
          Notwithstanding its enduring usefulness, the Child-Pugh score has
          well-recognized weaknesses that any user should keep in mind:
        </p>
        <ul>
          <li>
            <strong>Subjectivity in two of the five variables:</strong>{" "}
            grading ascites as "mild" versus "moderate," and grading hepatic
            encephalopathy, both involve a degree of clinical judgement, and
            different observers can reasonably disagree — introducing
            inter-rater variability that purely laboratory-based scores like
            MELD avoid.
          </li>
          <li>
            <strong>Ceiling and floor effects on the laboratory
            variables:</strong> a patient with a bilirubin of 3.1 mg/dL
            receives the same 3 points as a patient with a bilirubin of 25
            mg/dL, despite a vastly different severity of liver failure — the
            score simply cannot distinguish within its top or bottom
            category.
          </li>
          <li>
            <strong>Sensitivity to reversible treatment effects:</strong>{" "}
            ascites usually responds, at least partially, to diuretics, and
            encephalopathy typically improves with lactulose and rifaximin.
            A patient's class can therefore shift from C towards B within
            days of starting treatment even though their underlying hepatic
            reserve is essentially unchanged — a limitation MELD, built
            entirely from laboratory values, is less prone to.
          </li>
          <li>
            <strong>Coarse resolution:</strong> with only 11 possible total
            scores (5 through 15) collapsed into just three classes,
            Child-Pugh offers much less granularity than MELD's continuous
            numeric scale, which matters when trying to rank patients
            precisely (as transplant allocation requires).
          </li>
        </ul>

        <h2>Special Populations and Practical Considerations</h2>
        <p>
          A few additional situations deserve specific mention. In patients
          on warfarin or another vitamin K antagonist for an unrelated
          indication (such as atrial fibrillation), the INR is elevated by
          the medication rather than by liver disease alone, and the
          Child-Pugh INR component should be interpreted cautiously in this
          context — some clinicians substitute prothrombin time percentage
          activity where available. In acute liver failure (as opposed to
          chronic cirrhosis), the Child-Pugh score was not designed for, and
          should not be used for, prognostication — the King's College
          Criteria and other acute-liver-failure-specific tools exist for
          that purpose. Finally, because ascites and encephalopathy grading
          both require a clinical assessment rather than a blood test, the
          score cannot be calculated purely from laboratory data alone —
          unlike MELD — and always requires a clinician who has actually
          examined the patient.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "When should I use Child-Pugh instead of MELD?",
            a: "Use MELD (or MELD-Na) specifically when determining priority for liver transplantation, since it was derived and validated for that purpose. Use Child-Pugh for everyday prognostic conversation, for assessing the safety of surgery in a cirrhotic patient, and for drug dosing decisions, since most hepatic dose-adjustment guidance in drug package inserts and formularies is expressed directly in Child-Pugh classes.",
          },
          {
            q: "Can a patient's Child-Pugh class improve over time?",
            a: "Yes. If the process driving decompensation is treated — for example, achieving sustained virologic response for hepatitis C, complete abstinence from alcohol, or resolving a precipitant such as infection or gastrointestinal bleeding — ascites and encephalopathy can improve or resolve, and laboratory values can partially recover, lowering the total score. This is a genuine improvement in most cases, though it does not necessarily mean the underlying fibrosis or cirrhosis has reversed.",
          },
          {
            q: "Why do the bilirubin thresholds sometimes differ for PBC or PSC?",
            a: "Primary biliary cholangitis and primary sclerosing cholangitis are cholestatic liver diseases that characteristically produce very high bilirubin levels through impaired bile flow, somewhat independent of the degree of hepatocellular synthetic failure. Some historical scoring schemes therefore used higher bilirubin thresholds for these conditions specifically. Most modern calculators, including this tool, apply the standard thresholds uniformly for consistency, but this nuance is worth knowing when interpreting a Child-Pugh score in a patient with a primary cholestatic disease.",
          },
          {
            q: "Does the Child-Pugh score work for acute liver failure?",
            a: "No. Child-Pugh was designed for chronic cirrhosis and should not be used to prognosticate in acute liver failure, where different tools such as the King's College Criteria are appropriate.",
          },
        ]}
      />

      <RelatedTools
        slugs={["meld-calculator", "egfr-calculator", "has-bled-calculator"]}
      />

      <References
        items={[
          {
            text: "Child CG, Turcotte JG. Surgery and portal hypertension. In: Child CG, ed. The Liver and Portal Hypertension. Philadelphia: Saunders, 1964:50-64.",
          },
          {
            text: "Pugh RNH, Murray-Lyon IM, Dawson JL, Pietroni MC, Williams R. Transection of the oesophagus for bleeding oesophageal varices. Br J Surg. 1973;60(8):646-649.",
          },
          {
            text: "Kamath PS, Kim WR. The Model for End-stage Liver Disease (MELD). Hepatology. 2007;45(3):797-805.",
          },
          {
            text: "European Association for the Study of the Liver. EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis. J Hepatol. 2018;69(2):406-460.",
          },
          {
            text: "US Food and Drug Administration. Guidance for Industry: Pharmacokinetics in Patients with Impaired Hepatic Function — Study Design, Data Analysis, and Impact on Dosing and Labeling.",
            href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pharmacokinetics-patients-impaired-hepatic-function-study-design-data-analysis-and-impact-dosing",
          },
        ]}
      />
    </>
  );
}
