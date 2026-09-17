import {
  Activity,
  Award,
  BookOpen,
  CalendarCheck,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  TrendingUp,
  UserRound,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function Sidebar() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <aside
      className="
        fixed left-0 top-0 z-[90]
        flex h-screen w-[250px]
        flex-col
        border-r border-white/[0.07]
        bg-[#05050a]/80
        backdrop-blur-2xl
      "
    >
      {/* Logo */}
      <div className="flex h-[96px] items-center px-7">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-2xl
              bg-gradient-to-br
              from-fuchsia-500
              to-cyan-400
              shadow-[0_0_30px_rgba(217,70,239,0.18)]
            "
          >
            <GraduationCap
              size={23}
              className="text-white"
            />
          </div>

          <div>
            <p className="text-sm font-bold text-white">
              Kalpavriksha
            </p>

            <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
              ERP
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5">

        <SidebarItem
          icon={<LayoutDashboard size={19} />}
          label={language === "ta" ? "முகப்பு" : "Dashboard"}
          href="/"
        />

        <div className="my-5 px-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
            {language === "ta" ? "கற்றல்" : "Learning"}
          </p>
        </div>

        <SidebarItem
          icon={<BookOpen size={19} />}
          label={t.lms}
          href="/lms"
          active
        />

        <SidebarItem
          icon={<Activity size={19} />}
          label={t.activities}
          href="#"
        />

        <SidebarItem
          icon={<CalendarCheck size={19} />}
          label={t.assignments}
          href="#"
        />

        <SidebarItem
          icon={<TrendingUp size={19} />}
          label={t.development}
          href="/development"
        />

        <div className="my-5 px-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
            {language === "ta" ? "மாணவர்" : "Student"}
          </p>
        </div>

        <SidebarItem
          icon={<Award size={19} />}
          label={t.achievements}
          href="#"
        />

        <SidebarItem
          icon={<UserRound size={19} />}
          label={language === "ta" ? "சுயவிவரம்" : "Profile"}
          href="#"
        />
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/[0.06] p-4">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
          <p className="text-xs font-semibold text-white/70">
            Arun Kumar
          </p>

          <p className="mt-1 text-[10px] text-white/30">
            {t.student}
          </p>
        </div>
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

function SidebarItem({
  icon,
  label,
  href,
  active = false,
}: SidebarItemProps) {
  return (
    <a
      href={href}
      className={`
        group mb-1 flex items-center gap-3
        rounded-xl px-4 py-3
        text-sm
        transition-all duration-300
        ${
          active
            ? "border border-cyan-300/10 bg-gradient-to-r from-fuchsia-500/[0.12] to-cyan-400/[0.08] text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            : "text-white/40 hover:bg-white/[0.045] hover:text-white/80"
        }
      `}
    >
      <span
        className={`
          ${
            active
              ? "text-cyan-300"
              : "text-white/35 group-hover:text-cyan-300"
          }
          transition-colors
        `}
      >
        {icon}
      </span>

      <span className="flex-1">
        {label}
      </span>

      <ChevronRight
        size={14}
        className={`
          opacity-0 transition-all
          group-hover:translate-x-0.5
          group-hover:opacity-60
          ${active ? "opacity-40" : ""}
        `}
      />
    </a>
  );
}