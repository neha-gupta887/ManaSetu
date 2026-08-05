import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", score: 4 },
  { day: "Tue", score: 3 },
  { day: "Wed", score: 5 },
  { day: "Thu", score: 2 },
  { day: "Fri", score: 4 },
  { day: "Sat", score: 5 },
  { day: "Sun", score: 4 },
];

function MoodAnalyticsChart() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">

      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        📈 Weekly Mood Trend
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

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