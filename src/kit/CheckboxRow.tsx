export function CheckboxRow({
  label,
  checked,
  onChange,
  points,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  points?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
        checked
          ? "border-accent bg-accent-soft"
          : "border-line hover:border-accent/40"
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
          checked ? "border-accent bg-accent" : "border-line"
        }`}
      >
        {checked && (
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-accent-ink" fill="none">
            <path
              d="M3 8.5 6.5 12 13 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="flex-1 text-sm font-medium text-ink">{label}</span>
      {points && (
        <span className="shrink-0 text-xs font-bold text-accent">{points}</span>
      )}
    </button>
  );
}
