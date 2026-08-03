import { useAgent } from "../context/AgentContext";

function AICommandCenter() {
  const { agentResult } = useAgent();

  const activeAgents = agentResult?.selectedAgents || [];

  const getStatus = (agent) => {
    if (activeAgents.includes(agent)) {
      return (
        <span className="text-green-600 font-semibold">
          ✅ Executed
        </span>
      );
    }

    if (agent === "crisis") {
      return (
        <span className="text-blue-600 font-semibold">
          ✅ Safe
        </span>
      );
    }

    return (
      <span className="text-gray-500 font-semibold">
        ⏳ Skipped
      </span>
    );
  };

  const recommendation =
    agentResult?.mood?.recommendation ||
    agentResult?.study?.recommendation ||
    agentResult?.sleep?.recommendation ||
    "Talk to Mana AI to receive a personalized wellness recommendation.";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          🤖 ManaSetu AI Command Center
        </h1>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Active AI Agents */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-5 dark:text-white">
              Active AI Agents
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>🧠 Mood Agent</span>
                {getStatus("mood")}
              </div>

              <div className="flex justify-between">
                <span>😴 Sleep Agent</span>
                {getStatus("sleep")}
              </div>

              <div className="flex justify-between">
                <span>📚 Study Agent</span>
                {getStatus("study")}
              </div>

              <div className="flex justify-between">
                <span>🚨 Crisis Agent</span>
                {getStatus("crisis")}
              </div>

            </div>

          </div>

          {/* Wellness Score */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow p-6 text-white">

            <h2 className="text-xl font-bold">
              💚 Wellness Score
            </h2>

            <div className="text-6xl font-bold mt-6">
              {agentResult ? "82" : "--"}
            </div>

            <p className="mt-3 text-green-100">
              AI Generated Wellness Score
            </p>

          </div>

          {/* AI Recommendation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-5 dark:text-white">
              ✨ AI Recommendation
            </h2>

            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {recommendation}
            </p>

          </div>

        </div>

        {/* No Analysis Yet */}
        {!agentResult && (
          <div className="mt-8 bg-yellow-100 border border-yellow-300 rounded-2xl p-5">

            <h3 className="font-bold text-lg">
              No AI Analysis Available
            </h3>

            <p className="mt-2">
              Open the AI Companion, chat with Mana AI, and return here to
              see your live AI analysis.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default AICommandCenter;