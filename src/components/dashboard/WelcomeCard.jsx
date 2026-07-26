import { Link } from "react-router-dom";

function WelcomeCard() {
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

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-2xl p-6 sm:p-8 lg:p-10">

      {/* Background Glow */}
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10">

        {/* Greeting */}
        <p className="text-green-100 text-sm sm:text-base">
          {today}
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
          {emoji} {greeting}!
        </h2>

        <h3 className="mt-2 text-xl sm:text-2xl font-semibold">
          Welcome back to ManaSetu 🌿
        </h3>

        <p className="mt-5 max-w-2xl text-green-100 leading-8">
          Every small step toward understanding your emotions is a step toward a
          healthier and happier life. Pause for a moment, check in with
          yourself, and continue building healthy habits today.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <Link to="/journal">
            <button className="w-full sm:w-auto bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              😊 Start Mood Check
            </button>
          </Link>

          <Link to="/ai-companion">
            <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300">
              🤖 AI Companion
            </button>
          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">92%</h3>
            <p className="text-sm text-green-100">Wellness Score</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">🔥 15</h3>
            <p className="text-sm text-green-100">Day Streak</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">📖 28</h3>
            <p className="text-sm text-green-100">Journals</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">😊 Happy</h3>
            <p className="text-sm text-green-100">Today's Mood</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default WelcomeCard;