export default function EpworthInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Epworth Sleepiness Scale: Clinical Guide to Excessive Daytime Sleepiness</h2>

      <p>
        The Epworth Sleepiness Scale (ESS) is a validated, self-administered
        questionnaire used to measure excessive daytime sleepiness (EDS)—a
        common and clinically significant symptom that affects an estimated
        10–20% of the adult population. Developed by Dr Murray Johns in
        Melbourne in 1991, the ESS has become the most widely used instrument
        for quantifying subjective sleepiness in clinical practice and
        research worldwide. Understanding how to administer, interpret, and
        act upon ESS scores is fundamental to the assessment of patients
        presenting with fatigue, sleep disturbance, morning headaches, or
        suspected obstructive sleep apnoea.
      </p>

      <h3>Why Excessive Daytime Sleepiness Matters</h3>
      <p>
        Excessive daytime sleepiness is not merely an inconvenience—it is a
        significant driver of road traffic accidents, occupational injuries,
        cardiovascular morbidity, and reduced quality of life. The primary
        underlying cause of EDS in the UK is obstructive sleep apnoea
        (OSA), affecting approximately 1.5 million adults—the vast majority
        undiagnosed. Other important causes include insufficient sleep
        syndrome, narcolepsy, idiopathic hypersomnia, circadian rhythm
        disorders, and medication side effects.
      </p>
      <p>
        OSA is characterised by repetitive upper airway obstruction during
        sleep, leading to intermittent hypoxaemia, arousal from sleep, and
        sympathetic nervous system activation. This cycle of fragmented sleep
        and hypoxia results in daytime sleepiness, cognitive impairment,
        hypertension, and increased cardiovascular risk. NICE Guideline NG202
        (2021) specifically addresses OSA and mandates appropriate use of
        validated symptom questionnaires including the ESS as part of the
        diagnostic pathway.
      </p>

      <h3>The Eight-Item ESS: Questions and Scoring</h3>
      <p>
        The ESS asks respondents to rate their likelihood of dozing in eight
        everyday situations using a 0–3 scale:
      </p>
      <ul>
        <li>0 = Would never doze</li>
        <li>1 = Slight chance of dozing</li>
        <li>2 = Moderate chance of dozing</li>
        <li>3 = High chance of dozing</li>
      </ul>
      <p>The eight situations assessed are:</p>
      <ol>
        <li>Sitting and reading</li>
        <li>Watching television</li>
        <li>Sitting inactive in a public place</li>
        <li>As a car passenger for one hour without a break</li>
        <li>Lying down to rest in the afternoon</li>
        <li>Sitting and talking to someone</li>
        <li>Sitting quietly after lunch (without alcohol)</li>
        <li>In a car, while stopped for a few minutes in traffic</li>
      </ol>
      <p>
        The maximum possible score is 24. Responses should reflect the
        patient's usual behaviour over recent weeks, not how they feel on the
        day of assessment. Patients should be encouraged to give an honest
        answer even if they have not experienced a particular situation
        recently.
      </p>

      <h3>Score Interpretation and Clinical Thresholds</h3>
      <p>The standard ESS interpretation thresholds are:</p>
      <ul>
        <li>
          <strong>0–7:</strong> Normal range. No clinically significant
          daytime sleepiness. Address sleep hygiene if patient reports
          subjective fatigue.
        </li>
        <li>
          <strong>8–10:</strong> Mild sleepiness. Likely lifestyle-related.
          Assess sleep duration, bedtime routine, caffeine, alcohol, and
          screen time before bed. Review medications for sedating side
          effects.
        </li>
        <li>
          <strong>11–15:</strong> Moderate EDS. Warrants further
          investigation. Refer for sleep study (polysomnography or home
          sleep apnoea test). Assess for OSA, narcolepsy, depression, and
          hypothyroidism.
        </li>
        <li>
          <strong>16–24:</strong> Severe EDS. Urgent investigation required.
          Strong likelihood of OSA or another primary sleep disorder. Advise
          the patient not to drive until assessed (DVLA guidance). Refer
          urgently for sleep study.
        </li>
      </ul>

      <h3>ESS in the Diagnosis of Obstructive Sleep Apnoea</h3>
      <p>
        OSA remains significantly underdiagnosed, partly because
        patients—and their GPs—may attribute daytime sleepiness to lifestyle
        factors. The ESS provides a standardised, objective measure that can
        trigger appropriate referral. NICE NG202 recommends:
      </p>
      <ul>
        <li>Use of the ESS as part of clinical assessment for suspected OSA</li>
        <li>
          Consideration of a home sleep apnoea test (HSAT) if OSA is
          suspected based on clinical history and ESS score
        </li>
        <li>
          In-laboratory polysomnography if HSAT is inconclusive or if a
          non-OSA sleep disorder is suspected
        </li>
        <li>
          Continuous positive airway pressure (CPAP) therapy for
          moderate-severe OSA (AHI ≥15/hour) with symptomatic EDS
        </li>
        <li>
          Reassessment of ESS after initiating CPAP to monitor treatment
          response
        </li>
      </ul>
      <p>
        Importantly, a normal ESS does not exclude OSA. A significant
        proportion of OSA patients—particularly those with mild-moderate
        severity or those who are habitual short sleepers—may not report
        significant daytime sleepiness. Clinical risk factors (obesity, large
        neck circumference, witnessed apnoeas, nocturia, morning headaches)
        should be assessed independently of the ESS.
      </p>

      <h3>Driving and OSA: A Critical Safety Consideration</h3>
      <p>
        Patients with ESS ≥11 (or any patient reporting falling asleep at
        the wheel or near-miss incidents) must be explicitly advised of the
        increased risk of road traffic accidents associated with EDS. Under
        DVLA guidelines, Group 1 (car/motorcycle) licence holders with OSA
        must stop driving if they are:
      </p>
      <ul>
        <li>Experiencing excessive sleepiness</li>
        <li>Awaiting assessment or treatment</li>
        <li>Not compliant with or not responding to CPAP therapy</li>
      </ul>
      <p>
        Group 2 (HGV/bus) licence holders face more stringent requirements
        and must notify the DVLA and demonstrate adequate treatment response
        before returning to driving. This conversation must be documented in
        the clinical record.
      </p>

      <h3>Differential Diagnosis of Excessive Daytime Sleepiness</h3>
      <p>
        A structured approach to EDS requires consideration of multiple
        diagnoses beyond OSA:
      </p>
      <ul>
        <li>
          <strong>Insufficient sleep syndrome:</strong> Most common cause
          globally. Diary-based sleep assessment reveals chronic short sleep
          duration.
        </li>
        <li>
          <strong>Narcolepsy:</strong> ESS typically 16–24. Associated with
          cataplexy, sleep paralysis, and hypnagogic hallucinations. Requires
          MSLT (Multiple Sleep Latency Test) for diagnosis.
        </li>
        <li>
          <strong>Idiopathic hypersomnia:</strong> Long sleep time with
          persistent sleepiness. MSLT shows short sleep latency without REM
          sleep onset.
        </li>
        <li>
          <strong>Circadian rhythm sleep disorders:</strong> Delayed or
          advanced sleep phase. Timing of sleepiness is key diagnostic clue.
        </li>
        <li>
          <strong>Depression and anxiety:</strong> Commonly associated with
          hypersomnia. Assess with PHQ-9 / GAD-7.
        </li>
        <li>
          <strong>Hypothyroidism:</strong> TSH is mandatory in unexplained
          EDS.
        </li>
        <li>
          <strong>Medication-related:</strong> Antihistamines,
          antipsychotics, opioids, benzodiazepines, beta-blockers.
        </li>
      </ul>

      <h3>Treatment and Follow-Up</h3>
      <p>
        Management of EDS depends on the underlying diagnosis. For confirmed
        OSA, CPAP remains the gold-standard treatment. Mandibular advancement
        devices (MADs) are appropriate for mild-moderate OSA or CPAP
        intolerance. Lifestyle interventions—weight loss, positional
        therapy, alcohol cessation—reduce OSA severity. ESS should be
        repeated 4–8 weeks after CPAP initiation to confirm symptomatic
        response. A post-CPAP ESS below 11 is a marker of adequate
        treatment. For narcolepsy, modafinil or sodium oxybate is
        first-line.
      </p>

      <h3>Frequently Asked Questions</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">Q: Can the ESS be used in children?</strong>
          <p className="mt-1 text-ink-muted">
            A: The standard ESS is validated for adults. A paediatric version
            (ESS-CHAD) exists for children aged 12–18. For younger children,
            the Paediatric Daytime Sleepiness Scale or the Pediatric Sleep
            Questionnaire (PSQ) is more appropriate.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: How does the ESS compare to the STOP-BANG questionnaire?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: STOP-BANG focuses on anatomical and physiological risk factors
            for OSA (Snoring, Tiredness, Observed apnoea, Pressure, BMI, Age,
            Neck, Gender). ESS measures symptom severity (sleepiness). Both
            are complementary; using both increases diagnostic sensitivity
            for OSA in primary care and pre-operative settings.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Does CPAP always resolve a high ESS?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: CPAP significantly reduces ESS in most patients with OSA.
            However, residual EDS persists in 5–10% despite adequate CPAP
            use (as evidenced by good compliance data). These patients
            should be reassessed for other sleep disorders, particularly
            narcolepsy or idiopathic hypersomnia, using MSLT.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Is the ESS reliable as a serial monitoring tool?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Yes. ESS has good test-retest reliability over short
            intervals. It is commonly used before and after treatment
            initiation (e.g., CPAP) to objectively quantify symptom
            improvement. A reduction of ≥3 points is generally considered a
            clinically meaningful improvement.
          </p>
        </div>
      </div>
    </div>
  );
}
