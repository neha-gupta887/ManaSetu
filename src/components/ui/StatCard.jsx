import { motion } from "framer-motion";

const colors = {
  emerald: {
    border: "border-emerald-500",
    bg: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
    icon: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  blue: {
    border: "border-blue-500",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    icon: "bg-blue-100 dark:bg-blue-900/40",
  },
  yellow: {
    border: "border-yellow-500",
    bg: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    icon: "bg-yellow-100 dark:bg-yellow-900/40",
  },
  red: {
    border: "border-red-500",
    bg: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
    icon: "bg-red-100 dark:bg-red-900/40",
  },
  purple: {
    border: "border-purple-500",
    bg: "from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20",
    icon: "bg-purple-100 dark:bg-purple-900/40",
  },
};

function StatCard({ title, value, icon, color = "emerald" }) {
  const theme = colors[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden rounded-3xl border-l-4 ${theme.border}
      bg-gradient-to-br ${theme.bg}
      shadow-lg hover:shadow-2xl
      p-6 transition-all duration-300`}
    >
      {/* Decorative Circle */}
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/30 dark:bg-white/5 blur-2xl"></div>

      <div className="relative flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${theme.icon} shadow-md`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;