import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import QuickActions from "../components/dashboard/QuickActions";

import WelcomeCard from "../components/dashboard/WelcomeCard";

import MoodAnalyticsChart from "../components/dashboard/MoodAnalyticsChart";
import MoodDistributionChart from "../components/dashboard/MoodDistributionChart";
import MoodCalendar from "../components/dashboard/MoodCalendar";
import WellnessHeatmap from "../components/dashboard/WellnessHeatmap";

import WellnessGarden from "../components/dashboard/WellnessGarden";
import WeeklyProgress from "../components/dashboard/WeeklyProgress";
import DailyGoals from "../components/dashboard/DailyGoals";

import AIRecommendation from "../components/dashboard/AIRecommendation";
import AIQuickChat from "../components/dashboard/AIQuickChat";

import RecentJournal from "../components/dashboard/RecentJournal";
import RecentActivity from "../components/dashboard/RecentActivity";

import WellnessTips from "../components/dashboard/WellnessTips";
import UpcomingSession from "../components/dashboard/UpcomingSession";
import QuoteCard from "../components/dashboard/QuoteCard";

import NotificationPreview from "../components/dashboard/NotificationPreview";
import WidgetToggle from "../components/dashboard/WidgetToggle";

import LoadingSpinner from "../components/LoadingSpinner";

import { getDashboardStats } from "../services/dashboardStatsService";

function Dashboard() {

  const [stats, setStats] = useState({
    wellnessScore: 0,
    streak: 0,
    journalEntries: 0,
    totalMoodEntries: 0,
    currentMood: "Calm",
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
    "🌿 Small steps every day create lasting change.",
    "💚 Your wellbeing deserves your attention today.",
    "🌸 Be gentle with yourself.",
    "🍃 Take one deep breath before you continue.",
    "✨ Progress is more important than perfection.",
    "🌈 Healing is a journey, not a destination.",
    "🌞 Celebrate every little victory.",
  ];

  const dailyMessage =
    messages[new Date().getDate() % messages.length];

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const data = await getDashboardStats();

        setStats(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    loadDashboard();

  }, []);

  if (loading) {

    return <LoadingSpinner />;

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-500">

      <Sidebar />

      <main className="lg:ml-72 px-6 py-8 space-y-10">

        <Topbar />

        <WelcomeCard />

        <DashboardHero
          stats={stats}
          greeting={greeting}
          dailyMessage={dailyMessage}
        />

        {/* Dashboard Overview */}

        <section className="grid gap-8 xl:grid-cols-3">

          <div className="xl:col-span-2">

            <DashboardOverview stats={stats} />

          </div>

          <div>

            <QuickActions />

          </div>

        </section>