import { useEffect } from "react";

/**
 * Sends visitors straight to the canonical page on the main site. Privacy,
 * Terms, and the Medical Disclaimer are now maintained in one place
 * (doctorsmedical.org.pk) rather than duplicated across three domains —
 * this keeps old bookmarks/indexed links to this domain's copies working.
 */
export function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6 py-24 text-center text-sm text-ink-muted">
      Redirecting to{" "}
      <a href={to} className="ml-1 font-semibold text-accent hover:underline">
        {to}
      </a>
      …
    </div>
  );
}
