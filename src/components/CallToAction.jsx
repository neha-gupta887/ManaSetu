import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-8 bg-gradient-to-b from-emerald-50 via-white to-green-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">

      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-[450px] h-[450px] bg-green-400/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[120px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto"
      >

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-10 lg:p-16 shadow-[0_30px_80px_rgba(16,185,129,0.35)]">

          {/* Badge */}

          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl px-5 py-2 font-semibold text-white border border-white/20">

            🌿 Join the ManaSetu Community

          </span>

          {/* Heading */}

          <h2 className="mt-8 text-4xl lg:text-6xl font-extrabold text-white leading-tight">

            Ready to Build

            <br />

            A Healthier Mind?

          </h2>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-8 text-green-100">

            Experience AI-powered mental wellness with personalized mood
            tracking, intelligent recommendations, wellness analytics and
            supportive conversations—all designed specifically for students.

          </p>

          {/* Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <Link to="/signup">

              <button className="group rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl hover:scale-105 transition-all duration-300">

                🚀 Get Started Free

              </button>

            </Link>

            <a href="#features">

              <button className="rounded-2xl border border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-emerald-700 transition-all duration-300">

                ✨ Explore Features

              </button>

            </a>

          </div>

          {/* Statistics */}

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center">

              <h3 className="text-5xl font-extrabold text-white">

                10K+

              </h3>

              <p className="mt-3 text-green-100">

                Students Supported

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center">

              <h3 className="text-5xl font-extrabold text-white">

                24×7

              </h3>

              <p className="mt-3 text-green-100">

                AI Wellness Support

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center">

              <h3 className="text-5xl font-extrabold text-white">

                98%

              </h3>

              <p className="mt-3 text-green-100">

                Student Satisfaction

              </p>

            </div>

          </div>

          {/* AI Badge */}

          <div className="mt-14 flex justify-center">

            <div className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 px-6 py-3 text-white shadow-lg">

              <span className="w-3 h-3 rounded-full bg-green-300 animate-pulse"></span>

              <span className="font-medium">

                Mana AI is online and ready to support your wellness journey

              </span>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default CallToAction;