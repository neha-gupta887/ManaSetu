import {
  Bell,
  BookOpen,
  Bot,
  CircleUserRound,
  Home,
  LogOut,
  Settings,
  Shield,
  BarChart,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AnimatePresence, motion } from "framer-motion";

const NavLink = ({ to, icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
        isActive
          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-50"
          : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
      }`}
    >
      {icon}
      {children}
    </Link>
  );
};

const SidebarContent = ({ user, logout }) => (
  <>
    <div className="flex items-center gap-3">
      <Link to="/dashboard">
        <img src="/favicon.svg" alt="ManaSetu Logo" className="h-8 w-8" />
      </Link>
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
        ManaSetu
      </h1>
    </div>

    <nav className="mt-10 flex flex-1 flex-col justify-between">
      <div className="space-y-2">
        <p className="px-3 text-xs font-semibold uppercase text-slate-400">
          Menu
        </p>
        <NavLink to="/dashboard" icon={<Home size={20} />}>
          Dashboard
        </NavLink>
        <NavLink to="/journal" icon={<BookOpen size={20} />}>
          Journal
        </NavLink>
        <NavLink to="/analytics" icon={<BarChart size={20} />}>
          Analytics
        </NavLink>
        <NavLink to="/chat" icon={<Bot size={20} />}>
          AI Companion
        </NavLink>
      </div>

      <div className="space-y-2">
        <p className="px-3 text-xs font-semibold uppercase text-slate-400">
          Support
        </p>
        <NavLink to="/support" icon={<Shield size={20} />}>
          Support Resources
        </NavLink>
        <NavLink to="/notifications" icon={<Bell size={20} />}>
          Notifications
        </NavLink>
        <NavLink to="/settings" icon={<Settings size={20} />}>
          Settings
        </NavLink>
      </div>
    </nav>

    <div className="mt-auto">
      <div className="flex items-center gap-3">
        <CircleUserRound size={40} className="text-slate-400" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-800 dark:text-white">
            {user?.displayName || "Student"}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {user?.email}
          </p>
        </div>
      </div>
      <button
        onClick={logout}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  </>
);

function NewSidebar({ sidebarOpen, setSidebarOpen }) {
  const { user, logout } = useAuth();

  return (
    <>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black/30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 z-40 flex h-screen w-72 flex-col border-r border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-[#0b1110] lg:hidden"
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute right-4 top-4 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              >
                <X size={24} />
              </button>
              <SidebarContent user={user} logout={logout} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden h-screen w-72 flex-col border-r border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-[#0b1110] lg:flex">
        <SidebarContent user={user} logout={logout} />
      </aside>
    </>
  );
}

export default NewSidebar;

