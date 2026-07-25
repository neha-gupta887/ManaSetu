const challenges = [
  {
    id: 1,
    title: "💧 Drink 8 Glasses of Water",
    reward: 20,
  },
  {
    id: 2,
    title: "🧘 Meditate for 10 Minutes",
    reward: 25,
  },
  {
    id: 3,
    title: "🚶 Walk for 20 Minutes",
    reward: 30,
  },
  {
    id: 4,
    title: "📖 Write a Journal Entry",
    reward: 20,
  },
  {
    id: 5,
    title: "😊 Practice Gratitude",
    reward: 15,
  },
  {
    id: 6,
    title: "🌙 Sleep Before 11 PM",
    reward: 30,
  },
];

export function getDailyChallenge() {
  const day = new Date().getDate();
  return challenges[day % challenges.length];
}