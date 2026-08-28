import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Baby,
  Beaker,
  Brain,
  Droplet,
  Droplets,
  Gauge,
  Heart,
  HeartPulse,
  Moon,
  Pill,
  Puzzle,
  Scale,
  Search,
  ShieldAlert,
  Siren,
  Stethoscope,
  Waves,
  type LucideIcon,
} from "lucide-react";

export type ToolCategory = "clinical" | "public" | "dosing";

export interface ToolMeta {
  slug: string;
  title: string;
  sub: string;
  desc: string;
  category: ToolCategory;
  icon: LucideIcon;
}

export const tools: ToolMeta[] = [
  { slug: "sirs-calculator", title: "SIRS Criteria", sub: "Inflammatory Response", desc: "Clinical criteria used to identify a systemic inflammatory response to various insults.", category: "clinical", icon: AlertCircle },
  { slug: "egfr-calculator", title: "eGFR Calculator", sub: "Renal Function", desc: "Estimate glomerular filtration rate (GFR) using serum creatinine (CKD-EPI 2021).", category: "clinical", icon: Droplet },
  { slug: "ibw-calculator", title: "Ideal Body Weight", sub: "Clinical Weight Range", desc: "Calculate Ideal Body Weight (IBW) for medication dosing and nutritional assessment.", category: "clinical", icon: Scale },
  { slug: "acid-base-calculator", title: "Acid-Base Calculator", sub: "ABG Analysis", desc: "Determine primary acid-base disorders and calculate the anion gap from blood gas values.", category: "clinical", icon: Beaker },
  { slug: "grace-risk-score", title: "GRACE Risk Score", sub: "ACS Risk Stratification", desc: "Estimate admission-to-discharge mortality risk for patients with Acute Coronary Syndrome.", category: "clinical", icon: Gauge },
  { slug: "qrisk3-estimator", title: "QRISK3 Estimator", sub: "10-Year CVD Risk", desc: "Estimate the 10-year risk of developing cardiovascular disease based on NICE guidelines.", category: "clinical", icon: HeartPulse },
  { slug: "chadsvasc-score", title: "CHA₂DS₂-VASc", sub: "AF Stroke Risk", desc: "Stroke risk assessment for patients with Atrial Fibrillation (NICE NG196).", category: "clinical", icon: Heart },
  { slug: "orbit-score-calculator", title: "ORBIT Score", sub: "Bleeding Risk (AF)", desc: "Bleeding risk assessment for patients with Atrial Fibrillation (NICE recommended).", category: "clinical", icon: ShieldAlert },
  { slug: "vte-risk-calculator", title: "VTE Risk Calculator", sub: "VTE Probability (Wells)", desc: "Risk stratification for suspected Deep Vein Thrombosis and Pulmonary Embolism.", category: "clinical", icon: Activity },
  { slug: "head-injury-assessment-tool", title: "Head Injury Assessment", sub: "NICE NG232 Guide", desc: "Assess need for CT Head imaging in adults (16 and over) following head injury.", category: "clinical", icon: Brain },
  { slug: "curb65-calculator", title: "CURB-65 Score", sub: "Pneumonia Severity", desc: "Mortality risk assessment for community-acquired pneumonia (NICE NG191).", category: "clinical", icon: Stethoscope },
  { slug: "amts-calculator", title: "AMTS Score", sub: "Cognitive Function", desc: "Abbreviated Mental Test Score for rapid assessment of confusion or dementia.", category: "clinical", icon: Brain },
  { slug: "epworth-sleepiness-scale", title: "Epworth Scale", sub: "Sleepiness Score", desc: "Assessment of excessive daytime sleepiness (ESS).", category: "public", icon: Moon },
  { slug: "child-development-tracker", title: "Child Growth", sub: "Milestone Tracker", desc: "Monitor developmental milestones and growth flags based on NICE NG126 guidelines.", category: "public", icon: Baby },
  { slug: "child-pugh-score", title: "Child-Pugh Score", sub: "Liver Disease Prognosis", desc: "Assess the prognosis of chronic liver disease and cirrhosis severity.", category: "clinical", icon: Activity },
  { slug: "adhd-assessment-tool", title: "ADHD Assessment", sub: "Attention Deficit Screening", desc: "Screening tool for adult and child ADHD symptoms based on ASRS v1.1 and DSM-5 criteria.", category: "public", icon: Brain },
  { slug: "warfarin-dosing-calculator", title: "Warfarin Dosing", sub: "INR Calculator", desc: "Induction and maintenance dosing calculator for Warfarin therapy.", category: "dosing", icon: Pill },
  { slug: "gcs-calculator", title: "Glasgow Coma Scale", sub: "Consciousness Assessment", desc: "Standardized scale to assess the level of consciousness after head injury (GCS 3-15).", category: "clinical", icon: Brain },
  { slug: "pesi-calculator", title: "PESI Score", sub: "PE Severity & Disposition", desc: "Pulmonary Embolism Severity Index — predicts 30-day mortality and guides admission vs discharge.", category: "clinical", icon: Activity },
  { slug: "has-bled-calculator", title: "HAS-BLED Score", sub: "AF Bleeding Risk", desc: "Bleeding risk assessment for anticoagulated AF patients. Identifies modifiable bleeding risk factors.", category: "clinical", icon: ShieldAlert },
  { slug: "meld-calculator", title: "MELD Score", sub: "Liver Transplant Priority", desc: "Model for End-Stage Liver Disease — predicts 90-day mortality and guides transplant allocation.", category: "clinical", icon: Activity },
  { slug: "apache-ii-calculator", title: "APACHE II", sub: "ICU Severity Score", desc: "Acute Physiology and Chronic Health Evaluation II — predicts in-hospital ICU mortality.", category: "clinical", icon: Gauge },
  { slug: "timi-score-calculator", title: "TIMI Risk Score", sub: "UA/NSTEMI Risk", desc: "Predicts 14-day risk of death, MI or urgent revascularisation in UA and NSTEMI.", category: "clinical", icon: HeartPulse },
  { slug: "heart-score-calculator", title: "HEART Score", sub: "Chest Pain Triage", desc: "Predicts 6-week MACE risk in undifferentiated ED chest pain. Guides discharge vs admission.", category: "clinical", icon: Heart },
  { slug: "nihss-calculator", title: "NIHSS", sub: "Stroke Severity", desc: "National Institutes of Health Stroke Scale — quantifies neurological deficit in acute stroke.", category: "clinical", icon: Brain },
  { slug: "mmse-calculator", title: "MMSE Score", sub: "Cognitive Assessment", desc: "Mini-Mental State Examination for comprehensive cognitive screening (30 points).", category: "clinical", icon: Brain },
  { slug: "blatchford-score", title: "Glasgow-Blatchford Score", sub: "GI Bleed Risk", desc: "Risk stratification for acute upper gastrointestinal bleeding (NICE CG141).", category: "clinical", icon: AlertTriangle },
  { slug: "ace-iii-calculator", title: "ACE-III Calculator", sub: "Cognitive Screening", desc: "Addenbrooke's Cognitive Examination III — comprehensive assessment across five cognitive domains.", category: "clinical", icon: Puzzle },
  { slug: "pediatric-headache-assessment-tool", title: "Pediatric Headache Assessment", sub: "Red Flags & Classification", desc: "Screening for red flags and classification of migraine vs tension-type headache in children.", category: "clinical", icon: Baby },
  { slug: "iv-infusion-calculator", title: "IV Infusion Rate", sub: "Vasopressor & Sedation Drips", desc: "Convert a weight-based or fixed dose into an infusion rate for 12 preloaded critical-care drugs, or any drug via manual entry.", category: "dosing", icon: Droplets },
  { slug: "heparin-infusion-calculator", title: "Heparin Infusion", sub: "Weight-Based Nomogram", desc: "Weight-based unfractionated heparin dosing with aPTT-guided titration.", category: "dosing", icon: Waves },
  { slug: "vancomycin-dosing-calculator", title: "Vancomycin Dosing", sub: "AUC-Guided Dosing", desc: "Loading and maintenance vancomycin dosing adjusted for renal function, plus AUC-guided dose adjustment from measured peak/trough levels.", category: "dosing", icon: Beaker },
  { slug: "opioid-conversion-calculator", title: "Opioid Conversion", sub: "Morphine Milligram Equivalents", desc: "Convert between opioids and routes (oral, IV, SC) and calculate total daily morphine milligram equivalents (MME).", category: "dosing", icon: Pill },
  { slug: "rosier-scale", title: "ROSIER Scale", sub: "Stroke Recognition", desc: "Differentiate acute stroke from stroke mimics at first assessment, before imaging is available.", category: "clinical", icon: Siren },
  { slug: "rheumatic-fever-criteria", title: "Jones Criteria", sub: "Rheumatic Fever Diagnosis", desc: "Revised Jones Criteria (2015 AHA) for diagnosing acute rheumatic fever, adjusted for population risk.", category: "clinical", icon: Heart },
  { slug: "sgarbossa-criteria", title: "Sgarbossa Criteria", sub: "MI in LBBB / Paced Rhythm", desc: "Original and Modified (Smith) Sgarbossa criteria for diagnosing acute MI in the presence of LBBB or ventricular pacing.", category: "clinical", icon: Activity },
  { slug: "kawasaki-disease-criteria", title: "Kawasaki Disease Criteria", sub: "Paediatric Diagnostic Criteria", desc: "AHA 2017 diagnostic criteria for classic and incomplete Kawasaki disease in children.", category: "clinical", icon: Baby },
  { slug: "alvarado-score", title: "Alvarado Score", sub: "Acute Appendicitis", desc: "MANTRELS score estimating the likelihood of acute appendicitis from history, exam findings, and labs.", category: "clinical", icon: Search },
  { slug: "paediatric-head-injury-assessment-tool", title: "Paediatric Head Injury Assessment", sub: "NICE NG232 Guide", desc: "Assess need for CT head imaging or observation in children under 16 following head injury.", category: "clinical", icon: Baby },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}
