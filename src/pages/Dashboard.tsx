import {
  Activity,
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Leaf,
  Target,
  TrendingUp,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function Dashboard() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-10">

      {/* WELCOME HERO */}
      <section
        className="
          relative overflow-hidden
          rounded-[30px]
          border border-white/[0.10]
          bg-gradient-to-br
          from-fuchsia-500/[0.15]
          via-purple-500/[0.08]
          to-cyan-400/[0.04]
          px-10 py-10
          shadow-[0_30px_90px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
        "
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-cyan-300/[0.07]" />

        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-fuchsia-300/[0.06]" />

        <div className="pointer-events-none absolute right-[-100px] bottom-[-180px] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.10] blur-[100px]" />

        <div className="relative z-10 max-w-4xl">

          {/* Chapter */}
          <div
            className="
              inline-flex rounded-full
              border border-cyan-300/20
              bg-cyan-300/[0.04]
              px-5 py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-cyan-300
            "
          >
            {t.chapter}
          </div>

          {/* Greeting */}
          <h1
            className="
              mt-7
              font-serif
              text-4xl
              font-bold
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            {t.greeting}{" "}
            <span className="inline-block">👋</span>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/45">
            {t.greetingDescription}
          </p>

          {/* Progress */}
          <div className="mt-9 max-w-[600px]">

            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-white/75">
                  {t.learningJourney}
                </p>

                <p className="mt-1 text-xs text-white/30">
                  {t.learningJourneyDescription}
                </p>
              </div>

              <span className="text-2xl font-bold text-cyan-300">
                82%
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.08]">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(66,252,255,0.25)]" />
            </div>

          </div>
        </div>
      </section>


      {/* STUDENT SNAPSHOT */}
      <section>

        <SectionHeading
          eyebrow={t.overview}
          title={t.studentSnapshot}
          right={t.academicTerm}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<CalendarCheck size={22} />}
            iconClass="text-cyan-300"
            title={t.attendance}
            value="94%"
            subtitle={t.excellentConsistency}
            progress="94%"
          />

          <StatCard
            icon={<Target size={22} />}
            iconClass="text-violet-300"
            title={t.activities}
            value="18"
            subtitle={t.activitiesThisMonth}
            progress="72%"
          />

          <StatCard
            icon={<Award size={22} />}
            iconClass="text-yellow-300"
            title={t.achievements}
            value="7"
            subtitle={t.achievementsThisMonth}
            progress="64%"
          />

          <StatCard
            icon={<TrendingUp size={22} />}
            iconClass="text-emerald-300"
            title={t.development}
            value="82%"
            subtitle={t.developmentThisTerm}
            progress="82%"
          />

        </div>
      </section>


      {/* CONNECTED ECOSYSTEM */}
      <section>

        <SectionHeading
          eyebrow={t.connectedEcosystem}
          title={t.learningDevelopment}
          description={t.learningDevelopmentDescription}
        />

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Moodle */}
          <PlatformCard
            icon={<GraduationCap size={25} />}
            title={t.moodle}
            description={t.moodleDescription}
            tags={[
              t.courses,
              t.lessons,
              t.assignments,
              t.quizzes,
            ]}
            button={t.openMoodle}
            href="/lms"
            variant="blue"
          />

          {/* Development */}
          <PlatformCard
            icon={<Leaf size={25} />}
            title={t.studentDevelopment}
            description={t.studentDevelopmentDescription}
            tags={[
              t.skills,
              t.activities,
              t.projects,
              t.achievements,
            ]}
            button={t.openTracker}
            href="/development"
            variant="green"
          />

        </div>
      </section>


      {/* QUICK ACCESS */}
      <section>

        <SectionHeading
          eyebrow={t.shortcuts}
          title={t.quickAccess}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <QuickAccessCard
            icon={<CalendarCheck size={21} />}
            title={t.attendance}
            description={t.viewAttendance}
          />

          <QuickAccessCard
            icon={<Activity size={21} />}
            title={t.activities}
            description={t.exploreActivities}
          />

          <QuickAccessCard
            icon={<Award size={21} />}
            title={t.achievements}
            description={t.viewAchievements}
          />

          <QuickAccessCard
            icon={<TrendingUp size={21} />}
            title={t.development}
            description={t.trackDevelopment}
          />

        </div>
      </section>


      {/* RECENT + UPCOMING*/}
      <section className="grid gap-6 xl:grid-cols-[1fr_420px]">

        {/* Recent activity */}
        <div
          className="
            rounded-[28px]
            border border-white/[0.08]
            bg-white/[0.025]
            p-7
            shadow-[0_25px_70px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >

          <div className="flex items-start justify-between">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/70">
                {t.timeline}
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold text-white">
                {t.recentActivity}
              </h2>
            </div>

            <button
              type="button"
              className="text-sm text-white/30 transition-colors hover:text-white"
            >
              {t.viewAll}
            </button>

          </div>

          <div className="mt-7 space-y-1">

            <ActivityItem
              icon={<CheckCircle2 size={18} />}
              title={t.attendanceMarked}
              subtitle={t.todayPresent}
            />

            <ActivityItem
              icon={<GraduationCap size={18} />}
              title={t.courseActivityCompleted}
              subtitle={t.yesterdayMoodle}
            />

            <ActivityItem
              icon={<Award size={18} />}
              title={t.achievementEarned}
              subtitle={t.twoDaysAgo}
            />

            <ActivityItem
              icon={<Target size={18} />}
              title={t.scienceActivity}
              subtitle={t.threeDaysAgo}
            />

          </div>
        </div>


        {/* Upcoming */}
        <div
          className="
            rounded-[28px]
            border border-white/[0.08]
            bg-white/[0.025]
            p-7
            shadow-[0_25px_70px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300/70">
            {t.next}
          </p>

          <h2 className="mt-2 font-serif text-2xl font-bold text-white">
            {t.upcoming}
          </h2>

          <div className="mt-7 space-y-3">

            <UpcomingItem
              date="18"
              title={t.scienceClub}
              time="10:00 AM"
            />

            <UpcomingItem
              date="20"
              title={t.developmentReview}
              time="09:30 AM"
            />

            <UpcomingItem
              date="24"
              title={t.monthlyAssessment}
              time="11:00 AM"
            />

          </div>
        </div>

      </section>

    </div>
  );
}


