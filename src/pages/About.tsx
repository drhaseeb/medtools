import { ShieldCheck, Stethoscope, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import { config } from "@/config";

const points = [
  {
    icon: Stethoscope,
    title: "Built from published evidence",
    desc: "Every calculator is based on a validated, peer-reviewed scoring system and cross-checked against current clinical guidelines — not re-derived from guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing you enter ever leaves your device",
    desc: "Every calculation runs locally in your browser. We don't collect, store, or transmit any patient data you type into a tool.",
  },
  {
    icon: Wifi,
    title: "Installable and works offline",
    desc: "Add this site to your home screen and keep using every tool even without a signal — useful on the ward, in clinic, or in the field.",
  },
];

export default function About() {
  return (
    <>
      <PageMeta
        title={`About — ${config.name}`}
        description="Free, evidence-based clinical calculators built and maintained by Doctors' Medical Center."
      />
      <div className="pb-24 pt-28">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            About this site
          </span>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Clinical tools, built for the bedside
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            This site is maintained by Doctors' Medical Center, a non-profit
            healthcare, education, and clinical research institution based in
            Mansehra, Pakistan. It brings together a growing library of
            evidence-based calculators and risk scores used every day in
            emergency medicine, internal medicine, and primary care, rebuilt
            as a single fast, installable app rather than scattered across
            separate pages.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-line bg-surface p-7 text-ink-muted">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Editorial standards
            </h2>
            <p className="mt-3 leading-relaxed">
              Each tool page is written and reviewed against its original
              source publication and the most current relevant clinical
              guideline we can identify. Where a guideline has been updated
              or superseded, we update the tool to match. If you spot an
              error or an outdated reference, please{" "}
              <Link to="/tools/contact" className="font-semibold text-accent hover:underline">
                let us know
              </Link>{" "}
              — see our{" "}
              <Link to="/disclaimer" className="font-semibold text-accent hover:underline">
                Medical Disclaimer
              </Link>{" "}
              for how these tools should and shouldn't be used.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Who's behind this
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              This site is built and maintained by{" "}
              <span className="font-semibold text-ink">Dr Haseeb Ahsin</span>, a
              physician at Doctors' Medical Center — full background at{" "}
              <a href="https://drhaseeb.me" className="font-semibold text-accent hover:underline">
                drhaseeb.me
              </a>
              . Every calculator on this site is reviewed clinically before
              publication; corrections and update requests go directly to{" "}
              <Link to="/tools/contact" className="font-semibold text-accent hover:underline">
                the contact page
              </Link>
              , not a generic inbox.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
