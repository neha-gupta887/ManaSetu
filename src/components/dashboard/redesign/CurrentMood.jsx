import { useEffect, useState } from "react";
import { getMoodHistory } from "../../../services/moodService";
import { formatDistanceToNow } from "date-fns";
import { TrendingUp } from "lucide-react";

function CurrentMood() {
  const [latestMood, setLatestMood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestMood = async () => {
      try {
        const moodHistory = await getMoodHistory(1);
        if (moodHistory.length > 0) {
          setLatestMood(moodHistory[0]);
        }
      } catch (error) {
        console.error("Error fetching latest mood:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestMood();
  }, []);

  if (loading) {
    return (
      <div className="flex h-24 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
        <p className="text-sm text-slate-500">Loading mood...</p>
      </div>
    );
  }

  if (!latestMood) {
    return (
      <div className="flex h-24 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
        <p className="text-sm text-slate-500">No mood checked in yet.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Current Mood
          </p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">
            {latestMood.mood}
          </p>
        </div>
        <div className="text-4xl">{latestMood.emoji}</div>
      </div>
      <p className="mt-2 text-xs text-slate-400">
        {`Checked in ${formatDistanceToNow(latestMood.createdAt.toDate(), {
          addSuffix: true,
        })}`}
      </p>
    </div>
  );
}

export default CurrentMood;
