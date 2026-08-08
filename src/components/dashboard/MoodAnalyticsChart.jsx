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
  Stressed: 1,
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
    <section className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:p-7 dark:border-white/[0.06] dark:bg-white/[0.025]">

      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            Mood insights
          </p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Your mood this week
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            A gentle look at how you've been feeling recently.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 dark:border-white/[0.06] dark:bg-white/[0.04] dark:text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Last 7 check-ins
        </div>

      </div>

      {/* Chart */}
      <div className="mt-7 h-72 w-full">

        {chartData.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-slate-50/70 dark:bg-white/[0.02]">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl dark:bg-emerald-950/30">
              🌿
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Your mood journey starts here
            </p>

            <p className="mt-1 max-w-xs text-center text-xs leading-5 text-slate-400">
              Check in with yourself to start building your personal mood
              history.
            </p>

          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 5,
              }}
            >

              <CartesianGrid
                strokeDasharray="4 6"
                vertical={false}
                stroke="rgba(148, 163, 184, 0.16)"
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94a3b8",
                  fontSize: 11,
                }}
                dy={10}
              />

              <YAxis
                domain={[0, 5]}
                ticks={[1, 2, 3, 4, 5]}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94a3b8",
                  fontSize: 10,
                }}
                tickFormatter={(value) => {
                  const labels = {
                    1: "Angry",
                    2: "Sad",
                    3: "Neutral",
                    4: "Calm",
                    5: "Happy",
                  };

                  return labels[value];
                }}
                width={58}
              />

              <Tooltip
                cursor={{
                  stroke: "rgba(16, 185, 129, 0.18)",
                  strokeWidth: 1,
                }}
                contentStyle={{
                  borderRadius: "14px",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  background: "rgba(255, 255, 255, 0.96)",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                  padding: "10px 12px",
                }}
              />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#10b981"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#ffffff",
                  stroke: "#10b981",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "#10b981",
                  stroke: "#ffffff",
                  strokeWidth: 3,
                }}
              />

            </LineChart>
          </ResponsiveContainer>
        )}

      </div>
    </section>
  );
}

export default MoodAnalyticsChart;