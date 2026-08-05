import { FaRobot, FaUser } from "react-icons/fa";

function ChatMessage({
  message,
  sender,
  time,
}) {
  const isUser = sender === "user";

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
        className={`max-w-[75%] rounded-3xl px-5 py-4 shadow-md transition-all duration-300 hover:shadow-lg ${
          isUser
            ? "bg-emerald-600 text-white"
            : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
        }`}
      >
        <p className="leading-7 break-words">
          {message}
        </p>

        <div
          className={`mt-2 text-xs ${
            isUser
              ? "text-emerald-100 text-right"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {time}
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