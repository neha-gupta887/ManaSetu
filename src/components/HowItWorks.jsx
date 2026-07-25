import {
  FaUserPlus,
  FaSmile,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaUserPlus />,
      title: "Create Your Account",
      description:
        "Sign up and create your personal ManaSetu profile in just a few clicks.",
    },
    {
      number: "02",
      icon: <FaSmile />,
      title: "Daily Mood Check-In",
      description:
        "Record how you're feeling each day and build healthy self-awareness.",
    },
    {
      number: "03",
      icon: <FaRobot />,
      title: "Get AI Wellness Support",
      description:
        "Chat with our AI companion for guidance, mindfulness, and motivation.",
    },
    {
      number: "04",
      icon: <FaChartLine />,
      title: "Track Your Progress",
      description:
        "View your mood trends, celebrate milestones, and improve your mental wellness over time.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-300 px-5 py-2 rounded-full text-sm font-semibold">
            🚀 How It Works
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Start Your Wellness Journey
            <span className="text-green-600 dark:text-emerald-400">
              {" "}
              in 4 Simple Steps
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-8">
            ManaSetu guides you step by step toward better mental well-being
            with a simple, supportive, and personalized experience.
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Step Number */}
              <div className="absolute top-5 right-5 text-5xl font-bold text-green-100 dark:text-gray-700">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center text-2xl shadow-lg">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-8 w-16 h-1 bg-green-500 rounded-full"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;