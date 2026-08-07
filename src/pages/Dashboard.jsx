import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaFire, FaBookOpen, FaSmile } from "react-icons/fa";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

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
      ? "Good morning"
      : hour < 17
      ? "Good afternoon"
      : "Good evening";

  const messages = [
    "Small steps every day create lasting change.",
    "Your wellbeing deserves your attention today.",
    "Be gentle with yourself.",
    "Take one deep breath before you continue.",
    "Progress is more important than perfection.",
    "Healing is a journey, not a destination.",
    "Celebrate every little victory.",
  ];

  const dailyMessage =
    messages[new Date().getDate() % messages.length];

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboardStats();

        if (data) {
          setStats({
            wellnessScore: data.wellnessScore ?? 0,
            streak: data.streak ?? 0,
            journalEntries: data.journalEntries ?? 0,
            totalMoodEntries: data.totalMoodEntries ?? 0,
            currentMood: data.currentMood || "Calm",
          });
        }
      } catch (error) {
        console.error("Dashboard loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const wellnessScore = stats?.wellnessScore ?? 0;
  const streak = stats?.streak ?? 0;
  const journalEntries = stats?.journalEntries ?? 0;
  const totalMoodEntries = stats?.totalMoodEntries ?? 0;
  const currentMood = stats?.currentMood || "Calm";

  return (
    <div className="min-h-screen bg-[#F5F8F5] text-slate-800 transition-colors duration-500 dark:bg-[#09100E] dark:text-white">

      <Sidebar />

      <main className="relative min-h-screen lg:ml-72">

        {/* Ambient background */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-900/10" />

          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-teal-200/15 blur-3xl dark:bg-teal-900/10" />

          <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-lime-100/20 blur-3xl dark:bg-lime-900/5" />
        </div>

        <div className="relative z-10">

          <Topbar />

          {/* Main content */}
          <div className="mx-auto max-w-[1500px] space-y-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">

            {/* =========================================
                WELCOME
            ========================================== */}

         <section className="group relative overflow-hidden rounded-[32px] border border-emerald-100/80 bg-white shadow-[0_24px_80px_-45px_rgba(16,185,129,0.38)] transition-all duration-500 hover:shadow-[0_30px_90px_-45px_rgba(16,185,129,0.48)] dark:border-white/[0.07] dark:bg-[#101815]">
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full bg-emerald-200/35 blur-3xl transition-transform duration-700 group-hover:scale-110 dark:bg-emerald-900/15" />

    <div className="absolute -bottom-40 left-1/3 h-[320px] w-[320px] rounded-full bg-teal-100/35 blur-3xl dark:bg-teal-950/15" />

    <div className="absolute right-[28%] top-1/2 h-32 w-32 rounded-full bg-lime-100/30 blur-3xl dark:bg-lime-900/10" />
  </div>

  {/* Decorative grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.025]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)",
      backgroundSize: "36px 36px",
    }}
  />

  <div className="relative p-6 sm:p-8 lg:p-10">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      {/* Left content */}
      <div className="max-w-3xl">
        {/* Private space badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3.5 py-2 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          Your private wellness space
        </div>

        {/* Date */}
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
          {formatToday()}
        </p>

        {/* Greeting */}
        <h1 className="mt-2 text-3xl font-bold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[46px] lg:leading-[1.08] dark:text-white">
          {greeting},{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">
            {getFirstName()}
          </span>
          <span className="text-slate-900 dark:text-white">.</span>
        </h1>

        {/* Message */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base dark:text-slate-400">
          {dailyMessage}
        </p>

        {/* Mini reassurance */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex -space-x-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-xs dark:border-[#101815]">
              🌿
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-teal-100 text-xs dark:border-[#101815]">
              💚
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-lime-100 text-xs dark:border-[#101815]">
              ✨
            </span>
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            A little care for yourself goes a long way.
          </p>
        </div>
      </div>

      {/* Right action area */}
      <div className="relative shrink-0">
        <div className="absolute -inset-4 rounded-[32px] bg-emerald-400/10 blur-2xl" />

        <div className="relative rounded-[26px] border border-slate-200/80 bg-white/80 p-3 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/[0.07] dark:bg-white/[0.035]">
          {/* Check in */}
          <Link
            to="/journal"
            className="group/action flex min-w-[210px] items-center gap-3 rounded-[20px] bg-slate-900 px-4 py-3.5 text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg dark:bg-slate-900/10">
              ✍️
            </span>

            <span className="flex-1 text-left">
              <span className="block text-sm font-semibold">
                Check in
              </span>

              <span className="mt-0.5 block text-[10px] text-white/60 dark:text-slate-500">
                How are you feeling?
              </span>
            </span>

            <span className="text-sm transition-transform duration-300 group-hover/action:translate-x-1">
              →
            </span>
          </Link>

          {/* Talk to Mana */}
          <Link
            to="/chat"
            className="group/action mt-2 flex min-w-[210px] items-center gap-3 rounded-[20px] border border-slate-200/80 bg-white px-4 py-3.5 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/70 hover:text-emerald-700 dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-slate-200 dark:hover:border-emerald-900/50 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-300"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-base dark:bg-violet-950/30">
              ✦
            </span>

            <span className="flex-1 text-left">
              <span className="block text-sm font-semibold">
                Talk to Mana
              </span>

              <span className="mt-0.5 block text-[10px] text-slate-400">
                Your AI wellness companion
              </span>
            </span>

            <span className="text-sm text-slate-300 transition-transform duration-300 group-hover/action:translate-x-1 dark:text-slate-600">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* =========================================
                WELLNESS SNAPSHOT
            ========================================== */}

            {/* =========================================
    WELLNESS SNAPSHOT
========================================== */}
<section className="mt-6">
  <div className="mb-4 flex items-end justify-between">
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
        Your progress
      </p>

      <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
        Wellness snapshot
      </h2>
    </div>

    <p className="hidden text-xs text-slate-400 sm:block">
      Small steps count.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
    {/* Wellness Score */}
    <div className="group relative overflow-hidden rounded-[24px] border border-emerald-100 bg-white p-5 shadow-[0_15px_45px_-35px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-35px_rgba(16,185,129,0.55)] dark:border-emerald-900/30 dark:bg-[#101815]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125 dark:bg-emerald-900/20" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          <FaHeart />
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          Overall
        </span>
      </div>

      <div className="relative mt-6">
        <p className="text-xs font-medium text-slate-400">
          Wellness Score
        </p>

        <div className="mt-1 flex items-end gap-1.5">
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {stats.wellnessScore}
          </span>

          <span className="mb-1 text-xs text-slate-400">
            / 100
          </span>
        </div>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950/50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700"
            style={{
              width: `${Math.min(
                Math.max(Number(stats.wellnessScore) || 0, 0),
                100
              )}%`,
            }}
          />
        </div>
      </div>
    </div>

    {/* Streak */}
    <div className="group relative overflow-hidden rounded-[24px] border border-amber-100 bg-white p-5 shadow-[0_15px_45px_-35px_rgba(245,158,11,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-35px_rgba(245,158,11,0.5)] dark:border-amber-900/30 dark:bg-[#101815]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125 dark:bg-amber-900/20" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 dark:bg-amber-950/40 dark:text-amber-400">
          <FaFire />
        </div>

        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
          Consistency
        </span>
      </div>

      <div className="relative mt-6">
        <p className="text-xs font-medium text-slate-400">
          Day Streak
        </p>

        <div className="mt-1 flex items-end gap-1.5">
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {stats.streak}
          </span>

          <span className="mb-1 text-xs text-slate-400">
            days
          </span>
        </div>

        <p className="mt-3 text-[11px] text-slate-400">
          Keep your gentle rhythm going.
        </p>
      </div>
    </div>

    {/* Journal */}
    <div className="group relative overflow-hidden rounded-[24px] border border-violet-100 bg-white p-5 shadow-[0_15px_45px_-35px_rgba(139,92,246,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-35px_rgba(139,92,246,0.5)] dark:border-violet-900/30 dark:bg-[#101815]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125 dark:bg-violet-900/20" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
          <FaBookOpen />
        </div>

        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
          Reflection
        </span>
      </div>

      <div className="relative mt-6">
        <p className="text-xs font-medium text-slate-400">
          Journal Entries
        </p>

        <div className="mt-1 flex items-end gap-1.5">
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {stats.journalEntries}
          </span>

          <span className="mb-1 text-xs text-slate-400">
            entries
          </span>
        </div>

        <p className="mt-3 text-[11px] text-slate-400">
          Your thoughts deserve a safe space.
        </p>
      </div>
    </div>

    {/* Mood */}
    <div className="group relative overflow-hidden rounded-[24px] border border-sky-100 bg-white p-5 shadow-[0_15px_45px_-35px_rgba(14,165,233,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-35px_rgba(14,165,233,0.5)] dark:border-sky-900/30 dark:bg-[#101815]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125 dark:bg-sky-900/20" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 dark:bg-sky-950/40 dark:text-sky-400">
          <FaSmile />
        </div>

        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold text-sky-600 dark:bg-sky-950/40 dark:text-sky-400">
          Today
        </span>
      </div>

      <div className="relative mt-6">
        <p className="text-xs font-medium text-slate-400">
          Today's Mood
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-2xl">
            {stats.currentMood === "Happy"
              ? "😊"
              : stats.currentMood === "Calm"
              ? "😌"
              : stats.currentMood === "Sad"
              ? "😔"
              : stats.currentMood === "Anxious"
              ? "😟"
              : stats.currentMood === "Angry"
              ? "😤"
              : "🌱"}
          </span>

          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {stats.currentMood}
          </span>
        </div>

        <p className="mt-3 text-[11px] text-slate-400">
          Notice it. Name it. Be kind to it.
        </p>
      </div>
    </div>
  </div>
</section>

            {/* =========================================
                MAIN OVERVIEW
            ========================================== */}

            <section className="grid gap-6 xl:grid-cols-[1.55fr_0.85fr]">

              <div className="premium-card p-6 sm:p-7">
                <DashboardOverview stats={stats} />
              </div>

              <div className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_-40px_rgba(16,185,129,0.25)] sm:p-6 dark:border-white/[0.07] dark:bg-[#101815]">

  {/* Premium glow */}
  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100/50 blur-3xl transition-transform duration-500 group-hover:scale-125 dark:bg-emerald-950/20" />

  {/* Header */}
  <div className="relative mb-5 flex items-center justify-between">

    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
        One tap away
      </p>

      <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
        Quick actions
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        Choose what you need right now.
      </p>
    </div>

    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/35 dark:text-emerald-400">
      ✨
    </div>

  </div>

  {/* Existing QuickActions component */}
  <div className="relative">
    <QuickActions />
  </div>

</div>

            </section>
                        {/* =========================================
                EMOTIONAL INSIGHTS
            ========================================== */}

            <section className="space-y-5">

              <SectionHeading
                eyebrow="Emotional insights"
                title="Understand your patterns"
                description="A gentle view of how your emotional wellbeing has been changing over time."
                action={
                  <Link
                    to="/analytics"
className="group/analytics inline-flex items-center gap-2 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100 hover:shadow-md hover:shadow-emerald-500/10 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-300 dark:hover:border-emerald-800/60 dark:hover:bg-emerald-950/40"                  >
                    Full analytics →
                  </Link>
                }
              />

              <div className="grid gap-5 xl:grid-cols-2">

                <div className="premium-card p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Mood trend
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Your emotional rhythm
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">
                      Live
                    </span>
                  </div>

                  <MoodAnalyticsChart />
                </div>


                <div className="premium-card p-5 sm:p-6">
                  <div className="mb-5">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Mood distribution
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      A wider view of your check-ins
                    </p>
                  </div>

                  <MoodDistributionChart />
                </div>

              </div>


              <div className="grid gap-5 xl:grid-cols-2">

                <div className="premium-card p-5 sm:p-6">
                  <MoodCalendar />
                </div>

                <div className="premium-card p-5 sm:p-6">
                  <WellnessHeatmap />
                </div>

              </div>

            </section>


            {/* =========================================
                WELLNESS GARDEN
            ========================================== */}

            <section className="space-y-5">

              <SectionHeading
                eyebrow="Your wellness journey"
                title="Small habits, visible growth"
                description="Every check-in, reflection and mindful moment helps your garden grow."
              />

              <div className="grid gap-6 xl:grid-cols-[1.45fr_0.8fr]">

                <div className="overflow-hidden rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-2 shadow-[0_20px_60px_-35px_rgba(16,185,129,0.35)] dark:border-emerald-900/30 dark:from-emerald-950/20 dark:via-white/[0.03] dark:to-teal-950/20">

                  <div className="rounded-[22px] bg-white/60 p-2 backdrop-blur dark:bg-black/10">
                    <WellnessGarden />
                  </div>

                </div>


                <div className="space-y-5">

                  <div className="premium-card p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-lg dark:bg-emerald-950/40">
                        ✓
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">
                          Today's intentions
                        </h3>

                        <p className="text-xs text-slate-400">
                          A few gentle wins
                        </p>
                      </div>
                    </div>

                    <DailyGoals />
                  </div>


                  <div className="premium-card p-6">
                    <NotificationPreview />
                  </div>

                </div>

              </div>

            </section>


            {/* =========================================
                WEEKLY PROGRESS
            ========================================== */}

            <section className="premium-card overflow-hidden">

              <div className="border-b border-slate-100 px-6 py-5 dark:border-white/5">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                      Weekly rhythm
                    </p>

                    <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                      Your progress this week
                    </h2>
                  </div>

                  <div className="text-sm text-slate-400">
                    Consistency over perfection
                  </div>

                </div>

              </div>

              <div className="p-5 sm:p-6">
                <WeeklyProgress />
              </div>

            </section>


            {/* =========================================
                DAILY WELLNESS ACTIONS
            ========================================== */}

            <section className="space-y-5">

              <SectionHeading
                eyebrow="Take a moment"
                title="Choose what you need right now"
                description="No pressure. Just one small action can change how the next few minutes feel."
              />

              <div className="grid gap-4 md:grid-cols-3">

                <ActionCard
                  icon="◌"
                  title="Reflect"
                  description="Put your thoughts somewhere safe."
                  link="/journal"
                  action="Open journal"
                  tone="emerald"
                />

                <ActionCard
                  icon="≈"
                  title="Breathe"
                  description="Slow down with a guided breathing session."
                  link="/breathing"
                  action="Start breathing"
                  tone="sky"
                />

                <ActionCard
                  icon="✦"
                  title="Talk to Mana"
                  description="A private space to talk, reflect and feel heard."
                  link="/chat"
                  action="Start conversation"
                  tone="violet"
                />

              </div>

            </section>
                        {/* =========================================
                MANA AI
            ========================================== */}

            <section className="space-y-5">

              <SectionHeading
                eyebrow="Mana AI"
                title="Support when you need it"
                description="Your AI wellness companion is here to help you reflect, understand patterns and take your next small step."
                action={
                  <Link
                    to="/chat"
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
                  >
                    Open Mana →
                  </Link>
                }
              />

              <div className="grid gap-5 xl:grid-cols-2">

                <div className="overflow-hidden rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-white p-1 shadow-[0_20px_60px_-40px_rgba(139,92,246,0.35)] dark:border-violet-900/20 dark:from-violet-950/20 dark:via-white/[0.03] dark:to-white/[0.02]">

                  <div className="rounded-[24px] bg-white/70 p-5 backdrop-blur sm:p-6 dark:bg-black/10">
                    <AIRecommendations />
                  </div>

                </div>


                <div className="premium-card overflow-hidden p-5 sm:p-6">
                  <AIQuickChat />
                </div>

              </div>

            </section>


            {/* =========================================
                JOURNAL & ACTIVITY
            ========================================== */}

            <section className="space-y-5">

              <SectionHeading
                eyebrow="Your reflections"
                title="Stay connected with your journey"
                description="Your recent thoughts and wellness activity, all in one quiet place."
              />

              <div className="grid gap-5 xl:grid-cols-2">

                <div className="premium-card p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Recent journal
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        Your latest reflections
                      </p>
                    </div>

                    <Link
                      to="/journal"
                      className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                    >
                      View all →
                    </Link>
                  </div>

                  <RecentJournal />
                </div>


                <div className="premium-card p-5 sm:p-6">
                  <div className="mb-5">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Recent activity
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Your wellness journey in motion
                    </p>
                  </div>

                  <RecentActivity />
                </div>

              </div>

            </section>


            {/* =========================================
                WELLNESS CENTER
            ========================================== */}

            <section className="space-y-5">

              <SectionHeading
                eyebrow="Wellness center"
                title="Build a calmer daily rhythm"
                description="Simple resources designed to fit naturally into student life."
              />

              <div className="grid gap-5 xl:grid-cols-3">

                <div className="premium-card p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-xl dark:bg-emerald-950/30">
                    🌿
                  </div>

                  <WellnessTips />
                </div>


                <div className="premium-card p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-xl dark:bg-sky-950/30">
                    ◷
                  </div>

                  <UpcomingSessions />
                </div>


                <div className="overflow-hidden rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 dark:border-violet-900/20 dark:from-violet-950/20 dark:to-fuchsia-950/10">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-xl shadow-sm dark:bg-white/10">
                    ✨
                  </div>

                  <QuoteCard />
                </div>

              </div>

            </section>


            {/* =========================================
                PERSONALIZATION
            ========================================== */}

            <section className="grid gap-5 xl:grid-cols-2">

              <div className="premium-card p-6 sm:p-7">
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Personalize
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                    Make ManaSetu yours
                  </h2>
                </div>

                <WidgetToggle />
              </div>


              <div className="overflow-hidden rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 dark:border-emerald-900/20 dark:from-emerald-950/20 dark:via-white/[0.03] dark:to-teal-950/10 sm:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm dark:bg-white/10">
                    🌱
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                      A gentle reminder
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                      You don't have to do everything today.
                    </h2>

                    <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
                      Take one moment to check in with yourself.
                      Your mental wellbeing deserves space too.
                    </p>
                  </div>

                </div>


                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  <ReminderCard
                    emoji="😊"
                    title="Mood"
                  />

                  <ReminderCard
                    emoji="📖"
                    title="Journal"
                  />

                  <ReminderCard
                    emoji="🌬"
                    title="Breathe"
                  />

                  <ReminderCard
                    emoji="✦"
                    title="Mana"
                  />

                </div>

              </div>

            </section>


            {/* =========================================
                FINAL QUIET CTA
            ========================================== */}

            <section className="relative overflow-hidden rounded-[32px] bg-slate-900 px-6 py-10 text-white shadow-[0_25px_70px_-35px_rgba(15,23,42,0.6)] sm:px-10">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                <div className="max-w-2xl">

                  <p className="text-sm font-medium text-emerald-300">
                    One small step
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                    How would you like to care for yourself today?
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    There is no perfect way to feel better.
                    Start with whatever feels easiest right now.
                  </p>

                </div>


                <div className="flex flex-wrap gap-3">

                  <Link
                    to="/journal"
                    className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
                  >
                    Write
                  </Link>

                  <Link
                    to="/chat"
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Talk to Mana
                  </Link>

                </div>

              </div>

            </section>


            {/* =========================================
                FOOTER
            ========================================== */}

            <footer className="border-t border-slate-200/80 pt-8 dark:border-white/5">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌿</span>

                    <span className="font-semibold text-slate-800 dark:text-white">
                      ManaSetu
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    A calmer space for your mind.
                  </p>
                </div>


                <div className="flex flex-wrap gap-5 text-sm text-slate-400">

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
                    Mana AI
                  </Link>

                </div>

              </div>


              <div className="mt-6 border-t border-slate-200/70 py-5 text-center dark:border-white/5">

                <p className="text-xs text-slate-400">
                  © {new Date().getFullYear()} ManaSetu · Your wellbeing matters.
                </p>

              </div>

            </footer>

          </div>

        </div>

      </main>

    </div>
  );
}
/* =========================================================
   HELPER COMPONENTS
========================================================= */

function formatToday() {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}


function getFirstName() {
  const storedName =
    localStorage.getItem("userName") ||
    localStorage.getItem("name");

  if (storedName) {
    return storedName.split(" ")[0];
  }

  return "there";
}


/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({
  icon,
  label,
  value,
  suffix = "",
  description,
  accent = "emerald",
}) {
  const accents = {
    emerald:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",

    amber:
      "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",

    violet:
      "bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400",

    sky:
      "bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-400",
  };

  return (
    <div className="group rounded-[24px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_12px_40px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_50px_-30px_rgba(16,185,129,0.35)] dark:border-white/5 dark:bg-white/[0.035] dark:hover:border-emerald-900/50">

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
            {label}
          </p>

          <div className="mt-2 flex items-baseline">

            <span className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {value}
            </span>

            {suffix && (
              <span className="text-sm font-medium text-slate-400">
                {suffix}
              </span>
            )}

          </div>

          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>

        </div>


        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-transform duration-300 group-hover:scale-105 ${accents[accent]}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

      <div className="max-w-2xl">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
          {eyebrow}
        </p>

        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}

      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}

    </div>
  );
}


/* =========================================================
   ACTION CARD
========================================================= */

function ActionCard({
  icon,
  title,
  description,
  link,
  action,
  tone = "emerald",
}) {
  const tones = {
    emerald:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",

    sky:
      "bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-400",

    violet:
      "bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400",
  };

  return (
    <div className="group rounded-[26px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_15px_45px_-35px_rgba(15,23,42,0.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_-35px_rgba(16,185,129,0.3)] dark:border-white/5 dark:bg-white/[0.035]">

      <div className="flex items-start justify-between">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${tones[tone]}`}
        >
          {icon}
        </div>

        <span className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 dark:text-slate-600">
          →
        </span>

      </div>

      <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500 dark:text-slate-400">
        {description}
      </p>

      <Link
        to={link}
        className="mt-5 inline-flex text-sm font-semibold text-slate-700 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
      >
        {action}
        <span className="ml-1">→</span>
      </Link>

    </div>
  );
}


/* =========================================================
   REMINDER CARD
========================================================= */

function ReminderCard({ emoji, title }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-3 text-center transition duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-white/5 dark:bg-white/[0.035] dark:hover:bg-white/[0.06]">

      <div className="text-xl">
        {emoji}
      </div>

      <p className="mt-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
        {title}
      </p>

    </div>
  );
}


/* =========================================================
   PREMIUM CARD GLOBAL CLASS
========================================================= */

const premiumCardStyles = `
  rounded-[28px]
  border
  border-slate-200/80
  bg-white/85
  shadow-[0_15px_50px_-35px_rgba(15,23,42,0.35)]
  backdrop-blur-xl
  dark:border-white/5
  dark:bg-white/[0.035]
`;


/* =========================================================
   EXPORT
========================================================= */

export default Dashboard;