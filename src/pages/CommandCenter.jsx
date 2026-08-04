import { motion } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaHeartbeat,
  FaMoon,
  FaBookOpen,
  FaShieldAlt,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

const agents = [
  {
    name: "Mood Agent",
    icon: <FaHeartbeat />,
    status: "Running",
    confidence: "98%",
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Sleep Agent",
    icon: <FaMoon />,
    status: "Running",
    confidence: "96%",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Study Agent",
    icon: <FaBookOpen />,
    status: "Running",
    confidence: "95%",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Crisis Agent",
    icon: <FaShieldAlt />,
    status: "Safe",
    confidence: "99%",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Planner Agent",
    icon: <FaTasks />,
    status: "Completed",
    confidence: "97%",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Analytics Agent",
    icon: <FaChartLine />,
    status: "Running",
    confidence: "94%",
    color: "from-indigo-500 to-violet-500",
  },
];

function CommandCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 font-semibold text-emerald-700 dark:text-emerald-300">

            <FaBrain />

            AI Multi-Agent System

          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">

            AI Command Center

          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 leading-8">

            Monitor every AI agent working behind ManaSetu.
            Each specialized agent analyzes different aspects
            of student wellbeing to generate personalized
            recommendations.

          </p>

        </motion.div>

        {/* Agent Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

          {agents.map((agent, index) => (

            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[30px] bg-white dark:bg-gray-800 shadow-xl overflow-hidden"
            >

              <div
                className={`bg-gradient-to-r ${agent.color} p-6 text-white`}
              >

                <div className="flex items-center justify-between">

                  <div className="text-4xl">

                    {agent.icon}

                  </div>

                  <span className="flex items-center gap-2">

                    <span className="w-3 h-3 rounded-full bg-green-300 animate-pulse"></span>

                    {agent.status}

                  </span>

                </div>

                <h2 className="mt-6 text-2xl font-bold">

                  {agent.name}

                </h2>

              </div>

              <div className="p-6">

                <h3 className="text-gray-500 dark:text-gray-400">

                  Confidence

                </h3>

                <p className="mt-2 text-4xl font-bold text-emerald-600">

                  {agent.confidence}

                </p>

              </div>

            </motion.div>

          ))}

        </div>
                {/* AI Decision Panel */}

        <div className="grid xl:grid-cols-2 gap-8 mt-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[30px] bg-white dark:bg-gray-800 shadow-xl p-8"
          >

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

              🧠 AI Decision Engine

            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">

              After analyzing your mood, sleep quality,
              study patterns and wellbeing history,
              Mana AI generated the following summary.

            </p>

            <div className="space-y-5 mt-8">

              <div className="flex justify-between">

                <span className="font-medium">

                  😊 Current Mood

                </span>

                <span className="font-bold text-emerald-600">

                  Happy

                </span>

              </div>

              <div className="flex justify-between">

                <span className="font-medium">

                  💚 Wellness Score

                </span>

                <span className="font-bold text-green-600">

                  91%

                </span>

              </div>

              <div className="flex justify-between">

                <span className="font-medium">

                  😴 Sleep Quality

                </span>

                <span className="font-bold text-blue-600">

                  Good

                </span>

              </div>

              <div className="flex justify-between">

                <span className="font-medium">

                  🚨 Burnout Risk

                </span>

                <span className="font-bold text-red-500">

                  Low

                </span>

              </div>

            </div>

          </motion.div>

          {/* Today's Wellness Plan */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[30px] bg-white dark:bg-gray-800 shadow-xl p-8"
          >

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

              🎯 Today's Wellness Plan

            </h2>

            <div className="space-y-4 mt-8">

              {[
                "Drink 2 Litres of Water",
                "Journal Your Feelings",
                "Meditate for 10 Minutes",
                "Take a 20 Minute Walk",
                "Sleep Before 11 PM",
              ].map((task) => (

                <div
                  key={task}
                  className="flex items-center gap-4 rounded-2xl bg-emerald-50 dark:bg-gray-700 p-4"
                >

                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">

                    ✓

                  </div>

                  <span className="text-gray-700 dark:text-gray-200">

                    {task}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* System Performance */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6 text-center">

            <h3 className="text-gray-500">

              AI Accuracy

            </h3>

            <p className="mt-4 text-4xl font-bold text-emerald-600">

              98%

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6 text-center">

            <h3 className="text-gray-500">

              Decisions

            </h3>

            <p className="mt-4 text-4xl font-bold text-indigo-600">

              245

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6 text-center">

            <h3 className="text-gray-500">

              Tasks Generated

            </h3>

            <p className="mt-4 text-4xl font-bold text-purple-600">

              612

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6 text-center">

            <h3 className="text-gray-500">

              Active Agents

            </h3>

            <p className="mt-4 text-4xl font-bold text-orange-600">

              6

            </p>

          </div>

        </div>
                {/* Live Activity + Workflow */}

        <div className="grid xl:grid-cols-2 gap-8 mt-10">

          {/* Live Activity */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[30px] bg-white dark:bg-gray-800 shadow-xl p-8"
          >

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

              ⚡ Live AI Activity

            </h2>

            <div className="mt-8 space-y-5">

              {[
                "Mood Agent analyzed today's emotion.",
                "Sleep Agent detected improved sleep quality.",
                "Study Agent updated focus score.",
                "Planner Agent generated wellness tasks.",
                "Analytics Agent refreshed dashboard.",
              ].map((activity, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 border-l-4 border-emerald-500 pl-4"
                >

                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-2 animate-pulse"></div>

                  <div>

                    <p className="font-medium text-gray-800 dark:text-gray-200">

                      {activity}

                    </p>

                    <p className="text-sm text-gray-500 mt-1">

                      Just now

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Workflow */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-[30px] bg-white dark:bg-gray-800 shadow-xl p-8"
          >

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

              🔄 AI Workflow

            </h2>

            <div className="mt-8 space-y-6">

              {[
                "Mood Analysis",
                "Sleep Evaluation",
                "Study Analysis",
                "Burnout Detection",
                "Wellness Planning",
                "Final Recommendation",
              ].map((step, index) => (

                <div
                  key={step}
                  className="flex items-center gap-4"
                >

                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white flex items-center justify-center font-bold">

                    {index + 1}

                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-gray-800 dark:text-white">

                      {step}

                    </p>

                    <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">

                      <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 w-full"></div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* System Status */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-10 rounded-[32px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-10 text-white shadow-2xl"
        >

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>

              <h2 className="text-4xl font-bold">

                🌿 Mana AI System Status

              </h2>

              <p className="mt-4 max-w-3xl text-green-100 leading-8">

                All AI agents are running successfully.
                The multi-agent system is continuously
                analyzing wellness data to provide
                personalized recommendations and
                improve your mental wellbeing.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="text-center">

                <p className="text-5xl font-extrabold">

                  100%

                </p>

                <p className="text-green-100 mt-2">

                  System Health

                </p>

              </div>

              <div className="text-center">

                <p className="text-5xl font-extrabold">

                  6

                </p>

                <p className="text-green-100 mt-2">

                  Active Agents

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );
}

export default CommandCenter;