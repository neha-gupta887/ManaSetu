import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

const COLLECTION = "garden";

// XP required for each level
const LEVELS = [
  { level: 1, xp: 0, tree: "🌱", title: "Seed" },
  { level: 2, xp: 50, tree: "🌿", title: "Growing Plant" },
  { level: 3, xp: 150, tree: "🌳", title: "Healthy Tree" },
  { level: 4, xp: 300, tree: "🌸", title: "Blooming Tree" },
  { level: 5, xp: 500, tree: "🌺", title: "Wellness Forest" },
];

// Calculate current level from XP
const calculateLevel = (xp) => {
  let current = LEVELS[0];

  for (const level of LEVELS) {
    if (xp >= level.xp) {
      current = level;
    }
  }

  return current;
};

// Get Garden Data
export const getGardenData = async () => {
  const user = auth.currentUser;

  if (!user) return null;

  const ref = doc(db, COLLECTION, user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const initial = {
      uid: user.uid,
      xp: 0,
      level: 1,
      tree: "🌱",
      treeTitle: "Seed",
      streak: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(ref, initial);

    return initial;
  }

  return snap.data();
};

// Add XP
export const addXP = async (amount) => {
  const user = auth.currentUser;

  if (!user) return;

  const ref = doc(db, COLLECTION, user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await getGardenData();
  }

  const latest = await getDoc(ref);

  const currentXP = latest.data().xp || 0;

  const newXP = currentXP + amount;

  const currentLevel = calculateLevel(newXP);

  await updateDoc(ref, {
    xp: increment(amount),
    level: currentLevel.level,
    tree: currentLevel.tree,
    treeTitle: currentLevel.title,
    updatedAt: serverTimestamp(),
  });

  return {
    xp: newXP,
    level: currentLevel.level,
    tree: currentLevel.tree,
    treeTitle: currentLevel.title,
  };
};