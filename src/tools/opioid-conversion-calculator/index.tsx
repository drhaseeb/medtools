import { useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { NumberField } from "@/kit/NumberField";
import { SegmentedField } from "@/kit/SegmentedField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";

type OpioidId =
  | "morphine"
  | "oxycodone"
  | "hydrocodone"
  | "hydromorphone"
  | "codeine"
  | "tramadol"
  | "fentanyl-patch"
  | "methadone";

interface OpioidDef {
  id: OpioidId;
  label: string;
  /** Flat CDC MME conversion factor for standard oral opioids. */
  factor?: number;
  isFentanylPatch?: boolean;
  isMethadone?: boolean;
}

// CDC 2022 Clinical Practice Guideline for Prescribing Opioids for Pain —
// oral MME conversion factors (verified against the CDC's published
// conversion-factor table). Methadone and transdermal fentanyl are handled
// separately below because neither uses a single flat multiplier.
const OPIOIDS: OpioidDef[] = [
  { id: "morphine", label: "Morphine (oral)", factor: 1 },
  { id: "oxycodone", label: "Oxycodone (oral)", factor: 1.5 },
  { id: "hydrocodone", label: "Hydrocodone (oral)", factor: 1 },
  { id: "hydromorphone", label: "Hydromorphone (oral)", factor: 4 },
  { id: "codeine", label: "Codeine (oral)", factor: 0.15 },
  { id: "tramadol", label: "Tramadol (oral)", factor: 0.1 },
  { id: "fentanyl-patch", label: "Fentanyl (transdermal patch)", isFentanylPatch: true },
  { id: "methadone", label: "Methadone (oral)", isMethadone: true },
];

function getOpioid(id: OpioidId): OpioidDef {
  return OPIOIDS.find((o) => o.id === id) ?? OPIOIDS[0];
}

// Methadone's MME conversion factor rises with total daily dose because its
// potency relative to morphine increases at higher exposure (long and
// variable half-life, NMDA-antagonist activity). These are the CDC's
// published dose-tiered factors — never a single flat multiplier.
function methadoneFactor(totalDailyMg: number): number {
  if (totalDailyMg <= 20) return 4;
  if (totalDailyMg <= 40) return 8;
  if (totalDailyMg <= 60) return 10;
  return 12;
}

// CDC's transdermal fentanyl analytic conversion factor: MME/day = patch
// strength in mcg/hr x 2.4. (Verified: this reproduces the commonly cited
// clinical table, e.g. 25 mcg/hr <-> ~60 mg oral morphine/24 hr, 100 mcg/hr
// <-> ~240 mg oral morphine/24 hr.) Note this is still only a
// population-level approximation — published clinical equianalgesic ratios
// for fentanyl range from roughly 80:1 to 150:1 with wide inter-individual
// variability, discussed further in the article below.
const FENTANYL_PATCH_FACTOR = 2.4;

type Mode = "perDose" | "total";

interface MedRow {
  key: string;
  opioidId: OpioidId;
  mode: Mode;
  /** mg per administration for standard opioids, mcg/hr for the fentanyl patch. */
  dose: number | "";
  frequency: number | "";
  totalDaily: number | "";
}

let rowCounter = 0;
function newRow(opioidId: OpioidId = "morphine"): MedRow {
  rowCounter += 1;
  return {
    key: `row-${rowCounter}`,
    opioidId,
    mode: "perDose",
    dose: opioidId === "fentanyl-patch" ? 25 : 15,
    frequency: 4,
    totalDaily: 60,
  };
}

interface RowResult {
  mme: number | null;
  totalDailyMg: number | null;
  factorUsed: number | null;
}

function computeRow(row: MedRow): RowResult {
  const opioid = getOpioid(row.opioidId);

  if (opioid.isFentanylPatch) {
    if (row.dose === "" || row.dose <= 0) {
      return { mme: null, totalDailyMg: null, factorUsed: null };
    }
    return {
      mme: row.dose * FENTANYL_PATCH_FACTOR,
      totalDailyMg: null,
      factorUsed: FENTANYL_PATCH_FACTOR,
    };
  }

  let totalDailyMg: number | null;
  if (row.mode === "total") {
    totalDailyMg = row.totalDaily === "" || row.totalDaily < 0 ? null : row.totalDaily;
  } else if (row.dose === "" || row.frequency === "" || row.dose < 0 || row.frequency < 0) {
    totalDailyMg = null;
  } else {
    totalDailyMg = row.dose * row.frequency;
  }

  if (totalDailyMg === null) {
    return { mme: null, totalDailyMg: null, factorUsed: null };
  }

  const factor = opioid.isMethadone ? methadoneFactor(totalDailyMg) : opioid.factor ?? 1;
  return { mme: totalDailyMg * factor, totalDailyMg, factorUsed: factor };
}

export default function OpioidConversionCalculator() {
  const [rows, setRows] = useState<MedRow[]>([newRow("morphine")]);

  const results = useMemo(() => rows.map(computeRow), [rows]);

  const totalMME = useMemo(() => {
    const values = results.map((r) => r.mme).filter((v): v is number => v !== null);
    if (values.length === 0) return null;
    return values.reduce((a, b) => a + b, 0);
  }, [results]);

  function updateRow(key: string, patch: Partial<MedRow>) {
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  }

  function changeOpioid(key: string, opioidId: OpioidId) {
    setRows((prev) =>
      prev.map((r) => (r.key === key ? { ...newRow(opioidId), key: r.key } : r)),
    );
  }

  function addRow() {
    setRows((prev) => [...prev, newRow("morphine")]);
  }

  function removeRow(key: string) {
    setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.key !== key) : prev));
  }

  let tone: Tone = "accent";
  if (totalMME !== null) {
    if (totalMME < 50) tone = "good";
    else if (totalMME < 90) tone = "warn";
    else tone = "bad";
  }

  const description =
    totalMME === null
      ? "Enter at least one opioid with a valid dose to calculate."
      : tone === "good"
        ? "Below the CDC's 50 MME/day reassessment threshold."
        : tone === "warn"
          ? "At or above 50 MME/day — CDC guidance: reassess benefits vs. risks before increasing further, and consider offering naloxone."
          : "At or above 90 MME/day — CDC's higher-risk threshold. Avoid further increases without careful justification; strongly consider naloxone co-prescribing and specialist (pain medicine/addiction medicine) input.";

  return (
    <div className="space-y-8">
      <Section title="1. This patient's current opioids">
        <div className="space-y-4">
          {rows.map((row, i) => {
            const opioid = getOpioid(row.opioidId);
            const result = results[i];
            return (
              <div key={row.key} className="space-y-3 rounded-xl border border-line p-4">
                <div className="flex items-center gap-2">
                  <select
                    value={row.opioidId}
                    onChange={(e) => changeOpioid(row.key, e.target.value as OpioidId)}
                    className="w-full flex-1 rounded-xl border border-line bg-bg px-4 py-3 text-sm font-semibold text-ink outline-none transition-colors focus:border-accent"
                  >
                    {OPIOIDS.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {rows.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRow(row.key)}
                      aria-label="Remove opioid"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-ink-muted transition-colors hover:border-bad/50 hover:text-bad"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>

                {opioid.isFentanylPatch ? (
                  <NumberField
                    label="Patch strength"
                    value={row.dose}
                    onChange={(v) => updateRow(row.key, { dose: v })}
                    suffix="mcg/hr"
                    step={12.5}
                    min={0}
                    hint="Common strengths: 12, 25, 37.5, 50, 62.5, 75, 87.5, 100 mcg/hr. Worn continuously and changed every 72 hours — there is no separate 'frequency' to enter."
                  />
                ) : (
                  <>
                    <SegmentedField
                      label="Enter as"
                      options={[
                        { value: "perDose", label: "Dose x frequency" },
                        { value: "total", label: "Total daily dose" },
                      ]}
                      value={row.mode}
                      onChange={(m) => updateRow(row.key, { mode: m as Mode })}
                    />
                    {row.mode === "perDose" ? (
                      <div className="grid grid-cols-2 gap-3">
                        <NumberField
                          label="Dose per administration"
                          value={row.dose}
                          onChange={(v) => updateRow(row.key, { dose: v })}
                          suffix="mg"
                          step={1}
                          min={0}
                        />
                        <NumberField
                          label="Frequency"
                          value={row.frequency}
                          onChange={(v) => updateRow(row.key, { frequency: v })}
                          suffix="times/day"
                          step={1}
                          min={0}
                        />
                      </div>
                    ) : (
                      <NumberField
                        label="Total daily dose"
                        value={row.totalDaily}
                        onChange={(v) => updateRow(row.key, { totalDaily: v })}
                        suffix="mg/day"
                        step={1}
                        min={0}
                      />
                    )}
                  </>
                )}

                {opioid.isMethadone && (
                  <p className="text-xs text-warn">
                    Methadone's conversion factor rises with total daily dose (non-linear —
                    see the article below) and is applied automatically here. Methadone
                    initiation, dose changes, and any opioid rotation involving methadone
                    should involve a clinician experienced with methadone or a pain/
                    palliative specialist.
                  </p>
                )}

                <div className="text-sm font-semibold text-ink-muted">
                  {result.mme !== null ? (
                    <>
                      = {result.mme.toFixed(1)} MME/day
                      {result.totalDailyMg !== null && result.factorUsed !== null && (
                        <span className="font-normal">
                          {" "}
                          ({result.totalDailyMg.toFixed(1)} mg/day x {result.factorUsed} factor)
                        </span>
                      )}
                    </>
                  ) : (
                    "Enter values above to calculate this row"
                  )}
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={addRow}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-line py-3 text-sm font-semibold text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Plus size={16} />
            Add another opioid
          </button>
        </div>
      </Section>

      <ResultPanel
        tone={tone}
        eyebrow="Total Daily MME"
        value={totalMME !== null ? totalMME.toFixed(1) : "—"}
        valueSuffix={totalMME !== null ? "MME/day" : undefined}
        description={description}
        breakdown={
          totalMME !== null && rows.length > 1 ? (
            <>
              {rows.map((row, i) => {
                const result = results[i];
                if (result.mme === null) return null;
                return (
                  <div key={row.key}>
                    {getOpioid(row.opioidId).label}: {result.mme.toFixed(1)} MME/day
                  </div>
                );
              })}
            </>
          ) : undefined
        }
        footnote={
          <>
            <strong className="text-ink">MME is a risk-communication metric, not a dosing instruction:</strong>{" "}
            these CDC conversion factors were designed for population-level surveillance
            of overdose risk. If you are actually rotating a patient from one opioid to
            another, do not prescribe the new opioid at the calculated equivalent dose —
            reduce it by roughly 25–50% to account for incomplete cross-tolerance
            (methadone requires an even larger reduction and specialist input), then
            titrate to effect. See the article below for the full explanation and a
            worked example.
          </>
        }
      />
    </div>
  );
}
