import { FaSearch } from "react-icons/fa";

function DashboardSearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="relative">

      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search dashboard..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 shadow-lg outline-none transition focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />

    </div>
  );
}

export default DashboardSearch;