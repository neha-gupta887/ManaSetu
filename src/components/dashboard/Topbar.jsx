import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";

function Topbar() {
  return (
    <header className="bg-white shadow-md rounded-2xl px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl text-gray-700 hover:text-green-600 transition">
          <FaBars />
        </button>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Take a moment to care for your mind today.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="relative text-2xl text-gray-600 hover:text-green-600 transition">
          <FaBell />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl sm:text-5xl text-green-600" />

          <div className="hidden sm:block">
            <h3 className="font-semibold text-gray-800">
              Student
            </h3>

            <p className="text-sm text-gray-500">
              Welcome to ManaSetu
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;