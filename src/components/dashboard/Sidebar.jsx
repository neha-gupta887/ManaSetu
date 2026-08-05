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
  FaHeart,
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
    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r border-white/20 bg-white/80 shadow-2xl backdrop-blur-3xl transition-all duration-500 dark:border-gray-700 dark:bg-gray-900/90 lg:flex">

      {/* Logo */}

      <div className="border-b border-gray-200 p-6 dark:border-gray-700">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-3xl shadow-xl">

            🌿

          </div>

          <div>

            <h1 className="text-3xl font-extrabold tracking-tight text-emerald-700 dark:text-emerald-400">

              ManaSetu

            </h1>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">

              AI Mental Wellness

            </p>

          </div>

        </div>

      </div>

      {/* User Card */}

      <div className="mx-5 mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-6 text-white shadow-xl">

        <div className="flex items-center gap-4">

          <FaUserCircle className="text-6xl" />

          <div>

            <h3 className="text-lg font-bold">

              {user?.displayName || "Student"}

            </h3>

            <p className="text-sm text-emerald-100">

              {user?.email}

            </p>

          </div>

        </div>

        <div className="mt-5 flex items-center gap-2">

          <FaCircle className="animate-pulse text-xs text-green-200" />

          <span className="text-sm font-medium">

            Mana AI Connected

          </span>

        </div>

      </div>

      {/* Wellness Card */}

      <div className="mx-5 mt-5 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-5 shadow-sm dark:border-emerald-800 dark:from-gray-800 dark:to-gray-800">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500 dark:text-gray-400">

              Wellness Score

            </p>

            <h2 className="mt-2 text-3xl font-bold text-emerald-600">

              92%

            </h2>

          </div>

          <div className="rounded-2xl bg-emerald-500 p-4 text-2xl text-white">

            <FaHeart />

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="mt-8 flex-1 px-5 space-y-2">
              {menuItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) =>
            `group relative flex items-center justify-between overflow-hidden rounded-2xl px-4 py-4 transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-xl"
                : "text-gray-700 hover:bg-emerald-50 hover:shadow-md dark:text-gray-300 dark:hover:bg-gray-800"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Active Indicator */}

              {isActive && (
                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white"></div>
              )}

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-emerald-600 group-hover:scale-110 dark:bg-gray-700 dark:text-emerald-400"
                  }`}
                >
                  {item.icon}
                </div>

                <div>

                  <p className="font-semibold">
                    {item.label}
                  </p>

                  <p
                    className={`text-xs ${
                      isActive
                        ? "text-emerald-100"
                        : "text-gray-400"
                    }`}
                  >
                    Open
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                {item.label === "Analytics" && (
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                    New
                  </span>
                )}

                {item.label === "AI Companion" && (
                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                    AI
                  </span>
                )}

                {isActive && (
                  <div className="h-2 w-2 rounded-full bg-white shadow-md"></div>
                )}

              </div>
            </>
          )}
        </NavLink>
      ))}
    </nav>
          {/* Bottom Section */}

      <div className="border-t border-gray-200 dark:border-gray-700 p-5">

        {/* Mana AI Status */}

        <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-white shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-lg font-bold">

                🤖 Mana AI

              </p>

              <p className="mt-1 text-sm text-purple-100">

                Your Wellness Companion

              </p>

            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl backdrop-blur">

              🧠

            </div>

          </div>

          <div className="mt-5 flex items-center gap-2">

            <div className="h-3 w-3 animate-pulse rounded-full bg-green-300"></div>

            <span className="text-sm">

              Online & Ready to Help

            </span>

          </div>

        </div>

        {/* Quick Stats */}

        <div className="mt-5 rounded-3xl bg-gray-50 p-5 shadow-sm dark:bg-gray-800">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500 dark:text-gray-400">

                Today's Mood

              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">

                😊 Happy

              </h3>

            </div>

            <div className="rounded-2xl bg-yellow-100 p-3 text-2xl dark:bg-yellow-900">

              🌞

            </div>

          </div>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >

          <FaSignOutAlt />

          Logout

        </button>
                {/* Footer */}

        <div className="mt-8 rounded-3xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-5 text-center shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">

          <div className="mb-3 flex justify-center">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-xl shadow-lg">

              🌿

            </div>

          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white">

            ManaSetu

          </h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">

            AI Powered Mental Wellness Platform

          </p>

          <div className="mt-5 flex justify-center gap-2">

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
              React
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Firebase
            </span>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
              AI
            </span>

          </div>

          <div className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-700">

            <p className="text-xs text-gray-400 dark:text-gray-500">

              Version 2.0.0

            </p>

            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">

              Built with ❤️ using React & Firebase

            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;