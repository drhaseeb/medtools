import { useEffect, useState, type RefObject } from "react";

interface TocItem {
  id: string;
  text: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function scan(el: HTMLElement): TocItem[] {
  const headings = Array.from(el.querySelectorAll("h2"));
  const used = new Set<string>();
  return headings.map((h) => {
    const text = h.textContent ?? "";
    let id = h.id || slugify(text);
    while (used.has(id)) id += "-2";
    used.add(id);
    h.id = id;
    return { id, text };
  });
}

export function useArticleTOC(containerRef: RefObject<HTMLElement | null>) {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setItems(scan(el));
    update();

    const observer = new MutationObserver(update);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [containerRef]);

  return items;
}

export function ArticleTOC({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;
  return (
    <nav className="rounded-2xl border border-line bg-surface p-5 lg:sticky lg:top-24">
      <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">
        On this page
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-ink-muted transition-colors hover:text-accent"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
