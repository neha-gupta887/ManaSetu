import {
  FaLeaf,
  FaHeart,
  FaSpa,
  FaSun,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function DashboardHero({
  stats,
  greeting,
  dailyMessage,
}) {
  // Today's Date
  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
    }
  );

  // Daily Affirmations
  const affirmations = [
    "💚 You have survived every difficult day so far.",
    "🌿 Small progress is still progress.",
    "✨ Rest is productive too.",
    "🌸 Your feelings are valid.",
    "🌈 Be proud of how far you've come.",
    "☀️ Every new day is a fresh beginning.",
    "🍃 Breathe. Slow down. You've got this.",
  ];

  const affirmation =
    affirmations[
      new Date().getDate() %
        affirmations.length
    ];

  return (
    <section className="relative mt-8 overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-10 text-white shadow-2xl">

      {/* Decorative Background */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-cyan-200/10 blur-3xl"></div>

      <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-green-200/10 blur-3xl"></div>

      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT SIDE */}

        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-md">

            <FaLeaf />

            Your Safe Wellness Space

          </span>

          <div className="mt-8">

            <p className="text-lg font-medium text-emerald-100">

              {greeting}

            </p>

            <div className="mt-2 flex items-center gap-2 text-emerald-100">

              <FaCalendarAlt />

              <span>{today}</span>

            </div>

          </div>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight">

            How is your heart feeling today? 💚

          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-50">

            ManaSetu is your personal wellness companion.

            Slow down.

            Take a deep breath.

            Reflect on your emotions,
            celebrate your progress,
            and remember—

            you don't have to figure everything out today.

          </p>

          {/* Daily Message */}

          <div className="mt-8 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">

            <div className="flex items-center gap-2">

              <FaSun />

              <h3 className="font-semibold">

                Today's Wellness Message

              </h3>

            </div>

            <p className="mt-4">

              {dailyMessage}

            </p>

            <div className="mt-5 rounded-2xl bg-white/10 p-4">

              <p className="text-sm uppercase tracking-wider text-emerald-100">

                Daily Affirmation

              </p>

              <p className="mt-2 text-lg font-semibold">

                {affirmation}

              </p>

            </div>

          </div>
                    {/* CTA Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <Link to="/journal">

              <button className="flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                <FaHeart />

                Reflect Now

              </button>

            </Link>

            <Link to="/chat">

              <button className="flex items-center gap-2 rounded-2xl border border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-emerald-700">

                <FaLeaf />

                Talk to Mana

              </button>

            </Link>

            <Link to="/breathing">

              <button className="flex items-center gap-2 rounded-2xl border border-white/60 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-emerald-700">

                <FaSpa />

                Take a Breath

              </button>

            </Link>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="grid grid-cols-2 gap-6">

          <StatCard
            title="Today's Wellness"
            value={`${stats.wellnessScore}%`}
            icon="💚"
          />

          <StatCard
            title="Self-Care Journey"
            value={stats.streak}
            icon="🌱"
          />

          <StatCard
            title="Journal Entries"
            value={stats.journalEntries}
            icon="📖"
          />

          <StatCard
            title="Wellness Check-ins"
            value={stats.totalMoodEntries}
            icon="🤖"
          />

        </div>

      </div>

    </section>
  );
}

function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/20
        bg-white/10
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:bg-white/20
        hover:shadow-2xl
      "
    >

      <div className="text-3xl">

        {icon}

      </div>

      <p className="mt-4 text-sm font-medium text-emerald-100">

        {title}

      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-white">

        {value}

      </h2>

    </div>
  );
}

export default DashboardHero;