function NotificationSort({ sortBy, setSortBy }) {
  return (
    <div className="mt-6">
      <label className="mr-3 font-medium text-gray-700 dark:text-gray-300">
        Sort By:
      </label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="unread">Unread First</option>
      </select>
    </div>
  );
}

export default NotificationSort;