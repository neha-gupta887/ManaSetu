import {
  FaRobot,
  FaArrowRight,
  FaMoon,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";

function AIInsightCard() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-7">

      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/50 blur-3xl dark:bg-emerald-950/20" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-950/20" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
              <FaRobot />
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                Mana AI
              </p>

              <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Your personal insight
              </h2>
            </div>

          </div>

          {/* Status */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-[11px] font-medium text-emerald-700 sm:flex dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />

            AI generated

          </div>

        </div>

        {/* Main Insight */}
        <div className="mt-6 rounded-[22px] border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-900/30 dark:bg-emerald-950/20">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm dark:bg-slate-800">
              🌱
            </div>

            <div>

              <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">

                Your wellness improved by{" "}

                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  19%
                </strong>{" "}

                this week.

              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                You're building positive habits. Keep going gently and
                consistently.
              </p>

            </div>

          </div>

        </div>

        {/* Observations */}
        <div className="mt-6">

          <div className="flex items-center justify-between">

            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              What Mana noticed
            </p>

            <span className="text-xs text-slate-400">
              This week
            </span>

          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">

            <InsightItem
              icon={<FaMoon />}
              title="Sleep"
              text="Sleep quality is improving."
            />

            <InsightItem
              icon={<FaBookOpen />}
              title="Journaling"
              text="Continue journaling daily."
            />

            <InsightItem
              icon={<FaChartLine />}
              title="Routine"
              text="Maintain a bedtime before 11 PM."
            />

          </div>

        </div>

        {/* Bottom message */}
        <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">

          <div>

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Small steps are still progress.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Keep taking care of your mind, one day at a time.
            </p>

          </div>

          <button
            type="button"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-900 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
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
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-white/[0.025] dark:hover:bg-white/[0.04]">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm text-emerald-600 shadow-sm dark:bg-slate-800 dark:text-emerald-400">
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