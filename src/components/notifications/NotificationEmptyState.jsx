import { useState } from "react";

import { notifications } from "../data/notifications";

import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationStats from "../components/notifications/NotificationStats";
import NotificationSearch from "../components/notifications/NotificationSearch";
import NotificationFilters from "../components/notifications/NotificationFilters";
import NotificationList from "../components/notifications/NotificationList";
import NotificationEmptyState from "../components/notifications/NotificationEmptyState";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredNotifications = notifications.filter((notification) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      notification.title.toLowerCase().includes(search) ||
      notification.message.toLowerCase().includes(search);

    let matchesFilter = true;

    if (selectedFilter === "Unread") {
      matchesFilter = !notification.read;
    }

    if (selectedFilter === "Today") {
      matchesFilter =
        notification.time.includes("min") ||
        notification.time.includes("hour");
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <NotificationHeader />

        {/* Statistics */}
        <NotificationStats stats={stats} />

        {/* Search */}
        <NotificationSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Filters */}
        <NotificationFilters
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        {/* Notification List */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Notifications
          </h2>

          {filteredNotifications.length === 0 ? (
            <NotificationEmptyState />
          ) : (
            <NotificationList
              notifications={filteredNotifications}
            />
          )}

        </div>

      </div>
    </div>
  );
}

export default Notifications;