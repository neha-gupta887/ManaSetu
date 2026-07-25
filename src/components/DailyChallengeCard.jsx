import { useState } from "react";
import { getDailyChallenges } from "../services/challengeService";

function DailyChallengeCard() {
  const [challenges, setChallenges] = useState(getDailyChallenges());

  const toggleChallenge = (id) => {
    setChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  };

  const completedCount = challenges.filter(
    (challenge) => challenge.completed
  ).length;

  const progress = Math.round(
    (completedCount / challenges.length) * 100
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
      <h2 className="text-3xl font-bold text-emerald-700">
        🏆 Daily Wellness Challenges
      </h2>

      <p className="text-gray-600 mt-2">
        Complete today's challenges and build healthy habits.
      </p>

      <div className="space-y-5 mt-8">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="flex items-center justify-between bg-emerald-50 rounded-xl p-4"
          >
            <div>
              <p
                className={`font-medium ${
                  challenge.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {challenge.title}
              </p>
            </div>

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
        <h3 className="font-semibold text-lg">
          Today's Progress
        </h3>

        <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
          <div
            className="bg-emerald-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-center mt-3 text-2xl font-bold text-emerald-600">
          {progress}% Completed
        </p>
      </div>
    </div>
  );
}

export default DailyChallengeCard;