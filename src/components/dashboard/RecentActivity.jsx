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
    <div className="rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-8">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <div className="text-3xl">
              {activity.icon}
            </div>

            <div className="flex-1">

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {activity.title}
              </h3>

              <p className="mt-1 text-gray-600 dark:text-gray-300">
                {activity.description}
              </p>

              <span className="mt-2 inline-block text-sm text-gray-500">
                {activity.time}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivity;