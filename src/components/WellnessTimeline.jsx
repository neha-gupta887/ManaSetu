const history = [
  {
    day: "Monday",
    mood: "😊 Happy",
    score: 90,
  },
  {
    day: "Tuesday",
    mood: "😌 Calm",
    score: 82,
  },
  {
    day: "Wednesday",
    mood: "😟 Stressed",
    score: 70,
  },
  {
    day: "Thursday",
    mood: "😴 Tired",
    score: 65,
  },
  {
    day: "Friday",
    mood: "😊 Better",
    score: 84,
  },
];

function WellnessTimeline() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5 dark:text-white">
        📈 Wellness Timeline
      </h2>

      <div className="space-y-4">

        {history.map((item) => (

          <div
            key={item.day}
            className="flex justify-between border-b pb-3 dark:border-gray-700"
          >
            <div>

              <p className="font-semibold dark:text-white">
                {item.day}
              </p>

              <p className="text-gray-500">
                {item.mood}
              </p>

            </div>

            <div className="text-xl font-bold text-green-600">
              {item.score}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WellnessTimeline;