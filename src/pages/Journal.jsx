import { useState } from "react";

import JournalEditor from "../components/journal/JournalEditor";
import JournalHistory from "../components/journal/JournalHistory";
import JournalSearch from "../components/journal/JournalSearch";

function Journal() {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSave = (text, mood, category) => {
    if (!text.trim()) return;

    if (editingEntry) {
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === editingEntry.id
            ? {
                ...entry,
                title: text.slice(0, 40),
                content: text,
                mood,
                category,
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
      mood,
      category,
      date: new Date().toLocaleDateString(),
    };

    setEntries((prev) => [newEntry, ...prev]);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this journal entry?"
    );

    if (!confirmed) return;

    setEntries((prev) =>
      prev.filter((entry) => entry.id !== id)
    );

    if (editingEntry?.id === id) {
      setEditingEntry(null);
    }
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const filteredEntries = entries.filter((entry) => {
    const search = searchTerm.toLowerCase();

    return (
      entry.title.toLowerCase().includes(search) ||
      entry.content.toLowerCase().includes(search) ||
      entry.mood.includes(search) ||
      entry.category.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8 dark:bg-gray-950">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          📝 Smart Wellness Journal
        </h1>

        <JournalSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <JournalEditor
              onSave={handleSave}
              editingEntry={editingEntry}
            />

          </div>

          <div>

            <JournalHistory
              entries={filteredEntries}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Journal;