import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
    const { user } = useAuth();
  const location = useLocation();

  if (user === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9f7] text-sm font-medium text-slate-500 dark:bg-[#0b1110] dark:text-slate-400">
        Loading your wellness space...
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace state={{ from: location }} />;
}

export default ProtectedRoute;
