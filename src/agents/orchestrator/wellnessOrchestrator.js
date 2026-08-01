import { analyzeMood } from "../agents/moodAgent";
import { generateStudyPlan } from "../agents/studyAgent";
import { analyzeSleep } from "../agents/sleepAgent";

export async function generateWellnessPlan(userData) {
  try {
    // Run all independent agents in parallel
    const [mood, study, sleep] = await Promise.all([
      analyzeMood(userData),
      generateStudyPlan(userData),
      analyzeSleep(userData),
    ]);

    return {
      success: true,
      mood,
      study,
      sleep,
      generatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Wellness Orchestrator Error:", error);

    return {
      success: false,
      error: "Failed to generate wellness plan.",
    };
  }
}