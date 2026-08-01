import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import WellnessScoreCard from "../components/WellnessScoreCard";
import { getDashboardStats } from "../services/dashboardStatsService";

import LoadingSpinner from "../components/LoadingSpinner";
import StatCard from "../components/ui/StatCard";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import MoodSection from "../components/dashboard/MoodSection";
import QuickActions from "../components/dashboard/QuickActions";
import QuoteCard from "../components/dashboard/QuoteCard";
import MoodHistory from "../components/dashboard/MoodHistory";
import MoodReminder from "../components/MoodReminder";
import HabitTrackerCard from "../components/HabitTrackerCard";
import DailyChallengeCard from "../components/DailyChallengeCard";

function Dashboard() {
  const stats = getDashboardStats();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
    return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-72 p-4 sm:p-6 lg:p-8">

        {/* Topbar */}
        <Topbar />

        {/* Welcome Card */}
        <div className="mt-8">
          <WelcomeCard />
        </div>

        {/* AI Wellness Score */}
        <div className="mt-6">
          <WellnessScoreCard score={82} />
        </div>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatCard
            title="Wellness Score"
            value={`${stats.wellnessScore}%`}
            icon="🌿"
            color="emerald"
          />

          <StatCard
            title="Current Streak"
            value={`${stats.streak} Days`}
            icon="🔥"
            color="yellow"
          />

          <StatCard
            title="Journal Entries"
            value={stats.journalEntries}
            icon="📖"
            color="blue"
          />

          <StatCard
            title="Current Mood"
            value={stats.currentMood}
            icon="😊"
            color="purple"
          />
        </div>

        {/* Daily Mood Reminder */}
        <div className="mt-6">
          <MoodReminder />
        </div>

        {/* Mood Section */}
        <div className="mt-6">
          <MoodSection />
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <QuickActions />
        </div>

        {/* Analytics & Support */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <Link
            to="/analytics"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-2xl font-semibold text-lg transition"
          >
            📊 View Mood Analytics
          </Link>

          <Link
            to="/support"
            className="bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-2xl font-semibold text-lg transition"
          >
            🆘 Support Center
          </Link>

        </div>

        {/* Quote */}
        <div className="mt-6">
          <QuoteCard />
        </div>

        {/* Mood History */}
        <div className="mt-6">
          <MoodHistory />
        </div>

        {/* Habit Tracker */}
        <div className="mt-6">
          <HabitTrackerCard />
        </div>

        {/* Daily Wellness Challenge */}
        <div className="mt-6 mb-10">
          <DailyChallengeCard />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;