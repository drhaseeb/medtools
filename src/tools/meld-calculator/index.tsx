import { useMemo, useState } from "react";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import { SegmentedField } from "@/kit/SegmentedField";

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

// Approximate 90-day waitlist mortality by MELD decade band, per the
// widely cited OPTN/Kamath cohort figures (Wiesner R, et al. Gastroenterology.
// 2003;124(1):91-96): ~1.9% (<10), ~6.0% (10-19), ~19.6% (20-29),
// ~52.6% (30-39), ~71.3% (≥40). These decade bands — not finer 5-point
// subdivisions — are the figures actually validated in the source cohort.
function mortalityBand(score: number) {
  if (score < 10) return "~1.9%";
  if (score < 20) return "~6.0%";
  if (score < 30) return "~19.6%";
  if (score < 40) return "~52.6%";
  return "~71.3%";
}

function bandInfo(score: number): { tone: Tone; recommendation: string } {
  if (score < 10) {
    return {
      tone: "good",
      recommendation:
        "Low urgency. Standard outpatient hepatology follow-up. Reassess 3–6 monthly.",
    };
  } else if (score < 15) {
    return {
      tone: "accent",
      recommendation:
        "Active monitoring. Hepatology follow-up every 3 months. Discuss transplant-centre referral if trajectory is progressive.",
    };
  } else if (score < 20) {
    return {
      tone: "warn",
      recommendation:
        "Eligible for transplant listing at most centres (MELD ≥15). Refer for formal transplant evaluation.",
    };
  } else if (score < 25) {
    return {
      tone: "warn",
      recommendation:
        "High urgency. Active transplant listing. Hospitalisation may be required. Treat precipitants (AKI, SBP, GI bleed, HE).",
    };
  } else if (score < 30) {
    return {
      tone: "bad",
      recommendation:
        "Very high mortality. Priority transplant listing. ICU-level care. Aggressive management of complications.",
    };
  }
  return {
    tone: "bad",
    recommendation:
      "CRITICAL. Maximum transplant priority. Status 1 consideration if acute liver failure criteria met. Multidisciplinary ICU management.",
  };
}

