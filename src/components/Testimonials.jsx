import { FaStar, FaUserCircle } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "B.Tech Student",
      review:
        "ManaSetu helped me manage academic stress and stay consistent with my daily wellness routine. The AI companion feels genuinely supportive.",
    },
    {
      name: "Priya Verma",
      role: "Computer Science Student",
      review:
        "The mood tracker and breathing exercises have become part of my daily routine. It's simple, calming, and easy to use.",
    },
    {
      name: "Rohan Mehta",
      role: "Engineering Student",
      review:
        "Having access to mentors and wellness resources in one place made a huge difference during exam season. Highly recommended!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block px-5 py-2 bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
            💬 Testimonials
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Loved by
            <span className="text-green-600 dark:text-emerald-400">
              {" "}Students
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-8">
            See what students are saying about their experience with
            ManaSetu and how it has helped improve their mental well-being.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Stars */}
              <div className="flex text-yellow-400 text-lg">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-7 italic">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="flex items-center mt-8">
                <FaUserCircle className="text-5xl text-green-500 dark:text-emerald-400" />

                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;