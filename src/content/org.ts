import { Clock, Heart, ShieldCheck } from "lucide-react";

export const org = {
  name: "Doctors' Medical ORG",
  shortName: "DMO",
  tagline: "Less time on paperwork. More time for patients.",
  established: 2022,
  mission:
    "Doctors' Medical ORG was founded in 2022 to improve healthcare across Pakistan — by making clinical guidelines and decision-support tools freely accessible to doctors everywhere, and by building a hospital information system designed to actually save clinicians time instead of adding to their workload.",
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
    desc: "Clinical guidelines and decision-support tools organized so cost and location are never the barrier — free for any clinician, anywhere, plus in-person care at our own hospital.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-based",
    desc: "Every tool and every clinical decision is grounded in current, cited guidelines — not guesswork, and not re-derived from memory.",
  },
  {
    icon: Clock,
    title: "Time back to care",
    desc: "The hospital information system we're building and the tools we maintain exist for one reason: to hand clinicians back the time that paperwork and inaccessible guidelines take away from patients.",
  },
] as const;
