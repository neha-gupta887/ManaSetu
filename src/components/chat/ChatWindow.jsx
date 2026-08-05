import ChatMessage from "./ChatMessage";

function ChatWindow() {
  const messages = [
    {
      id: 1,
      sender: "ai",
      message:
        "Hello! I'm Mana AI. How are you feeling today?",
    },
    {
      id: 2,
      sender: "user",
      message:
        "I'm feeling a little stressed because of my assignments.",
    },
    {
      id: 3,
      sender: "ai",
      message:
        "I understand. Let's take things one step at a time. Would you like a short breathing exercise or help planning your work?",
    },
  ];

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

      <div className="mt-6 flex-1 space-y-5 overflow-y-auto">

        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

      </div>

    </div>
  );
}

export default ChatWindow;