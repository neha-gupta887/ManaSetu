function ChatMessage({
  message,
  sender,
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-3xl px-5 py-4 shadow-md ${
          isUser
            ? "bg-emerald-600 text-white"
            : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
        }`}
      >
        <p className="leading-7">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;