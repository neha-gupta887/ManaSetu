import { useState } from "react";
import { habits as initialHabits } from "../services/habitService";

function HabitTrackerCard() {
  const [habits, setHabits] = useState(initialHabits);

  const updateProgress = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              progress:
                habit.progress < habit.target
                  ? habit.progress + 1
                  : habit.progress,
            }
          : habit
      )
    );
  };

  const totalProgress = habits.reduce(
    (sum, habit) => sum + (habit.progress / habit.target) * 100,
    0
  );

  const overallProgress = Math.round(totalProgress / habits.length);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mt-10 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
        🌿 Daily Habit Tracker
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Build healthy habits every day.
      </p>

      <div className="space-y-6 mt-8">
        {habits.map((habit) => (
          <div key={habit.id}>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800 dark:text-white">
                {habit.title}
              </span>

              <span className="text-gray-600 dark:text-gray-300">
                {habit.progress}/{habit.target} {habit.unit}
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-emerald-500 h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${(habit.progress / habit.target) * 100}%`,
                }}
              />
            </div>

            <button
              onClick={() => updateProgress(habit.id)}
              className="mt-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
            >
              + Update
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-bold text-lg text-gray-800 dark:text-white">
          Today's Wellness Progress
        </h3>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 mt-3">
          <div
            className="bg-green-500 h-5 rounded-full"
            style={{
              width: `${overallProgress}%`,
            }}
          />
        </div>

        <p className="text-center mt-3 text-2xl font-bold text-green-600 dark:text-emerald-400">
          {overallProgress}%
        </p>
      </div>
    </div>
  );
}

export default HabitTrackerCard;