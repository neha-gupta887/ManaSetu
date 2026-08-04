import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function DailyGoals() {
  const goals = [
    {
      id: 1,
      title: "Complete Mood Check-in",
      completed: true,
    },
    {
      id: 2,
      title: "Meditate for 10 Minutes",
      completed: true,
    },
    {
      id: 3,
      title: "Write Today's Journal",
      completed: false,
    },
    {
      id: 4,
      title: "Drink 8 Glasses of Water",
      completed: false,
    },
  ];

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🎯 Today's Goals
        </h2>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          {completedGoals}/{goals.length}
        </span>

      </div>

      <div className="mt-6 space-y-5">

        {goals.map((goal) => (

          <div
            key={goal.id}
            className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800"
          >

            {goal.completed ? (
              <FaCheckCircle className="text-emerald-500 text-xl" />
            ) : (
              <FaRegCircle className="text-gray-400 text-xl" />
            )}

            <span
              className={`font-medium ${
                goal.completed
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {goal.title}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DailyGoals;