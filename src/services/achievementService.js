import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

const COLLECTION = "achievements";

// Initialize achievement document
export const initializeAchievements = async () => {
  const user = auth.currentUser;

  if (!user) return;

  const ref = doc(db, COLLECTION, user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      unlocked: [],
      updatedAt: serverTimestamp(),
    });
  }
};

// Unlock achievement
export const unlockAchievement = async (id, title, icon) => {
  const user = auth.currentUser;

  if (!user) return false;

  const ref = doc(db, COLLECTION, user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await initializeAchievements();
  }

  const latest = await getDoc(ref);

  const unlocked = latest.data()?.unlocked || [];

  const exists = unlocked.find(
    (item) => item.id === id
  );

  if (exists) return false;

  await updateDoc(ref, {
    unlocked: arrayUnion({
      id,
      title,
      icon,
      unlockedAt: new Date().toISOString(),
    }),
    updatedAt: serverTimestamp(),
  });

  return true;
};

// Get achievements
export const getAchievements = async () => {
  const user = auth.currentUser;

  if (!user) return [];

  const ref = doc(db, COLLECTION, user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) return [];

  return snap.data()?.unlocked || [];
};