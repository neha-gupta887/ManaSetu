function QuoteCard() {
  return (
    <div className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-900 rounded-2xl p-6 text-white shadow-lg transition-colors duration-300">
      <h2 className="text-2xl font-bold">
        🌟 Daily Inspiration
      </h2>

      <p className="mt-4 text-lg italic text-purple-50 dark:text-gray-100">
        "You don't have to control your thoughts. You just have to stop letting
        them control you."
      </p>

      <p className="mt-3 text-purple-100 dark:text-gray-300">
        — Dan Millman
      </p>
    </div>
  );
}

export default QuoteCard;