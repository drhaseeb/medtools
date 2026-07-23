import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

export default function HeadInjuryAssessmentTool() {
  const [exclAge, setExclAge] = useState(false);
  const [exclAnticoag, setExclAnticoag] = useState(false);
  const [exclFocal, setExclFocal] = useState(false);
  const [exclPenetrating, setExclPenetrating] = useState(false);
  const [exclSeizure, setExclSeizure] = useState(false);

  const [gcsLt15, setGcsLt15] = useState(false);
  const [openFracture, setOpenFracture] = useState(false);
  const [basalSkull, setBasalSkull] = useState(false);
  const [vomiting, setVomiting] = useState(false);
  const [age65, setAge65] = useState(false);

  const [amnesia30, setAmnesia30] = useState(false);
  const [dangerous, setDangerous] = useState(false);

  const { tone, value, description, footnote } = useMemo(() => {
    const excluded = exclAge || exclAnticoag || exclFocal || exclPenetrating || exclSeizure;
    const highRisk = gcsLt15 || openFracture || basalSkull || vomiting || age65;
    const medRisk = amnesia30 || dangerous;

    let tone: Tone;
    let value: string;
    let description: string;
    let footnote: string;

    if (excluded) {
      tone = "bad";
      value = "CT Required";
      description = "⚠ Exclusion Criterion Present — CT Head Indicated Regardless of CCHR Score.";
      footnote =
        "The CCHR cannot be used to exclude CT in this patient. Proceed with CT head and clinical judgment. If patient is on anticoagulants, discuss with haematology for reversal if intracranial haemorrhage found.";
    } else if (highRisk) {
      tone = "bad";
      value = "CT Required";
      description = "CT Head REQUIRED — High-Risk Criterion Present.";
      footnote =
        "Order immediate CT head. Neurosurgery referral if intracranial haemorrhage, depressed skull fracture or midline shift. Admit for neurological obs if CT unavailable immediately.";
    } else if (medRisk) {
      tone = "warn";
      value = "CT Recommended";
      description = "CT Head Recommended — Medium-Risk Criterion Present.";
      footnote =
        "CT predicted to show brain injury. Order CT head within 1 hour. Observe in ED. Discharge with head injury instructions only if CT is normal and GCS returns to 15.";
    } else {
      tone = "good";
      value = "Not Required";
      description = "CT Head NOT Required — CCHR Negative.";
      footnote =
        "No high or medium-risk criteria identified. Risk of clinically important brain injury is <2%, and neurosurgical risk is <0.1%. Discharge with written head injury advice, safety netting, and return instructions if symptoms worsen.";
    }

    return { tone, value, description, footnote };
  }, [
    exclAge,
    exclAnticoag,
    exclFocal,
    exclPenetrating,
    exclSeizure,
    gcsLt15,
    openFracture,
    basalSkull,
    vomiting,
    age65,
    amnesia30,
    dangerous,
  ]);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-accent">Inclusion Criteria:</strong> Use only for
        blunt head trauma with witnessed LOC, amnesia or disorientation.
        Initial GCS must be 13–15 in ED.
        <br />
        <strong className="text-bad">
          Exclusions below — if any present, CT is indicated regardless.
        </strong>
      </div>

      <Section title="Exclusion Criteria (CT Indicated if Any Present)">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Age < 16 years — Use PECARN rules for paediatric patients"
            checked={exclAge}
            onChange={setExclAge}
            points="Excluded"
          />
          <CheckboxRow
            label="Anticoagulant Therapy / Bleeding Disorder — Warfarin, DOAC, haemophilia, thrombocytopenia"
            checked={exclAnticoag}
            onChange={setExclAnticoag}
            points="CT Required"
          />
          <CheckboxRow
            label="Focal Neurological Deficit — Unequal pupils, limb weakness, cranial nerve palsy"
            checked={exclFocal}
            onChange={setExclFocal}
            points="CT Required"
          />
          <CheckboxRow
            label="Penetrating Skull Injury / Obvious Open Fracture"
            checked={exclPenetrating}
            onChange={setExclPenetrating}
            points="CT Required"
          />
          <CheckboxRow
            label="Seizure Before Assessment"
            checked={exclSeizure}
            onChange={setExclSeizure}
            points="CT Required"
          />
        </div>
      </Section>

      <Section title="High-Risk Criteria — Predicts Need for Neurosurgical Intervention">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="GCS < 15 at 2 Hours Post-Injury — Persistent or worsening confusion 2h after trauma"
            checked={gcsLt15}
            onChange={setGcsLt15}
            points="High Risk"
          />
          <CheckboxRow
            label="Suspected Open or Depressed Skull Fracture — Step-off deformity palpated on scalp examination"
            checked={openFracture}
            onChange={setOpenFracture}
            points="High Risk"
          />
          <CheckboxRow
            label="Any Sign of Basal Skull Fracture — Haemotympanum, 'raccoon eyes', Battle's sign, CSF oto/rhinorrhoea"
            checked={basalSkull}
            onChange={setBasalSkull}
            points="High Risk"
          />
          <CheckboxRow
            label="Vomiting ≥ 2 Episodes — Recurrent vomiting suggests raised ICP"
            checked={vomiting}
            onChange={setVomiting}
            points="High Risk"
          />
          <CheckboxRow
            label="Age ≥ 65 Years — Cerebral atrophy increases bridging vein vulnerability"
            checked={age65}
            onChange={setAge65}
            points="High Risk"
          />
        </div>
      </Section>

      <Section title="Medium-Risk Criteria — Predicts Brain Injury on CT">
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Amnesia Before Impact ≥ 30 Minutes — Retrograde amnesia extending back ≥30 min before event"
            checked={amnesia30}
            onChange={setAmnesia30}
            points="Med Risk"
          />
          <CheckboxRow
            label="Dangerous Mechanism — Pedestrian struck by vehicle, occupant ejected, fall >3 feet / 5 stairs"
            checked={dangerous}
            onChange={setDangerous}
            points="Med Risk"
          />
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="CT Head Recommendation"
        value={value}
        description={description}
        footnote={footnote}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Sensitivity:</strong> CCHR has ~100%
        sensitivity for neurosurgical lesions and &gt;98% for clinically
        important brain injuries. A fully negative screen safely avoids CT
        in ~30–50% of minor head injury presentations. Always combine with
        clinical judgment.
      </div>
    </div>
  );
}
