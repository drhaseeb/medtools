import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import { SegmentedField } from "@/kit/SegmentedField";

type Risk = "low" | "highModerate";
type Episode = "initial" | "recurrent";

export default function RheumaticFeverCriteria() {
  const [risk, setRisk] = useState<Risk>("low");
  const [episode, setEpisode] = useState<Episode>("initial");
  const [gasEvidence, setGasEvidence] = useState(false);

  const [carditis, setCarditis] = useState(false);
  const [arthritisMajor, setArthritisMajor] = useState(false);
  const [chorea, setChorea] = useState(false);
  const [erythemaMarginatum, setErythemaMarginatum] = useState(false);
  const [subcutaneousNodules, setSubcutaneousNodules] = useState(false);

  const [arthralgiaMinor, setArthralgiaMinor] = useState(false);
  const [fever, setFever] = useState(false);
  const [esrCrp, setEsrCrp] = useState(false);
  const [prolongedPr, setProlongedPr] = useState(false);

  const isLow = risk === "low";

  const result = useMemo(() => {
    // Arthritis/arthralgia and carditis/PR each count only once — if the
    // major finding is present, the overlapping minor criterion is not
    // counted again per the 2015 AHA revision.
    const countedArthralgia = arthritisMajor ? false : arthralgiaMinor;
    const countedPr = carditis ? false : prolongedPr;

    const majorCount =
      (carditis ? 1 : 0) +
      (arthritisMajor ? 1 : 0) +
      (chorea ? 1 : 0) +
      (erythemaMarginatum ? 1 : 0) +
      (subcutaneousNodules ? 1 : 0);
    const minorCount =
      (countedArthralgia ? 1 : 0) + (fever ? 1 : 0) + (esrCrp ? 1 : 0) + (countedPr ? 1 : 0);

    const choreaAlone = chorea && majorCount === 1 && minorCount === 0;

    const meetsCombination =
      majorCount >= 2 ||
      (majorCount >= 1 && minorCount >= 2) ||
      (episode === "recurrent" && minorCount >= 3);

    let tone: Tone;
    let headline: string;
    let recommendation: string;

    if (!gasEvidence && !choreaAlone) {
      tone = "warn";
      headline = "Cannot confirm — evidence of preceding GAS infection required";
      recommendation =
        "A diagnosis of acute rheumatic fever requires evidence of a preceding group A streptococcal infection (positive throat culture, positive rapid antigen test, or an elevated/rising strep antibody titer) in addition to meeting the major/minor combination below — the two well-established exceptions are chorea presenting alone, and rare indolent carditis presenting alone, either of which can justify the diagnosis without confirmed antecedent GAS evidence.";
    } else if (choreaAlone) {
      tone = "bad";
      headline = "Diagnosis supported — chorea alone";
      recommendation =
        "Chorea presenting alone is one of two well-established exceptions (the other being rare, indolent/insidious carditis alone) that can justify a diagnosis of acute rheumatic fever without meeting the standard major/minor combination and without confirmed antecedent GAS evidence, since antibody titers may have normalised by the time chorea appears.";
    } else if (meetsCombination) {
      tone = "bad";
      headline = `Criteria met — ${majorCount} major, ${minorCount} minor`;
      recommendation =
        episode === "initial"
          ? "Meets the initial-episode rule (≥2 major, or 1 major + ≥2 minor). Diagnose acute rheumatic fever and proceed to echocardiography (if not already done, to check for subclinical carditis), streptococcal serology confirmation, and initiation of secondary prophylaxis per local protocol."
          : "Meets the recurrent-episode rule (≥2 major, 1 major + ≥2 minor, or ≥3 minor alone with a reliable history of prior ARF/RHD). Diagnose recurrent acute rheumatic fever and manage per local protocol, including review of secondary prophylaxis adherence.";
    } else {
      tone = "warn";
      headline = `Criteria not met — ${majorCount} major, ${minorCount} minor`;
      recommendation =
        episode === "initial"
          ? "Does not meet the initial-episode rule (needs ≥2 major, or 1 major + ≥2 minor). Reassess as new findings emerge — carditis in particular can be subclinical, so echocardiography is recommended in every suspected case regardless of auscultation findings."
          : "Does not meet the recurrent-episode rule (needs ≥2 major, 1 major + ≥2 minor, or ≥3 minor alone). Reassess as new findings emerge, and confirm echocardiography has been performed to check for subclinical carditis.";
    }

    return { majorCount, minorCount, countedArthralgia, countedPr, tone, headline, recommendation };
  }, [
    gasEvidence,
    carditis,
    arthritisMajor,
    chorea,
    erythemaMarginatum,
    subcutaneousNodules,
    arthralgiaMinor,
    fever,
    esrCrp,
    prolongedPr,
    episode,
  ]);

  return (
    <div className="space-y-8">
      <Section title="Population Risk">
        <SegmentedField
          options={[
            { value: "low", label: "Low-risk population" },
            { value: "highModerate", label: "Moderate/high-risk population" },
          ]}
          value={risk}
          onChange={setRisk}
        />
        <p className="mt-2 text-xs text-ink-muted">
          Low-risk: ARF incidence ≤2/100,000 school-aged children/year, or RHD
          prevalence ≤1/1,000/year in any age. Otherwise, moderate/high-risk.
        </p>
      </Section>

      <Section title="Episode">
        <SegmentedField
          options={[
            { value: "initial", label: "Initial episode" },
            { value: "recurrent", label: "Recurrent episode" },
          ]}
          value={episode}
          onChange={setEpisode}
        />
      </Section>

      <Section title="Evidence of Preceding Group A Strep Infection">
        <CheckboxRow
          label="Positive throat culture or rapid antigen test, or elevated/rising strep antibody titer (ASO/anti-DNase B)"
          checked={gasEvidence}
          onChange={setGasEvidence}
        />
      </Section>

      <Section title="Major Criteria">
        <div className="space-y-2">
          <CheckboxRow
            label="Carditis (clinical and/or subclinical on echocardiography)"
            checked={carditis}
            onChange={setCarditis}
          />
          <CheckboxRow
            label={
              isLow
                ? "Polyarthritis"
                : "Monoarthritis, polyarthritis, or polyarthralgia (other causes excluded)"
            }
            checked={arthritisMajor}
            onChange={setArthritisMajor}
          />
          <CheckboxRow label="Chorea" checked={chorea} onChange={setChorea} />
          <CheckboxRow
            label="Erythema marginatum"
            checked={erythemaMarginatum}
            onChange={setErythemaMarginatum}
          />
          <CheckboxRow
            label="Subcutaneous nodules"
            checked={subcutaneousNodules}
            onChange={setSubcutaneousNodules}
          />
        </div>
      </Section>

      <Section title="Minor Criteria">
        <div className="space-y-2">
          <CheckboxRow
            label={isLow ? "Polyarthralgia" : "Monoarthralgia"}
            checked={arthralgiaMinor}
            onChange={setArthralgiaMinor}
          />
          <CheckboxRow
            label={`Fever ≥ ${isLow ? "38.5°C" : "38.0°C"}`}
            checked={fever}
            onChange={setFever}
          />
          <CheckboxRow
            label={`ESR ≥ ${isLow ? "60" : "30"} mm/hr and/or CRP ≥ 3.0 mg/dL`}
            checked={esrCrp}
            onChange={setEsrCrp}
          />
          <CheckboxRow
            label="Prolonged PR interval (age-adjusted)"
            checked={prolongedPr}
            onChange={setProlongedPr}
          />
        </div>
        {(result.countedArthralgia !== arthralgiaMinor || result.countedPr !== prolongedPr) && (
          <p className="text-xs text-ink-muted">
            Note: a finding already counted as a major criterion (arthritis or
            carditis) is not counted again as a minor criterion — the totals
            below already reflect this.
          </p>
        )}
      </Section>

      <ResultPanel
        tone={result.tone}
        eyebrow="Revised Jones Criteria"
        value={`${result.majorCount}M + ${result.minorCount}m`}
        description={result.headline}
        footnote={result.recommendation}
      />
    </div>
  );
}
