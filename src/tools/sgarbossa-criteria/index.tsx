import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import { SegmentedField } from "@/kit/SegmentedField";

type Mode = "original" | "modified";

export default function SgarbossaCriteria() {
  const [mode, setMode] = useState<Mode>("modified");
  const [concordantSte, setConcordantSte] = useState(false);
  const [concordantStd, setConcordantStd] = useState(false);
  const [discordantSte5mm, setDiscordantSte5mm] = useState(false);
  const [discordantSteRatio, setDiscordantSteRatio] = useState(false);

  const { score, positive, tone, headline, recommendation } = useMemo(() => {
    if (mode === "original") {
      const score =
        (concordantSte ? 5 : 0) + (concordantStd ? 3 : 0) + (discordantSte5mm ? 2 : 0);
      const positive = score >= 3;
      const tone: Tone = positive ? "bad" : "warn";
      const headline = positive
        ? "Positive — meets original Sgarbossa criteria (≥3)"
        : "Negative — original criteria not met";
      const recommendation = positive
        ? "High specificity (~90–98%) for acute MI in the presence of LBBB or ventricular pacing. Treat as STEMI-equivalent and activate your primary PCI / reperfusion pathway alongside clinical assessment."
        : "The original criteria have low, cohort-dependent sensitivity (roughly 20–36%) — a negative result does NOT rule out MI. If clinical suspicion remains, check the Modified (Smith) criteria, obtain serial ECGs and troponins, and manage as ACS on clinical grounds regardless of score.";
      return { score, positive, tone, headline, recommendation };
    }

    const positive = concordantSte || concordantStd || discordantSteRatio;
    const tone: Tone = positive ? "bad" : "warn";
    const headline = positive
      ? "Positive — meets Modified (Smith) Sgarbossa criteria"
      : "Negative — modified criteria not met";
    const recommendation = positive
      ? "Any single positive criterion is sufficient under the modified rule — there is no point total. The modified criteria preserve the original's high specificity while substantially improving sensitivity. Treat as STEMI-equivalent and activate your primary PCI / reperfusion pathway alongside clinical assessment."
      : "A negative result reduces but does not eliminate the probability of acute MI. Obtain serial ECGs and troponins and manage on clinical grounds regardless of score — no version of Sgarbossa's criteria has sensitivity high enough to stand alone as a rule-out test.";
    return { score: null, positive, tone, headline, recommendation };
  }, [mode, concordantSte, concordantStd, discordantSte5mm, discordantSteRatio]);

  return (
    <div className="space-y-8">
      <Section title="Criteria Set">
        <SegmentedField
          options={[
            { value: "modified", label: "Modified (Smith) — recommended" },
            { value: "original", label: "Original (1996)" },
          ]}
          value={mode}
          onChange={setMode}
        />
      </Section>

      {mode === "original" ? (
        <Section title="Original Sgarbossa Criteria — LBBB or Paced Rhythm">
          <div className="space-y-2">
            <CheckboxRow
              label="Concordant ST elevation ≥ 1mm in a lead with a positive (upright) QRS"
              checked={concordantSte}
              onChange={setConcordantSte}
              points="+5"
            />
            <CheckboxRow
              label="Concordant ST depression ≥ 1mm in lead V1, V2, or V3"
              checked={concordantStd}
              onChange={setConcordantStd}
              points="+3"
            />
            <CheckboxRow
              label="Excessively discordant ST elevation ≥ 5mm in a lead with a negative (discordant) QRS"
              checked={discordantSte5mm}
              onChange={setDiscordantSte5mm}
              points="+2"
            />
          </div>
        </Section>
      ) : (
        <Section title="Modified (Smith) Sgarbossa Criteria — LBBB or Paced Rhythm">
          <div className="space-y-2">
            <CheckboxRow
              label="Concordant ST elevation ≥ 1mm in a lead with a positive (upright) QRS"
              checked={concordantSte}
              onChange={setConcordantSte}
            />
            <CheckboxRow
              label="Concordant ST depression ≥ 1mm in lead V1, V2, or V3"
              checked={concordantStd}
              onChange={setConcordantStd}
            />
            <CheckboxRow
              label="Discordant ST elevation with an ST/S ratio ≤ −0.25 (proportionally excessive vs the preceding S-wave)"
              checked={discordantSteRatio}
              onChange={setDiscordantSteRatio}
            />
          </div>
        </Section>
      )}

      <ResultPanel
        tone={tone}
        eyebrow={mode === "original" ? "Sgarbossa Score" : "Modified Sgarbossa"}
        value={mode === "original" ? score : positive ? "Positive" : "Negative"}
        valueSuffix={mode === "original" ? "/ 10" : undefined}
        description={headline}
        footnote={recommendation}
      />
    </div>
  );
}
