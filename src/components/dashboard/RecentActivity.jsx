import GlassCard from "../ui/GlassCard";

function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Mood Check-in Completed",
      description: "You logged a Happy mood today.",
      time: "10 min ago",
      icon: "😊",
    },
    {
      id: 2,
      title: "Journal Updated",
      description: "You wrote a gratitude journal.",
      time: "1 hour ago",
      icon: "📖",
    },
    {
      id: 3,
      title: "Habit Completed",
      description: "Meditation streak increased.",
      time: "Today",
      icon: "🌿",
    },
    {
      id: 4,
      title: "AI Recommendation",
      description: "Mana AI suggested a breathing exercise.",
      time: "Today",
      icon: "🤖",
    },
  ];

  return (
    <GlassCard className="p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Recent Activity
        </h2>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          Today
        </span>

      </div>

      <div className="mt-6 space-y-5">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-lg dark:hover:bg-gray-800"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl dark:bg-emerald-900/40">
              {activity.icon}
            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {activity.title}
                </h3>

                <span className="text-xs text-gray-500">
                  {activity.time}
                </span>

              </div>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {activity.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </GlassCard>
  );
}

export default RecentActivity;