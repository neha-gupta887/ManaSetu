const colors = {
  emerald: "border-emerald-500",
  blue: "border-blue-500",
  yellow: "border-yellow-500",
  red: "border-red-500",
  purple: "border-purple-500",
};

function StatCard({ title, value, icon, color = "emerald" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 ${colors[color]} border-l-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

export default StatCard;