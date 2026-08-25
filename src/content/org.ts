import { Clock, Heart, ShieldCheck } from "lucide-react";

export const org = {
  name: "Doctors' Medical ORG",
  shortName: "DMO",
  tagline: "Frictionless systems for frontline care.",
  established: 2022,
  mission:
    "To empower clinicians by eliminating administrative friction through intuitive, open-access technology, and to deliver accessible, high-quality healthcare directly to our community.",
  email: "contact@doctorsmedical.org.pk",
  whatsapp: "+1 646 902 4746",
  whatsappHref: "https://wa.me/16469024746",
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
    desc: "Free for any clinician, anywhere — plus in-person care at our own hospital. Cost and location should never be the barrier to good care.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-based",
    desc: "Every tool and every clinical decision is grounded in current, cited guidelines — not guesswork, and not re-derived from memory.",
  },
  {
    icon: Clock,
    title: "Time back to care",
    desc: "Every tool and system we build exists to hand clinicians back the time paperwork and inaccessible guidelines take away from patients.",
  },
] as const;
