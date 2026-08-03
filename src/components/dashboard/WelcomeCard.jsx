import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";

function WelcomeCard() {
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
    if (auth.currentUser) {
      const name =
        auth.currentUser.displayName ||
        auth.currentUser.email?.split("@")[0] ||
        "Student";

      setUserName(name);
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-700 via-green-600 to-teal-600 shadow-2xl text-white">

      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-teal-300/10 blur-3xl"></div>

      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-emerald-300/10 blur-3xl"></div>

      <div className="relative z-10 p-8 lg:p-10">

        {/* AI Badge */}

        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2">

          <span className="w-3 h-3 rounded-full bg-green-300 animate-pulse"></span>

          <span className="font-medium">
            Mana AI is Active
          </span>

        </div>

        {/* Date */}

        <p className="mt-6 text-green-100 tracking-wide">

          {today}

        </p>

        {/* Greeting */}

        <h2 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight">

          {emoji} {greeting},

          <span className="text-yellow-200">

            {" "}{userName}

          </span>

          👋

        </h2>

        {/* Title */}

        <h3 className="mt-4 text-3xl font-bold">

          Welcome back to ManaSetu 🌿

        </h3>

        {/* Description */}

        <p className="mt-6 max-w-3xl text-lg leading-8 text-green-100">

          Your AI wellness companion is ready to help you
          improve focus, reduce stress, build healthier
          habits, and maintain better mental wellbeing.

          Every conversation makes Mana AI smarter and
          more personalized for you.

        </p>

        {/* Action Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">
                    <Link to="/journal">
            <button className="rounded-2xl bg-white px-7 py-3 font-semibold text-emerald-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-300">
              😊 Start Mood Check
            </button>
          </Link>

          <Link to="/ai-companion">
            <button className="rounded-2xl border border-white/30 bg-white/10 px-7 py-3 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-emerald-700">
              🤖 Talk to Mana AI
            </button>
          </Link>

        </div>

        {/* Dashboard Stats */}

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-5">

          {/* Wellness Score */}

          <div className="rounded-2xl border border-white/20 bg-white/15 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">

            <h3 className="text-3xl font-bold">
              92%
            </h3>

            <p className="mt-2 text-sm text-green-100">
              Wellness Score
            </p>

          </div>

          {/* Streak */}

          <div className="rounded-2xl border border-white/20 bg-white/15 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">

            <h3 className="text-3xl font-bold">
              🔥 15
            </h3>

            <p className="mt-2 text-sm text-green-100">
              Day Streak
            </p>

          </div>

          {/* Journal */}

          <div className="rounded-2xl border border-white/20 bg-white/15 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">

            <h3 className="text-3xl font-bold">
              📖 28
            </h3>

            <p className="mt-2 text-sm text-green-100">
              Journals
            </p>

          </div>

          {/* Mood */}

          <div className="rounded-2xl border border-white/20 bg-white/15 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">

            <h3 className="text-3xl font-bold">
              😊 Happy
            </h3>

            <p className="mt-2 text-sm text-green-100">
              Today's Mood
            </p>

          </div>

          {/* AI Status */}

          <div className="rounded-2xl border border-white/20 bg-white/15 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">

            <h3 className="text-3xl font-bold">
              🤖 Online
            </h3>

            <p className="mt-2 text-sm text-green-100">
              Mana AI Status
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;