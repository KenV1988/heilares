import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileStickyCTA } from "./MobileStickyCTA";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[var(--bg-base)] pb-16 text-white md:pb-0">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
