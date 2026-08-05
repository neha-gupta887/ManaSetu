import { Link } from "react-router-dom";
import { notifications } from "../../data/notifications";

function NotificationPreview() {
  const latestNotifications = notifications.slice(0, 3);

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🔔 Recent Notifications
        </h2>

        <Link
          to="/notifications"
          className="text-sm font-semibold text-emerald-600 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="mt-6 space-y-4">

        {latestNotifications.map((notification) => (

          <div
            key={notification.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {notification.title}
              </h3>

              {!notification.read && (
                <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                  New
                </span>
              )}

            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {notification.message}
            </p>

            <p className="mt-2 text-xs text-gray-500">
              {notification.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NotificationPreview;