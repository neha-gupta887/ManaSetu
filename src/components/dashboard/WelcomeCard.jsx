/* eslint-disable react-hooks/set-state-in-effect */
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function WelcomeCard({ stats = {} }) {
    const { user } = useAuth();
  const userName = user?.displayName || user?.email?.split("@")[0] || "there";

  const hour = new Date().getHours();

  let greeting = "Good evening";
  let greetingIcon = "🌙";

  if (hour < 12) {
    greeting = "Good morning";
    greetingIcon = "☀️";
  } else if (hour < 17) {
    greeting = "Good afternoon";
    greetingIcon = "🌤️";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const wellnessScore = stats?.wellnessScore ?? 0;
  const streak = stats?.streak ?? 0;
  const journalEntries = stats?.journalEntries ?? 0;
  const currentMood = stats?.currentMood || "Not checked";

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-emerald-100/80 bg-white/85 shadow-[0_28px_75px_-38px_rgba(16,185,129,0.5)] backdrop-blur-xl transition-all duration-500 dark:border-emerald-900/40 dark:bg-white/[0.04]">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl dark:bg-teal-500/10" />

      <div className="pointer-events-none absolute right-10 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full border border-emerald-200/30 lg:block dark:border-emerald-400/10" />

      {/* Main content */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10 xl:p-11">

        {/* Top row */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Date + status */}
          <div>
            <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
              {today}
            </p>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3.5 py-2 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Mana AI is here for you
            </div>
          </div>

          {/* Wellness indicator */}
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-white/[0.07] dark:bg-white/[0.04]">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl dark:bg-emerald-950/40">
              🌿
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Wellness
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-slate-800 dark:text-white">
                {wellnessScore}% today
              </p>
            </div>

          </div>
        </div>

        {/* Greeting */}
        <div className="mt-8 max-w-4xl">

          <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
            {greetingIcon} {greeting},
          </p>

          <h1 className="mt-1 break-words text-4xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {userName}
            <span className="text-emerald-600 dark:text-emerald-400">
              .
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-800 sm:text-3xl dark:text-slate-100">
            How are you feeling today?
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg dark:text-slate-400">
            Take a moment to check in with yourself. You don't need to have
            everything figured out — one small step is enough for today.
          </p>

        </div>

        {/* Primary actions */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

          <Link
            to="/mood-checkin"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b1110]"
          >
            Check in
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            to="/chat"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-emerald-800 dark:hover:text-emerald-300 dark:focus-visible:ring-offset-[#0b1110]"
          >
            <span className="text-base">✦</span>
            Talk to Mana
          </Link>

        </div>

        {/* Gentle reminder */}
        <div className="mt-7 flex max-w-3xl items-start gap-3 rounded-2xl border border-emerald-100/80 bg-emerald-50/60 p-4 backdrop-blur dark:border-emerald-900/30 dark:bg-emerald-950/20">

          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/80 text-base shadow-sm dark:bg-white/[0.05]">
            🌱
          </div>

          <div>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
              A gentle reminder
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Your wellbeing matters just as much as your productivity.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">

          <StatCard
            value={`${wellnessScore}%`}
            label="Wellness score"
            icon="💚"
          />

          <StatCard
            value={streak}
            label="Day streak"
            icon="🔥"
          />

          <StatCard
            value={journalEntries}
            label="Journal entries"
            icon="📖"
          />

          <StatCard
            value={currentMood}
            label="Today's mood"
            icon="😊"
          />

        </div>

      </div>
    </section>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="group rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-white/[0.07] dark:bg-white/[0.04] dark:hover:border-emerald-800">

      <div className="flex items-center justify-between gap-3">

        <div className="min-w-0">
          <p className="truncate text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
            {value}
          </p>

          <p className="mt-1 truncate text-xs font-semibold text-slate-400 sm:text-sm">
            {label}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-base transition-transform duration-300 group-hover:scale-110 dark:bg-white/[0.05]">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;
