import { useState, type ReactNode } from "react";
import { Maximize2, X } from "lucide-react";

export function StimulusCard({ label, children }: { label: string; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="rounded-xl border border-line bg-bg p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">{label}</span>
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label="Show full-screen to patient"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Maximize2 size={14} />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-center rounded-lg bg-bg p-2 text-ink">
          {children}
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/98 p-8"
          onClick={() => setExpanded(false)}
        >
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <X size={20} />
          </button>
          <div className="max-h-full max-w-full text-ink">{children}</div>
        </div>
      )}
    </>
  );
}
