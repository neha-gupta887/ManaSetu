function AgentExecution({ activeAgents }) {
  const agents = [
    {
      key: "mood",
      name: "🧠 Mood Agent",
    },
    {
      key: "sleep",
      name: "😴 Sleep Agent",
    },
    {
      key: "study",
      name: "📚 Study Agent",
    },
    {
      key: "crisis",
      name: "🚨 Crisis Agent",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        🤖 Agent Execution Timeline
      </h2>

      <div className="space-y-3">
        {agents.map((agent) => (
          <div
            key={agent.key}
            className="flex items-center justify-between border rounded-xl p-3 dark:border-gray-700"
          >
            <span className="font-medium dark:text-white">
              {agent.name}
            </span>

            {activeAgents.includes(agent.key) ? (
              <span className="text-green-600 font-semibold">
                ✅ Executed
              </span>
            ) : (
              <span className="text-gray-400">
                ⏳ Skipped
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentExecution;