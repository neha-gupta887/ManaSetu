import { useState } from "react";
import { getDailyChallenges } from "../services/challengeService";

function DailyChallengesCard() {
  const [challenges, setChallenges] = useState(getDailyChallenges());

  const toggleChallenge = (id) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  };

  const completedCount = challenges.filter(
    (challenge) => challenge.completed
  ).length;

  const progress =
    challenges.length > 0
      ? Math.round((completedCount / challenges.length) * 100)
      : 0;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-6">
      <h2 className="text-2xl font-bold text-emerald-700">
        🎯 Daily Wellness Challenges
      </h2>

      <p className="text-gray-600 mt-2">
        Complete today's healthy habits and improve your wellness.
      </p>

      <div className="mt-6 space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-4"
          >
            <span
              className={`font-medium ${
                challenge.completed
                  ? "line-through text-gray-500"
                  : "text-gray-800"
              }`}
            >
              {challenge.title}
            </span>

            <button
              onClick={() => toggleChallenge(challenge.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                challenge.completed
                  ? "bg-green-600 text-white"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}
            >
              {challenge.completed ? "✅ Done" : "Complete"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-lg font-semibold text-emerald-700 mb-3">
          Progress: {completedCount}/{challenges.length} ({progress}%)
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-emerald-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {completedCount === challenges.length && challenges.length > 0 && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-bold text-lg">
              🎉 Congratulations! You completed all today's challenges.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyChallengesCard;