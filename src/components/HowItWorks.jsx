import {
  FaUserPlus,
  FaSmile,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaUserPlus />,
      title: "Create Your Account",
      description:
        "Sign up securely and create your personalized ManaSetu profile in just a few clicks.",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "02",
      icon: <FaSmile />,
      title: "Track Your Mood",
      description:
        "Log your daily emotions and let Mana AI understand your mental wellbeing.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "03",
      icon: <FaRobot />,
      title: "AI Wellness Analysis",
      description:
        "Our intelligent AI agents analyze your wellbeing and generate personalized recommendations.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      icon: <FaChartLine />,
      title: "Improve Every Day",
      description:
        "Track progress through analytics, wellness score, burnout prediction and AI insights.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 scroll-mt-20"
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

            🚀 How ManaSetu Works

          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">

            Your Wellness Journey

            <br />

            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">

              In Four Simple Steps

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">

            ManaSetu combines Agentic AI with mental wellness tools to provide
            students with personalized guidance, emotional support and long-term
            wellbeing tracking.

          </p>

        </motion.div>

        {/* Steps */}
                <div className="relative mt-20">

          {/* Desktop Timeline */}

          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative">

            {steps.map((step, index) => (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="relative group"
              >

                {/* Timeline Dot */}

                <div className="hidden lg:flex absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-lg z-20"></div>

                {/* Card */}

                <div className="rounded-[32px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">

                  {/* Gradient Header */}

                  <div
                    className={`h-2 bg-gradient-to-r ${step.color}`}
                  ></div>

                  <div className="p-8">

                    {/* Step */}

                    <div className="flex items-center justify-between">

                      <div
                        className={`w-18 h-18 rounded-3xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-3xl shadow-lg`}
                      >
                        {step.icon}
                      </div>

                      <span className="text-5xl font-black text-gray-100 dark:text-gray-700">

                        {step.number}

                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">

                      {step.title}

                    </h3>

                    {/* Description */}

                    <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">

                      {step.description}

                    </p>

                    {/* Bottom */}

                    <div className="mt-8 flex items-center justify-between">

                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">

                        Step {step.number}

                      </span>

                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg group-hover:translate-x-1 transition-all duration-300`}
                      >
                        →
                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-[36px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl lg:text-5xl font-extrabold">

              Your Journey Starts Today 🌿

            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-green-100 leading-8">

              From your very first mood check-in to personalized AI wellness
              recommendations and long-term progress tracking, ManaSetu is here
              to support you every step of the way.

            </p>

            <div className="mt-10">

              <button className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl hover:scale-105 transition-all duration-300">

                🚀 Begin Your Journey

              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HowItWorks;