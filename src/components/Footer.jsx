import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaRobot,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 pt-24 pb-8">

      {/* Background Glow */}

      <div className="absolute -top-20 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl shadow-lg">

                🌿

              </div>

              <div>

                <h2 className="text-3xl font-extrabold text-white">

                  ManaSetu

                </h2>

                <p className="text-sm text-gray-400">

                  AI Wellness Platform

                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">

              ManaSetu is an AI-powered mental wellness platform designed
              specifically for university students. We combine intelligent
              wellness guidance, mood tracking, AI memory, and personalized
              recommendations to build healthier minds.

            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2">

              <FaRobot className="text-green-400" />

              <span className="text-green-300">

                Mana AI Online

              </span>

            </div>

          </motion.div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">

              Navigation

            </h3>

            <ul className="space-y-4">

              <li><a href="#top" className="hover:text-emerald-400 transition">Home</a></li>

              <li><a href="#features" className="hover:text-emerald-400 transition">Features</a></li>

              <li><a href="#how-it-works" className="hover:text-emerald-400 transition">How It Works</a></li>

              <li><a href="#why-choose" className="hover:text-emerald-400 transition">Why Choose</a></li>

              <li><a href="#testimonials" className="hover:text-emerald-400 transition">Testimonials</a></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">

              Resources

            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/breathing" className="hover:text-emerald-400 transition">
                  Breathing Exercises
                </Link>
              </li>

              <li>
                <Link to="/journal" className="hover:text-emerald-400 transition">
                  Mood Journal
                </Link>
              </li>

              <li>
                <Link to="/ai-companion" className="hover:text-emerald-400 transition">
                  AI Companion
                </Link>
              </li>

              <li>
                <Link to="/analytics" className="hover:text-emerald-400 transition">
                  Analytics
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">

              Connect

            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:support@manasetu.com"
                className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="mt-6 text-gray-400">

              support@manasetu.com

            </p>

          </div>

        </div>

        {/* Bottom */}
                <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-gray-800 pt-8"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Copyright */}

            <div>

              <p className="text-gray-400">

                © 2026 <span className="font-semibold text-white">ManaSetu</span>. All Rights Reserved.

              </p>

              <p className="mt-2 text-sm text-gray-500">

                Empowering students with AI-powered mental wellness.

              </p>

            </div>

            {/* Center Badge */}

            <div className="rounded-full border border-green-500/20 bg-green-500/10 px-6 py-3">

              <span className="text-green-300 font-medium">

                🌿 AI • Wellness • Community

              </span>

            </div>

            {/* Made With */}

            <div className="flex items-center gap-2 text-gray-400">

              <span>Built with</span>

              <FaHeart className="text-red-500 animate-pulse" />

              <span>for students worldwide</span>

            </div>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;