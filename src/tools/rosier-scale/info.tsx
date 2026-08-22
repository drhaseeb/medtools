import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function RosierScaleInfo() {
  return (
    <>
      <ReviewedBadge updated="August 2026" />

      <div className="prose max-w-none">
        <h2>What Is the ROSIER Scale?</h2>
        <p>
          The ROSIER scale (Recognition of Stroke in the Emergency Room) is a
          bedside screening tool designed to answer one narrow but critical
          question at the moment a patient first arrives with a possible
          neurological event: is this a stroke, or is it one of the many
          conditions that can mimic one? Before any imaging is available,
          emergency clinicians need a fast, structured way to separate true
          strokes from mimics such as seizures, syncope, hypoglycaemia, and
          migraine with aura — conditions that can produce transient focal
          neurological signs but require an entirely different immediate
          workup and treatment pathway.
        </p>
        <p>
          Stroke mimics are common: depending on the series, somewhere
          between one in eight and one in three patients referred to a
          hyperacute stroke pathway ultimately turn out to have a mimic
          rather than a true cerebrovascular event. Because time-critical
          treatments like thrombolysis and thrombectomy carry real risks
          when given to a patient who has not actually had an ischaemic
          stroke, a quick, validated recognition step at the door has
          genuine clinical value — it helps triage patients toward the
          correct pathway without slowing down the true strokes who need to
          move quickly.
        </p>

        <h2>History and Development</h2>
        <p>
          The ROSIER scale was developed by Nor and colleagues at Newcastle
          General Hospital in the United Kingdom and published in 2005 in{" "}
          <em>Lancet Neurology</em> under the title "The Recognition of
          Stroke in the Emergency Room (ROSIER) scale: development and
          validation of a stroke recognition instrument." The authors built
          it specifically to improve on an earlier prehospital tool, the
          Face Arm Speech Test (FAST), which was designed for paramedics to
          quickly flag possible stroke but was not intended to discriminate
          stroke from its mimics once a patient reached the emergency
          department — a task that needs slightly more clinical detail than
          a three-item screen can provide.
        </p>
        <p>
          The scale was derived in 343 patients presenting with a suspected
          acute neurological event and then prospectively validated in a
          separate cohort of 173 patients, both assessed by emergency
          department staff of varying seniority — a deliberate design choice
          to confirm the tool would perform consistently regardless of who
          was applying it, since a screening tool that only works well in
          the hands of a stroke specialist has limited practical value at
          the point of first contact.
        </p>

        <h2>The Seven Components of the Score</h2>
        <p>
          ROSIER scores seven clinical findings. Two are scored as{" "}
          <strong>negative</strong> points because their presence argues
          against a stroke and toward a mimic; five are scored as{" "}
          <strong>positive</strong> points because they reflect the
          asymmetric, focal findings characteristic of a true cerebrovascular
          event:
        </p>
        <ul>
          <li>
            <strong>Loss of consciousness or syncope (−1).</strong> True
            ischaemic stroke rarely causes loss of consciousness at onset,
            since it typically affects one vascular territory rather than
            global brain function. A collapse with loss of consciousness
            points more toward syncope, a seizure, or a cardiac event.
          </li>
          <li>
            <strong>Seizure activity (−1).</strong> A witnessed seizure
            raises the possibility of Todd's paresis — a transient focal
            weakness following a seizure that can closely mimic a stroke but
            resolves as the postictal state clears.
          </li>
          <li>
            <strong>New, acute onset (or on waking) asymmetric facial
            weakness (+1).</strong>
          </li>
          <li>
            <strong>New, acute onset asymmetric arm weakness (+1).</strong>
          </li>
          <li>
            <strong>New, acute onset asymmetric leg weakness (+1).</strong>
          </li>
          <li>
            <strong>Speech disturbance (+1).</strong> New dysphasia or
            dysarthria.
          </li>
          <li>
            <strong>Visual field defect (+1).</strong> A new homonymous or
            other field deficit.
          </li>
        </ul>
        <p>
          The total score ranges from −2 to +5. Note that the five positive
          items specifically require the deficit to be <em>new</em>,{" "}
          <em>acute in onset</em> (or first noticed on waking), and{" "}
          <em>asymmetric</em> — a longstanding weakness, a symmetric finding,
          or a gradual decline over days does not score a point, since none
          of these patterns is typical of an acute vascular event.
        </p>

        <h2>The Hypoglycaemia Prerequisite</h2>
        <p>
          ROSIER is explicitly designed to be applied only after blood
          glucose has been checked and, if low, corrected. Hypoglycaemia is
          one of the most common and most easily reversible stroke mimics —
          it can produce focal weakness, dysarthria, and confusion that
          closely resembles an acute infarct, but it responds within minutes
          to glucose rather than to a stroke pathway. The standard clinical
          proforma instructs the assessor to treat a blood glucose below 3.5
          mmol/L urgently and reassess the patient once it has normalised
          before scoring the remaining items — scoring a hypoglycaemic
          patient without correcting the glucose first risks a false-positive
          stroke call and an unnecessary emergency imaging/thrombolysis
          pathway activation.
        </p>

        <h2>Worked Example</h2>
        <p>
          A 71-year-old man is brought to the emergency department after his
          wife noticed his speech was slurred and his right arm was weak
          over the last hour. He did not lose consciousness and has no
          history of seizures. His blood glucose is 6.2 mmol/L. On
          examination he has a right facial droop, right arm weakness, and
          dysarthria, but no leg weakness and no visual field defect.
        </p>
        <p>
          Loss of consciousness: no (0). Seizure: no (0). Facial weakness:
          yes (+1). Arm weakness: yes (+1). Leg weakness: no (0). Speech
          disturbance: yes (+1). Visual field defect: no (0). His total is{" "}
          <strong>+3</strong>, placing him well into the "stroke likely"
          range — the acute stroke pathway should be activated and time last
          known well documented immediately, alongside emergency imaging.
        </p>

        <h2>Interpreting the Score</h2>
        <p>
          A score <strong>greater than 0 (+1 to +5) indicates stroke is
          likely</strong>. In the original derivation cohort, this cutoff
          achieved a sensitivity of 92% and specificity of 86%; the
          prospective validation cohort reported a closely consistent
          sensitivity of 93% and specificity of 83%. A score of{" "}
          <strong>0 or below (0, −1, or −2) indicates stroke is unlikely, but
          does not exclude it</strong> — around 1 in 10–15 true strokes will
          still score 0 or below, so a low score in a patient with a
          convincing history and ongoing focal signs should prompt discussion
          with a stroke specialist rather than automatic discharge.
        </p>

        <h2>Emergency Department Use vs Prehospital Use</h2>
        <p>
          ROSIER was derived and validated in the emergency department,
          applied by ED clinical staff. Since publication it has also been
          adopted in some prehospital and ambulance services as an
          alternative or supplement to FAST, on the reasoning that a more
          detailed tool could reduce unnecessary "blue light" stroke-unit
          conveyances for obvious mimics. However, pooled prehospital and
          multi-setting validation studies have generally reported lower
          specificity — in the range of roughly 66–83%, alongside sensitivity
          around 88–89% — than the original single-centre ED figures,
          reflecting the reality that performance varies with the setting
          and the experience of the assessor applying it. This is not a
          reason to abandon the tool in the field, but it is a reason to
          treat prehospital ROSIER scoring as one input into the conveyance
          decision rather than an automatic rule.
        </p>

        <h2>Limitations and Special Populations</h2>
        <ul>
          <li>
            <strong>Reduced accuracy for posterior circulation stroke.</strong>{" "}
            ROSIER's five positive items are weighted toward the classic
            anterior-circulation triad of face, arm, and leg weakness plus
            speech and visual disturbance. Posterior circulation
            infarcts — which can present with isolated vertigo, ataxia,
            diplopia, or dysphagia without limb weakness — are
                disproportionately represented among ROSIER's false negatives.
            A score of 0 in a patient with acute vertigo and ataxia should
            not be treated as reassuring.
          </li>
          <li>
            <strong>Reduced accuracy for lacunar and haemorrhagic
            stroke.</strong> Small subcortical (lacunar) infarcts and some
            haemorrhagic strokes can present atypically enough to score
            below the threshold; imaging remains necessary in any patient
            where clinical suspicion persists regardless of score.
          </li>
          <li>
            <strong>Not designed for suspected TIA with no residual
            deficit.</strong> ROSIER assumes the assessor can examine an
            ongoing focal neurological sign. In a patient whose symptoms
            have already resolved by the time of assessment, ROSIER is not
            the appropriate tool — use a validated TIA-specific pathway
            instead, and refer for urgent specialist assessment regardless of
            any recognition score.
          </li>
          <li>
            <strong>A screening aid, not a diagnosis.</strong> ROSIER
            identifies who should be fast-tracked down the acute stroke
            pathway; it does not replace CT/MRI imaging, and a positive score
            does not itself confirm an ischaemic (as opposed to
            haemorrhagic) event or determine thrombolysis eligibility.
          </li>
        </ul>

        <h2>ROSIER Compared to FAST and BE-FAST</h2>
        <p>
          FAST (Face, Arm, Speech, Time) and its extension BE-FAST (adding
          Balance and Eyes, to catch more posterior-circulation and visual
          presentations) are deliberately simpler tools, designed for the
          general public and prehospital first responders to raise the alarm
          and call for emergency help — they are not scored, and they are
          not intended to discriminate stroke from mimics with any precision.
          ROSIER sits one step later in the pathway: once a patient with a
          possible stroke has reached clinical assessment, ROSIER adds the
          negative items (loss of consciousness, seizure) and the
          hypoglycaemia check that FAST omits, converting a public
          recognition prompt into a more discriminating clinical screening
          score. The two tools are complementary rather than competing —
          FAST (or BE-FAST) to raise the alarm and get the patient to care
          quickly, ROSIER to help the receiving clinical team decide how
          confidently to activate the acute stroke pathway.
        </p>

        <h2>Why Fast, Accurate Recognition Matters</h2>
        <p>
          Time-critical stroke treatments — intravenous thrombolysis and
          mechanical thrombectomy — are both subject to narrow treatment
          windows measured from the patient's last known well time, and both
          carry a real bleeding risk if given inappropriately. A tool that
          helps a receiving team recognise a true stroke quickly supports
          rapid activation of the CT/imaging pathway and specialist review
          without unnecessary delay; equally, correctly flagging a probable
          mimic (a seizure with Todd's paresis, an unrecognised hypoglycaemic
          episode, a syncopal event) avoids exposing a patient to
          thrombolysis-pathway risk and imaging resource use they do not
          need. This dual function — fast-tracking true strokes while
          filtering obvious mimics — is precisely why a validated,
          reproducible bedside score has remained in routine use across
          emergency and stroke medicine since its publication.
        </p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Do I need to check blood glucose before using ROSIER?",
            a: "Yes. Hypoglycaemia is a common, rapidly reversible stroke mimic. Standard practice is to check blood glucose first and, if below 3.5 mmol/L, treat it and reassess the patient once glucose has normalised before applying the ROSIER items.",
          },
          {
            q: "Does a ROSIER score of 0 or below rule out stroke?",
            a: "No. A score of 0 or below makes stroke less likely but does not exclude it — a meaningful minority of true strokes, particularly posterior circulation events presenting with isolated vertigo or ataxia, will still score 0 or below. Ongoing clinical suspicion should still prompt specialist discussion.",
          },
          {
            q: "Can ROSIER be used for a patient whose symptoms have already resolved?",
            a: "No. ROSIER is designed for a patient with a persisting focal deficit at the time of assessment. If symptoms have fully resolved and a TIA is suspected, use a dedicated TIA assessment pathway instead.",
          },
          {
            q: "Is ROSIER as reliable when used by paramedics in the field as in the emergency department?",
            a: "It performs slightly less well outside the emergency department setting it was validated in — pooled prehospital studies report somewhat lower specificity than the original ED derivation and validation cohorts — so it should inform, rather than solely determine, the prehospital conveyance decision.",
          },
          {
            q: "How is ROSIER different from FAST?",
            a: "FAST is an unscored public/prehospital alarm tool covering only face, arm, and speech, designed to prompt an emergency call. ROSIER is a scored clinical tool used once a patient reaches assessment, adding negative items (loss of consciousness, seizure) and a mandatory glucose check to better discriminate true stroke from mimics.",
          },
        ]}
      />

      <RelatedTools
        slugs={["nihss-calculator", "gcs-calculator", "head-injury-assessment-tool"]}
      />

      <References
        items={[
          {
            text: "Nor AM, Davis J, Sen B, Shipsey D, Louw SJ, Dyker AG, Davis M, Ford GA. The Recognition of Stroke in the Emergency Room (ROSIER) scale: development and validation of a stroke recognition instrument. Lancet Neurol. 2005;4(11):727-734.",
          },
          {
            text: "National Institute for Health and Care Excellence. Stroke and transient ischaemic attack in over 16s: diagnosis and initial management (NG128).",
            href: "https://www.nice.org.uk/guidance/ng128",
          },
        ]}
      />
    </>
  );
}
