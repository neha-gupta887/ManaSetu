import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSeedling, FaLeaf, FaStar } from "react-icons/fa";
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

  const progress = Math.min((xp / nextLevelXP) * 100, 100);

  if (loading) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
            🌿
          </div>

          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            Growing your wellness garden...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-100/50 blur-3xl dark:bg-emerald-950/20" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-950/20" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
              <FaSeedling />
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                Wellness Garden
              </p>

              <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Grow with yourself
              </h2>
            </div>
          </div>

          <div className="hidden rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:block dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
            Level {level}
          </div>
        </div>

        <p className="mt-4 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
          Small acts of self-care help your garden grow. Keep showing up for
          yourself.
        </p>

        {/* Garden / Tree */}
        <div className="relative mt-7 overflow-hidden rounded-[24px] border border-emerald-100 bg-gradient-to-b from-emerald-50/70 to-white px-5 py-8 text-center dark:border-emerald-900/30 dark:from-emerald-950/25 dark:to-slate-900">
          
          {/* Decorative dots */}
          <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-emerald-300/60" />
          <div className="absolute right-10 top-12 h-1.5 w-1.5 rounded-full bg-teal-300/70" />
          <div className="absolute bottom-10 left-16 h-1.5 w-1.5 rounded-full bg-emerald-200" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
            className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white text-7xl shadow-sm dark:bg-slate-800"
          >
            {tree.emoji}
          </motion.div>

          <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">
            {tree.title}
          </h3>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-400">
            <FaLeaf className="text-emerald-500" />
            Level {level}
          </div>
        </div>

        {/* XP Progress */}
        <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-white/[0.025]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Growth progress
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                {xp} / {nextLevelXP} XP
              </p>
            </div>

            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full bg-emerald-500"
            />
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-400">
            Keep taking small steps. Every healthy habit adds to your growth.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-sm text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <FaStar />
              </div>

              <p className="text-xs font-medium text-slate-400">
                Current XP
              </p>
            </div>

            <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              {xp}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 text-sm text-teal-600 dark:bg-teal-950/40 dark:text-teal-400">
                <FaLeaf />
              </div>

              <p className="text-xs font-medium text-slate-400">
                Current Level
              </p>
            </div>

            <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              {level}
            </p>
          </div>
        </div>

        {/* Today's Rewards */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                Daily growth
              </p>

              <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                Today's Rewards
              </h3>
            </div>

            <span className="text-lg">🌿</span>
          </div>

          <div className="mt-4 space-y-2">
            <Reward title="😊 Mood Check-in" xp="+5 XP" />
            <Reward title="📖 Journal Entry" xp="+10 XP" />
            <Reward title="🌬 Breathing Exercise" xp="+8 XP" />
            <Reward title="🤖 Talk to Mana AI" xp="+5 XP" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Reward({ title, xp }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 transition-colors hover:bg-emerald-50/60 dark:border-slate-800 dark:bg-white/[0.025] dark:hover:bg-emerald-950/20">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {title}
      </span>

      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
        {xp}
      </span>
    </div>
  );
}

export default WellnessGarden;