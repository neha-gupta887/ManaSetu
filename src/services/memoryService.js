import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { auth, db } from "./firebase";

const COLLECTION = "wellnessMemory";

// Save AI Memory
export async function saveWellnessRecord(record) {
  try {
    const user = auth.currentUser;

    if (!user) return false;

    await addDoc(collection(db, COLLECTION), {
      uid: user.uid,
      email: user.email,
      record,
      createdAt: serverTimestamp(),
    });

    return true;
  } catch (error) {
    console.error("Error saving wellness memory:", error);
    return false;
  }
}

// Load AI Memory
export async function getWellnessHistory() {
  try {
    const user = auth.currentUser;

    if (!user) return [];

    const q = query(
      collection(db, COLLECTION),
      where("uid", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    const history = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    history.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return b.createdAt.seconds - a.createdAt.seconds;
    });

    return history;
  } catch (error) {
    console.error("Error fetching wellness history:", error);
    return [];
  }
}

// Delete One Memory
export async function deleteWellnessRecord(id) {
  try {
    await deleteDoc(doc(db, COLLECTION, id));
    return true;
  } catch (error) {
    console.error("Delete Error:", error);
    return false;
  }
}
// Clear All Memory
export async function clearWellnessHistory() {
  try {
    const user = auth.currentUser;

    if (!user) return false;

    const q = query(
      collection(db, COLLECTION),
      where("uid", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    await Promise.all(
      snapshot.docs.map((item) =>
        deleteDoc(doc(db, COLLECTION, item.id))
      )
    );

    return true;
  } catch (error) {
    console.error("Clear Memory Error:", error);
    return false;
  }
}