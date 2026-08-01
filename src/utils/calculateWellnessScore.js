export function calculateWellnessScore(data) {
  let score = 100;

  if (data.stress === "High") score -= 30;
  if (data.stress === "Medium") score -= 15;

  if (data.sleepHours && data.sleepHours < 6) score -= 20;

  if (data.mood === "Sad") score -= 15;
  if (data.mood === "Anxious") score -= 20;

  return Math.max(0, Math.min(score, 100));
}