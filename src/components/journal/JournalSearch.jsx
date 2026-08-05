import { FaSearch } from "react-icons/fa";

function JournalSearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900">

      <div className="relative">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search journal entries..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

      </div>

    </div>
  );
}

export default JournalSearch;