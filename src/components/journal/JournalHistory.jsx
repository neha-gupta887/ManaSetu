import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function JournalHistory({
  entries,
  onDelete,
  onEdit,
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Recent Entries
      </h2>

      {entries.length === 0 ? (
        <p className="mt-6 text-gray-500 dark:text-gray-400">
          No journal entries yet.
        </p>
      ) : (
        <div className="mt-6 space-y-4">

          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-2xl border border-gray-200 p-4 dark:border-gray-700"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {entry.title}
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {entry.content}
              </p>

              <p className="mt-2 text-xs text-gray-500">
                {entry.date}
              </p>

              <div className="mt-4 flex gap-3">

                <button
                  onClick={() => onEdit(entry)}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  <FaEdit />
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(entry.id)
                  }
                  className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  <FaTrash />
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default JournalHistory;