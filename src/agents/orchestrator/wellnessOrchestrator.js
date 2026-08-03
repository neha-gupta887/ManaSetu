import { generateDecision } from "../decisionAgent";
import { analyzeMood } from "../MoodAgent";
import { generateStudyPlan } from "../StudyAgent";
import { analyzeSleep } from "../SleepAgent";
import { analyzeCrisis } from "../CrisisAgent";

import { selectAgents } from "./agentCoordinator";
import { selectAgentsAI } from "./agentSelector";

export async function generateWellnessPlan(userData) {
  try {
    let selectedAgents = [];

    // Try AI-based coordinator first
    try {
      const aiResult = await selectAgentsAI(userData);

      selectedAgents = aiResult.selectedAgents || ["mood"];

      console.log("🤖 Gemini Coordinator:", selectedAgents);
    } catch (error) {
      console.log(
        "⚠ Gemini Coordinator failed. Switching to Keyword Coordinator."
      );

      selectedAgents = selectAgents(userData);

      console.log("📝 Keyword Coordinator:", selectedAgents);
    }

    const result = {
      selectedAgents,
    };

    // 🧠 Mood Agent
    if (selectedAgents.includes("mood")) {
      result.mood = await analyzeMood(userData);
    }

    // 😴 Sleep Agent
    if (selectedAgents.includes("sleep")) {
      result.sleep = await analyzeSleep(userData);
    }

    // 📚 Study Agent
    if (selectedAgents.includes("study")) {
      result.study = await generateStudyPlan(userData);
    }

    // 🚨 Crisis Agent
    if (selectedAgents.includes("crisis")) {
      result.crisis = await analyzeCrisis(userData);
    }

    return result;
  } catch (error) {
    console.error("Wellness Orchestrator Error:", error);

    return {
      selectedAgents: [],
      error: "Unable to generate wellness plan.",
    };
  }
}