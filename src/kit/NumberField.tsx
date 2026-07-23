export function NumberField({
  label,
  value,
  onChange,
  placeholder,
  hint,
  step,
  min,
  max,
  suffix,
}: {
  label: string;
  value: number | "";
  onChange: (value: number | "") => void;
  placeholder?: string;
  hint?: string;
  step?: number;
  min?: number;
  max?: number;
  suffix?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          step={step}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={(e) => {
            const v = e.target.value;
            onChange(v === "" ? "" : Number(v));
          }}
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
        />
        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-ink-muted">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>}
    </div>
  );
}
