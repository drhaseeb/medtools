import { useEffect, useRef, type CSSProperties } from "react";
import { pushAd } from "@/lib/ads";
import { config } from "@/config";

export function AdSlot({
  slot,
  format = "auto",
  className = "",
  style,
}: {
  slot: string;
  format?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    pushAd();
  }, []);

  // Placeholder slot IDs haven't been created in AdSense yet — render
  // nothing rather than an empty/broken ad unit until a real slot exists.
  if (!slot) return null;

  return (
    <div className={`not-prose ${className}`}>
      <p className="mb-1.5 text-center text-[0.65rem] font-semibold uppercase tracking-widest text-ink-muted">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={config.adClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
