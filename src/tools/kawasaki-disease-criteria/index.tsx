import { useMemo, useState } from "react";
import { CheckboxRow } from "@/kit/CheckboxRow";
import { NumberField } from "@/kit/NumberField";
import { ResultPanel, type Tone } from "@/kit/ResultPanel";
import { Section } from "@/kit/Section";
import { SegmentedField } from "@/kit/SegmentedField";

type AgeBand = "over6m" | "under6m";

export default function KawasakiDiseaseCriteria() {
  const [ageBand, setAgeBand] = useState<AgeBand>("over6m");
  const [feverDays, setFeverDays] = useState<number | "">("");

  const [conjunctival, setConjunctival] = useState(false);
  const [oral, setOral] = useState(false);
  const [rash, setRash] = useState(false);
  const [extremity, setExtremity] = useState(false);
  const [lymphadenopathy, setLymphadenopathy] = useState(false);

  const [crp, setCrp] = useState(false);
  const [esr, setEsr] = useState(false);
  const [anemia, setAnemia] = useState(false);
  const [wbcHigh, setWbcHigh] = useState(false);
  const [plateletsHigh, setPlateletsHigh] = useState(false);
  const [albuminLow, setAlbuminLow] = useState(false);
  const [altHigh, setAltHigh] = useState(false);
  const [pyuria, setPyuria] = useState(false);
  const [echoPositive, setEchoPositive] = useState(false);

  const days = feverDays === "" ? 0 : feverDays;

  const principalCount =
    (conjunctival ? 1 : 0) + (oral ? 1 : 0) + (rash ? 1 : 0) + (extremity ? 1 : 0) + (lymphadenopathy ? 1 : 0);

  const completeKD = feverDays !== "" && days >= 4 && principalCount >= 4;

  const incompleteEligible =
    !completeKD &&
    feverDays !== "" &&
    (ageBand === "under6m" ? days >= 7 : days >= 5 && principalCount >= 2 && principalCount <= 3);

  const labScreenMet = crp || esr;
  const supplementalCount =
    (anemia ? 1 : 0) + (wbcHigh ? 1 : 0) + (plateletsHigh ? 1 : 0) + (albuminLow ? 1 : 0) + (altHigh ? 1 : 0) + (pyuria ? 1 : 0);
  const incompleteConfirmed = echoPositive || supplementalCount >= 3;

  const { tone, headline, recommendation } = useMemo((): {
    tone: Tone;
    headline: string;
    recommendation: string;
  } => {
    if (feverDays === "") {
      return {
        tone: "accent",
        headline: "Enter fever duration to begin",
        recommendation: "",
      };
    }

    if (completeKD) {
      return {
        tone: "bad",
        headline: `Classic/complete Kawasaki disease — ${principalCount}/5 principal criteria, fever ${days}d`,
        recommendation:
          days === 4
            ? "Fever of only 4 days is accepted when ≥4 principal criteria are clearly present, especially with hand/foot erythema or oedema — treat as classic KD: start IVIG plus high-dose aspirin, and obtain a baseline echocardiogram. (In rare cases, clinicians experienced with many KD presentations may diagnose after just 3 days with a fully classic picture — this tool does not encode that judgement call.)"
            : "Fever ≥5 days plus ≥4 of 5 principal criteria meets the definition of classic/complete Kawasaki disease. Treat: IVIG plus high-dose aspirin, and obtain a baseline echocardiogram, per local protocol.",
      };
    }

    if (incompleteEligible) {
      if (!labScreenMet) {
        return {
          tone: "warn",
          headline: `Below screening threshold — ${principalCount}/5 principal criteria`,
          recommendation:
            "CRP and ESR are both below the incomplete-KD screening threshold (CRP ≥3.0mg/dL and/or ESR ≥40mm/hr). Reassess serially — repeat inflammatory markers and re-examine if fever persists, and keep incomplete KD on the differential.",
        };
      }
      if (incompleteConfirmed) {
        return {
          tone: "bad",
          headline: `Incomplete Kawasaki disease supported — ${supplementalCount}/6 supplemental labs${echoPositive ? " + positive echo" : ""}`,
          recommendation:
            "Screening labs are positive and either the echocardiogram is positive or ≥3 of 6 supplemental laboratory criteria are met — this supports a diagnosis of incomplete Kawasaki disease. Treat: IVIG plus high-dose aspirin per local protocol, with cardiology involvement.",
        };
      }
      return {
        tone: "warn",
        headline: `Screening positive, supplemental criteria not met — ${supplementalCount}/6 labs${echoPositive ? "" : ", echo negative/not done"}`,
        recommendation:
          "CRP and/or ESR are elevated, but fewer than 3 of the 6 supplemental laboratory criteria are met and the echocardiogram is not positive. Consider repeating the echocardiogram in 1–2 weeks, reassessing supplemental labs, and specialist referral if clinical suspicion remains high.",
      };
    }

    return {
      tone: "warn",
      headline: `Criteria not currently met — ${principalCount}/5 principal criteria, fever ${days}d`,
      recommendation:
        ageBand === "under6m"
          ? "Infants under 6 months can present atypically, with fewer overt principal criteria despite significant risk — if unexplained fever reaches 7 days, proceed to the incomplete-KD laboratory workup regardless of how few principal criteria are present. Below that, reassess as the illness progresses."
          : "Neither the classic (≥4 criteria, fever ≥4–5 days) nor the incomplete-KD workup threshold (fever ≥5 days with 2–3 criteria) is currently met. Reassess as the illness progresses, and consider alternative causes of fever.",
    };
  }, [feverDays, days, principalCount, completeKD, incompleteEligible, labScreenMet, incompleteConfirmed, supplementalCount, echoPositive, ageBand]);

  return (
    <div className="space-y-8">
      <Section title="Patient">
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberField
            label="Days of fever"
            value={feverDays}
            onChange={setFeverDays}
            min={0}
            step={1}
            suffix="days"
          />
          <SegmentedField
            label="Age"
            options={[
              { value: "over6m", label: "> 6 months" },
              { value: "under6m", label: "≤ 6 months" },
            ]}
            value={ageBand}
            onChange={setAgeBand}
          />
        </div>
      </Section>

      <Section title="Principal Clinical Criteria (score 4 or 5 of 5 for classic KD)">
        <div className="space-y-2">
          <CheckboxRow
            label="Bilateral bulbar conjunctival injection, non-exudative"
            checked={conjunctival}
            onChange={setConjunctival}
          />
          <CheckboxRow
            label="Oral/mucosal changes — cracked/red lips, strawberry tongue, or diffuse oral/pharyngeal erythema"
            checked={oral}
            onChange={setOral}
          />
          <CheckboxRow label="Polymorphous rash" checked={rash} onChange={setRash} />
          <CheckboxRow
            label="Extremity changes — acute hand/foot erythema or oedema, or subacute periungual desquamation"
            checked={extremity}
            onChange={setExtremity}
          />
          <CheckboxRow
            label="Cervical lymphadenopathy — ≥1 node ≥1.5cm, usually unilateral"
            checked={lymphadenopathy}
            onChange={setLymphadenopathy}
          />
        </div>
      </Section>

      {incompleteEligible && (
        <>
          <Section title="Incomplete KD — Laboratory Screen">
            <div className="space-y-2">
              <CheckboxRow label="CRP ≥ 3.0 mg/dL" checked={crp} onChange={setCrp} />
              <CheckboxRow label="ESR ≥ 40 mm/hr" checked={esr} onChange={setEsr} />
            </div>
          </Section>

          {labScreenMet && (
            <Section title="Incomplete KD — Supplemental Criteria (need ≥3 of 6, or a positive echo)">
              <div className="space-y-2">
                <CheckboxRow label="Anaemia for age" checked={anemia} onChange={setAnemia} />
                <CheckboxRow label="WBC ≥ 15,000/mm³" checked={wbcHigh} onChange={setWbcHigh} />
                <CheckboxRow
                  label="Platelets ≥ 450,000/mm³ (after illness day 7)"
                  checked={plateletsHigh}
                  onChange={setPlateletsHigh}
                />
                <CheckboxRow label="Albumin ≤ 3.0 g/dL" checked={albuminLow} onChange={setAlbuminLow} />
                <CheckboxRow label="Elevated ALT" checked={altHigh} onChange={setAltHigh} />
                <CheckboxRow label="Urine ≥ 10 WBC/hpf" checked={pyuria} onChange={setPyuria} />
                <CheckboxRow
                  label="Echocardiogram positive (coronary Z-score ≥2.5, an aneurysm, or ≥3 of: reduced LV function, mitral regurgitation, pericardial effusion, Z-score 2–2.5)"
                  checked={echoPositive}
                  onChange={setEchoPositive}
                />
              </div>
            </Section>
          )}
        </>
      )}

      <ResultPanel
        tone={tone}
        eyebrow="Kawasaki Disease Criteria (2017 AHA)"
        value={feverDays === "" ? "—" : `${principalCount}/5`}
        description={headline}
        footnote={recommendation || undefined}
      />
    </div>
  );
}
