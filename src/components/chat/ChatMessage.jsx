import { useState } from "react";
import {
  FaRobot,
  FaUser,
  FaCopy,
  FaThumbsUp,
  FaHeart,
  FaSmile,
} from "react-icons/fa";

function ChatMessage({
  message,
  sender,
  time,
}) {
  const isUser = sender === "user";

  const [reaction, setReaction] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      alert("Message copied!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
          <FaRobot />
        </div>
      )}

      <div
        className={`group relative max-w-[75%] rounded-3xl px-5 py-4 shadow-md transition-all duration-300 hover:shadow-lg ${
          isUser
            ? "bg-emerald-600 text-white"
            : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
        }`}
      >
        {/* Copy Button */}

        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          title="Copy message"
        >
          <FaCopy className="text-sm" />
        </button>

        {/* Message */}

        <p className="break-words pr-6 leading-7">
          {message}
        </p>

        {/* Timestamp */}

        <div
          className={`mt-2 text-xs ${
            isUser
              ? "text-right text-emerald-100"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {time}
        </div>

        {/* Reactions */}

        <div className="mt-3 flex items-center gap-2">

          <button
            onClick={() => setReaction("👍")}
            className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Like"
          >
            <FaThumbsUp />
          </button>

          <button
            onClick={() => setReaction("❤️")}
            className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Love"
          >
            <FaHeart />
          </button>

          <button
            onClick={() => setReaction("😊")}
            className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Smile"
          >
            <FaSmile />
          </button>

          {reaction && (
            <span className="ml-2 text-xl">
              {reaction}
            </span>
          )}

        </div>
      </div>

      {isUser && (
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
          <FaUser />
        </div>
      )}
    </div>
  );
}

export default ChatMessage;