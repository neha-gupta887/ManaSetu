/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";

const moods = ["😊", "😄", "😐", "😔", "😢", "😴", "😡"];

const categories = [
  "Personal",
  "Work",
  "Study",
  "Health",
  "Gratitude",
  "Relationships",
];

function JournalEditor({
  onSave,
  editingEntry,
}) {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("😊");
  const [category, setCategory] = useState("Personal");

  useEffect(() => {
    if (editingEntry) {
      setText(editingEntry.content);
      setMood(editingEntry.mood);
      setCategory(editingEntry.category || "Personal");
    }
  }, [editingEntry]);

  const handleSave = () => {
    if (!text.trim()) return;

    onSave(text, mood, category);

    setText("");
    setMood("😊");
    setCategory("Personal");
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <div className="flex items-center gap-3">
        <FaPen className="text-2xl text-emerald-600" />

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {editingEntry ? "Edit Entry" : "New Journal Entry"}
        </h2>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
        How are you feeling today?
      </h3>

      <div className="mt-4 flex flex-wrap gap-3">
        {moods.map((item) => (
          <button
            key={item}
            onClick={() => setMood(item)}
            className={`rounded-full p-3 text-2xl transition ${
              mood === item
                ? "scale-110 bg-emerald-100 ring-2 ring-emerald-500"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          {categories.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write about your day..."
        className="mt-6 w-full rounded-2xl border border-gray-300 p-5 outline-none focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={handleSave}
        className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-white transition hover:bg-emerald-700"
      >
        {editingEntry ? "Update Entry" : "Save Entry"}
      </button>

    </div>
  );
}

export default JournalEditor;
