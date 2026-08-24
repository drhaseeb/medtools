import {
  Activity,
  Beaker,
  ChevronRight,
  Droplets,
  Heart,
  Puzzle,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import { Mark } from "@/components/Logo";
import { org } from "@/content/org";
import { tools } from "@/tools/registry";

const toolHighlights = [
  { icon: Activity, title: "GRACE Risk Score", desc: "ACS mortality risk stratification.", slug: "grace-risk-score" },
  { icon: Heart, title: "HEART Score", desc: "Chest pain triage for undifferentiated ED presentations.", slug: "heart-score-calculator" },
  { icon: Droplets, title: "IV Infusion Rate", desc: "One-click vasopressor and sedation dosing.", slug: "iv-infusion-calculator" },
  { icon: Beaker, title: "Vancomycin Dosing", desc: "Renal-adjusted, AUC-guided dosing.", slug: "vancomycin-dosing-calculator" },
  { icon: Puzzle, title: "ACE-III", desc: "Comprehensive cognitive screening across five domains.", slug: "ace-iii-calculator" },
  { icon: Stethoscope, title: "CURB-65", desc: "Pneumonia severity, per NICE NG191.", slug: "curb65-calculator" },
];

const programs = [
  {
    icon: Stethoscope,
    title: "Doctors' Medical Center",
    desc: "Our clinic and teaching hospital in Mansehra — in-person care, a postgraduate teaching program for doctors, undergraduate nursing education, and a clinical research office.",
    href: org.clinicUrl,
  },
  {
    icon: ShieldCheck,
    title: "Clinical Tools",
    desc: `${tools.length}+ free, evidence-based calculators and risk scores, used by clinicians everywhere — built and maintained in-house, not licensed from anyone.`,
    href: org.toolsUrl,
  },
  {
    icon: Heart,
    title: "Resus Runner",
    desc: "A live, timing-driven tool that runs alongside an actual resuscitation, prompting rhythm checks, shocks, and drug timing per RCUK 2025 guidance.",
    href: org.resusUrl,
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Doctors' Medical Org - A Non-Profit"
        description="A non-profit supporting healthcare, education, and clinical research in Pakistan — through our clinic, free clinical tools, and a growing community for doctors."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div
          aria-hidden
          className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent-soft blur-3xl"
        />
        <Container className="relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Non-profit, since {org.established}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Healthcare, education, and tools built for the people who need them.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {org.mission}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Clinical Tools <ChevronRight size={16} />
            </Link>
            <a
              href={org.clinicUrl}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Visit Doctors' Medical Center
            </a>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">What we do</span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Three programs, one mission
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {programs.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-2xl border border-line bg-surface p-7 transition-all hover:border-accent/50 hover:shadow-[var(--shadow)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more <ChevronRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools showcase — this IS the site's core content, not a teaser */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Free, for any clinician</span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {tools.length}+ evidence-based clinical tools
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Guideline-based calculators and assessments — vasopressor dosing, stroke and cognitive
            screening, bleeding and stroke risk scores — built for accuracy at the bedside, reviewed
            against current clinical guidelines, and free to use anywhere.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toolHighlights.map((t) => (
              <Link
                key={t.slug}
                to={`/tools/${t.slug}`}
                className="block h-full rounded-2xl border border-line bg-bg p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <t.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.02]"
            >
              Explore all {tools.length} tools <ChevronRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-surface">
              <Mark className="h-32 w-32 text-accent" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Our vision</span>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Access first, evidence always
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                We believe good healthcare and good clinical decision-support shouldn't depend on
                where you happen to practice or who can afford them. Doctors' Medical Center delivers
                that in person, in one of the communities that needs it most. Our clinical tools
                deliver it to any clinician, anywhere, for free. Neither exists to make money — both
                exist because the gap they fill is real.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                >
                  More about us <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community teaser — honest about what exists today */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-line bg-bg p-10 text-center sm:p-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Users size={26} />
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
              <Sprout size={12} /> Coming soon
            </span>
            <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              A community for doctors
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              We're building a space for doctors to connect, learn, and support one another —
              starting with CME content and discussion, with a members' email service to follow.
              Nothing to sign up for yet, but if it's useful to know when it launches, our contact
              email is open.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
