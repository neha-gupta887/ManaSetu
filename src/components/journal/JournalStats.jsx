function JournalStats({ entries }) {
  const totalEntries = entries.length;

  const moodCounts = {};
  const categoryCounts = {};

  entries.forEach((entry) => {
    moodCounts[entry.mood] =
      (moodCounts[entry.mood] || 0) + 1;

    categoryCounts[entry.category] =
      (categoryCounts[entry.category] || 0) + 1;
  });

  const mostCommonMood =
    Object.keys(moodCounts).length > 0
      ? Object.keys(moodCounts).reduce((a, b) =>
          moodCounts[a] > moodCounts[b] ? a : b
        )
      : "😊";

  const mostUsedCategory =
    Object.keys(categoryCounts).length > 0
      ? Object.keys(categoryCounts).reduce((a, b) =>
          categoryCounts[a] > categoryCounts[b]
            ? a
            : b
        )
      : "-";

  const oneWeekAgo = new Date();

  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const weeklyEntries = entries.filter(
    (entry) =>
      new Date(entry.date) >= oneWeekAgo
  ).length;

  const stats = [
    {
      title: "Total Entries",
      value: totalEntries,
      icon: "📖",
    },
    {
      title: "Top Mood",
      value: mostCommonMood,
      icon: "😊",
    },
    {
      title: "Top Category",
      value: mostUsedCategory,
      icon: "🏷️",
    },
    {
      title: "This Week",
      value: weeklyEntries,
      icon: "📅",
    },
  ];

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900"
        >
          <div className="text-4xl">
            {stat.icon}
          </div>

          <h3 className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
            {stat.title}
          </h3>

          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {stat.value}
          </p>

        </div>
      ))}

    </div>
  );
}

export default JournalStats;