import { useMemo, useState, type ReactNode } from "react";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { SegmentedField } from "@/kit/SegmentedField";
import { Section } from "@/kit/Section";

function getDailyDose(inr: number) {
  return 2.5 + (2.5 - inr) * 2;
}

type InductionResult = { headline: string; sub: string } | null;

function inductionDose(
  day: "1" | "2" | "3" | "4",
  low: boolean,
  inr: number | "",
): InductionResult {
  if (day === "1") {
    const dose = low ? 5 : 10;
    return {
      headline: `Day 1 Dose: ${dose}mg`,
      sub: "Omit if INR already >1.4 at baseline. Check INR again on Day 2.",
    };
  }

  if (inr === "" || Number.isNaN(inr)) return null;

  if (day === "2") {
    let dose: string;
    if (!low) {
      if (inr < 1.8) dose = "10mg";
      else if (inr <= 2.0) dose = "5mg";
      else if (inr <= 2.2) dose = "3mg";
      else dose = "0mg — Omit. Recheck tomorrow.";
    } else {
      if (inr < 1.5) dose = "5mg";
      else if (inr <= 1.8) dose = "4mg";
      else if (inr <= 2.5) dose = "2mg";
      else dose = "1mg";
    }
    return { headline: `Day 2 Dose: ${dose}`, sub: "Recheck INR Day 3." };
  }

  if (day === "3") {
    let dose: string;
    if (!low) {
      if (inr < 2.0) dose = "10mg";
      else if (inr <= 2.1) dose = "7.5mg";
      else if (inr <= 2.3) dose = "5mg";
      else if (inr <= 2.5) dose = "4mg";
      else if (inr <= 2.8) dose = "3.5mg";
      else if (inr <= 3.0) dose = "3mg";
      else if (inr <= 3.3) dose = "2.5mg";
      else if (inr <= 3.5) dose = "2mg";
      else if (inr <= 4.0) dose = "1.5mg";
      else if (inr <= 4.5) dose = "1mg";
      else dose = "0mg — Omit.";
    } else {
      if (inr < 2.0) dose = "5mg";
      else if (inr <= 2.5) dose = "3mg";
      else if (inr <= 3.0) dose = "2mg";
      else dose = "1mg — consider omit if >3.5";
    }
    return {
      headline: `Day 3 Dose: ${dose}`,
      sub: "Recheck INR Day 4. Begin establishing maintenance dose.",
    };
  }

  // day === "4"
  if (inr >= 2.0 && inr <= 3.0) {
    return {
      headline: `INR in range (${inr}) — Predicted maintenance: ~${Math.round(getDailyDose(inr) * 7)}mg/week`,
      sub: "Check INR in 1 week, then increase interval if stable. Refer to maintenance calculator for further adjustments.",
    };
  }
  return {
    headline: `INR ${inr} — Not yet in range.`,
    sub: "Continue at adjusted dose. Switch to maintenance adjustment section.",
  };
}

