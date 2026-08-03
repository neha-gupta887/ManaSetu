import {
  FaLock,
  FaRobot,
  FaLeaf,
  FaUserGraduate,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

function WhyChoose() {
  const benefits = [
    {
      icon: <FaLock />,
      title: "Privacy First",
      description:
        "Your wellness data remains encrypted, secure, and completely private.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaRobot />,
      title: "Agentic AI",
      description:
        "Multiple AI agents collaborate to provide personalized wellness support.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaLeaf />,
      title: "Personalized Wellness",
      description:
        "Recommendations adapt to your mood, habits, and wellness goals.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FaUserGraduate />,
      title: "Built for Students",
      description:
        "Designed specifically for university students balancing academics and wellbeing.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaHandsHelping />,
      title: "Human Support",
      description:
        "Connect with mentors, buddies, and counselors whenever you need guidance.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaChartLine />,
      title: "AI Analytics",
      description:
        "Track your emotional progress using AI-powered wellness insights.",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-emerald-50 to-green-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 scroll-mt-20"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-green-300/20 blur-[120px]"></div>

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-300/20 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-200 dark:border-gray-700 px-5 py-2 font-semibold text-emerald-700 dark:text-emerald-300 shadow">

            💚 Why Choose ManaSetu

          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">

            More Than Just

            <br />

            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">

              A Wellness Platform

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">

            ManaSetu combines Agentic AI, human support, and wellness science
            to help students build healthier habits and improve emotional wellbeing.

          </p>

        </motion.div>

        {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {benefits.map((benefit, index) => (

            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[30px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500"
            >

              {/* Gradient Glow */}

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${benefit.color} transition-all duration-500`}
              />

              <div className="relative p-8">

                {/* Icon */}

                <div
                  className={`w-18 h-18 rounded-3xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white text-3xl shadow-lg`}
                >
                  {benefit.icon}
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">

                  {benefit.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">

                  {benefit.description}

                </p>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">

                    Trusted Feature

                  </span>

                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white shadow-lg group-hover:translate-x-1 transition-all duration-300`}
                  >
                    ✓
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Trust Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-[36px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-12 text-white shadow-2xl">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

              <div>

                <h2 className="text-5xl font-extrabold">
                  10K+
                </h2>

                <p className="mt-3 text-green-100">
                  Students Supported
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-extrabold">
                  98%
                </h2>

                <p className="mt-3 text-green-100">
                  AI Accuracy
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-extrabold">
                  24×7
                </h2>

                <p className="mt-3 text-green-100">
                  AI Support
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-extrabold">
                  🔒
                </h2>

                <p className="mt-3 text-green-100">
                  Privacy Protected
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default WhyChoose;