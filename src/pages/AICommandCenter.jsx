function AICommandCenter() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          🤖 ManaSetu AI Command Center
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Active AI Agents
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>🧠 Mood Agent</span>
                <span className="text-green-600">✅ Completed</span>
              </div>

              <div className="flex justify-between">
                <span>😴 Sleep Agent</span>
                <span className="text-yellow-500">⏳ Waiting</span>
              </div>

              <div className="flex justify-between">
                <span>📚 Study Agent</span>
                <span className="text-green-600">✅ Completed</span>
              </div>

              <div className="flex justify-between">
                <span>🚨 Crisis Agent</span>
                <span className="text-green-600">✅ Safe</span>
              </div>

            </div>

          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-4 dark:text-white">
              AI Recommendation
            </h2>

            <p className="text-gray-700 dark:text-gray-300">
              Take a 10-minute walk, drink enough water, complete two
              focused Pomodoro sessions, and sleep before 11 PM for
              improved wellness.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AICommandCenter;