import {
  FaBell,
  FaRobot,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";

function NotificationCard({ notification }) {
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
    <div
      className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${
        notification.read
          ? "bg-white dark:bg-gray-800 shadow-lg"
          : "bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 shadow-lg"
      }`}
    >
      <div className="flex gap-4">

        <div className="mt-1">
          {getNotificationIcon(notification.type)}
        </div>

        <div className="flex-1">

          <div className="flex justify-between items-start">

            <div className="flex items-center gap-3">

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {notification.title}
              </h3>

              {!notification.read && (
                <span className="rounded-full bg-red-500 text-white text-xs px-2 py-1 font-semibold">
                  New
                </span>
              )}

            </div>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {notification.time}
            </span>

          </div>

          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">
            {notification.message}
          </p>

        </div>

      </div>
    </div>
  );
}

export default NotificationCard;