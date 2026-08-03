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
  FaCircle,
  FaUserCircle,
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
      label: "Command Center",
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
    <aside className="hidden lg:flex w-72 h-screen fixed left-0 top-0 flex-col bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl border-r border-gray-200 dark:border-gray-700 shadow-2xl">

      {/* Logo */}

      <div className="p-6 border-b border-gray-200 dark:border-gray-700">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">
            🌿
          </div>

          <div>

            <h1 className="text-2xl font-extrabold text-green-700 dark:text-emerald-400">
              ManaSetu
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              AI Wellness Platform
            </p>

          </div>

        </div>

      </div>

      {/* User Card */}

      <div className="mx-5 mt-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 p-5 text-white shadow-lg">

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-5xl" />

          <div>

            <h3 className="font-bold">
              {user?.displayName || "Student"}
            </h3>

            <p className="text-sm text-green-100">
              {user?.email}
            </p>

          </div>

        </div>

        <div className="mt-4 flex items-center gap-2">

          <FaCircle className="text-green-300 text-xs animate-pulse" />

          <span className="text-sm">
            Mana AI Online
          </span>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 mt-8 space-y-2">
                {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-4">

                  <div
                    className={`text-xl transition-transform duration-300 ${
                      isActive
                        ? "scale-110"
                        : "group-hover:scale-110"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <span className="font-medium">
                    {item.label}
                  </span>

                </div>

                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </>
            )}
          </NavLink>
        ))}

      </nav>

      {/* Bottom Section */}

      <div className="border-t border-gray-200 dark:border-gray-700 p-5">

        {/* AI Status */}

        <div className="mb-5 rounded-2xl bg-gradient-to-r from-slate-100 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold text-gray-700 dark:text-white">
                Mana AI
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ready to Assist
              </p>

            </div>

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          </div>

        </div>

        {/* Logout Button */}

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 rounded-2xl bg-red-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
        >
          <FaSignOutAlt />

          Logout

        </button>

        {/* Footer */}

        <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          ManaSetu v1.0 • AI Wellness Platform
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;