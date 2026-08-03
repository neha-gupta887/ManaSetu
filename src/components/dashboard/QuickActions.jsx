import {
  FaRobot,
  FaBookOpen,
  FaLeaf,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const actions = [
  {
    title: "AI Companion",
    description: "Talk with Mana AI and receive personalized wellness guidance.",
    path: "/ai-companion",
    icon: "🤖",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Smart Journal",
    description: "Write your thoughts and let AI understand your emotions.",
    path: "/journal",
    icon: "📖",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Meditation",
    description: "Relax your mind with breathing and mindfulness exercises.",
    path: "/breathing",
    icon: "🧘",
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Analytics",
    description: "View mood trends, wellness insights and AI reports.",
    path: "/analytics",
    icon: "📊",
    color: "from-purple-500 to-pink-600",
  },
];

function QuickActions() {
  return (
    <div className="mt-10">

      {/* Heading */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            🚀 Quick Actions
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Access your most-used wellness tools instantly.
          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((action, index) => (

          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            <Link
              to={action.path}
              className="relative overflow-hidden block rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full"
            >

              {/* Glow */}

              <div
                className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-r ${action.color} opacity-20 blur-3xl`}
              ></div>

              <div className="relative z-10">

                {/* Icon */}

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center text-3xl shadow-lg`}
                >
                  {action.icon}
                </div>

                {/* Title */}

                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                  {action.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {action.description}
                </p>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm font-semibold text-emerald-600">
                    Open
                  </span>

                  <FaArrowRight className="text-emerald-600 group-hover:translate-x-1 transition-transform" />

                </div>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;