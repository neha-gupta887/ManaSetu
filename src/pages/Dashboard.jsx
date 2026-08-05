import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import MoodSection from "../components/dashboard/MoodSection";
import QuickActions from "../components/dashboard/QuickActions";
import QuoteCard from "../components/dashboard/QuoteCard";
import MoodHistory from "../components/dashboard/MoodHistory";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import RecentActivity from "../components/dashboard/RecentActivity";

import MoodReminder from "../components/MoodReminder";
import HabitTrackerCard from "../components/HabitTrackerCard";
import DailyChallengeCard from "../components/DailyChallengeCard";
import WellnessScoreCard from "../components/WellnessScoreCard";
import WellnessInsights from "../components/WellnessInsights";
import WellnessTimeline from "../components/WellnessTimeline";
import AIInsightCard from "../components/AIInsightCard";
import AIWorkflow from "../components/AIWorkflow";

import MoodAnalyticsChart from "../components/dashboard/MoodAnalyticsChart";
import MoodDistributionChart from "../components/dashboard/MoodDistributionChart";
import WellnessHeatmap from "../components/dashboard/WellnessHeatmap";

import LoadingSpinner from "../components/LoadingSpinner";

import { getDashboardStats } from "../services/dashboardStatsService";

function Dashboard() {
  const stats = getDashboardStats();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br
      from-emerald-50
      via-white
      to-cyan-50
      dark:from-gray-950
      dark:via-gray-900
      dark:to-black
      transition-all duration-500"
    >
      <Sidebar />

      <main className="lg:ml-72 px-5 sm:px-8 py-8">

        <Topbar />

        <div className="mt-8">

          <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            🌿 AI Powered Mental Wellness Platform
          </span>

          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            AI Wellness Dashboard
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Welcome back! Monitor your emotional wellbeing,
            mood history, AI insights, wellness score,
            daily habits and personalized recommendations
            in one intelligent dashboard.
          </p>

        </div>

        <div className="mt-10">
          <WelcomeCard />
        </div>

        <div className="mt-8">
          <WellnessScoreCard score={stats.wellnessScore} />
        </div>

        <div className="mt-8">
          <DashboardOverview stats={stats} />
        </div>
                {/* Quick Access */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Link
            to="/analytics"
            className="group rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-5xl">📊</div>

            <h3 className="mt-5 text-2xl font-bold">
              Mood Analytics
            </h3>

            <p className="mt-3 leading-7 text-green-100">
              Explore your emotional patterns,
              wellness score and AI-generated
              insights.
            </p>

            <div className="mt-6 font-semibold">
              Open Analytics →
            </div>

          </Link>

          <Link
            to="/command-center"
            className="group rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-5xl">🤖</div>

            <h3 className="mt-5 text-2xl font-bold">
              AI Command Center
            </h3>

            <p className="mt-3 leading-7 text-indigo-100">
              Watch your AI agents,
              workflows and recommendations
              in real time.
            </p>

            <div className="mt-6 font-semibold">
              Open AI Center →
            </div>

          </Link>

          <Link
            to="/support"
            className="group rounded-3xl bg-gradient-to-r from-red-600 to-pink-600 p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-5xl">🆘</div>

            <h3 className="mt-5 text-2xl font-bold">
              Support Center
            </h3>

            <p className="mt-3 leading-7 text-red-100">
              Connect with mentors,
              counselors and emergency
              wellness resources.
            </p>

            <div className="mt-6 font-semibold">
              Get Support →
            </div>

          </Link>

        </div>

        {/* Mood Reminder */}

        <div className="mt-8">
          <MoodReminder />
        </div>

        {/* Mood + Quick Actions */}

        <div className="grid xl:grid-cols-2 gap-8 mt-8">

          <MoodSection />

          <QuickActions />

        </div>

        {/* Wellness Insights */}

        <div className="grid xl:grid-cols-2 gap-8 mt-8">

          <WellnessInsights />

          <AIInsightCard />

        </div>

        {/* Mood History */}

        <div className="grid xl:grid-cols-2 gap-8 mt-8">

          <MoodHistory />

          <WellnessTimeline />

        </div>

        {/* Analytics Charts */}

        <div className="grid xl:grid-cols-2 gap-8 mt-8">

          <MoodAnalyticsChart />

          <MoodDistributionChart />

        </div>

        {/* Wellness Heatmap */}

        <div className="mt-8">

          <WellnessHeatmap />

        </div>
                {/* AI Workflow */}

        <div className="mt-8">

          <AIWorkflow />

        </div>

        {/* Recent Activity */}

        <div className="mt-8">

          <RecentActivity />

        </div>

        {/* Habit Tracker + Daily Challenge */}

        <div className="grid xl:grid-cols-2 gap-8 mt-8">

          <HabitTrackerCard />

          <DailyChallengeCard />

        </div>

        {/* Daily Quote */}

        <div className="mt-8">

          <QuoteCard />

        </div>

        {/* Motivation Banner */}

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 text-white shadow-2xl">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <div>

              <h2 className="text-3xl font-bold">
                🌿 Keep Building Healthy Habits
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-green-100">

                Every mood you track, every journal entry you
                write, and every healthy habit you complete
                helps Mana AI understand you better and
                deliver smarter wellness recommendations.

              </p>

            </div>

            <Link to="/analytics">

              <button className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl transition-all duration-300 hover:scale-105">

                📊 View Full Analytics

              </button>

            </Link>

          </div>

        </div>

        {/* Footer */}

        <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-gray-500 dark:text-gray-400">

              © {new Date().getFullYear()} ManaSetu • AI Powered Mental Wellness Platform

            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">

              <span>🌿 Wellness</span>

              <span>🤖 AI Companion</span>

              <span>📈 Analytics</span>

              <span>💚 Self Care</span>

            </div>

          </div>

        </footer>

      </main>

    </div>
  );
}

export default Dashboard;