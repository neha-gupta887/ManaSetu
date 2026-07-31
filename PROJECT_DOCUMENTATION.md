# 🧠 ManaSetu – Digital Mental Wellness Platform

> *Empowering students to prioritize their mental well-being through technology.*

---

## 📖 Overview

ManaSetu is a student-focused digital mental wellness platform designed to support university students in managing stress, improving emotional well-being, and developing healthy daily habits.

The platform provides a safe and user-friendly environment where students can monitor their mood, maintain a personal journal, practice guided breathing exercises, interact with an AI wellness companion, and visualize their emotional progress through analytics.

ManaSetu aims to bridge the gap between technology and mental health by making wellness resources easily accessible to every student.

---

## 🎯 Problem Statement

Many university students experience:

- Academic pressure
- Stress and anxiety
- Homesickness
- Loneliness
- Lack of emotional support
- Difficulty maintaining healthy habits

Most existing solutions are either expensive, complicated, or not designed specifically for students.

ManaSetu provides an accessible, modern, and student-friendly solution to promote mental wellness.

---

## 💡 Our Solution

ManaSetu combines wellness practices with modern web technologies to help students:

- Track their emotions
- Build positive habits
- Reflect through journaling
- Practice mindfulness
- Access support resources
- Receive AI-powered encouragement
- Monitor emotional trends over time

---
## ✨ Features

### 🔐 Authentication
- Secure user registration and login using Firebase Authentication
- Protected user sessions
- Logout functionality

### 📊 Personalized Dashboard
- Clean and modern dashboard
- Daily wellness overview
- Mood insights
- Quick access to all wellness tools

### 😊 Mood Tracker
- Record daily mood
- Monitor emotional patterns
- Build self-awareness

### 📖 Digital Journal
- Write daily reflections
- Maintain a private journal
- Encourage positive mental habits

### 🤖 AI Wellness Companion
- AI-powered emotional support
- Motivational conversations
- Student-friendly guidance

### 🌬️ Guided Breathing Exercises
- Simple breathing techniques
- Reduce stress and anxiety
- Improve focus and relaxation

### 📈 Mood Analytics
- Visual representation of mood history
- Track emotional progress over time
- Identify wellness trends

### 🆘 Support Resources
- Access mental health resources
- Emergency support information
- Student wellness guidance

### ⚙️ Settings
- User profile management
- Account preferences
- Secure logout

---

# 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Authentication | Firebase Authentication |
| Database | Firebase Firestore |
| Icons | Lucide React |
| Deployment | Vercel (Planned) |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
ManaSetu/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── PROJECT_README.md
└── README.md
```

# ⚙️ Installation & Setup

Follow these steps to run the project locally.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/neha-gupta887/S-02-Mental-Health-Awareness-Campaign-for-First-Year-Students.git
```

## 2️⃣ Navigate to the Project Directory

```bash
cd S-02-Mental-Health-Awareness-Campaign-for-First-Year-Students
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Start the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# 🔥 Firebase Configuration

This project uses Firebase for Authentication and Firestore Database.

Create a Firebase project and enable:

- Authentication (Email & Password)
- Cloud Firestore

Create a file:

```
src/services/firebase.js
```

Add your Firebase configuration:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

# ▶️ Usage

After logging in, users can:

- Track daily moods
- Write journal entries
- Practice guided breathing
- Interact with the AI wellness companion
- View mood analytics
- Access mental health support resources
- Manage account settings

---

# 🌐 Deployment

The project can be deployed using:

- **Vercel** (Recommended)
- Netlify
- Firebase Hosting

For the best experience with React + Vite + Firebase, Vercel is recommended.

---
---
# 📸 Screenshots

> Screenshots will be added after the project UI is finalized.

| Home Page | Dashboard |
|-----------|-----------|
| *Coming Soon* | *Coming Soon* |

| Journal | AI Companion |
|----------|--------------|
| *Coming Soon* | *Coming Soon* |

| Mood Analytics | Settings |
|----------------|----------|
| *Coming Soon* | *Coming Soon* |

---

# 🚀 Future Enhancements

The following features are planned for future releases:

- 🔔 Daily mood reminders
- 📅 Wellness calendar
- 🎯 Habit streak tracking
- 🏆 Gamification and achievement badges
- 🎵 Relaxing music and meditation sessions
- 📹 Online counselor appointments
- 📱 Progressive Web App (PWA) support
- 🌙 Dark/Light theme toggle
- 🌍 Multi-language support
- 📊 Advanced wellness insights using AI
- 🤝 Peer support community
- 🧠 Personalized wellness recommendations

---

# 👩‍💻 Contributors

| Name | Role |
|------|------|
| **Neha Gupta** | Frontend Developer & Project Lead |

---

# 🙏 Acknowledgements

Special thanks to:

- Chandigarh University
- CUSoC (Chandigarh University Seasons of Code)
- Firebase
- React Community
- Tailwind CSS
- Vite
- Open Source Community

---

# 📄 License

This project is developed for educational and learning purposes as part of **CUSoC (Chandigarh University Seasons of Code)**.

Please refer to the repository's `LICENSE` file for licensing information.

---

# 📬 Contact

**Neha Gupta**

📧 Email: nehaguptaj65@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/neha-gupta-82201a360/

💻 GitHub: https://github.com/neha-gupta887

---

# ⭐ Support the Project

If you found this project useful, consider:

- ⭐ Starring the repository
- 🍴 Forking the project
- 🛠️ Contributing with improvements
- 💡 Sharing feedback and suggestions

Your support helps improve the project and encourages future development.

---

<p align="center">
  <b>🧠 ManaSetu – Empowering Students Through Mental Wellness & Technology 💙</b>
</p>
