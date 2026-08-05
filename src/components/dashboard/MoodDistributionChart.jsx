import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const moodData = [
  { name: "Happy 😊", value: 8 },
  { name: "Neutral 😐", value: 4 },
  { name: "Sad 😢", value: 2 },
  { name: "Angry 😡", value: 1 },
  { name: "Tired 😴", value: 3 },
];

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

function MoodDistributionChart() {
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
                  key={index}
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