function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-md bg-white">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
        🌿 ManaSetu
      </h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li className="hover:text-green-600 cursor-pointer transition">Home</li>
        <li className="hover:text-green-600 cursor-pointer transition">Features</li>
        <li className="hover:text-green-600 cursor-pointer transition">Resources</li>
        <li className="hover:text-green-600 cursor-pointer transition">About</li>
      </ul>

      {/* Button */}
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
        Get Started
      </button>
    </nav>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-md bg-white dark:bg-gray-900 dark:shadow-gray-800 transition-colors duration-300">

      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-green-600 dark:text-emerald-400 tracking-wide">
        🌿 ManaSetu
      </h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-300">

        <li className="hover:text-green-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
          Home
        </li>

        <li className="hover:text-green-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
          Features
        </li>

        <li className="hover:text-green-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
          Resources
        </li>

        <li className="hover:text-green-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
          About
        </li>

      </ul>

      {/* Button */}
      <button className="bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition-colors">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;