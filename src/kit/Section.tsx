import type { ReactNode } from "react";

export function Section({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-accent">
        {title}
      </div>
      {children}
    </div>
  );
}
