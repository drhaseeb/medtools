import { Outlet } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InstallPrompt } from "@/components/InstallPrompt";

export function ToolsLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <InstallPrompt />
    </div>
  );
}
