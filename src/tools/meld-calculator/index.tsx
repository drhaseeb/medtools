import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import { SegmentedField } from "@/kit/SegmentedField";

export default function MeldCalculator() {
  const [bilirubin, setBilirubin] = useState<number | "">("");
  const [creatinine, setCreatinine] = useState<number | "">("");
  const [inr, setInr] = useState<number | "">("");
  const [sodium, setSodium] = useState<number | "">("");
  const [dialysis, setDialysis] = useState<"no" | "yes">("no");

  const result = useMemo(() => {
    if (bilirubin === "" || creatinine === "" || inr === "") return null;

    const bili = Math.max(1.0, bilirubin);
    let creat = Math.max(1.0, creatinine);
    const inrVal = Math.max(1.0, inr);

    if (dialysis === "yes") creat = 4.0;
    creat = Math.min(creat, 4.0);

    // MELD = 3.78×ln(Bilirubin) + 11.2×ln(INR) + 9.57×ln(Creatinine) + 6.43
    const meld = Math.round(
      3.78 * Math.log(bili) + 11.2 * Math.log(inrVal) + 9.57 * Math.log(creat) + 6.43,
    );
    const meldFinal = Math.max(6, Math.min(40, meld));

    // MELDNa adjustment (UNOS 2016 policy)
    let meldNa: number | null = null;
    if (sodium !== "") {
      const naAdj = Math.max(125, Math.min(137, sodium));
      let m = Math.round(
        meldFinal + 1.32 * (137 - naAdj) - 0.033 * meldFinal * (137 - naAdj),
      );
      m = Math.max(6, Math.min(40, m));
      meldNa = m;
    }

    // Mortality estimates (3-month waiting list mortality from UNOS data)
    let mort90: string;
    let tone: Tone;
    let recommendation: string;

    if (meldFinal < 10) {
      mort90 = "<2%";
      tone = "good";
      recommendation =
        "Low urgency. Standard outpatient follow-up with hepatologist. Reassess 3–6 monthly.";
    } else if (meldFinal < 15) {
      mort90 = "~6%";
      tone = "accent";
      recommendation =
        "Active monitoring. Hepatology follow-up every 3 months. Discuss transplant criteria if progressive.";
    } else if (meldFinal < 20) {
      mort90 = "~20%";
      tone = "warn";
      recommendation =
        "Eligible for transplant listing (MELD ≥15 in most centres). Refer for transplant evaluation urgently.";
    } else if (meldFinal < 25) {
      mort90 = "~30%";
      tone = "warn";
      recommendation =
        "High urgency. Active transplant listing. Hospitalisation may be required. Treat precipitants (AKI, SBP, HE).";
    } else if (meldFinal < 30) {
      mort90 = "~52%";
      tone = "bad";
      recommendation =
        "Very high mortality. Priority transplant listing. ICU-level care. Aggressive management of complications.";
    } else {
      mort90 = ">71%";
      tone = "bad";
      recommendation =
        "CRITICAL. Maximum transplant priority. Status 1 consideration if acute liver failure criteria met. Multidisciplinary ICU management.";
    }

    return { meldFinal, meldNa, mort90, tone, recommendation };
  }, [bilirubin, creatinine, inr, sodium, dialysis]);

  return (
    <div className="space-y-8">
      <Section title="Laboratory Values">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <NumberField
            label="Serum Bilirubin (mg/dL)"
            value={bilirubin}
            onChange={setBilirubin}
            step={0.1}
            placeholder="e.g. 3.2"
            hint="Min value used: 1.0"
          />
          <NumberField
            label="Serum Creatinine (mg/dL)"
            value={creatinine}
            onChange={setCreatinine}
            step={0.01}
            placeholder="e.g. 1.5"
            hint="Min 1.0; cap at 4.0 if on dialysis"
          />
          <NumberField
            label="INR"
            value={inr}
            onChange={setInr}
            step={0.01}
            placeholder="e.g. 1.8"
            hint="Min value used: 1.0"
          />
          <NumberField
            label="Serum Sodium (mEq/L) — MELDNa"
            value={sodium}
            onChange={setSodium}
            placeholder="e.g. 135"
            hint="MELDNa adjusts for hyponatraemia"
          />
        </div>
      </Section>

      <Section title="On Dialysis ≥2 Times in Last Week?">
        <SegmentedField
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes — Set creatinine to 4.0" },
          ]}
          value={dialysis}
          onChange={setDialysis}
        />
      </Section>

      {result ? (
        <ResultPanel
          tone={result.tone}
          eyebrow="MELD Score"
          value={result.meldFinal}
          valueSuffix="/40"
          description={`90-day waiting list mortality: ${result.mort90}`}
          breakdown={
            result.meldNa !== null ? (
              <span>
                MELDNa: <strong className="text-ink">{result.meldNa}</strong>
              </span>
            ) : undefined
          }
          footnote={
            <>
              <p>{result.recommendation}</p>
              <p className="mt-3">
                MELD is used by NHSBT (UK), UNOS (US) and EUROTRANSPLANT for
                organ allocation. MELDNa used in US since 2016. Values below
                minimum (1.0) are capped. Interpret in context of clinical
                trajectory.
              </p>
            </>
          }
        />
      ) : (
        <ResultPanel
          tone="accent"
          eyebrow="MELD Score"
          value="—"
          description="Enter bilirubin, creatinine and INR to calculate"
        />
      )}
    </div>
  );
}
