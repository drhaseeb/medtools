import { useRef, type ReactNode } from "react";
import { ArticleTOC, useArticleTOC } from "./ArticleTOC";
import { AdSlot } from "./AdSlot";
import { config } from "@/config";

export function InfoArticle({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const items = useArticleTOC(ref);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
      <div ref={ref} className="prose max-w-none">
        {children}
      </div>
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <ArticleTOC items={items} />
          <AdSlot slot={config.adSlots.sidebar} style={{ minHeight: 250 }} />
        </div>
      </aside>
    </div>
  );
}
