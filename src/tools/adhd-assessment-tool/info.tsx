import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function AdhdInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is Adult ADHD, and Why Is It Missed So Often?</h2>
        <p>
          Attention-Deficit/Hyperactivity Disorder (ADHD) is a
          neurodevelopmental condition marked by persistent patterns of
          inattention and/or hyperactivity-impulsivity that are more
          frequent and severe than typical for the person's developmental
          level, and that interfere with functioning in more than one area
          of life. It was long regarded as a disorder of childhood that
          children simply "grew out of." It is now well established that
          this is largely untrue: symptoms and functional impairment persist
          into adulthood in a substantial majority of people diagnosed as
          children, and adult ADHD affects a meaningful proportion of the
          general adult population worldwide, most of whom have never been
          formally assessed.
        </p>
        <p>
          Adult ADHD is under-recognized for several intersecting reasons.
          Its presentation shifts with age — overt hyperactivity in a
          seven-year-old often becomes internal restlessness and chronic
          disorganization in a thirty-year-old — so clinicians and patients
          alike may not recognize it as "the same condition." Many adults,
          particularly women and people who were high-achieving or highly
          intelligent as children, develop compensatory strategies that mask
          impairment until the structure of school gives way to the greater
          organizational demands of a career, a household, or parenting.
          And its symptoms overlap substantially with far more commonly
          diagnosed conditions such as anxiety and depression, meaning ADHD
          is easy to misattribute unless it is specifically screened for.
        </p>

        <h2>The Adult ADHD Self-Report Scale (ASRS v1.1)</h2>
        <p>
          The ASRS v1.1 was developed collaboratively by the World Health
          Organization and a working group of clinical researchers,
          including Ronald Kessler and colleagues, drawing its 18 items
          directly from the diagnostic symptom criteria for ADHD. It remains
          the most widely used, freely available, self-report screening
          instrument for adult ADHD in both clinical practice and research.
          The current NICE guideline on ADHD, NG87 ("Attention deficit
          hyperactivity disorder: diagnosis and management," originally
          published March 2018 and periodically reviewed since — most
          recently in 2025 — with no substantive change to its core
          diagnostic recommendations), supports the use of validated
          symptom questionnaires such as the ASRS as one part of a broader
          initial assessment, alongside collateral history and functional
          assessment.
        </p>
        <p>
          The full scale is divided into two parts. <strong>Part A</strong>{" "}
          consists of the six items found, in the original validation work
          by Kessler and colleagues, to be the strongest individual
          predictors of a clinical ADHD diagnosis; because of this, Part A
          alone is used as the standard initial screener, with published
          sensitivity around 69% and specificity around 99% against clinical
          diagnosis. <strong>Part B</strong> adds a further 12 items that
          provide additional descriptive detail on symptom frequency across
          the full range of ADHD criteria, useful during a comprehensive
          clinical assessment but not used to define the initial screening
          threshold.
        </p>

        <h2>How Part A Is Scored</h2>
        <p>
          Each of the six Part A items is rated on a five-point frequency
          scale — Never, Rarely, Sometimes, Often, Very Often — describing
          how the respondent has felt or behaved <em>over the past six
          months</em>. The scale's official scoring key is unusual in that
          the "symptomatic" cut-off is not the same for every item; it
          depends on which of the six questions is being answered:
        </p>
        <ul>
          <li>
            <strong>Questions 1–3</strong> (trouble finishing tasks,
            difficulty with organisation, forgetting appointments or
            obligations): a response of <em>Sometimes</em>, <em>Often</em>,
            or <em>Very Often</em> counts as symptomatic.
          </li>
          <li>
            <strong>Questions 4–6</strong> (avoiding/delaying tasks
            requiring sustained thought, fidgeting, feeling driven by a
            motor): only a response of <em>Often</em> or <em>Very Often</em>{" "}
            counts as symptomatic.
          </li>
        </ul>
        <p>
          The total number of symptomatic responses, out of six, is the Part
          A score. A score of <strong>4 or more</strong> constitutes a
          positive screen, indicating that the respondent's symptom pattern
          is highly consistent with adult ADHD and warrants a full
          diagnostic assessment. A score of 2–3 is intermediate and should
          prompt further evaluation if the person also reports significant
          functional impairment. A score of 0–1 makes an ADHD diagnosis
          less likely, though — as with any screening tool — it does not
          rule it out with certainty, particularly if the clinical history
          otherwise strongly suggests the diagnosis.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 29-year-old office worker completes Part A. She reports "Often"
          for trouble wrapping up final details (Q1, symptomatic), "Very
          Often" for difficulty organising tasks (Q2, symptomatic),
          "Sometimes" for forgetting appointments (Q3, symptomatic), "Often"
          for avoiding tasks requiring sustained thought (Q4, symptomatic),
          "Rarely" for fidgeting (Q5, not symptomatic), and "Sometimes" for
          feeling driven by a motor (Q6, not symptomatic, since Q4-6 require
          Often or Very Often).
        </p>
        <p>
          Her Part A score is <strong>4 out of 6</strong> symptomatic
          responses — a positive screen. This indicates her symptom profile
          is highly consistent with adult ADHD and she should be referred
          for a full diagnostic assessment; it is emphatically not, by
          itself, a diagnosis, and should be presented to her as "a
          screening result that supports further assessment," not as
          confirmation that she has ADHD.
        </p>

        <h2>From Positive Screen to Formal Diagnosis</h2>
        <p>
          A positive ASRS screen is the beginning of the diagnostic pathway,
          not its conclusion. Formal diagnosis requires a comprehensive
          clinical assessment, per DSM-5-TR (the current, 2022 text-revision
          of the DSM-5, which left the core ADHD symptom criteria themselves
          unchanged from DSM-5), confirming all of the following:
        </p>
        <ol>
          <li>
            <strong>Symptom count:</strong> five or more symptoms of
            inattention and/or five or more symptoms of
            hyperactivity-impulsivity, from the DSM-5-TR criteria list (the
            threshold is six or more for children under 17; adults require
            only five, reflecting that some symptoms naturally attenuate
            with age even when the underlying condition persists).
          </li>
          <li>
            <strong>Childhood onset:</strong> several symptoms were present
            before age 12. Collateral information — old school reports,
            parents' recollections — is often invaluable here, since adult
            recall of one's own childhood behaviour is notoriously
            unreliable.
          </li>
          <li>
            <strong>Pervasiveness:</strong> clear evidence of symptoms across
            two or more settings — for example, both work and home, or both
            social and academic/occupational life.
          </li>
          <li>
            <strong>Functional impairment:</strong> definite evidence that
            the symptoms reduce the quality of social, academic, or
            occupational functioning, not merely that the traits are present.
          </li>
          <li>
            <strong>Exclusion of alternative explanations:</strong> the
            symptoms are not better accounted for by another condition, such
            as an anxiety or mood disorder, a psychotic disorder, a
            personality disorder, or substance use.
          </li>
        </ol>
        <p>
          Per NG87, this assessment should be carried out by a specialist —
          a psychiatrist, paediatrician, or other appropriately trained and
          experienced clinician — based on a full clinical and psychosocial
          history, developmental history, and, where possible, direct
          observation or collateral report of functioning, and should never
          rest on a rating scale alone. Since 2024, NICE diagnostics guidance
          has also recognized objective computerized attention/activity
          measurement tools (such as QbTest) as an option to support, though
          never replace, this clinical assessment process in patients aged 6
          to 17.
        </p>

        <h2>Typical Adult Presentation</h2>
        <p>
          Adult ADHD frequently looks quite different from the stereotype of
          an overtly hyperactive child, and recognizing this different
          presentation is central to avoiding underdiagnosis:
        </p>
        <ul>
          <li>Chronic disorganisation and difficulty seeing tasks through to completion, even when the person is clearly capable and motivated</li>
          <li>Marked procrastination specifically on tasks requiring sustained mental effort</li>
          <li>Persistently forgetting appointments, deadlines, and commitments despite genuine effort to remember</li>
          <li>"Time blindness" — a poor internal sense of how much time has passed or how long a task will take</li>
          <li>Emotional dysregulation: low frustration tolerance, quick irritability, and rejection-sensitive dysphoria (an intense emotional reaction to perceived criticism or rejection)</li>
          <li>Internal restlessness that is felt rather than visibly displayed, replacing the overt physical hyperactivity seen in some children</li>
          <li>Hyperfocus — the ability to concentrate intensely, sometimes for hours, on a highly preferred or stimulating task, existing alongside an inability to sustain attention on unstimulating but necessary ones</li>
          <li>A history of underachievement relative to apparent ability, often attributed for years to "laziness" or "not trying hard enough"</li>
          <li>Chronic sleep difficulties, including delayed sleep onset and an irregular sleep-wake schedule</li>
        </ul>

        <h2>Differential Diagnosis and Common Comorbidities</h2>
        <p>
          ADHD has a high rate of overlap and coexistence with other
          conditions, and a careful differential diagnosis is essential
          both to avoid missing ADHD and to avoid over-attributing symptoms
          of another condition to it:
        </p>
        <ul>
          <li>
            <strong>Generalised anxiety disorder:</strong> worry-driven
            distraction can resemble inattentive ADHD. A useful
            distinguishing feature is the source of the distraction — in
            ADHD it is typically external stimuli in the environment, in
            GAD it is typically internal, worry-based rumination.
          </li>
          <li>
            <strong>Major depressive disorder:</strong> cognitive slowing,
            poor concentration, and reduced motivation in depression overlap
            substantially with inattentive ADHD symptoms; a careful mood and
            timeline history helps distinguish an episodic depressive
            presentation from a lifelong ADHD pattern.
          </li>
          <li>
            <strong>Bipolar disorder:</strong> impulsivity, distractibility,
            and racing thoughts during hypomanic or manic episodes can
            closely mimic ADHD; the episodic, time-limited nature of mood
            episodes versus the lifelong, trait-like nature of ADHD is the
            key distinguishing feature, and careful mood history is
            essential before starting stimulant medication.
          </li>
          <li>
            <strong>Autism spectrum disorder:</strong> executive dysfunction
            and social difficulties overlap with ADHD, and the two
            conditions frequently co-occur genuinely — both diagnoses should
            be made when both are present, rather than treating them as
            mutually exclusive.
          </li>
          <li>
            <strong>Sleep disorders:</strong> obstructive sleep apnoea and
            chronic insomnia both cause daytime inattention and impaired
            concentration that can closely mimic ADHD; a sleep history, and
            a validated tool such as the Epworth Sleepiness Scale, should be
            part of the standard work-up.
          </li>
          <li>
            <strong>Thyroid dysfunction:</strong> hyperthyroidism can cause
            restlessness and distractibility, while hypothyroidism can cause
            cognitive slowing; thyroid function tests are a standard,
            inexpensive part of the initial work-up.
          </li>
          <li>
            <strong>Substance use disorders:</strong> frequently comorbid
            with ADHD (sometimes reflecting self-medication of underlying
            symptoms) and capable of independently impairing attention and
            impulse control, complicating both diagnosis and treatment
            sequencing.
          </li>
        </ul>

        <h2>Management Following Diagnosis (NICE NG87)</h2>
        <p>Following a confirmed diagnosis, NG87 recommends a stepped approach:</p>
        <ul>
          <li>
            <strong>Psychoeducation</strong> for the patient, and where
            appropriate their family, about the nature of ADHD and the
            options available.
          </li>
          <li>
            <strong>Pharmacological treatment</strong> as first-line for
            adults with moderate-to-severe impairment: a stimulant —
            methylphenidate or lisdexamfetamine — is generally preferred
            first-line, with atomoxetine (a non-stimulant) as an alternative
            where stimulants are contraindicated or not tolerated, for
            example in significant cardiac disease, a history of substance
            misuse, or certain tic disorders.
          </li>
          <li>
            <strong>Psychological interventions:</strong> ADHD-adapted
            cognitive behavioural therapy is beneficial, particularly for
            organisational skills, emotional regulation, and addressing the
            secondary low self-esteem that often accumulates over years of
            unrecognized symptoms.
          </li>
          <li>
            <strong>Environmental and lifestyle strategies:</strong>{" "}
            external structure (calendars, reminders, task-breaking),
            consistent routines, and attention to sleep hygiene, which
            interacts bidirectionally with ADHD symptom severity.
          </li>
          <li>
            <strong>Ongoing monitoring:</strong> regular review of symptom
            response, cardiovascular parameters (blood pressure and heart
            rate) for patients on stimulant medication, and mood, with
            height and weight monitored in younger patients still growing.
          </li>
        </ul>

        <h2>Comparison to Other ADHD Screening Instruments</h2>
        <p>
          The ASRS is not the only validated adult ADHD screening tool.
          The <strong>Conners' Adult ADHD Rating Scales (CAARS)</strong>{" "}
          provide a more detailed, longer symptom profile often used in
          formal neuropsychological assessment rather than brief screening.
          The <strong>Wender Utah Rating Scale</strong> focuses specifically
          on retrospective recall of childhood symptoms, useful for
          establishing the childhood-onset criterion required for adult
          diagnosis. In children, the <strong>Vanderbilt ADHD Diagnostic
          Rating Scales</strong> and <strong>Conners' scales for
          children</strong> serve an analogous screening role, typically
          completed by both parents and teachers to capture the
          cross-setting requirement for diagnosis. All of these instruments
          share the same fundamental limitation as the ASRS: they screen for
          symptoms, they do not diagnose, and a positive result should always
          lead to — not substitute for — a full specialist clinical
          assessment.
        </p>

        <h2>Limitations of Self-Report Screening</h2>
        <p>
          Several limitations are worth understanding when using or
          interpreting the ASRS:
        </p>
        <ul>
          <li>
            <strong>Not diagnostic:</strong> the ASRS alone should never be
            used to initiate stimulant medication or to confirm a diagnosis
            — its role is strictly to identify people who warrant full
            assessment.
          </li>
          <li>
            <strong>Self-report bias:</strong> insight into one's own
            attention and behaviour varies; some people under-report due to
            limited self-awareness (common in ADHD itself, ironically, given
            the same executive dysfunction that impairs task completion can
            impair accurate self-monitoring), while others — particularly in
            contexts involving academic accommodations or controlled
            substance prescriptions — may over-report.
          </li>
          <li>
            <strong>State-dependence:</strong> the six-month reporting
            window can be confounded by an acute stressor, a period of poor
            sleep, or a comorbid mood episode inflating scores that would
            otherwise be lower.
          </li>
          <li>
            <strong>Cultural and educational context:</strong> some items
            assume a work or organisational environment (projects, deadlines,
            meetings) that may not map directly onto every respondent's
            actual daily life, which can affect scoring in some populations.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can adults be diagnosed with ADHD if they were never diagnosed as a child?",
            a: "Yes. Many adults with ADHD were never diagnosed in childhood — particularly women, whose symptoms are more often inattentive than hyperactive and therefore less behaviourally disruptive, and highly intelligent people who compensated well enough at school to avoid detection. DSM-5-TR requires evidence that symptoms were present before age 12, but does not require that a formal childhood diagnosis was actually made at the time.",
          },
          {
            q: "Is a positive ASRS screen the same as a diagnosis?",
            a: "No. The ASRS is a screening instrument with good but imperfect sensitivity and specificity. A positive Part A screen (four or more symptomatic responses) indicates the person should be referred for a full specialist diagnostic assessment; it is not, on its own, sufficient grounds for a diagnosis or for starting medication.",
          },
          {
            q: "Are ADHD stimulant medications safe for adults?",
            a: "Stimulant medications such as methylphenidate and lisdexamfetamine have a well-established safety and efficacy profile in adults when prescribed and monitored appropriately, including a baseline cardiovascular assessment. They are avoided or used with particular caution in significant structural heart disease, uncontrolled severe hypertension, and certain arrhythmias, and require careful consideration in anyone with a history of substance misuse given their misuse potential.",
          },
          {
            q: "Why is ADHD under-recognized in women?",
            a: "Women with ADHD more often present with inattentive rather than hyperactive symptoms, tend to internalize difficulties rather than display disruptive behaviour, and frequently develop compensatory strategies that mask impairment until the demands of higher education, work, or parenting exceed what those strategies can manage. Hormonal fluctuations across the menstrual cycle and during perimenopause can also measurably worsen ADHD symptoms, sometimes prompting assessment for the first time in adulthood.",
          },
          {
            q: "Does a normal ASRS score rule out ADHD?",
            a: "Not with certainty. Like any screening tool, the ASRS has imperfect sensitivity, and some adults with genuine ADHD — particularly those with strong compensatory strategies or significant insight difficulties — may score below the positive-screen threshold. If the clinical history strongly suggests ADHD despite a negative or borderline screen, referral for full assessment is still reasonable.",
          },
        ]}
      />

      <RelatedTools
        slugs={["epworth-sleepiness-scale", "child-development-tracker", "mmse-calculator"]}
      />

      <References
        items={[
          {
            text: "Kessler RC, Adler L, Ames M, et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med. 2005;35(2):245-256.",
          },
          {
            text: "National Institute for Health and Care Excellence. Attention deficit hyperactivity disorder: diagnosis and management (NG87). Published 14 March 2018, last reviewed 2025.",
            href: "https://www.nice.org.uk/guidance/ng87",
          },
          {
            text: "American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.",
          },
          {
            text: "National Institute for Health and Care Excellence. Digital technologies for assessing attention deficit hyperactivity disorder (ADHD) (DG60, now HTG729).",
            href: "https://www.nice.org.uk/guidance/dg60",
          },
          {
            text: "Faraone SV, Banaschewski T, Coghill D, et al. The World Federation of ADHD International Consensus Statement: 208 evidence-based conclusions about the disorder. Neurosci Biobehav Rev. 2021;128:789-818.",
          },
        ]}
      />
    </>
  );
}
