import { useState } from "react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      message: "Hello! I'm Mana AI. How are you feeling today?",
    },
  ]);

  const handleSend = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        message: text,
      },
    ]);
  };

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

      <ChatInput onSend={handleSend} />

    </div>
  );
}

export default ChatWindow;