import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function ChatSidebar() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      title: "Today's Wellness",
    },
    {
      id: 2,
      title: "Stress Management",
    },
    {
      id: 3,
      title: "Sleep Improvement",
    },
  ]);

  const addConversation = () => {
    setConversations((prev) => [
      {
        id: Date.now(),
        title: `New Chat ${prev.length + 1}`,
      },
      ...prev,
    ]);
  };

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <button
        onClick={addConversation}
        className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-white transition hover:bg-emerald-700"
      >
        <FaPlus />

        New Chat
      </button>

      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Conversations
      </h2>

      <div className="mt-5 flex-1 space-y-3 overflow-y-auto">

        {conversations.map((chat) => (

          <button
            key={chat.id}
            className="w-full rounded-xl border border-gray-200 p-4 text-left transition hover:bg-emerald-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {chat.title}
          </button>

        ))}

      </div>

    </div>
  );
}

export default ChatSidebar;