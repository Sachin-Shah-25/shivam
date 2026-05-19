import {motion} from "framer-motion"
import {FaArrowRight,FaPaperPlane,FaMapMarkerAlt,FaPhone,FaEnvelope,FaLinkedin, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt,
  FaDatabase, FaTools, FaGraduationCap, FaCheckCircle,
  FaBars, FaTimes,
  FaDownload,} from "react-icons/fa"
  import {
  SiPostgresql, SiMongodb, SiMysql, SiSqlite, SiFastapi,
  SiGithubactions, SiReact
} from "react-icons/si";
import { BsGearFill } from "react-icons/bs";


export default function Skills() {
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

const skills = [
  {
    icon: <FaPython size={48} className="text-yellow-400" />,
    title: "Python & Backend",
    color: "#3b82f6",
    items: ["Core Python (OOPs)", "FastAPI", "RESTful APIs", "WebSockets", "Asyncio, Scripting"]
  },
  {
    icon: (
      <span className="flex gap-1">
        <FaHtml5 size={36} className="text-orange-500" />
        <FaCss3Alt size={36} className="text-blue-500" />
        <FaJs size={36} className="text-yellow-400" />
      </span>
    ),
    title: "Frontend",
    color: "#8b5cf6",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation", "Responsive UI"]
  },
  {
    icon: <SiPostgresql size={48} className="text-blue-400" />,
    title: "Databases",
    color: "#10b981",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "DBMS Concepts"]
  },
  {
    icon: <BsGearFill size={48} className="text-gray-400" />,
    title: "Systems & Tools",
    color: "#f59e0b",
    items: ["DSA", "Operating Systems", "Multithreading", "Sockets", "System Design"]
  },
  {
    icon: <FaGitAlt size={48} className="text-red-400" />,
    title: "Tools & Workflows",
    color: "#ef4444",
    items: ["Git & GitHub", "Docker", "GitHub Actions", "CI/CD Basics", "Shell Scripting"]
  }
];

  return (
    <section id="skills" className="bg-[#0d1117] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="text-center mb-14">
          <motion.p variants={fadeUp} custom={0} className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            Technical Skills
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-extrabold text-white">
            Technologies I Work With
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skills.map((skill, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-[#161b27] border border-gray-700/50 rounded-2xl p-6 flex flex-col items-start hover:border-gray-500/70 transition-all duration-300 group cursor-default">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-white font-bold text-base mb-4">{skill.title}</h3>
              <ul className="space-y-1 flex-1">
                {skill.items.map((item, j) => (
                  <li key={j} className="text-gray-400 text-xs flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="w-full h-0.5 mt-5 rounded-full" style={{ background: `linear-gradient(to right, ${skill.color}, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}