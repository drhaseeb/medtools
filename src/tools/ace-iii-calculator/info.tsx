import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function AceIiiInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is the ACE-III?</h2>
        <p>
          The Addenbrooke's Cognitive Examination III (ACE-III) is a
          100-point, clinician-administered cognitive screening instrument
          used to detect cognitive impairment and to help distinguish
          between different causes of dementia. Unlike shorter screens that
          produce a single overall number, the ACE-III deliberately breaks
          its score down into five separate cognitive domains — attention,
          memory, verbal fluency, language, and visuospatial function —
          because the <em>pattern</em> across those domains often carries
          more diagnostic information than the total score alone.
        </p>
        <p>
          It takes roughly 15–20 minutes to administer at the bedside or in
          clinic and requires no special equipment beyond pen, paper, and a
          simple set of line-drawn pictures and word cards, which is part
          of why it has become one of the most widely used cognitive
          screens in memory clinics and neurology services internationally.
        </p>

        <h2>History and Development</h2>
        <p>
          The ACE-III is the third generation of a lineage that began with
          the original Addenbrooke's Cognitive Examination (ACE),
          developed at Addenbrooke's Hospital in Cambridge and published by
          Mathuranath and colleagues in 2000 as an extension of the
          Mini-Mental State Examination (MMSE) with added tests of
          executive function and visuospatial ability. It was revised into
          the ACE-Revised (ACE-R) by Mioshi and colleagues in 2006, and
          then further refined into the ACE-III by Hsieh and colleagues in
          2013 — principally to remove several MMSE-derived items whose
          copyright had become restricted, and to improve the tool's
          ability to discriminate between Alzheimer's disease and
          frontotemporal dementia, two conditions that can look similar on
          a simple global cognitive score but that damage different
          networks in the brain.
        </p>

        <h2>The Five Domains and What They Measure</h2>
        <p>
          Each domain targets a different, reasonably well-localized
          cognitive system, which is what makes the domain breakdown
          clinically useful rather than just an administrative detail.
        </p>
        <ul>
          <li>
            <strong>Attention (18 points):</strong> orientation to time and
            place, registration of three words, and serial subtraction
            (100 minus 7, five times). This domain is sensitive to
            delirium, vascular cognitive impairment, and generalized
            attentional/frontal-subcortical dysfunction rather than being
            specific to any one dementia subtype.
          </li>
          <li>
            <strong>Memory (26 points):</strong> immediate and delayed
            recall of a name and address learned over three trials
            (anterograde episodic memory), recall of the three registered
            words, and retrograde semantic memory (general knowledge
            questions about public figures). Disproportionately poor
            <em> delayed recall</em> relative to registration is the
            classic early signature of Alzheimer's disease.
          </li>
          <li>
            <strong>Verbal Fluency (14 points):</strong> letter fluency
            (words beginning with "P" in 60 seconds) and category fluency
            (animals in 60 seconds), each converted to a 0–7 scaled score.
            Letter fluency depends more heavily on frontal-lobe strategic
            search, while category fluency depends more on temporal-lobe
            semantic store — a useful contrast when frontotemporal
            dementia is suspected.
          </li>
          <li>
            <strong>Language (26 points):</strong> comprehension of a
            three-step written command, writing two sentences, repetition
            of increasingly complex words and phrases, naming of
            line-drawn objects, reading of irregularly spelled words, and
            comprehension linking those named objects back to general
            knowledge. This is the largest domain and the one most
            sensitive to primary progressive aphasia syndromes.
          </li>
          <li>
            <strong>Visuospatial Function (16 points):</strong> copying
            overlapping infinity loops and a three-dimensional wire cube,
            drawing a clock face set to a specified time, counting dots
            arranged in irregular clusters, and identifying visually
            fragmented/noisy letters. Deficits here point toward parietal
            or posterior-cortical involvement, as seen early in some
            Alzheimer's presentations and characteristically in posterior
            cortical atrophy and dementia with Lewy bodies.
          </li>
        </ul>

        <h2>How to Administer the Test Correctly</h2>
        <p>
          A few administration details materially affect scoring accuracy
          and are easy to get wrong under time pressure. For registration,
          only the <em>first</em> trial of "lemon, key, ball" is scored,
          even though you should keep repeating the three words until the
          patient has learned them, since you'll need that learning to
          support later recall. For verbal fluency, exclude proper nouns
          (a patient saying "Paris" for a P-word does not count) and do
          not give credit twice for the same word stem with different
          endings (e.g. "pay" and "paying" count once). If a patient
          cannot write due to a physical disability such as hemiparesis,
          note this explicitly and interpret the writing sub-score with
          that limitation in mind rather than scoring it as a cognitive
          failure. Always ensure the patient is wearing their usual
          glasses and hearing aids before starting — uncorrected sensory
          impairment is one of the most common causes of a falsely low
          score that has nothing to do with cognition.
        </p>

        <h2>Scoring and Interpretation</h2>
        <p>
          The maximum total score is 100, and interpretation should always
          be adjusted for the individual's age, educational background, and
          estimated premorbid ability — a highly educated professional
          scoring 85 warrants more concern than a score of 85 in someone
          with limited formal education. With that caveat, the validation
          study by Hsieh and colleagues (2013) reported that a cutoff of{" "}
          <strong>88</strong> gave a sensitivity of 1.00 and specificity of
          0.96 for detecting dementia, while a stricter cutoff of{" "}
          <strong>82</strong> gave a sensitivity of 0.93 with specificity
          of 1.00 — in other words, 88 is the more sensitive screening
          threshold (fewer missed cases, more false alarms) and 82 is the
          more specific confirmatory threshold (fewer false alarms, more
          missed early cases). This tool reports scores of 88 and above as
          the normal range, 82–87 as inconclusive/borderline warranting
          follow-up, and below 82 as a range where impairment is likely.
        </p>

        <h2>Distinguishing Alzheimer's Disease from Frontotemporal Dementia</h2>
        <p>
          One of the ACE-III's most valued clinical uses is helping to
          differentiate Alzheimer's disease (AD) from the behavioural and
          language variants of frontotemporal dementia (FTD) — two
          conditions that need very different counselling, prognosis
          discussions, and sometimes different drug considerations, but
          which a single global score cannot reliably tell apart. In
          typical amnestic AD, memory — particularly delayed recall — is
          disproportionately affected relative to fluency and language
          early in the disease course. In behavioural-variant FTD,
          verbal fluency (especially letter/phonemic fluency, reflecting
          frontal executive dysfunction) and personality/behavioural
          change are often disproportionately affected while episodic
          memory and visuospatial function are relatively preserved,
          especially early on. Language-led presentations of FTD (the
          semantic and non-fluent variants of primary progressive
          aphasia) instead show disproportionate language-domain deficits
          — semantic variant patients lose word meaning and naming ability
          while remaining fluent, whereas non-fluent variant patients show
          effortful, grammatically simplified speech. Some groups compare
          a combined "VLAD" ratio — Verbal fluency plus LAnguage, versus
          memory plus visuospatial Domains — as a research heuristic for
          this FTD-versus-AD distinction, though the ACE-III total score
          and individual domain pattern remain the primary clinical
          reference points, not the VLAD ratio itself.
        </p>

        <h2>Comparison to Other Cognitive Screens</h2>
        <p>
          The ACE-III sits between very brief screens and full
          neuropsychological batteries. Compared with the widely known
          Mini-Mental State Examination (MMSE), the ACE-III takes longer
          but is considerably more sensitive to mild and early-stage
          impairment and to non-Alzheimer's dementias, because it tests
          executive function and visuospatial ability far more thoroughly
          than the MMSE's very limited coverage of those domains. A
          shortened version, the Mini-ACE (M-ACE, roughly 5 minutes, scored
          out of 30), sacrifices some domain granularity for speed and is
          useful when a very quick screen is all that time allows, but it
          cannot support the same fine-grained domain analysis as the full
          ACE-III. Compared with the Montreal Cognitive Assessment (MoCA),
          another widely used ~10-minute screen, the ACE-III generally
          offers finer domain separation (five scored domains rather than
          a single total plus a few sub-scores) at the cost of a
          meaningfully longer administration time.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>Education and language effects:</strong> like nearly
            all cognitive screens, scores are influenced by educational
            attainment, native-language fluency, and cultural familiarity
            with the specific general-knowledge and naming items used —
            interpret cautiously in patients tested outside their first
            language or with limited formal schooling.
          </li>
          <li>
            <strong>Not diagnostic in isolation:</strong> the ACE-III
            screens for the presence and pattern of cognitive impairment;
            it does not by itself diagnose a specific dementia subtype,
            which requires correlating the domain pattern with history,
            collateral information from family, physical and neurological
            examination, and, where indicated, blood tests and structural
            or functional neuroimaging.
          </li>
          <li>
            <strong>Sensory and motor confounds:</strong> uncorrected
            vision or hearing loss, depression, delirium, sedating
            medication, and physical disabilities affecting speech or
            writing can all lower scores independent of true cognitive
            decline.
          </li>
          <li>
            <strong>Digital adaptation:</strong> this calculator reproduces
            the scoring structure of the ACE-III and includes visual
            stimuli for every item that needs one — original line-art for
            the interlocking pentagons, wire cube, dot-count panels, and
            fragmented letters, and licensed stock images for the 12 named
            objects, chosen for clear, unambiguous identification — plus an
            on-page, full-screen display of the reading-task word list,
            on-page timers for the two 60-second fluency tasks, and
            "How to administer" guidance pop-ups on the items most prone to
            inconsistent administration. None of this reproduces the
            published ACE-III stimulus booklet itself, which remains the
            original authors' artwork.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Is a low ACE-III score the same as a dementia diagnosis?",
            a: "No. A low score indicates cognitive impairment is likely and warrants further assessment, but a formal dementia diagnosis requires a full clinical work-up — history, collateral history, examination, and often bloods and imaging — to identify the underlying cause and exclude reversible contributors such as depression, delirium, or medication effects.",
          },
          {
            q: "How is the ACE-III different from the ACE-R?",
            a: "The ACE-III removed several items derived from the MMSE due to copyright restrictions on that instrument, and refined the visuospatial and language items to better separate Alzheimer's disease from frontotemporal dementia — validation work found it performs at least as well as the ACE-R for this purpose.",
          },
          {
            q: "Can the ACE-III be repeated to track change over time?",
            a: "Yes, and this is one of its common uses in memory clinics — serial administration (e.g. annually) can help track the trajectory of cognitive change, though practice effects on the exact same wordlist and pictures should be considered when interpreting a small improvement on repeat testing shortly after a prior assessment.",
          },
          {
            q: "What if the patient can't complete the writing task due to a physical problem, not a cognitive one?",
            a: "Document the physical limitation explicitly and interpret the total score with that caveat rather than treating a missed writing point as evidence of cognitive impairment — several ACE-III guidance documents recommend pro-rating or annotating the score in this situation rather than penalizing it at face value.",
          },
        ]}
      />

      <RelatedTools slugs={["mmse-calculator", "amts-calculator", "gcs-calculator"]} />

      <References
        items={[
          {
            text: "Hsieh S, Schubert S, Hoon C, Mioshi E, Hodges JR. Validation of the Addenbrooke's Cognitive Examination III in frontotemporal dementia and Alzheimer's disease. Dement Geriatr Cogn Disord. 2013;36(3-4):242-250.",
          },
          {
            text: "Mioshi E, Dawson K, Mitchell J, Arnold R, Hodges JR. The Addenbrooke's Cognitive Examination Revised (ACE-R): a brief cognitive test battery for dementia screening. Int J Geriatr Psychiatry. 2006;21(11):1078-1085.",
          },
          {
            text: "Mathuranath PS, Nestor PJ, Berrios GE, Rakowicz W, Hodges JR. A brief cognitive test battery to differentiate Alzheimer's disease and frontotemporal dementia. Neurology. 2000;55(11):1613-1620.",
          },
        ]}
      />
    </>
  );
}
