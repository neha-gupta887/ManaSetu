import { useState } from "react";

import JournalEditor from "../components/journal/JournalEditor";
import JournalHistory from "../components/journal/JournalHistory";

function Journal() {
  const [entries, setEntries] = useState([]);

  const addEntry = (text) => {
    if (!text.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: text.slice(0, 40),
      content: text,
      date: new Date().toLocaleDateString(),
    };

    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          📝 Smart Wellness Journal
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <JournalEditor
              onSave={addEntry}
            />

          </div>

          <div>

            <JournalHistory
              entries={entries}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Journal;