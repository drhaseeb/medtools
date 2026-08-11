import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { trackPageview } from "@/lib/analytics";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InstallPrompt } from "@/components/InstallPrompt";
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
    // <BrowserRouter basename="/tools"> Removed because of url issues
	<BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-bg text-ink">
        <Nav />
        <main className="flex-1">
          <Routes>
            //<Route path="/" element={<Home />} />
            //<Route path="/:slug" element={<ToolPage />} />
            //<Route path="/about" element={<About />} />
            //<Route path="/contact" element={<Contact />} />
			{/* Parent route catches the /tools prefix */}
			<Route path="/tools">
			  <Route index element={<Home />} />
			  <Route path=":slug" element={<ToolPage />} />
			  <Route path="about" element={<About />} />
			  <Route path="contact" element={<Contact />} />
			</Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <InstallPrompt />
    </BrowserRouter>
  );
}
