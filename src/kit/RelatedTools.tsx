import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { tools } from "@/tools/registry";

export function RelatedTools({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  if (related.length === 0) return null;

  return (
    <div className="not-prose mt-12 border-t border-line pt-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-ink-muted">
        Related tools
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {related.map((t) => (
          <Link
            key={t.slug}
            to={`/${t.slug}`}
            className="group flex items-center justify-between gap-2 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/50"
          >
            <div>
              <p className="text-sm font-semibold text-ink">{t.title}</p>
              <p className="text-xs text-ink-muted">{t.sub}</p>
            </div>
            <ChevronRight
              size={16}
              className="shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
