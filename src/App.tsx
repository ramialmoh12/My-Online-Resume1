import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSummary from "./components/AboutSummary";
import Skills from "./components/Skills";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsGrid from "./components/ProjectsGrid";
import CertificationsTab from "./components/CertificationsTab";
import GithubDeployHelper from "./components/GithubDeployHelper";
import ContactMe from "./components/ContactMe";
import TerminalMode from "./components/TerminalMode";
import { ramiProfile } from "./data/resume";
import { Github, Linkedin, Mail, ShieldAlert, Cpu } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  // Initialize Dark Mode securely from local storage settings
  useEffect(() => {
    const savedTheme = localStorage.getItem("rami_theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(true); // Default core theme is elegant Dark Cosmic
    }
  }, []);

  // Update root element configuration for Tailwind dark styling classes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("rami_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("rami_theme", "light");
    }
  }, [darkMode]);

  const handlePrint = () => {
    window.print();
  };

  const handleExploreClick = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 relative ${
      terminalOpen ? "overflow-hidden h-screen" : ""
    }`}>
      
      {/* Portfolio status banner */}
      <div className="no-print bg-amber-500/10 border-b border-amber-550/20 text-amber-500 text-xs py-2 px-4 flex items-center justify-between gap-4 font-mono">
        <span className="flex items-center gap-1.5 leading-none">
          <ShieldAlert className="w-3.5 h-3.5" /> Portfolio is ready for GitHub Pages. Open the deploy section for publishing steps.
        </span>
        <button
          onClick={() => setTerminalOpen(true)}
          className="flex items-center gap-1.5 font-bold hover:underline cursor-pointer"
        >
          <Cpu className="w-3 h-3" /> Open Developer Console
        </button>
      </div>

      {/* Main Navigation bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        terminalOpen={terminalOpen}
        setTerminalOpen={setTerminalOpen}
        onPrint={handlePrint}
      />

      {/* Main sections */}
      <main className="relative">
        <Hero onExploreClick={handleExploreClick} />
        
        <AboutSummary />
        
        <Skills />
        
        <ExperienceTimeline />
        
        <ProjectsGrid />
        
        <CertificationsTab />
        
        <GithubDeployHelper />
        
        <ContactMe />
      </main>

      {/* Interactive terminal overlay */}
      {terminalOpen && (
        <TerminalMode onClose={() => setTerminalOpen(false)} />
      )}

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 text-slate-500 dark:text-slate-400 text-sm no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Branding copyright segment */}
            <div className="space-y-2">
              <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                Rami Almohamad
              </h4>
              <p className="text-xs text-slate-400 font-mono tracking-wide">
                Full-Stack Developer Portal &copy; 2026. All rights reserved.
              </p>
            </div>

            {/* Middle Quick Navigation list */}
            <div className="flex gap-4 sm:gap-6 text-xs font-mono font-medium">
              <a href="#hero" className="hover:text-sky-500 transition">Top</a>
              <a href="#about" className="hover:text-sky-500 transition">About</a>
              <a href="#skills" className="hover:text-sky-500 transition">Skills</a>
              <a href="#projects" className="hover:text-sky-500 transition">Apps</a>
              <button onClick={handlePrint} className="hover:text-sky-500 transition cursor-pointer">Print PDF</button>
            </div>

            {/* Social channels segment */}
            <div className="flex gap-4">
              <a
                id="footer-github-link"
                href={ramiProfile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-220 dark:bg-slate-900 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-linkedin-link"
                href={ramiProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-220 dark:bg-slate-900 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-sky-500 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-email-link"
                href={`mailto:${ramiProfile.email}`}
                className="p-2.5 bg-slate-220 dark:bg-slate-900 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-emerald-500 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
