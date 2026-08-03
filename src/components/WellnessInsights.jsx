import { useAgent } from "../context/AgentContext";

function WellnessInsights() {
  const { agentResult } = useAgent();

  if (!agentResult) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-3 dark:text-white">
          🧠 AI Wellness Insights
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          Chat with Mana AI to generate your personalized wellness insights.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-5 dark:text-white">
        🧠 AI Wellness Insights
      </h2>

      <div className="space-y-3">

        <div>
          😊 <strong>Mood:</strong>{" "}
          {agentResult.mood?.emotion || "Not Available"}
        </div>

        <div>
          😴 <strong>Sleep:</strong>{" "}
          {agentResult.sleep?.summary || "Not Available"}
        </div>

        <div>
          📚 <strong>Study:</strong>{" "}
          {agentResult.study?.summary || "Not Available"}
        </div>

        <div>
          🚨 <strong>Risk:</strong>{" "}
          {agentResult.crisis?.risk || "Low"}
        </div>

        <hr />

        <div>
          <strong>💡 Recommendation</strong>

          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {agentResult.mood?.recommendation ||
              agentResult.study?.recommendation ||
              agentResult.sleep?.recommendation ||
              "Keep maintaining healthy habits."}
          </p>
        </div>

      </div>
    </div>
  );
}

export default WellnessInsights;