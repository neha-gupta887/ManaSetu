export async function generateDecision(result) {
  const tasks = [];
  let priority = "Low";
  let score = 90;

  if (result.mood?.stressLevel === "High") {
    tasks.push("Take a 10-minute breathing exercise.");
    score -= 15;
    priority = "High";
  }

  if (result.sleep) {
    tasks.push("Sleep before 11 PM tonight.");
    score -= 5;
  }

  if (result.study) {
    tasks.push("Complete two focused Pomodoro sessions.");
    score -= 5;
  }

  if (result.crisis) {
    tasks.push("Reach out to a trusted friend or counselor.");
    score -= 20;
    priority = "Critical";
  }

  return {
    wellnessScore: Math.max(score, 0),
    priority,
    tasks,
  };
}