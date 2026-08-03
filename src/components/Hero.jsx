import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-teal-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[120px]"></div>

      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-green-300/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Section */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-emerald-200 dark:border-gray-700 px-5 py-2 shadow-lg">

            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

            <span className="font-semibold text-emerald-700 dark:text-emerald-300">

              AI Powered Student Wellness

            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">

            Your Personal

            <br />

            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">

              AI Wellness

            </span>

            <br />

            Companion

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">

            ManaSetu combines Agentic AI, mood tracking,
            personalized wellness planning, AI memory,
            burnout prediction and emotional support into
            one intelligent platform built especially for
            university students.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Link to="/signup">

              <button className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 font-semibold text-white shadow-xl hover:-translate-y-1 hover:shadow-emerald-300 transition-all duration-300">

                🚀 Get Started

              </button>

            </Link>

            <a href="#features">

              <button className="rounded-2xl border border-emerald-500 px-8 py-4 font-semibold text-emerald-600 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all">

                ✨ Explore Features

              </button>

            </a>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>

              <h2 className="text-4xl font-extrabold text-emerald-600">

                10K+

              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">

                Students

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-extrabold text-emerald-600">

                98%

              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">

                AI Accuracy

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-extrabold text-emerald-600">

                24×7

              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">

                AI Support

              </p>

            </div>

          </div>

        </motion.div>

        {/* Right Section */}
                <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Main AI Card */}

          <div className="rounded-[32px] bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-white dark:border-gray-700 shadow-2xl p-8">

            {/* Header */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center text-3xl shadow-lg">

                  🤖

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">

                    Mana AI

                  </h2>

                  <div className="flex items-center gap-2 mt-1">

                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">

                      Online

                    </span>

                  </div>

                </div>

              </div>

              <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 px-3 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">

                AI Ready

              </div>

            </div>

            {/* AI Summary */}

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6">

              <p className="text-green-100">

                Today's Wellness Score

              </p>

              <h3 className="text-5xl font-extrabold mt-3">

                92%

              </h3>

              <p className="mt-3">

                Excellent Progress 🎉

              </p>

            </div>

            {/* Feature Cards */}

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-5">

                <div className="text-3xl">

                  😊

                </div>

                <h3 className="font-bold mt-3 text-gray-900 dark:text-white">

                  Mood

                </h3>

                <p className="text-green-600 font-semibold mt-2">

                  Happy

                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-5">

                <div className="text-3xl">

                  😴

                </div>

                <h3 className="font-bold mt-3 text-gray-900 dark:text-white">

                  Sleep

                </h3>

                <p className="text-blue-600 font-semibold mt-2">

                  Good

                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-5">

                <div className="text-3xl">

                  📚

                </div>

                <h3 className="font-bold mt-3 text-gray-900 dark:text-white">

                  Focus

                </h3>

                <p className="text-purple-600 font-semibold mt-2">

                  High

                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-5">

                <div className="text-3xl">

                  🔥

                </div>

                <h3 className="font-bold mt-3 text-gray-900 dark:text-white">

                  Burnout

                </h3>

                <p className="text-emerald-600 font-semibold mt-2">

                  Low

                </p>

              </div>

            </div>

            {/* AI Tips */}

            <div className="mt-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 p-5">

              <h3 className="font-bold text-lg text-gray-900 dark:text-white">

                🤖 Mana AI Suggests

              </h3>

              <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">

                <li>✅ Drink enough water today</li>

                <li>✅ Practice 10 minutes of mindfulness</li>

                <li>✅ Complete one journal entry</li>

                <li>✅ Take a short walk between study sessions</li>

              </ul>

            </div>

          </div>

          {/* Floating Card */}

          <div className="hidden lg:block absolute -left-14 top-12 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl p-5">

            <p className="text-sm text-gray-500 dark:text-gray-400">

              AI Confidence

            </p>

            <h3 className="text-4xl font-extrabold text-emerald-600 mt-2">

              98%

            </h3>

          </div>

          {/* Floating Card */}

          <div className="hidden lg:block absolute -right-10 bottom-10 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl p-5">

            <p className="text-sm text-gray-500 dark:text-gray-400">

              Active Agents

            </p>

            <h3 className="text-4xl font-extrabold text-green-600 mt-2">

              6

            </h3>

          </div>

        </motion.div>
                {/* Floating Background Elements */}

        <motion.div
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="hidden xl:flex absolute -top-10 -right-10 w-24 h-24 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 items-center justify-center text-4xl shadow-2xl"
        >
          🌿
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="hidden xl:flex absolute bottom-0 left-0 w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 items-center justify-center text-3xl shadow-xl"
        >
          😊
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
          className="hidden xl:flex absolute top-1/2 -right-16 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center text-3xl shadow-xl"
        >
          🧠
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;