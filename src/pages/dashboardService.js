import { getMoodHistory } from "./moodService";
import { getJournalHistory } from "./journalService";

export const getDashboardStats = async () => {
  try {
    const moodHistory = await getMoodHistory();
    const journalHistory = await getJournalHistory();

    const totalMoodEntries = moodHistory.length;
    const journalEntries = journalHistory.length;

    // A simple wellness score calculation
    const moodScores = moodHistory.map((mood) => {
      const scores = { Happy: 5, Calm: 4, Neutral: 3, Sad: 2, Stressed: 1, Angry: 1 };
      return scores[mood.mood] || 3;
    });
    const avgMoodScore =
      moodScores.length > 0
        ? moodScores.reduce((a, b) => a + b, 0) / moodScores.length
        : 3;
    const wellnessScore = Math.round((avgMoodScore / 5) * 100);

    // This is a placeholder. A real implementation would need more robust date checking.
    const streak = localStorage.getItem("dailyStreak") || 1;

    const currentMood = moodHistory.length > 0 ? moodHistory[0].mood : "Not set";

    return {
      wellnessScore,
      streak,
      journalEntries,
      totalMoodEntries,
      currentMood,
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return {
      wellnessScore: 0,
      streak: 0,
      journalEntries: 0,
      totalMoodEntries: 0,
      currentMood: "Error",
    };
  }
};