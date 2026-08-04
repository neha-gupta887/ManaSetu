import { notifications } from "../data/notifications";
export const notifications = [
  {
    id: 1,
    type: "ai",
    title: "AI Wellness Insight",
    message:
      "Mana AI generated new personalized wellness recommendations.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "reminder",
    title: "Mood Reminder",
    message:
      "Don't forget to complete today's mood check-in.",
    time: "15 min ago",
    read: false,
  },
  {
    id: 3,
    type: "appointment",
    title: "Counselor Appointment",
    message:
      "Your counseling session is scheduled for tomorrow at 3:00 PM.",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "achievement",
    title: "Streak Achievement",
    message:
      "Congratulations! You've maintained a 7-day wellness streak.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    type: "report",
    title: "Wellness Report Ready",
    message:
      "Your latest AI Wellness Report is available for download.",
    time: "2 days ago",
    read: true,
  },
];