import { FaEdit, FaTrash } from "react-icons/fa";

function JournalItem({ entry, onEdit, onDelete }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-700">
            {entry.mood}
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white">
              {entry.title}
            </h3>
            <p className="text-xs text-slate-400">{entry.date}</p>
          </div>
        </div>
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={() => onEdit(entry)}
            className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 transition hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-900"
            aria-label="Edit entry"
          >
            <FaEdit className="mx-auto" />
          </button>
          <button
            onClick={() => onDelete(entry.id)}
            className="h-8 w-8 rounded-full bg-red-100 text-red-600 transition hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-900"
            aria-label="Delete entry"
          >
            <FaTrash className="mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JournalItem;