import { FaRobot, FaUser } from "react-icons/fa";

function ChatMessage({
  message,
  sender,
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
          <FaRobot />
        </div>
      )}

      <div
        className={`max-w-[70%] rounded-3xl px-5 py-4 shadow-md transition-all duration-300 ${
          isUser
            ? "bg-emerald-600 text-white"
            : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
        }`}
      >
        <p className="leading-7">
          {message}
        </p>
      </div>

      {isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
          <FaUser />
        </div>
      )}
    </div>
  );
}

export default ChatMessage;