function NotificationSearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="mt-8">

      <input
        type="text"
        placeholder="🔍 Search notifications..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

    </div>
  );
}

export default NotificationSearch;