import { getAIResponse } from "../services/geminiService";

export async function analyzeMood(userData) {
  const prompt = `
You are the Mood Analysis Agent of ManaSetu.

Analyze the following student data.

Mood: ${userData.mood}
Stress: ${userData.stress}
Sleep: ${userData.sleep}
Journal: ${userData.journal}

Return ONLY valid JSON.

{
  "emotion":"",
  "stressLevel":"",
  "burnoutRisk":"",
  "summary":"",
  "recommendation":""
}
`;

  const response = await getAIResponse(prompt);

  return response;
}