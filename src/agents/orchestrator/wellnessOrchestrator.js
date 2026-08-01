import { analyzeMood } from "../agents/moodAgent";
import { generateStudyPlan } from "../agents/studyAgent";
import { analyzeSleep } from "../agents/sleepAgent";
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

    return result;
  } catch (error) {
    console.error(error);

    return {
      error: "Unable to generate wellness plan.",
    };
  }
}