export default function MeldCalculator() {
  const [sex, setSex] = useState<"female" | "male">("male");
  const [bilirubin, setBilirubin] = useState<number | "">("");
  const [creatinine, setCreatinine] = useState<number | "">("");
  const [inr, setInr] = useState<number | "">("");
  const [sodium, setSodium] = useState<number | "">("");
  const [albumin, setAlbumin] = useState<number | "">("");
  const [dialysis, setDialysis] = useState<"no" | "yes">("no");

  const result = useMemo(() => {
    if (bilirubin === "" || creatinine === "" || inr === "") return null;

    const bili = Math.max(1.0, bilirubin);
    const inrVal = Math.max(1.0, inr);

    // ---- MELD 3.0 (OPTN standard since 13 July 2023) ----
    // Kim WR, Mannalithara A, Heimbach JK, et al. MELD 3.0: The Model for
    // End-Stage Liver Disease Updated for the Modern Era. Gastroenterology.
    // 2021;161(6):1887-1895.e4.
    let meld3: number | null = null;
    if (albumin !== "" && sodium !== "") {
      const na30 = clamp(sodium, 125, 137);
      const alb30 = clamp(albumin, 1.5, 3.5);
      let cr30 = Math.max(1.0, creatinine);
      cr30 = dialysis === "yes" ? 3.0 : Math.min(cr30, 3.0);

      const femaleTerm = sex === "female" ? 1.33 : 0;
      const raw =
        femaleTerm +
        4.56 * Math.log(bili) +
        0.82 * (137 - na30) -
        0.24 * (137 - na30) * Math.log(bili) +
        9.09 * Math.log(inrVal) +
        11.14 * Math.log(cr30) +
        1.85 * (3.5 - alb30) -
        1.83 * (3.5 - alb30) * Math.log(cr30) +
        6;

      meld3 = Math.max(6, Math.min(40, Math.round(raw)));
    }

    // ---- Legacy MELD / MELDNa (pre-2023 formula, kept for education/comparison) ----
    // Kamath PS, et al. Hepatology. 2001;33(2):464-470 (original MELD).
    // UNOS MELDNa policy in effect Jan 2016.
    let creatLegacy = Math.max(1.0, creatinine);
    creatLegacy = dialysis === "yes" ? 4.0 : Math.min(creatLegacy, 4.0);

    const meldLegacyRaw =
      3.78 * Math.log(bili) + 11.2 * Math.log(inrVal) + 9.57 * Math.log(creatLegacy) + 6.43;
    const meldLegacy = Math.max(6, Math.min(40, Math.round(meldLegacyRaw)));

    let meldNaLegacy: number | null = null;
    if (sodium !== "") {
      const naAdj = clamp(sodium, 125, 137);
      let m = Math.round(
        meldLegacy + 1.32 * (137 - naAdj) - 0.033 * meldLegacy * (137 - naAdj),
      );
      meldNaLegacy = Math.max(6, Math.min(40, m));
    }

    const featured = meld3 ?? meldNaLegacy ?? meldLegacy;
    const { tone, recommendation } = bandInfo(featured);
    const mort90 = mortalityBand(featured);

    return {
      meld3,
      meldLegacy,
      meldNaLegacy,
      featured,
      tone,
      recommendation,
      mort90,
      usingLegacyFallback: meld3 === null,
    };
  }, [sex, bilirubin, creatinine, inr, sodium, albumin, dialysis]);

  return (
    <div className="space-y-8">
      <Section title="Patient Sex (required for MELD 3.0)">
        <SegmentedField
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          value={sex}
          onChange={setSex}
        />
      </Section>

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
            hint="Min 1.0; capped 3.0 (MELD 3.0) / 4.0 (legacy)"
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
            label="Serum Sodium (mEq/L)"
            value={sodium}
            onChange={setSodium}
            placeholder="e.g. 135"
            hint="Clamped to 125–137"
          />
          <NumberField
            label="Serum Albumin (g/dL) — required for MELD 3.0"
            value={albumin}
            onChange={setAlbumin}
            step={0.1}
            placeholder="e.g. 2.8"
            hint="Clamped to 1.5–3.5"
          />
        </div>
      </Section>

      <Section title="Dialysis ≥2 Times in Last Week, or ≥24h CRRT?">
        <SegmentedField
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes — creatinine set to formula max" },
          ]}
          value={dialysis}
          onChange={setDialysis}
        />
      </Section>

      {result ? (
        <ResultPanel
          tone={result.tone}
          eyebrow={result.usingLegacyFallback ? "MELD Score (legacy — add albumin & sodium for MELD 3.0)" : "MELD 3.0 Score (current OPTN standard)"}
          value={result.featured}
          valueSuffix="/40"
          description={`Approx. 90-day waitlist mortality: ${result.mort90}`}
          breakdown={
            <span>
              Legacy MELD: <strong className="text-ink">{result.meldLegacy}</strong>
              {result.meldNaLegacy !== null && (
                <>
                  {" "}· MELDNa: <strong className="text-ink">{result.meldNaLegacy}</strong>
                </>
              )}
              {result.meld3 !== null && (
                <>
                  {" "}· MELD 3.0: <strong className="text-ink">{result.meld3}</strong>
                </>
              )}
            </span>
          }
          footnote={
            <>
              <p>{result.recommendation}</p>
              <p className="mt-3">
                <strong className="text-ink">MELD 3.0</strong> has been the
                sole OPTN/UNOS liver allocation standard in the United States
                since 13 July 2023, replacing MELDNa. It adds female sex and
                serum albumin (plus interaction terms) specifically to correct
                the systematic under-scoring of women that occurred under the
                creatinine-based legacy formula. Enter sex and albumin above
                to see the current score; the legacy MELD/MELDNa values are
                shown alongside for education and historical comparison only
                and should not be used for allocation decisions.
              </p>
            </>
          }
        />
      ) : (
        <ResultPanel
          tone="accent"
          eyebrow="MELD Score"
          value="—"
          description="Enter bilirubin, creatinine and INR to calculate (add sex, sodium and albumin for the current MELD 3.0 formula)"
        />
      )}
    </div>
  );
}
