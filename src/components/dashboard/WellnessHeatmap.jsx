import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

import { getMoodHistory } from "../../services/moodService";

function WellnessHeatmap() {
  const today = new Date();

  const [values, setValues] = useState([]);

  useEffect(() => {
    const loadHeatmap = async () => {
      const moods = await getMoodHistory();

      const activityMap = {};

      moods.forEach((mood) => {
        if (!mood.createdAt?.toDate) return;

        const date = mood.createdAt
          .toDate()
          .toISOString()
          .split("T")[0];

        activityMap[date] =
          (activityMap[date] || 0) + 1;
      });

      const heatmapData = Object.keys(activityMap).map(
        (date) => ({
          date,
          count: activityMap[date],
        })
      );

      setValues(heatmapData);
    };

    loadHeatmap();
  }, []);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        🔥 Wellness Activity
      </h2>

      <CalendarHeatmap
        startDate={
          new Date(
            today.getFullYear(),
            today.getMonth() - 3,
            today.getDate()
          )
        }
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) return "color-empty";

          if (value.count >= 4) return "color-github-4";
          if (value.count >= 3) return "color-github-3";
          if (value.count >= 2) return "color-github-2";

          return "color-github-1";
        }}
        showWeekdayLabels
      />

      <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">

        <span>Less</span>

        <div className="h-4 w-4 rounded bg-gray-200"></div>

        <div className="h-4 w-4 rounded bg-green-200"></div>

        <div className="h-4 w-4 rounded bg-green-400"></div>

        <div className="h-4 w-4 rounded bg-green-600"></div>

        <div className="h-4 w-4 rounded bg-green-800"></div>

        <span>More</span>

      </div>

    </div>
  );
}

export default WellnessHeatmap;