return (
  <div className="min-h-screen grid lg:grid-cols-2 dark:bg-gray-900 transition-colors duration-300">
    {/* Left Section */}
    <div className="hidden lg:flex bg-gradient-to-br from-green-600 to-emerald-500 dark:from-emerald-700 dark:to-green-800 items-center justify-center p-12">
      <div className="max-w-md text-white">
        <h1 className="text-5xl font-bold">
          Welcome Back to <br />
          ManaSetu
        </h1>

        <p className="mt-6 text-lg leading-8 text-green-100">
          Continue your wellness journey with ManaSetu. Track your mood,
          connect with your AI companion, write your journal, and take care
          of your mental well-being every day.
        </p>

        <div className="mt-10 space-y-4">
          <div>🌿 AI Wellness Companion</div>
          <div>😊 Daily Mood Tracking</div>
          <div>📖 Personal Journal</div>
          <div>📊 Wellness Insights</div>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-12 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-transparent dark:border-gray-700 transition-colors duration-300">

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Login to continue your ManaSetu journey.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

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

          {/* Options */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition disabled:bg-green-400"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <hr className="flex-1 border-gray-300 dark:border-gray-600" />
            <span className="text-gray-400 dark:text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition disabled:opacity-50"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  </div>
);