import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function AmtsInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the Abbreviated Mental Test Score?</h2>
        <p>
          The Abbreviated Mental Test Score (AMTS) is one of the most widely
          used bedside cognitive screening instruments in clinical
          medicine, particularly across the UK's NHS. First described by
          Hodkinson in 1972, this 10-item questionnaire has endured more
          than five decades as a practical, rapid, validated tool for
          identifying cognitive impairment in hospitalised patients. It
          takes two to three minutes to administer, requires no special
          equipment, and gives a standardised framework for assessing
          orientation, memory, and general cognitive function at the point
          of care.
        </p>

        <h2>Historical Background and Development</h2>
        <p>
          The AMTS was derived by Hodkinson in 1972 by selecting the ten
          items from the longer Blessed Dementia Scale with the greatest
          discriminative power between patients with and without cognitive
          impairment. It was validated in geriatric inpatient populations
          and has since proven reliable across emergency departments, acute
          medical wards, primary care, and care homes. Its brevity and lack
          of any specialist training requirement explain its enduring
          adoption not just across the NHS but internationally.
        </p>

        <h2>The Ten Questions and How to Score Them</h2>
        <p>
          Each of the ten items scores one point for a correct answer, for
          a maximum total of 10:
        </p>
        <ol>
          <li><strong>Age</strong> — the patient must state their exact age; rounding is not accepted.</li>
          <li><strong>Time to the nearest hour</strong> — with no clock or watch visible to the patient.</li>
          <li><strong>Address for recall</strong> — a specific address (e.g. "42 West Street") is given at the start and recalled at the very end; this is the only item spanning the whole test.</li>
          <li><strong>Year</strong> — the correct calendar year.</li>
          <li><strong>Name of institution</strong> — the specific hospital/clinic name, or at minimum the type of place.</li>
          <li><strong>Recognition of two people</strong> — identifying two people present by their role (e.g. nurse, doctor); knowing their actual name is not required.</li>
          <li><strong>Date of birth</strong> — day and month; the year is not required.</li>
          <li><strong>Year World War I or II began</strong> — 1914 or 1939, testing remote/historical memory.</li>
          <li><strong>Name of the current head of state or monarch</strong> — appropriate to the patient's own country/context.</li>
          <li><strong>Count backwards from 20 to 1</strong> — without error or prompting (a single self-corrected slip may be permitted at the examiner's discretion).</li>
        </ol>

        <h2>Standardised Administration</h2>
        <p>
          Consistency of administration is essential to the score's
          validity:
        </p>
        <ul>
          <li>Test in a quiet, well-lit environment with minimal distraction.</li>
          <li>Ensure the patient's glasses and hearing aid are in place if used.</li>
          <li>Speak clearly, at an unhurried pace, and do not prompt or hint at any answer.</li>
          <li>Give the address for item 3 verbally, have the patient repeat it back once to confirm registration, then move on — recall is only tested at the very end.</li>
          <li>Document the individual item responses, not just the total — the specific pattern of errors can itself be clinically informative.</li>
          <li>Record the assessment context (time of day, pain, sedation, any language barrier), since all of these can independently affect performance.</li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          An 82-year-old woman admitted with a urinary tract infection
          correctly states her age, the year, and her date of birth, but
          cannot recall the given address, doesn't know the name of the
          hospital, and miscounts backwards from 20. She scores 6 out of
          10. Per this tool's thresholds, that falls in the 4–6
          mild-to-moderate impairment band — the correct next step is not
          to assume dementia, but to actively screen for a reversible acute
          cause (in this case, her known UTI is a leading suspect), apply a
          formal delirium screen such as the 4AT, and reassess once the
          acute illness has been treated.
        </p>

        <h2>Interpreting the Score</h2>
        <ul>
          <li><strong>8–10:</strong> normal range. If clinical concern still exists (e.g. a worried family member, fluctuating performance), consider formal assessment with the MMSE or MoCA.</li>
          <li><strong>7:</strong> borderline — repeat under optimal conditions and exclude delirium-precipitating factors before concluding impairment is present.</li>
          <li><strong>4–6:</strong> mild-to-moderate impairment — investigate reversible causes, document a baseline, and refer on if the picture is subacute or chronic.</li>
          <li><strong>0–3:</strong> significant impairment — urgent delirium screen (4AT) and systematic investigation of reversible causes.</li>
        </ul>
        <p>
          A low score never diagnoses dementia by itself. Many acutely
          reversible conditions can depress AMTS performance: urinary tract
          infection, hyponatraemia, hypoxia, hypoglycaemia, alcohol
          withdrawal, opioid toxicity, constipation, urinary retention,
          uncontrolled pain, and sleep deprivation.
        </p>

        <h2>AMTS vs. Delirium Screening — the 4AT Tool</h2>
        <p>
          Distinguishing delirium from chronic cognitive impairment is
          essential — delirium is acute in onset, fluctuates through the
          day, involves inattention and altered consciousness, and is a
          medical emergency associated with significantly increased
          mortality and prolonged hospital stay. AMTS alone cannot reliably
          separate delirium from dementia. NICE guideline CG103 ("Delirium:
          prevention, diagnosis and management in hospital and long-term
          care," most recently updated in 2023) recommends the 4AT tool
          (Alertness, AMT4, Attention, Acute change or fluctuating course)
          as the primary rapid delirium screen in these settings. The AMT4
          — a 4-item abbreviated version asking only age, date of birth,
          place, and year — is embedded directly within the 4AT. Any
          patient with a low AMTS score should have a formal 4AT assessment
          to actively look for delirium before any diagnosis of chronic
          impairment is assumed.
        </p>

        <h2>Finding Reversible Causes — the PINCH ME Approach</h2>
        <p>
          When a patient scores below 8, a systematic search for reversible
          contributors is essential — commonly organized under the PINCH ME
          mnemonic: <strong>P</strong>ain, <strong>I</strong>nfection
          (especially urinary, respiratory, or bloodstream), <strong>N</strong>utrition
          and hydration, <strong>C</strong>onstipation, <strong>H</strong>ydration
          (dehydration specifically), <strong>M</strong>edication (opioids,
          anticholinergics, benzodiazepines, and other sedating drugs), and{" "}
          <strong>E</strong>nvironment (unfamiliar surroundings, noise,
          poor lighting, sleep disruption). Standard baseline
          investigations typically include full blood count, urea and
          electrolytes, liver and thyroid function, calcium, glucose, blood
          cultures, urinalysis, and a chest X-ray, with CT head reserved
          for focal neurology, head trauma, or suspected intracranial
          pathology.
        </p>

        <h2>AMTS Within the Broader Dementia Pathway</h2>
        <p>
          NICE guideline NG97 ("Dementia: assessment, management and
          support for people living with dementia and their carers")
          recommends cognitive testing as one part of a structured dementia
          work-up that also includes collateral/informant history, physical
          examination, and investigations. AMTS is not the preferred tool
          for a formal dementia diagnosis — the MMSE or MoCA offer more
          domain detail for that purpose — but it remains well suited to
          rapid ward-based screening and to tracking cognitive status over
          serial admissions. A positive screen should prompt a structured
          dementia work-up if the picture is subacute/chronic, or an
          urgent delirium work-up if the onset is acute.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Cultural and educational bias:</strong> questions about
            World War dates and the head of state can disadvantage patients
            from different cultural backgrounds or with limited formal
            education — interpret the score with this in mind.
          </li>
          <li>
            <strong>Sensory impairment:</strong> uncorrected vision or
            hearing loss can independently lower the score.
          </li>
          <li>
            <strong>Language barriers:</strong> non-native speakers require
            a validated translated version or a professional interpreter.
          </li>
          <li>
            <strong>Limited sensitivity for mild impairment:</strong> AMTS
            can appear entirely normal in genuine mild cognitive impairment;
            the MoCA is considerably more sensitive at that end of the
            spectrum.
          </li>
          <li>
            <strong>No domain breakdown:</strong> unlike the MMSE, MoCA, or
            ACE-III, AMTS gives a single total with no separate insight
            into specific domains like executive function or visuospatial
            ability.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "What AMTS score requires urgent medical review?",
            a: "Any score below 8 without a known baseline impairment warrants further assessment. A score of 4 or below with acute onset is an urgent trigger for a formal delirium work-up (4AT) and systematic medical investigation for a reversible cause.",
          },
          {
            q: "Can AMTS diagnose dementia?",
            a: "No — it is a screening tool only. A formal dementia diagnosis requires a comprehensive assessment including cognitive testing (typically MMSE or MoCA), collateral/informant history, physical examination, and investigations, usually via a memory clinic or old-age psychiatry service.",
          },
          {
            q: "How often should AMTS be repeated during a hospital stay?",
            a: "In patients with known or suspected cognitive impairment, AMTS is typically assessed on admission and repeated whenever there is clinical concern about a change in mental state — many hospitals recommend routine daily screening in at-risk inpatients (age over 65, known cognitive impairment, or severe acute illness).",
          },
          {
            q: "Is AMTS validated for younger adults?",
            a: "AMTS was developed and validated in elderly inpatient populations and is most reliable in adults over 65. For younger adults with suspected cognitive impairment, the MoCA or another age-appropriate tool is generally preferred.",
          },
        ]}
      />

      <RelatedTools slugs={["mmse-calculator", "ace-iii-calculator", "gcs-calculator"]} />

      <References
        items={[
          {
            text: "Hodkinson HM. Evaluation of a mental test score for assessment of mental impairment in the elderly. Age Ageing. 1972;1(4):233-238.",
          },
          {
            text: "National Institute for Health and Care Excellence. Delirium: prevention, diagnosis and management in hospital and long-term care (CG103), updated 2023.",
            href: "https://www.nice.org.uk/guidance/cg103",
          },
          {
            text: "National Institute for Health and Care Excellence. Dementia: assessment, management and support for people living with dementia and their carers (NG97), 2018.",
            href: "https://www.nice.org.uk/guidance/ng97",
          },
        ]}
      />
    </>
  );
}
