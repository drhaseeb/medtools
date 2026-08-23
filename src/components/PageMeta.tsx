import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Canonical always points at the doctorsmedical.org.pk/tools mirror, even
// when this app is actually served from tools.doctorsmedical.org.pk directly
// (both domains serve the identical build) — this is what tells Google the
// two URLs aren't duplicate content, they're the same page with one home.
const CANONICAL_ORIGIN = "https://www.doctorsmedical.org.pk/tools";

function setMetaTag(selector: string, build: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = build();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function PageMeta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${CANONICAL_ORIGIN}${pathname === "/" ? "" : pathname}`;

  // Every tag here is set imperatively, on the EXISTING static element from
  // index.html, rather than rendered as JSX: React hoists a JSX <title>/
  // <meta>/<link> into <head> as a NEW node without removing a pre-existing
  // static one it doesn't own (that dedup only happens between React-owned
  // instances of the same tag), leaving two of everything in the rendered
  // DOM — one correct, one stale. Updating the static node's attributes in
  // place avoids that entirely, and the same static fallback content still
  // greets a crawler that never runs this effect at all.
  useEffect(() => {
    document.title = title;
    setMetaTag('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    }, "content", description);
    setMetaTag('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    }, "href", canonicalUrl);
    setMetaTag('meta[property="og:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    }, "content", title);
    setMetaTag('meta[property="og:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    }, "content", description);
    setMetaTag('meta[property="og:type"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:type");
      return m;
    }, "content", "website");
    setMetaTag('meta[property="og:url"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    }, "content", canonicalUrl);
    setMetaTag('meta[name="twitter:card"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:card");
      return m;
    }, "content", "summary");
    setMetaTag('meta[name="twitter:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:title");
      return m;
    }, "content", title);
    setMetaTag('meta[name="twitter:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:description");
      return m;
    }, "content", description);
  }, [title, description, canonicalUrl]);

  return null;
}
