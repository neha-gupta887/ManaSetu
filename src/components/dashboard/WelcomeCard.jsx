import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaChartLine,
  FaCheck,
  FaFire,
  FaHeart,
  FaLeaf,
  FaRobot,
  FaSmile,
  FaWind,
} from "react-icons/fa";

import { auth } from "../../services/firebase";

function WelcomeCard({ stats = {} }) {
  const [userName, setUserName] = useState("Student");

  /* =====================================================
     TIME / GREETING
  ===================================================== */

  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let greetingIcon = "🌙";

  if (hour < 12) {
    greeting = "Good Morning";
    greetingIcon = "☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    greetingIcon = "🌤️";
  }

  /* =====================================================
     DATE
  ===================================================== */

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  /* =====================================================
     FIREBASE USER
  ===================================================== */

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const name =
        user.displayName ||
        user.email?.split("@")[0] ||
        "Student";

      setUserName(name);
    }
  }, []);

  /* =====================================================
     STATS
  ===================================================== */

  const wellnessScore = Number(stats?.wellnessScore ?? 0);
  const streak = Number(stats?.streak ?? 0);
  const journalEntries = Number(stats?.journalEntries ?? 0);
  const currentMood = stats?.currentMood || "Not checked";

  /* =====================================================
     MOOD DATA
  ===================================================== */

  const moods = [
    {
      emoji: "😊",
      label: "Good",
      value: "Happy",
    },
    {
      emoji: "😌",
      label: "Calm",
      value: "Calm",
    },
    {
      emoji: "😐",
      label: "Okay",
      value: "Neutral",
    },
    {
      emoji: "😔",
      label: "Low",
      value: "Sad",
    },
    {
      emoji: "😣",
      label: "Stressed",
      value: "Stressed",
    },
  ];

  return (
    <section className="mana-fade-up space-y-6">

      {/* =====================================================
          WELCOME / HERO
      ===================================================== */}

      <div
        className="
          relative overflow-hidden
          rounded-[28px]
          border border-[var(--mana-border)]
          bg-[var(--mana-surface)]
          shadow-[var(--mana-shadow)]
        "
      >
        {/* Soft decorative glow */}

        <div
          className="
            pointer-events-none
            absolute -right-24 -top-24
            h-72 w-72
            rounded-full
            bg-[var(--mana-mint)]
            opacity-70
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-32 left-1/3
            h-64 w-64
            rounded-full
            bg-[var(--mana-sage-light)]
            opacity-20
            blur-3xl
          "
        />

        <div className="relative p-6 sm:p-8 lg:p-10">

          {/* ---------------------------------------------
              Top Row
          --------------------------------------------- */}

          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* AI status */}

            <div
              className="
                inline-flex items-center gap-2.5
                rounded-full
                border border-[var(--mana-border)]
                bg-[var(--mana-surface-soft)]
                px-3.5 py-2
              "
            >
              <span className="mana-status-dot" />

              <span className="text-xs font-semibold text-[var(--mana-text-soft)]">
                Mana is here when you need it
              </span>
            </div>

            {/* Date */}

            <p className="text-xs font-medium text-[var(--mana-text-muted)] sm:text-sm">
              {today}
            </p>

          </div>


          {/* ---------------------------------------------
              Greeting
          --------------------------------------------- */}

          <div className="mt-8 max-w-4xl">

            <p className="text-sm font-medium text-[var(--mana-text-muted)]">
              {greetingIcon} {greeting}
            </p>

            <h1
              className="
                mt-2
                text-3xl
                font-bold
                tracking-[-0.035em]
                text-[var(--mana-text)]
                sm:text-4xl
                lg:text-[46px]
                lg:leading-[1.08]
              "
            >
              Welcome back,{" "}
              <span className="text-[var(--mana-forest)]">
                {userName}
              </span>
              .
            </h1>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-[var(--mana-text-soft)]
                sm:text-base
              "
            >
              You don't have to have everything figured out today.
              Take a moment, check in with yourself, and take one
              small step toward feeling a little better.
            </p>

          </div>


          {/* ---------------------------------------------
              Main Actions
          --------------------------------------------- */}

          <div className="mt-7 flex flex-wrap gap-3">

            <Link
              to="/journal"
              className="
                group
                inline-flex items-center gap-2
                rounded-xl
                bg-[var(--mana-forest)]
                px-5 py-3
                text-sm font-semibold
                text-white
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-[var(--mana-forest-dark)]
                hover:shadow-md
              "
            >
              <FaSmile className="text-sm" />

              Check in with yourself

              <FaArrowRight
                className="
                  text-xs
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <Link
              to="/ai-companion"
              className="
                inline-flex items-center gap-2
                rounded-xl
                border border-[var(--mana-border-strong)]
                bg-[var(--mana-surface)]
                px-5 py-3
                text-sm font-semibold
                text-[var(--mana-text)]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-[var(--mana-sage)]
                hover:shadow-sm
              "
            >
              <FaRobot className="text-[var(--mana-forest)]" />

              Talk to Mana
            </Link>

          </div>


          {/* ---------------------------------------------
              Gentle Reminder
          --------------------------------------------- */}

          <div
            className="
              mt-8
              flex max-w-3xl
              items-start gap-3
              rounded-2xl
              border border-[var(--mana-border)]
              bg-[var(--mana-surface-soft)]
              p-4 sm:p-5
            "
          >

            <div
              className="
                flex h-9 w-9
                shrink-0
                items-center justify-center
                rounded-xl
                bg-[var(--mana-mint)]
                text-[var(--mana-forest)]
              "
            >
              <FaLeaf className="text-sm" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--mana-text-muted)]">
                A gentle reminder
              </p>

              <p className="mt-1.5 text-sm leading-6 text-[var(--mana-text-soft)]">
                You are allowed to slow down. Your mental wellbeing
                matters just as much as your productivity.
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          MOOD CHECK-IN
      ===================================================== */}

      <div
        className="
          rounded-[24px]
          border border-[var(--mana-border)]
          bg-[var(--mana-surface)]
          p-5
          shadow-[var(--mana-shadow-sm)]
          sm:p-6
        "
      >

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <div className="flex items-center gap-2">
              <div
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-xl
                  bg-[var(--mana-mint)]
                  text-[var(--mana-forest)]
                "
              >
                <FaHeart className="text-sm" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--mana-text-muted)]">
                Daily check-in
              </p>
            </div>

            <h2 className="mt-2 text-xl font-bold text-[var(--mana-text)]">
              How are you feeling today?
            </h2>

            <p className="mt-1 text-sm text-[var(--mana-text-muted)]">
              There is no right or wrong answer.
            </p>
          </div>

          {currentMood !== "Not checked" && (
            <div
              className="
                inline-flex items-center gap-2
                self-start
                rounded-full
                bg-[var(--mana-mint)]
                px-3 py-1.5
                text-xs font-semibold
                text-[var(--mana-forest)]
                sm:self-auto
              "
            >
              <FaCheck className="text-[10px]" />

              Checked in
            </div>
          )}

        </div>


        {/* Mood choices */}

        <div className="mt-6 grid grid-cols-5 gap-2 sm:gap-3">

          {moods.map((mood) => {
            const isCurrentMood =
              currentMood?.toLowerCase() === mood.value.toLowerCase();

            return (
              <Link
                key={mood.value}
                to="/journal"
                className={`
                  group
                  flex flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  px-2 py-4
                  transition-all duration-200
                  ${
                    isCurrentMood
                      ? `
                        border-[var(--mana-sage)]
                        bg-[var(--mana-mint)]
                        shadow-sm
                      `
                      : `
                        border-[var(--mana-border)]
                        bg-[var(--mana-surface-soft)]
                        hover:-translate-y-0.5
                        hover:border-[var(--mana-sage)]
                        hover:bg-[var(--mana-mint)]
                      `
                  }
                `}
              >

                <span
                  className="
                    text-2xl
                    transition-transform duration-200
                    group-hover:scale-110
                    sm:text-3xl
                  "
                >
                  {mood.emoji}
                </span>

                <span
                  className="
                    mt-2
                    text-[10px]
                    font-semibold
                    text-[var(--mana-text-soft)]
                    sm:text-xs
                  "
                >
                  {mood.label}
                </span>

              </Link>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          WELLNESS STATS
      ===================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <WellnessStat
          icon={<FaHeart />}
          iconClass="bg-[var(--mana-mint)] text-[var(--mana-forest)]"
          value={`${wellnessScore}%`}
          label="Wellness score"
          description="Your current wellbeing"
        />

        <WellnessStat
          icon={<FaFire />}
          iconClass="bg-[var(--mana-peach)] text-orange-600"
          value={streak}
          label="Day streak"
          description="Days showing up for yourself"
        />

        <WellnessStat
          icon={<FaBookOpen />}
          iconClass="bg-[var(--mana-lavender)] text-purple-600"
          value={journalEntries}
          label="Journal entries"
          description="Thoughts you've captured"
        />

      </div>


      {/* =====================================================
          LOWER DASHBOARD
      ===================================================== */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">

        {/* Gentle plan */}

        <div
          className="
            lg:col-span-3
            rounded-[24px]
            border border-[var(--mana-border)]
            bg-[var(--mana-surface)]
            p-6
            shadow-[var(--mana-shadow-sm)]
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[var(--mana-mint)]
                  text-[var(--mana-forest)]
                "
              >
                <FaWind />
              </div>

              <div>
                <h2 className="font-bold text-[var(--mana-text)]">
                  Your gentle plan
                </h2>

                <p className="text-xs text-[var(--mana-text-muted)]">
                  Small steps count.
                </p>
              </div>

            </div>

            <FaChartLine className="text-[var(--mana-text-muted)]" />

          </div>


          <div className="mt-6 space-y-3">

            <PlanItem
              icon="🌿"
              title="Check in with yourself"
              description="Notice how you're feeling without judgement."
            />

            <PlanItem
              icon="🌬️"
              title="Take five quiet minutes"
              description="Pause, breathe, and let your mind settle."
            />

            <PlanItem
              icon="📖"
              title="Write one thought"
              description="You don't need a perfect journal entry."
            />

          </div>

        </div>


        {/* Mana card */}

        <div
          className="
            relative
            overflow-hidden
            lg:col-span-2
            rounded-[24px]
            border border-[var(--mana-border)]
            bg-[var(--mana-mint)]
            p-6
          "
        >

          {/* Decorative circle */}

          <div
            className="
              pointer-events-none
              absolute -right-10 -top-10
              h-32 w-32
              rounded-full
              bg-white/40
              blur-2xl
            "
          />

          <div className="relative">

            <div className="flex items-center justify-between">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-2xl
                  bg-[var(--mana-surface)]
                  text-[var(--mana-forest)]
                  shadow-sm
                "
              >
                <FaRobot />
              </div>

              <div className="flex items-center gap-2">

                <span className="mana-status-dot" />

                <span className="text-xs font-semibold text-[var(--mana-forest)]">
                  Online
                </span>

              </div>

            </div>


            <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[var(--mana-forest)]">
              Mana AI
            </p>

            <h2 className="mt-2 text-xl font-bold text-[var(--mana-text)]">
              A space to talk, anytime.
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--mana-text-soft)]">
              Feeling overwhelmed, distracted, or simply want to
              talk? Mana is here to listen.
            </p>


            <Link
              to="/ai-companion"
              className="
                mt-6
                inline-flex items-center gap-2
                rounded-xl
                bg-[var(--mana-forest)]
                px-4 py-2.5
                text-xs font-semibold
                text-white
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-[var(--mana-forest-dark)]
              "
            >
              Talk to Mana

              <FaArrowRight className="text-[10px]" />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   WELLNESS STAT
========================================================= */

function WellnessStat({
  icon,
  iconClass,
  value,
  label,
  description,
}) {
  return (
    <div
      className="
        mana-surface
        p-5
      "
    >

      <div className="flex items-start justify-between">

        <div
          className={`
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            ${iconClass}
          `}
        >
          {icon}
        </div>

        <FaArrowRight className="mt-1 text-xs text-[var(--mana-text-muted)]" />

      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight text-[var(--mana-text)]">
        {value}
      </h3>

      <p className="mt-1 text-sm font-semibold text-[var(--mana-text-soft)]">
        {label}
      </p>

      <p className="mt-1 text-xs text-[var(--mana-text-muted)]">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   PLAN ITEM
========================================================= */

function PlanItem({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        flex items-center gap-3
        rounded-2xl
        border border-[var(--mana-border)]
        bg-[var(--mana-surface-soft)]
        p-3.5
        transition-colors duration-200
        hover:border-[var(--mana-border-strong)]
      "
    >

      <div
        className="
          flex h-9 w-9
          shrink-0
          items-center justify-center
          rounded-xl
          bg-[var(--mana-surface)]
          text-base
          shadow-sm
        "
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-sm font-semibold text-[var(--mana-text)]">
          {title}
        </p>

        <p className="mt-0.5 truncate text-xs text-[var(--mana-text-muted)]">
          {description}
        </p>

      </div>

    </div>
  );
}


export default WelcomeCard;