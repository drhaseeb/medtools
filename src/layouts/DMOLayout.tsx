import { useEffect, useRef, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { InstallPrompt } from "@/components/InstallPrompt";
import { org } from "@/content/org";

const links = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const externalLinks = [
  { href: org.clinicUrl, label: "Doctors' Medical Center" },
  { href: org.resusUrl, label: "Resus Runner" },
];

function DMONav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const inTools = location.pathname === "/tools" || location.pathname.startsWith("/tools/");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo to="/" text={org.name} />
            {inTools && (
              <>
                <span className="hidden h-5 w-px bg-line sm:block" />
                <span className="hidden text-xs font-semibold uppercase tracking-widest text-ink-muted sm:block">
                  Clinical Tools
                </span>
              </>
            )}
          </div>

          <div ref={menuRef} className="relative flex items-center gap-3">
            {!inTools && (
              <Link
                to="/tools"
                className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03] active:scale-[0.97] sm:inline-flex"
              >
                Explore Tools
              </Link>
            )}
            <button
              type="button"
              className="rounded-lg p-2 text-ink transition-colors hover:bg-surface-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {open && (
              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-72 rounded-3xl border border-line bg-surface p-3 shadow-[var(--shadow)]">
                <nav className="flex flex-col">
                  <NavLink
                    to="/tools"
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? "bg-accent-soft text-accent" : "text-ink hover:bg-surface-2"
                      }`
                    }
                  >
                    Clinical Tools
                  </NavLink>
                  {links.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive ? "bg-accent-soft text-accent" : "text-ink hover:bg-surface-2"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="my-2 h-px bg-line" />
                <nav className="flex flex-col">
                  {externalLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
                    >
                      {l.label}
                      <ExternalLink size={14} className="shrink-0 opacity-60" />
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

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

function DMOFooter() {
  return (
    <footer className="border-t border-line py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} {org.name}. For informational
            purposes only — not a substitute for clinical judgment.
          </p>
          <div className="flex gap-4">
            <a href={org.social.facebook} target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent hover:underline">Facebook</a>
            <a href={org.social.instagram} target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent hover:underline">Instagram</a>
            <a href={org.social.linkedin} target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent hover:underline">LinkedIn</a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs text-ink-muted sm:justify-start">
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
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

export function DMOLayout() {
  const location = useLocation();
  const inTools = location.pathname === "/tools" || location.pathname.startsWith("/tools/");

  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <DMONav />
      <main className="flex-1">
        <Outlet />
      </main>
      <DMOFooter />
      {inTools && <InstallPrompt />}
    </div>
  );
}
