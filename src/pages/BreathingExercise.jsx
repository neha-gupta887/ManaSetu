/* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BreathingCircle from "../components/BreathingCircle";

function BreathingExercise() {
  const phases = [
    { name: "Inhale", duration: 4 },
    { name: "Hold", duration: 4 },
    { name: "Exhale", duration: 6 },
  ];

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(phases[0].duration);

  const [isRunning, setIsRunning] = useState(false);

  const [sessionMinutes, setSessionMinutes] = useState(1);

  const [sessionTimeLeft, setSessionTimeLeft] = useState(60);

  const [sessionCompleted, setSessionCompleted] = useState(false);

  useEffect(() => {
    setSessionTimeLeft(sessionMinutes * 60);
  }, [sessionMinutes]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) return prev - 1;

        const next = (phaseIndex + 1) % phases.length;
        setPhaseIndex(next);

        return phases[next].duration;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, phaseIndex]);

  useEffect(() => {
    if (!isRunning) return;

    const sessionTimer = setInterval(() => {
      setSessionTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(sessionTimer);
          setIsRunning(false);
          setSessionCompleted(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(sessionTimer);
  }, [isRunning]);

  const handleStart = () => {
    setSessionCompleted(false);
    setPhaseIndex(0);
    setTimeLeft(phases[0].duration);
    setSessionTimeLeft(sessionMinutes * 60);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setSessionCompleted(false);
    setIsRunning(false);
    setPhaseIndex(0);
    setTimeLeft(phases[0].duration);
    setSessionTimeLeft(sessionMinutes * 60);
  };

  const progress =
    ((sessionMinutes * 60 - sessionTimeLeft) /
      (sessionMinutes * 60)) *
    100;

  const minutes = Math.floor(sessionTimeLeft / 60);
  const seconds = sessionTimeLeft % 60;
    if (sessionCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-6 transition-colors duration-300">

        <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 text-center transition-colors duration-300">

          <div className="text-6xl mb-5">🌿</div>

          <h1 className="text-4xl font-bold text-emerald-700">
            Great Job!
          </h1>

          <p className="mt-5 text-lg text-gray-700 dark:text-gray-300">
            You completed your{" "}
            <span className="font-semibold">
              {sessionMinutes}-minute
            </span>{" "}
            breathing session.
          </p>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Every mindful breath is a step toward a healthier and calmer mind.
          </p>

          <div className="grid gap-4 mt-10">

            <button
              onClick={handleStart}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
            >
              🔄 Start Again
            </button>

            <Link
              to="/dashboard"
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 py-3 rounded-xl font-semibold transition"
            >
              🏠 Back to Dashboard
            </Link>

          </div>

        </div>

      </div>
    );
  }
    return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-6 transition-colors duration-300">

      <div className="w-full max-w-xl bg-white/70 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700 p-8 transition-colors duration-300">

        <h1 className="text-4xl font-bold text-center text-emerald-700">
          🌿 Guided Breathing
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-3">
          Relax your mind with a calm breathing exercise.
        </p>

        <div className="mt-8">

          <p className="text-center text-gray-700 dark:text-gray-300 font-semibold mb-3">
            Session Duration
          </p>

          <div className="flex justify-center gap-3 flex-wrap">

            {[1, 3, 5, 10].map((minute) => (

              <button
                key={minute}
                onClick={() => !isRunning && setSessionMinutes(minute)}
                className={`px-5 py-2 rounded-full transition ${
                  sessionMinutes === minute
                    ? "bg-emerald-600 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border dark:border-gray-600"
                }`}
              >
                {minute} min
              </button>

            ))}

          </div>

        </div>

        <div className="mt-12 flex justify-center">
          <BreathingCircle phase={phases[phaseIndex].name} />
        </div>

        <h2 className="text-center text-3xl font-bold mt-10 text-gray-800 dark:text-white">
          {phases[phaseIndex].name}
        </h2>

        <p className="text-center text-6xl font-extrabold text-emerald-600 mt-4">
          {timeLeft}
        </p>

        <p className="text-center mt-6 text-gray-700 dark:text-gray-300 font-medium">
          Session Time Remaining
        </p>

        <p className="text-center text-2xl font-bold text-emerald-700">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>

        {/* Progress Bar */}
        <div className="mt-8">

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">

            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

          </div>

          <p className="text-center mt-2 text-gray-600 dark:text-gray-400">
            {Math.round(progress)}% Completed
          </p>

        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-4 mt-10">

          {!isRunning ? (
            <button
              onClick={
                sessionTimeLeft === sessionMinutes * 60
                  ? handleStart
                  : handleResume
              }
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
            >
              {sessionTimeLeft === sessionMinutes * 60
                ? "▶ Start"
                : "▶ Resume"}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
            >
              ⏸ Pause
            </button>
          )}

          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
          >
            🔄 Reset
          </button>

        </div>

        {/* Status */}
        <div className="mt-6 text-center">

          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              isRunning
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                : sessionTimeLeft === sessionMinutes * 60
                ? "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
            }`}
          >
            {isRunning
              ? "🟢 Session Running"
              : sessionTimeLeft === sessionMinutes * 60
              ? "⚪ Ready to Start"
              : "⏸ Session Paused"}
          </span>

        </div>

        {/* Breathing Guide */}
        <div className="mt-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-800 transition-colors duration-300">

          <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
            🌸 Breathing Guide
          </h3>

          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">

            <li>
              🟢 <strong>Inhale</strong> slowly through your nose for 4 seconds.
            </li>

            <li>
              🟡 <strong>Hold</strong> your breath gently for 4 seconds.
            </li>

            <li>
              🔵 <strong>Exhale</strong> slowly through your mouth for 6 seconds.
            </li>

          </ul>

        </div>

        {/* Tips */}
        <div className="mt-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-5 transition-colors duration-300">

          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
            💡 Tips
          </h3>

          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">

            <li>✨ Sit comfortably and relax your shoulders.</li>
            <li>🌿 Focus only on your breathing.</li>
            <li>📵 Keep your phone away to avoid distractions.</li>
            <li>🧘 Practice daily for the best results.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default BreathingExercise;
