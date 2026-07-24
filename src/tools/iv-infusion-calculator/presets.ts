export type AmountUnit = "mcg" | "mg" | "units";
export type TimeUnit = "min" | "hr";

export interface DrugPreset {
  id: string;
  name: string;
  drugClass: string;
  weightBased: boolean;
  doseAmountUnit: AmountUnit;
  doseTimeUnit: TimeUnit;
  bagAmountUnit: "mg" | "units";
  defaultBagAmount: number;
  defaultVolumeMl: number;
  rangeMin: number;
  rangeMax: number;
  startDose: number;
  note: string;
  titration: string;
}

export function doseUnitLabel(p: DrugPreset) {
  return p.weightBased
    ? `${p.doseAmountUnit}/kg/${p.doseTimeUnit}`
    : `${p.doseAmountUnit}/${p.doseTimeUnit}`;
}

export const presetGroups: { label: string; presets: DrugPreset[] }[] = [
  {
    label: "Vasopressors & Inotropes",
    presets: [
      {
        id: "norepinephrine",
        name: "Norepinephrine",
        drugClass: "Vasopressor (α1 > β1)",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 4,
        defaultVolumeMl: 250,
        rangeMin: 0.01,
        rangeMax: 3,
        startDose: 0.05,
        note: "First-line vasopressor for septic shock (Surviving Sepsis Campaign).",
        titration:
          "Titrate every 5–10 min in increments of 0.02–0.05 mcg/kg/min to target MAP ≥ 65 mmHg. Consider adding vasopressin at moderate doses rather than escalating norepinephrine alone indefinitely.",
      },
      {
        id: "epinephrine",
        name: "Epinephrine",
        drugClass: "Vasopressor/Inotrope (α + β)",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 4,
        defaultVolumeMl: 250,
        rangeMin: 0.01,
        rangeMax: 0.5,
        startDose: 0.05,
        note: "Second-line agent added to norepinephrine, or first-line in anaphylaxis/cardiac arrest infusions.",
        titration:
          "Titrate in increments of 0.01–0.02 mcg/kg/min. Watch for tachyarrhythmia and rising lactate (a pharmacologic, not always hypoperfusion-related, effect).",
      },
      {
        id: "dopamine",
        name: "Dopamine",
        drugClass: "Vasopressor/Inotrope (dose-dependent)",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 400,
        defaultVolumeMl: 250,
        rangeMin: 2,
        rangeMax: 20,
        startDose: 5,
        note: "\"Renal-dose\" dopamine (<3 mcg/kg/min) is not supported by evidence and is no longer recommended for renal protection.",
        titration:
          "Titrate in increments of 2–5 mcg/kg/min. More arrhythmogenic than norepinephrine — reserve for bradycardia-associated hypotension or when norepinephrine is unavailable.",
      },
      {
        id: "dobutamine",
        name: "Dobutamine",
        drugClass: "Inotrope (β1)",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 250,
        defaultVolumeMl: 250,
        rangeMin: 2,
        rangeMax: 20,
        startDose: 2.5,
        note: "Used for cardiogenic shock/low cardiac output states, not as a primary blood-pressure agent — it can cause vasodilation and hypotension.",
        titration:
          "Titrate in increments of 2.5 mcg/kg/min against cardiac index/clinical perfusion markers, not blood pressure alone. Doses above 20 mcg/kg/min rarely add benefit and increase arrhythmia risk.",
      },
      {
        id: "phenylephrine",
        name: "Phenylephrine",
        drugClass: "Vasopressor (pure α1)",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 20,
        defaultVolumeMl: 250,
        rangeMin: 0.1,
        rangeMax: 5,
        startDose: 0.5,
        note: "No inotropic effect — causes reflex bradycardia. Useful when tachyarrhythmia limits norepinephrine/epinephrine use.",
        titration:
          "Titrate in increments of 0.1–0.2 mcg/kg/min. Avoid as a sole long-term agent in cardiogenic shock given its pure afterload-raising effect with no inotropy.",
      },
      {
        id: "vasopressin",
        name: "Vasopressin",
        drugClass: "Vasopressor (V1 receptor)",
        weightBased: false,
        doseAmountUnit: "units",
        doseTimeUnit: "min",
        bagAmountUnit: "units",
        defaultBagAmount: 20,
        defaultVolumeMl: 100,
        rangeMin: 0.01,
        rangeMax: 0.04,
        startDose: 0.03,
        note: "Fixed-rate infusion — NOT weight-based. Typically added as a second agent alongside norepinephrine rather than titrated up alone.",
        titration:
          "Usually run at a fixed 0.03 units/min (up to 0.04) rather than titrated — added as a catecholamine-sparing adjunct, not escalated further for additional pressor effect.",
      },
      {
        id: "milrinone",
        name: "Milrinone",
        drugClass: "Inodilator (PDE-3 inhibitor)",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 20,
        defaultVolumeMl: 100,
        rangeMin: 0.125,
        rangeMax: 0.75,
        startDose: 0.25,
        note: "Renally cleared — reduce dose substantially in renal impairment. Longer half-life than dobutamine means slower titration response.",
        titration:
          "Titrate in increments of 0.125 mcg/kg/min no more often than every 30–60 min given its longer half-life. Loading boluses are often omitted in hypotensive patients.",
      },
    ],
  },
  {
    label: "Sedation & Analgesia",
    presets: [
      {
        id: "propofol",
        name: "Propofol",
        drugClass: "Sedative-hypnotic",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 1000,
        defaultVolumeMl: 100,
        rangeMin: 5,
        rangeMax: 50,
        startDose: 5,
        note: "Fixed 10 mg/mL (1%) emulsion — do not further dilute. Monitor for propofol-related infusion syndrome with high doses (>67 mcg/kg/min) sustained beyond 48 hours.",
        titration:
          "Titrate in increments of 5–10 mcg/kg/min every 5–10 min to target sedation score (e.g. RASS). Reassess sedation depth daily with a spontaneous awakening trial where appropriate.",
      },
      {
        id: "midazolam",
        name: "Midazolam",
        drugClass: "Benzodiazepine",
        weightBased: true,
        doseAmountUnit: "mg",
        doseTimeUnit: "hr",
        bagAmountUnit: "mg",
        defaultBagAmount: 50,
        defaultVolumeMl: 50,
        rangeMin: 0.02,
        rangeMax: 0.1,
        startDose: 0.04,
        note: "Benzodiazepine-based sedation is generally reserved for alcohol withdrawal, seizures, or when propofol/dexmedetomidine are contraindicated, per PADIS guidance favoring non-benzodiazepine sedation where possible.",
        titration:
          "Titrate cautiously — active metabolites accumulate in renal impairment and with prolonged infusion, prolonging time to awakening.",
      },
      {
        id: "fentanyl",
        name: "Fentanyl",
        drugClass: "Opioid analgesic",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "hr",
        bagAmountUnit: "mg",
        defaultBagAmount: 2.5,
        defaultVolumeMl: 50,
        rangeMin: 0.7,
        rangeMax: 10,
        startDose: 1,
        note: "Preferred first-line ICU analgesic in haemodynamically unstable patients given minimal histamine release compared with morphine.",
        titration:
          "Titrate against a validated pain scale (e.g. CPOT/BPS) in mechanically ventilated patients, following an analgesia-first sedation strategy.",
      },
      {
        id: "dexmedetomidine",
        name: "Dexmedetomidine",
        drugClass: "α2-agonist sedative",
        weightBased: true,
        doseAmountUnit: "mcg",
        doseTimeUnit: "hr",
        bagAmountUnit: "mg",
        defaultBagAmount: 0.2,
        defaultVolumeMl: 50,
        rangeMin: 0.2,
        rangeMax: 1.5,
        startDose: 0.4,
        note: "Preserves respiratory drive and enables \"cooperative sedation\" — a loading bolus is often omitted in current practice to reduce bradycardia/hypotension risk.",
        titration:
          "Titrate in small increments no more often than every 30 min; bradycardia is the main dose-limiting effect, particularly alongside beta-blockers.",
      },
    ],
  },
  {
    label: "Other",
    presets: [
      {
        id: "nitroglycerin",
        name: "Nitroglycerin",
        drugClass: "Venodilator",
        weightBased: false,
        doseAmountUnit: "mcg",
        doseTimeUnit: "min",
        bagAmountUnit: "mg",
        defaultBagAmount: 50,
        defaultVolumeMl: 250,
        rangeMin: 5,
        rangeMax: 200,
        startDose: 10,
        note: "Fixed-rate infusion — NOT weight-based. Used for acute coronary syndrome, hypertensive emergency, and acute pulmonary oedema.",
        titration:
          "Titrate in increments of 5–10 mcg/min every 5 min against blood pressure/symptom relief. Tolerance develops within 24–48 hours of continuous use.",
      },
    ],
  },
];

export const allPresets: DrugPreset[] = presetGroups.flatMap((g) => g.presets);
