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
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        📈 Weekly Wellness Progress
      </h2>

      <div className="mt-8 space-y-6">

        {progress.map((item) => (

          <div key={item.title}>

            <div className="mb-2 flex justify-between">

              <span className="font-medium text-gray-700 dark:text-gray-300">
                {item.title}
              </span>

              <span className="text-sm text-gray-500">
                {item.value}
              </span>

            </div>

            <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">

              <div
                className={`${item.color} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${item.progress}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WeeklyProgress;