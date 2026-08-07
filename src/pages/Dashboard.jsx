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

import AIRecommendations from "../components/dashboard/AIRecommendations";
import AIQuickChat from "../components/dashboard/AIQuickChat";

import RecentJournal from "../components/dashboard/RecentJournal";
import RecentActivity from "../components/dashboard/RecentActivity";

import WellnessTips from "../components/dashboard/WellnessTips";
import UpcomingSessions from "../components/dashboard/UpcomingSessions";
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

        <WelcomeCard stats={stats} />

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
                {/* =======================================================
                            ANALYTICS SECTION
        ======================================================== */}

        <section className="space-y-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

                📊 Wellness Analytics

              </span>

              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">

                Track Your Emotional Journey

              </h2>

              <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">

                Understand your emotional wellbeing through AI-powered
                insights, mood trends and wellness reports.

              </p>

            </div>

            <Link
              to="/analytics"
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              View Full Analytics →
            </Link>

          </div>

          {/* Charts */}

          <div className="grid gap-8 xl:grid-cols-2">

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <MoodAnalyticsChart />

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <MoodDistributionChart />

            </div>

          </div>

          {/* Calendar + Heatmap */}

          <div className="grid gap-8 xl:grid-cols-2">

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <MoodCalendar />

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <WellnessHeatmap />

            </div>

          </div>

        </section>

        {/* =======================================================
                        WEEKLY PROGRESS
        ======================================================== */}

        <section className="rounded-[36px] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 p-10 text-white shadow-2xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

                📈 Weekly Summary

              </span>

              <h2 className="mt-5 text-4xl font-extrabold">

                You're Making Progress 💚

              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-violet-100">

                Every journal entry, breathing exercise and mood check
                brings you closer to a healthier and happier mind.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <StatBox
                title="Wellness Score"
                value={`${stats?.wellnessScore ?? 0}%`}
              />

              <StatBox
                title="Current Streak"
                value={`${stats.streak} Days`}
              />

              <StatBox
                title="Journal Entries"
                value={stats.journalEntries}
              />

              <StatBox
                title="Mood Check-ins"
                value={stats.totalMoodEntries}
              />

            </div>

          </div>

        </section>

        <section>

          <WeeklyProgress />

        </section>
                {/* =======================================================
                            WELLNESS SECTION
        ======================================================== */}

        <section className="space-y-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                🌱 Wellness Journey

              </span>

              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">

                Grow Your Wellness Garden

              </h2>

              <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">

                Every healthy habit helps your digital garden bloom.
                Journal regularly, track your mood and complete wellness
                activities to unlock new milestones.

              </p>

            </div>

          </div>

          {/* Garden + Goals */}

          <div className="grid gap-8 xl:grid-cols-3">

            <div className="xl:col-span-2">

              <WellnessGarden />

            </div>

            <div className="space-y-8">

              <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

                <DailyGoals />

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

                <NotificationPreview />

              </div>

            </div>

          </div>

        </section>

        {/* =======================================================
                          QUICK WELLNESS ACTIONS
        ======================================================== */}

        <section>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2">

              <div className="text-5xl">

                🌿

              </div>

              <h3 className="mt-5 text-2xl font-bold">

                Daily Reflection

              </h3>

              <p className="mt-3 leading-7 text-emerald-100">

                Spend just five minutes writing your thoughts and improve
                your emotional awareness.

              </p>

              <Link
                to="/journal"
                className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 transition hover:scale-105"
              >

                Open Journal →

              </Link>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2">

              <div className="text-5xl">

                🌬

              </div>

              <h3 className="mt-5 text-2xl font-bold">

                Breathing Exercise

              </h3>

              <p className="mt-3 leading-7 text-cyan-100">

                Relax your body and mind with a guided breathing session.

              </p>

              <Link
                to="/breathing"
                className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-cyan-700 transition hover:scale-105"
              >

                Start Session →

              </Link>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2">

              <div className="text-5xl">

                🤖

              </div>

              <h3 className="mt-5 text-2xl font-bold">

                Talk to Mana

              </h3>

              <p className="mt-3 leading-7 text-violet-100">

                Receive personalized support and wellness guidance from
                your AI companion.

              </p>

              <Link
                to="/chat"
                className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-violet-700 transition hover:scale-105"
              >

                Chat Now →

              </Link>

            </div>

          </div>

        </section>
                {/* =======================================================
                            AI WELLNESS CENTER
        ======================================================== */}

        <section className="space-y-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">

                🤖 AI Wellness Coach

              </span>

              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">

                Your Personal Mental Wellness Companion

              </h2>

              <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">

                Mana AI understands your emotional journey and provides
                personalized wellness suggestions, encouragement and
                intelligent support whenever you need it.

              </p>

            </div>

            <Link
              to="/chat"
              className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >

              Open Mana AI →

            </Link>

          </div>

          {/* AI Cards */}

          <div className="grid gap-8 xl:grid-cols-2">

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

            <AIRecommendations />
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <AIQuickChat />

            </div>

          </div>

        </section>

        {/* =======================================================
                        JOURNAL & ACTIVITY
        ======================================================== */}

        <section className="space-y-8">

          <div>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">

              📖 Reflection Space

            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">

              Continue Your Wellness Journey

            </h2>

            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">

              Review your latest journal entries, revisit important
              reflections and stay connected with your emotional growth.

            </p>

          </div>

          <div className="grid gap-8 xl:grid-cols-2">

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <RecentJournal />

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <RecentActivity />

            </div>

          </div>

        </section>

        {/* =======================================================
                        AI QUICK HELP
        ======================================================== */}

        <section>

          <div className="rounded-[36px] bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 p-10 text-white shadow-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

                  💚 AI Wellness Tip

                </span>

                <h2 className="mt-5 text-4xl font-extrabold">

                  Feeling Overwhelmed?

                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-100">

                  Take one deep breath.

                  Write one thought.

                  Talk to Mana.

                  Small actions today create meaningful emotional growth.

                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <Link to="/journal">

                  <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-sky-700 transition hover:scale-105">

                    📝 Journal

                  </button>

                </Link>

                <Link to="/chat">

                  <button className="rounded-2xl border border-white px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-sky-700">

                    🤖 Chat with Mana

                  </button>

                </Link>

              </div>

            </div>

          </div>

        </section>
                {/* =======================================================
                        WELLNESS CENTER
        ======================================================== */}

        <section className="space-y-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">

                🌸 Wellness Center

              </span>

              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">

                Build Healthy Daily Habits

              </h2>

              <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">

                Stay consistent with wellness tips,
                upcoming mindfulness sessions,
                and daily inspiration.

              </p>

            </div>

          </div>

          <div className="grid gap-8 xl:grid-cols-3">

            {/* Wellness Tips */}

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <WellnessTips />

            </div>

            {/* Upcoming Session */}

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <UpcomingSessions />

            </div>

            {/* Daily Quote */}

            <div className="rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-600 p-6 text-white shadow-xl">

              <QuoteCard />

            </div>

          </div>

        </section>

        {/* =======================================================
                        DASHBOARD SETTINGS
        ======================================================== */}

        <section className="grid gap-8 xl:grid-cols-2">

          <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

            <WidgetToggle />

          </div>

          <div className="rounded-[32px] bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-8 text-white shadow-xl">

            <h2 className="text-3xl font-bold">

              💚 Today's Wellness Reminder

            </h2>

            <p className="mt-5 leading-8 text-emerald-100">

              Take a few moments today to check in with yourself.

              Your emotional wellbeing grows with every small habit you
              practice.

            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <ReminderCard
                emoji="😊"
                title="Mood Check"
              />

              <ReminderCard
                emoji="📖"
                title="Journal"
              />

              <ReminderCard
                emoji="🌬"
                title="Breathing"
              />

              <ReminderCard
                emoji="🤖"
                title="Talk to Mana"
              />

            </div>

          </div>

        </section>

        {/* =======================================================
                        MOTIVATION SECTION
        ======================================================== */}

        <section>

          <div className="rounded-[40px] bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 p-10 text-white shadow-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

                  🌟 Daily Motivation

                </span>

                <h2 className="mt-5 text-5xl font-extrabold">

                  You Are Doing Better Than You Think

                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-orange-100">

                  Healing isn't about perfection.

                  It's about showing up every day,
                  learning,
                  growing,
                  and believing in yourself.

                </p>

              </div>

              <Link to="/journal">

                <button className="rounded-2xl bg-white px-8 py-4 font-bold text-orange-600 transition duration-300 hover:scale-105">

                  🌿 Continue Your Journey

                </button>

              </Link>

            </div>

          </div>

        </section>
                {/* =======================================================
                        FINAL CALL TO ACTION
        ======================================================== */}

        <section>

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 p-12 text-white shadow-2xl">

            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">

                  💚 One Small Step Today

                </span>

                <h2 className="mt-6 text-5xl font-extrabold">

                  Your Mental Health Matters.

                </h2>

                <p className="mt-6 text-lg leading-8 text-emerald-100">

                  Every mood check, journal entry, breathing session and
                  conversation with Mana brings you one step closer to a
                  healthier mind.

                  Keep going. You're doing great.

                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <Link to="/journal">

                  <button className="rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 transition hover:scale-105">

                    📝 Write Journal

                  </button>

                </Link>

                <Link to="/chat">

                  <button className="rounded-2xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-emerald-700">

                    🤖 Talk to Mana

                  </button>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =======================================================
                              FOOTER
        ======================================================== */}

        <footer className="border-t border-gray-200 pt-10 dark:border-gray-700">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

                🌿 ManaSetu

              </h2>

              <p className="mt-4 max-w-md leading-7 text-gray-600 dark:text-gray-400">

                Empowering students through AI-driven mental wellness,
                mindfulness and emotional growth.

              </p>

            </div>

            <div className="flex flex-wrap gap-6">

              <Link
                to="/dashboard"
                className="font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-400"
              >
                Dashboard
              </Link>

              <Link
                to="/journal"
                className="font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-400"
              >
                Journal
              </Link>

              <Link
                to="/analytics"
                className="font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-400"
              >
                Analytics
              </Link>

              <Link
                to="/chat"
                className="font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-400"
              >
                Mana AI
              </Link>

            </div>

          </div>

          <div className="mt-10 border-t border-gray-200 py-6 text-center dark:border-gray-700">

            <p className="text-gray-500">

              © {new Date().getFullYear()} ManaSetu

            </p>

            <p className="mt-2 text-sm text-gray-400">

              Helping students build healthier minds, one day at a time 💚

            </p>

          </div>

        </footer>

      </main>

    </div>

  );
}

/* ======================================================
                    Helper Components
====================================================== */

function StatBox({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/15 p-5 text-center backdrop-blur">

      <p className="text-sm text-emerald-100">

        {title}

      </p>

      <h3 className="mt-2 text-3xl font-bold">

        {value}

      </h3>

    </div>
  );
}

function ReminderCard({ emoji, title }) {
  return (
    <div className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur">

      <div className="text-4xl">

        {emoji}

      </div>

      <p className="mt-3 font-semibold">

        {title}

      </p>

    </div>
  );
}

export default Dashboard;
