import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function SirsInfo() {
  return (
    <>
      <ReviewedBadge updated="July 2026" />

      <div className="prose max-w-none">
        <h2>What Is Systemic Inflammatory Response Syndrome (SIRS)?</h2>
        <p>
          Systemic Inflammatory Response Syndrome (SIRS) describes the body's
          exaggerated, systemic defense response to a severe insult —
          infection, trauma, burns, surgery, pancreatitis, or
          ischaemia-reperfusion injury. It is not a diagnosis or a disease in
          itself; it is a clinical pattern, recognizable at the bedside from
          four simple physiological measurements, that flags a patient whose
          body is mounting a large-scale inflammatory response and who
          therefore needs closer attention regardless of the eventual cause.
        </p>
        <p>
          For decades, SIRS was the clinical gateway to a diagnosis of
          sepsis: a patient with a suspected or confirmed infection who also
          met SIRS criteria was, by definition, septic. That specific
          diagnostic role has since been superseded (see below), but the
          criteria themselves remain one of the fastest, simplest early
          warning tools in acute medicine.
        </p>

        <h2>History and the 1992 Consensus Definition</h2>
        <p>
          SIRS was formally defined by the American College of Chest
          Physicians and the Society of Critical Care Medicine (ACCP/SCCM)
          Consensus Conference in 1992, published by Bone and colleagues in{" "}
          <em>Chest</em>. The consensus panel was responding to a practical
          problem: critically ill patients with an overwhelming inflammatory
          response were being described with inconsistent, subjective
          terminology across different hospitals and studies, making it
          impossible to compare outcomes or design consistent trials. The
          panel proposed four objective, easily measured criteria, and
          defined SIRS as the presence of two or more of them — a
          deliberately low bar, chosen to maximize sensitivity as an early
          screening trigger rather than a specific diagnostic test.
        </p>

        <h2>The Four Criteria</h2>
        <p>
          A patient meets a SIRS criterion, and scores one point, for each of
          the following that is present:
        </p>
        <ul>
          <li>
            <strong>Temperature</strong> greater than 38.0°C or less than
            36.0°C — reflecting either a pyrogenic cytokine-driven reset of
            the hypothalamic set-point (fever) or a failure of thermoregulation
            under severe physiological stress (hypothermia, which often
            carries a worse prognosis than fever in sepsis).
          </li>
          <li>
            <strong>Heart rate</strong> greater than 90 beats per minute —
            a compensatory response to vasodilation, hypovolaemia, or
            increased metabolic demand, driven by increased sympathetic tone.
          </li>
          <li>
            <strong>Respiratory rate</strong> greater than 20 breaths per
            minute, <em>or</em> arterial PaCO₂ less than 32 mmHg in a patient
            not breathing spontaneously — increased respiratory drive is
            frequently an early compensatory response to metabolic acidosis
            or evolving hypoxia, often preceding overt desaturation.
          </li>
          <li>
            <strong>White blood cell count</strong> greater than 12,000
            cells/mm³ or less than 4,000 cells/mm³, <em>or</em> more than 10%
            immature neutrophil forms ("bands") on a differential — reflecting
            either vigorous bone-marrow mobilization of the immune system or,
            in the case of leukopenia, bone-marrow suppression or overwhelming
            consumption, itself a marker of a more severe physiological insult.
          </li>
        </ul>
        <p>
          Meeting two or more of these four criteria constitutes SIRS. This
          calculator reproduces that binary threshold exactly as defined in
          1992: score of 2 or more is SIRS-positive.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 68-year-old man presents from a nursing home with reduced oral
          intake and new confusion. His temperature is 38.6°C (+1), heart
          rate 104 bpm (+1), respiratory rate 24/min (+1), and his white cell
          count returns at 15,200/mm³ (+1). His total score is{" "}
          <strong>4 out of 4</strong> — unambiguously SIRS-positive, and with
          all four domains abnormal simultaneously, this should prompt an
          urgent search for a source of infection (urinary, respiratory,
          intra-abdominal, skin/soft tissue) alongside a formal sepsis
          screen — blood cultures, lactate, and early antibiotics if
          infection is likely — rather than treating any single abnormal
          vital sign in isolation.
        </p>

        <h2>SIRS, Sepsis, and Why the Definition Changed</h2>
        <p>
          Under the older Sepsis-1/Sepsis-2 framework, sepsis was simply
          defined as SIRS plus a suspected or confirmed source of infection,
          and "severe sepsis" was sepsis plus evidence of organ dysfunction.
          This was straightforward to apply but had a well-documented
          weakness: SIRS criteria are highly <em>sensitive</em> but poorly{" "}
          <em>specific</em>. Large cohort studies found that a substantial
          proportion of general ward and even healthy post-operative patients
          meet 2 or more SIRS criteria without any life-threatening illness —
          post-operative patients routinely run a mild fever and tachycardia
          purely from surgical trauma, and patients in pain or anxious in an
          emergency department waiting room are frequently tachycardic and
          tachypnoeic for reasons entirely unrelated to infection.
        </p>
        <p>
          In 2016, the Third International Consensus Definitions for Sepsis
          and Septic Shock (Sepsis-3), published by Singer and colleagues in{" "}
          <em>JAMA</em>, redefined sepsis as life-threatening organ
          dysfunction caused by a dysregulated host response to infection,
          operationalized using a rise of 2 or more points in the Sequential
          Organ Failure Assessment (SOFA) score, with quickSOFA (qSOFA — altered
          mentation, respiratory rate ≥22/min, systolic blood pressure ≤100
          mmHg) proposed as a rapid bedside prompt outside the ICU. SIRS
          criteria were deliberately dropped from the formal sepsis
          definition specifically because of their poor specificity.
        </p>

        <h2>Why SIRS Still Matters in Practice</h2>
        <p>
          Despite losing its role in the formal sepsis definition, SIRS has
          not disappeared from clinical practice, and for good reason. Its
          very sensitivity — the property that made it a poor
          <em> diagnostic</em> criterion — makes it an excellent{" "}
          <em>screening</em> trigger. Many early-warning and sepsis-screening
          protocols in emergency departments and on general wards still use
          SIRS-style vital sign triggers precisely because they flag
          potentially unwell patients earlier and more sensitively than
          waiting for organ dysfunction to become apparent on a SOFA score,
          which by definition only rises once damage is already underway.
          In practice, many institutions use a two-step approach: a SIRS or
          SIRS-like screen to trigger closer nursing/medical review, followed
          by qSOFA or a full SOFA calculation to assess severity and organ
          dysfunction once infection is suspected or confirmed.
        </p>

        <h2>Use Across Clinical Settings</h2>
        <ul>
          <li>
            <strong>Emergency medicine:</strong> as a rapid triage trigger —
            patients meeting SIRS criteria are commonly fast-tracked for
            physician review, blood cultures, lactate measurement, and early
            antibiotics if an infective source is likely.
          </li>
          <li>
            <strong>Critical care:</strong> for trend-spotting rather than
            diagnosis — nearly all ICU patients meet SIRS criteria at some
            point, so clinicians watch for a <em>new increase</em> in the
            score, which can herald a fresh complication such as a
            hospital-acquired infection, line infection, or pulmonary
            embolism.
          </li>
          <li>
            <strong>Surgical wards:</strong> post-operative patients commonly
            show transient SIRS purely from surgical trauma. Persistent or
            worsening SIRS beyond the expected 24–72-hour post-operative
            window should prompt investigation for a surgical site
            infection, anastomotic leak, or hospital-acquired pneumonia.
          </li>
        </ul>

        <h2>Limitations and Common Pitfalls</h2>
        <ul>
          <li>
            <strong>Baseline-dependent vital signs:</strong> a trained
            athlete with a resting heart rate of 45 bpm may rise to 85 bpm
            during a serious illness — a striking deviation from their own
            baseline that still fails to meet the numerical 90 bpm
            threshold. Always interpret vital signs against the individual's
            known baseline where available.
          </li>
          <li>
            <strong>Non-infectious triggers:</strong> pain, anxiety, alcohol
            withdrawal, acute pancreatitis, burns, and major trauma can all
            independently produce a SIRS-positive score with no infection
            present at all — a positive score should prompt a broad
            differential, not an automatic assumption of sepsis.
          </li>
          <li>
            <strong>Drug-masked responses:</strong> beta-blockers and other
            rate-limiting medications can blunt the tachycardic response
            even in the presence of severe systemic inflammation, producing
            a falsely low score in exactly the patients who may most need
            escalation.
          </li>
          <li>
            <strong>Blunted responses in vulnerable groups:</strong> elderly,
            immunosuppressed, and post-transplant patients frequently fail
            to mount a robust febrile or tachycardic response to serious
            infection — a normal or low SIRS score does not exclude sepsis
            in these populations, and clinical suspicion should override a
            reassuring number.
          </li>
        </ul>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Are SIRS criteria still relevant now that Sepsis-3 has replaced them for diagnosis?",
            a: "Yes — while SIRS is no longer used to formally diagnose sepsis, its high sensitivity makes it a valuable early-warning screen. Many hospitals still use SIRS-style vital sign triggers to prompt closer review, alongside SOFA/qSOFA to confirm severity once infection is suspected.",
          },
          {
            q: "Can a patient have sepsis without meeting SIRS criteria?",
            a: "Yes. Elderly patients, immunocompromised patients, and those on rate-limiting medications like beta-blockers may not mount a classic febrile or tachycardic response and can be seriously septic with a low or normal SIRS score. Clinical judgement should always override a reassuring number in a patient who looks unwell.",
          },
          {
            q: "What is the actual difference between SIRS and sepsis?",
            a: "SIRS is a systemic inflammatory pattern that can be triggered by any severe insult — infection, trauma, burns, pancreatitis, or surgery. Sepsis, under the current Sepsis-3 definition, is specifically life-threatening organ dysfunction caused by a dysregulated response to infection, assessed using the SOFA score rather than SIRS criteria.",
          },
          {
            q: "What should happen after a positive SIRS score?",
            a: "A positive score should trigger prompt clinical review to identify the underlying cause. If infection is suspected, initiate a sepsis screen without delay — blood cultures, lactate, and early broad-spectrum antibiotics per local protocol (such as the 'Sepsis Six' bundle), alongside fluid resuscitation and monitoring urine output.",
          },
        ]}
      />

      <RelatedTools slugs={["curb65-calculator", "apache-ii-calculator", "grace-risk-score"]} />

      <References
        items={[
          {
            text: "Bone RC, Balk RA, Cerra FB, et al. Definitions for sepsis and organ failure and guidelines for the use of innovative therapies in sepsis. ACCP/SCCM Consensus Conference Committee. Chest. 1992;101(6):1644-1655.",
          },
          {
            text: "Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.",
          },
        ]}
      />
    </>
  );
}
