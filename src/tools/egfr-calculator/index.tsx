import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

type Sex = "male" | "female";
type Unit = "mgdl" | "umol";

const stageRef: { stage: string; range: string; label: string; tone: Tone }[] = [
  { stage: "G1", range: "≥90", label: "Normal", tone: "good" },
  { stage: "G2", range: "60–89", label: "Mildly ↓", tone: "accent" },
  { stage: "G3a", range: "45–59", label: "Mild-Mod ↓", tone: "warn" },
  { stage: "G3b", range: "30–44", label: "Mod-Sev ↓", tone: "warn" },
  { stage: "G4", range: "15–29", label: "Severely ↓", tone: "bad" },
  { stage: "G5", range: "<15", label: "Kidney Failure", tone: "bad" },
];

const toneClasses: Record<Tone, string> = {
  good: "border-good/30 bg-good-soft text-good",
  warn: "border-warn/30 bg-warn-soft text-warn",
  bad: "border-bad/30 bg-bad-soft text-bad",
  accent: "border-accent/30 bg-accent-soft text-accent",
};

export default function EgfrCalculator() {
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState<number | "">("");
  const [creat, setCreat] = useState<number | "">("");
  const [unit, setUnit] = useState<Unit>("mgdl");

  const result = useMemo(() => {
    if (age === "" || creat === "") return null;
    if (age < 18) return { invalid: true as const };

    const scr = unit === "umol" ? creat / 88.42 : creat;

    const kappa = sex === "female" ? 0.7 : 0.9;
    const alpha = sex === "female" ? -0.241 : -0.302;
    const sexFactor = sex === "female" ? 1.012 : 1.0;
    const ratio = scr / kappa;
    const term1 = Math.min(ratio, 1) ** alpha;
    const term2 = Math.max(ratio, 1) ** -1.2;
    const egfr = 142 * term1 * term2 * 0.9938 ** age * sexFactor;
    const egfrRound = Math.round(egfr);

    let stage: string, stageLabel: string, tone: Tone;
    if (egfr >= 90) {
      stage = "G1";
      stageLabel = "Normal or High";
      tone = "good";
    } else if (egfr >= 60) {
      stage = "G2";
      stageLabel = "Mildly Decreased";
      tone = "accent";
    } else if (egfr >= 45) {
      stage = "G3a";
      stageLabel = "Mildly–Moderately Decreased";
      tone = "warn";
    } else if (egfr >= 30) {
      stage = "G3b";
      stageLabel = "Moderately–Severely Decreased";
      tone = "warn";
    } else if (egfr >= 15) {
      stage = "G4";
      stageLabel = "Severely Decreased";
      tone = "bad";
    } else {
      stage = "G5";
      stageLabel = "Kidney Failure (ESRD)";
      tone = "bad";
    }

    let guidance: string;
    if (egfr >= 60) guidance = "No significant CKD. Re-check annually if risk factors present.";
    else if (egfr >= 45) guidance = "Monitor every 6–12 months. Review nephrotoxic drugs & dose-adjust.";
    else if (egfr >= 30) guidance = "Nephrology referral recommended. Dose-adjust medications. Screen for anaemia & bone disease.";
    else if (egfr >= 15) guidance = "Pre-ESRD management. Urgent nephrology referral. Prepare for RRT.";
    else guidance = "Kidney Failure. Immediate nephrology. RRT (dialysis/transplant) planning required.";

    return { invalid: false as const, egfrRound, stage, stageLabel, tone, guidance };
  }, [sex, age, creat, unit]);

  return (
    <div className="space-y-8">
      <Section title="Patient">
        <SegmentedField<Sex>
          label="Sex Assigned at Birth"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          value={sex}
          onChange={setSex}
        />
        <NumberField
          label="Age (years)"
          value={age}
          onChange={setAge}
          placeholder="e.g. 52"
          min={18}
          max={110}
        />
      </Section>

      <Section title="Serum Creatinine">
        <div className="flex gap-2">
          <div className="flex-1">
            <NumberField
              label="Serum Creatinine"
              value={creat}
              onChange={setCreat}
              placeholder="Enter value"
              step={0.01}
              hint="Normal: 0.6–1.2 mg/dL (men); 0.5–1.1 mg/dL (women)"
            />
          </div>
          <div className="w-36 pt-6">
            <SegmentedField<Unit>
              options={[
                { value: "mgdl", label: "mg/dL" },
                { value: "umol", label: "µmol/L" },
              ]}
              value={unit}
              onChange={setUnit}
            />
          </div>
        </div>
      </Section>

      {result === null ? (
        <ResultPanel
          tone="accent"
          eyebrow="eGFR"
          value="—"
          description="Enter age and serum creatinine to calculate."
        />
      ) : result.invalid ? (
        <ResultPanel
          tone="warn"
          eyebrow="eGFR"
          value="—"
          description="This calculator is validated for adults (≥18 years)."
        />
      ) : (
        <ResultPanel
          tone={result.tone}
          eyebrow={`CKD Stage ${result.stage}`}
          value={result.egfrRound}
          valueSuffix="mL/min/1.73m²"
          description={result.stageLabel}
          footnote={
            <>
              {result.guidance}
              <div className="mt-2 text-xs text-ink-muted">
                CKD requires eGFR &lt;60 on ≥2 occasions &gt;3 months apart. Confirm with uACR.
              </div>
            </>
          }
        />
      )}

      <Section title="CKD Stage Reference">
        <div className="grid grid-cols-3 gap-2">
          {stageRef.map((s) => (
            <div
              key={s.stage}
              className={`rounded-lg border px-2 py-2 text-center text-xs font-semibold ${toneClasses[s.tone]}`}
            >
              {s.stage}: {s.range}
              <div className="mt-0.5 font-normal text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
