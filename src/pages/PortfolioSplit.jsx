import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LanguagesAndEducation from "../components/LanguagesAndEducation";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export const PortfolioSplit = () => {
  const [activeFilter, setActiveFilter] = useState("Frontend");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div
      className={`bg-gray-900 text-white min-h-screen font-sans transition-colors duration-300`}
    >
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        downloadCV={downloadCV}
      />
      <Hero />
      <About />
      <Projects activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Skills />
      <LanguagesAndEducation />
      <Contact />
      <Footer />
    </div>
  );
};
