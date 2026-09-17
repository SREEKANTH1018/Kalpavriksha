import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileQuestion,
  PlayCircle,
  TrendingUp,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function LMS() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-9">

      <section>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300/70">
          {t.lms}
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>
            <h1 className="font-serif text-4xl font-bold text-white">
              {t.moodle}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
              {t.moodleDescription}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,252,153,0.8)]" />
            {t.connected}
          </div>

        </div>
      </section>


      {/* Overall progress */}
      <section
        className="
          relative overflow-hidden
          rounded-[28px]
          border border-white/[0.09]
          bg-gradient-to-br
          from-violet-500/[0.12]
          via-white/[0.025]
          to-cyan-400/[0.05]
          p-8
          shadow-[0_25px_70px_rgba(0,0,0,0.3)]
        "
      >

        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-fuchsia-500/[0.08] blur-[80px]" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                {t.overallProgress}
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold text-white">
                {t.continueLearning}
              </h2>
            </div>

            <TrendingUp className="text-cyan-300" size={26} />

          </div>

          <div className="mt-8 flex items-center justify-between">

            <span className="text-sm text-white/35">
              {t.courseCompletion}
            </span>

            <span className="text-2xl font-bold text-cyan-300">
              82%
            </span>

          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.07]">
            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />
          </div>

        </div>
      </section>


      {/* Learning */}
      <section>

        <div className="mb-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/70">
            {t.myLearning}
          </p>

          <h2 className="mt-1 font-serif text-2xl font-bold text-white">
            {t.continueLearning}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          <LearningCard
            icon={<BookOpen size={22} />}
            title={t.courses}
            description={t.moodleDescription}
            value="12"
            label={t.activeCourses}
          />

          <LearningCard
            icon={<PlayCircle size={22} />}
            title={t.lessons}
            description={t.lessonsAvailable}
            value="48"
            label={t.lessonsAvailable}
          />

          <LearningCard
            icon={<ClipboardList size={22} />}
            title={t.assignments}
            description={t.assignments}
            value="6"
            label={t.pending}
          />

          <LearningCard
            icon={<FileQuestion size={22} />}
            title={t.quizzes}
            description={t.quizzes}
            value="9"
            label={t.available}
          />

          <LearningCard
            icon={<CheckCircle2 size={22} />}
            title={language === "ta" ? "முடிந்தவை" : "Completed"}
            description={t.completedActivities}
            value="34"
            label={t.completedActivities}
          />

          <LearningCard
            icon={<TrendingUp size={22} />}
            title={t.development}
            description={t.currentProgress}
            value="82%"
            label={t.currentProgress}
          />

        </div>
      </section>

    </div>
  );
}


interface LearningCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  label: string;
}

function LearningCard({
  icon,
  title,
  description,
  value,
  label,
}: LearningCardProps) {
  return (
    <button
      type="button"
      className="
        group relative overflow-hidden
        rounded-[24px]
        border border-white/[0.08]
        bg-gradient-to-br
        from-white/[0.05]
        via-white/[0.02]
        to-black/[0.25]
        p-6
        text-left
        shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-cyan-300/20
        hover:shadow-[0_30px_70px_rgba(66,252,255,0.10)]
      "
    >

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_15%_15%,rgba(66,252,255,0.12),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(252,66,255,0.12),transparent_40%)]
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        <div className="flex items-start justify-between">

          <div
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-2xl
              bg-cyan-400/[0.07]
              text-cyan-300
              ring-1 ring-cyan-300/10
            "
          >
            {icon}
          </div>

          <span className="text-2xl font-bold text-white">
            {value}
          </span>

        </div>

        <h3 className="mt-7 text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/35">
          {description}
        </p>

        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/25">
          {label}
        </p>

      </div>
    </button>
  );
}