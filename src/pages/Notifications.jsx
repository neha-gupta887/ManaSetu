import {
  FaBell,
  FaRobot,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";
import { notifications } from "../data/notifications";

const stats = [
  {
    title: "Total",
    value: 12,
    color: "text-emerald-600",
  },
  {
    title: "Unread",
    value: 3,
    color: "text-red-500",
  },
  {
    title: "Today",
    value: 2,
    color: "text-blue-500",
  },
  {
    title: "Read Rate",
    value: "99%",
    color: "text-purple-500",
  },
];

function Notifications() {

  const getNotificationIcon = (type) => {
    switch (type) {
      case "ai":
        return <FaRobot className="text-blue-500 text-2xl" />;

      case "reminder":
        return <FaBell className="text-yellow-500 text-2xl" />;

      case "appointment":
        return <FaCalendarAlt className="text-green-500 text-2xl" />;

      case "achievement":
        return <FaTrophy className="text-orange-500 text-2xl" />;

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
          AI insights, reminders, and counselor updates.
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

        {/* Notification List */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Notifications
          </h2>

          <div className="mt-6 space-y-4">

            {notifications.map((notification) => (

              <div
                key={notification.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >

                <div className="flex gap-4">

                  <div className="mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {notification.title}
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {notification.message}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Notifications;