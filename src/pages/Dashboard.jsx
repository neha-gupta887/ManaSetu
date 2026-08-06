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
                value={`${stats.wellnessScore}%`}
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