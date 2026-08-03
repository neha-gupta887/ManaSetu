export function generateDecision(agentResult) {
  const tasks = [];

  if (agentResult?.mood) {
    tasks.push("😊 Practice 10 minutes of mindfulness.");
  }

  if (agentResult?.sleep) {
    tasks.push("😴 Sleep at least 7-8 hours tonight.");
  }

  if (agentResult?.study) {
    tasks.push("📚 Study using two 45-minute Pomodoro sessions.");
  }

  if (agentResult?.crisis) {
    tasks.push("❤️ Reach out to a trusted friend or counselor if you feel overwhelmed.");
  }

  return {
    wellnessScore: 82,
    priority: "Medium",
    tasks,
  };
}