import NotificationCard from "./NotificationCard";

function NotificationList({
  notifications,
  onMarkAsRead,
  onDelete,
}) {
  return (
    <div className="mt-6 space-y-4">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NotificationList;