import { useEffect, useState } from "react";

function AnimatedStatCard({
  title,
  value,
  icon,
  color,
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (typeof value !== "number") return;

    let current = 0;

    const increment = Math.ceil(value / 40);

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setDisplayValue(current);
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className={`rounded-3xl p-6 shadow-xl bg-${color}-50 dark:bg-gray-900`}
    >
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>

      <p className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
        {typeof value === "number"
          ? displayValue
          : value}
      </p>
    </div>
  );
}

export default AnimatedStatCard;