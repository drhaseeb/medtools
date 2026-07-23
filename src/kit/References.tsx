export interface Reference {
  text: string;
  href?: string;
}

export function References({ items }: { items: Reference[] }) {
  return (
    <div className="not-prose mt-12 border-t border-line pt-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-ink-muted">
        References
      </h2>
      <ol className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-muted">
        {items.map((ref, i) => (
          <li key={i} className="flex gap-2">
            <span className="shrink-0 text-ink-muted/60">{i + 1}.</span>
            {ref.href ? (
              <a
                href={ref.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent hover:underline"
              >
                {ref.text}
              </a>
            ) : (
              <span>{ref.text}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
