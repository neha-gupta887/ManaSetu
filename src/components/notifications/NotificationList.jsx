import NotificationCard from "./NotificationCard";

function NotificationList({
  notifications,
  onMarkAsRead,
}) {
  return (
    <div className="mt-6 space-y-4">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
        />
      ))}
    </div>
  );
}

export default NotificationList;