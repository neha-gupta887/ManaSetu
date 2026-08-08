import { Wind, Bot, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ActionCard = ({ to, icon, title, description, color }) => (
  <Link
    to={to}
    className={`group rounded-2xl bg-white p-6 transition-all duration-300 hover:shadow-lg dark:bg-slate-800 dark:hover:bg-slate-700`}
  >
    <div className="flex items-center justify-between">
      <div
        className={`rounded-full bg-${color}-100 p-3 text-${color}-600 dark:bg-${color}-900/50 dark:text-${color}-400`}
      >
        {icon}
      </div>
      <ArrowRight
        size={20}
        className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
      />
    </div>
    <h3 className="mt-4 text-lg font-bold text-slate-800 dark:text-white">
      {title}
    </h3>
    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
      {description}
    </p>
  </Link>
);

function QuickActionCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <ActionCard
        to="/breathing-exercise"
        icon={<Wind size={24} />}
        title="Breathing"
        description="Take a moment to relax and refocus with a guided exercise."
        color="blue"
      />
      <ActionCard
        to="/chat"
        icon={<Bot size={24} />}
        title="AI Companion"
        description="Chat with Mana AI for support, insights, or just to talk."
        color="purple"
      />
      <ActionCard
        to="/support"
        icon={<User size={24} />}
        title="Senior Buddy"
        description="Connect with a mentor for guidance and support."
        color="amber"
      />
    </div>
  );
}

export default QuickActionCards;
