import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { motion } from 'framer-motion'

const GITHUB = import.meta.env.VITE_GITHUB
const LINKEDIN = import.meta.env.VITE_LINKEDIN
const EMAIL = import.meta.env.VITE_EMAIL
const PHONE = import.meta.env.VITE_PHONE
export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">© 2025 Shivam Kumar. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {[
            { icon: <FaGithub size={18} />, href: "https://www.github.com/ShivamSunny26" },
            { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/shivamkumar2607" },
            { icon: <FaEnvelope size={18} />, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}` },
          ].map(({ icon, href }, i) => (
            <motion.a key={i} href={href} target="_blank" rel="noreferrer"
              whileHover={{ y: -3, color: "#60a5fa" }}
              className="text-gray-500 hover:text-blue-400 transition-colors">
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}