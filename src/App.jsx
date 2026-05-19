import { useState, useEffect,useRef } from "react";
import Navbar from "./Components/Navbar"
import CTA from "./Components/CTA"
import Education from "./Components/Education"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"


export default function App() {
  const ref=useRef(null)

  function scrollDown(){
    console.log("hi")
    ref.current?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <div className="bg-[#0d1117] min-h-screen font-sans">
      
      <Navbar />
      <Hero scrollDown={scrollDown} />
      <Skills />
      <Projects ref={ref} />
      <Education />
      <CTA />
      <Footer />
    </div>
  );
}