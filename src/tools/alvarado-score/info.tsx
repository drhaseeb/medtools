import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function AlvaradoScoreInfo() {
  return (
    <>
      <ReviewedBadge updated="August 2026" />

      <div className="prose max-w-none">
        <h2>What Is the Alvarado Score?</h2>
        <p>
          The Alvarado score — also known by its mnemonic acronym MANTRELS —
          is a ten-point clinical scoring system used to estimate the
          probability of acute appendicitis in a patient presenting with
          right iliac fossa or periumbilical pain. It combines three
          symptoms, three signs, and two laboratory findings into a single
          number that helps triage patients toward discharge, observation,
          imaging, or surgical referral, without requiring anything beyond a
          history, an examination, and a basic full blood count.
        </p>
        <p>
          Appendicitis remains one of the most common surgical emergencies,
          but it is also notoriously variable in presentation — the classic
          story of periumbilical pain migrating to the right iliac fossa,
          with anorexia and low-grade fever, is present in only a subset of
          confirmed cases. Before routine cross-sectional imaging was widely
          available, surgeons had to decide whether to operate based on
          clinical judgement alone, which produced a well-documented
          trade-off: operate too readily and a meaningful proportion of
          appendices removed are histologically normal; wait too long for
          more certainty and some patients progress to perforation. The
          Alvarado score was built to structure that judgement rather than
          replace it.
        </p>

        <h2>History and Development</h2>
        <p>
          Alfredo Alvarado published the score in 1986 in the{" "}
          <em>Annals of Emergency Medicine</em>, under the title "A practical
          score for the early diagnosis of acute appendicitis." The
          derivation was based on a retrospective review of 305 patient
          charts (277 ultimately analysable) from Nazareth Hospital in
          Philadelphia, covering patients aged 4 to 80 admitted with
          suspected appendicitis between 1975 and 1976. The large majority
          underwent surgery, and the great majority of those had appendicitis
          confirmed on pathology — giving Alvarado a substantial cohort of
          both true-positive and false-positive presentations from which to
          identify which individual symptoms, signs, and lab findings best
          separated the two groups.
        </p>
        <p>
          The name MANTRELS is a mnemonic for the eight components:{" "}
          <strong>M</strong>igration, <strong>A</strong>norexia,{" "}
          <strong>N</strong>ausea/vomiting, <strong>T</strong>enderness in
          the right iliac fossa, <strong>R</strong>ebound tenderness,{" "}
          <strong>E</strong>levated temperature, <strong>L</strong>eukocytosis,
          and <strong>S</strong>hift of white cells to the left. Alvarado
          deliberately weighted the two findings his data showed to be most
          discriminating — right iliac fossa tenderness and leukocytosis —
          at two points each, with the remaining six findings worth one
          point each, for a total of ten.
        </p>

        <h2>The Eight MANTRELS Components</h2>
        <ul>
          <li>
            <strong>Migration of pain (1 point).</strong> Pain that begins
            centrally or periumbilically and migrates to the right iliac
            fossa — reflecting the classic progression from visceral
            (referred, poorly localised) pain to somatic (localised,
            peritoneal) pain as inflammation reaches the parietal peritoneum.
          </li>
          <li>
            <strong>Anorexia (1 point).</strong> Loss of appetite, often
            including a specific history of the patient not wanting to eat.
          </li>
          <li>
            <strong>Nausea or vomiting (1 point).</strong>
          </li>
          <li>
            <strong>Tenderness in the right iliac fossa (2 points).</strong>{" "}
            The single most heavily weighted finding, reflecting its central
            role in the clinical diagnosis.
          </li>
          <li>
            <strong>Rebound tenderness (1 point).</strong> Pain on release of
            palpation, suggesting peritoneal irritation.
          </li>
          <li>
            <strong>Elevated temperature, &gt;37.3°C / 99.1°F (1
            point).</strong> A relatively low threshold, capturing even a
            low-grade fever.
          </li>
          <li>
            <strong>Leukocytosis, white cell count &gt;10,000/mm³ (2
            points).</strong> The second most heavily weighted finding.
          </li>
          <li>
            <strong>Shift to the left — neutrophils &gt;75% (1
            point).</strong> Reflects an acute neutrophil-predominant
            inflammatory response even when the total white cell count is
            only mildly raised.
          </li>
        </ul>

        <h2>Worked Example</h2>
        <p>
          A 24-year-old man presents with 18 hours of pain that started
          around the umbilicus and has now settled in the right iliac fossa.
          He has not wanted to eat and vomited once. On examination he has
          tenderness and rebound tenderness in the right iliac fossa, with a
          temperature of 37.6°C. His white cell count is 13,200/mm³ with 80%
          neutrophils.
        </p>
        <p>
          Migration (+1), anorexia (+1), nausea/vomiting (+1), RIF tenderness
          (+2), rebound (+1), fever (+1), leukocytosis (+2), left shift (+1).
          His total is <strong>10/10</strong> — very probable appendicitis,
          warranting surgical referral for appendectomy per local protocol.
        </p>

        <h2>Interpreting the Score</h2>
        <p>
          The score is traditionally interpreted in four bands, as originally
          proposed by Alvarado:
        </p>
        <ul>
          <li>
            <strong>1–4 — Appendicitis unlikely.</strong> Consider
            alternative diagnoses; discharge with safety-netting or observe
            if uncertainty remains.
          </li>
          <li>
            <strong>5–6 — Appendicitis possible.</strong> Active observation,
            serial examination, repeat bloods, and a low threshold for
            imaging.
          </li>
          <li>
            <strong>7–8 — Appendicitis probable.</strong> Surgical
            consultation, generally with confirmatory imaging first where
            available.
          </li>
          <li>
            <strong>9–10 — Appendicitis very probable.</strong> Surgical
            consultation for appendectomy.
          </li>
        </ul>
        <p>
          A widely-cited 2011 systematic review and meta-analysis by Ohle and
          colleagues, pooling 42 studies, found that a score below 5 carried
          approximately 99% sensitivity for excluding appendicitis —
          supporting its use as a rule-out test at the low end — while a
          score of 7 or above achieved roughly 81% specificity as a rule-in
          threshold, with meaningful variation by sex and age (see
          Limitations below). The 2020 World Society of Emergency Surgery
          (WSES) Jerusalem guidelines cite comparable figures and explicitly
          recommend using the score's strong rule-out performance at the low
          end more confidently than its rule-in performance at the high end.
        </p>

        <h2>Limitations and Special Populations</h2>
        <ul>
          <li>
            <strong>Lower specificity in women of reproductive age.</strong>{" "}
            Gynaecological conditions — ovarian cysts, pelvic inflammatory
            disease, ectopic pregnancy, mittelschmerz — can mimic
            appendicitis closely enough to produce a false-positive Alvarado
            score. The WSES 2020 guidelines recommend a higher threshold
            (score ≥9, rather than ≥7) before treating the score alone as
            strongly rule-in for women, and a pregnancy test plus pelvic
            imaging should be considered in this group before proceeding to
            surgery on clinical grounds alone.
          </li>
          <li>
            <strong>Children.</strong> The score performs well as a rule-out
            test in children (sensitivity around 99% below the low
            threshold in pooled data), but a dedicated paediatric tool — the
            Pediatric Appendicitis Score (Samuel, 2002), which adds a
            right-lower-quadrant cough/percussion/hopping tenderness item and
            drops the WBC differential — is more commonly used and validated
            specifically for children aged 4 to 15.
          </li>
          <li>
            <strong>Elderly and immunocompromised patients.</strong> The
            score cannot reliably distinguish complicated (perforated,
            abscessed) from uncomplicated appendicitis in older patients, and
            performs less reliably in HIV-positive and other
            immunocompromised patients, who may mount a blunted inflammatory
            response despite significant pathology. A low score in these
            groups should be interpreted cautiously rather than as firm
            reassurance.
          </li>
          <li>
            <strong>A modified, 9-point version exists.</strong> The Modified
            Alvarado Score (Kalan et al.) removes the white-cell
            left-shift item, producing a 9-point scale used in some centres,
            particularly where a differential count is not readily
            available.
          </li>
        </ul>

        <h2>Role Alongside Imaging</h2>
        <p>
          The Alvarado score was developed before cross-sectional imaging was
          routine, and modern practice generally uses it to decide{" "}
          <em>who needs imaging and how urgently</em>, rather than as a
          stand-alone substitute for ultrasound, CT, or MRI. A very low score
          in a well-looking patient may reasonably avoid imaging altogether;
          an equivocal score typically triggers ultrasound (particularly in
          children, women of reproductive age, and pregnancy, to avoid
          ionising radiation) or CT; and a very high score in a patient with
          a classic history and clear peritonism may proceed directly to
          surgical consultation with imaging reserved for atypical features.
          The exact threshold for imaging vs proceeding directly to surgery
          varies by local protocol, patient age, sex, and resource
          availability.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Does a low Alvarado score completely rule out appendicitis?",
            a: "Not completely, but a score below 5 has been shown in a large meta-analysis to carry approximately 99% sensitivity for ruling out appendicitis, making it a reasonably reliable — though not absolute — rule-out threshold. Reassess if symptoms progress.",
          },
          {
            q: "Should the same score threshold be used for men and women?",
            a: "No. Because gynaecological conditions can mimic appendicitis, the 2020 WSES guidelines recommend a higher threshold (≥9 rather than ≥7) before treating a high score as strongly rule-in for women of reproductive age, alongside a pregnancy test and consideration of pelvic imaging.",
          },
          {
            q: "Is the Alvarado score the best tool for diagnosing appendicitis in children?",
            a: "It performs well as a rule-out tool in children, but the dedicated Pediatric Appendicitis Score is more commonly used and validated specifically for the paediatric population.",
          },
          {
            q: "Does a high Alvarado score mean a patient should go straight to surgery without imaging?",
            a: "Not necessarily — this depends on local protocol, patient age and sex, and imaging availability. Many centres still confirm with ultrasound or CT even at a high score, particularly outside a classic presentation, since the score's rule-in specificity is lower than its rule-out sensitivity.",
          },
        ]}
      />

      <RelatedTools slugs={["sirs-calculator", "curb65-calculator", "blatchford-score"]} />

      <References
        items={[
          {
            text: "Alvarado A. A practical score for the early diagnosis of acute appendicitis. Ann Emerg Med. 1986;15(5):557-564.",
          },
          {
            text: "Ohle R, O'Reilly F, O'Brien KK, Fahey T, Dimitrov BD. The Alvarado score for predicting acute appendicitis: a systematic review. BMC Med. 2011;9:139.",
            href: "https://doi.org/10.1186/1741-7015-9-139",
          },
          {
            text: "Di Saverio S, Podda M, De Simone B, et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. World J Emerg Surg. 2020;15:27.",
          },
          {
            text: "Samuel M. Pediatric appendicitis score. J Pediatr Surg. 2002;37(6):877-881.",
          },
        ]}
      />
    </>
  );
}
