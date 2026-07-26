import {
  FaLock,
  FaRobot,
  FaLeaf,
  FaUserGraduate,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";

function WhyChoose() {
  const benefits = [
    {
      icon: <FaLock />,
      title: "Privacy First",
      description:
        "Your personal wellness data is securely stored and protected with complete privacy.",
    },
    {
      icon: <FaRobot />,
      title: "AI-Powered Guidance",
      description:
        "Receive personalized wellness suggestions and supportive conversations from our AI companion.",
    },
    {
      icon: <FaLeaf />,
      title: "Personalized Wellness",
      description:
        "Daily mood tracking, breathing exercises, and mindful activities tailored just for you.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Built for Students",
      description:
        "Designed specifically to help university students manage stress, academics, and personal growth.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Mentor & Buddy Support",
      description:
        "Connect with mentors and senior buddies whenever you need guidance or encouragement.",
    },
    {
      icon: <FaChartLine />,
      title: "Track Your Progress",
      description:
        "Visualize your mood trends and celebrate every milestone in your mental wellness journey.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block px-5 py-2 bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
            💚 Why Choose ManaSetu
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            More Than Just
            <span className="text-green-600 dark:text-emerald-400">
              {" "}
              a Mental Wellness App
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">
            ManaSetu combines technology, AI, and human support to create a
            safe, personalized, and empowering experience for every student.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center text-2xl shadow-lg">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                {benefit.description}
              </p>

              <div className="mt-8 w-16 h-1 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;