import { useEffect, useState } from "react";
import { getMoodHistory } from "../../services/moodService";
import useAuth from "../../hooks/useAuth";

function MoodHistory() {
  const user = useAuth();

  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === undefined) return;

    if (!user) {
      setLoading(false);
      return;
    }

    const fetchMoods = async () => {
      const data = await getMoodHistory();
      setMoods(data);
      setLoading(false);
    };

    fetchMoods();
  }, [user]);

  if (loading) {
    return (
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition-colors duration-300">
        <p className="text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        📅 Mood History
      </h2>

      {moods.length === 0 ? (
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          No moods recorded yet.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {moods.map((mood) => (
            <div
              key={mood.id}
              className="flex justify-between items-center border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{mood.emoji}</span>

                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {mood.mood}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {mood.email}
                  </p>
                </div>
              </div>

              <span className="text-sm text-gray-400 dark:text-gray-500">
                {mood.createdAt?.toDate
                  ? mood.createdAt.toDate().toLocaleString()
                  : "Just now"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MoodHistory;