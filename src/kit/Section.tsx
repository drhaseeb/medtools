import type { ReactNode } from "react";

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-bold uppercase tracking-widest text-accent">
        {title}
      </div>
      {children}
    </div>
  );
}
