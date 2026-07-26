import {
  FaHome,
  FaSmile,
  FaBook,
  FaRobot,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaSmile />, label: "Mood Tracker", path: "/dashboard" },
    { icon: <FaBook />, label: "Journal", path: "/journal" },
    { icon: <FaRobot />, label: "AI Companion", path: "/ai-companion" },    { icon: <FaChartLine />, label: "Analytics", path: "/analytics" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-r border-gray-200 dark:border-gray-800 shadow-xl transition-colors duration-300">

      {/* Logo */}
      <div className="px-8 pt-8 pb-10 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
          🌿 ManaSetu
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Your Mental Wellness Companion
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center gap-4 rounded-2xl px-5 py-3 font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`
            }
          >
            <span className="text-xl transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-5 border-t border-gray-200 dark:border-gray-800">
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 hover:shadow-lg">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;