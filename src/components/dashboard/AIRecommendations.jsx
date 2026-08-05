function AIRecommendations() {
  const recommendations = [
    {
      id: 1,
      title: "Take a 5-minute breathing break",
      description:
        "Your recent activity suggests a short breathing session could improve focus.",
      icon: "🫁",
    },
    {
      id: 2,
      title: "Write a gratitude journal",
      description:
        "Recording three positive moments today can boost your wellbeing.",
      icon: "📖",
    },
    {
      id: 3,
      title: "Drink more water",
      description:
        "You're close to your hydration goal. One more glass will complete it.",
      icon: "💧",
    },
    {
      id: 4,
      title: "Sleep on time",
      description:
        "Maintaining a consistent sleep schedule supports emotional wellness.",
      icon: "🌙",
    },
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🤖 AI Recommendations
        </h2>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          Personalized
        </span>

      </div>

      <div className="mt-8 space-y-5">

        {recommendations.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 transition hover:shadow-lg hover:-translate-y-1"
          >

            <div className="flex gap-4">

              <div className="text-3xl">
                {item.icon}
              </div>

              <div>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIRecommendations;