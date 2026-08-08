import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import AuthenticatedLayout from "../components/layout/AuthenticatedLayout";
import useAuth from "../hooks/useAuth";
import { updateProfile as firebaseUpdateProfile } from "firebase/auth";
import { auth } from "../services/firebase";

function Settings() {
  const { darkMode, setDarkMode } = useTheme();
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.displayName || "Student",
        email: user.email || "No email found",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!auth.currentUser) return toast.error("You are not logged in.");
    if (!profile.name.trim()) return toast.error("Name cannot be empty.");

    setLoading(true);
    try {
      await firebaseUpdateProfile(auth.currentUser, { displayName: profile.name });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-8 text-center">
          ⚙️ Settings
        </h1>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            👤 Profile
          </h2>

          <div className="mb-5">
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              readOnly
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Preferences Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            🎛 Preferences
          </h2>

          {/* Notifications */}
          <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                Notifications
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive daily wellness reminders
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only peer"
                aria-label="Toggle notifications"
              />

              <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-emerald-600 transition"></div>

              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>

          {/* Dark Mode */}
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                Dark Mode
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Switch between light and dark theme
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
                aria-label="Toggle dark mode"
              />

              <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-emerald-600 transition"></div>

              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "💾 Save Settings"}
          </button>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Settings;
