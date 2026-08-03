export function analyzeTrend(history) {
  if (!history || history.length < 2) {
    return {
      message: "Not enough data to analyze trends.",
      mood: "Unknown",
      stress: "Unknown",
      wellness: "Unknown",
    };
  }

  const latest = history[0];
  const previous = history[1];

  let mood = "Stable";
  let stress = "Stable";
  let wellness = "Stable";

  if (
    latest.mood?.stressLevel === "High" &&
    previous.mood?.stressLevel !== "High"
  ) {
    stress = "Increasing";
  }

  if (
    latest.mood?.emotion !== previous.mood?.emotion
  ) {
    mood = "Changing";
  }

  const latestScore =
    latest.decision?.wellnessScore || 80;

  const previousScore =
    previous.decision?.wellnessScore || 80;

  if (latestScore > previousScore) {
    wellness = "Improving";
  }

  if (latestScore < previousScore) {
    wellness = "Declining";
  }

  return {
    mood,
    stress,
    wellness,
    message:
      "Trend analysis generated successfully.",
  };
}