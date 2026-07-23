export default function ChildPughInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Comprehensive Guide to the Child-Pugh Score for Cirrhosis Mortality</h2>

      <p>
        The Child-Pugh Score (sometimes referred to as the Child-Turcotte-Pugh
        or CTP score) is one of the oldest and most enduring clinical
        prognostic tools in hepatology. Originally developed in 1964 by Dr.
        Charles Child and Dr. Jeremiah Turcotte to predict operative
        mortality in patients undergoing portocaval shunt surgery for
        bleeding esophageal varices, it was later modified by Dr. R.N. Pugh
        in 1973. Despite the advent of newer mathematical models like the
        MELD score, the Child-Pugh classification remains deeply embedded in
        everyday clinical practice, serving as a fundamental shorthand for
        communicating the severity of chronic liver disease.
      </p>

      <h3>Clinical Utility and Importance</h3>
      <p>
        While the MELD score dominates the realm of organ allocation for
        transplantation, the Child-Pugh score excels in general prognostic
        assessment and daily patient management. Its primary utilities
        include:
      </p>
      <ul>
        <li>
          <strong>Pharmacokinetics and Drug Dosing:</strong> The liver is the
          primary site of drug metabolism. As hepatic function declines, the
          clearance of many medications decreases, increasing the risk of
          toxicity. The FDA formally recommends that pharmaceutical companies
          use the Child-Pugh classification during drug development to
          establish dosing guidelines for patients with hepatic impairment.
        </li>
        <li>
          <strong>Perioperative Risk Assessment:</strong> For cirrhotic
          patients requiring non-hepatic surgery (e.g., cholecystectomy,
          hernia repair), the Child-Pugh class is a potent predictor of
          postoperative morbidity and mortality.
        </li>
        <li>
          <strong>Determining Treatment Eligibility:</strong> Certain
          aggressive interventions, such as Transjugular Intrahepatic
          Portosystemic Shunts (TIPS) or specific chemotherapy regimens for
          Hepatocellular Carcinoma (HCC), are contraindicated in patients
          with advanced Child-Pugh classes due to an unacceptably high risk
          of hepatic failure.
        </li>
      </ul>

      <h3>The Five Pillars of the Child-Pugh Score</h3>
      <p>
        The score evaluates five variables—two clinical and three
        laboratory-based. Each variable is scored from 1 to 3, with 3
        representing the most severe derangement.
      </p>

      <ol>
        <li>
          <strong>Total Bilirubin:</strong>
          <ul>
            <li>&lt; 2.0 mg/dL (1 point)</li>
            <li>2.0 - 3.0 mg/dL (2 points)</li>
            <li>&gt; 3.0 mg/dL (3 points)</li>
          </ul>
          <em>
            Note: For primary biliary cholangitis (PBC) or primary
            sclerosing cholangitis (PSC), the bilirubin thresholds are
            historically adjusted higher because these diseases inherently
            feature severe cholestasis independent of hepatocellular
            synthetic failure.
          </em>
        </li>
        <li>
          <strong>Serum Albumin:</strong> Albumin is the primary protein
          synthesized by the liver. Low levels indicate profound, chronic
          loss of synthetic function.
          <ul>
            <li>&gt; 3.5 g/dL (1 point)</li>
            <li>2.8 - 3.5 g/dL (2 points)</li>
            <li>&lt; 2.8 g/dL (3 points)</li>
          </ul>
        </li>
        <li>
          <strong>International Normalized Ratio (INR):</strong> The liver
          synthesizes the majority of blood coagulation factors. A prolonged
          INR reflects acute synthetic failure.
          <ul>
            <li>&lt; 1.7 (1 point)</li>
            <li>1.7 - 2.2 (2 points)</li>
            <li>&gt; 2.2 (3 points)</li>
          </ul>
        </li>
        <li>
          <strong>Ascites:</strong> The pathological accumulation of fluid
          in the peritoneal cavity, driven by portal hypertension and
          hypoalbuminemia.
          <ul>
            <li>None (1 point)</li>
            <li>Mild / Suppressed with Medication (2 points)</li>
            <li>Moderate to Severe / Refractory (3 points)</li>
          </ul>
        </li>
        <li>
          <strong>Hepatic Encephalopathy (HE):</strong> A spectrum of
          neuropsychiatric abnormalities caused by the accumulation of
          neurotoxins (like ammonia) that the failing liver cannot clear.
          <ul>
            <li>None (1 point)</li>
            <li>Grade I - II (Mild confusion, asterixis) (2 points)</li>
            <li>Grade III - IV (Somnolence to coma) (3 points)</li>
          </ul>
        </li>
      </ol>

      <h3>Interpreting the Child-Pugh Classes</h3>
      <p>
        The sum of the five variables results in a score ranging from 5 to
        15. This score stratifies the patient into one of three distinct
        classes, each offering prognostic insight:
      </p>

      <ul>
        <li>
          <strong>Class A (Score 5-6): Well-compensated liver disease.</strong>
          <p>
            These patients have a 1-year survival rate approaching 100% and
            a 2-year survival rate of 85%. They generally tolerate elective
            surgery well.
          </p>
        </li>
        <li>
          <strong>Class B (Score 7-9): Significant functional compromise.</strong>
          <p>
            The 1-year survival drops to 80%, and the 2-year survival is
            approximately 60%. Elective surgery carries significant risk and
            should be approached with extreme caution, ideally with
            multidisciplinary input.
          </p>
        </li>
        <li>
          <strong>Class C (Score 10-15): Decompensated liver disease.</strong>
          <p>
            This is end-stage liver failure. The 1-year survival rate is
            devastatingly low at 45%, and the 2-year survival is 35%.
            Elective surgery is universally contraindicated. These patients
            require urgent evaluation for liver transplantation or
            transition to palliative care.
          </p>
        </li>
      </ul>

      <h3>Limitations and Criticisms</h3>
      <p>
        While universally understood, the Child-Pugh score has significant
        limitations, which drove the development of the MELD score:
      </p>
      <ul>
        <li>
          <strong>Subjectivity:</strong> Assessing the degree of ascites
          ("mild" vs. "moderate") and the grade of encephalopathy involves
          subjective clinical judgment, leading to inter-observer
          variability.
        </li>
        <li>
          <strong>Ceiling and Floor Effects:</strong> The score caps
          laboratory values. A patient with a bilirubin of 3.5 gets the same
          3 points as a patient with a catastrophic bilirubin of 25.0, yet
          their mortality risks are vastly different. Similarly, a patient
          with a normal albumin of 4.5 is scored the same as one with 3.6.
        </li>
        <li>
          <strong>Influence of Therapy:</strong> Ascites and encephalopathy
          can be transiently improved with diuretics and lactulose. A
          patient's score might artificially improve from a Class C to a
          Class B after a few days in the hospital, even though their
          underlying hepatic reserve remains fundamentally destroyed.
        </li>
      </ul>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: When should I use Child-Pugh instead of MELD?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Use MELD exclusively when determining priority for liver
            transplantation. Use Child-Pugh when assessing the safety of
            drug dosing (many package inserts specify dosing reductions for
            Child-Pugh B or C) or when quickly communicating the general
            severity of a patient's cirrhosis to colleagues.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Can a patient's Child-Pugh class improve?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Yes. If the acute insult driving decompensation is removed
            (e.g., treating a superimposed infection, achieving sustained
            virologic response in Hepatitis C, or complete abstinence from
            alcohol), the liver can regenerate somewhat, and
            ascites/encephalopathy can resolve, lowering the score.
          </p>
        </div>
      </div>
    </div>
  );
}
