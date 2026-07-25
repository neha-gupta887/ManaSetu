import { useState } from "react";
import { getAIResponse } from "../services/geminiService";

function AITest() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const result = await getAIResponse(prompt);
      setResponse(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">

      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-colors duration-300">

        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          🧪 Gemini AI Test
        </h1>

        <textarea
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Gemini anything..."
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
        />

        <button
          onClick={handleAsk}
          disabled={loading}
          className="mt-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-xl transition duration-300"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {response && (
          <div className="mt-6 p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 transition-colors duration-300">

            <h2 className="font-bold mb-2 text-gray-900 dark:text-white">
              AI Response:
            </h2>

            <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
              {response}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default AITest;