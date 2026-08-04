function NotificationStats({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6"
        >
          <p className={`text-4xl font-bold ${stat.color}`}>
            {stat.value}
          </p>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NotificationStats;