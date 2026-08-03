export function generateExplanation(result) {
  const reasons = [];

  if (result.mood?.stressLevel === "High") {
    reasons.push("High stress level detected.");
  }

  if (result.sleep) {
    reasons.push("Sleep analysis indicates poor sleep quality.");
  }

  if (result.study) {
    reasons.push("Academic workload may be increasing stress.");
  }

  if (result.crisis) {
    reasons.push("Emotional distress indicators were identified.");
  }

  if (result.burnout?.risk === "High") {
    reasons.push("Burnout prediction model indicates high risk.");
  }

  return {
    confidence:
      reasons.length >= 4
        ? 95
        : reasons.length >= 2
        ? 85
        : 70,

    reasons,
  };
}