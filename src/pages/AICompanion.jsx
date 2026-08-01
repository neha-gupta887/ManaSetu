import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { generateWellnessPlan } from "../orchestrator/wellnessOrchestrator";

function AICompanion() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 I'm Mana AI, your Agentic Wellness Companion. How are you feeling today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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

      const aiReply = `
🧠 Mood Analysis
${result.mood}

😴 Sleep Analysis
${result.sleep}

📚 Study Plan
${result.study}
`;

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
          text: "Sorry, I couldn't generate a wellness plan.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex justify-center p-8">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg flex flex-col">

        {/* Header */}
        <div className="bg-green-600 dark:bg-emerald-700 text-white p-6 rounded-t-3xl flex items-center gap-3">
          <FaRobot size={28} />

          <div>
            <h1 className="text-2xl font-bold">
              Mana AI
            </h1>

            <p className="text-green-100">
              Agentic AI Wellness Companion
            </p>
          </div>
        </div>

        {/* AI Agent Status */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold mb-3 text-gray-800 dark:text-white">
            🤖 Active AI Agents
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            <div className="bg-green-100 text-green-700 rounded-xl p-3 text-center font-medium">
              🧠 Mood Agent
            </div>

            <div className="bg-blue-100 text-blue-700 rounded-xl p-3 text-center font-medium">
              😴 Sleep Agent
            </div>

            <div className="bg-purple-100 text-purple-700 rounded-xl p-3 text-center font-medium">
              📚 Study Agent
            </div>

            <div className="bg-red-100 text-red-700 rounded-xl p-3 text-center font-medium">
              🚨 Crisis Agent
            </div>

          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto h-[500px]">

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
                className={`max-w-[80%] whitespace-pre-wrap px-5 py-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-5 py-3 rounded-2xl">
                🤖 AI Agents are analyzing your wellness...
              </div>
            </div>
          )}

        </div>

        {/* Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-5 flex gap-3">

          <input
            type="text"
            placeholder="Describe how you're feeling..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                handleSend();
              }
            }}
            className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 rounded-xl flex items-center gap-2 transition"
          >
            <FaPaperPlane />

            {loading ? "Analyzing..." : "Send"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default AICompanion;