import { getAIResponse } from "../../services/geminiService";

export async function selectAgentsAI(userData) {
  const prompt = `
You are the AI Coordinator of ManaSetu.

Based on the student's input, decide which AI agents should run.

Available agents:
- mood
- sleep
- study
- crisis

Student Data:

Mood: ${userData.mood}
Stress: ${userData.stress}
Sleep: ${userData.sleep}
Journal: ${userData.journal}
Exam: ${userData.exam}

Return ONLY valid JSON.

Example:

{
  "selectedAgents":[
    "mood",
    "study"
  ]
}
`;

  const response = await getAIResponse(prompt);

  try {
    return JSON.parse(response);
  } catch {
    return {
      selectedAgents: ["mood"],
    };
  }
}