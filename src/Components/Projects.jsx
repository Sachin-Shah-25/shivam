import {motion} from 'framer-motion'
import { FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaJs, FaTools, FaGraduationCap, FaCheckCircle,FaArrowRight,
  FaBars, FaTimes
} from "react-icons/fa";
import { SiReact
} from "react-icons/si";
import React from "react"
 function Projects(_,ref) {
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
const projects = [
  {
    icon: <FaDatabase size={28} className="text-green-400" />,
    iconBg: "bg-green-900/40 border border-green-700/40",
    title: "Multi-Bank Core Banking System",
    tags: ["Python", "PostgreSQL"],
    tagColors: ["text-green-400", "text-blue-400"],
    points: [
      "High-availability application with concurrent transactions & data consistency.",
      "ACID-compliant transactions & robust error-handling.",
      "Query optimization reduced latency from 800ms to 120ms (85% speedup)."
    ]
  },
  {
    icon: <SiReact size={28} className="text-purple-400" />,
    iconBg: "bg-purple-900/40 border border-purple-700/40",
    title: "RESTful Blog & Admin Dashboard",
    tags: ["Python", "FastAPI", "MongoDB"],
    tagColors: ["text-yellow-400", "text-blue-400", "text-green-400"],
    points: [
      "Built RESTful APIs with FastAPI and connected to responsive UI.",
      "JWT authentication & role-based permissions with 98% uptime.",
      "Reduced interface latency by 35% using async pooling & validation."
    ]
  },
  {
    icon: <FaPython size={28} className="text-yellow-400" />,
    iconBg: "bg-yellow-900/40 border border-yellow-700/40",
    title: "AI & Semantic Text Sandbox",
    tags: ["Python", "JavaScript"],
    tagColors: ["text-yellow-400", "text-blue-300"],
    points: [
      "Built semantic similarity engine using vector-based text analysis.",
      "Interactive HTML/JS interface for dynamic input.",
      "Terminal-based scripts for similarity checking and text processing."
    ]
  }
];

  return (
    <section  ref={ref} id="projects" className="bg-[#0d1117] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="text-center mb-14">
          <motion.p variants={fadeUp} custom={0} className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            Featured Projects
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-extrabold text-white">
            Projects & Full Stack Experience
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              whileHover={{ y: -6 }}
              className="bg-[#161b27] border border-gray-700/50 rounded-2xl p-6 hover:border-gray-500/60 transition-all duration-300 flex flex-col">
              <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                {p.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, j) => (
                  <span key={j} className={`text-xs font-semibold ${p.tagColors[j]}`}>{tag}</span>
                ))}
              </div>
              <ul className="space-y-2 flex-1 mb-5">
                {p.points.map((pt, j) => (
                  <li key={j} className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500 flex-shrink-0 mt-1.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <motion.button whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors w-fit">
                View Project <FaArrowRight size={11} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default React.forwardRef(Projects)