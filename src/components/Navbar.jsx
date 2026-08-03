import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Choose", href: "#why-choose" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">

              🌿

            </div>

            <div>

              <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">

                ManaSetu

              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">

                AI Wellness Platform

              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <ul className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  className="relative font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <Link to="/login">

              <button className="rounded-xl border border-emerald-500 px-6 py-2.5 font-semibold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-gray-800 transition">

                Login

              </button>

            </Link>

            <Link to="/signup">

              <button className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-2.5 font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-emerald-300 transition-all">

                Get Started

              </button>

            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-emerald-600"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
                {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden pb-6"
          >
            <div className="rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-gray-200 dark:border-gray-700 shadow-2xl p-6">

              {/* Navigation */}

              <div className="space-y-2">

                {navItems.map((item) => (

                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >

                    <span className="font-medium">
                      {item.name}
                    </span>

                    <span className="text-emerald-500">
                      →
                    </span>

                  </a>

                ))}

              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-gray-200 dark:bg-gray-700"></div>

              {/* AI Status */}

              <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 p-5 text-white">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-bold">
                      Mana AI
                    </h3>

                    <p className="text-sm text-green-100 mt-1">
                      Ready to support you 24×7
                    </p>

                  </div>

                  <div className="w-3 h-3 rounded-full bg-green-300 animate-pulse"></div>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-6 space-y-3">

                <Link
                  to="/login"
                  onClick={closeMenu}
                >
                  <button className="w-full rounded-2xl border border-emerald-500 py-3 font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all">

                    Login

                  </button>
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                >
                  <button className="w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 font-semibold text-white shadow-lg hover:shadow-emerald-300 transition-all duration-300">

                    🚀 Get Started

                  </button>
                </Link>

              </div>

            </div>

          </motion.div>
        )}

      </div>

    </motion.nav>
  );
}

export default Navbar;