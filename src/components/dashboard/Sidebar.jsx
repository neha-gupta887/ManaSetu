import toast from "react-hot-toast";

import {
  FaHome,
  FaSmile,
  FaBook,
  FaRobot,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaBrain,
  FaMicrochip,
  FaUserCircle,
  FaHeart,
  FaMemory,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

function Sidebar() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon 🌿");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed!");
    }
  };

  const menuItems = [
    {
      icon: <FaHome />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FaSmile />,
      label: "Mood Tracker",
      path: "/mood",
    },
    {
      icon: <FaBook />,
      label: "Journal",
      path: "/journal",
    },
    {
      icon: <FaRobot />,
      label: "AI Companion",
      path: "/ai-companion",
      badge: "AI",
    },
    {
      icon: <FaBrain />,
      label: "AI Memory",
      path: "/memory",
    },
    {
      icon: <FaMicrochip />,
      label: "Command Center",
      path: "/command-center",
    },
    {
      icon: <FaChartLine />,
      label: "Analytics",
      path: "/analytics",
      badge: "New",
    },
  ];

  return (
    <aside className="flex h-screen w-[270px] flex-shrink-0 flex-col overflow-y-auto border-r border-gray-200/70 bg-white/90 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/90">

      {/* =========================
          BRAND
      ========================= */}
      <div className="px-6 pb-5 pt-7">

        <div className="flex items-center gap-3">

          {/* Logo */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-2xl shadow-lg shadow-emerald-500/20">

            <span>🌿</span>

            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-400 dark:border-gray-950" />

          </div>

          {/* Brand */}
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Mana<span className="text-emerald-600">Setu</span>
            </h1>

            <p className="text-[11px] font-medium tracking-wide text-gray-400">
              AI MENTAL WELLNESS
            </p>
          </div>

        </div>

      </div>

      {/* =========================
          USER MINI PROFILE
      ========================= */}
      <div className="mx-4 mb-5 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-4 dark:border-emerald-900/40 dark:from-emerald-950/30 dark:to-teal-950/20">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-xl text-white shadow-md">
            <FaUserCircle />
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-bold text-gray-800 dark:text-white">
              {user?.displayName || "Student"}
            </p>

            <p className="truncate text-xs text-gray-500 dark:text-gray-400">
              Wellness Explorer 🌱
            </p>

          </div>

        </div>

        {/* AI Status */}
        <div className="mt-3 flex items-center gap-2">

          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

          <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
            Mana AI connected
          </span>

        </div>

      </div>

      {/* =========================
          WELLNESS SCORE
      ========================= */}
      <div className="mx-4 mb-6 rounded-2xl bg-gray-50 p-4 dark:bg-gray-900">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
              Wellness
            </p>

            <p className="mt-1 text-2xl font-extrabold text-gray-900 dark:text-white">
              92%
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
            <FaHeart />
          </div>

        </div>

        {/* Progress */}
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">

          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
            style={{ width: "92%" }}
          />

        </div>

        <p className="mt-2 text-[10px] text-gray-400">
          You're doing well today ✨
        </p>

      </div>

      {/* =========================
          NAVIGATION LABEL
      ========================= */}
      <div className="px-6">

        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          Your space
        </p>

      </div>

      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="flex-1 space-y-1 px-3">

        {menuItems.map((item) => (

          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-900/30 dark:text-emerald-400"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
              }`
            }
          >

            {({ isActive }) => (
              <>

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute left-0 h-6 w-1 rounded-r-full bg-emerald-500" />
                )}

                {/* Icon */}
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm transition-all ${
                    isActive
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                      : "bg-gray-100 text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-emerald-900/30 dark:group-hover:text-emerald-400"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span className="flex-1 text-sm font-semibold">
                  {item.label}
                </span>

                {/* Badge */}
                {item.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                      item.badge === "AI"
                        ? "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300"
                        : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Active dot */}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                )}

              </>
            )}

          </NavLink>

        ))}

      </nav>

      {/* =========================
          BOTTOM SECTION
      ========================= */}
      <div className="mt-5 border-t border-gray-100 px-3 py-4 dark:border-gray-800">

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
              isActive
                ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white"
            }`
          }
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-500 dark:bg-gray-800">
            <FaCog />
          </div>

          Settings
        </NavLink>

        {/* AI Status */}
        <div className="mb-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-3 text-white">

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
              🤖
            </div>

            <div>
              <p className="text-xs font-bold">
                Mana AI
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">

                <span className="h-1.5 w-1.5 rounded-full bg-green-200" />

                <span className="text-[10px] text-emerald-50">
                  Online & ready
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 px-3 py-2.5 text-sm font-semibold text-red-500 transition-all hover:bg-red-50 dark:border-red-900/30 dark:hover:bg-red-950/30"
        >
          <FaSignOutAlt />
          Sign out
        </button>

        <p className="mt-3 text-center text-[9px] text-gray-400">
          ManaSetu • Your space to breathe 🌿
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;