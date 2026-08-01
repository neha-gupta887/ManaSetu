import { analyzeMood } from "../MoodAgent";
import { generateStudyPlan } from "../StudyAgent";
import { analyzeSleep } from "../SleepAgent";
import { analyzeCrisis } from "../CrisisAgent";
import { selectAgents } from "./agentCoordinator";

export async function generateWellnessPlan(userData) {
  try {
    const selectedAgents = selectAgents(userData);

    const result = {
      selectedAgents,
    };

    if (selectedAgents.includes("mood")) {
      result.mood = await analyzeMood(userData);
    }

    if (selectedAgents.includes("study")) {
      result.study = await generateStudyPlan(userData);
    }

    if (selectedAgents.includes("sleep")) {
      result.sleep = await analyzeSleep(userData);
    }

    if (selectedAgents.includes("crisis")) {
      result.crisis = await analyzeCrisis(userData);
    }

    return result;
  } catch (error) {
    console.error(error);

    return {
      error: "Unable to generate wellness plan.",
    };
  }
}