import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Doctors' Medical ORG";
  }, []);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center pt-24">
        <Container className="text-center">
          <p className="font-display text-7xl text-accent">404</p>
          <h1 className="mt-4 font-display text-2xl text-ink">Page not found</h1>
          <p className="mt-3 text-ink-muted">
            That page doesn't exist or has moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
            >
              Back to home <ChevronRight size={16} />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
