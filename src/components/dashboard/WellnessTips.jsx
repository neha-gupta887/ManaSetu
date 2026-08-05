function WellnessTips() {
  const tips = [
    {
      id: 1,
      emoji: "💧",
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water today.",
    },
    {
      id: 2,
      emoji: "🧘",
      title: "Practice Mindfulness",
      description: "Spend 10 minutes meditating to reduce stress.",
    },
    {
      id: 3,
      emoji: "🚶",
      title: "Take a Walk",
      description: "A short walk can boost your mood and energy.",
    },
    {
      id: 4,
      emoji: "😴",
      title: "Sleep Well",
      description: "Aim for 7–8 hours of quality sleep tonight.",
    },
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        💚 Wellness Tips
      </h2>

      <div className="mt-6 space-y-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 transition hover:bg-emerald-50 dark:hover:bg-gray-800"
          >
            <div className="flex gap-4">

              <div className="text-3xl">
                {tip.emoji}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {tip.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {tip.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WellnessTips;