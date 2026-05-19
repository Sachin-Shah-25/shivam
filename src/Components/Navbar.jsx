import {useState,useEffect} from 'react'
import {motion,AnimatePresence } from 'framer-motion'
import {FaDownload,FaBars,FaTimes} from "react-icons/fa"
import my from "../assets/my.pdf"
export default function Navbar() {
  const navLinks = ["Home", "Skills", "Projects", "Education", "Contact"];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d1117]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1 text-xl font-bold">
          <span className="text-blue-400">&lt;/&gt;</span>
          <span className="text-white"> Shivam </span>
          <span className="text-blue-400">Kumar</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ color: "#60a5fa" }}
              className="text-gray-300 text-sm font-medium transition-colors hover:text-blue-400"
            >
              {link}
            </motion.a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={my}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 border border-gray-600 rounded-lg text-sm text-white hover:border-blue-400 transition-all"
          >
            Download Resume <FaDownload size={12} />
          </motion.a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1117]/98 px-6 pb-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-blue-400 py-1 border-b border-gray-800 text-sm">
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
