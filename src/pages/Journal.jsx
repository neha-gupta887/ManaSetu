import { useState } from "react";

import JournalEditor from "../components/journal/JournalEditor";
import JournalHistory from "../components/journal/JournalHistory";

function Journal() {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  const handleSave = (text) => {
    if (!text.trim()) return;

    if (editingEntry) {
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === editingEntry.id
            ? {
                ...entry,
                title: text.slice(0, 40),
                content: text,
              }
            : entry
        )
      );

      setEditingEntry(null);

      return;
    }

    const newEntry = {
      id: Date.now(),
      title: text.slice(0, 40),
      content: text,
      date: new Date().toLocaleDateString(),
    };

    setEntries((prev) => [newEntry, ...prev]);
  };

  const handleDelete = (id) => {
    if (
      !window.confirm(
        "Delete this journal entry?"
      )
    )
      return;

    setEntries((prev) =>
      prev.filter((entry) => entry.id !== id)
    );
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 dark:bg-gray-950">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          📝 Smart Wellness Journal
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <JournalEditor
              onSave={handleSave}
              editingEntry={editingEntry}
            />

          </div>

          <div>

            <JournalHistory
              entries={entries}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Journal;