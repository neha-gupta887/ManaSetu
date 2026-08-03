import { saveWellnessRecord } from "../services/memoryService";
import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

import { generateWellnessPlan } from "../agents/orchestrator/wellnessOrchestrator";
import AgentExecution from "../components/AgentExecution";
import { useAgent } from "../context/AgentContext";

function AICompanion() {
  // Chat Messages
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Hello! I'm Mana AI, your Agentic Wellness Companion. Tell me how you're feeling today.",
    },
  ]);

  // Input
  const [input, setInput] = useState("");

  // Loading
  const [loading, setLoading] = useState(false);

  // Active AI Agents
  const [activeAgents, setActiveAgents] = useState([]);

  // Latest AI Analysis
  const [latestResult, setLatestResult] = useState(null);

  // Global Context
  const { setAgentResult } = useAgent();

  // ===========================
  // Handle Send
  // ===========================

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    // Add user message
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
      // Run AI Workflow
      const result = await generateWellnessPlan({
        mood: userMessage,
        stress: "Unknown",
        sleep: "Unknown",
        journal: "",
        exam: "",
      });

      // Update active agents
      setActiveAgents(result.selectedAgents || []);

      // Save globally
      setAgentResult(result);

      // Save latest analysis
      setLatestResult(result);
      saveWellnessRecord(result);
      // Build AI Report
      let aiReply = "🩺 ManaSetu AI Wellness Report\n";
      aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            // ===========================
      // 🧠 Mood Analysis
      // ===========================

      if (result.mood) {
        aiReply += "🧠 MOOD ANALYSIS\n\n";

        aiReply += `😊 Emotion: ${
          result.mood.emotion || "Unknown"
        }\n`;

        aiReply += `📊 Stress Level: ${
          result.mood.stressLevel || "Unknown"
        }\n`;

        aiReply += `⚠ Burnout Risk: ${
          result.mood.burnoutRisk || "Unknown"
        }\n\n`;

        aiReply += `📝 Summary:\n${
          result.mood.summary || "No summary available."
        }\n\n`;

        aiReply += `💡 Recommendation:\n${
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

        aiReply += `📝 Summary:\n${
          result.sleep.summary || "No sleep issues detected."
        }\n\n`;

        aiReply += `💡 Recommendation:\n${
          result.sleep.recommendation ||
          "Aim for 7-8 hours of quality sleep."
        }\n\n`;

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 📚 Study Analysis
      // ===========================

      if (result.study) {
        aiReply += "📚 STUDY ANALYSIS\n\n";

        aiReply += `📝 Summary:\n${
          result.study.summary || "Study analysis unavailable."
        }\n\n`;

        aiReply += `💡 Recommendation:\n${
          result.study.recommendation ||
          "Stay focused and follow your study schedule."
        }\n\n`;

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      // ===========================
      // 🚨 Crisis Analysis
      // ===========================

      if (result.crisis) {
        aiReply += "🚨 CRISIS ANALYSIS\n\n";

        aiReply += `⚠ Risk Level: ${
          result.crisis.risk || "Low"
        }\n\n`;

        aiReply += `📝 Summary:\n${
          result.crisis.summary || "No immediate concerns detected."
        }\n\n`;

        aiReply += `💡 Recommendation:\n${
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

        aiReply += `💚 Wellness Score: ${
          result.decision.wellnessScore || 80
        }/100\n`;

        aiReply += `🔥 Priority: ${
          result.decision.priority || "Medium"
        }\n\n`;

        if (
          result.decision.tasks &&
          result.decision.tasks.length > 0
        ) {
          aiReply += "📋 Today's Tasks:\n\n";

          result.decision.tasks.forEach((task) => {
            aiReply += `✔ ${task}\n`;
          });

          aiReply += "\n";
        }

        aiReply += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
      }

      aiReply += "🌿 Thank you for using ManaSetu.\n";
      aiReply +=
        "Remember: Small positive habits every day create better mental wellbeing. 💚";

      // Add AI response to chat
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
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">

        {/* ===========================
             Header
        ============================ */}

        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6">
          <div className="flex items-center gap-4">

            <div className="bg-white/20 rounded-2xl p-3">
              <FaRobot size={32} />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Mana AI
              </h1>

              <p className="text-green-100">
                Your Agentic Wellness Companion
              </p>
            </div>

          </div>
        </div>

        {/* ===========================
             Active Agents
        ============================ */}

        <div className="border-b border-gray-200 dark:border-gray-700 p-6">

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
             Agent Execution
        ============================ */}

        <div className="border-b border-gray-200 dark:border-gray-700 p-6">
          <AgentExecution activeAgents={activeAgents} />
        </div>

        {/* ===========================
             Chat Area
        ============================ */}

        <div className="h-[420px] overflow-y-auto p-6 space-y-5">

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
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-yellow-100 text-yellow-900 rounded-xl px-5 py-3 shadow animate-pulse">
                🤖 Mana AI is analyzing your wellness...
              </div>
            </div>
          )}

        </div>

        {/* ===========================
             AI Wellness Dashboard
        ============================ */}

        {latestResult && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-2xl font-bold mb-6 dark:text-white">
              🩺 AI Wellness Dashboard
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
                            {/* Mood Card */}
              {latestResult.mood && (
                <div className="bg-green-50 dark:bg-green-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-green-700 dark:text-green-200 mb-4">
                    🧠 Mood Analysis
                  </h3>

                  <p className="mb-2">
                    <strong>Emotion:</strong>{" "}
                    {latestResult.mood.emotion || "Unknown"}
                  </p>

                  <p className="mb-2">
                    <strong>Stress:</strong>{" "}
                    {latestResult.mood.stressLevel || "Unknown"}
                  </p>

                  <p className="mb-2">
                    <strong>Burnout:</strong>{" "}
                    {latestResult.mood.burnoutRisk || "Unknown"}
                  </p>

                  <p className="mt-4">
                    {latestResult.mood.summary}
                  </p>

                </div>
              )}

              {/* Sleep Card */}
              {latestResult.sleep && (
                <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-200 mb-4">
                    😴 Sleep Analysis
                  </h3>

                  <p className="mb-3">
                    {latestResult.sleep.summary}
                  </p>

                  <p className="text-sm">
                    <strong>Recommendation:</strong>
                  </p>

                  <p>
                    {latestResult.sleep.recommendation}
                  </p>

                </div>
              )}

              {/* Study Card */}
              {latestResult.study && (
                <div className="bg-purple-50 dark:bg-purple-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-200 mb-4">
                    📚 Study Analysis
                  </h3>

                  <p className="mb-3">
                    {latestResult.study.summary}
                  </p>

                  <p className="text-sm">
                    <strong>Recommendation:</strong>
                  </p>

                  <p>
                    {latestResult.study.recommendation}
                  </p>

                </div>
              )}

              {/* Crisis Card */}
              {latestResult.crisis && (
                <div className="bg-red-50 dark:bg-red-900 rounded-2xl p-5 shadow">

                  <h3 className="text-xl font-bold text-red-700 dark:text-red-200 mb-4">
                    🚨 Crisis Analysis
                  </h3>

                  <p className="mb-2">
                    <strong>Risk:</strong>{" "}
                    {latestResult.crisis.risk || "Low"}
                  </p>

                  <p className="mb-3">
                    {latestResult.crisis.summary}
                  </p>

                  <p className="text-sm">
                    <strong>Recommendation:</strong>
                  </p>

                  <p>
                    {latestResult.crisis.recommendation}
                  </p>

                </div>
              )}

              {/* Decision Card */}
              {latestResult.decision && (
                <div className="md:col-span-2 bg-emerald-50 dark:bg-emerald-900 rounded-2xl p-6 shadow">

                  <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-200 mb-4">
                    🎯 Today's Wellness Plan
                  </h3>

                  <p className="mb-2">
                    <strong>Wellness Score:</strong>{" "}
                    {latestResult.decision.wellnessScore}/100
                  </p>

                  <p className="mb-5">
                    <strong>Priority:</strong>{" "}
                    {latestResult.decision.priority}
                  </p>

                  {latestResult.decision.tasks?.length > 0 && (
                    <div>

                      <h4 className="font-semibold mb-3">
                        📋 Recommended Tasks
                      </h4>

                      <ul className="list-disc ml-6 space-y-2">
                        {latestResult.decision.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>

                    </div>
                  )}

                </div>
              )}

            </div>

          </div>
        )}

        {/* Input Area */}

        <div className="border-t border-gray-200 dark:border-gray-700 p-5 flex gap-3">

          <input
            type="text"
            placeholder="Tell Mana AI how you're feeling..."
            value={input}
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
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 rounded-xl flex items-center justify-center transition"
          >
            {loading ? "Analyzing..." : <FaPaperPlane />}
          </button>

        </div>

      </div>
    </div>
  );
}

export default AICompanion;
