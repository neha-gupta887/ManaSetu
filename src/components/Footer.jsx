import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Mana<span className="text-green-500">Setu</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              ManaSetu is a student-first mental wellness platform that combines
              AI-powered guidance, mindfulness, mood tracking, and a supportive
              community to help students build healthier minds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#top"
                  className="hover:text-green-400 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-green-400 transition-colors"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-green-400 transition-colors"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#why-choose"
                  className="hover:text-green-400 transition-colors"
                >
                  Why Choose
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="hover:text-green-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/breathing"
                  className="hover:text-green-400 transition-colors"
                >
                  Breathing Exercises
                </Link>
              </li>

              <li>
                <Link
                  to="/journal"
                  className="hover:text-green-400 transition-colors"
                >
                  Mood Journal
                </Link>
              </li>

              <li>
                <Link
                  to="/ai-companion"
                  className="hover:text-green-400 transition-colors"
                >
                  AI Companion
                </Link>
              </li>

              <li>
                <Link
                  to="/support"
                  className="hover:text-green-400 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:support@manasetu.com"
                className="hover:text-green-400 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>

            <p className="mt-6 text-gray-400 break-all">
              support@manasetu.com
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2026 ManaSetu. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400 text-center">
            Made with <FaHeart className="text-red-500" /> for Student Well-being
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;