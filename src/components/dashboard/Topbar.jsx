import { useEffect, useRef, useState } from "react";
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
  FaSun,
} from "react-icons/fa";

function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [userName, setUserName] = useState("Student");
  const [isDark, setIsDark] = useState(false);

  const notificationRef = useRef(null);

  /* =========================
     GREETING
  ========================= */

  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let greetingIcon = "🌙";

  if (hour < 12) {
    greeting = "Good Morning";
    greetingIcon = "☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    greetingIcon = "🌤️";
  }

  /* =========================
     DATE
  ========================= */

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  /* =========================
     NOTIFICATIONS
  ========================= */

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <FaSmile className="text-amber-500" />,
      title: "Daily Mood Check",
      message:
        "Take a moment to record how you're feeling today.",
      time: "5 min ago",
    },

    {
      id: 2,
      icon: <FaBook className="text-blue-500" />,
      title: "Journal Reminder",
      message:
        "A few words about your day can help clear your mind.",
      time: "20 min ago",
    },

    {
      id: 3,
      icon: <FaLeaf className="text-emerald-500" />,
      title: "Mindfulness Exercise",
      message:
        "Try today's short breathing exercise.",
      time: "Today",
    },

    {
      id: 4,
      icon: <FaChartLine className="text-violet-500" />,
      title: "Weekly Insights",
      message:
        "Your emotional trends are ready to explore.",
      time: "Yesterday",
    },

    {
      id: 5,
      icon: <FaRobot className="text-pink-500" />,
      title: "Mana AI",
      message:
        "Your AI companion has a wellness suggestion for you.",
      time: "Yesterday",
    },
  ]);

  /* =========================
     USER
  ========================= */

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const name =
        user.displayName ||
        user.email?.split("@")[0] ||
        "Student";

      setUserName(name);
    }

    /* Close notifications when clicking outside */
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    /* Check dark mode */
    setIsDark(
      document.documentElement.classList.contains("dark")
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =========================
     DARK MODE
  ========================= */

  const toggleTheme = () => {
    const html = document.documentElement;

    html.classList.toggle("dark");

    const dark =
      html.classList.contains("dark");

    setIsDark(dark);

    localStorage.setItem(
      "manasetu-theme",
      dark ? "dark" : "light"
    );
  };

  /* =========================
     MARK READ
  ========================= */

  const markAllRead = () => {
    setNotifications([]);
  };

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">

      <div className="flex min-h-[76px] items-center justify-between gap-4 rounded-3xl border border-gray-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-xl transition-colors dark:border-gray-800 dark:bg-gray-900/85 sm:px-6">

        {/* =========================
            LEFT
        ========================= */}

        <div className="flex min-w-0 items-center gap-3">

          {/* Mobile menu */}
          <button
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-emerald-900/30"
          >
            <FaBars />
          </button>

          <div className="min-w-0">

            <div className="flex items-center gap-2">

              <h2 className="truncate text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl lg:text-2xl">
                {greeting},{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {userName}
                </span>
              </h2>

              <span className="hidden text-xl sm:inline">
                {greetingIcon}
              </span>

            </div>

            <p className="mt-0.5 hidden text-xs text-gray-400 sm:block sm:text-sm">
              {today}
              <span className="mx-2">•</span>
              One small act of self-care can make a difference.
            </p>

          </div>

        </div>

        {/* =========================
            RIGHT
        ========================= */}

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">

          {/* =========================
              SEARCH
          ========================= */}

          <div className="hidden lg:flex h-11 w-64 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-emerald-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/5 dark:border-gray-700 dark:bg-gray-800 dark:focus-within:bg-gray-800 xl:w-72">

            <FaSearch className="mr-3 text-sm text-gray-400" />

            <input
              type="text"
              placeholder="Search your wellness journey..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 dark:text-white"
            />

          </div>

          {/* =========================
              NOTIFICATIONS
          ========================= */}

          <div
            className="relative"
            ref={notificationRef}
          >

            <button
              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 text-gray-600 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-emerald-900/30"
              aria-label="Notifications"
            >

              <FaBell />

              {notifications.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-rose-500 px-1 text-[9px] font-bold text-white dark:border-gray-900">
                  {notifications.length}
                </span>
              )}

            </button>

            {/* Notification Dropdown */}

            {showNotifications && (
              <div className="absolute right-0 top-14 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">

                  <div>

                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Notifications
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-400">
                      {notifications.length > 0
                        ? `${notifications.length} things waiting for you`
                        : "You're all caught up"}
                    </p>

                  </div>

                  {notifications.length > 0 && (
                    <button
                      onClick={markAllRead}
                      className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      <FaCheckDouble />
                      Mark read
                    </button>
                  )}

                </div>

                {/* List */}

                <div className="max-h-[380px] overflow-y-auto">

                  {notifications.length === 0 ? (

                    <div className="flex flex-col items-center px-6 py-12 text-center">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl dark:bg-emerald-900/30">
                        🌿
                      </div>

                      <h4 className="mt-4 font-semibold text-gray-800 dark:text-white">
                        You're all caught up
                      </h4>

                      <p className="mt-1 text-sm text-gray-400">
                        Keep taking care of yourself.
                      </p>

                    </div>

                  ) : (

                    notifications.map((item) => (

                      <div
                        key={item.id}
                        className="flex gap-3 border-b border-gray-100 px-5 py-4 transition hover:bg-emerald-50/60 dark:border-gray-800 dark:hover:bg-gray-800"
                      >

                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 text-sm dark:bg-gray-800">
                          {item.icon}
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-2">

                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                              {item.title}
                            </h4>

                            <span className="flex-shrink-0 text-[10px] text-gray-400">
                              {item.time}
                            </span>

                          </div>

                          <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                            {item.message}
                          </p>

                        </div>

                      </div>

                    ))

                  )}

                </div>

              </div>
            )}

          </div>

          {/* =========================
              THEME
          ========================= */}

          <button
            onClick={toggleTheme}
            className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 text-gray-600 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 dark:flex dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* =========================
              PROFILE
          ========================= */}

          <div className="hidden items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-800 sm:flex">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-lg text-white">
              <FaUserCircle />
            </div>

            <div className="hidden xl:block">

              <p className="max-w-[110px] truncate text-xs font-bold text-gray-800 dark:text-white">
                {userName}
              </p>

              <p className="text-[10px] text-gray-400">
                Wellness Explorer 🌱
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;