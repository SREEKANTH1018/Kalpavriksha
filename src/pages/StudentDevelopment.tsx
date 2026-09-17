import {
  Activity,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Leaf,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function StudentDevelopment() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-9">

      <section>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/70">
          {t.development}
        </p>

        <h1 className="mt-2 font-serif text-4xl font-bold text-white">
          {t.studentDevelopment}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
          {t.developmentOverview}
        </p>
      </section>


      {/* Development overview */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <DevelopmentStat
          icon={<TrendingUp size={22} />}
          title={t.skillsGrowth}
          value="82%"
          progress="82%"
        />

        <DevelopmentStat
          icon={<Activity size={22} />}
          title={t.participation}
          value="76%"
          progress="76%"
        />

        <DevelopmentStat
          icon={<BriefcaseBusiness size={22} />}
          title={t.projectWork}
          value="68%"
          progress="68%"
        />

        <DevelopmentStat
          icon={<Award size={22} />}
          title={t.achievementProgress}
          value="88%"
          progress="88%"
        />

      </section>


      {/* Skills */}
      <section
        className="
          rounded-[28px]
          border border-white/[0.08]
          bg-white/[0.025]
          p-8
          shadow-[0_25px_70px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
        "
      >

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/[0.07] text-emerald-300">
            <Leaf size={25} />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300/70">
              {t.skills}
            </p>

            <h2 className="mt-1 font-serif text-2xl font-bold text-white">
              {t.skillsGrowth}
            </h2>
          </div>

        </div>

        <div className="mt-8 space-y-6">

          <SkillBar
            name={language === "ta" ? "தொடர்பு" : "Communication"}
            percentage={88}
          />

          <SkillBar
            name={language === "ta" ? "குழுப்பணி" : "Teamwork"}
            percentage={82}
          />

          <SkillBar
            name={language === "ta" ? "சிக்கல் தீர்வு" : "Problem Solving"}
            percentage={76}
          />

          <SkillBar
            name={language === "ta" ? "தலைமைத்துவம்" : "Leadership"}
            percentage={65}
          />

        </div>
      </section>


      {/* Development activities */}
      <section>

        <div className="mb-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/70">
            {t.activities}
          </p>

          <h2 className="mt-1 font-serif text-2xl font-bold text-white">
            {language === "ta"
              ? "சமீபத்திய வளர்ச்சி"
              : "Recent Development"}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <DevelopmentActivity
            icon={<Star size={20} />}
            title={
              language === "ta"
                ? "அறிவியல் கழகத்தில் பங்கேற்பு"
                : "Science Club Participation"
            }
            subtitle={
              language === "ta"
                ? "செயல்பாடு முடிக்கப்பட்டது"
                : "Activity completed"
            }
          />

          <DevelopmentActivity
            icon={<Target size={20} />}
            title={
              language === "ta"
                ? "குழு திட்டம்"
                : "Team Project"
            }
            subtitle={
              language === "ta"
                ? "முன்னேற்றத்தில்"
                : "In progress"
            }
          />

          <DevelopmentActivity
            icon={<Award size={20} />}
            title={
              language === "ta"
                ? "சாதனை"
                : "Achievement"
            }
            subtitle={
              language === "ta"
                ? "புதிய சாதனை"
                : "New achievement"
            }
          />

          <DevelopmentActivity
            icon={<CheckCircle2 size={20} />}
            title={
              language === "ta"
                ? "திறன் மதிப்பீடு"
                : "Skill Assessment"
            }
            subtitle={
              language === "ta"
                ? "முடிக்கப்பட்டது"
                : "Completed"
            }
          />

        </div>

      </section>

    </div>
  );
}


interface DevelopmentStatProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  progress: string;
}

function DevelopmentStat({
  icon,
  title,
  value,
  progress,
}: DevelopmentStatProps) {
  return (
    <div
      className="
        group rounded-[22px]
        border border-white/[0.08]
        bg-white/[0.025]
        p-6
        shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-emerald-300/20
      "
    >

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/[0.07] text-emerald-300">
        {icon}
      </div>

      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
        {title}
      </p>

      <p className="mt-1 font-serif text-4xl font-bold text-white">
        {value}
      </p>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
          style={{ width: progress }}
        />
      </div>

    </div>
  );
}


interface SkillBarProps {
  name: string;
  percentage: number;
}

function SkillBar({
  name,
  percentage,
}: SkillBarProps) {
  return (
    <div>

      <div className="mb-2 flex justify-between">
        <span className="text-sm text-white/55">
          {name}
        </span>

        <span className="text-xs font-semibold text-emerald-300">
          {percentage}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </div>
  );
}


interface DevelopmentActivityProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function DevelopmentActivity({
  icon,
  title,
  subtitle,
}: DevelopmentActivityProps) {
  return (
    <div
      className="
        group flex items-center gap-4
        rounded-2xl
        border border-white/[0.07]
        bg-white/[0.025]
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-300/15
        hover:bg-white/[0.04]
      "
    >

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/[0.06] text-cyan-300">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-white/70">
          {title}
        </p>

        <p className="mt-1 text-xs text-white/30">
          {subtitle}
        </p>
      </div>

    </div>
  );
}