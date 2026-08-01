import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { generateWellnessPlan } from "../agents/orchestrator/wellnessOrchestrator";

function AICompanion() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 I'm Mana AI, your Agentic Wellness Companion. How are you feeling today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeAgents, setActiveAgents] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;

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

      // Update Active AI Agents
      setActiveAgents(result.selectedAgents || []);

      let aiReply = "✨ Personalized Wellness Report\n\n";

      if (result.mood) {
        aiReply += `🧠 Mood Agent\n${JSON.stringify(
          result.mood,
          null,
          2
        )}\n\n`;
      }

      if (result.sleep) {
        aiReply += `😴 Sleep Agent\n${JSON.stringify(
          result.sleep,
          null,
          2
        )}\n\n`;
      }

      if (result.study) {
        aiReply += `📚 Study Agent\n${JSON.stringify(
          result.study,
          null,
          2
        )}\n\n`;
      }

      if (result.crisis) {
        aiReply += `🚨 Crisis Agent\n${JSON.stringify(
          result.crisis,
          null,
          2
        )}\n\n`;
      }

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
          text: "❌ Sorry, I couldn't generate your wellness plan.",
        },
      ]);
    }

    setLoading(false);
  };
    return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex justify-center p-8">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 flex items-center gap-3">
          <FaRobot size={30} />

          <div>
            <h1 className="text-3xl font-bold">Mana AI</h1>
            <p className="text-green-100">
              Agentic AI Wellness Companion
            </p>
          </div>
        </div>

        {/* Active Agents */}
        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6">
          <h2 className="font-bold text-lg mb-4 dark:text-white">
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

        {/* Chat */}
        <div className="flex-1 p-6 overflow-y-auto h-[500px] space-y-5">

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
                🤖 AI Agents are collaborating...
              </div>
            </div>
          )}

        </div>

        {/* Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-5 flex gap-3">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                handleSend();
              }
            }}
            placeholder="Describe your thoughts..."
            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-xl transition"
          >
            {loading ? "Analyzing..." : <FaPaperPlane />}
          </button>

        </div>

      </div>
    </div>
  );
}

export default AICompanion;