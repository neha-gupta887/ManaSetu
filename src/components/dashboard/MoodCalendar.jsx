function MoodCalendar() {
  const moods = [
    "😊", "😄", "😌", "😐", "😊", "😁", "🤩",
    "😇", "🙂", "😊", "😔", "😊", "😄", "🥳",
    "😎", "😊", "😌", "😁", "🤗", "😊", "😴",
    "😊", "😄", "😍", "😊", "😌", "🤩", "😊",
    "😄", "🙂"
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          📅 Mood Calendar
        </h2>

        <span className="text-sm text-gray-500">
          This Month
        </span>

      </div>

      <div className="mt-8 grid grid-cols-7 gap-3">

        {moods.map((mood, index) => (
          <div
            key={index}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl transition hover:scale-110 hover:bg-emerald-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {mood}
          </div>
        ))}

      </div>

    </div>
  );
}

export default MoodCalendar;