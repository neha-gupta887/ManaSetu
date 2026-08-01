import { analyzeMood } from "../agents/moodAgent";
import { generateStudyPlan } from "../agents/studyAgent";
import { analyzeSleep } from "../agents/sleepAgent";

export async function generateWellnessPlan(userData) {
  const mood = await analyzeMood(userData);
  const study = await generateStudyPlan(userData);
  const sleep = await analyzeSleep(userData);

  return {
    mood,
    study,
    sleep,
  };
}