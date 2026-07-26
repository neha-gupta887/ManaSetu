import {
  FaBell,
  FaUserCircle,
  FaBars,
  FaSearch,
} from "react-icons/fa";

function Topbar() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-3xl px-4 sm:px-6 lg:px-8 py-5 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition">
            <FaBars />
          </button>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              {greeting} 👋
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {today} • Take care of your mind today.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-2 w-72">
            <FaSearch className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-gray-700 dark:text-white placeholder-gray-400"
            />
          </div>

          {/* Notifications */}
          <button className="relative w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900 transition">
            <FaBell className="text-xl text-gray-700 dark:text-gray-200" />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-2 hover:shadow-md transition">
            <FaUserCircle className="text-4xl text-emerald-600 dark:text-emerald-400" />

            <div className="hidden sm:block">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Student
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                ManaSetu User
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Topbar;