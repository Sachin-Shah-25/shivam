import { motion } from "framer-motion"
import {
  FaDocker, FaRocket, FaPaperPlane, FaGithub, FaGitAlt,
  FaDatabase
} from "react-icons/fa"
const EMAIL = import.meta.env.VITE_EMAIL

export default function CTA() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" }
    })
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  return (
    <section id="contact" className="bg-[#0d1117] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-gradient-to-r from-[#161b27] to-[#1a1f30] border border-gray-700/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-600/20 border border-blue-600/40 rounded-xl flex items-center justify-center">
              <FaRocket className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing
                </span>{" "}
                Together
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                I'm open to full-time opportunities where I can contribute, learn and grow.
              </p>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => {
            window.open(
              `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
              "_blank"
            );
          }}

            className="flex cursor-pointer items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap">
            Get In Touch <FaPaperPlane size={14} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
