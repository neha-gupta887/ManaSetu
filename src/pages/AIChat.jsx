import ChatSidebar from "../components/chat/ChatSidebar";
import ChatWindow from "../components/chat/ChatWindow";

function AIChat() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-4">

        <div className="lg:col-span-1">
          <ChatSidebar />
        </div>

        <div className="lg:col-span-3 h-[85vh]">
          <ChatWindow />
        </div>

      </div>

    </div>
  );
}

export default AIChat;