import { Suspense, lazy, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { PageMeta } from "@/components/PageMeta";
import { ToolLayout } from "@/kit/ToolLayout";
import { getTool } from "@/tools/registry";

export default function ToolPage() {
  const { slug } = useParams();
  const tool = slug ? getTool(slug) : undefined;

  const Calculator = useMemo(() => {
    if (!slug) return null;
    return lazy(() => import(`../tools/${slug}/index.tsx`));
  }, [slug]);

  const Info = useMemo(() => {
    if (!slug) return null;
    return lazy(() =>
      import(`../tools/${slug}/info.tsx`).catch(() => ({
        default: () => null,
      })),
    );
  }, [slug]);

  if (!tool || !Calculator) {
    return <Navigate to="/tools" replace />;
  }

  return (
    <>
      <PageMeta title={`${tool.title} — Doctors' Medical ORG`} description={tool.desc} />
      <ToolLayout
        key={slug}
        tool={tool}
        info={
          Info && (
            <Suspense fallback={null}>
              <Info />
            </Suspense>
          )
        }
      >
        <Suspense
          fallback={
            <div className="flex h-40 items-center justify-center text-sm text-ink-muted">
              Loading…
            </div>
          }
        >
          <Calculator />
        </Suspense>
      </ToolLayout>
    </>
  );
}
