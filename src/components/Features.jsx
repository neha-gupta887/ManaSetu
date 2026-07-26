import {
  FaSmile,
  FaRobot,
  FaLeaf,
  FaBookOpen,
  FaHandsHelping,
  FaBook,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      title: "Mood Tracker",
      icon: <FaSmile />,
      description: "Track your daily emotions and visualize your mood journey.",
    },
    {
      title: "AI Companion",
      icon: <FaRobot />,
      description: "Get instant emotional support and wellness guidance.",
    },
    {
      title: "Breathing Exercises",
      icon: <FaLeaf />,
      description: "Reduce stress with guided breathing and mindfulness sessions.",
    },
    {
      title: "Daily Journal",
      icon: <FaBookOpen />,
      description: "Write your thoughts and reflect on your day.",
    },
    {
      title: "Mentor Connect",
      icon: <FaHandsHelping />,
      description: "Reach out to mentors whenever you need support.",
    },
    {
      title: "Resource Library",
      icon: <FaBook />,
      description: "Access curated articles, videos, and wellness resources.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Our Features
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Everything You Need for
            <span className="text-green-600 dark:text-emerald-400">
              {" "}
              Better Mental Wellness
            </span>
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-7 text-base sm:text-lg">
            ManaSetu brings together powerful tools to help students stay
            emotionally healthy, connected, and supported throughout their
            academic journey.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-emerald-900/40 text-green-600 dark:text-emerald-400 flex items-center justify-center text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;