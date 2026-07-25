return (
  <div className="min-h-screen grid lg:grid-cols-2 dark:bg-gray-900 transition-colors duration-300">
    {/* Left Section */}
    <div className="hidden lg:flex bg-gradient-to-br from-green-600 to-emerald-500 dark:from-emerald-700 dark:to-green-800 items-center justify-center p-12">
      <div className="max-w-md text-white">
        <h1 className="text-5xl font-bold">
          Welcome to <br />
          ManaSetu
        </h1>

        <p className="mt-6 text-lg leading-8 text-green-100">
          Join thousands of students who are building healthier minds through
          AI-powered support, daily mood tracking, mindfulness practices, and
          meaningful mentor connections.
        </p>

        <div className="mt-10 space-y-4">
          <div>🌿 AI Wellness Companion</div>
          <div>😊 Daily Mood Tracking</div>
          <div>📖 Personal Journal</div>
          <div>🤝 Mentor & Buddy Support</div>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex items-center justify-center px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-3xl shadow-xl p-8 transition-colors duration-300">

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Create Account
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Begin your wellness journey with ManaSetu.
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">

          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400 dark:text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400 dark:text-gray-500" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I agree to the Terms & Conditions
          </label>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition disabled:bg-green-400"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  </div>
);