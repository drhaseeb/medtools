import {
  Activity,
  Beaker,
  ChevronRight,
  Droplets,
  HeartPulse,
  Puzzle,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import { Mark } from "@/components/Logo";
import { Card, Eyebrow, LinkButton, SectionHeading } from "@/components/ui";
import { org, values } from "@/content/org";

const toolHighlights = [
  { icon: Activity, title: "GRACE Risk Score", desc: "ACS mortality risk stratification.", slug: "grace-risk-score" },
  { icon: HeartPulse, title: "HEART Score", desc: "Chest pain triage for undifferentiated ED presentations.", slug: "heart-score-calculator" },
  { icon: Droplets, title: "IV Infusion Rate", desc: "One-click vasopressor and sedation dosing.", slug: "iv-infusion-calculator" },
  { icon: Beaker, title: "Vancomycin Dosing", desc: "Renal-adjusted, AUC-guided dosing.", slug: "vancomycin-dosing-calculator" },
  { icon: Puzzle, title: "ACE-III", desc: "Comprehensive cognitive screening across five domains.", slug: "ace-iii-calculator" },
  { icon: Stethoscope, title: "CURB-65", desc: "Pneumonia severity, per NICE NG191.", slug: "curb65-calculator" },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Doctors' Medical ORG - A Non-Profit"
        description="A non-profit building free clinical guidelines, decision-support tools, and a hospital information system for doctors across Pakistan."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div
          aria-hidden
          className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent-soft blur-3xl"
        />
        <Container className="relative">
          <Eyebrow>Non-profit, since {org.established}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {org.tagline}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            A non-profit built on one belief: healthcare works better when the people
            delivering it aren't fighting the system meant to support them.
          </p>
        </Container>
      </section>

      {/* Mission */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Our mission" title="Why we exist" />
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-center text-lg leading-relaxed text-ink-muted">
            <p>{org.mission}</p>
            <p>
              We don't answer to shareholders or investors. Surplus goes back into building
              and maintaining our tools, our hospital information system, and our hospital —
              not into anyone's pocket. If something we do stops serving that purpose, we
              stop doing it.
            </p>
          </div>
        </Container>
      </section>

      {/* Clinical Tools */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Free, for any clinician"
            title="Evidence-based clinical tools"
            lede="Guideline-based calculators and assessments — vasopressor dosing, stroke and cognitive screening, bleeding and stroke risk scores — built for accuracy at the bedside, reviewed against current clinical guidelines, and free to use anywhere."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <LinkButton href="/tools">
              Explore Clinical Tools <ChevronRight size={16} />
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* Resus Runner */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-surface lg:order-1">
              <HeartPulse size={96} strokeWidth={1} className="text-accent" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Live, in the resus bay</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Resus Runner
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                A live, timing-driven companion for Adult ALS, Paediatric ALS, and Newborn
                resuscitations — prompting rhythm checks, shocks, and drug timing per RCUK
                2025 guidance, so the team can focus on the patient, not the clock.
              </p>
              <div className="mt-8">
                <LinkButton variant="outline" href={org.resusUrl}>
                  Open Resus Runner <ChevronRight size={16} />
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Doctors' Medical Center */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>One of our programs</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Doctors' Medical Center
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                A non-profit hospital bringing high-quality healthcare to an underserved
                community in Mansehra, Pakistan — built on the same principle as everything
                else we do: care organized around the people who need it, not around profit.
              </p>
              <div className="mt-8">
                <LinkButton variant="outline" href={org.clinicUrl}>
                  Visit Doctors' Medical Center <ChevronRight size={16} />
                </LinkButton>
              </div>
            </div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-bg">
              <Stethoscope size={96} strokeWidth={1} className="text-accent" />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="How we operate" title="What guides us" />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-bg">
              <Mark className="h-32 w-32 text-accent" />
            </div>
            <div>
              <Eyebrow>Learn more</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                There's more to the story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                How we're organized, who reviews what we build, and where things are headed
                next.
              </p>
              <div className="mt-8">
                <LinkButton variant="outline" href="/about">
                  More about us <ChevronRight size={16} />
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
