import { ChevronRight, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import { org } from "@/content/org";

export default function Contact() {
  return (
    <>
      <PageMeta
        title={`Contact — ${org.name}`}
        description="Reach Doctors' Medical Org by email — or, for clinic appointments and visits, contact Doctors' Medical Center directly."
      />
      <div className="pb-24 pt-28">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Get in touch
          </span>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            For anything about Doctors' Medical Org, our clinical tools, or the doctors' community
            we're building, reach us by email below.
          </p>

          <div className="mt-10 max-w-sm rounded-2xl border border-line bg-surface p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Mail size={20} />
            </div>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Email
            </h3>
            <a
              href={`mailto:${org.email}`}
              className="mt-2 block break-words text-ink hover:text-accent"
            >
              {org.email}
            </a>
          </div>

          <div className="mt-10 rounded-2xl bg-ink px-8 py-10 text-center">
            <p className="text-bg/80">
              Looking to visit or contact Doctors' Medical Center, our clinic?
            </p>
            <a
              href={`${org.clinicUrl}/contact`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
            >
              clinic.doctorsmedical.org.pk <ChevronRight size={16} />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
