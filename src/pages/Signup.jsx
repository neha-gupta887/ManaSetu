import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { signup } from "../services/authService";

function Signup() {
  const navigate = useNavigate();

  // ===========================
  // States
  // ===========================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [agree, setAgree] = useState(false);

  const [loading, setLoading] = useState(false);

  // ===========================
  // Signup
  // ===========================

  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!agree) {
      toast.error(
        "Please agree to the Terms & Conditions."
      );
      return;
    }

    try {
      setLoading(true);

      const userCredential = await signup(
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      await auth.currentUser.reload();

      toast.success(
        `🎉 Welcome ${name}! Your account has been created successfully.`
      );

      navigate("/login");

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

            Join ManaSetu

          </h1>

          <p className="mt-8 text-lg leading-8 text-green-100">

            Become part of an AI-powered mental
            wellness platform that helps students
            reduce stress, improve focus, build
            healthy habits, and achieve better
            wellbeing every day.

          </p>

          <div className="grid grid-cols-2 gap-5 mt-12">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              🤖

              <h3 className="mt-3 font-semibold">
                AI Companion
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Personalized AI support anytime.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              📊

              <h3 className="mt-3 font-semibold">
                Wellness Analytics
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Track your mental wellness journey.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              📖

              <h3 className="mt-3 font-semibold">
                Smart Journal
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Reflect and grow every day.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">

              💚

              <h3 className="mt-3 font-semibold">
                Daily Wellness
              </h3>

              <p className="text-sm text-green-100 mt-2">
                Build healthier habits with AI.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ===========================
          RIGHT SIDE
      ============================ */}

      <div className="flex items-center justify-center bg-gradient-to-br from-slate-100 via-emerald-50 to-white px-6 py-12">

        <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-[32px] border border-white shadow-2xl p-10">
                  {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-3xl shadow-lg">
              🌿
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mt-3 leading-6">
            Start your AI-powered wellness journey today.
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="mt-8 space-y-5">

            {/* Full Name */}
            <div className="relative">

              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />

            </div>

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
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* Confirm Password */}
            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-12 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* Password Strength */}
            <div>

              <div className="h-2 rounded-full bg-gray-200 overflow-hidden">

                <div
                  className={`h-full transition-all duration-300 ${
                    password.length < 6
                      ? "bg-red-500 w-1/3"
                      : password.length < 10
                      ? "bg-yellow-500 w-2/3"
                      : "bg-green-500 w-full"
                  }`}
                />

              </div>

              <p className="mt-2 text-sm text-gray-500">

                {password.length === 0
                  ? ""
                  : password.length < 6
                  ? "Weak Password"
                  : password.length < 10
                  ? "Medium Password"
                  : "Strong Password"}

              </p>

            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-gray-600">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) =>
                  setAgree(e.target.checked)
                }
                className="accent-emerald-600 mt-1"
              />

              <span>
                I agree to the{" "}
                <span className="font-semibold text-emerald-600">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="font-semibold text-emerald-600">
                  Privacy Policy
                </span>.
              </span>

            </label>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-300 disabled:opacity-60"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-gray-600">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;