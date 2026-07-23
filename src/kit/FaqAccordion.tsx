import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line py-4 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold text-ink">{item.q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-ink-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.a}</p>}
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="not-prose rounded-2xl border border-line bg-surface px-5">
      {items.map((item) => (
        <FaqRow key={item.q} item={item} />
      ))}
    </div>
  );
}