/* COMPONENTS */

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  right?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  right,
}: SectionHeadingProps) {
  return (
    <div className="mb-5 flex items-end justify-between gap-5">

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/70">
          {eyebrow}
        </p>

        <h2 className="mt-1 font-serif text-2xl font-bold text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-2xl text-sm text-white/35">
            {description}
          </p>
        )}
      </div>

      {right && (
        <p className="hidden text-xs text-white/25 md:block">
          {right}
        </p>
      )}

    </div>
  );
}


interface StatCardProps {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  value: string;
  subtitle: string;
  progress: string;
}

function StatCard({
  icon,
  iconClass,
  title,
  value,
  subtitle,
  progress,
}: StatCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[22px]
        border border-white/[0.08]
        bg-gradient-to-br
        from-white/[0.045]
        to-white/[0.015]
        p-6
        shadow-[0_20px_50px_rgba(0,0,0,0.28)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-fuchsia-400/20
        hover:shadow-[0_30px_70px_rgba(168,85,247,0.12)]
      "
    >

      {/* Hover gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_15%_10%,rgba(66,252,255,0.12),transparent_35%),radial-gradient(circle_at_85%_90%,rgba(252,66,255,0.12),transparent_40%)]
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        <div className="flex items-start justify-between">

          <div
            className={`
              flex h-12 w-12
              items-center justify-center
              rounded-2xl
              bg-white/[0.045]
              ring-1 ring-white/[0.05]
              ${iconClass}
            `}
          >
            {icon}
          </div>

          <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1 text-[9px] text-white/30">
            {value === "94%"
              ? "Excellent"
              : value === "18"
                ? "Growing"
                : value === "7"
                  ? "New"
                  : "Improving"}
          </span>

        </div>

        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
          {title}
        </p>

        <p className="mt-1 font-serif text-4xl font-bold text-white">
          {value}
        </p>

        <p className="mt-1 text-xs text-white/30">
          {subtitle}
        </p>

        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
            style={{ width: progress }}
          />
        </div>

      </div>
    </div>
  );
}


interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  button: string;
  href: string;
  variant: "blue" | "green";
}

function PlatformCard({
  icon,
  title,
  description,
  tags,
  button,
  href,
  variant,
}: PlatformCardProps) {
  const isBlue = variant === "blue";

  return (
    <div
      className="
        group relative min-h-[330px]
        overflow-hidden
        rounded-[28px]
        border border-white/[0.09]
        bg-gradient-to-br
        from-white/[0.05]
        via-white/[0.02]
        to-black/[0.25]
        p-8
        shadow-[0_25px_70px_rgba(0,0,0,0.3)]
        transition-all duration-500
        hover:-translate-y-2
      "
    >

      <div
        className={`
          pointer-events-none absolute inset-0
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          ${
            isBlue
              ? "bg-[radial-gradient(circle_at_10%_15%,rgba(99,102,241,0.22),transparent_45%)]"
              : "bg-[radial-gradient(circle_at_10%_15%,rgba(16,185,129,0.18),transparent_45%)]"
          }
        `}
      />

      <div className="relative z-10">

        <div className="flex items-start justify-between">

          <div
            className={`
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              ${
                isBlue
                  ? "bg-cyan-400/[0.08] text-cyan-300"
                  : "bg-emerald-400/[0.08] text-emerald-300"
              }
              ring-1 ring-white/[0.06]
            `}
          >
            {icon}
          </div>

          <div
            className="
              flex items-center gap-2
              rounded-full
              border border-emerald-400/20
              bg-emerald-400/[0.05]
              px-3 py-1.5
              text-[10px]
              text-emerald-300
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Connected
          </div>

        </div>

        <p
          className={`
            mt-7
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            ${
              isBlue
                ? "text-cyan-300/70"
                : "text-emerald-300/70"
            }
          `}
        >
          Connected Platform
        </p>

        <h3 className="mt-1 font-serif text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border border-white/[0.08]
                bg-white/[0.025]
                px-3 py-1.5
                text-[10px]
                text-white/40
              "
            >
              {tag}
            </span>
          ))}

        </div>

        <a
          href={href}
          className={`
            mt-8 inline-flex
            items-center gap-3
            rounded-2xl
            px-6 py-3.5
            text-sm
            font-semibold
            tracking-[0.12em]
            text-white
            transition-all duration-300
            ${
              isBlue
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 hover:shadow-[0_15px_35px_rgba(34,211,238,0.18)]"
                : "bg-gradient-to-r from-emerald-500 to-cyan-400 hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)]"
            }
          `}
        >
          {button}

          <ArrowRight size={17} />
        </a>

      </div>
    </div>
  );
}


interface QuickAccessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function QuickAccessCard({
  icon,
  title,
  description,
}: QuickAccessCardProps) {
  return (
    <button
      type="button"
      className="
        group flex items-center gap-4
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
        text-left
        shadow-[0_15px_40px_rgba(0,0,0,0.2)]
        transition-all duration-400
        hover:-translate-y-1
        hover:border-fuchsia-400/20
        hover:bg-gradient-to-br
        hover:from-fuchsia-500/[0.08]
        hover:to-cyan-400/[0.04]
      "
    >

      <div
        className="
          flex h-12 w-12
          shrink-0
          items-center justify-center
          rounded-2xl
          bg-fuchsia-400/[0.06]
          text-cyan-300
          ring-1 ring-white/[0.05]
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white/80">
          {title}
        </p>

        <p className="mt-1 text-[11px] text-white/30">
          {description}
        </p>
      </div>

      <ChevronRight
        size={17}
        className="
          text-white/20
          transition-transform duration-300
          group-hover:translate-x-1
          group-hover:text-cyan-300
        "
      />

    </button>
  );
}


interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function ActivityItem({
  icon,
  title,
  subtitle,
}: ActivityItemProps) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl px-2 py-4 transition-colors hover:bg-white/[0.025]">

      <div
        className="
          relative flex h-11 w-11
          shrink-0
          items-center justify-center
          rounded-full
          bg-[#080811]
          text-cyan-300
          ring-1 ring-white/[0.08]
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-white/70">
          {title}
        </p>

        <p className="mt-1 text-[11px] text-white/30">
          {subtitle}
        </p>
      </div>

    </div>
  );
}


interface UpcomingItemProps {
  date: string;
  title: string;
  time: string;
}

function UpcomingItem({
  date,
  title,
  time,
}: UpcomingItemProps) {
  return (
    <button
      type="button"
      className="
        group flex w-full items-center gap-4
        rounded-2xl
        border border-white/[0.07]
        bg-white/[0.02]
        p-4
        text-left
        transition-all duration-300
        hover:border-cyan-300/15
        hover:bg-white/[0.04]
      "
    >

      <div
        className="
          flex h-14 w-14
          shrink-0
          flex-col
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-500/[0.14]
          to-cyan-400/[0.06]
        "
      >
        <span className="text-lg font-bold text-white">
          {date}
        </span>

        <span className="text-[8px] font-bold tracking-[0.15em] text-cyan-300">
          SEP
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white/65">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-white/25">
          {time}
        </p>
      </div>

      <ChevronRight
        size={16}
        className="text-white/20 transition-transform group-hover:translate-x-1"
      />

    </button>
  );
}
