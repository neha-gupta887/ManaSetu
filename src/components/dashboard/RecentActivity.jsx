import {
  FaSmile,
  FaBookOpen,
  FaLeaf,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

import GlassCard from "../ui/GlassCard";

function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Mood Check-in Completed",
      description: "You logged a Happy mood today.",
      time: "10 min ago",
      icon: <FaSmile />,
      type: "Mood",
    },
    {
      id: 2,
      title: "Journal Updated",
      description: "You wrote a gratitude journal.",
      time: "1 hour ago",
      icon: <FaBookOpen />,
      type: "Journal",
    },
    {
      id: 3,
      title: "Habit Completed",
      description: "Meditation streak increased.",
      time: "Today",
      icon: <FaLeaf />,
      type: "Wellness",
    },
    {
      id: 4,
      title: "AI Recommendation",
      description: "Mana AI suggested a breathing exercise.",
      time: "Today",
      icon: <FaRobot />,
      type: "Mana AI",
    },
  ];

  return (
    <GlassCard>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            Your journey
          </p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Recent activity
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Small moments that are shaping your wellbeing.
          </p>
        </div>

        <span className="hidden rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:inline-flex dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
          Today
        </span>

      </div>

      {/* Timeline */}
      <div className="relative mt-7">

        {/* Timeline line */}
        <div className="absolute bottom-5 left-[19px] top-5 w-px bg-slate-100 dark:bg-white/[0.06]" />

        <div className="space-y-3">

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group relative flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50/70 hover:shadow-sm dark:hover:border-white/[0.05] dark:hover:bg-white/[0.025]"
            >

              {/* Icon */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white bg-white text-sm text-emerald-600 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-50 dark:border-slate-800 dark:bg-slate-900 dark:text-emerald-400 dark:group-hover:bg-emerald-950/30">
                {activity.icon}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">

                  <h3 className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {activity.title}
                  </h3>

                  <span className="shrink-0 text-[11px] font-medium text-slate-400">
                    {activity.time}
                  </span>

                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {activity.description}
                </p>

                <span className="mt-2 inline-flex rounded-full bg-slate-100 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400 dark:bg-white/[0.05] dark:text-slate-500">
                  {activity.type}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="mt-5 border-t border-slate-100 pt-4 dark:border-white/[0.05]">

        <button
          type="button"
          className="group flex items-center gap-2 text-xs font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          View your wellness journey

          <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-1" />
        </button>

      </div>
    </GlassCard>
  );
}

export default RecentActivity;
