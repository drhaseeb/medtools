export default function WarfarinInfo() {
  return (
    <div className="prose max-w-none">
      <h2>Warfarin Dosing and INR Management: A Complete Clinical Guide</h2>

      <p>
        Warfarin is a vitamin K antagonist (VKA) anticoagulant that has been
        used in clinical medicine since the 1950s. Despite the advent of
        direct oral anticoagulants (DOACs), warfarin remains an essential
        drug in specific clinical scenarios where DOACs are contraindicated
        or inadequate—most notably in patients with mechanical heart valves,
        antiphospholipid syndrome (particularly triple-positive), and in
        some resource-limited settings where DOAC access or monitoring is
        challenging. Effective warfarin management requires a thorough
        understanding of its pharmacology, INR monitoring, dose adjustment
        principles, drug and dietary interactions, and reversal protocols.
      </p>

      <h3>Mechanism of Action and Pharmacology</h3>
      <p>
        Warfarin exerts its anticoagulant effect by inhibiting vitamin K
        epoxide reductase complex subunit 1 (VKORC1), thereby blocking the
        regeneration of the active reduced form of vitamin K. This depletes
        the vitamin K-dependent clotting factors: factors II (prothrombin),
        VII, IX, and X, as well as the natural anticoagulants protein C and
        protein S. Factor VII has the shortest half-life (approximately 6
        hours), explaining why the INR rises rapidly after initiation, but
        the full anticoagulant effect (depletion of factor II/prothrombin,
        half-life ~60 hours) takes 3–5 days to establish.
      </p>
      <p>
        Warfarin is a racemic mixture of S-warfarin (more potent,
        metabolised by CYP2C9) and R-warfarin (metabolised by CYP3A4).
        Genetic polymorphisms in CYP2C9 and VKORC1 account for significant
        inter-individual variability in dose requirements. Patients with
        CYP2C9 *2 or *3 variants require substantially lower doses, while
        VKORC1 1173C&gt;T variants reduce vitamin K recycling activity and
        similarly reduce maintenance requirements.
      </p>

      <h3>Target INR Ranges by Indication</h3>
      <p>The target INR range depends on the specific clinical indication:</p>
      <ul>
        <li>
          <strong>INR 2.0–3.0 (target 2.5):</strong> Atrial fibrillation,
          venous thromboembolism (DVT/PE treatment and secondary
          prophylaxis), bioprosthetic heart valves, cardiomyopathy with
          mural thrombus
        </li>
        <li>
          <strong>INR 2.5–3.5 (target 3.0):</strong> Mechanical mitral
          valve, combined aortic and mitral mechanical valves, high-risk
          mechanical aortic valve (older caged-ball or tilting disc valves)
        </li>
        <li>
          <strong>INR 3.5–4.5:</strong> Very rarely used; some older
          guidelines for high-risk mechanical valves. Modern practice has
          moved away from this range due to bleeding risk.
        </li>
      </ul>
      <p>
        Time in Therapeutic Range (TTR) is the key quality metric for
        warfarin management. A TTR above 70% is associated with a
        significant reduction in thromboembolic and haemorrhagic events. TTR
        below 60% should prompt a medication review, assessment of
        adherence, and dietary counselling. If TTR remains consistently
        poor despite optimised management, switching to a DOAC should be
        considered where clinically appropriate.
      </p>

      <h3>Warfarin Induction: Fennerty Protocol</h3>
      <p>
        The Fennerty induction protocol is the standard approach for
        initiating warfarin in hospital in the UK. Two versions exist:
      </p>
      <ul>
        <li>
          <strong>Standard Fennerty (10mg Day 1):</strong> Used for most
          patients requiring rapid anticoagulation (e.g., acute VTE where
          bridging anticoagulation is also used)
        </li>
        <li>
          <strong>Low-dose Fennerty (5mg Day 1):</strong> Recommended for
          elderly patients (over 70), patients with low body weight (under
          50 kg), those taking interacting drugs, patients with liver
          disease or heart failure, and high bleeding risk patients
        </li>
      </ul>
      <p>
        The protocol uses INR measurements on Days 2, 3, and 4 to guide dose
        adjustments, with the aim of achieving a therapeutic INR of 2.0–3.0
        within 5–7 days. Daily INR monitoring is standard during induction.
        Once a stable therapeutic INR is achieved on two consecutive
        readings, monitoring can be extended to weekly, then fortnightly,
        then monthly in stable patients.
      </p>

      <h3>Maintenance Dose Adjustment Principles</h3>
      <p>
        Long-term warfarin management requires careful INR monitoring and
        systematic dose adjustment. The British Committee for Standards in
        Haematology (BCSH) guidelines recommend the following approach:
      </p>
      <ul>
        <li>
          <strong>INR in therapeutic range:</strong> Continue current dose.
          Extend monitoring interval to 4–6 weeks if INR has been stable for
          3 consecutive months.
        </li>
        <li>
          <strong>INR slightly below range (e.g., 1.8–2.0 for target 2.5):</strong>{" "}
          Increase weekly dose by 5–10%. Recheck in 1–2 weeks.
        </li>
        <li>
          <strong>INR significantly below range (e.g., below 1.5):</strong>{" "}
          Increase weekly dose by 15–20%. Consider a loading dose. Recheck
          in 1 week.
        </li>
        <li>
          <strong>INR slightly above range (e.g., 3.1–4.0 for target 2.5):</strong>{" "}
          Reduce weekly dose by 5–10%. Continue taking (do not omit).
          Recheck in 1–2 weeks.
        </li>
        <li>
          <strong>INR 4.0–5.0 (no bleeding):</strong> Omit 1–2 doses. Reduce
          weekly dose by 10–15%. Recheck in 3–5 days.
        </li>
        <li>
          <strong>INR 5.0–8.0 (no bleeding):</strong> Omit 1–2 doses. Give
          vitamin K₁ 1–2.5mg orally. Recheck in 24 hours.
        </li>
        <li>
          <strong>INR above 8.0 (no bleeding):</strong> Omit warfarin. Give
          vitamin K₁ 5mg orally. Recheck in 24 hours. Restart at reduced
          dose when INR below 5.0.
        </li>
      </ul>

      <h3>Management of Supratherapeutic INR and Bleeding</h3>
      <p>
        The management of elevated INR with or without bleeding is a common
        clinical challenge. The approach depends on the INR level, presence
        of bleeding, and bleeding location/severity:
      </p>
      <ul>
        <li>
          <strong>Non-major bleeding with any INR:</strong> Identify and
          treat bleeding source. Omit warfarin temporarily. Small-dose oral
          vitamin K₁ (1–3mg) reduces INR within 24–48 hours. Restart at
          lower dose.
        </li>
        <li>
          <strong>Major or life-threatening bleeding:</strong> Stop
          warfarin immediately. Administer Prothrombin Complex Concentrate
          (PCC, e.g., Beriplex or Octaplex) as per weight-based and
          INR-based protocol (typically 25–50 IU/kg). Give vitamin K₁
          5–10mg IV (slow infusion over 20–30 minutes, not intramuscular).
          Recheck INR within 30 minutes of PCC. Aim for INR below 1.5.
          Urgent haematology and clinical leadership involvement.
        </li>
      </ul>
      <p>
        Vitamin K₁ administered intravenously reverses warfarin's effect
        within 6–12 hours. PCC provides immediate reversal within minutes by
        replenishing factors II, VII, IX, and X. Fresh frozen plasma (FFP)
        is no longer recommended as first-line reversal due to large volume
        requirements and inferior efficacy compared to PCC.
      </p>

      <h3>Key Drug and Dietary Interactions</h3>
      <p>
        Warfarin has a vast and clinically significant interaction profile.
        Potentiating drugs (increase INR) include: amiodarone, fluconazole,
        metronidazole, co-trimoxazole, ciprofloxacin, erythromycin, statins
        (particularly simvastatin), NSAIDs, aspirin, clopidogrel, SSRIs, and
        thyroid replacement therapy. Inhibiting drugs (decrease INR)
        include: rifampicin, carbamazepine, phenytoin, St John's Wort,
        cholestyramine, and azathioprine. Any change in regular medication
        in a warfarin patient mandates INR monitoring within 5–7 days.
        Vitamin K-rich foods (leafy green vegetables including spinach,
        broccoli, kale) reduce the INR when consumed in large quantities.
        Patients should maintain consistent, not necessarily minimal,
        dietary intake of vitamin K.
      </p>

      <h3>When to Consider Switching to a DOAC</h3>
      <p>
        NICE Technology Appraisals and ESC/BSH guidelines recommend
        considering a switch from warfarin to a DOAC when:
      </p>
      <ul>
        <li>TTR persistently below 65–70% despite adherence and optimised management</li>
        <li>Patient preference (no monitoring requirements, simpler dosing schedule)</li>
        <li>Frequent significant INR fluctuations</li>
        <li>Poor venous access making INR monitoring difficult</li>
      </ul>
      <p>
        DOACs are currently contraindicated in: mechanical heart valves,
        antiphospholipid syndrome (triple positive), severe renal impairment
        (CrCl below 15–30 ml/min depending on agent), and active
        gastrointestinal malabsorption. In these situations, warfarin
        remains the only appropriate oral anticoagulant.
      </p>

      <h3>Frequently Asked Questions</h3>
      <div className="not-prose space-y-4">
        <div>
          <strong className="text-ink">
            Q: How long should warfarin be continued after a VTE?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: For provoked VTE (post-surgical or with identifiable
            transient risk factor): 3 months. For unprovoked VTE: minimum 3
            months, then reassess bleeding vs thrombotic risk for extended
            anticoagulation. For recurrent unprovoked VTE or high
            thrombophilic states: indefinite anticoagulation. For
            cancer-associated VTE: LMWH or DOACs preferred over warfarin.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Does warfarin require bridging therapy for procedures?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Bridging is now recommended only for high-risk patients
            (mechanical mitral valve, mechanical valve with prior
            thromboembolism, or severe thrombophilia). Most AF patients and
            those with mechanical aortic valves can undergo procedures with
            warfarin held (bridging not required). Follow local
            anticoagulation service guidance and procedure-specific
            protocols.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: Can warfarin be used safely in pregnancy?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Warfarin is teratogenic in the first trimester (warfarin
            embryopathy with doses above 5mg/day) and carries risk of fetal
            haemorrhage at delivery. It is generally avoided in the first
            trimester and near term. Women with mechanical heart valves
            represent a special high-risk group where the risk-benefit
            assessment of warfarin vs LMWH vs DOAC in pregnancy requires
            specialist input. Warfarin is safe in breastfeeding.
          </p>
        </div>
        <div>
          <strong className="text-ink">
            Q: What is the role of point-of-care INR testing?
          </strong>
          <p className="mt-1 text-ink-muted">
            A: Point-of-care INR monitors (e.g., CoaguChek) using capillary
            blood from a fingerprick have comparable accuracy to laboratory
            venous INR for most patients. They enable patient self-monitoring
            (PSM), which is associated with improved TTR and quality of
            life. NICE recommends that PSM be offered to patients who are
            willing and able to self-test, particularly those on long-term
            warfarin with good INR stability.
          </p>
        </div>
      </div>
    </div>
  );
}
