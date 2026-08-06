import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import QuickActions from "../components/dashboard/QuickActions";

import MoodAnalyticsChart from "../components/dashboard/MoodAnalyticsChart";
import MoodDistributionChart from "../components/dashboard/MoodDistributionChart";
import WellnessHeatmap from "../components/dashboard/WellnessHeatmap";

import WellnessGarden from "../components/dashboard/WellnessGarden";
import AchievementCard from "../components/dashboard/AchievementCard";

import AIWorkflow from "../components/AIWorkflow";
import AIInsightCard from "../components/AIInsightCard";

import MoodHistory from "../components/dashboard/MoodHistory";
import RecentActivity from "../components/dashboard/RecentActivity";
import WellnessTimeline from "../components/WellnessTimeline";

import HabitTrackerCard from "../components/HabitTrackerCard";
import DailyChallengeCard from "../components/DailyChallengeCard";

import MoodReminder from "../components/MoodReminder";
import QuoteCard from "../components/dashboard/QuoteCard";

import LoadingSpinner from "../components/LoadingSpinner";

import { getDashboardStats } from "../services/dashboardStatsService";
function Dashboard() {
  const [stats, setStats] = useState({
  wellnessScore: 0,
  streak: 0,
  journalEntries: 0,
  currentMood: "Calm",
  totalMoodEntries: 0,
});

const [loading, setLoading] = useState(true);
const hour = new Date().getHours();

const greeting =
  hour < 12
    ? "Good Morning ☀️"
    : hour < 17
    ? "Good Afternoon 🌤️"
    : "Good Evening 🌙";
    const messages = [
  "🌿 Small steps create big changes.",
  "💚 Your wellbeing comes first.",
  "🌸 Every day is a fresh beginning.",
  "🌈 Progress is better than perfection.",
  "🍃 Take a deep breath and smile.",
  "✨ You are stronger than yesterday.",
];

const dailyMessage =
  messages[new Date().getDate() % messages.length];
  useEffect(() => {
  const load = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  load();
}, []);
if (loading) {
  return <LoadingSpinner />;
}
return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">

    <Sidebar />

    <main className="lg:ml-72 px-6 py-8">

      <Topbar />

      <DashboardHero
        stats={stats}
        greeting={greeting}
        dailyMessage={dailyMessage}
      />

      {/* Overview */}

      <section className="mt-10 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <DashboardOverview stats={stats} />

        </div>

        <div>

          <QuickActions />

        </div>

      </section>