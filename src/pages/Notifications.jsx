import { notifications } from "../data/notifications";

import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationStats from "../components/notifications/NotificationStats";
import NotificationCard from "../components/notifications/NotificationCard";

const stats = [
  {
    title: "Total",
    value: notifications.length,
    color: "text-emerald-600",
  },
  {
    title: "Unread",
    value: notifications.filter(
      (notification) => !notification.read
    ).length,
    color: "text-red-500",
  },
  {
    title: "Today",
    value: notifications.filter(
      (notification) =>
        notification.time.includes("min") ||
        notification.time.includes("hour")
    ).length,
    color: "text-blue-500",
  },
  {
    title: "Read Rate",
    value: `${Math.round(
      (notifications.filter((notification) => notification.read).length /
        notifications.length) *
        100
    )}%`,
    color: "text-purple-500",
  },
];

function Notifications() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <NotificationHeader />

        {/* Statistics */}

        <NotificationStats stats={stats} />

        {/* Notification List */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Notifications
          </h2>

          <div className="mt-6 space-y-4">

            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Notifications;