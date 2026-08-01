import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey,
});

/**
 * Returns plain text response from Gemini.
 */
export async function getAIResponse(prompt) {
  try {
    if (!apiKey) {
      throw new Error(
        "Gemini API key not found. Please check your .env file."
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("========== GEMINI ERROR ==========");
    console.error(error);

    return "Sorry, I'm having trouble responding right now.";
  }
}

/**
 * Returns parsed JSON response.
 * Used by AI Agents.
 */
export async function getAIJsonResponse(prompt) {
  try {
    const text = await getAIResponse(prompt);

    // Remove markdown if Gemini returns ```json ... ```
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error("JSON Parsing Error:", error);

    return {
      success: false,
      error: "Failed to parse AI response.",
    };
  }
}