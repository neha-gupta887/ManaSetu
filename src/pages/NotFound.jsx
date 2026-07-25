import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-50 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 transition-colors duration-300">
      
      <h1 className="text-7xl font-bold text-emerald-600">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4 text-gray-900 dark:text-white">
        Page Not Found
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mt-3 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
      >
        ⬅ Back to Dashboard
      </Link>

    </div>
  );
}

export default NotFound;