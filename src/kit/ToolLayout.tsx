import { AlertCircle, ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { ToolMeta } from "@/tools/registry";
import { InfoArticle } from "./InfoArticle";

export function ToolLayout({
  tool,
  children,
  info,
}: {
  tool: ToolMeta;
  children: ReactNode;
  info?: ReactNode;
}) {
  return (
    <div className="pb-24 pt-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} />
            All tools
          </Link>
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            {tool.category}
          </span>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-ink">
            <tool.icon size={26} />
          </div>
          <div>
            <h1 className="font-display text-2xl text-ink">{tool.title}</h1>
            <p className="text-sm text-ink-muted">{tool.sub}</p>
          </div>
        </div>

        <div className="mb-8 flex items-start gap-3 rounded-xl border border-bad/30 bg-bad-soft px-4 py-3">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-bad" />
          <p className="text-xs font-medium leading-relaxed text-bad">
            For informational purposes only — not a substitute for clinical
            judgment. Do not use for definitive diagnosis.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          {children}
        </div>
      </div>

      {info && (
        <div className="mx-auto mt-16 max-w-5xl border-t border-line px-6 pt-10">
          <InfoArticle>{info}</InfoArticle>
        </div>
      )}
    </div>
  );
}
