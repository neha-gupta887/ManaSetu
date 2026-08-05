import AnimatedStatCard from "./AnimatedStatCard";
function DashboardOverview({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <AnimatedStatCard
        title="Wellness Score"
        value={`${stats.wellnessScore}%`}
        icon="🌿"
        color="emerald"
      />

      <AnimatedStatCard
        title="Current Streak"
        value={`${stats.streak} Days`}
        icon="🔥"
        color="yellow"
      />

      <AnimatedStatCard
        title="Journal Entries"
        value={stats.journalEntries}
        icon="📖"
        color="blue"
      />

      <AnimatedStatCard
        title="Today's Mood"
        value={stats.currentMood}
        icon="{stats.currentMood}"
        color="purple"
      />
    </div>
  );
}

export default DashboardOverview;