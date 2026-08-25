import {
  Activity,
  Beaker,
  Building2,
  ChevronRight,
  Droplets,
  Gauge,
  HeartPulse,
  Puzzle,
  Quote,
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
          className="absolute inset-0 -z-10 text-ink/[0.05]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
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
            Healthcare systems shouldn't be the hardest part of the job. We engineer
            streamlined software to ensure nothing stands between the physician and the
            patient.
          </p>
        </Container>
      </section>

      {/* Mission */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Our mission" title="Why we exist" />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Quote size={32} aria-hidden className="mx-auto text-accent/40" />
            <p className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              {org.mission}
            </p>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-ink-muted">
            We don't answer to shareholders or investors. Surplus goes back into
            building and maintaining our tools, our hospital information system, and
            our hospital — not into anyone's pocket. If something we do stops serving
            that purpose, we stop doing it.
          </p>
        </Container>
      </section>

      {/* Clinical Tools */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Clinical Tools"
            title="Smart Decision Support, Free at the Bedside."
            lede="Immediate, evidence-based companions at the bedside — removing the guesswork from complex dosing and scoring, so the right answer is never more than a few taps away."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toolHighlights.map((t) => (
              <Link
                key={t.slug}
                to={`/tools/${t.slug}`}
                className="block h-full rounded-2xl border border-line bg-bg p-6 transition-transform hover:-translate-y-1"
              >
                <div aria-hidden className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
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
            <div aria-hidden className="order-2 flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-surface lg:order-1">
              <HeartPulse size={96} strokeWidth={1} className="text-accent" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Resus Runner</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Focused Resuscitation. Automated Logging.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                An essential digital recorder for the code team — managing the clock,
                logging every shock and dose in real time, and preserving complete
                situational awareness without ever pulling focus from the patient.
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

      {/* Hospital Information System */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Hospital Information System</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Less Screen. More Patient.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Engineered for clinical speed — every screen, click, and workflow in
                our hospital information system is designed to cut time spent at a
                keyboard, so more of every shift goes to patients instead of
                paperwork.
              </p>
              <div className="mt-8">
                <Link
                  to="/about#whats-next"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                >
                  More on where this is headed <ChevronRight size={14} />
                </Link>
              </div>
            </div>
            <div aria-hidden className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-bg">
              <Gauge size={96} strokeWidth={1} className="text-accent" />
            </div>
          </div>
        </Container>
      </section>

      {/* Doctors' Medical Center */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div aria-hidden className="order-2 flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-surface lg:order-1">
              <Building2 size={96} strokeWidth={1} className="text-accent" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Doctors' Medical Center</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Community Care Rooted in Excellence.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Doctors' Medical Center is where this mission takes physical form —
                not just a facility, but the living embodiment of our patient-first
                philosophy, bringing high-quality healthcare to an underserved
                community.
              </p>
              <div className="mt-8">
                <LinkButton variant="outline" href={org.clinicUrl}>
                  Visit Doctors' Medical Center <ChevronRight size={16} />
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="How we operate" title="What guides us" />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="h-full">
                <div aria-hidden className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
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
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div aria-hidden className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line bg-surface">
              <Mark className="h-32 w-32 text-accent" />
            </div>
            <div>
              <Eyebrow>Learn more</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                There's more to the story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                How we're organized, who reviews what we build, and where things are
                headed next.
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
