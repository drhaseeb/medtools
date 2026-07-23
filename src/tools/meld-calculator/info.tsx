export default function MeldInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Understanding the Model for End-Stage Liver Disease (MELD) Score</h2>

      <p>
        End-stage liver disease (ESLD) is a devastating clinical condition
        with a high mortality rate. In the past, allocating the scarce
        resource of donor livers for transplantation was often subjective,
        leading to inequities in the transplant waitlist system. The
        introduction of the Model for End-Stage Liver Disease (MELD) score
        revolutionized hepatology by providing a strictly objective,
        mathematically derived system to predict short-term mortality in
        patients with cirrhosis.
      </p>

      <p>
        Originally developed in 2000 to predict survival in patients
        undergoing Transjugular Intrahepatic Portosystemic Shunt (TIPS)
        procedures, the MELD score was quickly recognized for its broader
        utility. In 2002, the United Network for Organ Sharing (UNOS)
        adopted the MELD score to prioritize patients awaiting liver
        transplantation in the United States, adhering to the ethical
        principle of "sickest first."
      </p>

      <h3>The Components of the Traditional MELD Score</h3>
      <p>
        The brilliance of the MELD score lies in its reliance on objective,
        easily reproducible laboratory values rather than subjective clinical
        assessments (like the degree of ascites or encephalopathy used in the
        older Child-Pugh score). The traditional MELD equation incorporates
        three vital variables:
      </p>

      <ul>
        <li>
          <strong>Serum Bilirubin:</strong> A direct measure of the liver's
          ability to excrete bile. Elevated bilirubin (jaundice) is a
          hallmark of profound hepatic decompensation.
        </li>
        <li>
          <strong>Serum Creatinine:</strong> A measure of kidney function.
          Hepatorenal syndrome—where the kidneys fail as a direct consequence
          of severe liver disease—is a major driver of mortality in
          cirrhosis. Including creatinine recognizes that renal failure is
          inextricably linked to end-stage hepatic failure.
        </li>
        <li>
          <strong>International Normalized Ratio (INR):</strong> A measure of
          the blood's ability to clot. The liver synthesizes the majority of
          coagulation factors. A prolonged INR indicates a severe loss of
          hepatic synthetic function.
        </li>
      </ul>

      <h3>The Evolution: MELD-Na and MELD 3.0</h3>
      <p>
        The MELD score has undergone continuous refinement to improve its
        predictive accuracy and correct systemic biases:
      </p>

      <ol>
        <li>
          <strong>MELD-Na (2016):</strong> It became apparent that severe
          hyponatremia (low serum sodium) was an independent predictor of
          mortality in cirrhotics, reflecting profound hemodynamic
          derangement and splanchnic vasodilation. UNOS incorporated serum
          sodium into the equation, creating the MELD-Na score, which is now
          the standard for liver allocation.
        </li>
        <li>
          <strong>MELD 3.0 (2023):</strong> The most recent update, MELD 3.0,
          was introduced to address gender disparities in liver
          transplantation. Women historically had a higher mortality rate on
          the waitlist because they inherently have lower muscle mass,
          leading to lower serum creatinine levels. This artificially
          depressed their MELD scores compared to men with the same degree
          of renal impairment. MELD 3.0 adds a "sex" variable, giving women a
          slight point advantage, and also incorporates serum albumin to
          further refine mortality prediction.
        </li>
      </ol>

      <h3>Clinical Application and Interpretation</h3>
      <p>
        The MELD score ranges from 6 to 40. A higher score dictates a higher
        risk of 90-day mortality and, consequently, a higher priority on the
        liver transplant waitlist.
      </p>
      <ul>
        <li><strong>MELD &le; 9:</strong> Less than 2% estimated 90-day mortality.</li>
        <li><strong>MELD 10 - 19:</strong> 6% estimated 90-day mortality.</li>
        <li><strong>MELD 20 - 29:</strong> 20% estimated 90-day mortality.</li>
        <li><strong>MELD 30 - 39:</strong> 53% estimated 90-day mortality.</li>
        <li><strong>MELD 40:</strong> &ge; 71% estimated 90-day mortality.</li>
      </ul>

      <p>
        Beyond transplantation, the MELD score is widely used by
        gastroenterologists and surgeons to assess perioperative risk for
        cirrhotic patients undergoing non-transplant surgeries (like
        cholecystectomy or hernia repair). A MELD score above 15 generally
        contraindicates elective surgery due to the extremely high risk of
        postoperative hepatic decompensation and death.
      </p>

      <h3>Limitations and "MELD Exceptions"</h3>
      <p>
        While objective, the MELD score cannot capture every nuance of liver
        disease. Some severe complications of cirrhosis do not immediately
        alter bilirubin, creatinine, or INR. To address this, the transplant
        system uses "MELD Exception Points." Patients with conditions like
        Hepatocellular Carcinoma (HCC), Hepatopulmonary Syndrome (HPS), or
        familial amyloidosis can petition for exception points to
        artificially elevate their MELD score, ensuring they receive a
        transplant before their disease becomes untreatable, even if their
        baseline lab values are relatively normal.
      </p>

      <h3>Frequently Asked Questions (FAQs)</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: Why did MELD replace the Child-Pugh score for transplant
            allocation?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: The Child-Pugh score relies heavily on subjective clinical
            assessments—specifically, the degree of ascites (mild vs.
            moderate) and hepatic encephalopathy. These are highly variable
            between different examining physicians and fluctuate wildly with
            medical therapy (like taking diuretics or lactulose). The MELD
            score's use of strict lab values eliminated this subjectivity.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Does the MELD score apply to acute liver failure?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: No. The MELD score was validated specifically for chronic
            liver disease (cirrhosis). Acute liver failure (e.g., from an
            acetaminophen overdose) progresses much more rapidly and is
            evaluated using different criteria, such as the King's College
            Criteria, for urgent transplant listing (Status 1A).
          </p>
        </div>
      </div>
    </div>
  );
}
