export function OptionListField<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  label?: string;
  options: { value: T; label: string; badge?: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      {label && (
        <div className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
          {label}
        </div>
      )}
      <div className="flex flex-col gap-2">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={String(o.value)}
              type="button"
              onClick={() => onChange(o.value)}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                active
                  ? "border-accent bg-accent-soft text-ink"
                  : "border-line text-ink-muted hover:border-accent/40"
              }`}
            >
              <span>{o.label}</span>
              {o.badge && (
                <span
                  className={`ml-3 shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                    active ? "bg-accent text-accent-ink" : "bg-surface-2 text-ink-muted"
                  }`}
                >
                  {o.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
