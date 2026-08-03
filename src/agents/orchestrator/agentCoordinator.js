export function selectAgents(userData) {
  const agents = [];

  const text = `
    ${userData.mood || ""}
    ${userData.journal || ""}
    ${userData.stress || ""}
    ${userData.sleep || ""}
    ${userData.exam || ""}
  `.toLowerCase();

  // 🧠 Mood Agent (always runs)
  agents.push("mood");

  // 😴 Sleep Agent
  const sleepKeywords = [
    "sleep",
    "slept",
    "insomnia",
    "awake",
    "tired",
    "fatigue",
    "fatigued",
    "rest",
    "restless",
    "night",
    "late",
    "bed",
    "drowsy",
    "exhausted",
    "sleepy",
  ];

  if (sleepKeywords.some((word) => text.includes(word))) {
    agents.push("sleep");
  }

  // 📚 Study Agent
  const studyKeywords = [
    "study",
    "exam",
    "assignment",
    "project",
    "college",
    "school",
    "class",
    "semester",
    "deadline",
    "presentation",
    "quiz",
    "test",
    "interview",
    "placement",
    "coding",
    "hackathon",
    "leetcode",
  ];

  if (studyKeywords.some((word) => text.includes(word))) {
    agents.push("study");
  }

  // 🚨 Crisis Agent
  const crisisKeywords = [
    "hopeless",
    "panic",
    "anxiety",
    "anxious",
    "depressed",
    "depression",
    "worthless",
    "alone",
    "suicide",
    "self harm",
    "self-harm",
    "can't continue",
    "give up",
    "burnout",
    "overwhelmed",
  ];

  if (crisisKeywords.some((word) => text.includes(word))) {
    agents.push("crisis");
  }

  // Remove duplicate agents
  return [...new Set(agents)];
}