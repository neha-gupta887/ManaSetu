import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";

function JournalEditor({
  onSave,
  editingEntry,
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingEntry) {
      setText(editingEntry.content);
    }
  }, [editingEntry]);

  const handleSave = () => {
    if (!text.trim()) return;

    onSave(text);

    setText("");
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <div className="flex items-center gap-3">

        <FaPen className="text-2xl text-emerald-600" />

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {editingEntry
            ? "Edit Entry"
            : "New Journal Entry"}
        </h2>

      </div>

      <textarea
        rows={12}
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        placeholder="Write about your day..."
        className="mt-6 w-full rounded-2xl border border-gray-300 p-5 outline-none focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={handleSave}
        className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-white transition hover:bg-emerald-700"
      >
        {editingEntry
          ? "Update Entry"
          : "Save Entry"}
      </button>

    </div>
  );
}

export default JournalEditor;