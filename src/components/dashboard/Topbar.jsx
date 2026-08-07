import {
  FaBell,
  FaSearch,
  FaSun,
  FaMoon,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

function Topbar() {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    );
  };

  const userName =
    localStorage.getItem("userName") ||
    localStorage.getItem("name") ||
    "User";

  const firstName = userName.split(" ")[0];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#F5F8F5]/85 backdrop-blur-xl dark:border-white/5 dark:bg-[#09100E]/85">
      <div className="mx-auto flex h-[78px] max-w-[1500px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Mobile menu trigger */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 lg:hidden"
          aria-label="Open navigation"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-sidebar"));
          }}
        >
          <span className="flex flex-col gap-1">
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-3 rounded-full bg-current" />
          </span>
        </button>

        {/* Mobile title */}
        <div className="min-w-0 lg:hidden">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            ManaSetu
          </p>
          <p className="truncate text-[10px] text-slate-400">
            Your wellness space
          </p>
        </div>

        {/* Search */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />

          <input
            type="search"
            placeholder="Search your wellness space..."
            className="h-11 w-full rounded-2xl border border-slate-200/80 bg-white/80 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-500/5 dark:border-white/10 dark:bg-white/[0.035] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-800"
          />
        </div>

        {/* Right controls */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Desktop greeting */}
          <div className="hidden text-right xl:block">
            <p className="text-xs text-slate-400">Welcome back</p>
            <p className="text-sm font-semibold text-slate-800 dark:text-white">
              {firstName}
            </p>
          </div>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-emerald-200 hover:text-emerald-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300 dark:hover:border-emerald-900 dark:hover:text-emerald-400"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? (
              <FaSun className="text-sm transition-transform duration-300 group-hover:rotate-45" />
            ) : (
              <FaMoon className="text-sm transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-emerald-200 hover:text-emerald-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300 dark:hover:border-emerald-900 dark:hover:text-emerald-400"
            aria-label="Notifications"
            title="Notifications"
          >
            <FaBell className="text-sm transition-transform duration-200 group-hover:-rotate-6" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-emerald-500 dark:border-[#09100E]" />
          </button>

          {/* Profile */}
          <button
            type="button"
            className="group flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 py-1.5 transition-all duration-200 hover:border-emerald-200 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-emerald-900/60 sm:px-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm">
              <FaUserCircle className="text-base" />
            </div>

            <div className="hidden text-left sm:block">
              <p className="max-w-[100px] truncate text-xs font-semibold text-slate-800 dark:text-white">
                {firstName}
              </p>

              <p className="text-[10px] text-slate-400">
                Wellness journey
              </p>
            </div>

            <FaChevronDown className="hidden text-[9px] text-slate-400 transition-transform duration-200 group-hover:translate-y-0.5 sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;