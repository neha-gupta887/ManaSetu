import { useState } from "react";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Student",
    email: "student@example.com",
  });

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-8 text-center">
          ⚙️ Settings
        </h1>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            👤 Profile
          </h2>

          <div className="mb-5">
            <label className="block text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Preferences Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            🎛 Preferences
          </h2>

          {/* Notifications */}
          <div className="flex justify-between items-center py-4 border-b">
            <div>
              <h3 className="font-semibold text-lg">Notifications</h3>
              <p className="text-sm text-gray-500">
                Receive daily wellness reminders
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only peer"
              />
              <div className="w-12 h-7 bg-gray-300 rounded-full peer peer-checked:bg-emerald-600 transition"></div>
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>

          {/* Dark Mode */}
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="font-semibold text-lg">Dark Mode</h3>
              <p className="text-sm text-gray-500">
                Switch between light and dark theme
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div className="w-12 h-7 bg-gray-300 rounded-full peer peer-checked:bg-emerald-600 transition"></div>
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
            onClick={() => alert("Settings Saved Successfully!")}
          >
            💾 Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;