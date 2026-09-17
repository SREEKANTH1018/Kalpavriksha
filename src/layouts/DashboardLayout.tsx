import type { ReactNode } from "react";

import Header from "../components/Header";
import MagicBackground from "../components/MagicBackground";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05050a] text-white">

      <MagicBackground />

      <Header />

      <main className="relative z-10 min-h-screen pt-[96px]">
        <div className="mx-auto w-full max-w-[1500px] px-8 pb-16">
          {children}
        </div>
      </main>

    </div>
  );
}