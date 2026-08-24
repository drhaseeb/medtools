import { Heart, ShieldCheck, Stethoscope } from "lucide-react";

export const org = {
  name: "Doctors' Medical ORG",
  shortName: "DMO",
  tagline: "Built to help. Never to profit.",
  established: 2024,
  mission:
    "Doctors' Medical ORG is a non-profit dedicated to strengthening healthcare in underserved communities in Pakistan — through Doctors' Medical Center, our clinic and teaching hospital, and through free clinical tools built for working clinicians everywhere.",
  email: "contact@doctorsmedical.org.pk",
  clinicUrl: "https://clinic.doctorsmedical.org.pk",
  toolsUrl: "/tools",
  resusUrl: "https://resus.doctorsmedical.org.pk",
  social: {
    facebook: "https://www.facebook.com/doctorsmedicalorg/",
    instagram: "https://www.instagram.com/doctorsmedicalorg/",
    linkedin: "https://www.linkedin.com/company/doctorsmedical/",
  },
} as const;

export const values = [
  {
    icon: Heart,
    title: "Access first",
    desc: "Care and clinical tools organized so cost and location are never the barrier — in person at our clinic, or free online for any clinician.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-based",
    desc: "Every tool and every clinical decision is grounded in current, cited guidelines — not guesswork, and not re-derived from memory.",
  },
  {
    icon: Stethoscope,
    title: "Teaching, always",
    desc: "Doctors' Medical Center trains the next generation of doctors and nurses alongside treating today's patients.",
  },
] as const;
