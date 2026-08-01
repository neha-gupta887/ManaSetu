import { getAIResponse } from "../services/geminiService";

export async function generateStudyPlan(userData) {

const prompt = `

You are Study Planning Agent.

Student Mood:
${userData.mood}

Upcoming Exams:
${userData.exam}

Stress:
${userData.stress}

Create a study schedule.

Return JSON only.

`;

return await getAIResponse(prompt);

}