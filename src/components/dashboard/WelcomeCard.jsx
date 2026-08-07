import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";

function WelcomeCard({ stats = {} }) {
  const [userName, setUserName] = useState("Student");

  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let emoji = "🌙";

  if (hour < 12) {
    greeting = "Good Morning";
    emoji = "☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    emoji = "🌤️";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const name =
        user.displayName ||
        user.email?.split("@")[0] ||
        "Student";

      setUserName(name);
    }
  }, []);

  const wellnessScore = stats?.wellnessScore ?? 0;
  const streak = stats?.streak ?? 0;
  const journalEntries = stats?.journalEntries ?? 0;
  const currentMood = stats?.currentMood || "Not checked";

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white shadow-2xl">

      {/* Decorative Glow */}

      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

      <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />

      {/* Content */}

      <div className="relative z-10 p-7 sm:p-8 lg:p-10">

        {/* AI Badge */}

        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-300" />

          <span className="font-medium">
            Mana AI is Active
          </span>

        </div>

        {/* Date */}

        <p className="mt-6 tracking-wide text-green-100">
          {today}
        </p>

        {/* Greeting */}

        <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">

          {emoji} {greeting},{" "}

          <span className="text-yellow-200">
            {userName}
          </span>

          {" "}👋

        </h2>

        {/* Title */}

        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
          Welcome back to ManaSetu 🌿
        </h3>

        {/* Description */}

        <p className="mt-6 max-w-3xl text-base leading-8 text-green-100 sm:text-lg">

          Your AI wellness companion is ready to help you
          improve focus, reduce stress, build healthier
          habits, and maintain better mental wellbeing.

        </p>

        {/* Action Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            to="/journal"
            className="rounded-2xl bg-white px-7 py-3 font-semibold text-emerald-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-300/40"
          >
            😊 Start Mood Check
          </Link>

          <Link
            to="/ai-companion"
            className="rounded-2xl border border-white/30 bg-white/10 px-7 py-3 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-emerald-700"
          >
            🤖 Talk to Mana AI
          </Link>

        </div>

        {/* Dashboard Stats */}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

          {/* Wellness Score */}

          <StatCard
            value={`${wellnessScore}%`}
            label="Wellness Score"
            icon="💚"
          />

          {/* Streak */}

          <StatCard
            value={streak}
            label="Day Streak"
            icon="🔥"
          />

          {/* Journal */}

          <StatCard
            value={journalEntries}
            label="Journals"
            icon="📖"
          />

          {/* Mood */}

          <StatCard
            value={currentMood}
            label="Today's Mood"
            icon="😊"
          />

          {/* AI */}

          <StatCard
            value="Online"
            label="Mana AI Status"
            icon="🤖"
          />

        </div>

      </div>

    </section>
  );
}

/* =====================================================
                      STAT CARD
===================================================== */

function StatCard({ value, label, icon }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/15 p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:p-5">

      <div className="text-2xl sm:text-3xl">
        {icon}
      </div>

      <h3 className="mt-2 truncate text-xl font-bold sm:text-2xl">
        {value}
      </h3>

      <p className="mt-1 text-xs text-green-100 sm:text-sm">
        {label}
      </p>

    </div>
  );
}

export default WelcomeCard;