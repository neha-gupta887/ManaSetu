import { Menu } from "lucide-react";

function NewTopbar({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden dark:bg-gray-800 dark:border-gray-700">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden dark:text-gray-300"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 text-lg font-semibold text-gray-900 dark:text-white">
        Dashboard
      </div>
    </header>
  );
}

export default NewTopbar;

