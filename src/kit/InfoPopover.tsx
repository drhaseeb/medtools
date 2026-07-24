import { useEffect, useRef, useState, type ReactNode } from "react";
import { Info, X } from "lucide-react";

export function InfoPopover({ title, children }: { title?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <span ref={ref} className="relative ml-1.5 inline-block align-middle">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="How to administer this"
        aria-expanded={open}
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
          open ? "border-accent bg-accent text-accent-ink" : "border-line text-ink-muted hover:border-accent/50 hover:text-accent"
        }`}
      >
        <Info size={12} />
      </button>

      {open && (
        <div
          role="tooltip"
          className="absolute left-0 top-7 z-30 w-72 rounded-xl border border-line bg-surface p-4 text-left shadow-lg sm:w-80"
        >
          <div className="mb-1.5 flex items-start justify-between gap-2">
            {title && <span className="text-xs font-bold uppercase tracking-widest text-accent">{title}</span>}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-ink-muted hover:text-ink"
            >
              <X size={13} />
            </button>
          </div>
          <div className="text-xs leading-relaxed text-ink-muted">{children}</div>
        </div>
      )}
    </span>
  );
}
