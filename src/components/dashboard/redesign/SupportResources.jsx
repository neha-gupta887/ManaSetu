import { LifeBuoy, Phone, Users } from "lucide-react";
import { Link } from "react-router-dom";

function SupportResources() {
  return (
    <div className="rounded-2xl bg-white p-6 dark:bg-slate-800">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
        Need Help?
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        You are not alone. Support is available.
      </p>
      <div className="mt-4 space-y-3">
        <Link
          to="/support"
          className="flex items-center gap-3 rounded-lg bg-red-50 p-3 text-red-700 transition hover:bg-red-100 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-900"
        >
          <LifeBuoy size={20} />
          <span className="font-semibold">Emergency Contacts</span>
        </Link>
        <Link
          to="/support"
          className="flex items-center gap-3 rounded-lg bg-blue-50 p-3 text-blue-700 transition hover:bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-900"
        >
          <Phone size={20} />
          <span className="font-semibold">University Counseling</span>
        </Link>
        <Link
          to="/support"
          className="flex items-center gap-3 rounded-lg bg-green-50 p-3 text-green-700 transition hover:bg-green-100 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900"
        >
          <Users size={20} />
          <span className="font-semibold">Peer Support Groups</span>
        </Link>
      </div>
    </div>
  );
}

export default SupportResources;
