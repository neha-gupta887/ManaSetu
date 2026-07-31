# 🧠 ManaSetu – Digital Mental Wellness Platform

> *Empowering students to prioritize their mental well-being through technology.*

---
## 🚀 Vision

We envision a future where every student has instant access to intelligent, compassionate, and personalized mental wellness support. ManaSetu aims to bridge the gap between technology and emotional well-being by making mental healthcare proactive, accessible, and stigma-free through the power of Artificial Intelligence.

## 📖 Overview

**ManaSetu** is an AI-powered digital mental wellness platform built to support students in navigating the emotional challenges of academic life. It provides a secure and accessible space where users can monitor their emotional well-being, develop healthy habits, and access personalized wellness tools—all within a single platform.

Designed with a student-first approach, ManaSetu combines **AI-assisted wellness support**, **mood tracking**, **digital journaling**, **guided breathing exercises**, and **emotional analytics** to encourage self-awareness and proactive mental well-being. Instead of relying on disconnected wellness applications, the platform brings together essential mental health resources into one seamless experience.

The vision behind ManaSetu is to make mental wellness support **simple, personalized, and accessible**, empowering students to better understand their emotions, manage everyday stress, and build long-term emotional resilience through the thoughtful integration of technology and wellness practices.
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

**ManaSetu** is an AI-powered digital mental wellness platform designed to help students proactively understand, manage, and improve their emotional well-being through a single, intelligent ecosystem.

Unlike traditional wellness applications that offer isolated features, ManaSetu combines **AI-assisted emotional support, mood tracking, digital journaling, guided breathing exercises, wellness analytics, and personalized self-care tools** into one seamless experience.

At the heart of the platform is the **AI Wellness Companion**, which provides empathetic conversations, motivation, and personalized wellness suggestions based on users' emotional inputs. Instead of reacting only during moments of crisis, ManaSetu encourages students to build healthy habits through continuous self-reflection, mindfulness, and data-driven emotional insights.

By leveraging **Artificial Intelligence** alongside evidence-based wellness practices, ManaSetu transforms mental health support into an accessible, personalized, and stigma-free experience—empowering students to stay emotionally resilient, academically focused, and mentally healthier every day.


## 🌟 What Makes ManaSetu Unique?

✔️ **AI-Powered Emotional Companion**  
Provides personalized conversations, motivation, and wellness guidance instead of generic responses.

✔️ **All-in-One Wellness Platform**  
Mood tracking, journaling, breathing exercises, analytics, and AI support—all in one place.

✔️ **Student-Centric Design**  
Built specifically for university students facing academic pressure, homesickness, stress, and anxiety.

✔️ **Personalized Wellness Insights**  
Transforms daily mood entries into meaningful trends, helping users recognize emotional patterns and improve self-awareness.

✔️ **Privacy First**  
Personal wellness data remains secure, ensuring users can express themselves with confidence.

✔️ **Accessible Anytime, Anywhere**  
A simple and responsive web platform that makes mental wellness support available whenever students need it.


## 🌟 What Makes ManaSetu Unique?

✔️ **AI-Powered Emotional Companion**  
Provides personalized conversations, motivation, and wellness guidance instead of generic responses.

✔️ **All-in-One Wellness Platform**  
Mood tracking, journaling, breathing exercises, analytics, and AI support—all in one place.

✔️ **Student-Centric Design**  
Built specifically for university students facing academic pressure, homesickness, stress, and anxiety.

✔️ **Personalized Wellness Insights**  
Transforms daily mood entries into meaningful trends, helping users recognize emotional patterns and improve self-awareness.

✔️ **Privacy First**  
Personal wellness data remains secure, ensuring users can express themselves with confidence.

✔️ **Accessible Anytime, Anywhere**  
A simple and responsive web platform that makes mental wellness support available whenever students need it.

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
