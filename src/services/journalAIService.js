import { getAIJsonResponse } from "./geminiService";

export async function analyzeJournal(content) {
  const prompt = `
You are Mana AI, an AI wellness assistant.

Analyze the following journal entry and return ONLY valid JSON.

Journal:
${content}

Return in this format:

{
  "emotion":"Happy",
  "summary":"Short summary",
  "suggestion":"Personalized wellness suggestion",
  "affirmation":"Positive affirmation",
  "sentiment":85,
  "keywords":["study","stress","exam"]
}
`;

  return await getAIJsonResponse(prompt);
}
