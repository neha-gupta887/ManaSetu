import { useState } from "react";
import NewSidebar from "./NewSidebar";
import NewTopbar from "./NewTopbar";

function AuthenticatedLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f6faf7] text-slate-900 transition-colors duration-500 dark:bg-[#0b1110] dark:text-white">
      <NewSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:pl-72">
        <NewTopbar setSidebarOpen={setSidebarOpen} />

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default AuthenticatedLayout;


