import { Link } from "react-router-dom";
import { FaRobot, FaArrowRight } from "react-icons/fa";

function AIQuickChat() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">

            <FaRobot className="text-3xl" />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              Mana AI Assistant
            </h2>

            <p className="mt-1 text-indigo-100">
              Always ready to support you
            </p>

          </div>

        </div>

        <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold">
          Online
        </span>

      </div>

      <p className="mt-8 leading-7 text-indigo-100">
        Ask questions, get personalized wellness recommendations,
        practice mindfulness, or chat with your AI companion anytime.
      </p>

      <div className="mt-8">

        <Link
          to="/chat"
          className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:scale-105"
        >
          Start Conversation

          <FaArrowRight />

        </Link>

      </div>

    </div>
  );
}

export default AIQuickChat;