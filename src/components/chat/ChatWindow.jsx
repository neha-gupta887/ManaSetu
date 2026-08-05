import { useState, useRef, useEffect } from "react";

import SuggestedQuestions from "./SuggestedQuestions";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatWindow() {
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const defaultMessages = [
    {
      id: 1,
      sender: "ai",
      message: "Hello! 👋 I'm Mana AI. How are you feeling today?",
      time: getCurrentTime(),
    },
  ];

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("mana-chat");

    return savedMessages
      ? JSON.parse(savedMessages)
      : defaultMessages;
  });

  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef(null);

  const aiReplies = [
    "I understand how you're feeling. 💚",
    "That's completely normal. Let's work through it together.",
    "Take a deep breath. You're doing great. 🌿",
    "Would you like a quick mindfulness exercise?",
    "Remember to stay hydrated and take short breaks. 💧",
    "I'm here to support you anytime. 🤖",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    localStorage.setItem(
      "mana-chat",
      JSON.stringify(messages)
    );
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      message: text,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const randomReply =
        aiReplies[
          Math.floor(Math.random() * aiReplies.length)
        ];

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        message: randomReply,
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      setIsTyping(false);
    }, 2000);
  };

  const handleQuestionSelect = (question) => {
    handleSend(question);
  };

  const clearChat = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the chat?"
    );

    if (!confirmed) return;

    localStorage.removeItem("mana-chat");

    setMessages(defaultMessages);
  };

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      {/* Sticky Header */}

      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white pb-5 dark:border-gray-700 dark:bg-gray-900">

        <div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            🤖 Mana AI
          </h2>

          <div className="mt-2 flex items-center gap-2">

            <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-500"></span>

            <p className="text-sm font-medium text-emerald-600">
              Online
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            AI Wellness Assistant
          </div>

          <button
            onClick={clearChat}
            className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Clear Chat
          </button>

        </div>

      </div>

      {/* Suggested Questions */}

      <div className="mt-5">
        <SuggestedQuestions
          onSelectQuestion={handleQuestionSelect}
        />
      </div>

      {/* Messages */}

      <div className="mt-6 flex-1 space-y-5 overflow-y-auto pr-2">
                {/* Empty State */}

        {messages.length === 0 && (

          <div className="mt-24 text-center">

            <div className="text-6xl">
              🤖
            </div>

            <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
              Start chatting with Mana AI
            </h3>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Ask about stress, anxiety, sleep,
              productivity or mental wellness.
            </p>

          </div>

        )}

        {/* Messages */}

        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            sender={msg.sender}
            message={msg.message}
            time={msg.time}
          />
        ))}

        {/* AI Typing Indicator */}

        {isTyping && (
          <div className="flex justify-start">

            <div className="rounded-3xl bg-gray-200 px-5 py-4 shadow-md dark:bg-gray-800">

              <div className="flex items-center gap-2">

                <span>🤖</span>

                <div className="flex gap-1">

                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></span>

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                    style={{ animationDelay: "0.15s" }}
                  ></span>

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                    style={{ animationDelay: "0.3s" }}
                  ></span>

                </div>

              </div>

            </div>

          </div>
        )}

        <div ref={bottomRef} />

      </div>

      {/* Chat Input */}

      <ChatInput onSend={handleSend} />

    </div>
  );
}

export default ChatWindow;