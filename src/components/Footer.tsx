import { Link } from "react-router-dom";
import { Container } from "./Container";
import { config } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
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
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs text-ink-muted sm:justify-start">
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
          <Link to="/disclaimer" className="hover:text-accent">Medical Disclaimer</Link>
          <Link to="/terms" className="hover:text-accent">Terms</Link>
          <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
        </div>
      </Container>
    </footer>
  );
}
