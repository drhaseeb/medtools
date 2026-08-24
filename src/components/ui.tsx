import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 max-w-2xl text-lg text-ink-muted leading-relaxed ${alignment}`}>
          {lede}
        </p>
      )}
    </div>
  );
}

type ButtonVariant = "solid" | "outline" | "ghost";

export function LinkButton({
  variant = "solid",
  className = "",
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant }) {
  const styles: Record<ButtonVariant, string> = {
    solid:
      "bg-accent text-accent-ink hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow)]",
    outline:
      "border border-line text-ink hover:border-accent hover:text-accent",
    ghost: "text-ink-muted hover:text-ink",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all ${styles[variant]} ${className}`;

  const isInternal = href?.startsWith("/") ?? false;
  if (isInternal) {
    return (
      <Link to={href!} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={cls} {...props}>
      {children}
    </a>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-line bg-surface p-8 transition-all hover:border-accent/40 ${className}`}
    >
      {children}
    </div>
  );
}
