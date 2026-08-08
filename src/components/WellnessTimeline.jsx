import { useEffect, useState } from "react";
import { getMoodHistory } from "../services/moodService";
import GlassCard from "./ui/GlassCard";
import { format } from "date-fns";

function WellnessTimeline() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const moodHistory = await getMoodHistory(5); // Get last 5 entries
        setHistory(moodHistory);
      } catch (error) {
        console.error("Error fetching wellness timeline:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (loading) {
    return (
      <GlassCard>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-950/30">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
          </div>
          <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
            Loading timeline...
          </p>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
          Your progress
        </p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Wellness Timeline
        </h2>
      </div>
      {history.length === 0 ? (
        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Your mood check-ins will appear here.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-3 transition-all hover:bg-white dark:border-slate-800 dark:bg-white/[0.025] dark:hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl shadow-sm dark:bg-slate-800">
                  {item.emoji}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {item.mood}
                  </p>
                  <p className="text-xs text-slate-400">
                    {item.createdAt?.toDate
                      ? format(item.createdAt.toDate(), "do MMM, h:mm a")
                      : "Just now"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}

export default WellnessTimeline;

/*
        {history.map((item) => (

          <div
            key={item.day}
            className="flex justify-between border-b pb-3 dark:border-gray-700"
          >
            <div>

              <p className="font-semibold dark:text-white">
                {item.day}
              </p>

              <p className="text-gray-500">
                {item.mood}
              </p>

            </div>

            <div className="text-xl font-bold text-green-600">
              {item.score}
            </div>

          </div>

        ))}
*/