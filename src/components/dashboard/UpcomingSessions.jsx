function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: "Morning Meditation",
      time: "08:00 AM",
      emoji: "🧘",
    },
    {
      id: 2,
      title: "Mood Check-in",
      time: "01:00 PM",
      emoji: "😊",
    },
    {
      id: 3,
      title: "Evening Walk",
      time: "06:30 PM",
      emoji: "🚶",
    },
    {
      id: 4,
      title: "Sleep Reflection",
      time: "09:30 PM",
      emoji: "🌙",
    },
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        📅 Upcoming Sessions
      </h2>

      <div className="mt-6 space-y-4">

        {sessions.map((session) => (

          <div
            key={session.id}
            className="flex items-center justify-between rounded-2xl border border-gray-200 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                {session.emoji}
              </div>

              <div>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {session.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {session.time}
                </p>

              </div>

            </div>

            <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white transition hover:bg-emerald-700">
              Join
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default UpcomingSessions;