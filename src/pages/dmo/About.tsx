import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import { org, values } from "@/content/org";

export default function About() {
  return (
    <>
      <PageMeta
        title={`About — ${org.name}`}
        description="Doctors' Medical ORG is a non-profit supporting healthcare, education, and clinical research in Pakistan."
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
              Doctors' Medical ORG started with a single clinic in Mansehra, in a part of
              Pakistan where good emergency and specialist care wasn't always close by. Since{" "}
              {org.established}, that clinic — Doctors' Medical Center — has grown into a
              teaching hospital, training the doctors and nurses who go on to treat patients
              across the region. Building good clinical tools followed naturally from the
              same problem: the same clinicians who couldn't always reach the nearest
              specialist often couldn't afford licensed clinical decision-support either, so
              we started building our own and gave it away for free.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              What non-profit means here
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              There are no shareholders, no investors, and no dividend at the end of the
              year. Whatever a service here generates — or whatever it needs — goes back into
              that same service: clinical equipment and staff at the clinic, upkeep and new
              features for the tools, training materials for students. Nothing is built here
              to be sold.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              How we're organized
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Doctors' Medical ORG is the non-profit behind everything here. Our flagship program is{" "}
              <a href={org.clinicUrl} className="font-semibold text-accent hover:underline">
                Doctors' Medical Center
              </a>
              , a clinic and teaching hospital in Mansehra, Pakistan — offering in-person care, a
              postgraduate diploma program for doctors, undergraduate nursing education, and a
              clinical research office. We also build and maintain{" "}
              <Link to="/tools" className="font-semibold text-accent hover:underline">
                free clinical tools
              </Link>{" "}
              used by clinicians well beyond our own patients, and run{" "}
              <a href={org.resusUrl} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">
                Resus Runner
              </a>
              , a live resuscitation-support tool.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Who's behind this
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Doctors' Medical ORG was founded by{" "}
              <span className="font-semibold text-ink">Dr Haseeb Ahsin</span>, a physician at
              Doctors' Medical Center — full background at{" "}
              <a href="https://drhaseeb.me" className="font-semibold text-accent hover:underline">
                drhaseeb.me
              </a>
              . Questions or corrections go directly to{" "}
              <Link to="/contact" className="font-semibold text-accent hover:underline">
                our contact page
              </Link>
              , not a generic inbox.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
