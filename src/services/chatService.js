import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

// Save a chat message
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

// Load chat history
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
      return a.createdAt.seconds - b.createdAt.seconds;
    });

    return chats;
  } catch (error) {
    console.error(error);
    return [];
  }
}