/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import {
  FaBrain,
  FaTrash,
  FaHistory,
  FaHeartbeat,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import {
  getWellnessHistory,
  clearWellnessHistory,
} from "../services/memoryService";

import { analyzeTrend } from "../services/trendAnalyzer";
import TrendCard from "../components/TrendCard";

function Memory() {
  const [history, setHistory] = useState([]);
  const [trend, setTrend] = useState(null);

  useEffect(() => {
    const data = getWellnessHistory();

    setHistory(data);
    setTrend(analyzeTrend(data));
  }, []);

  const handleClear = () => {
    clearWellnessHistory();
    setHistory([]);
    setTrend(null);
  };

  const latest = history[0];

  const stats = {
    sessions: history.length,
    mood: latest?.mood?.emotion || "Unknown",
    score: latest?.decision?.wellnessScore || 0,
    priority: latest?.decision?.priority || "Normal",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 text-emerald-700 dark:text-emerald-300 font-semibold">

              <FaBrain />

              AI Memory Center

            </span>

            <h1 className="mt-5 text-5xl font-extrabold text-gray-900 dark:text-white">

              Mana AI Memory

            </h1>

            <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 leading-8">

              Your AI companion remembers your wellness journey,
              analyzes patterns and provides personalized
              recommendations over time.

            </p>

          </div>

          <button
            onClick={handleClear}
            className="rounded-2xl bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold shadow-xl transition"
          >
            <div className="flex items-center gap-3">

              <FaTrash />

              Clear Memory

            </div>

          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6">

            <FaHistory className="text-3xl text-emerald-600" />

            <h3 className="mt-4 text-gray-500 dark:text-gray-400">

              Sessions

            </h3>

            <p className="text-4xl font-bold dark:text-white">

              {stats.sessions}

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6">

            <FaHeartbeat className="text-3xl text-red-500" />

            <h3 className="mt-4 text-gray-500 dark:text-gray-400">

              Latest Mood

            </h3>

            <p className="text-3xl font-bold dark:text-white">

              {stats.mood}

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6">

            <FaChartLine className="text-3xl text-blue-600" />

            <h3 className="mt-4 text-gray-500 dark:text-gray-400">

              Wellness Score

            </h3>

            <p className="text-4xl font-bold text-emerald-600">

              {stats.score}

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-6">

            <FaCheckCircle className="text-3xl text-purple-600" />

            <h3 className="mt-4 text-gray-500 dark:text-gray-400">

              Priority

            </h3>

            <p className="text-3xl font-bold dark:text-white">

              {stats.priority}

            </p>

          </div>

        </div>
                {/* Trend Analysis */}

        {trend && (
          <div className="mt-10">
            <TrendCard trend={trend} />
          </div>
        )}

        {/* Empty State */}

        {history.length === 0 ? (

          <div className="mt-10 rounded-[32px] bg-white dark:bg-gray-800 shadow-2xl p-14 text-center">

            <div className="text-7xl mb-6">
              🧠
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">

              No Memory Available

            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">

              Mana AI hasn't stored any wellness memories yet.
              Start chatting with the AI Companion and your
              wellness journey will automatically appear here.

            </p>

          </div>

        ) : (

          <div className="mt-10">

            {/* Timeline Heading */}

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

                  📅 Memory Timeline

                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-400">

                  Every AI wellness session is stored here.

                </p>

              </div>

            </div>

            {/* Timeline */}

            <div className="space-y-8">

              {history.map((item, index) => (

                <div
                  key={index}
                  className="relative overflow-hidden rounded-[32px] bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700"
                >

                  {/* Top */}

                  <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 px-8 py-6 text-white">

                    <div className="flex flex-col lg:flex-row justify-between gap-4">

                      <div>

                        <h2 className="text-2xl font-bold">

                          🧠 Session #{history.length - index}

                        </h2>

                        <p className="text-green-100 mt-2">

                          AI Wellness Analysis

                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-green-100">

                          {item.date}

                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Body */}

                  <div className="p-8">

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                      {/* Mood */}

                      <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-6">

                        <h3 className="font-bold text-emerald-700 dark:text-emerald-300">

                          😊 Mood

                        </h3>

                        <p className="mt-3">

                          Emotion:
                          <span className="font-semibold">

                            {" "}
                            {item.mood?.emotion || "Unknown"}

                          </span>

                        </p>

                        <p className="mt-2">

                          Stress:
                          <span className="font-semibold">

                            {" "}
                            {item.mood?.stressLevel || "Unknown"}

                          </span>

                        </p>

                        <p className="mt-2">

                          Burnout:
                          <span className="font-semibold">

                            {" "}
                            {item.mood?.burnoutRisk || "Unknown"}

                          </span>

                        </p>

                      </div>

                      {/* Sleep */}

                      <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-6">

                        <h3 className="font-bold text-blue-700 dark:text-blue-300">

                          😴 Sleep

                        </h3>

                        <p className="mt-3 leading-7">

                          {item.sleep?.summary || "No sleep analysis"}

                        </p>

                      </div>

                      {/* Study */}

                      <div className="rounded-2xl bg-purple-50 dark:bg-purple-900/20 p-6">

                        <h3 className="font-bold text-purple-700 dark:text-purple-300">

                          📚 Study

                        </h3>

                        <p className="mt-3 leading-7">

                          {item.study?.summary || "No study analysis"}

                        </p>

                      </div>

                      {/* Crisis */}

                      <div className="rounded-2xl bg-red-50 dark:bg-red-900/20 p-6">

                        <h3 className="font-bold text-red-700 dark:text-red-300">

                          🚨 Crisis

                        </h3>

                        <p className="mt-3">

                          Risk Level:

                          <span className="font-semibold">

                            {" "}
                            {item.crisis?.risk || "Low"}

                          </span>

                        </p>

                      </div>

                    </div>
                                        {/* AI Decision */}

                    {item.decision && (

                      <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800 p-8">

                        <div className="flex flex-col lg:flex-row justify-between gap-8">

                          {/* Wellness Score */}

                          <div>

                            <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">

                              💚 Wellness Score

                            </h3>

                            <p className="mt-5 text-6xl font-extrabold text-emerald-600">

                              {item.decision.wellnessScore}

                              <span className="text-2xl">

                                /100

                              </span>

                            </p>

                            <div className="mt-6">

                              <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">

                                <div
                                  className="h-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-700"
                                  style={{
                                    width: `${item.decision.wellnessScore}%`,
                                  }}
                                />

                              </div>

                            </div>

                            <p className="mt-5 text-lg">

                              <strong>Priority:</strong>{" "}

                              {item.decision.priority}

                            </p>

                          </div>

                          {/* Tasks */}

                          <div className="flex-1">

                            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">

                              📋 Today's Wellness Plan

                            </h3>

                            {item.decision.tasks?.length > 0 ? (

                              <ul className="mt-5 space-y-4">

                                {item.decision.tasks.map((task, i) => (

                                  <li
                                    key={i}
                                    className="flex items-start gap-3 rounded-2xl bg-white dark:bg-gray-800 shadow p-4"
                                  >

                                    <span className="text-green-500 text-xl">

                                      ✅

                                    </span>

                                    <span className="text-gray-700 dark:text-gray-200">

                                      {task}

                                    </span>

                                  </li>

                                ))}

                              </ul>

                            ) : (

                              <p className="mt-5 text-gray-500 dark:text-gray-400">

                                No wellness tasks available.

                              </p>

                            )}

                          </div>

                        </div>

                      </div>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* Footer */}

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 text-white shadow-2xl">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            <div>

              <h2 className="text-3xl font-bold">

                🧠 Your Wellness Journey Matters

              </h2>

              <p className="mt-4 max-w-3xl text-green-100 leading-8">

                Mana AI securely remembers your wellness history to
                provide more personalized insights, detect emotional
                patterns, and help you build healthier habits over time.

              </p>

            </div>

            <div className="text-center">

              <p className="text-5xl font-extrabold">

                {history.length}

              </p>

              <p className="text-green-100 mt-2">

                AI Memories Stored

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Memory;
