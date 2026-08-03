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
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Logout failed!");
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
      path: "/dashboard",
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
    },
    {
      icon: <FaBrain />,
      label: "AI Memory",
      path: "/memory",
    },
    {
      icon: <FaMicrochip />,
      label: "AI Command Center",
      path: "/command-center",
    },
    {
      icon: <FaChartLine />,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: <FaCog />,
      label: "Settings",
      path: "/settings",
    },
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
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-800 hover:text-green-700 dark:hover:text-emerald-400"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span className="font-medium">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
      >
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;