function TrendCard({ trend }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5 dark:text-white">
        📈 AI Trend Analysis
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Mood:</strong> {trend.mood}
        </p>

        <p>
          <strong>Stress:</strong> {trend.stress}
        </p>

        <p>
          <strong>Wellness:</strong> {trend.wellness}
        </p>

      </div>

    </div>
  );
}

export default TrendCard;