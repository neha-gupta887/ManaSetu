import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

const GARDEN_COLLECTION = "garden";

// Get Garden Data
export const getGardenData = async () => {
  const user = auth.currentUser;

  if (!user) return null;

  const ref = doc(db, GARDEN_COLLECTION, user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const initialData = {
      uid: user.uid,
      xp: 0,
      level: 1,
      lastUpdated: serverTimestamp(),
    };

    await setDoc(ref, initialData);

    return initialData;
  }

  return snap.data();
};

// Add XP
export const addXP = async (amount) => {
  const user = auth.currentUser;

  if (!user) return;

  const ref = doc(db, GARDEN_COLLECTION, user.uid);

  await updateDoc(ref, {
    xp: increment(amount),
    lastUpdated: serverTimestamp(),
  });
};