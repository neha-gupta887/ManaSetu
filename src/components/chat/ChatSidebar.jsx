function ChatSidebar() {
  const chats = [
    "Today's Wellness",
    "Stress Management",
    "Sleep Improvement",
    "Daily Motivation",
    "Meditation Tips",
  ];

  return (
    <div className="h-full rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        💬 Conversations
      </h2>

      <div className="mt-6 space-y-3">

        {chats.map((chat) => (
          <button
            key={chat}
            className="w-full rounded-xl border border-gray-200 p-4 text-left transition hover:bg-emerald-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {chat}
          </button>
        ))}

      </div>

    </div>
  );
}

export default ChatSidebar;