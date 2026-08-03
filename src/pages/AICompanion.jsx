import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

import { generateWellnessPlan } from "../agents/orchestrator/wellnessOrchestrator";
import AgentExecution from "../components/AgentExecution";
import { useAgent } from "../context/AgentContext";
import { saveWellnessRecord } from "../services/memoryService";

function AICompanion() {
  // ===========================
  // States
  // ===========================

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm Mana AI, your Agentic Wellness Companion. Tell me how you're feeling today.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [activeAgents, setActiveAgents] = useState([]);

  const [latestResult, setLatestResult] = useState(null);

  const { setAgentResult } = useAgent();

  // ===========================
  // Send Message
  // ===========================

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");

    setLoading(true);

    try {
      const result = await generateWellnessPlan({
        mood: userMessage,
        stress: "Unknown",
        sleep: "Unknown",
        journal: "",
        exam: "",
      });

      // Active Agents
      setActiveAgents(result.selectedAgents || []);

      // Global Context
      setAgentResult(result);

      // Dashboard Data
      setLatestResult(result);

      // Save to Memory
      saveWellnessRecord(result);

      // ===========================
      // Build AI Report
      // ===========================

      let aiReply = "🩺 ManaSetu AI Wellness Report\n";
      aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            // ===========================
      // 🧠 Mood Analysis
      // ===========================

      if (result.mood) {
        aiReply += "🧠 MOOD ANALYSIS\n\n";

        aiReply += `😊 Emotion: ${result.mood.emotion || "Unknown"}\n`;
        aiReply += `📊 Stress Level: ${result.mood.stressLevel || "Unknown"}\n`;
        aiReply += `⚠ Burnout Risk: ${result.mood.burnoutRisk || "Unknown"}\n\n`;

        aiReply += `📝 Summary\n`;
        aiReply += `${result.mood.summary || "No summary available."}\n\n`;

        aiReply += `💡 Recommendation\n`;
        aiReply += `${
          result.mood.recommendation ||
          "Take care of yourself and maintain healthy habits."
        }\n\n`;

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 😴 Sleep Analysis
      // ===========================

      if (result.sleep) {
        aiReply += "😴 SLEEP ANALYSIS\n\n";

        aiReply += `📝 Summary\n`;
        aiReply += `${
          result.sleep.summary || "No sleep issues detected."
        }\n\n`;

        aiReply += `💡 Recommendation\n`;
        aiReply += `${
          result.sleep.recommendation ||
          "Aim for at least 7-8 hours of quality sleep."
        }\n\n`;

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 📚 Study Analysis
      // ===========================

      if (result.study) {
        aiReply += "📚 STUDY ANALYSIS\n\n";

        aiReply += `📝 Summary\n`;
        aiReply += `${
          result.study.summary || "Study analysis unavailable."
        }\n\n`;

        aiReply += `💡 Recommendation\n`;
        aiReply += `${
          result.study.recommendation ||
          "Continue following a focused study routine."
        }\n\n`;

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 🚨 Crisis Analysis
      // ===========================

      if (result.crisis) {
        aiReply += "🚨 CRISIS ANALYSIS\n\n";

        aiReply += `⚠ Risk Level: ${result.crisis.risk || "Low"}\n\n`;

        aiReply += `📝 Summary\n`;
        aiReply += `${
          result.crisis.summary ||
          "No immediate concerns detected."
        }\n\n`;

        aiReply += `💡 Recommendation\n`;
        aiReply += `${
          result.crisis.recommendation ||
          "Continue monitoring your wellbeing."
        }\n\n`;

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 🎯 Decision Agent
      // ===========================

      if (result.decision) {
        aiReply += "🎯 TODAY'S WELLNESS PLAN\n\n";

        aiReply += `💚 Wellness Score: ${result.decision.wellnessScore}/100\n`;
        aiReply += `🔥 Priority: ${result.decision.priority}\n\n`;

        if (result.decision.tasks?.length > 0) {
          aiReply += "📋 Recommended Tasks\n\n";

          result.decision.tasks.forEach((task) => {
            aiReply += `✔ ${task}\n`;
          });

          aiReply += "\n";
        }

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 🔥 Burnout Prediction
      // ===========================

      if (result.burnout) {
        aiReply += "🔥 BURNOUT PREDICTION\n\n";

        aiReply += `Risk: ${result.burnout.risk}\n`;
        aiReply += `Score: ${result.burnout.score}%\n\n`;

        if (result.burnout.reasons?.length > 0) {
          aiReply += "Reasons:\n";

          result.burnout.reasons.forEach((reason) => {
            aiReply += `• ${reason}\n`;
          });

          aiReply += "\n";
        }

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 🚑 Emergency Support
      // ===========================

      if (result.support?.show) {
        aiReply += `${result.support.title}\n\n`;
        aiReply += `${result.support.message}\n\n`;

        result.support.actions.forEach((action) => {
          aiReply += `• ${action}\n`;
        });

        aiReply += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 🤖 Explainable AI
      // ===========================

      if (result.explanation) {
        aiReply += "🤖 AI EXPLANATION\n\n";

        aiReply += `Confidence: ${result.explanation.confidence}%\n\n`;

        result.explanation.reasons.forEach((reason) => {
          aiReply += `• ${reason}\n`;
        });

        aiReply += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      aiReply += "🌿 Thank you for using ManaSetu.\n";
      aiReply +=
        "Remember: Small positive habits every day create better mental wellbeing. 💚";

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply,
        },
      ]);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Sorry, I couldn't generate your wellness report. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };
    return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex justify-center p-8">

      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">

        {/* ===========================
            Header
        ============================ */}

        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 flex items-center gap-4">

          <FaRobot size={34} />

          <div>

            <h1 className="text-3xl font-bold">
              Mana AI
            </h1>

            <p className="text-green-100">
              Your Agentic AI Wellness Companion
            </p>

          </div>

        </div>

        {/* ===========================
            Active AI Agents
        ============================ */}

        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6">

          <h2 className="text-xl font-bold mb-5 dark:text-white">
            🤖 Active AI Agents
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div
              className={`rounded-xl p-4 text-center font-semibold transition ${
                activeAgents.includes("mood")
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
            >
              🧠 Mood Agent
            </div>

            <div
              className={`rounded-xl p-4 text-center font-semibold transition ${
                activeAgents.includes("sleep")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
            >
              😴 Sleep Agent
            </div>

            <div
              className={`rounded-xl p-4 text-center font-semibold transition ${
                activeAgents.includes("study")
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
            >
              📚 Study Agent
            </div>

            <div
              className={`rounded-xl p-4 text-center font-semibold transition ${
                activeAgents.includes("crisis")
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
            >
              🚨 Crisis Agent
            </div>

          </div>

        </div>

        {/* ===========================
            Agent Execution Timeline
        ============================ */}

        <div className="p-6">

          <AgentExecution activeAgents={activeAgents} />

        </div>

        {/* ===========================
            Chat Section
        ============================ */}

        <div className="px-6 pb-6 h-[450px] overflow-y-auto space-y-5">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-5 py-4 shadow ${
                  msg.sender === "user"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
              >

                {msg.text}

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex justify-start">

              <div className="bg-yellow-100 text-yellow-900 px-5 py-3 rounded-xl shadow">

                🤖 Mana AI is collaborating with multiple agents...

              </div>

            </div>

          )}

        </div>

        {/* ===========================
            AI Wellness Dashboard
        ============================ */}

        {latestResult && (

          <div className="border-t border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              🩺 AI Wellness Dashboard
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                          {/* ===========================
                  🧠 Mood Analysis
              ============================ */}

              {latestResult.mood && (
                <div className="bg-green-50 dark:bg-green-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-green-700 dark:text-green-200 mb-4">
                    🧠 Mood Analysis
                  </h3>

                  <p>
                    <strong>Emotion:</strong>{" "}
                    {latestResult.mood.emotion}
                  </p>

                  <p>
                    <strong>Stress:</strong>{" "}
                    {latestResult.mood.stressLevel}
                  </p>

                  <p>
                    <strong>Burnout:</strong>{" "}
                    {latestResult.mood.burnoutRisk}
                  </p>

                  <p className="mt-4">
                    {latestResult.mood.summary}
                  </p>

                </div>
              )}

              {/* ===========================
                  😴 Sleep Analysis
              ============================ */}

              {latestResult.sleep && (
                <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-200 mb-4">
                    😴 Sleep Analysis
                  </h3>

                  <p>
                    {latestResult.sleep.summary}
                  </p>

                  <div className="mt-4">

                    <strong>Recommendation</strong>

                    <p className="mt-2">
                      {latestResult.sleep.recommendation}
                    </p>

                  </div>

                </div>
              )}

              {/* ===========================
                  📚 Study Analysis
              ============================ */}

              {latestResult.study && (
                <div className="bg-purple-50 dark:bg-purple-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-200 mb-4">
                    📚 Study Analysis
                  </h3>

                  <p>
                    {latestResult.study.summary}
                  </p>

                  <div className="mt-4">

                    <strong>Recommendation</strong>

                    <p className="mt-2">
                      {latestResult.study.recommendation}
                    </p>

                  </div>

                </div>
              )}

              {/* ===========================
                  🚨 Crisis Analysis
              ============================ */}

              {latestResult.crisis && (
                <div className="bg-red-50 dark:bg-red-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-red-700 dark:text-red-200 mb-4">
                    🚨 Crisis Analysis
                  </h3>

                  <p>
                    <strong>Risk:</strong>{" "}
                    {latestResult.crisis.risk}
                  </p>

                  <p className="mt-3">
                    {latestResult.crisis.summary}
                  </p>

                  <div className="mt-4">

                    <strong>Recommendation</strong>

                    <p className="mt-2">
                      {latestResult.crisis.recommendation}
                    </p>

                  </div>

                </div>
              )}

              {/* ===========================
                  🔥 Burnout Prediction
              ============================ */}

              {latestResult.burnout && (
                <div className="bg-orange-50 dark:bg-orange-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-orange-700 dark:text-orange-200 mb-4">
                    🔥 Burnout Prediction
                  </h3>

                  <p>
                    <strong>Risk:</strong>{" "}
                    {latestResult.burnout.risk}
                  </p>

                  <p>
                    <strong>Score:</strong>{" "}
                    {latestResult.burnout.score}%
                  </p>

                  <div className="mt-4">

                    <strong>Reasons</strong>

                    <ul className="list-disc ml-6 mt-2">

                      {latestResult.burnout.reasons?.map(
                        (reason, index) => (
                          <li key={index}>
                            {reason}
                          </li>
                        )
                      )}

                    </ul>

                  </div>

                </div>
              )}

              {/* ===========================
                  🚑 Emergency Support
              ============================ */}

              {latestResult.support?.show && (
                <div className="bg-red-100 dark:bg-red-950 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-4">
                    {latestResult.support.title}
                  </h3>

                  <p>
                    {latestResult.support.message}
                  </p>

                  <ul className="list-disc ml-6 mt-4">

                    {latestResult.support.actions?.map(
                      (action, index) => (
                        <li key={index}>
                          {action}
                        </li>
                      )
                    )}

                  </ul>

                </div>
              )}

              {/* ===========================
                  🎯 Decision Agent
              ============================ */}

              {latestResult.decision && (
                <div className="md:col-span-2 bg-emerald-50 dark:bg-emerald-900 rounded-2xl p-6 shadow">

                  <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-200 mb-4">
                    🎯 Today's Wellness Plan
                  </h3>

                  <p>
                    <strong>Wellness Score:</strong>{" "}
                    {latestResult.decision.wellnessScore}/100
                  </p>

                  <p className="mt-2">
                    <strong>Priority:</strong>{" "}
                    {latestResult.decision.priority}
                  </p>

                  {latestResult.decision.tasks?.length > 0 && (

                    <div className="mt-5">

                      <strong>Recommended Tasks</strong>

                      <ul className="list-disc ml-6 mt-2">

                        {latestResult.decision.tasks.map(
                          (task, index) => (
                            <li key={index}>
                              {task}
                            </li>
                          )
                        )}

                      </ul>

                    </div>

                  )}

                </div>
              )}

              {/* ===========================
                  🤖 AI Explanation
              ============================ */}

              {latestResult.explanation && (
                <div className="md:col-span-2 bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow">

                  <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    🤖 Why did Mana AI reach this conclusion?
                  </h3>

                  <p className="mb-4 dark:text-gray-300">
                    <strong>Confidence:</strong>{" "}
                    {latestResult.explanation.confidence}%
                  </p>

                  <ul className="list-disc ml-6 space-y-2 dark:text-gray-300">

                    {latestResult.explanation.reasons.map(
                      (reason, index) => (
                        <li key={index}>
                          {reason}
                        </li>
                      )
                    )}

                  </ul>

                </div>
              )}
                          </div>

          </div>

        )}

        {/* ===========================
            Input Area
        ============================ */}

        <div className="border-t border-gray-200 dark:border-gray-700 p-5 flex gap-3">

          <input
            type="text"
            value={input}
            placeholder="Tell Mana AI how you're feeling..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                handleSend();
              }
            }}
            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 rounded-xl flex items-center justify-center transition-all duration-300"
          >
            {loading ? (
              "Analyzing..."
            ) : (
              <FaPaperPlane size={18} />
            )}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AICompanion;