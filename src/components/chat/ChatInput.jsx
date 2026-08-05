import { useState, useRef, useEffect } from "react";
import {
  FaPaperPlane,
  FaMicrophone,
} from "react-icons/fa";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");

    inputRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleVoiceInput = () => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert(
        "Speech Recognition is not supported in this browser."
      );
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    setIsListening(true);

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      setMessage(transcript);

      setIsListening(false);

      inputRef.current?.focus();
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5 dark:border-gray-700">

      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleKeyDown}
        className="flex-1 rounded-2xl border border-gray-300 px-5 py-3 outline-none transition focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={handleVoiceInput}
        className={`rounded-2xl px-5 py-3 text-white transition ${
          isListening
            ? "animate-pulse bg-red-500"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        title="Voice Input"
      >
        <FaMicrophone />
      </button>

      <button
        onClick={handleSend}
        className="rounded-2xl bg-emerald-600 px-6 py-3 text-white transition hover:bg-emerald-700"
        title="Send"
      >
        <FaPaperPlane />
      </button>

    </div>
  );
}

export default ChatInput;