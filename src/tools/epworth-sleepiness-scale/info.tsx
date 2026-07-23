import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function EpworthInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the Epworth Sleepiness Scale?</h2>
        <p>
          The Epworth Sleepiness Scale (ESS) is a short, self-administered
          questionnaire that measures a person's general propensity to doze
          off during ordinary daily activities. Rather than asking "how tired
          do you feel right now," it asks the respondent to rate their
          <em> chance of dozing</em> — not merely feeling tired — in eight
          everyday situations, ranging from passive activities like watching
          television to more alerting ones like sitting in a car stopped in
          traffic for a few minutes. The eight ratings are summed into a
          single score from 0 to 24, with higher scores indicating greater
          excessive daytime sleepiness (EDS).
        </p>
        <p>
          The ESS is quick — it takes under two minutes to complete — free to
          use, and has been translated and validated in dozens of languages.
          These properties have made it the single most widely used
          sleepiness questionnaire in clinical sleep medicine, primary care,
          occupational health, and driving-fitness assessment worldwide. It
          is not a diagnostic test for any specific condition; it is a
          standardized way of quantifying a symptom — sleepiness — that would
          otherwise be described only in vague, non-comparable terms such as
          "a bit tired" or "shattered."
        </p>

        <h2>History and Development</h2>
        <p>
          The scale was created in 1991 by Dr Murray Johns, a sleep
          physician at the Epworth Hospital in Melbourne, Australia — hence
          its name. Johns published the original validation study, "A new
          method for measuring daytime sleepiness: the Epworth sleepiness
          scale," in the journal <em>Sleep</em>. His stated motivation was
          that the sleep laboratory measures available at the time — most
          notably the Multiple Sleep Latency Test (MSLT), which measures how
          quickly a wired-up patient falls asleep across several
          nap opportunities in a laboratory — were expensive, time-consuming,
          and impractical for routine clinical screening. He wanted a
          questionnaire that a patient could complete in a waiting room, that
          correlated reasonably well with objective sleep-laboratory
          findings, and that could distinguish people with recognized
          sleep disorders (obstructive sleep apnoea, narcolepsy, idiopathic
          hypersomnia) from healthy controls.
        </p>
        <p>
          Johns deliberately designed the eight items to span a spectrum of
          "soporific" situations — from highly soporific (lying down to rest
          in the afternoon) to only mildly soporific (sitting and talking to
          someone, or driving a car stopped in traffic) — on the theory that
          a person with pathological sleepiness dozes even in situations that
          would not send a well-rested person to sleep. This design has held
          up well: in the more than three decades since publication, the ESS
          has remained essentially unchanged and continues to correlate
          meaningfully, if imperfectly, with objective measures of
          sleepiness and with the presence and severity of obstructive sleep
          apnoea.
        </p>

        <h2>How the ESS Is Scored</h2>
        <p>
          For each of the eight situations, the respondent chooses one of
          four options describing their usual chance of dozing (not just
          feeling tired) in recent times:
        </p>
        <ul>
          <li><strong>0 — Would never doze</strong></li>
          <li><strong>1 — Slight chance of dozing</strong></li>
          <li><strong>2 — Moderate chance of dozing</strong></li>
          <li><strong>3 — High chance of dozing</strong></li>
        </ul>
        <p>The eight situations, in the order Johns originally published them, are:</p>
        <ol>
          <li>Sitting and reading</li>
          <li>Watching television</li>
          <li>Sitting inactive in a public place (e.g. a theatre or a meeting)</li>
          <li>As a passenger in a car for an hour without a break</li>
          <li>Lying down to rest in the afternoon when circumstances permit</li>
          <li>Sitting and talking to someone</li>
          <li>Sitting quietly after lunch without alcohol</li>
          <li>In a car, while stopped for a few minutes in traffic</li>
        </ol>
        <p>
          The eight ratings are simply added together to give the total ESS
          score, which therefore ranges from a minimum of 0 to a maximum of
          24. There is no weighting of individual items — each carries equal
          value. Respondents should be asked to answer based on their usual
          way of life in recent weeks, and should still estimate an answer
          for any situation they have not personally encountered recently
          (for example, a non-driver should still estimate their likely
          chance of dozing as a passenger).
        </p>

        <h2>Worked Example</h2>
        <p>
          A 46-year-old lorry driver presents to his GP complaining of
          tiredness. He completes the ESS as follows: reading (2), watching
          TV (2), sitting inactive in public (1), as a car passenger for an
          hour (3), lying down in the afternoon (3), talking to someone (1),
          sitting quietly after lunch (2), and stopped in traffic (2).
        </p>
        <p>
          His total is <strong>2+2+1+3+3+1+2+2 = 16</strong>, which falls in
          the severe excessive daytime sleepiness band. Given his occupation
          as a professional (Group 2) driver, this score — combined with his
          reported neck circumference, snoring, and witnessed apnoeas from
          his partner — would trigger an urgent sleep study referral and an
          explicit, documented conversation about his fitness to drive and
          his obligation to notify the DVLA, discussed further below.
        </p>

        <h2>Interpreting the Total Score</h2>
        <p>
          The scoring bands used in this tool reflect the interpretation
          scheme most widely taught in sleep medicine and used by major
          clinical references, anchored around Johns' own finding that
          healthy adult controls typically score well below 10, while
          patients with clinically significant sleep disorders typically
          score well above it:
        </p>
        <ul>
          <li>
            <strong>0–10 — Normal range:</strong> This range covers the vast
            majority of healthy adults. A score in this range does not rule
            out a sleep disorder (see limitations below), but it does not by
            itself suggest excessive daytime sleepiness.
          </li>
          <li>
            <strong>11–12 — Mild excessive daytime sleepiness:</strong>{" "}
            Borderline elevation. Consider basic causes — insufficient
            sleep duration, irregular schedule, caffeine or alcohol close to
            bedtime, sedating medication — before pursuing specialist
            referral, unless other red-flag symptoms are present.
          </li>
          <li>
            <strong>13–15 — Moderate excessive daytime sleepiness:</strong>{" "}
            Warrants a more structured work-up, generally including referral
            for a sleep study (polysomnography or a home/ambulatory sleep
            apnoea test) and screening for narcolepsy, depression, and
            hypothyroidism.
          </li>
          <li>
            <strong>16–24 — Severe excessive daytime sleepiness:</strong>{" "}
            Strongly suggests a significant underlying sleep disorder.
            Urgent sleep study referral is appropriate, and — critically —
            explicit driving safety advice must be given and documented at
            this visit, not deferred to the sleep clinic appointment.
          </li>
        </ul>
        <p>
          Some clinical services use a single, simpler cut-off instead of
          four bands: a score of 10 or below is considered within normal
          limits, and any score above 10 is considered evidence of excessive
          daytime sleepiness warranting further assessment. Both approaches
          are used in practice; the four-band scheme mainly adds useful
          granularity for tracking treatment response over time.
        </p>

        <h2>The ESS and Obstructive Sleep Apnoea</h2>
        <p>
          Obstructive sleep apnoea (OSA) is overwhelmingly the most common
          identifiable cause of pathological daytime sleepiness referred to
          sleep services, and it is substantially underdiagnosed — many
          affected adults have never been assessed. OSA is caused by
          repeated collapse of the upper airway during sleep, producing
          brief arousals and intermittent drops in oxygen saturation dozens
          or hundreds of times per night. The resulting sleep fragmentation,
          rather than the total sleep time, is what drives the daytime
          sleepiness; this is also why sleep quantity alone does not explain
          why a person who spends eight hours in bed can still feel
          unrefreshed and dangerously drowsy the next day.
        </p>
        <p>
          Current NICE guidance (NG202, "Obstructive sleep apnoea/hypopnoea
          syndrome and obesity hypoventilation syndrome in over 16s,"
          published August 2021) recommends that clinical assessment for
          suspected OSA include a validated sleepiness questionnaire such as
          the ESS, alongside history-taking for witnessed apnoeas, snoring,
          nocturia, morning headache, and examination findings such as
          increased neck circumference and body mass index. NG202 recommends
          a home respiratory polygraphy (a limited overnight sleep study,
          sometimes called a home sleep apnoea test) as the first-line
          investigation for most adults with suspected OSA, reserving
          full in-laboratory polysomnography for cases where the diagnosis
          remains unclear or a different sleep disorder (such as narcolepsy)
          is suspected. Continuous positive airway pressure (CPAP) is
          recommended first-line for moderate-to-severe OSA with symptomatic
          sleepiness, and should also be offered to symptomatic patients with
          mild OSA where lifestyle measures alone have not resolved
          symptoms.
        </p>
        <p>
          It is essential to understand that a <em>normal</em> ESS score does
          not exclude OSA. A meaningful proportion of people with confirmed,
          even severe, OSA do not subjectively rate themselves as sleepy —
          some because they have adapted to chronic sleep fragmentation over
          years, others simply because self-reported sleepiness correlates
          only moderately with objective measures of sleep pathology.
          Clinical suspicion based on risk factors (obesity, large neck
          circumference, witnessed apnoeas, treatment-resistant hypertension)
          should prompt investigation even when the ESS is unremarkable.
        </p>

        <h2>Driving Safety and the DVLA</h2>
        <p>
          Excessive daytime sleepiness is a recognized cause of road traffic
          collisions, and clinicians have a professional duty to address
          driving safety directly with any patient who has a high ESS score
          or who reports falling asleep, or nearly falling asleep, at the
          wheel. Current DVLA medical guidance distinguishes OSA <em>with</em>{" "}
          excessive sleepiness from OSA <em>without</em> it:
        </p>
        <ul>
          <li>
            <strong>OSA without excessive sleepiness (any severity):</strong>{" "}
            the patient may continue driving as normal and does not need to
            notify the DVLA.
          </li>
          <li>
            <strong>Mild OSA with excessive sleepiness:</strong> the patient
            must not drive until the sleepiness is satisfactorily controlled;
            if it is not controlled within three months, the DVLA must be
            notified.
          </li>
          <li>
            <strong>Moderate or severe OSA with excessive sleepiness:</strong>{" "}
            the patient must not drive until the sleep clinic confirms the
            OSA is controlled, sleepiness has resolved, and CPAP compliance
            is adequate — and the DVLA must be notified.
          </li>
        </ul>
        <p>
          Group 2 licence holders (bus and lorry drivers) face the same
          principles but with stricter monitoring and more frequent review,
          reflecting the greater consequences of a collision involving a
          heavy goods vehicle. Whatever the specific circumstances, the
          conversation about driving must happen at the point of assessment —
          not deferred until a sleep clinic appointment that may be weeks or
          months away — and should be clearly documented in the notes.
        </p>

        <h2>Differential Diagnosis of Excessive Daytime Sleepiness</h2>
        <p>
          A high ESS score is a symptom, not a diagnosis, and a structured
          differential should always be considered:
        </p>
        <ul>
          <li>
            <strong>Insufficient sleep syndrome:</strong> simply not
            allowing enough time in bed for sleep, extremely common in a
            society that as a whole is chronically under-slept. A sleep
            diary spanning one to two weeks is usually the most revealing
            single test.
          </li>
          <li>
            <strong>Obstructive sleep apnoea:</strong> discussed above; by
            far the most common organic cause referred to sleep clinics.
          </li>
          <li>
            <strong>Narcolepsy:</strong> characteristically produces very
            high ESS scores (commonly in the high teens to 24) and is
            associated with cataplexy (sudden loss of muscle tone triggered
            by strong emotion), sleep paralysis, and hypnagogic
            hallucinations. Confirmation requires an MSLT.
          </li>
          <li>
            <strong>Idiopathic hypersomnia:</strong> long, unrefreshing
            sleep with persistent daytime sleepiness and, characteristically,
            severe "sleep inertia" (extreme difficulty waking). The MSLT
            shows a short mean sleep latency without the abnormal REM sleep
            onsets seen in narcolepsy.
          </li>
          <li>
            <strong>Circadian rhythm disorders:</strong> delayed or advanced
            sleep-phase disorder, and shift-work disorder, in which the
            timing — not the quantity or quality — of sleep is misaligned
            with the person's obligations.
          </li>
          <li>
            <strong>Depression and other mood or anxiety disorders:</strong>{" "}
            hypersomnia is a recognized feature of some depressive
            presentations. Screening with a validated tool such as the
            PHQ-9 is appropriate when the history suggests a mood component.
          </li>
          <li>
            <strong>Hypothyroidism:</strong> a simple, inexpensive TSH test
            is a standard part of any unexplained EDS work-up.
          </li>
          <li>
            <strong>Sedating medication:</strong> antihistamines,
            benzodiazepines, opioids, some antipsychotics, and certain
            antiepileptics can all independently cause daytime sleepiness; a
            careful medication history and reconciliation is essential
            before attributing sleepiness to a primary sleep disorder.
          </li>
        </ul>

        <h2>Treatment and Monitoring Response</h2>
        <p>
          Management follows directly from the underlying cause. For
          confirmed OSA, CPAP remains the first-line and most effective
          treatment for moderate-to-severe disease; mandibular advancement
          devices are a reasonable alternative for mild-to-moderate disease
          or for patients who cannot tolerate CPAP. Weight loss, positional
          therapy (for OSA that occurs predominantly when sleeping supine),
          and reduction of evening alcohol intake all reduce OSA severity as
          adjuncts. For narcolepsy, wake-promoting agents such as modafinil,
          or sodium oxybate for more severe cases with cataplexy, are
          standard first-line pharmacological options.
        </p>
        <p>
          Whatever the treatment, the ESS is a useful tool for monitoring
          response over time precisely because it is quick to repeat at each
          follow-up visit. A commonly used benchmark is that a fall of
          roughly 2 points or more, or a return to a score below 10–11, is
          considered a clinically meaningful improvement — although the
          single most important clinical marker of success remains the
          patient's own report that daytime function and alertness have
          genuinely improved, not the number itself.
        </p>

        <h2>Comparison With Other Sleepiness and OSA Screening Tools</h2>
        <p>
          The ESS is often used alongside, rather than instead of, other
          validated instruments:
        </p>
        <ul>
          <li>
            <strong>STOP-BANG questionnaire:</strong> screens for the{" "}
            <em>risk</em> of OSA using eight yes/no items covering Snoring,
            Tiredness, Observed apnoea, blood Pressure, BMI, Age, Neck
            circumference, and Gender — it identifies who is likely to
            <em>have</em> OSA, whereas the ESS quantifies how sleepy the
            person currently <em>feels</em>. The two measure related but
            distinct constructs, and using both together improves overall
            diagnostic yield in primary care and pre-operative screening.
          </li>
          <li>
            <strong>Multiple Sleep Latency Test (MSLT):</strong> the
            objective, laboratory-based gold standard for measuring
            physiological sleep tendency across several scheduled daytime
            naps. It is far more resource-intensive than the ESS and is
            reserved for cases where narcolepsy or idiopathic hypersomnia is
            suspected, or where sleepiness is disproportionate to any
            apparent cause.
          </li>
          <li>
            <strong>Stanford Sleepiness Scale (SSS) and Karolinska
            Sleepiness Scale (KSS):</strong> single-item scales that measure
            sleepiness at one specific moment in time, useful for repeated
            measurement across a single day (for example, in shift-work or
            driving-simulator research), in contrast to the ESS's broader
            question about usual behaviour over recent weeks.
          </li>
        </ul>

        <h2>Limitations and Special Populations</h2>
        <p>
          The ESS is powerful because it is short and simple, but that same
          simplicity creates real limitations that must be kept in mind:
        </p>
        <ul>
          <li>
            <strong>It is entirely subjective:</strong> the score reflects
            what the patient believes about their own behaviour, which can
            be distorted by poor self-awareness, denial (common in
            professional drivers concerned about their licence), or
            conversely by exaggeration in some medico-legal or disability
            assessment contexts.
          </li>
          <li>
            <strong>Cultural and linguistic variation:</strong> some of the
            original eight situations (for example, being a passenger in a
            car) are less applicable in populations with different transport
            habits, and validated translations do not always reproduce
            identical cut-off performance to the original English-language
            version.
          </li>
          <li>
            <strong>Not validated for young children:</strong> the standard
            adult ESS assumes situations (driving, sitting in meetings) that
            are not relevant to young children. A modified version for
            adolescents, the ESS for Children and Adolescents (ESS-CHAD), is
            validated for ages roughly 12–18; younger children require
            different tools such as the Paediatric Sleep Questionnaire.
          </li>
          <li>
            <strong>Cannot localize the cause:</strong> a high score confirms
            sleepiness is present but says nothing about its cause — the
            differential diagnosis above must always be worked through
            rather than assuming OSA by default.
          </li>
          <li>
            <strong>Poor correlation with objective severity in some
            patients:</strong> ESS score correlates only moderately with the
            Apnoea-Hypopnoea Index (the primary severity measure from a sleep
            study) — some patients with severe OSA by AHI report a low ESS,
            and vice versa, so the ESS should never be used alone to decide
            whether a sleep study is needed if clinical suspicion is high.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can the ESS be used in children?",
            a: "The standard adult ESS assumes situations, such as driving or sitting in business meetings, that are not relevant to young children. A validated adolescent version, the ESS-CHAD, exists for ages roughly 12–18. For younger children, tools such as the Pediatric Sleep Questionnaire or Paediatric Daytime Sleepiness Scale are more appropriate.",
          },
          {
            q: "Does a normal ESS score rule out sleep apnoea?",
            a: "No. A meaningful proportion of people with confirmed, even severe, obstructive sleep apnoea do not rate themselves as sleepy on the ESS. If clinical risk factors are present — witnessed apnoeas, loud snoring, obesity, large neck circumference, treatment-resistant hypertension — further investigation is warranted even with a normal score.",
          },
          {
            q: "How is the ESS different from the STOP-BANG questionnaire?",
            a: "STOP-BANG screens for the risk of having obstructive sleep apnoea using anatomical and demographic factors (snoring, observed apnoeas, blood pressure, BMI, age, neck size, sex). The ESS measures how sleepy the person currently feels in daily life. They assess related but different things, and are often used together.",
          },
          {
            q: "What score requires an urgent driving conversation?",
            a: "Any patient reporting excessive sleepiness that could affect driving safety — regardless of the exact numeric score — should be given explicit driving advice at the point of assessment. A score in the moderate-to-severe range (13 and above), or any history of dozing or near-dozing at the wheel, should prompt an immediate, documented discussion about not driving until assessed, in line with DVLA guidance.",
          },
          {
            q: "How much improvement in ESS score matters clinically?",
            a: "A fall of roughly 2 points or more, or a return to a score below about 10–11, is generally regarded as a clinically meaningful improvement after starting treatment such as CPAP. The patient's own report of improved daytime alertness and function remains at least as important as the numeric change.",
          },
        ]}
      />

      <RelatedTools
        slugs={["adhd-assessment-tool", "pediatric-headache-assessment-tool", "qrisk3-estimator"]}
      />

      <References
        items={[
          {
            text: "Johns MW. A new method for measuring daytime sleepiness: the Epworth sleepiness scale. Sleep. 1991;14(6):540-545.",
          },
          {
            text: "National Institute for Health and Care Excellence. Obstructive sleep apnoea/hypopnoea syndrome and obesity hypoventilation syndrome in over 16s (NG202). Published 20 August 2021.",
            href: "https://www.nice.org.uk/guidance/ng202",
          },
          {
            text: "Driver and Vehicle Licensing Agency. Excessive sleepiness and driving — obstructive sleep apnoea syndrome: assessing fitness to drive.",
            href: "https://www.gov.uk/guidance/excessive-sleepiness-and-driving",
          },
          {
            text: "Chung F, Yegneswaran B, Liao P, et al. STOP questionnaire: a tool to screen patients for obstructive sleep apnea. Anesthesiology. 2008;108(5):812-821.",
          },
          {
            text: "Johns MW. Sensitivity and specificity of the multiple sleep latency test (MSLT), the maintenance of wakefulness test and the Epworth sleepiness scale. Sleep. 2000;23(6):823-830.",
          },
        ]}
      />
    </>
  );
}
