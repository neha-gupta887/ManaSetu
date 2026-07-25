import { motion } from "framer-motion";

const colors = {
  emerald: "border-emerald-500",
  blue: "border-blue-500",
  yellow: "border-yellow-500",
  red: "border-red-500",
  purple: "border-purple-500",
};

function StatCard({ title, value, icon, color = "emerald" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-l-4 ${colors[color]} transition-colors duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {value}
          </h2>
        </div>

        <div className="text-4xl">{icon}</div>
      </div>
    </motion.div>
  );
}

export default StatCard;