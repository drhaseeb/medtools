import { useEffect, useRef } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { trackPageview } from "@/lib/analytics";
import { DMOLayout } from "@/layouts/DMOLayout";
import DMOHome from "@/pages/dmo/Home";
import DMOAbout from "@/pages/dmo/About";
import DMOContact from "@/pages/dmo/Contact";
import DMOTerms from "@/pages/dmo/Terms";
import DMOPrivacy from "@/pages/dmo/Privacy";
import DMODisclaimer from "@/pages/dmo/Disclaimer";
import Home from "@/pages/Home";
import ToolPage from "@/pages/ToolPage";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // gtag's own `config` call already tracks the very first pageview —
    // only fire our own event on subsequent client-side navigations.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageview(pathname);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DMOLayout />}>
          <Route path="/" element={<DMOHome />} />
          <Route path="/about" element={<DMOAbout />} />
          <Route path="/contact" element={<DMOContact />} />
          <Route path="/terms" element={<DMOTerms />} />
          <Route path="/privacy" element={<DMOPrivacy />} />
          <Route path="/disclaimer" element={<DMODisclaimer />} />
          <Route path="/tools" element={<Home />} />
          {/* Tools used to have its own About/Contact — now the site has one of each. */}
          <Route path="/tools/about" element={<Navigate to="/about" replace />} />
          <Route path="/tools/contact" element={<Navigate to="/contact" replace />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
