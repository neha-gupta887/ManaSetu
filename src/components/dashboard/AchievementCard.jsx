import { useEffect, useState } from "react";
import { getAchievements } from "../../services/achievementService";

function AchievementCard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAchievements();
      setItems(data);
    };

    load();
  }, []);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900">

      <h2 className="text-2xl font-bold">
        🏆 Achievements
      </h2>

      {items.length === 0 ? (
        <p className="mt-4 text-gray-500">
          No achievements yet.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-emerald-50 p-4 dark:bg-gray-800"
            >
              <div className="flex items-center gap-3">

                <span className="text-3xl">
                  {item.icon}
                </span>

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Unlocked
                  </p>

                </div>

              </div>

              <span className="text-green-600">
                ✓
              </span>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AchievementCard;