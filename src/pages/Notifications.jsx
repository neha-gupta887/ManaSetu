import { useState } from "react";

import { notifications } from "../data/notifications";

import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationStats from "../components/notifications/NotificationStats";
import NotificationSearch from "../components/notifications/NotificationSearch";
import NotificationFilters from "../components/notifications/NotificationFilters";
import NotificationList from "../components/notifications/NotificationList";
import NotificationEmptyState from "../components/notifications/NotificationEmptyState";
import ClearFiltersButton from "../components/notifications/ClearFiltersButton";
import NotificationSort from "../components/notifications/NotificationSort";

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
  const [sortBy, setSortBy] = useState("latest");

  const filteredNotifications = [...notifications]
    .filter((notification) => {
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
    })
    .sort((a, b) => {
      if (sortBy === "unread") {
        return Number(a.read) - Number(b.read);
      }

      if (sortBy === "oldest") {
        return a.id - b.id;
      }

      return b.id - a.id;
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

        {/* Clear Filters */}

        {(searchTerm || selectedFilter !== "All") && (
          <ClearFiltersButton
            setSearchTerm={setSearchTerm}
            setSelectedFilter={setSelectedFilter}
          />
        )}

        {/* Status */}

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredNotifications.length} notification
          {filteredNotifications.length !== 1 ? "s" : ""}

          {selectedFilter !== "All" && (
            <> • Filter: {selectedFilter}</>
          )}
        </p>

        {/* Sort */}

        <NotificationSort
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Notification List */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Notifications ({filteredNotifications.length})
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