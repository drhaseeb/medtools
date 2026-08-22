import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { trackPageview } from "@/lib/analytics";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ExternalRedirect } from "@/components/ExternalRedirect";
import { config } from "@/config";
import Home from "@/pages/Home";
import ToolPage from "@/pages/ToolPage";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

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
    <BrowserRouter basename="/tools">
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-bg text-ink">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* This app hasn't hosted its own legal pages since they were
                consolidated onto the main site — these three routes exist
                only to catch old bookmarks/indexed links (e.g. from before
                the /tools merge, or the tools.doctorsmedical.org.pk
                subdomain) and send them to the real page instead of
                silently 404ing through the /:slug catch-all below. */}
            <Route path="/privacy" element={<ExternalRedirect to={`${config.mainSiteUrl}/privacy`} />} />
            <Route path="/terms" element={<ExternalRedirect to={`${config.mainSiteUrl}/terms`} />} />
            <Route path="/disclaimer" element={<ExternalRedirect to={`${config.mainSiteUrl}/disclaimer`} />} />
            <Route path="/:slug" element={<ToolPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <InstallPrompt />
    </BrowserRouter>
  );
}
