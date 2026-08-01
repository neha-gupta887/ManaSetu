import { getAIResponse } from "../services/geminiService";

export async function analyzeMood(userData) {
  const prompt = `
You are "MoodAgent", a specialized AI agent inside the ManaSetu Agentic AI system.

Your responsibility is ONLY mood analysis.

Student Information:
- Mood: ${userData.mood}
- Stress: ${userData.stress}
- Sleep: ${userData.sleep}
- Journal: ${userData.journal}

Analyze the student's emotional state and provide:

1. Primary Emotion
2. Stress Level (Low, Medium, High)
3. Burnout Risk (Low, Medium, High)
4. Short Summary
5. Actionable Recommendation

Respond ONLY in the following JSON format.

{
  "agent":"MoodAgent",
  "emotion":"",
  "stressLevel":"",
  "burnoutRisk":"",
  "summary":"",
  "recommendation":""
}
`;

  try {
    const response = await getAIResponse(prompt);

    return response;
  } catch (error) {
    console.error("Mood Agent Error:", error);

    return JSON.stringify({
      agent: "MoodAgent",
      emotion: "Unknown",
      stressLevel: "Unknown",
      burnoutRisk: "Unknown",
      summary: "Unable to analyze mood.",
      recommendation: "Please try again later."
    });
  }
}