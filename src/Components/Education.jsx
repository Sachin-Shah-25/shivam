import {motion } from 'framer-motion'
import {FaDatabase, FaTools, FaGraduationCap, FaCheckCircle,
  FaBars, FaTimes
} from "react-icons/fa";

export default function Education() {
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
const certifications = [
  "MongoDB Overview: Core Concepts and Architecture – MongoDB Inc. (2025)",
  "Data Analytics Certification – Skill Up GeeksforGeeks (2025)",
  "Relocating to Noida, Gurugram, and fully available for full-time opportunities."
];
  return (
    <section id="education" className="bg-[#0d1117] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} custom={0}
            className="bg-[#161b27] border border-gray-700/50 rounded-2xl p-8">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-5">Education</p>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-900/40 border border-blue-700/40 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaGraduationCap size={22} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">University of Delhi (Shyam Lal College)</h3>
                <p className="text-gray-400 text-sm mt-1">Bachelor of Arts (B.A.) Programme</p>
                <p className="text-gray-400 text-sm">Major in Computer Science</p>
                <div className="flex flex-wrap gap-4 mt-3 mb-4">
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    📅 Expected Graduation: 2026
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    📍 CGPA: 7.0 / 10 (Equivalent to 3.5 / 4.0)
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                    Core Coursework: Software Engineering, DBMS, Operating Systems, Data Structures & Algorithms (DSA), Computer Networks.
                  </li>
                  <li className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                    Practical Depth: SDLC, interface mapping, memory allocation, process communication primitives.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}
            className="bg-[#161b27] border border-gray-700/50 rounded-2xl p-8">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-5">Certifications & Highlights</p>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-gray-300 text-sm">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}