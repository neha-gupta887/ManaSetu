import { getMoodHistory } from "./moodService";

// =====================================================
// MOOD SCORE MAP
// =====================================================

const MOOD_SCORES = {
  Happy: 5,
  Excited: 5,
  Calm: 4.5,
  Good: 4,
  Neutral: 3,
  Okay: 3,
  Sad: 2,
  Low: 1.5,
  Anxious: 1.5,
  Stressed: 1,
  Angry: 1,
};

// =====================================================
// GET DATE FROM FIREBASE TIMESTAMP
// =====================================================

const getMoodDate = (createdAt) => {
  if (!createdAt) return null;

  if (typeof createdAt.toDate === "function") {
    return createdAt.toDate();
  }

  if (createdAt.seconds) {
    return new Date(createdAt.seconds * 1000);
  }

  return null;
};

// =====================================================
// LOCAL DATE KEY
// =====================================================

const getDateKey = (date) => {
  if (!date) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// =====================================================
// GET MOOD SCORE
// =====================================================

const getMoodScore = (mood) => {
  return MOOD_SCORES[mood] ?? 3;
};

// =====================================================
// CALCULATE STREAK
// =====================================================

const calculateStreak = (moods) => {
  if (!moods.length) {
    return 0;
  }

  const uniqueDays = new Set();

  moods.forEach((item) => {
    const date = getMoodDate(item.createdAt);

    if (date) {
      uniqueDays.add(getDateKey(date));
    }
  });

  const dates = Array.from(uniqueDays)
    .filter(Boolean)
    .sort((a, b) => new Date(b) - new Date(a));

  if (!dates.length) {
    return 0;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const latestDate = new Date(`${dates[0]}T00:00:00`);
  latestDate.setHours(0, 0, 0, 0);

  const daysSinceLatest = Math.floor(
    (today.getTime() - latestDate.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // A streak remains active if the latest
  // check-in was today or yesterday.
  if (daysSinceLatest > 1) {
    return 0;
  }

  let streak = 1;

  for (let i = 1; i < dates.length; i++) {
    const current = new Date(`${dates[i - 1]}T00:00:00`);
    const previous = new Date(`${dates[i]}T00:00:00`);

    current.setHours(0, 0, 0, 0);
    previous.setHours(0, 0, 0, 0);

    const difference = Math.floor(
      (current.getTime() - previous.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    if (difference === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

// =====================================================
// GET LAST 7 DAYS
// =====================================================

const getLastSevenDays = () => {
  const days = [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    days.push(date);
  }

  return days;
};

// =====================================================
// BUILD WEEKLY TREND
// =====================================================

const buildWeeklyTrend = (moods) => {
  const lastSevenDays = getLastSevenDays();

  return lastSevenDays.map((date) => {
    const dateKey = getDateKey(date);

    const dayMoods = moods.filter((item) => {
      const moodDate = getMoodDate(item.createdAt);

      return getDateKey(moodDate) === dateKey;
    });

    let moodScore = null;

    if (dayMoods.length > 0) {
      const total = dayMoods.reduce(
        (sum, item) => sum + getMoodScore(item.mood),
        0
      );

      moodScore = Number(
        (total / dayMoods.length).toFixed(1)
      );
    }

    return {
      day: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      date: dateKey,
      mood: moodScore,
      entries: dayMoods.length,
    };
  });
};

// =====================================================
// CALCULATE WELLNESS SCORE
// =====================================================

const calculateWellnessScore = (weeklyTrend) => {
  const daysWithData = weeklyTrend.filter(
    (day) => typeof day.mood === "number"
  );

  if (!daysWithData.length) {
    return 0;
  }

  const average =
    daysWithData.reduce(
      (sum, day) => sum + day.mood,
      0
    ) / daysWithData.length;

  return Math.round(
    Math.min(Math.max((average / 5) * 100, 0), 100)
  );
};

// =====================================================
// GET MOOD ANALYTICS
// =====================================================

export const getMoodAnalytics = async () => {
  try {
    const moods = await getMoodHistory();

    const totalEntries = moods.length;

    if (!moods.length) {
      return {
        totalEntries: 0,
        currentMood: "No Data",
        mostFrequentMood: "No Data",
        moodDistribution: [],
        weeklyTrend: [],
        streak: 0,
        wellnessScore: 0,
      };
    }

    // -------------------------------------------------
    // Current Mood
    // -------------------------------------------------

    const currentMood = moods[0]?.mood || "No Data";

    // -------------------------------------------------
    // Mood Count
    // -------------------------------------------------

    const moodCount = {};

    moods.forEach((item) => {
      if (!item.mood) return;

      moodCount[item.mood] =
        (moodCount[item.mood] || 0) + 1;
    });

    // -------------------------------------------------
    // Mood Distribution
    // -------------------------------------------------

    const moodDistribution = Object.entries(moodCount)
      .map(([mood, count]) => ({
        name: mood,
        value: count,
      }))
      .sort((a, b) => b.value - a.value);

    // -------------------------------------------------
    // Most Frequent Mood
    // -------------------------------------------------

    const mostFrequentMood =
      moodDistribution[0]?.name || "No Data";

    // -------------------------------------------------
    // Weekly Trend
    // -------------------------------------------------

    const weeklyTrend = buildWeeklyTrend(moods);

    // -------------------------------------------------
    // Streak
    // -------------------------------------------------

    const streak = calculateStreak(moods);

    // -------------------------------------------------
    // Wellness Score
    // -------------------------------------------------

    const wellnessScore =
      calculateWellnessScore(weeklyTrend);

    return {
      totalEntries,
      currentMood,
      mostFrequentMood,
      moodDistribution,
      weeklyTrend,
      streak,
      wellnessScore,
    };
  } catch (error) {
    console.error(
      "❌ Error getting mood analytics:",
      error
    );

    return {
      totalEntries: 0,
      currentMood: "No Data",
      mostFrequentMood: "No Data",
      moodDistribution: [],
      weeklyTrend: [],
      streak: 0,
      wellnessScore: 0,
    };
  }
};