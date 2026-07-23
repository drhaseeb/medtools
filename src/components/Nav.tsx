import { Logo } from "./Logo";
import { Container } from "./Container";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden h-5 w-px bg-line sm:block" />
            <span className="hidden text-xs font-semibold uppercase tracking-widest text-ink-muted sm:block">
              Clinical Tools
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
