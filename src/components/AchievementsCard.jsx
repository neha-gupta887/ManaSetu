import { getAchievements } from "../services/achievementService";

function AchievementsCard({ analytics }) {
  const result = getAchievements(analytics);

  // Make sure achievements is always an array
  const achievements = Array.isArray(result) ? result : [];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-gray-900">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-2xl dark:bg-amber-950/30">
          🏆
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Achievements
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Celebrate your wellness progress
          </p>
        </div>
      </div>

      {/* Empty State */}
      {achievements.length === 0 ? (
        <div className="rounded-2xl bg-slate-50 p-8 text-center dark:bg-white/[0.03]">

          <div className="mb-3 text-4xl">
            🌱
          </div>

          <p className="font-medium text-slate-700 dark:text-slate-300">
            Start tracking your mood to unlock achievements!
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Your wellness milestones will appear here.
          </p>

        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="
                rounded-2xl
                border
                border-emerald-100
                bg-emerald-50/60
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                dark:border-emerald-900/40
                dark:bg-emerald-950/20
              "
            >

              <div className="text-center text-5xl">
                {achievement.icon}
              </div>

              <h3 className="mt-3 text-center text-lg font-bold text-slate-900 dark:text-white">
                {achievement.title}
              </h3>

              <p className="mt-2 text-center text-sm leading-6 text-slate-600 dark:text-slate-400">
                {achievement.description}
              </p>

              <div className="mt-4 text-center">
                <span className="inline-flex rounded-full bg-emerald-600 px-4 py-1 text-sm font-medium text-white">
                  ✅ Unlocked
                </span>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AchievementsCard;