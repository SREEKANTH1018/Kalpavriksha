import { Bell, ChevronDown, Search } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const isTamil = language === "ta";

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      {/* Glass header background */}
      <div
        className="
          relative
          h-[96px]
          border-b border-white/[0.07]
          bg-[#05050a]/75
          backdrop-blur-2xl
        "
      >
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[18%] top-[-80px] h-[180px] w-[400px] rounded-full bg-fuchsia-500/[0.045] blur-[80px]" />
          <div className="absolute right-[18%] top-[-80px] h-[180px] w-[400px] rounded-full bg-cyan-400/[0.035] blur-[80px]" />
        </div>

        {/* Header content */}
        <div className="relative mx-auto flex h-full w-full max-w-[1500px] items-center justify-between px-8">

          {/* Search */}
          <div className="relative w-[520px]">
            <Search
              size={21}
              className="
                pointer-events-none
                absolute left-5 top-1/2
                -translate-y-1/2
                text-cyan-200/45
              "
            />

            <input
              type="search"
              placeholder={
                isTamil
                  ? "மாணவர்கள், செயல்பாடுகள், தகவல்களைத் தேடுங்கள்..."
                  : "Search students, activities, information..."
              }
              className="
                h-[54px]
                w-full
                rounded-2xl
                border border-white/[0.09]
                bg-white/[0.035]
                pl-14 pr-5
                text-sm
                text-white
                outline-none
                placeholder:text-white/30
                backdrop-blur-xl
                transition-all duration-300
                hover:border-white/[0.14]
                hover:bg-white/[0.05]
                focus:border-cyan-300/30
                focus:bg-white/[0.065]
                focus:shadow-[0_0_30px_rgba(66,252,255,0.07)]
              "
            />
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-6">

            {/* Language switcher */}
            <div
              className="
                flex items-center gap-2
                rounded-xl
                border border-white/[0.05]
                bg-white/[0.02]
                px-3 py-2
              "
            >
              <button
                type="button"
                onClick={() => setLanguage("ta")}
                className={`
                  text-sm
                  transition-all duration-200
                  ${
                    isTamil
                      ? "font-semibold text-cyan-300"
                      : "text-white/45 hover:text-white/80"
                  }
                `}
              >
                தமிழ்
              </button>

              <span className="text-white/15">|</span>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`
                  text-sm
                  transition-all duration-200
                  ${
                    !isTamil
                      ? "font-semibold text-cyan-300"
                      : "text-white/45 hover:text-white/80"
                  }
                `}
              >
                English
              </button>
            </div>

            {/* Notifications */}
            <button
              type="button"
              aria-label={
                isTamil ? "அறிவிப்புகள்" : "Notifications"
              }
              className="
                relative
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                text-white/55
                transition-all duration-300
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              <Bell size={21} />

              <span
                className="
                  absolute
                  right-[7px]
                  top-[6px]
                  h-2 w-2
                  rounded-full
                  bg-orange-400
                  shadow-[0_0_10px_rgba(251,146,60,0.8)]
                "
              />
            </button>

            {/* Profile */}
            <button
              type="button"
              className="
                flex items-center gap-3
                rounded-2xl
                px-2 py-2
                transition-all duration-300
                hover:bg-white/[0.05]
              "
            >
              {/* Avatar */}
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-violet-500
                  to-fuchsia-500
                  text-sm font-bold
                  text-white
                  shadow-[0_0_25px_rgba(139,92,246,0.25)]
                "
              >
                AK
              </div>

              {/* Name */}
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-white">
                  Arun Kumar
                </p>

                <p className="text-[11px] text-white/35">
                  {isTamil ? "மாணவர்" : "Student"}
                </p>
              </div>

              <ChevronDown
                size={17}
                className="ml-1 text-white/35"
              />
            </button>

          </div>
        </div>

        {/* Very subtle bottom glow */}
        <div
          className="
            pointer-events-none
            absolute bottom-0 left-0 right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-fuchsia-400/20
            to-transparent
          "
        />
      </div>
    </header>
  );
}