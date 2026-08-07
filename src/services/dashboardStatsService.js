import { getMoodHistory } from "./moodService";
import { getJournalHistory } from "./journalService";
import { getMoodAnalytics } from "./analyticsService";

// =====================================================
// GET DASHBOARD STATS
// =====================================================

export const getDashboardStats = async () => {
  try {
    const [moods, journals, analytics] = await Promise.all([
      getMoodHistory(),
      getJournalHistory(),
      getMoodAnalytics(),
    ]);

    const totalMoodEntries = moods.length;
    const totalJournalEntries = journals.length;

    const latestMood = moods[0];

    const currentMood = latestMood
      ? `${latestMood.emoji || ""} ${latestMood.mood}`.trim()
      : "No Mood";

    return {
      wellnessScore: analytics.wellnessScore ?? 0,

      streak: analytics.streak ?? 0,

      journalEntries: totalJournalEntries,

      currentMood,

      totalMoodEntries,

      mostFrequentMood:
        analytics.mostFrequentMood ?? "No Data",

      moodDistribution:
        analytics.moodDistribution ?? [],

      weeklyTrend:
        analytics.weeklyTrend ?? [],
    };
  } catch (error) {
    console.error("❌ Dashboard Stats Error:", error);

    return {
      wellnessScore: 0,
      streak: 0,
      journalEntries: 0,
      currentMood: "No Mood",
      totalMoodEntries: 0,
      mostFrequentMood: "No Data",
      moodDistribution: [],
      weeklyTrend: [],
    };
  }
};