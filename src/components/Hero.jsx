function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 min-h-[85vh] flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Section */}
        <div>
          <span className="inline-block bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
            🌿 ManaSetu – Student Mental Wellness Platform
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Welcome to
            <br />
            <span className="text-green-600 dark:text-emerald-400">
              ManaSetu
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8 max-w-xl">
            ManaSetu helps students strengthen their mental well-being through
            mood tracking, AI-powered guidance, mindfulness practices, and
            meaningful support from mentors—all in one safe and trusted platform.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
              Get Started
            </button>

            <button className="border-2 border-green-600 dark:border-emerald-400 text-green-600 dark:text-emerald-400 hover:bg-green-50 dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition duration-300">
              Explore Features
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-12 flex gap-12 flex-wrap">

            <div>
              <h2 className="text-3xl font-bold text-green-600 dark:text-emerald-400">
                10K+
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Students Supported
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-600 dark:text-emerald-400">
                500+
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Expert Mentors
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-600 dark:text-emerald-400">
                24/7
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                AI Assistance
              </p>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">

          {/* Mood Tracker */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-5">

            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-emerald-900/40 flex items-center justify-center text-3xl">
              😊
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Mood Tracker
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Log your emotions and understand your daily mood patterns.
              </p>
            </div>

          </div>

          {/* AI Companion */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-5">

            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-emerald-900/40 flex items-center justify-center text-3xl">
              🤖
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                AI Wellness Companion

                <span className="bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-300 text-xs px-2 py-1 rounded-full">
                  AI
                </span>
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Chat with an AI companion for guidance and emotional support.
              </p>
            </div>

          </div>

          {/* Wellness Tip */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-5">

            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-emerald-900/40 flex items-center justify-center text-3xl">
              💚
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Daily Wellness Tip
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 italic">
                "A peaceful mind is the strongest bridge to a better life."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;