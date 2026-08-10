import { useLocation } from "react-router-dom";

// Canonical always points at the doctorsmedical.org.pk/tools mirror, even
// when this app is actually served from tools.doctorsmedical.org.pk directly
// (both domains serve the identical build) — this is what tells Google the
// two URLs aren't duplicate content, they're the same page with one home.
const CANONICAL_ORIGIN = "https://www.doctorsmedical.org.pk/tools";

export function PageMeta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${CANONICAL_ORIGIN}${pathname === "/" ? "" : pathname}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
