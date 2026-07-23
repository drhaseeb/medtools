import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

type Sex = "male" | "female";
type HeightUnit = "cm" | "in";

const toneClasses: Record<Tone, string> = {
  good: "border-good/30 bg-good-soft text-good",
  warn: "border-warn/30 bg-warn-soft text-warn",
  bad: "border-bad/30 bg-bad-soft text-bad",
  accent: "border-accent/30 bg-accent-soft text-accent",
};

export default function IbwCalculator() {
  const [sex, setSex] = useState<Sex>("male");
  const [height, setHeight] = useState<number | "">("");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [abw, setAbw] = useState<number | "">("");

  const result = useMemo(() => {
    if (height === "") return null;
    const hRaw = height;

    const heightIn = heightUnit === "cm" ? hRaw / 2.54 : hRaw;
    const heightCm = heightUnit === "cm" ? hRaw : hRaw * 2.54;
    const heightM = heightCm / 100;
    const inchesOver5ft = Math.max(heightIn - 60, 0);

    // Devine Formula (1974) — standard for dosing
    const ibw = sex === "male" ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft;

    const actBW = abw;

    let bmi: number | null = null;
    let bmiLabel = "";
    let bmiTone: Tone = "accent";
    if (actBW !== "" && actBW > 0 && heightM > 0) {
      bmi = actBW / (heightM * heightM);
      if (bmi < 18.5) {
        bmiLabel = "Underweight";
        bmiTone = "accent";
      } else if (bmi < 25.0) {
        bmiLabel = "Normal Weight";
        bmiTone = "good";
      } else if (bmi < 30.0) {
        bmiLabel = "Overweight";
        bmiTone = "warn";
      } else if (bmi < 35.0) {
        bmiLabel = "Obese (Class I)";
        bmiTone = "warn";
      } else if (bmi < 40.0) {
        bmiLabel = "Obese (Class II)";
        bmiTone = "bad";
      } else {
        bmiLabel = "Obese (Class III)";
        bmiTone = "bad";
      }
    }

    // Adjusted Body Weight (ABW) for obese patients — used when actual BW > 120% of IBW.
    // Cited thresholds vary by institution/drug (commonly 120-130% of IBW); 120% is used
    // here as the more conservative, widely-cited trigger point (e.g. aminoglycoside dosing
    // protocols). Formula: IBW + 0.4 × (Actual BW − IBW).
    let abwCalc: number | null = null;
    if (actBW !== "" && actBW > ibw * 1.2) {
      abwCalc = ibw + 0.4 * (actBW - ibw);
    }

    // Lean Body Weight (Janmahasatian 2005)
    let lbw: number | null = null;
    if (actBW !== "" && actBW > 0 && heightM > 0 && bmi !== null) {
      lbw = sex === "male" ? (9270 * actBW) / (6680 + 216 * bmi) : (9270 * actBW) / (8780 + 244 * bmi);
    }

    const shortNote = heightIn < 60;

    return { ibw, bmi, bmiLabel, bmiTone, actBW, abwCalc, lbw, shortNote };
  }, [sex, height, heightUnit, abw]);

  return (
    <div className="space-y-8">
      <Section title="Patient">
        <SegmentedField<Sex>
          label="Sex"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          value={sex}
          onChange={setSex}
        />

        <div className="flex gap-2">
          <div className="flex-1">
            <NumberField label="Height" value={height} onChange={setHeight} placeholder="Enter value" step={0.1} />
          </div>
          <div className="w-32 pt-6">
            <SegmentedField<HeightUnit>
              options={[
                { value: "cm", label: "cm" },
                { value: "in", label: "inches" },
              ]}
              value={heightUnit}
              onChange={setHeightUnit}
            />
          </div>
        </div>

        <NumberField
          label="Actual Body Weight (kg)"
          value={abw}
          onChange={setAbw}
          placeholder="e.g. 85"
          step={0.1}
          hint="Used to calculate ABW and BMI"
        />
      </Section>

      {result === null ? (
        <ResultPanel tone="accent" eyebrow="IBW (Devine)" value="—" description="Enter height to calculate." />
      ) : (
        <ResultPanel
          tone="accent"
          eyebrow="IBW (Devine)"
          value={result.ibw.toFixed(1)}
          valueSuffix="kg"
          breakdown={
            <div className="grid grid-cols-2 gap-3">
              {result.bmi !== null && (
                <div className={`rounded-xl border px-3 py-3 text-center ${toneClasses[result.bmiTone]}`}>
                  <div className="text-[0.65rem] font-bold uppercase tracking-widest">BMI</div>
                  <div className="text-xl font-bold">{result.bmi.toFixed(1)}</div>
                  <div className="text-xs text-ink-muted">{result.bmiLabel}</div>
                </div>
              )}
              {result.actBW !== "" && (
                <div className="rounded-xl border border-line px-3 py-3 text-center">
                  <div className="text-[0.65rem] font-bold uppercase tracking-widest text-ink-muted">Actual BW</div>
                  <div className="text-xl font-bold text-ink">{result.actBW.toFixed(1)}</div>
                  <div className="text-xs text-ink-muted">kg</div>
                </div>
              )}
              {result.lbw !== null && (
                <div className="rounded-xl border border-good/30 bg-good-soft px-3 py-3 text-center text-good">
                  <div className="text-[0.65rem] font-bold uppercase tracking-widest">Lean BW (LBW)</div>
                  <div className="text-xl font-bold">{result.lbw.toFixed(1)}</div>
                  <div className="text-xs text-ink-muted">kg</div>
                </div>
              )}
            </div>
          }
          footnote={
            <>
              {result.abwCalc !== null && (
                <div className="mb-3 rounded-xl border border-warn/30 bg-warn-soft p-3">
                  <div className="text-[0.65rem] font-bold uppercase tracking-widest text-warn">
                    Adjusted Body Weight (ABW)
                  </div>
                  <span className="text-lg font-bold text-warn">{result.abwCalc.toFixed(1)} kg</span>
                  <div className="mt-1 text-xs text-ink-muted">
                    Use for drug dosing when Actual BW &gt;120% of IBW (e.g. aminoglycosides, heparin, LMWH — exact
                    threshold varies 120–130% by institution/protocol). Formula: IBW + 0.4 × (Actual BW − IBW)
                  </div>
                </div>
              )}
              {result.shortNote && (
                <div className="mb-3 text-xs font-medium text-warn">
                  ⚠ Patient is under 5 ft. Devine formula assumes minimum height of 5 ft. IBW is set to base value.
                </div>
              )}
              <strong className="text-ink">Dosing Weight Guide:</strong> Use <strong>IBW</strong> for most drugs. Use{" "}
              <strong>ABW</strong> if obese (for aminoglycosides, vancomycin loading). Use{" "}
              <strong>ABW (0.25×)</strong> for propofol. Confirm per local antimicrobial guidelines.
            </>
          }
        />
      )}
    </div>
  );
}
