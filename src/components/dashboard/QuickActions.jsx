import { FaRobot, FaBookOpen, FaLeaf, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "AI Companion",
    description: "Chat with your wellness assistant.",
    path: "/ai-companion",
    icon: <FaRobot className="text-3xl text-green-600" />,
  },
  {
    title: "Journal",
    description: "Write your daily thoughts and feelings.",
    path: "/journal",
    icon: <FaBookOpen className="text-3xl text-blue-600" />,
  },
  {
    title: "Meditation",
    description: "Practice guided breathing and relaxation.",
    path: "/breathing",
    icon: <FaLeaf className="text-3xl text-emerald-600" />,
  },
  {
    title: "Mood History",
    description: "View your mood trends over time.",
    path: "/analytics",
    icon: <FaChartBar className="text-3xl text-purple-600" />,
  },
];

function QuickActions() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.path}
            className="block bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {action.icon}

            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              {action.title}
            </h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;