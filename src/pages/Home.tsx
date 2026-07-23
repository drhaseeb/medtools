import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { config } from "@/config";
import { tools, type ToolCategory } from "@/tools/registry";

const categories: { value: ToolCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "clinical", label: "Clinical" },
  { value: "public", label: "Public" },
  { value: "dosing", label: "Dosing" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ToolCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((t) => {
      const matchesCategory = category === "all" || t.category === category;
      const matchesQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.sub.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <title>{config.name}</title>
      <section className="pb-16 pt-32 sm:pt-40">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Clinical tools for the bedside.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            {config.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools — e.g. stroke, bleeding, renal…"
                className="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    category === c.value
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-line text-ink-muted hover:border-accent/40"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-ink-muted">
              No tools match "{query}".
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t) => (
                <Link
                  key={t.slug}
                  to={`/tools/${t.slug}`}
                  className="group rounded-2xl border border-line bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-[var(--shadow)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                    <t.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink">{t.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {t.sub}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{t.desc}</p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
