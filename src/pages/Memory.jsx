import { useEffect, useState } from "react";
import {
  getWellnessHistory,
  clearWellnessHistory,
} from "../services/memoryService";

function Memory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getWellnessHistory());
  }, []);

  const handleClear = () => {
    clearWellnessHistory();
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">

      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold dark:text-white">
            🧠 ManaSetu Memory
          </h1>

          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
          >
            Clear History
          </button>

        </div>

        {history.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-10 text-center">

            <h2 className="text-2xl font-semibold dark:text-white">
              No Wellness History Found
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Start chatting with Mana AI to create your first wellness record.
            </p>

          </div>
        ) : (
          <div className="space-y-6">

            {history.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6"
              >

                <div className="flex justify-between">

                  <h2 className="text-xl font-bold dark:text-white">
                    Session #{history.length - index}
                  </h2>

                  <span className="text-gray-500">
                    {item.date}
                  </span>

                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-6">

                  <div>
                    <h3 className="font-semibold text-green-600">
                      🧠 Mood
                    </h3>

                    <p>Emotion: {item.mood?.emotion || "Unknown"}</p>

                    <p>Stress: {item.mood?.stressLevel || "Unknown"}</p>

                    <p>Burnout: {item.mood?.burnoutRisk || "Unknown"}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-600">
                      😴 Sleep
                    </h3>

                    <p>
                      {item.sleep?.summary ||
                        "No sleep analysis"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-purple-600">
                      📚 Study
                    </h3>

                    <p>
                      {item.study?.summary ||
                        "No study analysis"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-red-600">
                      🚨 Crisis
                    </h3>

                    <p>
                      {item.crisis?.risk || "Low"}
                    </p>
                  </div>

                </div>

                {item.decision && (
                  <div className="mt-6 bg-emerald-50 dark:bg-emerald-900 rounded-xl p-5">

                    <h3 className="font-bold text-lg">
                      💚 Wellness Score
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                      {item.decision.wellnessScore}/100
                    </p>

                    <p className="mt-3">
                      Priority: {item.decision.priority}
                    </p>

                    {item.decision.tasks?.length > 0 && (
                      <>
                        <h4 className="font-semibold mt-4">
                          Today's Tasks
                        </h4>

                        <ul className="list-disc ml-6 mt-2">
                          {item.decision.tasks.map((task, i) => (
                            <li key={i}>{task}</li>
                          ))}
                        </ul>
                      </>
                    )}

                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Memory;