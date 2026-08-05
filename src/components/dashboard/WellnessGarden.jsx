import { FaSeedling } from "react-icons/fa";

function WellnessGarden() {
  // Temporary demo data
  const xp = 120;
  const level = 2;
  const nextLevelXP = 200;

  const progress = (xp / nextLevelXP) * 100;

  const getTree = () => {
    if (xp < 50)
      return {
        emoji: "🌱",
        title: "Seed",
      };

    if (xp < 150)
      return {
        emoji: "🌿",
        title: "Growing Plant",
      };

    if (xp < 300)
      return {
        emoji: "🌳",
        title: "Healthy Tree",
      };

    if (xp < 500)
      return {
        emoji: "🌸",
        title: "Blooming Tree",
      };

    return {
      emoji: "🌺",
      title: "Wellness Forest",
    };
  };

  const tree = getTree();

  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-8 text-white shadow-xl">

      <div className="flex items-center gap-3">

        <FaSeedling className="text-3xl" />

        <div>

          <h2 className="text-2xl font-bold">
            My Wellness Garden
          </h2>

          <p className="text-emerald-100">
            Grow your garden by taking care of yourself.
          </p>

        </div>

      </div>

      <div className="mt-8 text-center">

        <div className="text-8xl animate-bounce">
          {tree.emoji}
        </div>

        <h3 className="mt-4 text-3xl font-bold">
          {tree.title}
        </h3>

        <p className="mt-2 text-emerald-100">
          Level {level}
        </p>

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm">

          <span>XP Progress</span>

          <span>
            {xp} / {nextLevelXP}
          </span>

        </div>

        <div className="mt-2 h-4 overflow-hidden rounded-full bg-white/20">

          <div
            className="h-full rounded-full bg-white transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">

        <h4 className="font-semibold">
          🌿 Today's Growth
        </h4>

        <div className="mt-4 space-y-2">

          <div className="flex justify-between">
            <span>😊 Mood Check-in</span>
            <span>+5 XP</span>
          </div>

          <div className="flex justify-between">
            <span>📖 Journal Entry</span>
            <span>+10 XP</span>
          </div>

          <div className="flex justify-between">
            <span>🌬 Breathing</span>
            <span>+8 XP</span>
          </div>

          <div className="flex justify-between">
            <span>🤖 AI Chat</span>
            <span>+5 XP</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default WellnessGarden;