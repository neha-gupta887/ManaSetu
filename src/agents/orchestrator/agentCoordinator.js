export function selectAgents(userData) {
  const agents = [];

  const text = `
    ${userData.mood || ""}
    ${userData.journal || ""}
    ${userData.stress || ""}
  `.toLowerCase();

  // Mood Agent always runs
  agents.push("mood");

  // Sleep Agent
  if (
    text.includes("sleep") ||
    text.includes("tired") ||
    text.includes("insomnia") ||
    text.includes("awake")
  ) {
    agents.push("sleep");
  }

  // Study Agent
  if (
    text.includes("exam") ||
    text.includes("study") ||
    text.includes("assignment") ||
    text.includes("college")
  ) {
    agents.push("study");
  }

  // Crisis Agent
  if (
    text.includes("hopeless") ||
    text.includes("panic") ||
    text.includes("suicide") ||
    text.includes("self harm")
  ) {
    agents.push("crisis");
  }

  return [...new Set(agents)];
}