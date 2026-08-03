import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { login, googleLogin } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  // ===========================
  // States
  // ===========================

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // ===========================
  // Login
  // ===========================

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      await login(email, password);

      toast.success("Welcome back! 🌿");

      navigate("/dashboard");

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Google Login
  // ===========================

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      await googleLogin();

      toast.success("Google Login Successful 🎉");

      navigate("/dashboard");

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 overflow-hidden">

      {/* ===========================
          LEFT SIDE
      ============================ */}

      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-emerald-700 via-green-600 to-teal-500 items-center justify-center px-12">

        {/* Decorative Blobs */}

        <div className="absolute w-80 h-80 bg-white/10 rounded-full -top-24 -left-20 blur-3xl"></div>

        <div className="absolute w-[420px] h-[420px] bg-emerald-300/20 rounded-full bottom-0 right-0 blur-3xl"></div>

        <div className="absolute w-52 h-52 bg-teal-200/20 rounded-full top-1/2 left-1/2 blur-3xl"></div>

        <div className="relative z-10 max-w-lg text-white">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2">

            🌿

            <span className="font-medium">
              AI Powered Mental Wellness Platform
            </span>

          </div>

          <h1 className="text-6xl font-extrabold leading-tight mt-8">

            Welcome Back

          </h1>

          <p className="mt-8 text-lg leading-8 text-green-100">

            Continue your wellness journey with
            <span className="font-semibold text-white">
              {" "}ManaSetu
            </span>.

            Receive personalized AI guidance,
            monitor your mood,
            track your wellbeing,
            and build healthier habits every day.

          </p>

          <div className="grid grid-cols-2 gap-5 mt-12">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              🤖

              <h3 className="mt-3 font-semibold">
                AI Companion
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Personalized AI support whenever you need it.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              📊

              <h3 className="mt-3 font-semibold">
                Analytics
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Visualize your wellness journey.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              😊

              <h3 className="mt-3 font-semibold">
                Mood Tracking
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Track emotions and mental wellbeing.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              📖

              <h3 className="mt-3 font-semibold">
                Smart Journal
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Reflect, grow and improve every day.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ===========================
          RIGHT SIDE
      ============================ */}

      <div className="flex items-center justify-center bg-gradient-to-br from-slate-100 via-emerald-50 to-white px-6 py-12">

        <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] shadow-2xl p-10">
                  {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-3xl shadow-lg">
              🌿
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-500 mt-3 leading-6">
            Sign in to continue your AI-powered wellness journey.
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-6">

            {/* Email */}
            <div className="relative">

              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />

            </div>

            {/* Password */}
            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-12 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600">

                <input
                  type="checkbox"
                  className="accent-emerald-600"
                />

                Remember Me

              </label>

              <button
                type="button"
                className="font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-300 disabled:opacity-60"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">

              <hr className="flex-1 border-gray-300" />

              <span className="text-gray-400 text-sm">
                OR
              </span>

              <hr className="flex-1 border-gray-300" />

            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white py-3 flex items-center justify-center gap-3 hover:bg-gray-50 hover:shadow-md transition-all duration-300 disabled:opacity-60"
            >
              <FaGoogle className="text-red-500" />

              Continue with Google

            </button>

          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-gray-600">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;