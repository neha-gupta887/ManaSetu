import { useEffect, useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { getGardenData } from "../../services/gardenService";

function WellnessGarden() {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);

  const [tree, setTree] = useState({
    emoji: "🌱",
    title: "Seed",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGarden = async () => {
      try {
        const data = await getGardenData();

        if (data) {
          setXP(data.xp || 0);
          setLevel(data.level || 1);

          setTree({
            emoji: data.tree || "🌱",
            title: data.treeTitle || "Seed",
          });
        }
      } catch (error) {
        console.error("Error loading garden:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGarden();
  }, []);

  const nextLevelXP = level * 100;

  const progress = Math.min(
    (xp / nextLevelXP) * 100,
    100
  );

  if (loading) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-8 text-white shadow-xl">
        <h2 className="text-2xl font-bold">
          🌿 Loading Garden...
        </h2>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-8 text-white shadow-xl">

      {/* Header */}

      <div className="flex items-center gap-4">

        <FaSeedling className="text-4xl" />

        <div>

          <h2 className="text-3xl font-bold">
            My Wellness Garden
          </h2>

          <p className="text-emerald-100">
            Grow your garden by taking care of yourself.
          </p>

        </div>

      </div>

      {/* Tree */}

      <div className="mt-10 text-center">

        <div className="text-8xl transition-all duration-500 hover:scale-110">

          {tree.emoji}

        </div>

        <h3 className="mt-5 text-3xl font-bold">

          {tree.title}

        </h3>

        <p className="mt-2 text-emerald-100">

          Level {level}

        </p>

      </div>

      {/* Progress */}

      <div className="mt-10">

        <div className="flex items-center justify-between">

          <span className="font-medium">

            XP Progress

          </span>

          <span>

            {xp} / {nextLevelXP}

          </span>

        </div>

        <div className="mt-3 h-4 overflow-hidden rounded-full bg-white/20">

          <div
            className="h-full rounded-full bg-white transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

          <p className="text-sm text-emerald-100">

            Current XP

          </p>

          <h3 className="mt-2 text-2xl font-bold">

            {xp}

          </h3>

        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

          <p className="text-sm text-emerald-100">

            Current Level

          </p>

          <h3 className="mt-2 text-2xl font-bold">

            {level}

          </h3>

        </div>

      </div>

      {/* Today's Rewards */}

      <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">

        <h4 className="text-lg font-semibold">

          🌿 Today's Rewards

        </h4>

        <div className="mt-5 space-y-3">

          <Reward
            title="😊 Mood Check-in"
            xp="+5 XP"
          />

          <Reward
            title="📖 Journal Entry"
            xp="+10 XP"
          />

          <Reward
            title="🌬 Breathing Exercise"
            xp="+8 XP"
          />

          <Reward
            title="🤖 Talk to Mana AI"
            xp="+5 XP"
          />

        </div>

      </div>

    </div>
  );
}

function Reward({ title, xp }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">

      <span>{title}</span>

      <span className="font-bold">

        {xp}

      </span>

    </div>
  );
}

export default WellnessGarden;