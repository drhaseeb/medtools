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

type Route = "oral" | "iv" | "sc";
type Convention = "us" | "uk";

type ParenteralRatio =
  | { kind: "byConvention"; us: number; uk: number }
  | { kind: "fixed"; value: number; lowConfidence: true };

interface OpioidDef {
  id: OpioidId;
  label: string;
  /** Flat CDC MME conversion factor for standard oral opioids. */
  factor?: number;
  isFentanylPatch?: boolean;
  isMethadone?: boolean;
  /** Non-oral routes this drug has an established oral-equivalent ratio for. */
  routes?: Route[];
  parenteralRatio?: ParenteralRatio;
}

// CDC 2022 Clinical Practice Guideline for Prescribing Opioids for Pain —
// oral MME conversion factors (verified against the CDC's published
// conversion-factor table). Methadone and transdermal fentanyl are handled
// separately below because neither uses a single flat multiplier.
//
// Parenteral (IV/SC) ratios convert an administered parenteral dose to an
// oral-equivalent dose before the oral MME factor is applied. IV and SC are
// treated identically (both ~100% bioavailable), unlike oral. Sources:
// morphine and hydromorphone ratios genuinely differ between US practice
// (Fast Facts #36; 32-institution survey, J Pain Symptom Manage 2023) and UK
// palliative care convention (Palliative Care Formulary/Twycross; supported
// by Takahashi et al., Support Care Cancer) — exposed as a toggle rather than
// silently picked. Tramadol and IV oxycodone have no real consensus ratio
// (flagged low-confidence) — oxycodone IV isn't marketed in the US at all.
// Codeine's injectable form was withdrawn from the US market in 2014 and is
// deprecated globally, so no parenteral route is offered for it.
const OPIOIDS: OpioidDef[] = [
  {
    id: "morphine",
    label: "Morphine",
    factor: 1,
    routes: ["iv", "sc"],
    parenteralRatio: { kind: "byConvention", us: 3, uk: 2 },
  },
  { id: "oxycodone", label: "Oxycodone", factor: 1.5, routes: ["iv"], parenteralRatio: { kind: "fixed", value: 2, lowConfidence: true } },
  { id: "hydrocodone", label: "Hydrocodone (oral only)", factor: 1 },
  {
    id: "hydromorphone",
    label: "Hydromorphone",
    factor: 4,
    routes: ["iv", "sc"],
    parenteralRatio: { kind: "byConvention", us: 5, uk: 4 },
  },
  { id: "codeine", label: "Codeine (oral only)", factor: 0.15 },
  { id: "tramadol", label: "Tramadol", factor: 0.1, routes: ["iv"], parenteralRatio: { kind: "fixed", value: 1, lowConfidence: true } },
  { id: "fentanyl-patch", label: "Fentanyl (transdermal patch)", isFentanylPatch: true },
  { id: "methadone", label: "Methadone (oral only)", isMethadone: true },
];

function getOpioid(id: OpioidId): OpioidDef {
  return OPIOIDS.find((o) => o.id === id) ?? OPIOIDS[0];
}

function routeLabel(r: Route) {
  return r === "oral" ? "Oral" : r === "iv" ? "IV" : "SC";
}

function ratioFor(opioid: OpioidDef, convention: Convention): number | null {
  if (!opioid.parenteralRatio) return null;
  return opioid.parenteralRatio.kind === "fixed"
    ? opioid.parenteralRatio.value
    : opioid.parenteralRatio[convention];
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
  route: Route;
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
    route: "oral",
    mode: "perDose",
    dose: opioidId === "fentanyl-patch" ? 25 : 15,
    frequency: 4,
    totalDaily: 60,
  };
}

interface RowResult {
  mme: number | null;
  totalDailyRouteMg: number | null;
  totalDailyOralEquivMg: number | null;
  ratioUsed: number | null;
  factorUsed: number | null;
}

function computeRow(row: MedRow, convention: Convention): RowResult {
  const opioid = getOpioid(row.opioidId);

  if (opioid.isFentanylPatch) {
    if (row.dose === "" || row.dose <= 0) {
      return { mme: null, totalDailyRouteMg: null, totalDailyOralEquivMg: null, ratioUsed: null, factorUsed: null };
    }
    return {
      mme: row.dose * FENTANYL_PATCH_FACTOR,
      totalDailyRouteMg: null,
      totalDailyOralEquivMg: null,
      ratioUsed: null,
      factorUsed: FENTANYL_PATCH_FACTOR,
    };
  }

  let totalDailyRouteMg: number | null;
  if (row.mode === "total") {
    totalDailyRouteMg = row.totalDaily === "" || row.totalDaily < 0 ? null : row.totalDaily;
  } else if (row.dose === "" || row.frequency === "" || row.dose < 0 || row.frequency < 0) {
    totalDailyRouteMg = null;
  } else {
    totalDailyRouteMg = row.dose * row.frequency;
  }

  if (totalDailyRouteMg === null) {
    return { mme: null, totalDailyRouteMg: null, totalDailyOralEquivMg: null, ratioUsed: null, factorUsed: null };
  }

  const ratioUsed = row.route !== "oral" ? ratioFor(opioid, convention) : null;
  const totalDailyOralEquivMg = ratioUsed !== null ? totalDailyRouteMg * ratioUsed : totalDailyRouteMg;

  const factor = opioid.isMethadone ? methadoneFactor(totalDailyOralEquivMg) : opioid.factor ?? 1;
  return {
    mme: totalDailyOralEquivMg * factor,
    totalDailyRouteMg,
    totalDailyOralEquivMg,
    ratioUsed,
    factorUsed: factor,
  };
}

