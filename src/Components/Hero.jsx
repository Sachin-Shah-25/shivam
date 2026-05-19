import { motion } from "framer-motion"
import {
  FaArrowRight, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub,
  FaDownload,
} from "react-icons/fa"
import React, { useRef } from "react"
import me from "../assets/me2.png"
const GITHUB=import.meta.env.VITE_GITHUB
const LINKEDIN=import.meta.env.VITE_LINKEDIN
const EMAIL=import.meta.env.VITE_EMAIL
const PHONE=import.meta.env.VITE_PHONE
function Hero({ scrollDown }) {
  const ref = useRef(null)
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
  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };
  return (
    <section id="home" className="min-h-screen bg-[#0d1117] pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              Full Stack Developer
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
              Building Scalable<br />Web Solutions with
            </motion.h1>
            <motion.h1 variants={fadeUp} custom={2} className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Python & Modern Tech
            </motion.h1>
            <motion.p variants={fadeUp} custom={3} className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Computer Science graduate with strong expertise in Python Full Stack Development. I build robust APIs, dynamic frontends and database-driven applications that solve real-world problems.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollDown()}
                className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-sm transition-all shadow-lg shadow-blue-600/30">
                View My Projects <FaArrowRight size={12} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => {
                window.open(
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
                  "_blank"
                );
              }}

                className="flex cursor-pointer items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium text-sm transition-all">
                Get In Touch <FaPaperPlane size={12} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-48 h-48 opacity-30"
              style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 opacity-20"
              style={{ backgroundImage: "radial-gradient(circle, #8b5cf6 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />

            <div className="bg-[#161b27] border border-gray-700/50 rounded-2xl p-8 relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl shadow-blue-600/30">
                  <img src={me} className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-4xl font-bold text-white">

                  </img>
                </div>
              </div>
              <h2 className="text-center text-white text-2xl font-bold mb-6">Shivam Kumar</h2>

              {[
                { icon: <FaMapMarkerAlt className="text-blue-400" />, text: "Shahdara, Delhi, India" },
                { icon: <FaPhone className="text-blue-400" />, text: PHONE },
                { icon: <FaEnvelope className="text-blue-400" />, text: EMAIL },
                { icon: <FaLinkedin className="text-blue-400" />, text: LINKEDIN },
                { icon: <FaGithub className="text-blue-400" />, text: GITHUB },
              ].map(({ icon, text }, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 py-2 border-b border-gray-700/40 last:border-0">
                  <span className="text-sm">{icon}</span>
                  {
                    i === 3 ? (
                      <a href={`https://www.${text}`} className="text-gray-300 text-sm">
                        {text}
                      </a>
                    ) : i === 4 ? (
                      <a href={`https://www.${text}`} className="text-gray-300 text-sm">
                        {text}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-sm">
                        {text}
                      </span>
                    )
                  }
                  {/* <span className="text-gray-300 text-sm">{text}</span> */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
export default React.memo(Hero)