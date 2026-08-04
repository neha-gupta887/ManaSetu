import {
  FaBell,
  FaRobot,
  FaCalendarAlt,
  FaTrophy,
  FaFileAlt,
} from "react-icons/fa";

import { notifications } from "../data/notifications";

const stats = [
  {
    title: "Total",
    value: notifications.length,
    color: "text-emerald-600",
  },
  {
    title: "Unread",
    value: notifications.filter((n) => !n.read).length,
    color: "text-red-500",
  },
  {
    title: "Today",
    value: 2,
    color: "text-blue-500",
  },
  {
    title: "Read Rate",
    value: `${Math.round(
      (notifications.filter((n) => n.read).length /
        notifications.length) *
        100
    )}%`,
    color: "text-purple-500",
  },
];

function Notifications() {
    const [filter, setFilter] = useState("all");
  const getIcon = (type) => {
    switch (type) {
      case "ai":
        return <FaRobot className="text-blue-500 text-2xl" />;

      case "reminder":
        return <FaBell className="text-yellow-500 text-2xl" />;

      case "appointment":
        return <FaCalendarAlt className="text-green-500 text-2xl" />;

      case "achievement":
        return <FaTrophy className="text-orange-500 text-2xl" />;

      case "report":
        return <FaFileAlt className="text-purple-500 text-2xl" />;

      default:
        return <FaBell className="text-gray-500 text-2xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          🔔 Notifications
        </h1>

        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Stay updated with your latest wellness activities,
          AI insights, reminders and counselor updates.
        </p>

        {/* Statistics */}

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
          {/* Filters */}

<div className="mt-10 flex flex-wrap gap-3">

  {["all", "unread", "today"].map((item) => (

    <button
      key={item}
      onClick={() => setFilter(item)}
      className={`px-5 py-2 rounded-full font-medium transition ${
        filter === item
          ? "bg-emerald-600 text-white"
          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
      }`}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </button>

  ))}

</div>
        {/* Notification List */}

        <div className="mt-14">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Notifications ({notifications.length})
          </h2>

          <div className="mt-6 space-y-5">

            {notifications.length === 0 ? (

              <div className="rounded-3xl bg-white dark:bg-gray-800 p-10 shadow-lg text-center">

                <div className="text-6xl">
                  🔔
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                  No Notifications
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  You're all caught up! New notifications will appear here.
                </p>

              </div>

            ) : (

              notifications.map((notification) => (

                <div
                  key={notification.id}
                  className={`rounded-2xl shadow-lg p-6 flex items-start justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                    notification.read
                      ? "bg-white dark:bg-gray-800"
                      : "bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500"
                  }`}
                >

                  <div className="flex gap-5">

                    <div className="mt-1">
                      {getIcon(notification.type)}
                    </div>

                    <div>

                      <div className="flex items-center gap-3">

                        <h3 className="font-bold text-gray-900 dark:text-white">

                          {notification.title}

                        </h3>

                        {!notification.read && (

                          <span className="rounded-full bg-red-500 text-white text-xs px-2 py-1">

                            New

                          </span>

                        )}

                      </div>

                      <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">

                        {notification.message}

                      </p>

                    </div>

                  </div>

                  <span
                    className={`text-sm ${
                      notification.read
                        ? "text-gray-500"
                        : "text-emerald-600 font-semibold"
                    }`}
                  >

                    {notification.time}

                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;