export default function OpioidConversionCalculator() {
  const [rows, setRows] = useState<MedRow[]>([newRow("morphine")]);
  const [convention, setConvention] = useState<Convention>("us");

  const results = useMemo(() => rows.map((r) => computeRow(r, convention)), [rows, convention]);

  const totalMME = useMemo(() => {
    const values = results.map((r) => r.mme).filter((v): v is number => v !== null);
    if (values.length === 0) return null;
    return values.reduce((a, b) => a + b, 0);
  }, [results]);

  const showConventionToggle = rows.some((r) => {
    const o = getOpioid(r.opioidId);
    return r.route !== "oral" && o.parenteralRatio?.kind === "byConvention";
  });

  function updateRow(key: string, patch: Partial<MedRow>) {
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  }

  function changeOpioid(key: string, opioidId: OpioidId) {
    setRows((prev) =>
      prev.map((r) => (r.key === key ? { ...newRow(opioidId), key: r.key } : r)),
    );
  }

  function changeRoute(key: string, route: Route) {
    updateRow(key, { route });
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
          {showConventionToggle && (
            <div className="rounded-xl border border-line bg-surface p-3">
              <SegmentedField<Convention>
                label="Oral:parenteral ratio convention (affects morphine & hydromorphone route conversion)"
                options={[
                  { value: "us", label: "3:1 / 5:1 (US common)" },
                  { value: "uk", label: "2:1 / 4:1 (UK palliative care)" },
                ]}
                value={convention}
                onChange={setConvention}
              />
            </div>
          )}

          {rows.map((row, i) => {
            const opioid = getOpioid(row.opioidId);
            const result = results[i];
            const routes: Route[] = ["oral", ...(opioid.routes ?? [])];
            const ratio = row.route !== "oral" ? ratioFor(opioid, convention) : null;
            const lowConfidence = opioid.parenteralRatio?.kind === "fixed" && opioid.parenteralRatio.lowConfidence;

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

                {!opioid.isFentanylPatch && routes.length > 1 && (
                  <SegmentedField<Route>
                    label="Route"
                    options={routes.map((r) => ({ value: r, label: routeLabel(r) }))}
                    value={row.route}
                    onChange={(r) => changeRoute(row.key, r)}
                  />
                )}

                {row.route !== "oral" && (
                  <p className={`text-xs ${lowConfidence ? "text-warn" : "text-ink-muted"}`}>
                    {lowConfidence
                      ? `No well-established ${routeLabel(row.route)}:oral ratio exists for this drug — using an approximate ${ratio}:1 oral:${routeLabel(row.route)} conversion. Treat this row's MME contribution as a rough estimate only.`
                      : `Using a ${ratio}:1 oral:${routeLabel(row.route)} conversion (${convention === "us" ? "US" : "UK palliative care"} convention) to get an oral-equivalent dose before applying the MME factor.`}
                  </p>
                )}

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
                          label={`Dose per administration (${routeLabel(row.route)})`}
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
                        label={`Total daily dose (${routeLabel(row.route)})`}
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
                      {result.totalDailyOralEquivMg !== null && result.factorUsed !== null && (
                        <span className="font-normal">
                          {" "}
                          (
                          {result.ratioUsed !== null && result.totalDailyRouteMg !== null ? (
                            <>
                              {result.totalDailyRouteMg.toFixed(1)} mg/day {routeLabel(row.route)} x{" "}
                              {result.ratioUsed} oral-equiv = {result.totalDailyOralEquivMg.toFixed(1)}{" "}
                              mg/day oral-equiv x{" "}
                            </>
                          ) : (
                            <>{result.totalDailyOralEquivMg.toFixed(1)} mg/day x </>
                          )}
                          {result.factorUsed} factor)
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
                    {getOpioid(row.opioidId).label} ({routeLabel(row.route)}): {result.mme.toFixed(1)} MME/day
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
            of overdose risk in patients on chronic ORAL opioid therapy. The route-conversion
            feature above is provided for documentation/risk-flagging convenience only — it is
            not an endorsed method for calculating an actual prescribing dose when rotating a
            patient between routes or opioids. If you are actually rotating a patient from one
            opioid or route to another, do not prescribe the new opioid at the calculated
            equivalent dose — reduce it by roughly 25–50% to account for incomplete
            cross-tolerance (methadone requires an even larger reduction and specialist input),
            then titrate to effect. See the article below for the full explanation and a worked
            example.
          </>
        }
      />
    </div>
  );
}
