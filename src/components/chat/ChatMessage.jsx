import {
  FaRobot,
  FaUser,
  FaCopy,
} from "react-icons/fa";

function ChatMessage({
  message,
  sender,
  time,
}) {
  const isUser = sender === "user";

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
      {/* AI Avatar */}

      {!isUser && (
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
          <FaRobot />
        </div>
      )}

      {/* Message Bubble */}

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
          className={`absolute right-3 top-3 rounded-full p-1 opacity-0 transition-all duration-300 group-hover:opacity-100 ${
            isUser
              ? "hover:bg-emerald-500"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          title="Copy message"
        >
          <FaCopy
            className={`text-sm ${
              isUser
                ? "text-white"
                : "text-gray-500 dark:text-gray-300"
            }`}
          />
        </button>

        {/* Message */}

        <p className="break-words pr-8 leading-7">
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
      </div>

      {/* User Avatar */}

      {isUser && (
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
          <FaUser />
        </div>
      )}
    </div>
  );
}

export default ChatMessage;