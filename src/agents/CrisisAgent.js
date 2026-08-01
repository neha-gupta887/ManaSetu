import { getAIJsonResponse } from "../services/geminiService";

export async function analyzeCrisis(userData) {
  const prompt = `
You are "CrisisAgent", a specialized AI safety agent inside ManaSetu.

Your job is to detect whether the student is showing signs of severe emotional distress.

Student Message:
${userData.mood}

Journal:
${userData.journal}

Return ONLY valid JSON.

{
  "agent":"CrisisAgent",
  "riskLevel":"Low | Medium | High",
  "requiresImmediateAttention":true,
  "summary":"",
  "recommendation":""
}
`;

  return await getAIJsonResponse(prompt);
}