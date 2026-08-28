import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

export default function HeadInjuryAssessmentTool() {
  // 1-hour ("immediate") criteria
  const [gcsLt13Initial, setGcsLt13Initial] = useState(false);
  const [gcsLt15at2h, setGcsLt15at2h] = useState(false);
  const [openDepressedFracture, setOpenDepressedFracture] = useState(false);
  const [basalSkullSigns, setBasalSkullSigns] = useState(false);
  const [seizure, setSeizure] = useState(false);
  const [focalDeficit, setFocalDeficit] = useState(false);
  const [vomiting2, setVomiting2] = useState(false);

  // Gate + 8-hour criteria (only relevant with LOC/amnesia since injury)
  const [locOrAmnesia, setLocOrAmnesia] = useState(false);
  const [age65, setAge65] = useState(false);
  const [bleedingDisorder, setBleedingDisorder] = useState(false);
  const [dangerousMechanism, setDangerousMechanism] = useState(false);
  const [retrogradeAmnesia30, setRetrogradeAmnesia30] = useState(false);

  // Anticoagulant / antiplatelet pathway
  const [anticoagOrAntiplatelet, setAnticoagOrAntiplatelet] = useState(false);
  const [presentingOver8h, setPresentingOver8h] = useState(false);

  // Not covered by this adult tool
  const [under16, setUnder16] = useState(false);

  const { tone, value, description, footnote, breakdown } = useMemo(() => {
    const immediate =
      gcsLt13Initial ||
      gcsLt15at2h ||
      openDepressedFracture ||
      basalSkullSigns ||
      seizure ||
      focalDeficit ||
      vomiting2;

    const eightHourCriteria =
      locOrAmnesia &&
      (age65 || bleedingDisorder || dangerousMechanism || retrogradeAmnesia30);

    const anticoagPathway = anticoagOrAntiplatelet && !immediate;

    let tone: Tone;
    let value: string;
    let description: string;
    let footnote: string;
    let breakdown: string | undefined;

    if (under16) {
      tone = "warn";
      value = "Use Paediatric Criteria";
      description = "Patient Under 16 — Adult NG232 Criteria Do Not Apply";
      footnote =
        "NICE NG232 sets out separate, age-stratified imaging criteria for infants, children and young people that differ from the adult pathway modelled here (e.g. different vomiting and drowsiness thresholds, and criteria applied after a period of observation). Reassess this patient against your local paediatric head injury pathway rather than the adult result below.";
      breakdown = undefined;
    } else if (immediate) {
      tone = "bad";
      value = "CT within 1 hour";
      description = "CT Head Required Within 1 Hour — Immediate Criterion Present";
      const reasons = [
        gcsLt13Initial && "GCS <13 on initial ED assessment",
        gcsLt15at2h && "GCS <15 at 2 hours",
        openDepressedFracture && "open/depressed skull fracture",
        basalSkullSigns && "signs of basal skull fracture",
        seizure && "post-traumatic seizure",
        focalDeficit && "focal neurological deficit",
        vomiting2 && ">1 episode of vomiting",
      ].filter(Boolean) as string[];
      breakdown = `Criteria met: ${reasons.join(", ")}`;
      footnote =
        "Arrange CT head with a request for a provisional written report within 1 hour of the scan. Discuss with neurosurgery if the scan shows an acute traumatic abnormality, or urgently regardless of imaging if there is a deteriorating conscious level, progressive focal neurology, or signs of raised intracranial pressure.";
    } else if (anticoagPathway && presentingOver8h) {
      tone = "bad";
      value = "CT within 1 hour";
      description = "CT Head Within 1 Hour — Anticoagulated/Antiplatelet, Presenting Late";
      breakdown = "Criterion met: anticoagulant/antiplatelet therapy, presenting >8h after injury";
      footnote =
        "No immediate (1-hour) criterion is present, but the patient is taking an anticoagulant (vitamin K antagonist, DOAC, heparin/LMWH) or an antiplatelet other than aspirin monotherapy. NICE NG232 recommends CT head within 8 hours of injury for these patients, or within 1 hour of arrival if they present more than 8 hours after the injury — which applies here.";
    } else if (eightHourCriteria || anticoagPathway) {
      tone = "warn";
      value = "CT within 8 hours";
      description = "CT Head Recommended Within 8 Hours of Injury";
      const reasons = [
        eightHourCriteria && age65 && "age ≥65",
        eightHourCriteria && bleedingDisorder && "bleeding/clotting disorder",
        eightHourCriteria && dangerousMechanism && "dangerous mechanism",
        eightHourCriteria && retrogradeAmnesia30 && "retrograde amnesia >30 min",
        anticoagPathway && "anticoagulant/antiplatelet therapy",
      ].filter(Boolean) as string[];
      breakdown = reasons.length ? `Criteria met: ${reasons.join(", ")}` : undefined;
      footnote =
        "Admit for observation and arrange CT head within 8 hours of the injury. If any new high-risk feature develops during observation (falling GCS, new focal neurology, repeated vomiting, seizure), escalate immediately to the 1-hour pathway.";
    } else {
      tone = "good";
      value = "CT Not Indicated";
      description = "No NG232 Imaging Criterion Met";
      breakdown = undefined;
      footnote =
        "No 1-hour or 8-hour imaging criterion is present. Consider discharge with verbal and written head injury advice and safety-netting if there is a responsible adult available to supervise the patient, with clear instructions to return immediately for new vomiting, worsening headache, drowsiness, seizure, weakness, or visual disturbance. Always combine with clinical judgement — this tool does not replace a full assessment.";
    }

    return { tone, value, description, footnote, breakdown };
  }, [
    under16,
    gcsLt13Initial,
    gcsLt15at2h,
    openDepressedFracture,
    basalSkullSigns,
    seizure,
    focalDeficit,
    vomiting2,
    locOrAmnesia,
    age65,
    bleedingDisorder,
    dangerousMechanism,
    retrogradeAmnesia30,
    anticoagOrAntiplatelet,
    presentingOver8h,
  ]);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-accent">NICE NG232 (2023):</strong> Assessment
        and early management of head injury in people aged 16 and over. This
        tool implements the adult imaging pathway only — it does not apply to
        infants, children or young people, who are assessed against separate,
        age-stratified NG232 criteria.
      </div>

      <Section title="Not Covered By This Calculator">
        <CheckboxRow
          label="Patient is under 16 years old — use the paediatric NG232 pathway instead"
          checked={under16}
          onChange={setUnder16}
          points="Excluded"
        />
      </Section>

      <Section title="CT Head Within 1 Hour — Any One Present">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="GCS < 13 on Initial Assessment in the ED"
            checked={gcsLt13Initial}
            onChange={setGcsLt13Initial}
            points="1-Hour"
          />
          <CheckboxRow
            label="GCS < 15 at 2 Hours After Injury, on Assessment in the ED"
            checked={gcsLt15at2h}
            onChange={setGcsLt15at2h}
            points="1-Hour"
          />
          <CheckboxRow
            label="Suspected Open or Depressed Skull Fracture"
            checked={openDepressedFracture}
            onChange={setOpenDepressedFracture}
            points="1-Hour"
          />
          <CheckboxRow
            label="Any Sign of Basal Skull Fracture — Haemotympanum, 'panda/raccoon eyes', Battle's sign, CSF oto/rhinorrhoea"
            checked={basalSkullSigns}
            onChange={setBasalSkullSigns}
            points="1-Hour"
          />
          <CheckboxRow
            label="Post-Traumatic Seizure"
            checked={seizure}
            onChange={setSeizure}
            points="1-Hour"
          />
          <CheckboxRow
            label="Focal Neurological Deficit"
            checked={focalDeficit}
            onChange={setFocalDeficit}
            points="1-Hour"
          />
          <CheckboxRow
            label="More Than 1 Episode of Vomiting Since the Injury"
            checked={vomiting2}
            onChange={setVomiting2}
            points="1-Hour"
          />
        </div>
      </Section>

      <Section title="CT Head Within 8 Hours — Requires Loss of Consciousness or Amnesia Since Injury, Plus Any One Risk Factor">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Loss of Consciousness or Amnesia Since the Injury (gate for the four items below)"
            checked={locOrAmnesia}
            onChange={setLocOrAmnesia}
            points="Gate"
          />
          <CheckboxRow
            label="Age ≥ 65 Years"
            checked={age65}
            onChange={setAge65}
            points="8-Hour"
          />
          <CheckboxRow
            label="Any Current Bleeding or Clotting Disorder — e.g. haemophilia, thrombocytopenia, liver disease coagulopathy (not anticoagulant/antiplatelet medication — see below)"
            checked={bleedingDisorder}
            onChange={setBleedingDisorder}
            points="8-Hour"
          />
          <CheckboxRow
            label="Dangerous Mechanism — Pedestrian/cyclist struck by vehicle, occupant ejected from vehicle, fall from height >1 metre or ≥5 stairs"
            checked={dangerousMechanism}
            onChange={setDangerousMechanism}
            points="8-Hour"
          />
          <CheckboxRow
            label="More Than 30 Minutes' Retrograde Amnesia of Events Immediately Before the Injury"
            checked={retrogradeAmnesia30}
            onChange={setRetrogradeAmnesia30}
            points="8-Hour"
          />
        </div>
      </Section>

      <Section title="Anticoagulant / Antiplatelet Pathway — Applies Regardless of Other Risk Factors">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="On Anticoagulant (Warfarin, DOAC, Heparin/LMWH) or Antiplatelet Therapy Other Than Aspirin Monotherapy"
            checked={anticoagOrAntiplatelet}
            onChange={setAnticoagOrAntiplatelet}
            points="8-Hour*"
          />
          <CheckboxRow
            label="Presenting More Than 8 Hours After the Injury (only changes the recommendation if the anticoagulant/antiplatelet box above is also checked — NG232 1.5.13 does not apply this escalation to the general 8-hour pathway)"
            checked={presentingOver8h}
            onChange={setPresentingOver8h}
            points="Timing"
            disabled={!anticoagOrAntiplatelet}
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="CT Head Recommendation (NG232)"
        value={value}
        description={description}
        breakdown={breakdown}
        footnote={footnote}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">2023 Update:</strong> NG232 replaced the
        2014 CG176 guideline. The most significant change for anticoagulated
        or antiplatelet-treated patients is a shift from mandatory immediate
        CT to a structured, discretionary 8-hour (or 1-hour-if-presenting-late)
        pathway when no other 1-hour criterion is present. Aspirin monotherapy
        alone does not trigger this pathway. This tool does not replace
        clinical judgement or a full neurological examination.
      </div>
    </div>
  );
}
