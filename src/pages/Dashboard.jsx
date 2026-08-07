import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

            <section className="group relative overflow-hidden rounded-[32px] border border-emerald-100/80 bg-white/90 shadow-[0_24px_80px_-45px_rgba(16,185,129,0.38)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_30px_90px_-45px_rgba(16,185,129,0.48)] dark:border-white/[0.07] dark:bg-white/[0.04]">

              <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full bg-emerald-200/30 blur-3xl transition-transform duration-700 group-hover:scale-110 dark:bg-emerald-900/15" />

                <div className="absolute -bottom-40 left-1/3 h-[320px] w-[320px] rounded-full bg-teal-100/30 blur-3xl dark:bg-teal-950/15" />

                <div className="absolute right-[28%] top-1/2 h-32 w-32 rounded-full bg-lime-100/25 blur-3xl dark:bg-lime-900/10" />

              </div>

              <div className="relative p-6 sm:p-8 lg:p-10">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                  <div className="max-w-3xl">

                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3.5 py-2 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-md dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>

                      Your private wellness space

                    </div>

                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600/80 dark:text-emerald-400/70">
                      {formatToday()}
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[48px] lg:leading-[1.06] dark:text-white">

                      {greeting},{" "}

                      <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400">
                        {getFirstName()}
                      </span>

                      <span className="text-slate-900 dark:text-white">
                        .
                      </span>

                    </h1>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base dark:text-slate-400">
                      {dailyMessage}
                    </p>

                    <div className="mt-6 flex items-center gap-3">

                      <div className="flex -space-x-1.5">

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-xs shadow-sm dark:border-[#101815]">
                          🌿
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-teal-100 text-xs shadow-sm dark:border-[#101815]">
                          💚
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-lime-100 text-xs shadow-sm dark:border-[#101815]">
                          ✨
                        </span>

                      </div>

                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        A little care for yourself goes a long way.
                      </p>

                    </div>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    <Link
                      to="/journal"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-900"
                    >
                      Check in
                      <span className="ml-2">→</span>
                    </Link>

                    <Link
                      to="/chat"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                    >
                      <span className="mr-2">✦</span>
                      Talk to Mana
                    </Link>

                  </div>

                </div>

              </div>

            </section>

            {/* =========================================
                WELLNESS SNAPSHOT
            ========================================== */}

            <section>

              <div className="mb-4 flex items-end justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                    Your wellbeing
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                    Today's snapshot
                  </h2>

                </div>

                <Link
                  to="/analytics"
                  className="hidden text-sm font-medium text-slate-500 transition hover:text-emerald-600 sm:block dark:text-slate-400"
                >
                  View insights →
                </Link>

              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <MetricCard
                  icon="♡"
                  label="Wellness score"
                  value={`${wellnessScore}%`}
                  description="Overall wellbeing"
                  accent="emerald"
                />

                <MetricCard
                  icon="↗"
                  label="Current streak"
                  value={`${streak}`}
                  suffix=" days"
                  description="Keep your rhythm"
                  accent="amber"
                />

                <MetricCard
                  icon="◌"
                  label="Journal entries"
                  value={journalEntries}
                  description="Moments reflected"
                  accent="violet"
                />

                <MetricCard
                  icon="☻"
                  label="Today's mood"
                  value={currentMood}
                  description={`${totalMoodEntries} check-ins recorded`}
                  accent="sky"
                />

              </div>

            </section>

            {/* =========================================
                MAIN OVERVIEW
            ========================================== */}

            <section className="grid gap-6 xl:grid-cols-[1.55fr_0.85fr]">

              <div className="premium-card p-6 sm:p-7">
                <DashboardOverview stats={stats} />
              </div>

              <div className="premium-card p-6 sm:p-7">
                <QuickActions />
              </div>

            </section>
                        {/* =========================================
                EMOTIONAL INSIGHTS
            ========================================== */}

            <section>

              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                    Emotional insights
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                    Understand your patterns
                  </h2>

                  <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                    A gentle view of how your emotional wellbeing has been changing over time.
                  </p>

                </div>

                <Link
                  to="/analytics"
                  className="group/analytics inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100 hover:shadow-md hover:shadow-emerald-500/10 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-300 dark:hover:border-emerald-800/60 dark:hover:bg-emerald-950/40"
                >
                  Full analytics
                  <span className="transition-transform duration-300 group-hover/analytics:translate-x-0.5">
                    →
                  </span>
                </Link>

              </div>

              <div className="grid gap-6 xl:grid-cols-[1.55fr_0.85fr]">

                <div className="premium-card overflow-hidden p-5 sm:p-6">

                  <div className="mb-5 flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Mood over time
                      </h3>

                      <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                        Your recent emotional check-ins
                      </p>

                    </div>

                    <div className="rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
                      Trends
                    </div>

                  </div>

                  <MoodAnalyticsChart />

                </div>

                <div className="premium-card overflow-hidden p-5 sm:p-6">

                  <div className="mb-5">

                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Mood distribution
                    </h3>

                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      A wider view of your check-ins
                    </p>

                  </div>

                  <MoodDistributionChart />

                </div>

              </div>

            </section>

            {/* =========================================
                MOOD CALENDAR + WELLNESS HEATMAP
            ========================================== */}

            <section className="grid gap-6 xl:grid-cols-2">

              <div className="premium-card p-5 sm:p-6">

                <div className="mb-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                    Consistency
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                    Mood calendar
                  </h3>

                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                    See how your emotional check-ins have looked across the month.
                  </p>

                </div>

                <MoodCalendar />

              </div>

              <div className="premium-card p-5 sm:p-6">

                <div className="mb-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
                    Your rhythm
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                    Wellness activity
                  </h3>

                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                    A simple visual view of your wellness activity.
                  </p>

                </div>

                <WellnessHeatmap />

              </div>

            </section>

            {/* =========================================
                QUICK WELLNESS TOOLS
            ========================================== */}

            <section>

              <div className="mb-5">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                  Daily care
                </p>

                <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                  Build small healthy habits
                </h2>

              </div>

              <div className="grid gap-6 lg:grid-cols-3">

                <div className="premium-card p-5 sm:p-6">
                  <WellnessGarden />
                </div>

                <div className="premium-card p-5 sm:p-6">
                  <WeeklyProgress />
                </div>

                <div className="premium-card p-5 sm:p-6">
                  <DailyGoals />
                </div>

              </div>

            </section>

            {/* =========================================
                AI WELLNESS
            ========================================== */}

            <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">

              <div className="premium-card overflow-hidden p-5 sm:p-6">

                <div className="mb-5 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
                      Personalised support
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                      AI wellness recommendations
                    </h2>

                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      Gentle suggestions based on your wellness journey.
                    </p>

                  </div>

                  <span className="rounded-xl bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:bg-violet-950/30 dark:text-violet-300">
                    AI
                  </span>

                </div>

                <AIRecommendations />

              </div>

              <div className="premium-card overflow-hidden p-5 sm:p-6">

                <div className="mb-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                    Instant support
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    Talk it out
                  </h2>

                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                    Have a quick conversation whenever you need one.
                  </p>

                </div>

                <AIQuickChat />

              </div>

            </section>
                        {/* =========================================
                JOURNAL + RECENT ACTIVITY
            ========================================== */}

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">

              <div className="premium-card overflow-hidden p-5 sm:p-6">

                <div className="mb-5 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600 dark:text-amber-400">
                      Reflection
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Your recent journal
                    </h2>

                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      A quiet space to look back at your thoughts.
                    </p>

                  </div>

                  <Link
                    to="/journal"
                    className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Open journal →
                  </Link>

                </div>

                <RecentJournal />

              </div>

              <div className="premium-card overflow-hidden p-5 sm:p-6">

                <div className="mb-5 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
                      Your journey
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Recent activity
                    </h2>

                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      A quick look at your latest wellness actions.
                    </p>

                  </div>

                  <span className="rounded-xl bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 dark:bg-sky-950/30 dark:text-sky-300">
                    Live
                  </span>

                </div>

                <RecentActivity />

              </div>

            </section>

            {/* =========================================
                WELLNESS SUPPORT
            ========================================== */}

            <section className="grid gap-6 lg:grid-cols-3">

              <div className="premium-card p-5 sm:p-6">

                <div className="mb-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                    Gentle reminder
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    Wellness tip
                  </h2>

                </div>

                <WellnessTips />

              </div>

              <div className="premium-card p-5 sm:p-6">

                <div className="mb-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
                    Support
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    Upcoming sessions
                  </h2>

                </div>

                <UpcomingSessions />

              </div>

              <div className="premium-card p-5 sm:p-6">

                <div className="mb-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
                    A moment for you
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    Today's thought
                  </h2>

                </div>

                <QuoteCard />

              </div>

            </section>

            {/* =========================================
                NOTIFICATIONS + WIDGETS
            ========================================== */}

            <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">

              <div className="premium-card overflow-hidden p-5 sm:p-6">

                <div className="mb-5 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600 dark:text-rose-400">
                      Stay informed
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Notifications
                    </h2>

                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      Helpful reminders and updates from your wellness space.
                    </p>

                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-sm dark:bg-rose-950/30">
                    ♡
                  </span>

                </div>

                <NotificationPreview />

              </div>

              <div className="premium-card overflow-hidden p-5 sm:p-6">

                <div className="mb-5 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      Personalise
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                      Dashboard widgets
                    </h2>

                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      Choose the parts of your wellness dashboard you want to see.
                    </p>

                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-sm dark:bg-white/10">
                    ⚙
                  </span>

                </div>

                <WidgetToggle />

              </div>

            </section>

            {/* =========================================
                FINAL CTA
            ========================================== */}

            <section className="relative overflow-hidden rounded-[28px] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm sm:p-8 dark:border-emerald-900/30 dark:from-emerald-950/30 dark:via-[#101815] dark:to-teal-950/20">

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/20" />

              <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-teal-200/20 blur-3xl dark:bg-teal-900/10" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="max-w-2xl">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                    Keep going
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Your wellbeing is worth showing up for.
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Take a small moment for yourself today. Even a few mindful minutes can make a difference.
                  </p>

                </div>

                <Link
                  to="/journal"
                  className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:hover:text-slate-950"
                >
                  Take a moment
                  <span className="ml-2">→</span>
                </Link>

              </div>

            </section>
                        {/* =========================================
                FOOTER NOTE
            ========================================== */}

            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-center sm:flex-row sm:text-left dark:border-white/[0.06]">

              <p className="text-xs text-slate-400 dark:text-slate-500">
                Your wellness journey is personal. Take it one day at a time.
              </p>

              <Link
                to="/privacy"
                className="text-xs font-medium text-slate-400 transition hover:text-emerald-600 dark:text-slate-500 dark:hover:text-emerald-400"
              >
                Your space. Your privacy.
              </Link>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

/* =====================================================
   HELPER COMPONENTS
===================================================== */

function MetricCard({
  icon,
  label,
  value,
  suffix = "",
  description,
  accent = "emerald",
}) {
  const accentStyles = {
    emerald: {
      icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
      glow: "group-hover:bg-emerald-100/80 dark:group-hover:bg-emerald-950/50",
    },

    amber: {
      icon: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
      glow: "group-hover:bg-amber-100/80 dark:group-hover:bg-amber-950/50",
    },

    violet: {
      icon: "bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400",
      glow: "group-hover:bg-violet-100/80 dark:group-hover:bg-violet-950/50",
    },

    sky: {
      icon: "bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-400",
      glow: "group-hover:bg-sky-100/80 dark:group-hover:bg-sky-950/50",
    },
  };

  const style = accentStyles[accent] || accentStyles.emerald;

  return (
    <div className="premium-card group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1">

      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-100/60 blur-2xl transition-all duration-500 ${style.glow}`}
      />

      <div className="relative">

        <div className="flex items-start justify-between gap-3">

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-semibold transition-transform duration-300 group-hover:scale-105 ${style.icon}`}
          >
            {icon}
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300 dark:text-slate-600">
            Today
          </span>

        </div>

        <p className="mt-5 text-xs font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <div className="mt-1 flex items-baseline gap-1">

          <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </span>

          {suffix && (
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
              {suffix}
            </span>
          )}

        </div>

        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
}

/* =====================================================
   DATE / USER HELPERS
===================================================== */

function formatToday() {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function getFirstName() {
  try {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      const name =
        parsedUser?.displayName ||
        parsedUser?.name ||
        parsedUser?.fullName ||
        parsedUser?.user_metadata?.full_name ||
        parsedUser?.user_metadata?.name;

      if (name) {
        return String(name).trim().split(/\s+/)[0];
      }
    }
  } catch (error) {
    console.warn("Unable to read user name:", error);
  }

  return "there";
}

export default Dashboard;
