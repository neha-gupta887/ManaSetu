import {
  FaRobot,
  FaArrowRight,
  FaMoon,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";

function AIInsightCard() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-emerald-100/80 bg-gradient-to-br from-[#f4fbf8] via-white to-[#f7faf8] p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:p-7 dark:border-emerald-900/30 dark:from-emerald-950/20 dark:via-slate-950 dark:to-slate-950">

      {/* Soft background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-teal-100/30 blur-3xl dark:bg-teal-500/5" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-lg text-white shadow-[0_8px_20px_rgba(16,185,129,0.22)]">
              <FaRobot />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                Mana AI
              </p>

              <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Your personal insight
              </h2>
            </div>

          </div>

          {/* AI status */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-emerald-600 sm:flex dark:border-emerald-900/40 dark:bg-white/[0.04] dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            AI generated
          </div>

        </div>

        {/* Main Insight */}
        <div className="mt-7 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/[0.05] dark:bg-white/[0.025]">

          <div className="flex items-start gap-3">

            <div className="mt-0.5 text-lg">
              🌱
            </div>

            <div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Your wellness improved by{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  19%
                </strong>{" "}
                this week.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                You're building positive habits. Keep going gently and
                consistently.
              </p>
            </div>

          </div>

        </div>

        {/* Observations */}
        <div className="mt-5">

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            What Mana noticed
          </p>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">

            {/* Sleep */}
            <InsightItem
              icon={<FaMoon />}
              title="Sleep"
              text="Sleep quality is improving."
            />

            {/* Journaling */}
            <InsightItem
              icon={<FaBookOpen />}
              title="Journaling"
              text="Continue journaling daily."
            />

            {/* Routine */}
            <InsightItem
              icon={<FaChartLine />}
              title="Routine"
              text="Maintain a bedtime before 11 PM."
            />

          </div>

        </div>

        {/* Bottom message */}
        <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.05]">

          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Small steps are still progress.
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Keep taking care of your mind, one day at a time.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-100 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-950/50"
          >
            View insights
            <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
          </button>

        </div>

      </div>
    </section>
  );
}

function InsightItem({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm dark:border-white/[0.05] dark:bg-white/[0.025]">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-sm text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">
          {icon}
        </div>

        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {title}
        </p>

      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {text}
      </p>

    </div>
  );
}

export default AIInsightCard;