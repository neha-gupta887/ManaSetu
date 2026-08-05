import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { auth, db } from "./firebase";

// =====================================
// Save Chat Message
// =====================================
export async function saveChatMessage(sender, text) {
  try {
    const user = auth.currentUser;

    if (!user) return;

    await addDoc(collection(db, "chatHistory"), {
      uid: user.uid,
      email: user.email,
      sender,
      text,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving chat:", error);
  }
}

// =====================================
// Get Chat History
// =====================================
export async function getChatHistory() {
  try {
    const user = auth.currentUser;

    if (!user) return [];

    const q = query(
      collection(db, "chatHistory"),
      where("uid", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    const chats = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    chats.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;

      return (
        a.createdAt.seconds -
        b.createdAt.seconds
      );
    });

    return chats;
  } catch (error) {
    console.error("Error loading chat:", error);
    return [];
  }
}

// =====================================
// Clear Chat History
// =====================================
export async function clearChatHistory() {
  try {
    const chats = await getChatHistory();

    for (const chat of chats) {
      await deleteDoc(
        doc(db, "chatHistory", chat.id)
      );
    }

    console.log("✅ Chat history cleared.");

    return true;
  } catch (error) {
    console.error(
      "Error clearing chat:",
      error
    );

    return false;
  }
}