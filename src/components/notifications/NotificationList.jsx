import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  return (
    <div className="mt-6 space-y-4">

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}

    </div>
  );
}

export default NotificationList;