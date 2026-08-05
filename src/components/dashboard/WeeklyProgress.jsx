import GlassCard from "../ui/GlassCard";

function WeeklyProgress() {
  const progress = [
    {
      title: "Mood Check-ins",
      value: "6 / 7 Days",
      progress: 86,
      color: "bg-emerald-500",
    },
    {
      title: "Meditation",
      value: "5 / 7 Days",
      progress: 71,
      color: "bg-blue-500",
    },
    {
      title: "Water Intake",
      value: "7 / 7 Days",
      progress: 100,
      color: "bg-cyan-500",
    },
    {
      title: "Sleep Goal",
      value: "6 / 7 Days",
      progress: 86,
      color: "bg-purple-500",
    },
  ];

  return (
    <GlassCard className="p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          📈 Weekly Wellness Progress
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          This Week
        </span>

      </div>

      <div className="mt-8 space-y-6">

        {progress.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="mb-3 flex items-center justify-between">

              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {item.title}
              </span>

              <span className="text-sm font-medium text-gray-500">
                {item.value}
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">

              <div
                className={`${item.color} h-full rounded-full transition-all duration-700`}
                style={{ width: `${item.progress}%` }}
              />

            </div>

            <div className="mt-2 text-right text-sm text-gray-500">
              {item.progress}% Complete
            </div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default WeeklyProgress;