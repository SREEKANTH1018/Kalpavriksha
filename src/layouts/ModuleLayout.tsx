import type { ReactNode } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MagicBackground from "../components/MagicBackground";

interface ModuleLayoutProps {
  children: ReactNode;
}

export default function ModuleLayout({
  children,
}: ModuleLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05050a] text-white">

      <MagicBackground />

      <Sidebar />

      <Header />

      <main className="relative z-10 min-h-screen pl-[250px] pt-[96px]">
        <div className="mx-auto w-full max-w-[1500px] px-8 pb-16">
          {children}
        </div>
      </main>

    </div>
  );
}