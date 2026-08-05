import { Link } from "react-router-dom";

function DashboardHero({
  stats,
  greeting,
  dailyMessage,
}) {
  return (
    <section className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-10 text-white shadow-2xl">

      {/* Background Blur */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"></div>

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-2xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

            🌿 AI Powered Mental Wellness

          </span>

          <p className="mt-6 text-lg font-medium text-emerald-100">
            {greeting}
          </p>

          <h1 className="mt-2 text-5xl font-extrabold leading-tight">
            How is your heart feeling today? 💚
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            Welcome back to ManaSetu.

            Whether today feels calm,
            stressful,
            exciting,
            or overwhelming,

            we're here to support you.

          </p>

          <div className="mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur">

            <p className="font-medium text-white">
              {dailyMessage}
            </p>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link to="/journal">

              <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:scale-105">

                📝 Reflect Now

              </button>

            </Link>

            <Link to="/chat">

              <button className="rounded-2xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-emerald-700">

                🤖 Talk to Mana

              </button>

            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">

          <StatCard
            title="Today's Wellness"
            value={`${stats.wellnessScore}%`}
          />

          <StatCard
            title="Self-Care Journey"
            value={`🔥 ${stats.streak}`}
          />

          <StatCard
            title="Journal Entries"
            value={stats.journalEntries}
          />

          <StatCard
            title="AI Sessions"
            value={stats.totalMoodEntries}
          />

        </div>

      </div>

    </section>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur transition hover:bg-white/20">

      <p className="text-sm text-emerald-100">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}

export default DashboardHero;