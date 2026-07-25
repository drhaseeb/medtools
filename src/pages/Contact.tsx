import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { PageMeta } from "@/components/PageMeta";
import { config } from "@/config";

export default function Contact() {
  return (
    <>
      <PageMeta
        title={`Contact — ${config.name}`}
        description="Get in touch about the Doctors' Medical Center clinical tools — corrections, suggestions for new tools, or general enquiries."
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
            This tools site is run by Doctors' Medical Center, the same
            non-profit team behind our hospital and teaching institute. For
            anything related to these clinical calculators — corrections,
            suggestions for new tools, or general enquiries — reach us
            through any of the channels below.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Mail size={20} />
              </div>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Email
              </h3>
              <a
                href={`mailto:${config.email}`}
                className="mt-2 block break-words text-ink hover:text-accent"
              >
                {config.email}
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Phone size={20} />
              </div>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Phone
              </h3>
              <a href={config.phoneHref} className="mt-2 block text-ink hover:text-accent">
                {config.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <MapPin size={20} />
              </div>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Address
              </h3>
              <p className="mt-2 text-ink">{config.address}</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-ink px-8 py-10 text-center">
            <p className="text-bg/80">
              For hospital appointments and general enquiries, visit our main
              site.
            </p>
            <a
              href={config.contactUrl}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
            >
              doctorsmedical.org.pk/contact <ChevronRight size={16} />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