export default function WarfarinDosingCalculator() {
  const [tab, setTab] = useState<"induction" | "maintenance" | "reversal">("induction");

  // Induction
  const [day, setDay] = useState<"1" | "2" | "3" | "4">("1");
  const [protocol, setProtocol] = useState<"10" | "5">("10");
  const [indInr, setIndInr] = useState<number | "">("");

  // Maintenance
  const [target, setTarget] = useState<"2.5" | "3.5">("2.5");
  const [currInr, setCurrInr] = useState<number | "">("");
  const [weeklyDose, setWeeklyDose] = useState<number | "">("");

  // Reversal
  const [revInr, setRevInr] = useState<number | "">("");
  const [bleeding, setBleeding] = useState<"no" | "minor" | "major">("no");

  const induction = useMemo(
    () => inductionDose(day, protocol === "5", indInr),
    [day, protocol, indInr],
  );

  const maintenance = useMemo(() => {
    if (currInr === "" || Number.isNaN(currInr) || weeklyDose === "" || Number.isNaN(weeklyDose)) {
      return null;
    }
    const low = target === "2.5" ? 2.0 : 2.5;
    const high = target === "2.5" ? 3.0 : 3.5;

    let tone: Tone;
    let advice: string;

    if (currInr >= low && currInr <= high) {
      tone = "good";
      advice = `INR in therapeutic range (${low}–${high}). No dose change required. Extend INR check interval to 4–6 weeks if stable ≥2 readings.`;
    } else if (currInr < low) {
      const diff = currInr < 1.5 ? 20 : currInr < 1.8 ? 15 : 10;
      const newWeekly = Math.round(weeklyDose * (1 + diff / 100) * 2) / 2;
      tone = "accent";
      advice = `INR below range — Increase weekly dose by ~${diff}%. New weekly dose: ${newWeekly}mg/week (~${(newWeekly / 7).toFixed(1)}mg/day). Recheck in 1–2 weeks.`;
    } else if (currInr <= high + 0.5) {
      const diff = 10;
      const newWeekly = Math.round(weeklyDose * (1 - diff / 100) * 2) / 2;
      tone = "warn";
      advice = `INR slightly above range — Reduce weekly dose by ~${diff}%. New weekly dose: ${newWeekly}mg/week. Continue taking (do not omit). Recheck in 1–2 weeks.`;
    } else if (currInr <= 5.0) {
      const diff = 15;
      const newWeekly = Math.round(weeklyDose * (1 - diff / 100) * 2) / 2;
      tone = "warn";
      advice = `INR ${currInr} (above ${high}) — Omit 1–2 doses, then reduce weekly dose by ~${diff}%. New weekly: ${newWeekly}mg/week. Recheck in 3–5 days. If bleeding risk high, consider small dose vitamin K (1–2mg PO).`;
    } else {
      tone = "bad";
      advice = "INR ≥5.0 — See Supra-therapeutic INR / Reversal tab for management.";
    }

    return { tone, advice };
  }, [currInr, weeklyDose, target]);

  const reversal = useMemo(() => {
    if (revInr === "" || Number.isNaN(revInr)) return null;

    let tone: Tone;
    let content: ReactNode;

    if (bleeding === "major") {
      tone = "bad";
      content = (
        <>
          <strong className="text-ink">MAJOR/LIFE-THREATENING BLEED — EMERGENCY</strong>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li><strong className="text-ink">STOP Warfarin immediately.</strong></li>
            <li>Give <strong className="text-ink">4-factor Prothrombin Complex Concentrate (PCC — e.g. Beriplex/Octaplex)</strong> IV, 25–50 IU/kg per weight/INR-based protocol (BSH/BCSH 2013 guideline — check local protocol).</li>
            <li>Give <strong className="text-ink">Vitamin K₁ 5mg IV</strong> (slow infusion, NOT IM) alongside PCC — some protocols use up to 10mg for very severe bleeding.</li>
            <li>Recheck INR in 30 min post-PCC. Aim INR &lt;1.5.</li>
            <li>Urgent haematology and senior clinical involvement. ICU review.</li>
            <li>Identify and control bleeding source. Surgical/interventional review as appropriate.</li>
          </ul>
        </>
      );
    } else if (bleeding === "minor") {
      tone = "warn";
      if (revInr < 5) {
        content = (
          <>
            <strong className="text-ink">Non-major bleeding, INR {revInr}:</strong>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Omit warfarin temporarily. Investigate and treat bleeding source.</li>
              <li>Restart at lower dose once bleeding resolved.</li>
              <li>Give <strong className="text-ink">Vitamin K₁ 1–3mg PO</strong> if INR significantly elevated.</li>
              <li>Recheck INR within 24–48h.</li>
            </ul>
          </>
        );
      } else {
        content = (
          <>
            <strong className="text-ink">Non-major bleeding, INR {revInr} ≥5:</strong>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Omit warfarin. Give <strong className="text-ink">Vitamin K₁ 1–3mg PO or 0.5–1mg IV</strong>.</li>
              <li>Consider small-dose PCC if INR very high (&gt;8) or bleeding not controlled.</li>
              <li>Recheck INR in 24h. Resume warfarin at lower dose once INR &lt;3.</li>
            </ul>
          </>
        );
      }
    } else {
      // not bleeding
      if (revInr <= 5.0) {
        tone = "warn";
        content = (
          <>
            <strong className="text-ink">INR {revInr} (no bleeding):</strong> Omit 1
            dose. Reduce maintenance dose. Recheck INR in 3–5 days. No
            vitamin K required unless high bleeding risk.
          </>
        );
      } else if (revInr <= 8.0) {
        tone = "warn";
        content = (
          <>
            <strong className="text-ink">INR {revInr} (no bleeding):</strong> Omit
            1–2 doses. Give <strong className="text-ink">Vitamin K₁ 1–2mg PO</strong>.
            Recheck in 24–48h. Investigate for cause of supra-therapeutic
            INR (new interactions, dietary change, illness).
          </>
        );
      } else {
        tone = "bad";
        content = (
          <>
            <strong className="text-ink">INR &gt;8 (no bleeding):</strong> Stop
            warfarin. Give <strong className="text-ink">Vitamin K₁ 5mg PO</strong>{" "}
            (or 1–3mg IV if rapid reversal needed). Recheck INR in 24h.
            Restart warfarin at reduced dose when INR &lt;5. Assess for
            bleeding risk and admit if frail/elderly/high-risk.
          </>
        );
      }
    }

    return { tone, content };
  }, [revInr, bleeding]);

  return (
    <div className="space-y-8">
      <SegmentedField
        options={[
          { value: "induction", label: "Induction" },
          { value: "maintenance", label: "Maintenance" },
          { value: "reversal", label: "Supra-therapeutic INR" },
        ]}
        value={tab}
        onChange={setTab}
      />

      {tab === "induction" && (
        <div className="space-y-6">
          <div className="rounded-xl border border-warn/30 bg-warn-soft px-4 py-3.5 text-sm text-warn">
            <strong>10mg vs 5mg Induction:</strong> A 10mg day-1 loading dose
            is standard for most adults. Use the 5mg (low-dose) pathway for
            age &gt;70, body weight &lt;50kg, interacting drugs, liver
            disease, heart failure, baseline INR already elevated, or high
            bleeding risk. The day-by-day dose table below reflects a
            commonly used INR-titrated induction nomogram descended from the
            Fennerty method (Fennerty et al., BMJ 1984) as adapted in
            widely used UK hospital protocols; exact dose brackets are{" "}
            <strong>not standardised nationally</strong> — always confirm
            against your own trust/hospital anticoagulation protocol before
            prescribing.
          </div>

          <Section title="Day Number">
            <SegmentedField
              options={[
                { value: "1", label: "Day 1" },
                { value: "2", label: "Day 2" },
                { value: "3", label: "Day 3" },
                { value: "4", label: "Day 4" },
              ]}
              value={day}
              onChange={setDay}
            />
          </Section>

          {day !== "1" && (
            <NumberField
              label="Today's INR"
              value={indInr}
              onChange={setIndInr}
              step={0.1}
              placeholder="e.g. 1.8"
            />
          )}

          <Section title="Protocol">
            <SegmentedField
              options={[
                { value: "10", label: "Standard (10mg Day 1)" },
                { value: "5", label: "Low-dose (5mg Day 1)" },
              ]}
              value={protocol}
              onChange={setProtocol}
            />
          </Section>

          {induction ? (
            <ResultPanel
              tone="accent"
              eyebrow="Induction Guidance"
              value={induction.headline}
              footnote={
                <>
                  {induction.sub}
                  {day === "4" && (
                    <span className="mt-2 block text-xs">
                      The predicted weekly maintenance dose is a rough
                      heuristic extrapolated from the day-4 INR (not a
                      validated regression equation) — confirm with a further
                      INR check in 1 week rather than relying on it alone.
                    </span>
                  )}
                </>
              }
            />
          ) : (
            <ResultPanel tone="accent" eyebrow="Induction Guidance" value="Enter today's INR" />
          )}
        </div>
      )}

      {tab === "maintenance" && (
        <div className="space-y-6">
          <Section title="Target INR Range">
            <SegmentedField
              options={[
                { value: "2.5", label: "2.0–3.0 (AF, DVT, PE)" },
                { value: "3.5", label: "2.5–3.5 (Mech. valves)" },
              ]}
              value={target}
              onChange={setTarget}
            />
          </Section>

          <NumberField
            label="Current INR"
            value={currInr}
            onChange={setCurrInr}
            step={0.1}
            placeholder="e.g. 2.1"
          />

          <NumberField
            label="Current Weekly Dose (mg/week)"
            value={weeklyDose}
            onChange={setWeeklyDose}
            step={0.5}
            placeholder="e.g. 35"
            hint="e.g. 5mg/day = 35mg/week"
          />

          {maintenance ? (
            <ResultPanel tone={maintenance.tone} eyebrow="Dose Adjustment" value={maintenance.advice} />
          ) : (
            <ResultPanel tone="accent" eyebrow="Dose Adjustment" value="Enter current INR and weekly dose" />
          )}
        </div>
      )}

      {tab === "reversal" && (
        <div className="space-y-6">
          <NumberField
            label="Current INR"
            value={revInr}
            onChange={setRevInr}
            step={0.1}
            placeholder="e.g. 6.5"
          />

          <Section title="Is Patient Bleeding?">
            <SegmentedField
              options={[
                { value: "no", label: "Not bleeding / minor bleed" },
                { value: "minor", label: "Non-major bleeding" },
                { value: "major", label: "Major/life-threatening bleed" },
              ]}
              value={bleeding}
              onChange={setBleeding}
            />
          </Section>

          {reversal ? (
            <ResultPanel
              tone={reversal.tone}
              eyebrow="Reversal Guidance"
              value={`INR ${revInr}`}
              footnote={reversal.content}
            />
          ) : (
            <ResultPanel tone="accent" eyebrow="Reversal Guidance" value="Enter current INR" />
          )}
        </div>
      )}

      <div className="rounded-xl border border-bad/20 bg-bad-soft px-4 py-3.5 text-xs text-ink-muted">
        <strong className="text-bad">Clinical Use Only:</strong> This tool
        provides guideline-based decision support only. All dosing must be
        verified by the prescribing clinician. Refer to your local
        anticoagulation service for complex patients (CYP2C9 variants,
        multiple interactions, renal/hepatic impairment). Always follow your
        trust/hospital anticoagulation protocol.
      </div>
    </div>
  );
}
