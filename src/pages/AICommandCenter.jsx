import { useAgent } from "../context/AgentContext";

function AICommandCenter() {
  const { agentResult } = useAgent();

  const activeAgents = agentResult?.selectedAgents || [];

  // ===============================
  // Agent Status
  // ===============================
  const getStatus = (agent) => {
    if (activeAgents.includes(agent)) {
      return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
          ✅ Executed
        </span>
      );
    }

    if (agent === "crisis") {
      return (
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          🛡️ Safe
        </span>
      );
    }

    return (
      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
        ⏳ Skipped
      </span>
    );
  };

  // ===============================
  // Wellness Score
  // ===============================
  const wellnessScore =
    agentResult?.decision?.wellnessScore ??
    agentResult?.wellnessScore ??
    null;

  // ===============================
  // Recommendation
  // ===============================
  const recommendation =
    agentResult?.mood?.recommendation ||
    agentResult?.study?.recommendation ||
    agentResult?.sleep?.recommendation ||
    agentResult?.decision?.recommendation ||
    "Talk to Mana AI to receive a personalized wellness recommendation.";

  // ===============================
  // Agent Information
  // ===============================
  const agents = [
    {
      key: "mood",
      icon: "🧠",
      title: "Mood Agent",
      description: "Analyzes emotional wellbeing and stress.",
    },
    {
      key: "sleep",
      icon: "😴",
      title: "Sleep Agent",
      description: "Analyzes sleep patterns and recovery.",
    },
    {
      key: "study",
      icon: "📚",
      title: "Study Agent",
      description: "Analyzes study pressure and focus.",
    },
    {
      key: "crisis",
      icon: "🚨",
      title: "Crisis Agent",
      description: "Checks for immediate safety concerns.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4 transition-colors duration-300 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl">

        {/* =====================================
            HEADER
        ====================================== */}
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-7 text-white shadow-2xl sm:p-10">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-300" />
              Mana AI Intelligence System
            </div>

            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              🤖 AI Command Center
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-emerald-100 sm:text-lg">
              Monitor how ManaSetu's AI agents analyze your wellbeing and
              generate personalized wellness insights.
            </p>

          </div>
        </div>

        {/* =====================================
            NO ANALYSIS STATE
        ====================================== */}
        {!agentResult && (
          <div className="mb-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-6 shadow-lg dark:border-yellow-900/50 dark:bg-yellow-950/30">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-2xl dark:bg-yellow-900/50">
                ⏳
              </div>

              <div>
                <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-200">
                  No AI Analysis Available Yet
                </h3>

                <p className="mt-1 text-sm leading-6 text-yellow-800 dark:text-yellow-300">
                  Open the AI Companion, chat with Mana AI, and return here
                  to see your live wellness analysis.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* =====================================
            TOP STAT CARDS
        ====================================== */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Active Agents */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Active Agents
                </p>

                <h2 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white">
                  {activeAgents.length}
                  <span className="text-xl text-gray-400">
                    /4
                  </span>
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl dark:bg-emerald-900/40">
                🧠
              </div>

            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              AI agents currently participating in your analysis.
            </p>

          </div>

          {/* Wellness Score */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 p-6 text-white shadow-xl">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-green-100">
                  Wellness Score
                </p>

                <h2 className="mt-2 text-5xl font-extrabold">
                  {wellnessScore !== null
                    ? wellnessScore
                    : "--"}
                </h2>
              </div>

              <div className="text-5xl">
                💚
              </div>

            </div>

            <p className="relative mt-4 text-sm text-green-100">
              {wellnessScore !== null
                ? "AI-generated wellness assessment"
                : "Complete an AI analysis to calculate your score."}
            </p>

          </div>

          {/* AI Status */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Mana AI
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white">
                  {agentResult ? "Analyzing" : "Ready"}
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl dark:bg-purple-900/40">
                🤖
              </div>

            </div>

            <div className="mt-5 flex items-center gap-2">

              <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                System Online
              </span>

            </div>

          </div>

        </div>

        {/* =====================================
            MAIN GRID
        ====================================== */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* =====================================
              ACTIVE AI AGENTS
          ====================================== */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:p-8">

            <div className="mb-6">

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                🧠 AI Agent Network
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Each agent focuses on a different aspect of your wellbeing.
              </p>

            </div>

            <div className="space-y-4">

              {agents.map((agent) => {

                const isActive = activeAgents.includes(agent.key);

                return (
                  <div
                    key={agent.key}
                    className={`rounded-2xl border p-4 transition ${
                      isActive
                        ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20"
                        : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm dark:bg-gray-800">
                        {agent.icon}
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center justify-between gap-2">

                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {agent.title}
                          </h3>

                          {getStatus(agent.key)}

                        </div>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {agent.description}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          {/* =====================================
              AI RECOMMENDATION
          ====================================== */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-2xl shadow-lg">
                ✨
              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  AI Recommendation
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Personalized guidance from Mana AI.
                </p>

              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 p-5 dark:from-emerald-900/20 dark:to-green-900/20">

              <p className="whitespace-pre-wrap text-base leading-7 text-gray-700 dark:text-gray-300">
                {recommendation}
              </p>

            </div>

            {!agentResult && (
              <div className="mt-5 rounded-2xl border border-dashed border-gray-300 p-5 text-center dark:border-gray-600">

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  💬 Start a conversation with Mana AI to receive a
                  personalized recommendation.
                </p>

              </div>
            )}

          </div>

        </div>

        {/* =====================================
            DETAILED ANALYSIS
        ====================================== */}
        {agentResult && (
          <div className="mt-8">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                📊 Wellness Analysis
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Insights returned by the selected AI agents.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {/* Mood */}
              {agentResult.mood && (
                <AnalysisCard
                  icon="🧠"
                  title="Mood"
                  value={agentResult.mood.emotion || "Analyzed"}
                  description={
                    agentResult.mood.summary ||
                    agentResult.mood.recommendation ||
                    "Mood analysis completed."
                  }
                  className="from-emerald-50 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30"
                />
              )}

              {/* Sleep */}
              {agentResult.sleep && (
                <AnalysisCard
                  icon="😴"
                  title="Sleep"
                  value="Analyzed"
                  description={
                    agentResult.sleep.summary ||
                    agentResult.sleep.recommendation ||
                    "Sleep analysis completed."
                  }
                  className="from-blue-50 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30"
                />
              )}

              {/* Study */}
              {agentResult.study && (
                <AnalysisCard
                  icon="📚"
                  title="Study"
                  value="Analyzed"
                  description={
                    agentResult.study.summary ||
                    agentResult.study.recommendation ||
                    "Study analysis completed."
                  }
                  className="from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
                />
              )}

              {/* Crisis */}
              {agentResult.crisis && (
                <AnalysisCard
                  icon="🚨"
                  title="Safety"
                  value={agentResult.crisis.risk || "Safe"}
                  description={
                    agentResult.crisis.summary ||
                    agentResult.crisis.recommendation ||
                    "Safety analysis completed."
                  }
                  className="from-red-50 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30"
                />
              )}

            </div>

          </div>
        )}

        {/* =====================================
            WELLNESS PLAN
        ====================================== */}
        {agentResult?.decision && (
          <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white shadow-2xl sm:p-8">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

              <div>

                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                  🌿 Personalized Plan
                </span>

                <h2 className="mt-5 text-3xl font-extrabold">
                  Today's Wellness Plan
                </h2>

                <p className="mt-2 max-w-2xl text-emerald-100">
                  Mana AI has created a personalized set of actions based
                  on your current wellbeing analysis.
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">

                <p className="text-sm text-emerald-100">
                  Priority
                </p>

                <p className="mt-1 text-xl font-bold">
                  {agentResult.decision.priority || "Balanced"}
                </p>

              </div>

            </div>

            {agentResult.decision.tasks?.length > 0 && (
              <div className="mt-8 grid gap-3 md:grid-cols-2">

                {agentResult.decision.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-emerald-600">
                      {index + 1}
                    </span>

                    <span className="leading-6">
                      {task}
                    </span>

                  </div>
                ))}

              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

/* =====================================================
   ANALYSIS CARD
===================================================== */

function AnalysisCard({
  icon,
  title,
  value,
  description,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl bg-gradient-to-br p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >

      <div className="flex items-center justify-between">

        <div className="text-3xl">
          {icon}
        </div>

        <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-black/20 dark:text-gray-300">
          AI
        </span>

      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 font-semibold text-emerald-700 dark:text-emerald-300">
        {value}
      </p>

      <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  );
}

export default AICommandCenter;