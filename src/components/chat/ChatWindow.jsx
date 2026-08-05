function ChatWindow() {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <div className="border-b border-gray-200 pb-5 dark:border-gray-700">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🤖 Mana AI
        </h2>

        <p className="text-sm text-emerald-600">
          Online
        </p>

      </div>

      <div className="flex flex-1 items-center justify-center">

        <div className="text-center">

          <div className="text-6xl">
            🤖
          </div>

          <h3 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Start your conversation
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Your AI wellness companion is ready to help.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ChatWindow;