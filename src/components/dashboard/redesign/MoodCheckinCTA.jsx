import { Smile } from "lucide-react";
import { Link } from "react-router-dom";

function MoodCheckinCTA() {
  return (
    <div className="rounded-2xl bg-emerald-500 p-6 text-white shadow-lg shadow-emerald-500/20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">How are you feeling?</h2>
          <p className="mt-1 text-emerald-100">
            A quick mood check-in can help you understand your emotions.
          </p>
        </div>
        <Smile size={40} className="text-emerald-300" />
      </div>
      <Link to="/mood-analytics">
        <button className="mt-4 w-full rounded-lg bg-white py-3 font-bold text-emerald-500 transition hover:bg-emerald-50">
          Check Your Mood
        </button>
      </Link>
    </div>
  );
}

export default MoodCheckinCTA;
