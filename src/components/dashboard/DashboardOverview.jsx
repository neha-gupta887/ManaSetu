import {
  FaHeart,
  FaFire,
  FaBookOpen,
  FaSmile,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";

function DashboardOverview({ stats }) {
  const wellnessScore = Number(stats?.wellnessScore ?? 0);
  const streak = Number(stats?.streak ?? 0);
  const journalEntries = Number(stats?.journalEntries ?? 0);
  const totalMoodEntries = Number(stats?.totalMoodEntries ?? 0);
  const currentMood = stats?.currentMood || "Calm";

  const score = Math.min(Math.max(wellnessScore, 0), 100);

  const getScoreMessage = () => {
    if (score >= 80) return "You're doing beautifully";
    if (score >= 60) return "You're on a good path";
    if (score >= 40) return "Keep taking small steps";
    return "Be gentle with yourself";
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
              <FaChartLine className="text-sm" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                Wellness overview
              </p>

              <h3 className="mt-0.5 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                Your wellbeing at a glance
              </h3>
            </div>
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Updated today
        </div>
      </div>

      {/* Wellness Score */}
      <div className="mt-6 overflow-hidden rounded-[24px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-5 dark:border-emerald-900/30 dark:from-emerald-950/30 dark:via-white/[0.025] dark:to-teal-950/20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {/* Circular Score */}
            <div
              className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(#10b981 ${score * 3.6}deg, rgba(148,163,184,0.16) 0deg)`,
              }}
            >
              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white dark:bg-[#101815]">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {score}
                </span>

                <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                  score
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Wellness score
              </p>

              <h4 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {getScoreMessage()}
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Your wellbeing is built through small, consistent moments.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-3 shadow-sm dark:bg-white/[0.05]">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
              <FaArrowUp className="text-xs" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Today
              </p>

              <p className="text-sm font-semibold text-slate-800 dark:text-white">
                Keep going
              </p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-medium text-slate-500 dark:text-slate-400">
              Progress
            </span>

            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {score}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950/50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mini Stats */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <MiniStat
          icon={<FaFire />}
          value={streak}
          label="Day streak"
          tone="amber"
        />

        <MiniStat
          icon={<FaBookOpen />}
          value={journalEntries}
          label="Journal entries"
          tone="violet"
        />

        <MiniStat
          icon={<FaSmile />}
          value={currentMood}
          label="Current mood"
          tone="sky"
        />

        <MiniStat
          icon={<FaHeart />}
          value={totalMoodEntries}
          label="Mood check-ins"
          tone="rose"
        />
      </div>

      {/* Gentle Insight */}
      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-white/[0.025]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm shadow-sm dark:bg-white/[0.06]">
          🌱
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            A gentle reminder
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
            Your score is not a judgment. It is simply a moment-in-time
            reflection. What matters most is how you care for yourself next.
          </p>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ icon, value, label, tone }) {
  const tones = {
    amber:
      "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",

    violet:
      "bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400",

    sky: "bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-400",

    rose: "bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400",
  };

  return (
    <div className="group rounded-2xl border border-slate-100 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-[0_12px_30px_-20px_rgba(16,185,129,0.35)] dark:border-white/5 dark:bg-white/[0.025] dark:hover:border-emerald-900/40">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm ${tones[tone]}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-slate-900 dark:text-white">
            {value}
          </p>

          <p className="mt-0.5 truncate text-[11px] text-slate-400">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;