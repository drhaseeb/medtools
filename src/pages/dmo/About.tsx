import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import { org, values } from "@/content/org";

export default function About() {
  return (
    <>
      <PageMeta
        title={`About — ${org.name}`}
        description="Doctors' Medical ORG is a non-profit building free clinical guidelines, tools, and a hospital information system for doctors across Pakistan."
      />
      <div className="pb-24 pt-28">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            About us
          </span>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            A non-profit built around one idea
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {org.mission}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Our story
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Doctors' Medical ORG was founded in {org.established} with a simple observation:
              doctors across Pakistan were losing time they should have spent with patients —
              hunting for guidelines that weren't easily accessible, working around hospital
              paperwork that fought them instead of helping, and going without
              decision-support tools that cost money most clinicians and institutions
              couldn't spare. We set out to fix that by building free clinical guidelines and
              tools, and a hospital information system designed to actually save time instead
              of adding to it. Doctors' Medical Center, our non-profit hospital, puts that
              same mission into practice directly — bringing high-quality healthcare to an
              underserved community in Mansehra — while everything else we build serves
              clinicians more broadly.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              What non-profit means here
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              There are no shareholders, no investors, and no dividend at the end of the
              year. Whatever a service here generates — or whatever it needs — goes back into
              that same service: our tools, our hospital information system, our hospital.
              Nothing is built here to be sold.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              How we're organized
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Doctors' Medical ORG is the non-profit behind everything here. Our main focus is
              building free{" "}
              <Link to="/tools" className="font-semibold text-accent hover:underline">
                clinical guidelines and decision-support tools
              </Link>{" "}
              and a hospital information system designed to save clinicians real time. We also
              run{" "}
              <a href={org.resusUrl} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">
                Resus Runner
              </a>
              , a live resuscitation-support tool.{" "}
              <a href={org.clinicUrl} className="font-semibold text-accent hover:underline">
                Doctors' Medical Center
              </a>
              , a non-profit hospital in Mansehra, Pakistan, is one of the ways we put that
              same mission into practice — bringing high-quality healthcare to an underserved
              community.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Reviewed by real doctors
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Every tool, guideline, and calculator here is built and clinically reviewed by
              PMDC-verified doctors before publication — not sourced from unlicensed
              contributors, and not re-derived from memory. Questions or corrections go
              directly to{" "}
              <Link to="/contact" className="font-semibold text-accent hover:underline">
                our contact page
              </Link>
              , not a generic inbox.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              What's next
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              We're working on making our hospital information system accessible to more
              hospitals and clinics beyond our own, adding CME sessions so doctors can keep
              learning in one place, and building a space for doctors to discuss cases and
              share practical knowledge with each other. None of this is live yet — when it
              is,{" "}
              <Link to="/contact" className="font-semibold text-accent hover:underline">
                our contact page
              </Link>{" "}
              is the place to hear about it first.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
