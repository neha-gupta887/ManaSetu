import { useEffect, useState } from "react";
import { getMoodHistory } from "../services/moodService";
import { shouldShowReminder } from "../services/reminderService";

function MoodReminder() {
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const checkReminder = async () => {
      const moods = await getMoodHistory();
      setShowReminder(shouldShowReminder(moods));
    };

    checkReminder();
  }, []);

  if (!showReminder) return null;

  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-2xl p-5 mb-6 shadow transition-colors duration-300">
      <h2 className="text-lg font-bold text-yellow-800 dark:text-yellow-200">
        🔔 Daily Mood Reminder
      </h2>

      <p className="mt-2 text-yellow-700 dark:text-yellow-300">
        You haven't logged your mood today. Take a moment to record how you're
        feeling.
      </p>
    </div>
  );
}

export default MoodReminder;