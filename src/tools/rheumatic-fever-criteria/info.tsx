import { FaqAccordion, References, RelatedTools, ReviewedBadge } from "@/kit";

export default function RheumaticFeverCriteriaInfo() {
  return (
    <>
      <ReviewedBadge updated="August 2026" />

      <div className="prose max-w-none">
        <h2>What Are the Revised Jones Criteria?</h2>
        <p>
          The Jones criteria are the diagnostic framework used to identify
          acute rheumatic fever (ARF) — an autoimmune inflammatory illness
          that can follow a group A streptococcal throat infection by two to
          four weeks, and which can affect the heart, joints, brain, skin,
          and subcutaneous tissue. There is no single confirmatory test for
          rheumatic fever; instead, the diagnosis rests on recognising a
          pattern of major and minor clinical and laboratory findings,
          combined with evidence that a streptococcal infection actually
          preceded them. Getting this diagnosis right matters enormously,
          because untreated or missed rheumatic fever is the leading
          preventable cause of acquired heart disease in children and young
          adults worldwide, through the valve damage of rheumatic heart
          disease (RHD).
        </p>
        <p>
          The criteria were most recently revised in 2015 by the American
          Heart Association, with one central, structurally important
          change: the introduction of separate criteria thresholds for
          low-risk versus moderate/high-risk populations, and formal
          recognition of echocardiography as a way to detect carditis even
          when the heart sounds normal on examination.
        </p>

        <h2>History and Development</h2>
        <p>
          The original criteria were first proposed by T. Duckett Jones in
          1944, and have been revised multiple times since by the American
          Heart Association as understanding of the disease has evolved —
          notably in 1992, and then in the 2015 statement led by Michael
          Gewitz and colleagues, published in <em>Circulation</em> under the
          title "Revision of the Jones Criteria for the Diagnosis of Acute
          Rheumatic Fever in the Era of Doppler Echocardiography." The
          "Doppler echocardiography" in the title reflects the statement's
          central innovation: by 2015, echocardiography had become
          widespread enough, and good enough at detecting even mild valve
          regurgitation, that the AHA formally built it into the criteria as
          a way to diagnose "subclinical carditis" — valve involvement
          detectable on a scan but not yet audible on examination — rather
          than relying on auscultation alone as every previous version had.
        </p>
        <p>
          The second major change addressed a long-standing problem: the
          original criteria were derived largely from lower-incidence
          settings and performed poorly when applied in populations where
          rheumatic fever remains common — parts of the world where a
          stricter, lower-sensitivity rule would miss real cases. The 2015
          revision solved this by defining two parallel sets of thresholds:
          one for low-risk populations, and a deliberately more sensitive
          one for moderate/high-risk populations, defined by measured local
          disease incidence rather than by geography alone.
        </p>

        <h2>Step One: Evidence of a Preceding Strep Infection</h2>
        <p>
          Before applying the major/minor combination rule, the criteria
          require objective evidence that a group A streptococcal infection
          actually occurred in the preceding weeks. Any one of the following
          is accepted: a positive throat culture for group A strep, a
          positive rapid streptococcal antigen test, or an elevated or —
          preferably — rising streptococcal antibody titer (anti-streptolysin
          O and/or anti-DNase B). A single antibody titer is treated with
          some caution in areas where strep infection and elevated baseline
          titers are extremely common in the general population, since it
          does not, by itself, prove the infection was recent; a rise between
          two samples is more convincing, and a clearly negative titer is
          useful for arguing against the diagnosis.
        </p>

        <h2>Major Criteria — and How They Differ by Risk Population</h2>
        <p>
          Four of the five major criteria are identical regardless of
          population risk: <strong>carditis</strong> (clinical — a new
          murmur or heart failure — and/or subclinical, meaning valve
          regurgitation seen on echocardiography meeting strict Doppler
          criteria even with a normal cardiac exam), <strong>chorea</strong>{" "}
          (the involuntary, irregular movements historically known as
          Sydenham's chorea), <strong>erythema marginatum</strong> (a
          characteristic evanescent, map-like rash), and{" "}
          <strong>subcutaneous nodules</strong>.
        </p>
        <p>
          The fifth major criterion, arthritis, is where the two risk
          populations diverge. In a{" "}
          <strong>low-risk population</strong>, only{" "}
          <strong>polyarthritis</strong> (multiple joints) counts as a major
          criterion. In a <strong>moderate/high-risk population</strong>, the
          definition is broadened to include{" "}
          <strong>monoarthritis (a single joint), polyarthritis, or even
          polyarthralgia</strong> (joint pain without objective swelling) as
          a major finding — reflecting evidence that in higher-incidence
          settings, rheumatic fever more often presents with a milder or
          more localised joint picture than the classic migratory
          polyarthritis originally described, and a stricter rule in these
          settings was found to miss real cases. Using joint pain alone
          (polyarthralgia) as a major criterion in the higher-risk group is
          only valid once other causes of joint pain — septic arthritis,
          reactive arthritis, and others — have reasonably been excluded.
        </p>

        <h2>Minor Criteria — Also Risk-Stratified</h2>
        <p>
          Three of the four minor criteria carry different thresholds
          depending on population risk, reflecting the same logic as the
          major arthritis criterion — a lower bar in higher-incidence
          settings, to avoid missing real disease:
        </p>
        <ul>
          <li>
            <strong>Joint pain:</strong> polyarthralgia (low-risk) vs
            monoarthralgia (moderate/high-risk) — but only when the joint
            finding has not already been counted as the major arthritis
            criterion above.
          </li>
          <li>
            <strong>Fever:</strong> ≥38.5°C (low-risk) vs ≥38.0°C
            (moderate/high-risk).
          </li>
          <li>
            <strong>Inflammatory markers:</strong> ESR ≥60mm/hr
            (low-risk) vs ≥30mm/hr (moderate/high-risk), and/or CRP ≥3.0mg/dL
            — the CRP threshold is the one value that does{" "}
            <em>not</em> change between the two groups.
          </li>
          <li>
            <strong>Prolonged PR interval</strong> on ECG, age-adjusted —
            identical in both groups, but only counted if carditis has not
            already been used as the major criterion (since a prolonged PR
            interval is itself a form of cardiac involvement, and the
            criteria avoid double-counting the same organ system twice).
          </li>
        </ul>

        <h2>Putting It Together: The Diagnostic Rule</h2>
        <p>
          For an <strong>initial episode</strong> of rheumatic fever, with
          evidence of preceding strep infection established, the diagnosis
          requires either <strong>two major criteria</strong>, or{" "}
          <strong>one major criterion plus two minor criteria</strong>. For a{" "}
          <strong>recurrent episode</strong> — in a patient with a reliable
          history of previous rheumatic fever or established rheumatic heart
          disease — the same two combinations apply, but{" "}
          <strong>three minor criteria alone</strong> are also sufficient,
          reflecting the fact that recurrences can present more subtly in a
          patient whose heart valves already carry damage from a previous
          episode.
        </p>
        <p>
          Two long-standing exceptions sit outside this combination rule
          entirely. <strong>Chorea presenting alone</strong> can establish
          the diagnosis without meeting the major/minor combination and
          without confirmed evidence of preceding strep infection, because
          chorea classically has a long latency after the triggering
          infection — by the time it appears, streptococcal antibody titers
          may have already returned to normal. The same exception, much more
          rarely invoked, applies to <strong>indolent (insidiously
          progressive) carditis</strong> presenting alone, for a similar
          reason.
        </p>

        <h2>Worked Example</h2>
        <p>
          An 8-year-old girl in a moderate-incidence setting presents with
          pain and mild swelling that moved from her left knee to her right
          ankle over three days, and a temperature of 38.2°C. A throat swab
          taken two weeks earlier, when she had a sore throat, grew group A
          streptococcus. Echocardiography, performed because of the joint
          findings, shows mild mitral regurgitation meeting the Doppler
          criteria for pathological valvulitis, with a structurally normal
          valve on examination.
        </p>
        <p>
          Working through the moderate/high-risk criteria: her polyarthritis
          counts as one major criterion, and her subclinical carditis on
          echo counts as a second major criterion. With GAS evidence
          confirmed and two major criteria present, the initial-episode rule
          (2 major) is satisfied regardless of any minor criteria — this
          case meets the diagnosis of acute rheumatic fever.
        </p>

        <h2>Why the Risk Stratification Matters</h2>
        <p>
          The population-risk split is not an arbitrary complexity — it
          reflects a real, evidence-based trade-off. Applying the stricter,
          low-risk thresholds in a high-incidence population would miss a
          meaningful number of genuine cases presenting with a single
          inflamed joint or a lower-grade fever, delaying the secondary
          antibiotic prophylaxis that prevents progression to rheumatic
          heart disease. Applying the looser, high-risk thresholds in a
          genuinely low-incidence population, conversely, would risk
          over-diagnosing rheumatic fever from far more common causes of a
          single sore joint and a mild fever. The AHA statement defines the
          cutoff precisely to make this decision objective: a population
          with an ARF incidence above 2 per 100,000 school-aged children
          per year, or an all-age rheumatic heart disease prevalence above 1
          per 1,000, is treated as moderate/high-risk.
        </p>

        <h2>Limitations</h2>
        <ul>
          <li>
            <strong>The criteria are a probabilistic framework, not a
            laboratory test.</strong> Especially in the moderate/high-risk
            group, the broadened joint criteria trade some specificity for
            sensitivity — clinical judgement about alternative causes of
            joint pain and fever remains essential.
          </li>
          <li>
            <strong>Correctly identifying the population risk category
            requires knowing local epidemiological data</strong>, which is
            not always readily available to an individual clinician at the
            point of care.
          </li>
          <li>
            <strong>Echocardiography is now recommended in every suspected
            case</strong>, regardless of whether the cardiac exam is normal,
            since subclinical carditis cannot be excluded on auscultation
            alone — a normal-sounding heart does not rule out major-criterion
            carditis under the 2015 revision.
          </li>
          <li>
            <strong>Recurrent-episode confirmation depends on a reliable
            history</strong> of prior rheumatic fever or established
            rheumatic heart disease — without that history, the initial-
            episode rule (not the more permissive recurrent-episode rule)
            should be applied.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>
      </div>

      <FaqAccordion
        items={[
          {
            q: "Can rheumatic fever be diagnosed without evidence of a preceding strep infection?",
            a: "Generally no — evidence of a preceding group A streptococcal infection is required. The two established exceptions are chorea presenting alone, and rare indolent carditis presenting alone, either of which can justify the diagnosis without confirmed antecedent GAS evidence.",
          },
          {
            q: "Why do the criteria differ between 'low-risk' and 'moderate/high-risk' populations?",
            a: "Because applying a single, stricter threshold everywhere was found to miss real cases in higher-incidence populations, where rheumatic fever more often presents with milder or more localised joint findings. The 2015 revision introduced separate, evidence-based thresholds for each population, defined by measured local disease incidence.",
          },
          {
            q: "Does a normal cardiac examination rule out carditis?",
            a: "No. The 2015 revision formally recognises 'subclinical carditis' — valve regurgitation detected on echocardiography meeting strict Doppler criteria, even when auscultation is normal — as satisfying the carditis major criterion. Echocardiography is recommended in every suspected case.",
          },
          {
            q: "Can the same joint finding count as both a major and a minor criterion?",
            a: "No. If a joint finding (arthritis or arthralgia) is counted as the major criterion, it cannot also be counted as a minor criterion, and the same rule applies to carditis and the prolonged PR interval minor criterion, to avoid double-counting the same underlying finding.",
          },
          {
            q: "Is the diagnostic rule different for a recurrent episode?",
            a: "The same two combinations apply (2 major, or 1 major + 2 minor), but for a recurrent episode in a patient with a reliable history of prior rheumatic fever or rheumatic heart disease, 3 minor criteria alone are also considered sufficient.",
          },
        ]}
      />

      <RelatedTools slugs={["sirs-calculator", "curb65-calculator", "heart-score-calculator"]} />

      <References
        items={[
          {
            text: "Gewitz MH, Baltimore RS, Tani LY, et al. Revision of the Jones Criteria for the Diagnosis of Acute Rheumatic Fever in the Era of Doppler Echocardiography: A Scientific Statement From the American Heart Association. Circulation. 2015;131(20):1806-1818.",
          },
          {
            text: "American Heart Association Committee on Rheumatic Fever, Endocarditis, and Kawasaki Disease. Correction to: Revision of the Jones Criteria. Circulation. 2020;142(4):e65.",
          },
        ]}
      />
    </>
  );
}
