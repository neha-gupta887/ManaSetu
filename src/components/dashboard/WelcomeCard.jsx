function WelcomeCard() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-emerald-700 dark:to-green-900 text-white rounded-2xl p-8 shadow-lg transition-colors duration-300">
      <h2 className="text-3xl font-bold">
        Welcome to ManaSetu 🌿
      </h2>

      <p className="mt-3 text-green-100 dark:text-gray-200 max-w-2xl">
        Every small step toward understanding your emotions is a step toward a
        healthier and happier life. Take a deep breath and begin today's
        wellness journey.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <button className="bg-white text-green-600 dark:bg-gray-800 dark:text-emerald-400 px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          Start Mood Check
        </button>

        <button className="border border-white dark:border-gray-300 px-5 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 dark:hover:bg-gray-800 dark:hover:text-white transition">
          Explore Resources
        </button>
      </div>
    </div>
  );
}

export default WelcomeCard;