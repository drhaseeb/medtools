import { Container } from "./Container";
import { config } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} {config.name}. For informational
          purposes only — not a substitute for clinical judgment.
        </p>
        <a
          href={config.mainSiteUrl}
          className="text-xs font-semibold text-accent hover:underline"
        >
          doctorsmedical.org.pk
        </a>
      </Container>
    </footer>
  );
}
