import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-green-600 dark:text-emerald-400 tracking-wide"
          >
            🌿 ManaSetu
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">

            <li>
              <a
                href="#"
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#how-it-works"
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                How It Works
              </a>
            </li>

            <li>
              <a
                href="#why-choose"
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Why Choose
              </a>
            </li>

            <li>
              <a
                href="#testimonials"
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Testimonials
              </a>
            </li>

          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            <Link to="/login">
              <button className="px-5 py-2 rounded-lg border border-green-600 text-green-600 hover:bg-green-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-gray-800 transition">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition">
                Get Started
              </button>
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-green-600 dark:text-emerald-400"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-6">

            <ul className="flex flex-col gap-5 text-gray-700 dark:text-gray-300">

              <li>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>

              <li>
                <a href="#features" onClick={() => setMenuOpen(false)}>
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
                  How It Works
                </a>
              </li>

              <li>
                <a href="#why-choose" onClick={() => setMenuOpen(false)}>
                  Why Choose
                </a>
              </li>

              <li>
                <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                  Testimonials
                </a>
              </li>

              <Link to="/login">
                <button className="w-full border border-green-600 text-green-600 dark:border-emerald-400 dark:text-emerald-400 rounded-lg py-2">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="w-full bg-green-600 text-white rounded-lg py-2">
                  Get Started
                </button>
              </Link>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;