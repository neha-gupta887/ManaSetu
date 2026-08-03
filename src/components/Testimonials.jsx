import { FaStar, FaUserCircle, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

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
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-emerald-50 to-green-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 scroll-mt-20"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-green-300/20 blur-[120px]"></div>

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-300/20 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-200 dark:border-gray-700 px-5 py-2 font-semibold text-emerald-700 dark:text-emerald-300 shadow">

            💬 Student Testimonials

          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">

            Trusted By

            <br />

            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">

              Students Everywhere

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">

            Hear how ManaSetu has helped students improve their mental
            wellbeing through AI-powered guidance and daily wellness support.

          </p>

        </motion.div>

        {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[30px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500"
            >

              {/* Background Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-emerald-500 to-teal-500 transition-all duration-500"></div>

              <div className="relative p-8">

                {/* Quote */}

                <div className="flex items-center justify-between">

                  <FaQuoteLeft className="text-4xl text-emerald-500" />

                  <div className="flex text-yellow-400 text-lg gap-1">

                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}

                  </div>

                </div>

                {/* Review */}

                <p className="mt-8 text-gray-600 dark:text-gray-300 leading-8 italic">

                  "{testimonial.review}"

                </p>

                {/* User */}

                <div className="mt-10 flex items-center gap-4">

                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-3xl shadow-lg">

                    <FaUserCircle />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">

                      {testimonial.name}

                    </h3>

                    <p className="text-gray-500 dark:text-gray-400">

                      {testimonial.role}

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Trust Banner */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-[36px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-12 text-white shadow-2xl">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

              <div>

                <h2 className="text-5xl font-extrabold">
                  ⭐ 4.9
                </h2>

                <p className="mt-3 text-green-100">
                  Student Rating
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-extrabold">
                  10K+
                </h2>

                <p className="mt-3 text-green-100">
                  Active Users
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-extrabold">
                  98%
                </h2>

                <p className="mt-3 text-green-100">
                  Satisfaction
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-extrabold">
                  ❤️
                </h2>

                <p className="mt-3 text-green-100">
                  Trusted by Students
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Testimonials;