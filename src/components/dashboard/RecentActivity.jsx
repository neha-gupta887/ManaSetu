import { useEffect, useState } from "react";
import {
  FaSmile,
  FaBookOpen,
} from "react-icons/fa";
import { getMoodHistory } from "../../services/moodService";
import { getJournalHistory } from "../../services/journalService";
import { formatDistanceToNow } from "date-fns";

function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const moodHistory = await getMoodHistory();
        const journalHistory = await getJournalHistory();

        const moodActivities = moodHistory.map((mood) => ({
          id: `mood-${mood.id}`,
          title: "Mood Check-in",
          description: `You logged a ${mood.mood} mood.`,
          time: mood.createdAt?.toDate
            ? formatDistanceToNow(mood.createdAt.toDate(), { addSuffix: true })
            : "Just now",
          icon: <FaSmile />,
          type: "Mood",
          date: mood.createdAt?.toDate() || new Date(),
        }));

        const journalActivities = journalHistory.map((journal) => ({
          id: `journal-${journal.id}`,
          title: "Journal Entry",
          description: journal.title || "You wrote a new journal entry.",
          time: journal.createdAt?.toDate
            ? formatDistanceToNow(journal.createdAt.toDate(), {
                addSuffix: true,
              })
            : "Just now",
          icon: <FaBookOpen />,
          type: "Journal",
          date: journal.createdAt?.toDate() || new Date(),
        }));

        const combinedActivities = [...moodActivities, ...journalActivities]
          .sort((a, b) => b.date - a.date)
          .slice(0, 5);

        setActivities(combinedActivities);
      } catch (error) {
        console.error("Error fetching recent activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="rounded-2xl bg-white p-6 dark:bg-slate-800">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
        Recent Activity
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Your recent check-ins and entries.
      </p>

      {loading && (
        <div className="mt-4 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex animate-pulse items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="flex-1 space-y-2">
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && activities.length === 0 && (
        <div className="mt-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 py-10 text-center dark:border-slate-700">
          <FaBookOpen className="text-4xl text-slate-400" />
          <p className="mt-4 font-semibold text-slate-600 dark:text-slate-300">
            No recent activity yet
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Your mood and journal entries will appear here.
          </p>
        </div>
      )}

      {!loading && activities.length > 0 && (
        <div className="mt-4 space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {activity.description}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentActivity;

