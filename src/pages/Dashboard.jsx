import MoodCalendar from "../components/dashboard/MoodCalendar";
import UpcomingSessions from "../components/dashboard/UpcomingSessions";
import WellnessTips from "../components/dashboard/WellnessTips";
import DailyGoals from "../components/dashboard/DailyGoals";
import WeeklyProgress from "../components/dashboard/WeeklyProgress";
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

        <div className="grid xl:grid-cols-2 gap-8 mt-8">

  <RecentActivity />

  <WeeklyProgress />

</div>

        {/* Quick Access */}
        {/* Quick Access */}

<div className="grid md:grid-cols-3 gap-6 mt-10">

  <Link
    to="/analytics"
    className="group rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 shadow-xl hover:scale-[1.02] transition-all duration-300"
  >
    <div className="text-5xl">📊</div>

    <h3 className="mt-5 text-2xl font-bold">
      Mood Analytics
    </h3>

    <p className="mt-3 text-green-100 leading-7">
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
    className="group rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 shadow-xl hover:scale-[1.02] transition-all duration-300"
  >
    <div className="text-5xl">🤖</div>

    <h3 className="mt-5 text-2xl font-bold">
      AI Command Center
    </h3>

    <p className="mt-3 text-indigo-100 leading-7">
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
    className="group rounded-3xl bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 shadow-xl hover:scale-[1.02] transition-all duration-300"
  >
    <div className="text-5xl">🆘</div>

    <h3 className="mt-5 text-2xl font-bold">
      Support Center
    </h3>

    <p className="mt-3 text-red-100 leading-7">
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

<div className="grid xl:grid-cols-3 gap-8 mt-8">

  <MoodSection />

  <QuickActions />

  <DailyGoals />

</div>

{/* Wellness Insights + AI */}

<div className="grid xl:grid-cols-3 gap-8 mt-8">

  <WellnessInsights />

  <AIInsightCard />

  <WellnessTips />

</div>

{/* Mood Charts */}

<div className="grid xl:grid-cols-3 gap-8 mt-8">

  <MoodHistory />

  <WellnessTimeline />

  <UpcomingSessions />

</div>

{/* AI Workflow */}

<div className="grid xl:grid-cols-2 gap-8 mt-8">

  <AIWorkflow />

  <MoodCalendar />

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

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>

              <h2 className="text-3xl font-bold">
                🌿 Keep Building Healthy Habits
              </h2>

              <p className="mt-3 max-w-2xl text-green-100 leading-7">
                Every mood you track, every journal you write,
                every meditation you complete, and every healthy
                habit you build helps ManaSetu AI understand your
                wellness journey and provide smarter, more
                personalized recommendations.
              </p>

            </div>

            <Link to="/analytics">

              <button className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">

                📊 View Full Analytics

              </button>

            </Link>

          </div>

        </div>

        {/* Dashboard Footer */}

        <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                🌿 ManaSetu
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                AI Powered Mental Wellness Platform
              </p>

            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">

              <Link
                to="/dashboard"
                className="hover:text-emerald-600 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/analytics"
                className="hover:text-emerald-600 transition"
              >
                Analytics
              </Link>

              <Link
                to="/journal"
                className="hover:text-emerald-600 transition"
              >
                Journal
              </Link>

              <Link
                to="/support"
                className="hover:text-emerald-600 transition"
              >
                Support
              </Link>

            </div>

          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">

            <p>
              © {new Date().getFullYear()} ManaSetu. All Rights Reserved.
            </p>

            <div className="flex gap-5">

              <span>🌿 Wellness</span>

              <span>🤖 AI</span>

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