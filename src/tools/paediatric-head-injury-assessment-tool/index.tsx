import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

export default function PaediatricHeadInjuryAssessmentTool() {
  const [infantUnder1, setInfantUnder1] = useState(false);

  // 1-hour ("immediate") criteria
  const [nonAccidentalInjury, setNonAccidentalInjury] = useState(false);
  const [seizure, setSeizure] = useState(false);
  const [gcsInitialLow, setGcsInitialLow] = useState(false);
  const [gcsLt15at2h, setGcsLt15at2h] = useState(false);
  const [skullFractureOrFontanelle, setSkullFractureOrFontanelle] = useState(false);
  const [basalSkullSigns, setBasalSkullSigns] = useState(false);
  const [focalDeficit, setFocalDeficit] = useState(false);
  const [infantScalpInjury, setInfantScalpInjury] = useState(false);

  // Observe-or-scan criteria (more than one = CT within 1 hour, exactly one = observe)
  const [locOver5min, setLocOver5min] = useState(false);
  const [abnormalDrowsiness, setAbnormalDrowsiness] = useState(false);
  const [vomiting3plus, setVomiting3plus] = useState(false);
  const [dangerousMechanism, setDangerousMechanism] = useState(false);
  const [amnesiaOver5min, setAmnesiaOver5min] = useState(false);
  const [bleedingDisorder, setBleedingDisorder] = useState(false);

  const { tone, value, description, footnote, breakdown } = useMemo(() => {
    const immediateReasons = [
      nonAccidentalInjury && "suspicion of non-accidental injury",
      seizure && "post-traumatic seizure",
      gcsInitialLow &&
        (infantUnder1
          ? "GCS <15 on initial assessment (infant <1 year)"
          : "GCS <14 on initial assessment"),
      gcsLt15at2h && "GCS <15 at 2 hours after injury",
      skullFractureOrFontanelle &&
        "suspected open/depressed skull fracture, or tense fontanelle",
      basalSkullSigns && "signs of basal skull fracture",
      focalDeficit && "focal neurological deficit",
      infantUnder1 && infantScalpInjury && "scalp bruise, swelling, or laceration >5cm (infant)",
    ].filter(Boolean) as string[];

    const observeReasons = [
      locOver5min && "witnessed loss of consciousness >5 minutes",
      abnormalDrowsiness && "abnormal drowsiness",
      vomiting3plus && "3 or more discrete episodes of vomiting",
      dangerousMechanism && "dangerous mechanism of injury",
      amnesiaOver5min && "amnesia >5 minutes",
      bleedingDisorder && "bleeding or clotting disorder",
    ].filter(Boolean) as string[];

    let tone: Tone;
    let value: string;
    let description: string;
    let footnote: string;
    let breakdown: string | undefined;

    if (immediateReasons.length > 0) {
      tone = "bad";
      value = "CT within 1 hour";
      description = "CT Head Required Within 1 Hour — Immediate Criterion Present";
      breakdown = `Criteria met: ${immediateReasons.join(", ")}`;
      footnote =
        "Arrange CT head with a request for a provisional written report within 1 hour of the scan. Discuss with paediatric neurosurgery if the scan shows an acute traumatic abnormality, or urgently regardless of imaging if there is a deteriorating conscious level, progressive focal neurology, or signs of raised intracranial pressure.";
    } else if (observeReasons.length >= 2) {
      tone = "bad";
      value = "CT within 1 hour";
      description = "CT Head Required Within 1 Hour — More Than One Risk Factor Present";
      breakdown = `Criteria met (${observeReasons.length}): ${observeReasons.join(", ")}`;
      footnote =
        "NICE NG232 recommends an immediate CT head scan (within 1 hour) for children with more than one of these six risk factors, rather than a period of observation.";
    } else if (observeReasons.length === 1) {
      tone = "warn";
      value = "Observe (Min. 4h)";
      description = "Minimum 4-Hour Observation — Exactly One Risk Factor Present";
      breakdown = `Criterion met: ${observeReasons[0]}`;
      footnote =
        "With exactly one of the six risk factors present, NG232 recommends a minimum period of 4 hours' observation rather than immediate imaging. Escalate to CT head immediately if, during observation, GCS drops below 15 at any point, there is further vomiting, or abnormal drowsiness develops or recurs.";
    } else {
      tone = "good";
      value = "CT Not Indicated";
      description = "No NG232 Imaging or Observation Criterion Met";
      breakdown = undefined;
      footnote =
        "No 1-hour imaging criterion and none of the six observe-or-scan risk factors are present. Consider discharge with verbal and written head injury advice for the parent/carer, with clear instructions to return immediately for new vomiting, worsening drowsiness, abnormal behaviour, seizure, or any other concerning feature. Always combine with clinical judgement — this tool does not replace a full assessment or safeguarding review.";
    }

    return { tone, value, description, footnote, breakdown };
  }, [
    infantUnder1,
    nonAccidentalInjury,
    seizure,
    gcsInitialLow,
    gcsLt15at2h,
    skullFractureOrFontanelle,
    basalSkullSigns,
    focalDeficit,
    infantScalpInjury,
    locOver5min,
    abnormalDrowsiness,
    vomiting3plus,
    dangerousMechanism,
    amnesiaOver5min,
    bleedingDisorder,
  ]);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-accent">NICE NG232 (2023):</strong> Assessment
        and early management of head injury in children and young people
        under 16. This tool implements the paediatric imaging pathway only —
        for patients 16 and over, use the separate adult head injury
        assessment tool instead.
      </div>

      <Section title="Patient Age">
        <CheckboxRow
          label="Infant Under 1 Year Old — changes the GCS threshold below and adds an infant-specific criterion"
          checked={infantUnder1}
          onChange={setInfantUnder1}
          points="Age"
        />
      </Section>

      <Section title="CT Head Within 1 Hour — Any One Present">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Suspicion of Non-Accidental Injury"
            checked={nonAccidentalInjury}
            onChange={setNonAccidentalInjury}
            points="1-Hour"
          />
          <CheckboxRow
            label="Post-Traumatic Seizure — No History of Epilepsy"
            checked={seizure}
            onChange={setSeizure}
            points="1-Hour"
          />
          <CheckboxRow
            label={
              infantUnder1
                ? "GCS < 15 on Initial Assessment (Infant Under 1 Year)"
                : "GCS < 14 on Initial Assessment"
            }
            checked={gcsInitialLow}
            onChange={setGcsInitialLow}
            points="1-Hour"
          />
          <CheckboxRow
            label="GCS < 15 at 2 Hours After Injury, on Assessment in the ED"
            checked={gcsLt15at2h}
            onChange={setGcsLt15at2h}
            points="1-Hour"
          />
          <CheckboxRow
            label="Suspected Open or Depressed Skull Fracture, or a Tense Fontanelle"
            checked={skullFractureOrFontanelle}
            onChange={setSkullFractureOrFontanelle}
            points="1-Hour"
          />
          <CheckboxRow
            label="Any Sign of Basal Skull Fracture — Haemotympanum, 'panda/raccoon eyes', Battle's sign, CSF oto/rhinorrhoea"
            checked={basalSkullSigns}
            onChange={setBasalSkullSigns}
            points="1-Hour"
          />
          <CheckboxRow
            label="Focal Neurological Deficit"
            checked={focalDeficit}
            onChange={setFocalDeficit}
            points="1-Hour"
          />
          {infantUnder1 && (
            <CheckboxRow
              label="Bruise, Swelling, or Laceration of More Than 5cm on the Head (Infant Under 1 Year)"
              checked={infantScalpInjury}
              onChange={setInfantScalpInjury}
              points="1-Hour"
            />
          )}
        </div>
      </Section>

      <Section title="Risk Factors — More Than One Requires CT Within 1 Hour; Exactly One Requires a Minimum 4-Hour Observation Period">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Witnessed Loss of Consciousness Lasting More Than 5 Minutes"
            checked={locOver5min}
            onChange={setLocOver5min}
            points="Count"
          />
          <CheckboxRow
            label="Abnormal Drowsiness"
            checked={abnormalDrowsiness}
            onChange={setAbnormalDrowsiness}
            points="Count"
          />
          <CheckboxRow
            label="3 or More Discrete Episodes of Vomiting Since the Injury"
            checked={vomiting3plus}
            onChange={setVomiting3plus}
            points="Count"
          />
          <CheckboxRow
            label="Dangerous Mechanism of Injury — High-Speed RTA, Fall From Height, High-Speed Object/Injury"
            checked={dangerousMechanism}
            onChange={setDangerousMechanism}
            points="Count"
          />
          <CheckboxRow
            label="Amnesia Lasting More Than 5 Minutes (Retrograde or Anterograde)"
            checked={amnesiaOver5min}
            onChange={setAmnesiaOver5min}
            points="Count"
          />
          <CheckboxRow
            label="Any Current Bleeding or Clotting Disorder"
            checked={bleedingDisorder}
            onChange={setBleedingDisorder}
            points="Count"
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="CT Head Recommendation (NG232, Paediatric)"
        value={value}
        description={description}
        breakdown={breakdown}
        footnote={footnote}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Note:</strong> The paediatric pathway is
        structured differently from the adult pathway — it is not simply the
        same criteria with different thresholds. In particular, the six
        risk factors in the second section only trigger immediate imaging
        when more than one is present together; a single risk factor on its
        own calls for a period of observation rather than a scan. This tool
        does not model a specific anticoagulant/antiplatelet pathway for
        children, since paediatric anticoagulation is uncommon — discuss any
        such case with a senior clinician.
      </div>
    </div>
  );
}
