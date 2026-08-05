import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import QuickActions from "../components/dashboard/QuickActions";

import LoadingSpinner from "../components/LoadingSpinner";
import { getDashboardStats } from "../services/dashboardStatsService";
import MoodAnalyticsChart from "../components/dashboard/MoodAnalyticsChart";
import MoodDistributionChart from "../components/dashboard/MoodDistributionChart";
import WellnessHeatmap from "../components/dashboard/WellnessHeatmap";

import MoodHistory from "../components/dashboard/MoodHistory";
import RecentActivity from "../components/dashboard/RecentActivity";

import AIInsightCard from "../components/AIInsightCard";
import AIWorkflow from "../components/AIWorkflow";

import WellnessTimeline from "../components/WellnessTimeline";
import HabitTrackerCard from "../components/HabitTrackerCard";
import DailyChallengeCard from "../components/DailyChallengeCard";
import QuoteCard from "../components/dashboard/QuoteCard";
import MoodReminder from "../components/MoodReminder";
function Dashboard() {
const [stats, setStats] = useState({
  wellnessScore: 0,
  streak: 0,
  journalEntries: 0,
  currentMood: "Loading...",
  totalMoodEntries: 0,
});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadDashboard = async () => {
    try {
      const data = await getDashboardStats();

      setStats(data);

      setTimeout(() => {
        setLoading(false);
      }, 900);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  loadDashboard();
}, []);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-white
      to-emerald-50
      dark:from-gray-950
      dark:via-gray-900
      dark:to-black
      transition-all
      duration-500"
    >
      <Sidebar />

      <main className="lg:ml-72 px-6 py-8">

        <Topbar />

        {/* Hero */}

        <section className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-10 text-white shadow-2xl">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

                🌿 AI Powered Mental Wellness

              </span>

              <h1 className="mt-6 text-5xl font-extrabold">

                Welcome Back 👋

              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-100">

                Track your emotions, monitor your wellness,
                chat with Mana AI, build healthy habits,
                and visualize your progress through
                intelligent analytics.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

                <p className="text-sm text-emerald-100">
                  Wellness Score
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {stats.wellnessScore}%
                </h2>

              </div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

                <p className="text-sm text-emerald-100">
                  Mood Streak
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  🔥 {stats.streak}
                </h2>

              </div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

                <p className="text-sm text-emerald-100">
                  Journal Entries
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {stats.journalEntries}
                </h2>

              </div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

                <p className="text-sm text-emerald-100">
                  AI Sessions
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {stats.totalMoodEntries}
                </h2>

              </div>

            </div>

          </div>

        </section>

        {/* Dashboard Overview + Quick Actions */}

        <section className="mt-10 grid gap-8 xl:grid-cols-3">

          <div className="xl:col-span-2">

            <DashboardOverview stats={stats} />

          </div>

          <div>

            <QuickActions />

          </div>

        </section>
                {/* Analytics */}

        <section className="mt-12">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

                📊 Wellness Analytics

              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">

                Track your emotional wellness and AI-powered insights.

              </p>

            </div>

            <Link
              to="/analytics"
              className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              View Full Analytics →
            </Link>

          </div>

          <div className="grid gap-8 xl:grid-cols-2">

            <MoodAnalyticsChart />

            <MoodDistributionChart />

          </div>

          <div className="mt-8">

            <WellnessHeatmap />

          </div>

        </section>

        {/* AI Section */}

        <section className="mt-12">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

              🤖 AI Wellness Assistant

            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">

              Personalized recommendations generated from your wellness journey.

            </p>

          </div>

          <div className="grid gap-8 xl:grid-cols-2">

            <AIInsightCard />

            <AIWorkflow />

          </div>

        </section>
                {/* Wellness Hub */}

        <section className="mt-12">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

              🌿 Wellness Hub

            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">

              Stay consistent with healthy habits, monitor your progress, and
              keep your wellness journey on track.

            </p>

          </div>

          <div className="grid gap-8 xl:grid-cols-2">

            <MoodHistory />

            <WellnessTimeline />

          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-2">

            <HabitTrackerCard />

            <DailyChallengeCard />

          </div>

        </section>

        {/* Journal & Activity */}

        <section className="mt-12">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

              📖 Your Journey

            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">

              Review your recent activities and stay motivated every day.

            </p>

          </div>

          <div className="grid gap-8 xl:grid-cols-2">

            <RecentActivity />

            <QuoteCard />

          </div>

        </section>

        {/* Daily Reminder */}

        <section className="mt-12">

          <MoodReminder />

        </section>
                {/* Call to Action */}

        <section className="mt-12">

          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-10 text-white shadow-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

                  🌿 Daily Wellness

                </span>

                <h2 className="mt-5 text-4xl font-extrabold">

                  Every Small Step Matters

                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-100">

                  Build healthy habits, journal your thoughts,
                  monitor your emotions and let Mana AI guide
                  you towards a happier and healthier life.

                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <Link to="/journal">

                  <button className="rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition-all duration-300 hover:scale-105">

                    📖 Open Journal

                  </button>

                </Link>

                <Link to="/chat">

                  <button className="rounded-2xl border border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-emerald-700">

                    🤖 Chat with Mana AI

                  </button>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* Footer */}

        <footer className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">

                🌿 ManaSetu

              </h3>

              <p className="mt-2 text-gray-500 dark:text-gray-400">

                AI Powered Mental Wellness Platform

              </p>

            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">

              <Link
                to="/dashboard"
                className="hover:text-emerald-600"
              >
                Dashboard
              </Link>

              <Link
                to="/journal"
                className="hover:text-emerald-600"
              >
                Journal
              </Link>

              <Link
                to="/analytics"
                className="hover:text-emerald-600"
              >
                Analytics
              </Link>

              <Link
                to="/chat"
                className="hover:text-emerald-600"
              >
                AI Chat
              </Link>

            </div>

          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-700">

            <p className="text-gray-500 dark:text-gray-400">

              © {new Date().getFullYear()} ManaSetu • Built with ❤️ using React & Firebase

            </p>

          </div>

        </footer>

      </main>

    </div>
  );
}

export default Dashboard;