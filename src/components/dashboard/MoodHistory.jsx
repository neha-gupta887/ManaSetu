import { useEffect, useState } from "react";
import { FaSyncAlt, FaHistory } from "react-icons/fa";

import { getMoodHistory } from "../../services/moodService";
import useAuth from "../../hooks/useAuth";

function MoodHistory() {
  const user = useAuth();

  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMoods = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const data = await getMoodHistory();
      setMoods(data);
    } catch (error) {
      console.error("Failed to load mood history:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user === undefined) return;

    fetchMoods();
  }, [user]);

  if (loading) {
    return (
      <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

        <div className="flex flex-col items-center justify-center py-12">

          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Loading your mood history...
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 dark:bg-gray-900">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">

            <FaHistory className="text-emerald-600" />

            Mood History

          </h2>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Track your emotional journey over time.
          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">

            Total Entries: {moods.length}

          </div>

          <button
            onClick={fetchMoods}
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700"
          >
            <FaSyncAlt />

            Refresh

          </button>

        </div>

      </div>
            {/* Mood List */}

      {moods.length === 0 ? (

        <div className="py-16 text-center">

          <div className="text-7xl">
            😊
          </div>

          <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
            No Mood History Yet
          </h3>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Start tracking your mood to build your emotional wellness timeline.
          </p>

        </div>

      ) : (

        <div className="mt-8 max-h-[500px] space-y-4 overflow-y-auto pr-2">

          {moods.map((mood) => (

            <div
              key={mood.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 md:flex-row md:items-center md:justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-3xl dark:bg-emerald-900/40">

                  {mood.emoji}

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

                    {mood.mood}

                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">

                    {mood.email}

                  </p>

                </div>

              </div>

              <div className="text-right">

                <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">

                  {mood.createdAt?.toDate
                    ? mood.createdAt.toDate().toLocaleString()
                    : "Just now"}

                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MoodHistory;