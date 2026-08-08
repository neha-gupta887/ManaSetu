import WellnessGarden from "../components/dashboard/WellnessGarden";
import DashboardHero from "../components/dashboard/DashboardHero";
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

  // ===============================
  // Dynamic Greeting
  // ===============================

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 17
        ? "Good Afternoon 🌤️"
        : "Good Evening 🌙";

  // ===============================
  // Daily Wellness Messages
  // ===============================

  const wellnessMessages = [
    "🌿 Every small step you take today matters.",
    "💚 Thank you for taking time for yourself.",
    "🍃 Breathe deeply. You don't have to carry everything at once.",
    "🌸 Your wellbeing deserves care and attention.",
    "✨ Progress isn't about perfection. It's about showing up.",
    "🌞 You are stronger than yesterday, even if it doesn't feel like it.",
  ];

  const dailyMessage =
    wellnessMessages[new Date().getDate() % wellnessMessages.length];

  // ===============================
  // Load Dashboard
  // ===============================

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

  // ===============================
  // Loading State
  // ===============================

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
  <div
    className="
      min-h-screen
      bg-[#f7f9f7]
      text-slate-900
      transition-colors
      duration-500
      dark:bg-[#0b1110]
      dark:text-white
    "
  >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
<main
  className="
    min-h-screen
    px-4
    pb-20
    sm:px-6
    lg:ml-72
    lg:px-10
    xl:px-12
  "
>
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Content */}
<div className="relative z-10 mx-auto max-w-[1500px] space-y-12 pt-6">
          {/* =========================================
              Welcome Section
          ========================================= */}

          <section>
            <WelcomeCard stats={stats} />
          </section>

          {/* =========================================
              Dashboard Overview + Quick Actions
          ========================================= */}

          <section className="grid gap-8 xl:grid-cols-3">

            <div className="xl:col-span-2">
              <DashboardOverview stats={stats} />
            </div>

            <div>
              <QuickActions />
            </div>

          </section>

          {/* =========================================
              Analytics
          ========================================= */}

          <section className="mt-12">

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

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
                className="
                  inline-flex
                  w-fit
                  items-center
                  rounded-xl
                  bg-emerald-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-emerald-700
                "
              >
                View Full Analytics →
              </Link>

            </div>

            <div className="grid gap-8 xl:grid-cols-2">

              <MoodAnalyticsChart />

              <WellnessGarden />

              <MoodDistributionChart />

            </div>

            <div className="mt-8">
              <WellnessHeatmap />
            </div>

          </section>

          {/* =========================================
              AI Wellness Assistant
          ========================================= */}

          <section className="mt-12">

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                🤖 AI Wellness Assistant
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Personalized recommendations generated from your wellness
                journey.
              </p>

            </div>

            <div className="grid gap-8 xl:grid-cols-2">

              <AIInsightCard />

              <AIWorkflow />

            </div>

          </section>

          {/* =========================================
              Wellness Hub
          ========================================= */}

          <section className="mt-12">

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                🌿 Wellness Hub
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Stay consistent with healthy habits, monitor your progress,
                and keep your wellness journey on track.
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

          {/* =========================================
              Your Journey
          ========================================= */}

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

          {/* =========================================
              Daily Reminder
          ========================================= */}

          <section className="mt-12">
            <MoodReminder />
          </section>

          {/* =========================================
              Call To Action
          ========================================= */}

          <section className="mt-12">

            <div
              className="
                overflow-hidden
                rounded-3xl
                bg-gradient-to-r
                from-emerald-600
                via-green-600
                to-teal-600
                p-8
                text-white
                shadow-2xl
                sm:p-10
              "
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                    🌿 Daily Wellness
                  </span>

                  <h2 className="mt-5 text-4xl font-extrabold">
                    Every Small Step Matters
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-100">
                    Build healthy habits, journal your thoughts, monitor your
                    emotions and let Mana AI guide you towards a happier and
                    healthier life.
                  </p>

                </div>

                <div className="flex flex-wrap gap-4">

                  <Link to="/journal">
                    <button
                      className="
                        rounded-2xl
                        bg-white
                        px-8
                        py-4
                        font-bold
                        text-emerald-700
                        shadow-xl
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                    >
                      📖 Open Journal
                    </button>
                  </Link>

                  <Link to="/chat">
                    <button
                      className="
                        rounded-2xl
                        border
                        border-white
                        px-8
                        py-4
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-emerald-700
                      "
                    >
                      🤖 Chat with Mana AI
                    </button>
                  </Link>

                </div>

              </div>

            </div>

          </section>

          {/* =========================================
              Footer
          ========================================= */}

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
                  className="transition hover:text-emerald-600"
                >
                  Dashboard
                </Link>

                <Link
                  to="/journal"
                  className="transition hover:text-emerald-600"
                >
                  Journal
                </Link>

                <Link
                  to="/analytics"
                  className="transition hover:text-emerald-600"
                >
                  Analytics
                </Link>

                <Link
                  to="/chat"
                  className="transition hover:text-emerald-600"
                >
                  AI Chat
                </Link>

              </div>

            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-700">

              <p className="text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} ManaSetu • Built with ❤️ using
                React & Firebase
              </p>

            </div>

          </footer>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;