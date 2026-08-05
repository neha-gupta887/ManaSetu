import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="mt-6 flex gap-3 border-t border-gray-200 pt-5 dark:border-gray-700">

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 rounded-2xl border border-gray-300 px-5 py-3 outline-none focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={handleSend}
        className="rounded-2xl bg-emerald-600 px-6 text-white transition hover:bg-emerald-700"
      >
        <FaPaperPlane />
      </button>

    </div>
  );
}

export default ChatInput;