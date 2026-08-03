function AIWorkflow() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        🤖 ManaSetu Agent Workflow
      </h2>

      <div className="flex flex-col items-center gap-3 text-center">

        <div className="bg-blue-100 px-6 py-3 rounded-xl">
          👤 Student
        </div>

        ↓

        <div className="bg-purple-100 px-6 py-3 rounded-xl">
          🤖 AI Coordinator
        </div>

        ↓

        <div className="grid grid-cols-3 gap-4">

          <div className="bg-green-100 p-4 rounded-xl">
            🧠 Mood Agent
          </div>

          <div className="bg-yellow-100 p-4 rounded-xl">
            😴 Sleep Agent
          </div>

          <div className="bg-indigo-100 p-4 rounded-xl">
            📚 Study Agent
          </div>

        </div>

        ↓

        <div className="bg-red-100 px-6 py-3 rounded-xl">
          🚨 Crisis Agent
        </div>

        ↓

        <div className="bg-emerald-100 px-6 py-3 rounded-xl">
          💚 Wellness Score
        </div>

        ↓

        <div className="bg-cyan-100 px-6 py-3 rounded-xl">
          📋 Personalized Wellness Plan
        </div>

      </div>

    </div>
  );
}

export default AIWorkflow;