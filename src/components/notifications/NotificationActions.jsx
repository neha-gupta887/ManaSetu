import { FaCheck, FaTrash } from "react-icons/fa";

function NotificationActions({
  notificationId,
  onMarkAsRead,
  onDelete,
}) {
  return (
    <div className="mt-4 flex gap-3">

      <button
        onClick={onMarkAsRead}
        className="flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm text-white transition hover:bg-emerald-600"
      >
        <FaCheck />
        Mark as Read
      </button>

      <button
        onClick={onDelete}
        className="flex items-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-sm text-white transition hover:bg-red-600"
      >
        <FaTrash />
        Delete
      </button>

    </div>
  );
}

export default NotificationActions;