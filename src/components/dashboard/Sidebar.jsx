import {
  FaHome,
  FaSmile,
  FaBook,
  FaRobot,
  FaChartLine,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaSmile />, label: "Mood Tracker", path: "/dashboard" },
    { icon: <FaBook />, label: "Journal", path: "/journal" },
    { icon: <FaRobot />, label: "AI Companion", path: "/dashboard" },
    { icon: <FaChartLine />, label: "Analytics", path: "/dashboard" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="hidden lg:flex w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-lg h-screen fixed left-0 top-0 p-6 flex-col transition-colors duration-300">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-green-600 dark:text-emerald-400 mb-12">
        🌿 ManaSetu
      </h1>

      {/* Navigation */}
      <nav className="space-y-3 flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-800 hover:text-green-700 dark:hover:text-emerald-400"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="mt-auto">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition">
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;