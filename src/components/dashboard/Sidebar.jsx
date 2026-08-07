import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaSmile,
  FaBookOpen,
  FaChartLine,
  FaWind,
  FaComments,
  FaUserFriends,
  FaUserMd,
  FaCog,
  FaLeaf,
  FaTimes,
} from "react-icons/fa";

const mainNavigation = [
  { label: "Dashboard", icon: FaHome, to: "/dashboard" },
  { label: "Mood Check-in", icon: FaSmile, to: "/mood" },
  { label: "Journal", icon: FaBookOpen, to: "/journal" },
  { label: "Analytics", icon: FaChartLine, to: "/analytics" },
];

const wellnessNavigation = [
  { label: "Breathing", icon: FaWind, to: "/breathing" },
  { label: "Talk to Mana", icon: FaComments, to: "/chat" },
  { label: "Senior Buddy", icon: FaUserFriends, to: "/senior-buddy" },
  { label: "Counsellor", icon: FaUserMd, to: "/counselor" },
];

function Sidebar({ isOpen: controlledOpen, onClose: controlledClose }) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = typeof controlledOpen === "boolean";
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const closeSidebar = () => {
    if (controlledClose) {
      controlledClose();
    }

    setInternalOpen(false);
  };

  useEffect(() => {
    const handleOpenSidebar = () => {
      setInternalOpen(true);
    };

    window.addEventListener("open-sidebar", handleOpenSidebar);

    return () => {
      window.removeEventListener("open-sidebar", handleOpenSidebar);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-slate-200/80 bg-white/95 shadow-[15px_0_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition-transform duration-300 dark:border-white/5 dark:bg-[#0b1210]/95 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="flex h-[82px] shrink-0 items-center justify-between border-b border-slate-100 px-5 dark:border-white/5">
          <NavLink
            to="/dashboard"
            onClick={closeSidebar}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 transition duration-300 group-hover:scale-105">
              <FaLeaf className="text-lg" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                ManaSetu
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Your wellness space
              </p>
            </div>
          </NavLink>

          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/5 dark:hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <SidebarSection title="Workspace">
            {mainNavigation.map((item) => (
              <SidebarLink
                key={item.to}
                {...item}
                onClick={closeSidebar}
              />
            ))}
          </SidebarSection>

          <SidebarSection title="Support" className="mt-7">
            {wellnessNavigation.map((item) => (
              <SidebarLink
                key={item.to}
                {...item}
                onClick={closeSidebar}
              />
            ))}
          </SidebarSection>

          {/* Wellness reminder */}
          <div className="mt-8 overflow-hidden rounded-[24px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4 dark:border-emerald-900/30 dark:from-emerald-950/30 dark:via-white/[0.025] dark:to-teal-950/20">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm dark:bg-white/[0.06] dark:text-emerald-400">
              <FaLeaf />
            </div>

            <p className="text-sm font-semibold text-slate-800 dark:text-white">
              Take a gentle pause
            </p>

            <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
              You don't have to solve everything at once. One small moment of
              care is enough.
            </p>

            <NavLink
              to="/breathing"
              onClick={closeSidebar}
              className="mt-4 inline-flex text-xs font-semibold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
            >
              Take a breath
              <span className="ml-1.5">→</span>
            </NavLink>
          </div>
        </div>

        {/* Settings */}
        <div className="shrink-0 border-t border-slate-100 p-4 dark:border-white/5">
          <NavLink
            to="/settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              }`
            }
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500 dark:bg-white/5 dark:text-slate-400">
              <FaCog />
            </span>

            <span className="text-sm font-medium">Settings</span>
          </NavLink>

          <p className="mt-3 px-2 text-[10px] leading-4 text-slate-400">
            ManaSetu · A calmer space for your mind.
          </p>
        </div>
      </aside>
    </>
  );
}

function SidebarSection({ title, children, className = "" }) {
  return (
    <section className={className}>
      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
        {title}
      </p>

      <div className="space-y-1">{children}</div>
    </section>
  );
}

function SidebarLink({ label, icon: Icon, to, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-950/30 dark:text-emerald-300"
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.045] dark:hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-emerald-500" />
          )}

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-white text-emerald-600 shadow-sm dark:bg-white/10 dark:text-emerald-400"
                : "bg-slate-100/80 text-slate-400 group-hover:bg-white group-hover:text-slate-600 dark:bg-white/[0.035] dark:text-slate-500 dark:group-hover:bg-white/[0.06] dark:group-hover:text-slate-300"
            }`}
          >
            <Icon className="text-sm" />
          </span>

          <span className="truncate">{label}</span>

          <span
            className={`ml-auto text-xs transition-all duration-200 ${
              isActive
                ? "translate-x-0 text-emerald-500 opacity-100"
                : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
            }`}
          >
            →
          </span>
        </>
      )}
    </NavLink>
  );
}

export default Sidebar;