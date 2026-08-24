import { Link } from "react-router-dom";
import { Container } from "./Container";
import { config } from "@/config";

declare global {
  interface Window {
    googlefc?: {
      callbackQueue: (() => void)[];
      showRevocationMessage?: () => void;
    };
  }
}

function reopenConsentMessage() {
  window.googlefc = window.googlefc || { callbackQueue: [] };
  window.googlefc.callbackQueue.push(() => {
    window.googlefc?.showRevocationMessage?.();
  });
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} {config.name}. For informational
            purposes only — not a substitute for clinical judgment.
          </p>
          <div>
            <Link
              to="/"
              className="text-xs font-semibold text-accent hover:underline"
            >
              doctorsmedical.org.pk
            </Link>
            <span> | </span>
            <a
              href={"https://drhaseeb.me"}
              className="text-xs font-semibold text-accent hover:underline"
            >
              drhaseeb.me
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs text-ink-muted sm:justify-start">
          <Link to="/tools/about" className="hover:text-accent">About</Link>
          <Link to="/tools/contact" className="hover:text-accent">Contact</Link>
          <Link to="/disclaimer" className="hover:text-accent">Medical Disclaimer</Link>
          <Link to="/terms" className="hover:text-accent">Terms</Link>
          <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
          <button type="button" onClick={reopenConsentMessage} className="hover:text-accent">
            Privacy Choices
          </button>
        </div>
      </Container>
    </footer>
  );
}
