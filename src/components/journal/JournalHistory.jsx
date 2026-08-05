function JournalHistory() {
  const entries = [
    {
      id: 1,
      title: "Feeling Happy",
      date: "Today",
    },
    {
      id: 2,
      title: "Gratitude Journal",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Morning Reflection",
      date: "2 days ago",
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Recent Entries
      </h2>

      <div className="mt-6 space-y-4">

        {entries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-2xl border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {entry.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {entry.date}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default JournalHistory;