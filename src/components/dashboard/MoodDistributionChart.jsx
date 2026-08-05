import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { getMoodHistory } from "../../services/moodService";

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
];

function MoodDistributionChart() {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const loadMoodDistribution = async () => {
      const moods = await getMoodHistory();

      const moodCount = {};

      moods.forEach((mood) => {
        const key = `${mood.mood} ${mood.emoji}`;

        moodCount[key] = (moodCount[key] || 0) + 1;
      });

      const chartData = Object.keys(moodCount).map((key) => ({
        name: key,
        value: moodCount[key],
      }));

      setMoodData(chartData);
    };

    loadMoodDistribution();
  }, []);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        🥧 Mood Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={moodData}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {moodData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default MoodDistributionChart;