function WellnessScoreCard({ score }) {
  let status = "Excellent";
  let color = "text-green-600";

  if (score < 80) {
    status = "Good";
    color = "text-blue-600";
  }

  if (score < 60) {
    status = "Needs Attention";
    color = "text-yellow-600";
  }

  if (score < 40) {
    status = "High Risk";
    color = "text-red-600";
  }

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
      <h2 className="text-xl font-bold">
        💚 Overall Wellness Score
      </h2>

      <div className="flex items-center justify-between mt-6">
        <div>
          <h1 className="text-5xl font-extrabold">
            {score}
            <span className="text-2xl">/100</span>
          </h1>

          <p className="mt-2 text-green-100">
            AI Generated Wellness Score
          </p>
        </div>

        <div className="bg-white rounded-xl px-4 py-2">
          <span className={`font-bold ${color}`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WellnessScoreCard;