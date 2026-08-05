import { FaEye, FaEyeSlash } from "react-icons/fa";

function WidgetToggle({
  showWidgets,
  setShowWidgets,
}) {
  return (
    <button
      onClick={() => setShowWidgets(!showWidgets)}
      className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white transition hover:bg-emerald-700"
    >
      {showWidgets ? <FaEyeSlash /> : <FaEye />}

      {showWidgets ? "Hide Widgets" : "Show Widgets"}
    </button>
  );
}

export default WidgetToggle;