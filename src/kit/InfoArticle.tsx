import { useRef, type ReactNode } from "react";
import { ArticleTOC, useArticleTOC } from "./ArticleTOC";

export function InfoArticle({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const items = useArticleTOC(ref);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
      <div ref={ref} className="prose max-w-none">
        {children}
      </div>
      <aside className="hidden lg:block">
        <ArticleTOC items={items} />
      </aside>
    </div>
  );
}
