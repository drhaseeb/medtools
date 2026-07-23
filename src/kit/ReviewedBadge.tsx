import { ShieldCheck } from "lucide-react";

export function ReviewedBadge({ updated }: { updated: string }) {
  return (
    <div className="not-prose mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-ink-muted">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5">
        <ShieldCheck size={13} className="text-accent" />
        Clinically reviewed
      </span>
      <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1.5">
        Last updated {updated}
      </span>
    </div>
  );
}
