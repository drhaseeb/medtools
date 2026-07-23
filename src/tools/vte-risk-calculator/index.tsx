import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";

const tabOptions = [
  { value: "dvt" as const, label: "DVT (Lower Limb)" },
  { value: "pe" as const, label: "Pulmonary Embolism" },
];

export default function VteRiskCalculator() {
  const [tab, setTab] = useState<"dvt" | "pe">("dvt");

  // DVT criteria
  const [dvtCancer, setDvtCancer] = useState(false);
  const [dvtParalysis, setDvtParalysis] = useState(false);
  const [dvtBedridden, setDvtBedridden] = useState(false);
  const [dvtTenderness, setDvtTenderness] = useState(false);
  const [dvtEntireSwollen, setDvtEntireSwollen] = useState(false);
  const [dvtCalfSwollen, setDvtCalfSwollen] = useState(false);
  const [dvtPitting, setDvtPitting] = useState(false);
  const [dvtCollateral, setDvtCollateral] = useState(false);
  const [dvtPrev, setDvtPrev] = useState(false);
  const [dvtAlt, setDvtAlt] = useState(false);

  // PE criteria
  const [peDvtSigns, setPeDvtSigns] = useState(false);
  const [peAlt, setPeAlt] = useState(false);
  const [peHr, setPeHr] = useState(false);
  const [peImmob, setPeImmob] = useState(false);
  const [pePrevVte, setPePrevVte] = useState(false);
  const [peHaemoptysis, setPeHaemoptysis] = useState(false);
  const [peCancer, setPeCancer] = useState(false);

  const { score, tone, recTitle, detail } = useMemo(() => {
    if (tab === "dvt") {
      let score = 0;
      if (dvtCancer) score += 1;
      if (dvtParalysis) score += 1;
      if (dvtBedridden) score += 1;
      if (dvtTenderness) score += 1;
      if (dvtEntireSwollen) score += 1;
      if (dvtCalfSwollen) score += 1;
      if (dvtPitting) score += 1;
      if (dvtCollateral) score += 1;
      if (dvtPrev) score += 1;
      if (dvtAlt) score -= 2;

      let tone: Tone;
      let recTitle: string;
      let detail: string;
      if (score <= 1) {
        tone = "good";
        recTitle = "DVT Unlikely";
        detail =
          "Order D-dimer. If negative (age-adjusted threshold ≥50 yrs: age × 10 µg/L), DVT is excluded — no imaging needed. If D-dimer is positive, proceed to compression ultrasound.";
      } else {
        tone = "bad";
        recTitle = "DVT Likely";
        detail =
          "Proceed directly to proximal compression USS. Do not use D-dimer alone to exclude DVT at this score. If USS negative, consider whole-leg USS or repeat USS in 1 week.";
      }
      return { score, tone, recTitle, detail };
    }

    let score = 0;
    if (peDvtSigns) score += 3;
    if (peAlt) score += 3;
    if (peHr) score += 1.5;
    if (peImmob) score += 1.5;
    if (pePrevVte) score += 1.5;
    if (peHaemoptysis) score += 1;
    if (peCancer) score += 1;

    let tone: Tone;
    let recTitle: string;
    let detail: string;
    if (score <= 4) {
      tone = "good";
      recTitle = "PE Unlikely";
      detail =
        "Order high-sensitivity D-dimer. If negative, PE excluded (sens ~97%). If positive, proceed to CTPA. Avoid empirical anticoagulation pending investigation.";
    } else {
      tone = "bad";
      recTitle = "PE Likely";
      detail =
        "Proceed to CTPA directly. Consider anticoagulation (LMWH or DOAC loading dose) before imaging if clinical suspicion is high and delay expected, unless bleeding risk prohibits. If CTPA is contraindicated, V/Q scintigraphy or bilateral compression USS.";
    }
    return { score, tone, recTitle, detail };
  }, [
    tab,
    dvtCancer,
    dvtParalysis,
    dvtBedridden,
    dvtTenderness,
    dvtEntireSwollen,
    dvtCalfSwollen,
    dvtPitting,
    dvtCollateral,
    dvtPrev,
    dvtAlt,
    peDvtSigns,
    peAlt,
    peHr,
    peImmob,
    pePrevVte,
    peHaemoptysis,
    peCancer,
  ]);

  return (
    <div className="space-y-8">
      <SegmentedField options={tabOptions} value={tab} onChange={setTab} />

      {tab === "dvt" && (
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Active Cancer — Treatment ongoing or within 6 months, or palliative"
            checked={dvtCancer}
            onChange={setDvtCancer}
            points="+1"
          />
          <CheckboxRow
            label="Paralysis, Paresis or Recent Leg Immobilisation — Plaster immobilisation within 4 weeks"
            checked={dvtParalysis}
            onChange={setDvtParalysis}
            points="+1"
          />
          <CheckboxRow
            label="Recently Bedridden ≥3 Days or Major Surgery within 12 Weeks — Under general or regional anaesthesia"
            checked={dvtBedridden}
            onChange={setDvtBedridden}
            points="+1"
          />
          <CheckboxRow
            label="Localised Tenderness Along Deep Venous System — Along femoral vein or popliteal fossa"
            checked={dvtTenderness}
            onChange={setDvtTenderness}
            points="+1"
          />
          <CheckboxRow
            label="Entire Leg Swollen"
            checked={dvtEntireSwollen}
            onChange={setDvtEntireSwollen}
            points="+1"
          />
          <CheckboxRow
            label="Calf Swelling ≥3 cm (10 cm below tibial tuberosity) — Greater than asymptomatic leg"
            checked={dvtCalfSwollen}
            onChange={setDvtCalfSwollen}
            points="+1"
          />
          <CheckboxRow
            label="Pitting Oedema Confined to Symptomatic Leg"
            checked={dvtPitting}
            onChange={setDvtPitting}
            points="+1"
          />
          <CheckboxRow
            label="Collateral Superficial Veins (Non-Varicose)"
            checked={dvtCollateral}
            onChange={setDvtCollateral}
            points="+1"
          />
          <CheckboxRow
            label="Previously Documented DVT"
            checked={dvtPrev}
            onChange={setDvtPrev}
            points="+1"
          />
          <CheckboxRow
            label="Alternative Diagnosis at Least as Likely — e.g. Baker's cyst, cellulitis, post-op swelling"
            checked={dvtAlt}
            onChange={setDvtAlt}
            points="−2"
          />
        </div>
      )}

      {tab === "pe" && (
        <div className="flex flex-col gap-2">
          <CheckboxRow
            label="Clinical Signs and Symptoms of DVT — Minimum: leg swelling + pain on palpation of deep veins"
            checked={peDvtSigns}
            onChange={setPeDvtSigns}
            points="+3"
          />
          <CheckboxRow
            label="PE is the #1 Diagnosis or Equally Likely"
            checked={peAlt}
            onChange={setPeAlt}
            points="+3"
          />
          <CheckboxRow
            label="Heart Rate > 100 bpm"
            checked={peHr}
            onChange={setPeHr}
            points="+1.5"
          />
          <CheckboxRow
            label="Immobilisation ≥3 Days or Surgery in Previous 4 Weeks"
            checked={peImmob}
            onChange={setPeImmob}
            points="+1.5"
          />
          <CheckboxRow
            label="Previous DVT or PE"
            checked={pePrevVte}
            onChange={setPePrevVte}
            points="+1.5"
          />
          <CheckboxRow
            label="Haemoptysis"
            checked={peHaemoptysis}
            onChange={setPeHaemoptysis}
            points="+1"
          />
          <CheckboxRow
            label="Malignancy (on treatment or within 6 months or palliative)"
            checked={peCancer}
            onChange={setPeCancer}
            points="+1"
          />
        </div>
      )}

      <ResultPanel
        tone={tone}
        eyebrow={tab === "dvt" ? "Wells' DVT Score" : "Wells' PE Score"}
        value={score}
        description={`${recTitle} (Score ${score})`}
        footnote={detail}
      />

      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink">Diagnostic Algorithm:</strong> DVT
        Unlikely (≤1) → D-dimer; if negative, DVT excluded. DVT Likely (≥2) →
        Proximal compression USS directly. PE Unlikely (≤4) → D-dimer; if
        negative, PE excluded. PE Likely (&gt;4) → CTPA directly.
      </div>
    </div>
  );
}
