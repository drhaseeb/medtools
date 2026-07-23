import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { OptionListField } from "@/kit/OptionListField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

const killipOptions = [
  { value: 1, label: "Killip I — No heart failure", badge: "+0" },
  { value: 2, label: "Killip II — Rales / S3", badge: "+20" },
  { value: 3, label: "Killip III — Acute pulmonary oedema", badge: "+39" },
  { value: 4, label: "Killip IV — Cardiogenic shock", badge: "+59" },
];

export default function GraceRiskScore() {
  const [age, setAge] = useState<number | "">("");
  const [hr, setHr] = useState<number | "">("");
  const [sbp, setSbp] = useState<number | "">("");
  const [creat, setCreat] = useState<number | "">("");
  const [killip, setKillip] = useState(1);
  const [cardiacArrest, setCardiacArrest] = useState(false);
  const [stDeviation, setStDeviation] = useState(false);
  const [elevatedMarkers, setElevatedMarkers] = useState(false);

  const result = useMemo(() => {
    if (age === "" || hr === "" || sbp === "" || creat === "") return null;

    // Classic/original GRACE risk score point-based nomogram — in-hospital
    // mortality points from Granger CB et al, Arch Intern Med 2003;163(19):2345-53,
    // with the same point bands used by Eagle KA et al, JAMA 2004;291(22):2727-33
    // for 6-month post-discharge mortality. This discrete point table is NOT the
    // same model as "GRACE 2.0" (Fox KAA et al, Lancet 2014) — GRACE 2.0 uses a
    // continuous, non-linear logistic regression without banded points and is
    // only available via the official web/app calculator. Point values verified
    // against the original derivation tables (age, heart rate, systolic BP,
    // creatinine, Killip class, cardiac arrest, ST-deviation, elevated markers).
    let ageScore = 0;
    if (age < 30) ageScore = 0;
    else if (age <= 39) ageScore = 8;
    else if (age <= 49) ageScore = 25;
    else if (age <= 59) ageScore = 41;
    else if (age <= 69) ageScore = 58;
    else if (age <= 79) ageScore = 75;
    else if (age <= 89) ageScore = 91;
    else ageScore = 100;

    let hrScore = 0;
    if (hr < 50) hrScore = 0;
    else if (hr <= 69) hrScore = 3;
    else if (hr <= 89) hrScore = 9;
    else if (hr <= 109) hrScore = 15;
    else if (hr <= 149) hrScore = 24;
    else if (hr <= 199) hrScore = 38;
    else hrScore = 46;

    let sbpScore = 0;
    if (sbp < 80) sbpScore = 58;
    else if (sbp <= 99) sbpScore = 53;
    else if (sbp <= 119) sbpScore = 43;
    else if (sbp <= 139) sbpScore = 34;
    else if (sbp <= 159) sbpScore = 24;
    else if (sbp <= 199) sbpScore = 10;
    else sbpScore = 0;

    let creatScore = 0;
    if (creat < 0.4) creatScore = 1;
    else if (creat <= 0.79) creatScore = 4;
    else if (creat <= 1.19) creatScore = 7;
    else if (creat <= 1.59) creatScore = 10;
    else if (creat <= 1.99) creatScore = 13;
    else if (creat <= 3.99) creatScore = 21;
    else creatScore = 28;

    const killipScore = [0, 0, 20, 39, 59][killip];

    const arrestScore = cardiacArrest ? 39 : 0;
    const stScore = stDeviation ? 28 : 0;
    const enzymeScore = elevatedMarkers ? 14 : 0;

    const total = ageScore + hrScore + sbpScore + creatScore + killipScore + arrestScore + stScore + enzymeScore;

    let riskLevel: string, inhospMort: string, sixMoMort: string, tone: Tone, rec: string;
    if (total < 109) {
      riskLevel = "Low Risk";
      inhospMort = "<1%";
      sixMoMort = "<3%";
      tone = "good";
      rec = "Low risk profile. Conservative (ischaemia-guided) management appropriate. Non-invasive stress testing prior to discharge. Discharge with DAPT, statin, ACEi/ARB and beta-blocker.";
    } else if (total <= 140) {
      riskLevel = "Intermediate Risk";
      inhospMort = "1–3%";
      sixMoMort = "3–8%";
      tone = "warn";
      rec = "Intermediate risk. Early invasive strategy within 72 hours is recommended (ESC 2023). Dual antiplatelet therapy with P2Y12 inhibitor (Ticagrelor preferred). Heparin/LMWH anticoagulation.";
    } else {
      riskLevel = "High Risk";
      inhospMort = ">3%";
      sixMoMort = ">8%";
      tone = "bad";
      rec = "High risk. Early invasive strategy within 24 hours (ESC 2023). Consider immediate angiography if haemodynamically unstable. Potent antiplatelet therapy (Ticagrelor or Prasugrel + Aspirin). IV GP IIb/IIIa inhibitors may be considered.";
    }

    return { total, riskLevel, inhospMort, sixMoMort, tone, rec };
  }, [age, hr, sbp, creat, killip, cardiacArrest, stDeviation, elevatedMarkers]);

  return (
    <div className="space-y-8">
      <Section title="Vital Signs & Labs">
        <div className="grid grid-cols-2 gap-4">
          <NumberField label="Age (years)" value={age} onChange={setAge} placeholder="e.g. 68" hint="Major risk driver" />
          <NumberField label="Heart Rate (bpm)" value={hr} onChange={setHr} placeholder="e.g. 88" />
        </div>
        <NumberField label="Systolic BP (mmHg)" value={sbp} onChange={setSbp} placeholder="e.g. 130" />
        <NumberField label="Serum Creatinine (mg/dL)" value={creat} onChange={setCreat} placeholder="e.g. 1.1" step={0.01} />
      </Section>

      <Section title="Killip Class">
        <OptionListField options={killipOptions} value={killip} onChange={setKillip} />
      </Section>

      <Section title="Clinical Factors">
        <CheckboxRow label="Cardiac Arrest at Admission" checked={cardiacArrest} onChange={setCardiacArrest} points="+39" />
        <CheckboxRow
          label="ST-Segment Deviation on ECG (depression or new elevation, not in STEMI context)"
          checked={stDeviation}
          onChange={setStDeviation}
          points="+28"
        />
        <CheckboxRow
          label="Elevated Cardiac Enzymes / Troponin (any elevation above normal limit)"
          checked={elevatedMarkers}
          onChange={setElevatedMarkers}
          points="+14"
        />
      </Section>

      {result === null ? (
        <ResultPanel tone="accent" eyebrow="GRACE Score" value="—" description="Complete all numerical fields to calculate." />
      ) : (
        <ResultPanel
          tone={result.tone}
          eyebrow="GRACE Score"
          value={result.total}
          description={result.riskLevel}
          breakdown={
            <div className="flex gap-3">
              <div className="flex-1 rounded-lg bg-surface-2 p-2 text-center">
                <div className="text-[0.65rem] uppercase tracking-wide text-ink-muted">In-hospital mortality</div>
                <div className="text-lg font-bold text-ink">{result.inhospMort}</div>
              </div>
              <div className="flex-1 rounded-lg bg-surface-2 p-2 text-center">
                <div className="text-[0.65rem] uppercase tracking-wide text-ink-muted">6-month mortality</div>
                <div className="text-lg font-bold text-ink">{result.sixMoMort}</div>
              </div>
            </div>
          }
          footnote={result.rec}
        />
      )}

      <p className="text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">ESC 2023 Guidance:</strong> GRACE &gt;140 (high risk) → Early invasive strategy
        within 24h. GRACE 109–139 (intermediate) → Invasive within 72h. GRACE &lt;109 (low risk) →
        Conservative/selective invasive. This tool reproduces the classic point-based GRACE nomogram
        (Granger 2003 / Eagle 2004) — for the continuous, regularly-updated "GRACE 2.0" model used in
        some institutions, use the official calculator at{" "}
        <strong className="text-ink">gracescore.org</strong>.
      </p>
    </div>
  );
}
