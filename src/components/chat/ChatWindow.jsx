import { useState } from "react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      message: "Hello! 👋 I'm Mana AI. How are you feeling today?",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const aiReplies = [
    "I understand how you're feeling. 💚",
    "That's completely normal. Let's work through it together.",
    "Take a deep breath. You're doing great. 🌿",
    "Would you like a quick mindfulness exercise?",
    "Remember to stay hydrated and take short breaks. 💧",
    "I'm here to support you anytime. 🤖",
  ];

  const handleSend = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      message: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const randomReply =
        aiReplies[Math.floor(Math.random() * aiReplies.length)];

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          message: randomReply,
        },
      ]);

      setIsTyping(false);
    }, 2000);
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

        {isTyping && (
          <div className="flex justify-start">

            <div className="rounded-3xl bg-gray-200 px-5 py-3 text-gray-700 dark:bg-gray-800 dark:text-gray-300 animate-pulse">

              🤖 Mana AI is typing...

            </div>

          </div>
        )}

      </div>

      <ChatInput onSend={handleSend} />

    </div>
  );
}

export default ChatWindow;