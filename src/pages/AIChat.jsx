import { FaRobot } from "react-icons/fa";

function AIChat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">

      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">

        <div className="w-full rounded-3xl bg-white p-12 shadow-2xl dark:bg-gray-900">

          <div className="flex flex-col items-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">

              <FaRobot className="text-5xl text-emerald-600" />

            </div>

            <h1 className="mt-8 text-4xl font-bold text-gray-900 dark:text-white">
              Mana AI Assistant
            </h1>

            <p className="mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
              Welcome! I'm your AI wellness companion.
              Ask anything about stress, emotions,
              productivity, mindfulness, or self-care.
            </p>

            <button className="mt-10 rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700">
              Start Chatting
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIChat;