import { useState, useEffect, useRef } from "react";
import { auth } from "../../services/firebase";

import {
  FaBell,
  FaUserCircle,
  FaBars,
  FaSearch,
  FaBook,
  FaSmile,
  FaLeaf,
  FaCheckDouble,
  FaChartLine,
  FaRobot,
  FaMoon,
} from "react-icons/fa";

function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [userName, setUserName] = useState("Student");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <FaSmile className="text-yellow-500 text-lg" />,
      title: "Daily Mood Check",
      message:
        "Take a minute to record your mood today and build self-awareness.",
      time: "5 min ago",
    },
    {
      id: 2,
      icon: <FaBook className="text-blue-500 text-lg" />,
      title: "Journal Reminder",
      message: "Reflect on your day by writing a short journal entry.",
      time: "20 min ago",
    },
    {
      id: 3,
      icon: <FaLeaf className="text-emerald-500 text-lg" />,
      title: "Mindfulness Exercise",
      message: "Complete today's 5-minute breathing exercise for relaxation.",
      time: "Today",
    },
    {
      id: 4,
      icon: <FaChartLine className="text-purple-500 text-lg" />,
      title: "Weekly Mood Insights",
      message: "Your emotional trends for this week are now available.",
      time: "Yesterday",
    },
    {
      id: 5,
      icon: <FaRobot className="text-pink-500 text-lg" />,
      title: "AI Wellness Companion",
      message:
        "Your AI companion has a personalized wellness suggestion waiting.",
      time: "Yesterday",
    },
  ]);

  const notificationRef = useRef(null);

  const hour = new Date().getHours();

  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  useEffect(() => {
    if (auth.currentUser) {
      const name =
        auth.currentUser.displayName ||
        auth.currentUser.email?.split("@")[0] ||
        "Student";

      setUserName(name);
    }

    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications([]);
  };

  return (
    <header className="relative z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-3xl px-4 sm:px-6 lg:px-8 py-5 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition">
            <FaBars />
          </button>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              {greeting},{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                {userName}
              </span>{" "}
              👋
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
{today} • One small act of self-care today can make a big difference. 🌿            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-2 w-72">
            <FaSearch className="text-gray-400 mr-3" />

            <input
              type="text"
placeholder="Search your wellness journey..."              className="bg-transparent outline-none w-full text-gray-700 dark:text-white placeholder-gray-400"
            />
          </div>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
                        <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900 transition duration-300"
            >
              <FaBell className="text-xl text-gray-700 dark:text-gray-200" />

              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-14 right-0 w-96 max-w-[90vw] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-[9999] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                      🔔 Notifications
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {notifications.length} unread notification
                      {notifications.length !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {notifications.length > 0 && (
                    <button
                      onClick={markAllRead}
                      className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition"
                    >
                      <FaCheckDouble />
                      Mark all read
                    </button>
                  )}
                </div>

                {/* List */}
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 px-6">
                      <FaLeaf className="text-5xl text-emerald-500 mb-4" />

                      <h4 className="font-semibold text-gray-700 dark:text-white">
                        You're all caught up!
                      </h4>

                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                        No new notifications. Keep taking care of your mental
                        well-being 💚
                      </p>
                    </div>
                  ) : (
                    notifications.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-4 px-5 py-4 hover:bg-emerald-50 dark:hover:bg-gray-700 transition cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <div className="mt-1 flex-shrink-0">{item.icon}</div>

                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white">
                            {item.title}
                          </h4>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                            {item.message}
                          </p>

                          <span className="text-xs text-gray-400 mt-2 block">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
          <button
  className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900 transition duration-300"
>
  <FaMoon className="text-gray-700 dark:text-yellow-300" />
</button>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-2 hover:shadow-lg transition duration-300 cursor-pointer">
            <FaUserCircle className="text-4xl text-emerald-600 dark:text-emerald-400" />

            <div className="hidden sm:block">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {userName}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
Wellness Explorer 🌿              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;