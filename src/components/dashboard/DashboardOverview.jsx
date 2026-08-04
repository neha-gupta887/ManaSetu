import StatCard from "../ui/StatCard";

function DashboardOverview({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <StatCard
        title="Wellness Score"
        value={`${stats.wellnessScore}%`}
        icon="🌿"
        color="emerald"
      />

      <StatCard
        title="Current Streak"
        value={`${stats.streak} Days`}
        icon="🔥"
        color="yellow"
      />

      <StatCard
        title="Journal Entries"
        value={stats.journalEntries}
        icon="📖"
        color="blue"
      />

      <StatCard
        title="Today's Mood"
        value={stats.currentMood}
        icon="😊"
        color="purple"
      />
    </div>
  );
}

export default DashboardOverview;