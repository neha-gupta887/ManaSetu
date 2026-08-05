function JournalInsights({ entries }) {
  if (entries.length === 0) {
    return (
      <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🤖 AI Wellness Insights
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Start writing journal entries to receive personalized wellness insights.
        </p>
      </div>
    );
  }

  const moodCounts = {};

  entries.forEach((entry) => {
    moodCounts[entry.mood] =
      (moodCounts[entry.mood] || 0) + 1;
  });

  const dominantMood = Object.keys(moodCounts).reduce((a, b) =>
    moodCounts[a] > moodCounts[b] ? a : b
  );

  let message = "";

  switch (dominantMood) {
    case "😊":
    case "😄":
      message =
        "You're maintaining a positive emotional pattern. Keep practicing gratitude and healthy habits.";
      break;

    case "😐":
      message =
        "Your mood has been fairly balanced. Consider activities that bring you more joy and relaxation.";
      break;

    case "😔":
    case "😢":
      message =
        "You've expressed several low moods recently. Consider journaling more often, practicing mindfulness, or talking to someone you trust.";
      break;

    case "😡":
      message =
        "You may be experiencing stress or frustration. Deep breathing and short breaks could help.";
      break;

    case "😴":
      message =
        "Your journal suggests possible fatigue. Prioritize rest, hydration, and a consistent sleep schedule.";
      break;

    default:
      message =
        "Keep tracking your emotions. Every journal entry helps build better wellness insights.";
  }

  return (
    <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        🤖 AI Wellness Insights
      </h2>

      <div className="mt-6 rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-900/20">

        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
          Dominant Mood
        </h3>

        <p className="mt-2 text-4xl">
          {dominantMood}
        </p>

        <p className="mt-5 leading-7 text-gray-700 dark:text-gray-300">
          {message}
        </p>

      </div>

    </div>
  );
}

export default JournalInsights;