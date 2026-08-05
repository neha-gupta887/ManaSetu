import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getMoodHistory } from "../../services/moodService";

const moodScore = {
  Happy: 5,
  Calm: 4,
  Neutral: 3,
  Sad: 2,
  Angry: 1,
};

function MoodAnalyticsChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadMoodData = async () => {
      const moods = await getMoodHistory();

      const weeklyData = moods
        .slice(0, 7)
        .reverse()
        .map((mood) => ({
          day: mood.createdAt?.toDate
            ? mood.createdAt.toDate().toLocaleDateString("en-IN", {
                weekday: "short",
              })
            : "Today",
          score: moodScore[mood.mood] || 3,
        }));

      setChartData(weeklyData);
    };

    loadMoodData();
  }, []);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        📈 Weekly Mood Trend
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis domain={[0, 5]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#10b981"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default MoodAnalyticsChart;