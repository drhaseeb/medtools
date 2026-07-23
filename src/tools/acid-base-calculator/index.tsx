import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

type Finding = { label: string; value: string; cls: string };

export default function AcidBaseCalculator() {
  const [ph, setPh] = useState<number | "">("");
  const [pco2, setPco2] = useState<number | "">("");
  const [hco3, setHco3] = useState<number | "">("");
  const [pao2, setPao2] = useState<number | "">("");
  const [na, setNa] = useState<number | "">("");
  const [cl, setCl] = useState<number | "">("");
  const [alb, setAlb] = useState<number | "">("");
  const [k, setK] = useState<number | "">("");

  const result = useMemo(() => {
    if (ph === "" || pco2 === "" || hco3 === "") return null;

    const findings: Finding[] = [];
    let disorder = "";
    let tone: Tone = "accent";
    let headline = "";

    const acidemic = ph < 7.35;
    const alkalemic = ph > 7.45;
    const respiratoryAcidosis = pco2 > 45;
    const respiratoryAlkalosis = pco2 < 35;
    const metabolicAcidosis = hco3 < 22;
    const metabolicAlkalosis = hco3 > 26;

    if (acidemic) {
      headline = "Acidemia";
      if (metabolicAcidosis && respiratoryAlkalosis) {
        disorder = "Primary Metabolic Acidosis + Respiratory Compensation";
      } else if (respiratoryAcidosis && metabolicAlkalosis) {
        disorder = "Primary Respiratory Acidosis + Metabolic Compensation";
      } else if (metabolicAcidosis && respiratoryAcidosis) {
        disorder = "Mixed: Metabolic + Respiratory Acidosis (no compensation)";
      } else if (metabolicAcidosis) {
        disorder = "Metabolic Acidosis (uncompensated)";
      } else {
        disorder = "Respiratory Acidosis (uncompensated)";
      }
      tone = "bad";
      findings.push({ label: "Primary Disorder", value: "Acidemia (pH < 7.35)", cls: "text-bad" });
    } else if (alkalemic) {
      headline = "Alkalemia";
      if (metabolicAlkalosis && respiratoryAcidosis) {
        disorder = "Primary Metabolic Alkalosis + Respiratory Compensation";
      } else if (respiratoryAlkalosis && metabolicAcidosis) {
        disorder = "Primary Respiratory Alkalosis + Metabolic Compensation";
      } else if (metabolicAlkalosis && respiratoryAlkalosis) {
        disorder = "Mixed: Metabolic + Respiratory Alkalosis (no compensation)";
      } else if (metabolicAlkalosis) {
        disorder = "Metabolic Alkalosis (uncompensated)";
      } else {
        disorder = "Respiratory Alkalosis (uncompensated)";
      }
      tone = "accent";
      findings.push({ label: "Primary Disorder", value: "Alkalemia (pH > 7.45)", cls: "text-accent" });
    } else {
      headline = "Normal pH";
      disorder = "Normal pH (7.35–7.45)";
      if (metabolicAcidosis && respiratoryAlkalosis) disorder += " — Possible mixed disorder";
      if (metabolicAlkalosis && respiratoryAcidosis) disorder += " — Possible mixed disorder";
      tone = "good";
      findings.push({ label: "pH", value: "Normal", cls: "text-good" });
    }

    // Compensation check (Winter's formula for metabolic acidosis)
    if (metabolicAcidosis && acidemic) {
      const expectedPco2 = 1.5 * hco3 + 8; // ±2
      if (pco2 > expectedPco2 + 2)
        findings.push({
          label: "Compensation",
          value: `Inadequate (expected PCO₂ ≈ ${expectedPco2.toFixed(0)}±2 mmHg) — Concomitant resp. acidosis?`,
          cls: "text-bad",
        });
      else if (pco2 < expectedPco2 - 2)
        findings.push({
          label: "Compensation",
          value: "Excess resp. compensation (resp. alkalosis also present)",
          cls: "text-accent",
        });
      else
        findings.push({
          label: "Compensation",
          value: `Adequate respiratory compensation (expected ≈ ${expectedPco2.toFixed(0)}±2 mmHg)`,
          cls: "text-good",
        });
    }
    if (respiratoryAcidosis && acidemic) {
      // Acute: ΔHCO₃ = 1 per 10 mmHg ΔPCO₂; Chronic: ΔHCO₃ = 3.5 per 10 mmHg ΔPCO₂
      const deltaPco2 = pco2 - 40;
      const expectedHco3Acute = 24 + (deltaPco2 / 10) * 1;
      const expectedHco3Chronic = 24 + (deltaPco2 / 10) * 3.5;
      findings.push({
        label: "Compensation (respiratory acidosis)",
        value: `Expected HCO₃: acute ≈ ${expectedHco3Acute.toFixed(1)}, chronic ≈ ${expectedHco3Chronic.toFixed(1)} mEq/L`,
        cls: "text-warn",
      });
    }
    if (metabolicAlkalosis && alkalemic) {
      const expectedPco2 = 40 + 0.7 * (hco3 - 24); // ±5
      findings.push({
        label: "Compensation",
        value: `Expected PCO₂ ≈ ${expectedPco2.toFixed(0)}±5 mmHg (Winter's adaptation)`,
        cls: "text-warn",
      });
    }
    if (respiratoryAlkalosis && alkalemic) {
      const deltaPco2 = 40 - pco2;
      const expectedHco3Acute = 24 - (deltaPco2 / 10) * 2;
      const expectedHco3Chronic = 24 - (deltaPco2 / 10) * 5;
      findings.push({
        label: "Compensation (resp. alkalosis)",
        value: `Expected HCO₃: acute ≈ ${expectedHco3Acute.toFixed(1)}, chronic ≈ ${expectedHco3Chronic.toFixed(1)} mEq/L`,
        cls: "text-warn",
      });
    }

    // Anion Gap
    if (na !== "" && cl !== "") {
      const ag = na - cl - hco3;

      let corrAG = ag;
      let corrNote = "";
      if (alb !== "") {
        // Albumin-corrected AG: AG + 2.5×(4-albumin)
        corrAG = ag + 2.5 * (4.0 - alb);
        corrNote = ` (Albumin-corrected: ${corrAG.toFixed(1)} mEq/L)`;
      }

      const agElevated = corrAG > 12;
      findings.push({
        label: "Anion Gap",
        value: `${ag.toFixed(1)} mEq/L${corrNote}${agElevated ? " — ELEVATED (>12)" : " — Normal (≤12)"}`,
        cls: agElevated ? "text-bad" : "text-good",
      });

      if (agElevated) {
        findings.push({
          label: "HAGMA Causes (MUDPILES)",
          value: "Methanol, Uraemia, DKA, Paracetamol/Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates",
          cls: "text-ink-muted",
        });
      } else if (metabolicAcidosis && !agElevated) {
        findings.push({
          label: "NAGMA Causes (HARDUP)",
          value: "Hyperalimentation, Acetazolamide, RTA, Diarrhoea, Ureteral diversion, Pancreatic fistula",
          cls: "text-ink-muted",
        });
      }

      // Delta-delta ratio (if AG elevated + metabolic acidosis)
      if (agElevated && metabolicAcidosis && alb !== "") {
        const deltaAG = corrAG - 12;
        const deltaHco3 = 24 - hco3;
        const dd = deltaAG / deltaHco3;
        let ddInterp = "";
        if (dd < 0.4) ddInterp = "Likely pure NAGMA (or mixed)";
        else if (dd < 1) ddInterp = "Mixed HAGMA + NAGMA";
        else if (dd <= 2) ddInterp = "Pure HAGMA";
        else ddInterp = "HAGMA + concurrent metabolic alkalosis";
        findings.push({
          label: "Delta-Delta Ratio",
          value: `${dd.toFixed(2)} — ${ddInterp}`,
          cls: "text-accent",
        });
      }
    }

    // Oxygenation
    if (pao2 !== "") {
      const aaGrad = 150 - pco2 / 0.8 - pao2; // On room air, sea level
      findings.push({
        label: "A-a Gradient (room air estimate)",
        value: `${aaGrad.toFixed(0)} mmHg${aaGrad > 20 ? " — ELEVATED (hypoxia not from hypoventilation alone)" : " — Normal"}`,
        cls: aaGrad > 20 ? "text-bad" : "text-good",
      });

      let o2status = "";
      if (pao2 >= 80) o2status = "Normal";
      else if (pao2 >= 60) o2status = "Mild Hypoxaemia";
      else if (pao2 >= 40) o2status = "Moderate Hypoxaemia";
      else o2status = "Severe Hypoxaemia";
      findings.push({
        label: "PaO₂ Status",
        value: `${pao2} mmHg — ${o2status}`,
        cls: pao2 >= 80 ? "text-good" : pao2 >= 60 ? "text-warn" : "text-bad",
      });
    }

    return { findings, disorder, tone, headline };
  }, [ph, pco2, hco3, pao2, na, cl, alb]);

  return (
    <div className="space-y-8">
      <Section title="Blood Gas">
        <div className="grid grid-cols-2 gap-4">
          <NumberField label="pH" value={ph} onChange={setPh} step={0.01} placeholder="7.40" hint="Normal: 7.35–7.45" />
          <NumberField
            label="PaCO₂ (mmHg)"
            value={pco2}
            onChange={setPco2}
            step={0.1}
            placeholder="40"
            hint="Normal: 35–45 mmHg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <NumberField
            label="HCO₃⁻ (mEq/L)"
            value={hco3}
            onChange={setHco3}
            step={0.1}
            placeholder="24"
            hint="Normal: 22–26 mEq/L"
          />
          <NumberField
            label="PaO₂ (mmHg) (optional)"
            value={pao2}
            onChange={setPao2}
            step={0.1}
            placeholder="95"
            hint="Normal on air: 80–100 mmHg"
          />
        </div>
      </Section>

      <Section title="Electrolytes for Anion Gap">
        <div className="grid grid-cols-2 gap-4">
          <NumberField label="Na⁺ (mEq/L)" value={na} onChange={setNa} placeholder="140" min={100} max={180} hint="Normal: 135–145" />
          <NumberField label="Cl⁻ (mEq/L)" value={cl} onChange={setCl} placeholder="105" min={70} max={130} hint="Normal: 98–106" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <NumberField
            label="Albumin (g/dL) (for corrected AG)"
            value={alb}
            onChange={setAlb}
            placeholder="4.0"
            step={0.1}
          />
          <NumberField label="K⁺ (mEq/L) (optional)" value={k} onChange={setK} placeholder="4.0" step={0.1} />
        </div>
      </Section>

      {result === null ? (
        <ResultPanel tone="accent" eyebrow="Primary Diagnosis" value="—" description="Enter pH, PaCO₂ and HCO₃⁻ at minimum." />
      ) : (
        <ResultPanel
          tone={result.tone}
          eyebrow="Primary Diagnosis"
          value={result.headline}
          description={result.disorder}
          breakdown={
            <div className="divide-y divide-line/60 rounded-xl border border-line">
              {result.findings.map((f, i) => (
                <div key={i} className="px-4 py-2.5 text-sm">
                  <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">{f.label}: </span>
                  <span className={f.cls}>{f.value}</span>
                </div>
              ))}
            </div>
          }
        />
      )}
    </div>
  );
}
