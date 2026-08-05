function SuggestedQuestions({ onSelectQuestion }) {
  const questions = [
    "😊 I'm feeling stressed",
    "😔 I feel lonely",
    "🌿 Give me a breathing exercise",
    "💤 Tips for better sleep",
    "📚 Help me stay focused",
    "💪 Motivate me today",
  ];

  return (
    <div className="mb-5 flex flex-wrap gap-3">

      {questions.map((question) => (

        <button
          key={question}
          onClick={() => onSelectQuestion(question)}
          className="rounded-full border border-emerald-500 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 transition hover:bg-emerald-600 hover:text-white dark:bg-gray-800 dark:text-emerald-300"
        >
          {question}
        </button>

      ))}

    </div>
  );
}

export default SuggestedQuestions;