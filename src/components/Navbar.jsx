import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-green-600 dark:text-emerald-400"
          >
            🌿 ManaSetu
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">
            <li>
              <a
                href="#top"
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
              <button className="px-5 py-2 rounded-lg border border-green-600 dark:border-emerald-400 text-green-600 dark:text-emerald-400 hover:bg-green-50 dark:hover:bg-gray-800 transition">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-green-600 dark:text-emerald-400"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-6 animate-in fade-in duration-200">
            <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-gray-900 shadow-lg p-5 border border-gray-200 dark:border-gray-800">
              <a
                href="#top"
                onClick={closeMenu}
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Home
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                How It Works
              </a>

              <a
                href="#why-choose"
                onClick={closeMenu}
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Why Choose
              </a>

              <a
                href="#testimonials"
                onClick={closeMenu}
                className="hover:text-green-600 dark:hover:text-emerald-400 transition"
              >
                Testimonials
              </a>

              <div className="flex flex-col gap-3 mt-3">
                <Link to="/login" onClick={closeMenu}>
                  <button className="w-full py-3 rounded-lg border border-green-600 dark:border-emerald-400 text-green-600 dark:text-emerald-400 hover:bg-green-50 dark:hover:bg-gray-800 transition">
                    Login
                  </button>
                </Link>

                <Link to="/signup" onClick={closeMenu}>
                  <button className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white transition">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;