import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import QuickActions from "../components/dashboard/QuickActions";

import WellnessGarden from "../components/dashboard/WellnessGarden";
import AchievementCard from "../components/dashboard/AchievementCard";

import MoodAnalyticsChart from "../components/dashboard/MoodAnalyticsChart";
import MoodDistributionChart from "../components/dashboard/MoodDistributionChart";
import WellnessHeatmap from "../components/dashboard/WellnessHeatmap";

import MoodHistory from "../components/dashboard/MoodHistory";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuoteCard from "../components/dashboard/QuoteCard";

import AIInsightCard from "../components/AIInsightCard";
import AIWorkflow from "../components/AIWorkflow";

import WellnessTimeline from "../components/WellnessTimeline";
import HabitTrackerCard from "../components/HabitTrackerCard";
import DailyChallengeCard from "../components/DailyChallengeCard";

import MoodReminder from "../components/MoodReminder";
import LoadingSpinner from "../components/LoadingSpinner";

import { getDashboardStats } from "../services/dashboardStatsService";

function Dashboard() {

  const [stats, setStats] = useState({
    wellnessScore: 0,
    streak: 0,
    journalEntries: 0,
    currentMood: "Loading...",
    totalMoodEntries: 0,
  });

  const [loading, setLoading] = useState(true);

  // Dynamic Greeting

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 17
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  // Daily Wellness Messages

  const wellnessMessages = [
    "🌿 Every small step you take today matters.",
    "💚 Thank you for choosing yourself today.",
    "🌸 Healing happens one day at a time.",
    "🍃 Take a deep breath. You're doing your best.",
    "✨ Progress is more important than perfection.",
    "🌞 Your mental wellbeing deserves attention every day.",
    "🌈 Keep showing up for yourself.",
  ];

  const dailyMessage =
    wellnessMessages[
      new Date().getDate() %
        wellnessMessages.length
    ];

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const data =
          await getDashboardStats();

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
                {/* =========================
            Wellness Analytics
        ========================== */}

        <section className="mt-14">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">

                📊 Emotional Insights

              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">

                Wellness Analytics

              </h2>

              <p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-400">

                Understand your emotional wellbeing through AI-powered
                insights, mood trends and wellness statistics.

              </p>

            </div>

            <Link
              to="/analytics"
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              View Full Report →

            </Link>

          </div>

          {/* Charts */}

          <div className="mt-10 grid gap-8 xl:grid-cols-2">

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <MoodAnalyticsChart />

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

              <MoodDistributionChart />

            </div>

          </div>

          {/* Heatmap */}

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

            <WellnessHeatmap />

          </div>

        </section>

        {/* =========================
            Wellness Garden
        ========================== */}

        <section className="mt-16">

          <div className="mb-8">

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-200">

              🌱 Your Progress

            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">

              Wellness Garden

            </h2>

            <p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-400">

              Every healthy habit helps your digital garden grow.
              Journal, breathe, reflect and let your tree bloom.

            </p>

          </div>

          <div className="grid gap-8 xl:grid-cols-3">

            <div className="xl:col-span-2">

              <WellnessGarden />

            </div>

            <div>

              <AchievementCard />

            </div>

          </div>

        </section>

        {/* =========================
            Weekly Summary
        ========================== */}

        <section className="mt-16">

          <div className="rounded-[36px] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 p-10 text-white shadow-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

                  📈 Weekly Wellness Summary

                </span>

                <h2 className="mt-5 text-4xl font-extrabold">

                  Keep Moving Forward

                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-violet-100">

                  Small habits create meaningful change.
                  Celebrate your progress and continue building
                  a healthier, happier version of yourself.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <SummaryCard
                  title="Wellness Score"
                  value={`${stats.wellnessScore}%`}
                />

                <SummaryCard
                  title="Current Streak"
                  value={`${stats.streak} Days`}
                />

                <SummaryCard
                  title="Journal Entries"
                  value={stats.journalEntries}
                />

                <SummaryCard
                  title="Mood Check-ins"
                  value={stats.totalMoodEntries}
                />

              </div>

            </div>

          </div>

        </section>
        {/* =========================
      AI WELLNESS CENTER
========================= */}

<section className="mt-16">

  <div className="mb-10">

    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">

      🤖 Personalized AI

    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">

      Mana AI Wellness Coach

    </h2>

    <p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-400">

      Receive personalized emotional insights, wellness recommendations,
      and intelligent guidance based on your wellness journey.

    </p>

  </div>

  <div className="grid gap-8 xl:grid-cols-3">

    <div className="xl:col-span-2 rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <AIWorkflow />

    </div>

    <div className="rounded-3xl bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 p-8 text-white shadow-2xl">

      <h3 className="text-2xl font-bold">

        🌿 AI Coach

      </h3>

      <p className="mt-5 leading-8">

        Based on your recent wellness activity, Mana AI believes:

      </p>

      <div className="mt-6 space-y-4">

        <Insight
          emoji="😊"
          text="Your mood has improved this week."
        />

        <Insight
          emoji="📖"
          text="Journaling regularly increases emotional awareness."
        />

        <Insight
          emoji="🌬"
          text="A short breathing exercise could help today."
        />

        <Insight
          emoji="💚"
          text="Keep your current wellness streak alive!"
        />

      </div>

      <Link to="/chat">

        <button className="mt-8 w-full rounded-2xl bg-white py-4 font-bold text-teal-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          🤖 Talk to Mana AI

        </button>

      </Link>

    </div>

  </div>

  <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

    <AIInsightCard />

  </div>

</section>

{/* =========================
      WELLNESS HUB
========================= */}

<section className="mt-16">

  <div className="mb-10">

    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 dark:bg-pink-900 dark:text-pink-200">

      🌸 Daily Wellness

    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">

      Your Wellness Hub

    </h2>

    <p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-400">

      Build healthy routines, track habits, and celebrate
      your emotional growth every day.

    </p>

  </div>

  <div className="grid gap-8 xl:grid-cols-2">

    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <MoodHistory />

    </div>

    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <WellnessTimeline />

    </div>

  </div>

  <div className="mt-8 grid gap-8 xl:grid-cols-2">

    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <HabitTrackerCard />

    </div>

    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <DailyChallengeCard />

    </div>

  </div>

</section>
{/* =========================
      YOUR JOURNEY
========================= */}

<section className="mt-16">

  <div className="mb-10">

    <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900 dark:text-amber-200">

      📖 Reflection

    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">

      Your Wellness Journey

    </h2>

    <p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-400">

      Reflect on your recent activities, celebrate your progress,
      and stay inspired every day.

    </p>

  </div>

  <div className="grid gap-8 xl:grid-cols-2">

    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <RecentActivity />

    </div>

    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <QuoteCard />

    </div>

  </div>

</section>

{/* =========================
      MINDFULNESS CORNER
========================= */}

<section className="mt-16">

  <div className="rounded-[36px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 p-10 text-white shadow-2xl">

    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

          🌿 Mindfulness Corner

        </span>

        <h2 className="mt-5 text-4xl font-extrabold">

          Pause. Breathe. Reset.

        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-100">

          Your mind deserves moments of peace.

          Take a short break,
          relax your thoughts,
          and reconnect with yourself.

        </p>

      </div>

      <div className="grid grid-cols-2 gap-5">

        <MindCard
          emoji="🌬"
          title="Deep Breathing"
        />

        <MindCard
          emoji="🎵"
          title="Relaxing Music"
        />

        <MindCard
          emoji="🧘"
          title="Meditation"
        />

        <MindCard
          emoji="🌙"
          title="Sleep Better"
        />

      </div>

    </div>

  </div>

</section>

{/* =========================
      DAILY REMINDER
========================= */}

<section className="mt-16">

  <div className="mb-8">

    <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-900 dark:text-rose-200">

      💚 Wellness Reminder

    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">

      Keep Your Streak Alive

    </h2>

    <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">

      A small action today creates a healthier tomorrow.

    </p>

  </div>

  <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

    <MoodReminder />

  </div>

</section>
{/* =========================
      DAILY WELLNESS
========================= */}

<section className="mt-16">

  <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-12 shadow-2xl">

    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

      <div className="max-w-2xl">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">

          🌿 One Small Step Every Day

        </span>

        <h2 className="mt-6 text-5xl font-extrabold text-white">

          Your wellbeing matters.

        </h2>

        <p className="mt-6 text-lg leading-8 text-emerald-100">

          Healing isn't about being perfect.

          It's about showing up,
          taking one small step,
          and being kind to yourself.

          ManaSetu will always walk beside you.

        </p>

      </div>

      <div className="flex flex-wrap gap-5">

        <Link to="/journal">

          <button className="rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            📝 Reflect Now

          </button>

        </Link>

        <Link to="/chat">

          <button className="rounded-2xl border border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-emerald-700">

            🤖 Talk to Mana

          </button>

        </Link>

      </div>

    </div>

  </div>

</section>

{/* =========================
      FOOTER
========================= */}

<footer className="mt-20 border-t border-gray-200 pt-10 dark:border-gray-700">

  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">

        🌿 ManaSetu

      </h3>

      <p className="mt-3 max-w-md text-gray-600 dark:text-gray-400">

        A safe digital space designed to help students
        understand their emotions,
        build healthy habits,
        and grow through every step of their wellness journey.

      </p>

    </div>

    <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">

      <Link to="/dashboard" className="hover:text-emerald-600">

        Home

      </Link>

      <Link to="/journal" className="hover:text-emerald-600">

        Journal

      </Link>

      <Link to="/analytics" className="hover:text-emerald-600">

        Analytics

      </Link>

      <Link to="/chat" className="hover:text-emerald-600">

        Mana AI

      </Link>

    </div>

  </div>

  <div className="mt-10 border-t border-gray-200 pt-6 text-center dark:border-gray-700">

    <p className="text-gray-500 dark:text-gray-400">

      💚 Thank you for taking care of yourself today.

    </p>

    <p className="mt-2 text-sm text-gray-400">

      © {new Date().getFullYear()} ManaSetu · Empowering Students Through Mental Wellness

    </p>

  </div>

</footer>