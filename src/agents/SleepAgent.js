import { getAIResponse } from "../services/geminiService";

export async function analyzeSleep(userData) {
  const prompt = `
You are the Sleep Analysis Agent of ManaSetu.

Analyze the following student sleep data.

Sleep Hours: ${userData.sleep}
Stress: ${userData.stress}
Mood: ${userData.mood}

Return ONLY valid JSON.

{
  "sleepQuality": "",
  "possibleIssues": "",
  "recommendation": "",
  "idealSleepHours": ""
}
`;

  return await getAIResponse(prompt);
}