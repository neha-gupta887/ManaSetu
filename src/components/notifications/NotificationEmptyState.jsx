function NotificationEmptyState() {
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 text-center">

      <div className="text-6xl mb-4">
        🔍
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        No Notifications Found
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Try changing your search or filter to see more notifications.
      </p>

    </div>
  );
}

export default NotificationEmptyState;