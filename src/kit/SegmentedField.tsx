export function SegmentedField<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label?: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
          {label}
        </label>
      )}
      <div className="flex gap-2">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                active
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-ink-muted hover:border-accent/40"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
