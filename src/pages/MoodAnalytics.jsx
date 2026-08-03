import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import WellnessPlanCard from "../components/WellnessPlanCard";
import MoodForecastCard from "../components/MoodForecastCard";
import MoodCalendar from "../components/MoodCalendar";
import AchievementsCard from "../components/AchievementsCard";
import AIInsightsCard from "../components/AIInsightsCard";
import AIRiskCard from "../components/AIRiskCard";

import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getMoodAnalytics } from "../services/analyticsService";
import { downloadWellnessReport } from "../services/pdfService";

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

function StatsCard({
  title,
  value,
  emoji,
  trend = "+4%",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white shadow-xl p-6"
    >
      <div className="flex justify-between items-center">

        <div>

          <div className="text-4xl">
            {emoji}
          </div>

          <h3 className="mt-4 text-gray-500 dark:text-gray-400">
            {title}
          </h3>

          <p className="mt-2 text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {value}
          </p>

        </div>

        <div className="rounded-full bg-green-100 dark:bg-green-900 px-3 py-1 text-sm font-semibold text-green-700 dark:text-green-300">
          📈 {trend}
        </div>

      </div>

      <div className="mt-6 h-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
        />

      </div>

    </motion.div>
  );
}

function MoodAnalytics() {
  const [analytics, setAnalytics] = useState({
    totalEntries: 0,
    currentMood: "Loading...",
    mostFrequentMood: "Loading...",
    moodDistribution: [],
    weeklyTrend: [],
    streak: 0,
    wellnessScore: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnalytics = async () => {
      const data = await getMoodAnalytics();

      setAnalytics(data);

      setLoading(false);
    };

    loadAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">

        <motion.h1
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="text-4xl font-bold text-emerald-600"
        >
          Loading Analytics...
        </motion.h1>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-8">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 p-10 text-white shadow-2xl">

          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10">

            <h1 className="text-5xl font-extrabold">

              📊 Wellness Analytics

            </h1>

            <p className="mt-4 text-lg text-green-100">

              AI-powered insights generated from your
              mood history and wellness journey.

            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

                <p className="text-green-100">
                  Wellness Score
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  {analytics.wellnessScore}%
                </h2>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

                <p className="text-green-100">
                  AI Confidence
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  94%
                </h2>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

                <p className="text-green-100">
                  Mood Entries
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  {analytics.totalEntries}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Download */}

        <div className="flex justify-center mt-8">

          <button
            onClick={() =>
              downloadWellnessReport(analytics)
            }
            className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 transition-all"
          >
            📥 Download Wellness Report
          </button>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <StatsCard
            title="Current Mood"
            value={analytics.currentMood}
            emoji="😊"
          />

          <StatsCard
            title="Mood Streak"
            value={`${analytics.streak} Days`}
            emoji="🔥"
          />

          <StatsCard
            title="Entries"
            value={analytics.totalEntries}
            emoji="📖"
          />

          <StatsCard
            title="Most Frequent"
            value={analytics.mostFrequentMood}
            emoji="⭐"
          />

        </div>

        {/* Charts */}
                {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {/* Weekly Mood Trend */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl p-8"
          >

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  📈 Weekly Mood Trend
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Your emotional journey over the last 7 days
                </p>

              </div>

              <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                Live
              </div>

            </div>

            <ResponsiveContainer width="100%" height={340}>

              <LineChart data={analytics.weeklyTrend}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="day" />

                <YAxis domain={[1, 5]} />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="#10B981"
                  strokeWidth={5}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </motion.div>

          {/* Mood Distribution */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl p-8"
          >

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  🥧 Mood Distribution
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Emotion frequency analysis
                </p>

              </div>

            </div>

            {analytics.moodDistribution.length > 0 ? (

              <ResponsiveContainer width="100%" height={340}>

                <PieChart>

                  <Pie
                    data={analytics.moodDistribution}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={110}
                    innerRadius={55}
                    label
                  >

                    {analytics.moodDistribution.map(
                      (entry, index) => (
                        <Cell
                          key={entry.name}
                          fill={
                            COLORS[index % COLORS.length]
                          }
                        />
                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            ) : (

              <div className="flex items-center justify-center h-80 text-gray-500">

                No mood data available.

              </div>

            )}

          </motion.div>

        </div>

        {/* Mood Summary */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl p-8 mt-10"
        >

          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">

            📋 Mood Summary

          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">

            Overview of your recorded emotions.

          </p>

          {analytics.moodDistribution.length > 0 ? (

            <div className="mt-8 space-y-5">

              {analytics.moodDistribution.map(
                (item, index) => (

                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-5"
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className="w-5 h-5 rounded-full"
                        style={{
                          backgroundColor:
                            COLORS[
                              index % COLORS.length
                            ],
                        }}
                      />

                      <span className="font-semibold text-gray-700 dark:text-white">

                        {item.name}

                      </span>

                    </div>

                    <span className="text-xl font-bold text-emerald-600">

                      {item.value}

                    </span>

                  </div>

                )
              )}

            </div>

          ) : (

            <div className="text-center py-12 text-gray-500">

              Start tracking your mood to unlock
              personalized analytics.

            </div>

          )}

        </motion.div>

        {/* AI Wellness Insights */}

        <AIInsightsCard analytics={analytics} />
                {/* Wellness Score */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mt-10"
        >
          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                🌿 Overall Wellness Score
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Calculated using your mood, activity and AI analysis.
              </p>

            </div>

            <div className="text-5xl font-extrabold text-emerald-600">
              {analytics.wellnessScore}%
            </div>

          </div>

          <div className="mt-8 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${analytics.wellnessScore}%`,
              }}
              transition={{
                duration: 1.5,
              }}
              className="h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"
            />

          </div>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">

            {analytics.wellnessScore >= 80 &&
              "🌟 Excellent! You're maintaining a healthy lifestyle. Keep it up!"}

            {analytics.wellnessScore >= 60 &&
              analytics.wellnessScore < 80 &&
              "💚 Good progress! Continue journaling and practicing mindfulness."}

            {analytics.wellnessScore >= 40 &&
              analytics.wellnessScore < 60 &&
              "😊 Your wellbeing is moderate. Small daily habits can make a big difference."}

            {analytics.wellnessScore < 40 &&
              "⚠️ Your recent trends suggest you may need additional self-care and support."}

          </p>

        </motion.div>

        {/* Personalized Wellness Plan */}

        <div className="mt-10">
          <WellnessPlanCard
            wellnessScore={analytics.wellnessScore}
          />
        </div>

        {/* Mood Forecast */}

        <div className="mt-10">
          <MoodForecastCard
            wellnessScore={analytics.wellnessScore}
          />
        </div>

        {/* AI Risk */}

        <div className="mt-10">
          <AIRiskCard />
        </div>

        {/* Achievements */}

        <div className="mt-10">
          <AchievementsCard analytics={analytics} />
        </div>

        {/* Calendar */}

        <div className="mt-10">
          <MoodCalendar />
        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 p-10 text-center text-white shadow-2xl"
        >

          <h2 className="text-3xl font-bold">
            🤖 Powered by Mana AI
          </h2>

          <p className="mt-4 text-green-100 text-lg max-w-3xl mx-auto">

            Your wellness insights are generated using
            AI-powered mood analysis, behavioral trends,
            and personalized recommendations.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6">

              <h3 className="text-4xl font-bold">
                94%
              </h3>

              <p className="mt-2 text-green-100">
                AI Confidence
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6">

              <h3 className="text-4xl font-bold">
                24/7
              </h3>

              <p className="mt-2 text-green-100">
                Wellness Support
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6">

              <h3 className="text-4xl font-bold">
                🔒
              </h3>

              <p className="mt-2 text-green-100">
                Secure & Private
              </p>

            </div>

          </div>

          <p className="mt-10 text-green-100 text-sm">

            ManaSetu • AI Powered Mental Wellness Platform

          </p>

        </motion.div>

      </div>

    </div>
  );
}

export default MoodAnalytics;