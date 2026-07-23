import type { ReactNode } from "react";

export type Tone = "good" | "warn" | "bad" | "accent";

const toneStyles: Record<Tone, { border: string; bg: string; text: string }> = {
  good: { border: "border-good/40", bg: "bg-good-soft", text: "text-good" },
  warn: { border: "border-warn/40", bg: "bg-warn-soft", text: "text-warn" },
  bad: { border: "border-bad/40", bg: "bg-bad-soft", text: "text-bad" },
  accent: { border: "border-accent/40", bg: "bg-accent-soft", text: "text-accent" },
};

export function ResultPanel({
  tone,
  eyebrow,
  value,
  valueSuffix,
  description,
  breakdown,
  footnote,
}: {
  tone: Tone;
  eyebrow: string;
  value: ReactNode;
  valueSuffix?: string;
  description?: string;
  breakdown?: ReactNode;
  footnote?: ReactNode;
}) {
  const t = toneStyles[tone];
  return (
    <div className={`rounded-2xl border ${t.border} ${t.bg} p-6`}>
      <div className={`text-xs font-bold uppercase tracking-widest ${t.text}`}>
        {eyebrow}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className={`font-display text-5xl font-medium ${t.text}`}>{value}</span>
        {valueSuffix && (
          <span className="text-lg font-medium text-ink-muted">{valueSuffix}</span>
        )}
      </div>
      {description && (
        <p className={`mt-1 text-sm font-semibold ${t.text}`}>{description}</p>
      )}
      {breakdown && (
        <div className="mt-3 text-sm text-ink-muted">{breakdown}</div>
      )}
      {footnote && (
        <div className="mt-4 border-t border-line/60 pt-4 text-sm leading-relaxed text-ink-muted">
          {footnote}
        </div>
      )}
    </div>
  );
}
