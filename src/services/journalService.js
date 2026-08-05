import { analyzeJournal } from "./journalAIService";

import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "./firebase";

// ===============================
// Save Journal Entry with AI Analysis
// ===============================
export const saveJournal = async (
  title,
  content,
  mood,
  category
) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not logged in.");
    }

    // 🤖 Generate AI Analysis
    const aiAnalysis = await analyzeJournal(content);

    // 💾 Save Journal + AI Analysis
    await addDoc(collection(db, "journals"), {
      uid: user.uid,
      email: user.email,

      title,
      content,
      mood,
      category,

      aiAnalysis,

      createdAt: serverTimestamp(),
    });

    console.log("✅ Journal saved successfully.");

    return true;
  } catch (error) {
    console.error("Error saving journal:", error);
    return false;
  }
};

// ===============================
// Get Journal History
// ===============================
export const getJournalHistory = async () => {
  try {
    const user = auth.currentUser;

    if (!user) return [];

    const q = query(
      collection(db, "journals"),
      where("uid", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    const journals = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    journals.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;

      return (
        b.createdAt.seconds -
        a.createdAt.seconds
      );
    });

    return journals;
  } catch (error) {
    console.error(
      "Error fetching journals:",
      error
    );

    return [];
  }
};

// ===============================
// Delete Journal
// ===============================
export const deleteJournal = async (id) => {
  try {
    await deleteDoc(doc(db, "journals", id));

    return true;
  } catch (error) {
    console.error(
      "Error deleting journal:",
      error
    );

    return false;
  }
};

// ===============================
// Update Journal
// ===============================
export const updateJournal = async (
  id,
  title,
  content,
  mood,
  category
) => {
  try {
    // 🤖 Re-analyze updated journal
    const aiAnalysis = await analyzeJournal(content);

    await updateDoc(doc(db, "journals", id), {
      title,
      content,
      mood,
      category,
      aiAnalysis,
      updatedAt: serverTimestamp(),
    });

    console.log("✅ Journal updated successfully.");

    return true;
  } catch (error) {
    console.error(
      "Error updating journal:",
      error
    );

    return false;
  }
};