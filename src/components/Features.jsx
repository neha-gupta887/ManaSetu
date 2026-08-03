import {
  FaSmile,
  FaRobot,
  FaLeaf,
  FaBookOpen,
  FaHandsHelping,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      title: "Mood Tracker",
      icon: <FaSmile />,
      description:
        "Track your daily emotions and visualize your mood journey with intelligent insights.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "AI Companion",
      icon: <FaRobot />,
      description:
        "Talk with Mana AI for personalized emotional support and wellness guidance.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Breathing Exercises",
      icon: <FaLeaf />,
      description:
        "Reduce stress using guided breathing and mindfulness exercises.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Daily Journal",
      icon: <FaBookOpen />,
      description:
        "Reflect on your thoughts and let AI understand your emotional wellbeing.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mentor Connect",
      icon: <FaHandsHelping />,
      description:
        "Reach experienced mentors whenever you need guidance and support.",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Resource Library",
      icon: <FaBook />,
      description:
        "Discover articles, videos and wellness resources curated by experts.",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-emerald-50 to-green-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 scroll-mt-20"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-[120px]"></div>

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

            ✨ Powerful Features

          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">

            Everything You Need

            <br />

            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">

              For Better Mental Wellness

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">

            ManaSetu combines Agentic AI, mood tracking,
            personalized wellness plans, AI memory,
            analytics and emotional support into one
            intelligent student wellbeing platform.

          </p>

        </motion.div>

        {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[30px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500"
            >

              {/* Gradient Glow */}

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-all duration-500`}
              />

              {/* Card Content */}

              <div className="relative p-8">

                {/* Icon */}

                <div
                  className={`w-18 h-18 rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-3xl shadow-lg`}
                >
                  {feature.icon}
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">

                  {feature.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">

                  {feature.description}

                </p>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">

                    Learn More

                  </span>

                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:translate-x-1 transition-all duration-300`}
                  >
                    →
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24"
        >

          <div className="rounded-[36px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white p-10 lg:p-14 shadow-2xl">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <h2 className="text-4xl lg:text-5xl font-extrabold">

                  Ready to Start Your Wellness Journey?

                </h2>

                <p className="mt-6 text-lg text-green-100 leading-8">

                  Join thousands of students who use ManaSetu to improve their mental wellbeing with the help of AI-powered guidance, personalized wellness plans, and smart emotional insights.

                </p>

              </div>

              <div className="flex justify-center lg:justify-end">

                <Link to="/signup">

                  <button className="rounded-2xl bg-white text-emerald-700 px-8 py-4 text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300">

                    🚀 Get Started Free

                  </button>

                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Features;