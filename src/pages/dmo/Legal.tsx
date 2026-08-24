import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import type { LegalSection } from "@/content/legal";
import { org } from "@/content/org";

export function LegalPage({
  title,
  sections,
  lastUpdated,
}: {
  title: string;
  sections: LegalSection[];
  lastUpdated?: string;
}) {
  return (
    <>
      <PageMeta
        title={`${title} — ${org.name}`}
        description={`${title} for Doctors' Medical Org.`}
      />
      <div className="pt-36 pb-24">
        <Container className="max-w-3xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-ink-muted">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight size={14} />
            <span className="text-ink">{title}</span>
          </nav>

          <h1 className="border-b border-line pb-8 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>

          <div className="mt-12 space-y-10 leading-relaxed text-ink-muted">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink">
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-2">{p}</p>
                ))}
              </section>
            ))}

            {lastUpdated && (
              <div className="border-t border-line pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  Last updated — {lastUpdated}
                </p>
              </div>
            )}

            <section className="rounded-2xl border border-line bg-surface p-7">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink">
                Contact Information
              </h2>
              <p>
                Questions? Reach us at{" "}
                <a href={`mailto:${org.email}`} className="font-semibold text-accent hover:underline">
                  {org.email}
                </a>
              </p>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}
