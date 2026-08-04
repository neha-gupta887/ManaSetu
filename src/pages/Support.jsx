import {
  FaUserMd,
  FaPhoneAlt,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";
import { motion } from "framer-motion";

import CounselorCard from "../components/CounselorCard";
import SOSCard from "../components/SOSCard";

import {
  counselors,
  selfCareTips,
  faqs,
} from "../data/supportData";

function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-5 py-2 text-emerald-700 dark:text-emerald-300 font-semibold">

            <FaHandsHelping />

            Student Support Hub

          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">

            🆘 Support Center

          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">

            Reach out to experienced mentors, professional counselors,
            emergency resources and self-care tools whenever you need
            support. You don't have to face challenges alone.

          </p>

        </motion.div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-xl p-6">

            <FaUserMd className="text-4xl text-emerald-600" />

            <h3 className="mt-5 text-gray-500 dark:text-gray-400">

              Counselors

            </h3>

            <p className="text-4xl font-bold dark:text-white">

              {counselors.length}

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-xl p-6">

            <FaHeartbeat className="text-4xl text-red-500" />

            <h3 className="mt-5 text-gray-500 dark:text-gray-400">

              Self Care Tips

            </h3>

            <p className="text-4xl font-bold dark:text-white">

              {selfCareTips.length}

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-xl p-6">

            <FaPhoneAlt className="text-4xl text-blue-600" />

            <h3 className="mt-5 text-gray-500 dark:text-gray-400">

              Emergency Contacts

            </h3>

            <p className="text-4xl font-bold dark:text-white">

              4

            </p>

          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-xl p-6">

            <FaHandsHelping className="text-4xl text-purple-600" />

            <h3 className="mt-5 text-gray-500 dark:text-gray-400">

              FAQs

            </h3>

            <p className="text-4xl font-bold dark:text-white">

              {faqs.length}

            </p>

          </div>

        </div>

        {/* Counselors */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400">

            👨‍⚕️ Meet Our Counselors

          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">

            Choose a counselor and connect for professional guidance.

          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

            {counselors.map((counselor) => (

              <CounselorCard
                key={counselor.id}
                counselor={counselor}
              />

            ))}

          </div>

        </div>
                {/* Emergency Support */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-[32px] bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white p-10 shadow-2xl"
        >

          <div className="flex flex-col lg:flex-row justify-between gap-10">

            <div>

              <h2 className="text-4xl font-bold">

                🚨 Emergency Helpline

              </h2>

              <p className="mt-5 max-w-3xl text-red-100 leading-8">

                If you or someone you know is in immediate danger,
                contact emergency services or your trusted support
                network immediately.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-5">

                <h3 className="font-bold">

                  National Emergency

                </h3>

                <p className="mt-2 text-3xl font-extrabold">

                  112

                </p>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-5">

                <h3 className="font-bold">

                  Ambulance

                </h3>

                <p className="mt-2 text-3xl font-extrabold">

                  108

                </p>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-5">

                <h3 className="font-bold">

                  Women Helpline

                </h3>

                <p className="mt-2 text-3xl font-extrabold">

                  181

                </p>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-5">

                <h3 className="font-bold">

                  Police

                </h3>

                <p className="mt-2 text-3xl font-extrabold">

                  100

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* SOS Emergency */}

        <div className="mt-10">

          <SOSCard />

        </div>

        {/* Upcoming Appointment */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-[30px] bg-white dark:bg-gray-800 shadow-xl p-8"
        >

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>

              <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">

                📅 Upcoming Session

              </span>

              <h2 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">

                Meet Dr. Priya Sharma

              </h2>

              <p className="mt-3 text-gray-600 dark:text-gray-300">

                Wednesday • 3:00 PM • Online Video Session

              </p>

            </div>

            <button className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 font-bold shadow-lg transition">

              Join Meeting

            </button>

          </div>

        </motion.div>

        {/* Self Care */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400">

            🧘 Daily Self-Care Tips

          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">

            Small habits every day can improve your mental wellbeing.

          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {selfCareTips.map((tip, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 border border-emerald-100 dark:border-gray-700"
              >

                <div className="flex gap-4">

                  <div className="text-3xl">

                    🌿

                  </div>

                  <p className="leading-8 text-gray-700 dark:text-gray-300">

                    {tip}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
                {/* FAQ Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-[32px] bg-white dark:bg-gray-800 shadow-2xl p-10"
        >

          <div className="text-center">

            <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-5 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">

              ❓ Frequently Asked Questions

            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">

              Have Questions?

            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">

              Find answers to the most common questions about counseling,
              mentoring, emergency support, and using ManaSetu.

            </p>

          </div>

          <div className="mt-10 space-y-6">

            {faqs.map((faq, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition"
              >

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">

                  {faq.question}

                </h3>

                <p className="mt-3 leading-8 text-gray-600 dark:text-gray-300">

                  {faq.answer}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Wellness Message */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-[32px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-10 text-white shadow-2xl"
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-4xl font-bold">

                💚 Remember

              </h2>

              <p className="mt-5 leading-8 text-green-100">

                Asking for help is a sign of strength—not weakness.
                Whether you're feeling overwhelmed, stressed,
                anxious, or simply need someone to talk to,
                ManaSetu is here to support your journey.

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-lg p-8">

              <h3 className="text-2xl font-bold">

                🌿 Daily Reminder

              </h3>

              <ul className="mt-6 space-y-4 text-green-100">

                <li>✅ Your feelings are valid.</li>

                <li>✅ Small progress is still progress.</li>

                <li>✅ Take breaks without guilt.</li>

                <li>✅ Reach out when you need support.</li>

              </ul>

            </div>

          </div>

        </motion.div>

        {/* Footer */}

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 dark:text-gray-400">

            © {new Date().getFullYear()} ManaSetu • Student Mental Wellness Platform

          </p>

          <div className="flex gap-6 text-gray-500 dark:text-gray-400">

            <span>💚 Wellness</span>

            <span>👨‍⚕️ Counselors</span>

            <span>🆘 Emergency</span>

            <span>🌿 Self Care</span>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Support;