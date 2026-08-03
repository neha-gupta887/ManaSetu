export function predictBurnout(result, history = []) {
  let score = 0;
  const reasons = [];

  // Mood
  if (result.mood?.stressLevel === "High") {
    score += 30;
    reasons.push("High stress detected");
  }

  // Sleep
  if (result.sleep) {
    score += 20;
    reasons.push("Poor sleep pattern");
  }

  // Crisis
  if (result.crisis) {
    score += 40;
    reasons.push("Emotional crisis indicators");
  }

  // Previous history
  if (history.length >= 3) {
    score += 10;
    reasons.push("Repeated wellness issues");
  }

  let level = "Low";

  if (score >= 70) {
    level = "High";
  } else if (score >= 40) {
    level = "Moderate";
  }

  return {
    risk: level,
    score,
    reasons,
  };
}