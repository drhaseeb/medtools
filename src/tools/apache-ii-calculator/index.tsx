import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

// Matches the source calculator's scoreVar() helper: bands are checked
// high-to-low with `value >= threshold`; the first match wins.
function bandScore(value: number, bands: [number, number][], elseScore: number): number {
  for (const [threshold, score] of bands) {
    if (value >= threshold) return score;
  }
  return elseScore;
}

export default function ApacheIiCalculator() {
  const [temp, setTemp] = useState<number | "">("");
  const [map, setMap] = useState<number | "">("");
  const [hr, setHr] = useState<number | "">("");
  const [rr, setRr] = useState<number | "">("");
  const [pao2, setPao2] = useState<number | "">("");
  const [aagap, setAagap] = useState<number | "">("");
  const [na, setNa] = useState<number | "">("");
  const [k, setK] = useState<number | "">("");
  const [cr, setCr] = useState<number | "">("");
  const [hct, setHct] = useState<number | "">("");
  const [wbc, setWbc] = useState<number | "">("");
  const [hco3, setHco3] = useState<number | "">("");
  const [gcs, setGcs] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");
  const [chronicHealth, setChronicHealth] = useState(false);
  const [admissionType, setAdmissionType] = useState<"emergency" | "elective">("emergency");

  const result = useMemo(() => {
    if (gcs === "" || age === "") return null;

    let aps = 0;

    if (temp !== "") {
      aps += bandScore(
        temp,
        [
          [41, 4],
          [39, 3],
          [38.5, 1],
          [36, 0],
          [34, 1],
          [32, 2],
          [30, 3],
        ],
        4,
      );
    }

    if (map !== "") {
      aps += bandScore(
        map,
        [
          [160, 4],
          [130, 3],
          [110, 2],
          [70, 0],
          [50, 2],
        ],
        4,
      );
    }

    if (hr !== "") {
      aps += bandScore(
        hr,
        [
          [180, 4],
          [140, 3],
          [110, 2],
          [70, 0],
          [55, 2],
          [40, 3],
        ],
        4,
      );
    }

    if (rr !== "") {
      aps += bandScore(
        rr,
        [
          [50, 4],
          [35, 3],
          [25, 1],
          [12, 0],
          [10, 1],
          [6, 2],
        ],
        4,
      );
    }

    // Oxygenation: A-a gradient takes priority over PaO2, matching the source.
    if (aagap !== "") {
      if (aagap >= 500) aps += 4;
      else if (aagap >= 350) aps += 3;
      else if (aagap >= 200) aps += 2;
      else aps += 0;
    } else if (pao2 !== "") {
      if (pao2 < 55) aps += 4;
      else if (pao2 < 60) aps += 3;
      else if (pao2 < 70) aps += 1;
      else aps += 0;
    }

    if (na !== "") {
      aps += bandScore(
        na,
        [
          [180, 4],
          [160, 3],
          [155, 2],
          [150, 1],
          [130, 0],
          [120, 2],
          [111, 3],
        ],
        4,
      );
    }

    if (k !== "") {
      aps += bandScore(
        k,
        [
          [7, 4],
          [6, 3],
          [5.5, 1],
          [3.5, 0],
          [3, 1],
          [2.5, 2],
        ],
        4,
      );
    }

    // Creatinine (source note: "simplified — ARF doubling handled externally";
    // no doubling is actually applied here, matching the original behaviour).
    if (cr !== "") {
      aps += bandScore(
        cr,
        [
          [3.5, 4],
          [2.0, 3],
          [1.5, 2],
          [0.6, 0],
        ],
        2,
      );
    }

    if (hct !== "") {
      aps += bandScore(
        hct,
        [
          [60, 4],
          [50, 2],
          [46, 1],
          [30, 0],
          [20, 2],
        ],
        4,
      );
    }

    if (wbc !== "") {
      aps += bandScore(
        wbc,
        [
          [40, 4],
          [20, 2],
          [15, 1],
          [3, 0],
          [1, 2],
        ],
        4,
      );
    }

    if (hco3 !== "") {
      aps += bandScore(
        hco3,
        [
          [52, 4],
          [41, 3],
          [32, 1],
          [22, 0],
          [18, 2],
          [15, 3],
        ],
        4,
      );
    }

    // GCS contribution: 15 - actual GCS
    aps += 15 - gcs;

    // Age points
    const ageScore = bandScore(
      age,
      [
        [75, 6],
        [65, 5],
        [55, 3],
        [45, 2],
      ],
      0,
    );

    // Chronic health
    const isEmerg = admissionType === "emergency";
    const chpScore = chronicHealth ? (isEmerg ? 5 : 2) : 0;

    const total = aps + ageScore + chpScore;

    // Predicted mortality (Knaus 1985 regression, approximate)
    const logit = -3.517 + total * 0.146;
    const mort = Math.round((1 / (1 + Math.exp(-logit))) * 100);

    let tone: Tone;
    let recommendation: string;
    if (total <= 10) {
      tone = "good";
      recommendation = "Low predicted mortality. Standard ICU care. Reassess daily.";
    } else if (total <= 20) {
      tone = "warn";
      recommendation =
        "Moderate severity. Close monitoring required. Optimise organ support. Reassess goals of care.";
    } else if (total <= 30) {
      tone = "warn";
      recommendation =
        "High severity. Significant mortality risk. Escalate organ support. Involve critical care leadership. Early family communication.";
    } else {
      tone = "bad";
      recommendation =
        "Very high predicted mortality. Maximal critical care support. Urgent discussion regarding goals of care with patient, family and multidisciplinary team. Palliative care involvement.";
    }

    return { aps, ageScore, chpScore, total, mort, tone, recommendation };
  }, [temp, map, hr, rr, pao2, aagap, na, k, cr, hct, wbc, hco3, gcs, age, chronicHealth, admissionType]);

  return (
    <div className="space-y-8">
      <Section title="Acute Physiology Variables (Worst Value in First 24h)">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <NumberField
            label="Temperature (°C)"
            value={temp}
            onChange={setTemp}
            step={0.1}
            placeholder="e.g. 38.5"
            hint="Rectal preferred"
          />
          <NumberField
            label="Mean Arterial Pressure (mmHg)"
            value={map}
            onChange={setMap}
            placeholder="e.g. 75"
            hint="MAP = (SBP + 2×DBP)/3"
          />
          <NumberField label="Heart Rate (bpm)" value={hr} onChange={setHr} placeholder="e.g. 110" />
          <NumberField
            label="Respiratory Rate (/min)"
            value={rr}
            onChange={setRr}
            placeholder="e.g. 24"
          />
          <NumberField
            label="PaO₂ (mmHg) — if FiO₂ <0.5"
            value={pao2}
            onChange={setPao2}
            placeholder="e.g. 70"
            hint="Use PaO₂ if FiO₂<50%; use A-a gradient if ≥50%"
          />
          <NumberField
            label="A-a Gradient (mmHg) — if FiO₂ ≥0.5"
            value={aagap}
            onChange={setAagap}
            placeholder="e.g. 250"
            hint="A-a = 713×FiO₂ - PaCO₂/0.8 - PaO₂"
          />
          <NumberField label="Serum Na⁺ (mEq/L)" value={na} onChange={setNa} placeholder="140" />
          <NumberField
            label="Serum K⁺ (mEq/L)"
            value={k}
            onChange={setK}
            step={0.1}
            placeholder="4.0"
          />
          <NumberField
            label="Serum Creatinine (mg/dL)"
            value={cr}
            onChange={setCr}
            step={0.01}
            placeholder="1.0"
          />
          <NumberField
            label="Haematocrit (%)"
            value={hct}
            onChange={setHct}
            step={0.1}
            placeholder="e.g. 38"
          />
          <NumberField
            label="WBC (×10³/mm³)"
            value={wbc}
            onChange={setWbc}
            step={0.1}
            placeholder="e.g. 12"
          />
          <NumberField
            label="Serum HCO₃⁻ (mEq/L) — only if no ABG"
            value={hco3}
            onChange={setHco3}
            step={0.1}
            placeholder="24"
            hint="Use pH + PaCO₂ if ABG available (use GCS for pH points)"
          />
        </div>
      </Section>

      <Section title="GCS Score (Worst in 24h)">
        <NumberField
          label="GCS Total (3–15)"
          value={gcs}
          onChange={setGcs}
          placeholder="15"
          min={3}
          max={15}
        />
      </Section>

      <Section title="Age">
        <NumberField label="Patient Age (years)" value={age} onChange={setAge} placeholder="e.g. 55" />
      </Section>

      <Section title="Chronic Health Points">
        <CheckboxRow
          label="Severe organ insufficiency or immunocompromised (liver cirrhosis, NYHA IV HF, severe COPD, dialysis-dependent, immunosuppressed)"
          checked={chronicHealth}
          onChange={setChronicHealth}
          points="+5 / +2"
        />
        <SegmentedField
          label="Admission Type (for chronic health scoring)"
          options={[
            { value: "emergency", label: "Emergency / Non-operative" },
            { value: "elective", label: "Post-operative (elective)" },
          ]}
          value={admissionType}
          onChange={setAdmissionType}
        />
      </Section>

      {result ? (
        <ResultPanel
          tone={result.tone}
          eyebrow="APACHE II Score"
          value={result.total}
          description={`Predicted in-hospital mortality ≈ ${result.mort}%`}
          breakdown={`APS: ${result.aps} · Age: +${result.ageScore} · Chronic: +${result.chpScore}`}
          footnote={
            <>
              <p>{result.recommendation}</p>
              <p className="mt-3">
                APACHE II is for risk stratification and benchmarking — not
                individual prognosis. Use in context of clinical trajectory,
                comorbidities and response to treatment.
              </p>
            </>
          }
        />
      ) : (
        <ResultPanel
          tone="accent"
          eyebrow="APACHE II Score"
          value="—"
          description="Please enter GCS and Age at minimum"
        />
      )}
    </div>
  );
}
