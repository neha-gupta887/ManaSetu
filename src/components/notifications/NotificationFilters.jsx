function NotificationFilters({
  selectedFilter,
  setSelectedFilter,
}) {
  const filters = [
    "All",
    "Unread",
    "Today",
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-8">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => setSelectedFilter(filter)}
          className={`px-5 py-2 rounded-full transition-all duration-300 font-medium ${
            selectedFilter === filter
              ? "bg-emerald-600 text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow"
          }`}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}

export default NotificationFilters;