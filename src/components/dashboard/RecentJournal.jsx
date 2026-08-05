import { Link } from "react-router-dom";

function RecentJournal() {
  const journals = [
    {
      id: 1,
      title: "Feeling Grateful",
      date: "Today",
      preview:
        "I completed my meditation and felt much calmer throughout the day.",
    },
    {
      id: 2,
      title: "Busy College Day",
      date: "Yesterday",
      preview:
        "Classes were hectic, but I managed to finish my assignments.",
    },
    {
      id: 3,
      title: "Weekend Reflection",
      date: "2 days ago",
      preview:
        "Spent quality time with family and worked on self-care habits.",
    },
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          📖 Recent Journal
        </h2>

        <Link
          to="/journal"
          className="text-sm font-semibold text-emerald-600 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="mt-6 space-y-5">

        {journals.map((journal) => (

          <div
            key={journal.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 transition hover:bg-gray-50 dark:hover:bg-gray-800"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {journal.title}
              </h3>

              <span className="text-xs text-gray-500">
                {journal.date}
              </span>

            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {journal.preview}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentJournal;