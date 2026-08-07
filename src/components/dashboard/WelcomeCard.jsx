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
    <section className="relative mt-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white shadow-2xl">

      {/* Decorative Background */}

      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

      <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />

      {/* Small floating circles */}

      <div className="absolute right-10 top-10 h-3 w-3 rounded-full bg-white/30" />

      <div className="absolute right-24 top-24 h-2 w-2 rounded-full bg-white/40" />

      <div className="absolute bottom-20 left-1/2 h-2 w-2 rounded-full bg-white/30" />

      {/* Content */}

      <div className="relative z-10 p-7 sm:p-8 lg:p-10">

        {/* AI Status */}

        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-300" />

          <span className="text-sm font-medium sm:text-base">
            Mana AI is here for you
          </span>

        </div>

        {/* Date */}

        <p className="mt-6 text-sm tracking-wide text-emerald-100 sm:text-base">
          {today}
        </p>

        {/* Greeting */}

        <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

          {emoji} {greeting},{" "}

          <span className="text-yellow-200">
            {userName}
          </span>

          {" "}👋

        </h2>

        {/* Main Message */}

        <h3 className="mt-5 max-w-3xl text-2xl font-bold sm:text-3xl">

          How are you feeling today?

        </h3>

        <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-100 sm:text-lg">

          You don't have to have everything figured out.

          Take a moment, check in with yourself,
          and let ManaSetu help you take one small
          step toward feeling better.

        </p>

        {/* Main Actions */}

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            to="/journal"
            className="rounded-2xl bg-white px-7 py-3.5 font-semibold text-emerald-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            😊 Check In
          </Link>

          <Link
            to="/ai-companion"
            className="rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-emerald-700"
          >
            🤖 Talk to Mana
          </Link>

        </div>

        {/* Gentle Reminder */}

        <div className="mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">

          <p className="text-sm font-semibold text-emerald-100">
            🌿 A gentle reminder
          </p>

          <p className="mt-2 text-base leading-7 text-white">
            You are allowed to slow down.
            Your mental wellbeing matters just as much as your productivity.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

          <StatCard
            value={`${wellnessScore}%`}
            label="Wellness Score"
            icon="💚"
          />

          <StatCard
            value={streak}
            label="Day Streak"
            icon="🔥"
          />

          <StatCard
            value={journalEntries}
            label="Journals"
            icon="📖"
          />

          <StatCard
            value={currentMood}
            label="Today's Mood"
            icon="😊"
          />

          <StatCard
            value="Online"
            label="Mana AI"
            icon="🤖"
          />

        </div>

      </div>

    </section>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">

      <div className="text-2xl sm:text-3xl">
        {icon}
      </div>

      <h3 className="mt-2 truncate text-xl font-bold sm:text-2xl">
        {value}
      </h3>

      <p className="mt-1 text-xs text-emerald-100 sm:text-sm">
        {label}
      </p>

    </div>
  );
}

export default WelcomeCard;