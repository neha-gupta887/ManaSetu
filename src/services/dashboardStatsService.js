import { getMoodHistory } from "./moodService";
import { getJournalHistory } from "./journalService";

export const getDashboardStats = async () => {
  try {
    const moods = await getMoodHistory();
    const journals = await getJournalHistory();

    const totalMoodEntries = moods.length;
    const totalJournalEntries = journals.length;

    const currentMood =
      totalMoodEntries > 0
        ? `${moods[0].emoji} ${moods[0].mood}`
        : "No Mood";

    // Temporary streak
    const streak = totalMoodEntries;

    // Wellness Score (temporary formula)
    const wellnessScore = Math.min(
      100,
      50 +
        totalMoodEntries * 2 +
        totalJournalEntries
    );

    return {
      wellnessScore,
      streak,
      journalEntries: totalJournalEntries,
      currentMood,
      totalMoodEntries,
    };
  } catch (error) {
    console.error("Dashboard Stats Error:", error);

    return {
      wellnessScore: 0,
      streak: 0,
      journalEntries: 0,
      currentMood: "No Mood",
      totalMoodEntries: 0,
    };
  }
};