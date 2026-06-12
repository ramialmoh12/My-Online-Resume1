import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Terminal, Download, Github, Linkedin, Mail } from "lucide-react";
import { ramiProfile } from "../data/resume";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  onPrint: () => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  terminalOpen,
  setTerminalOpen,
  onPrint,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "experience", "projects", "certifications", "deploy"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About & Languages", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "GitHub Deploy", href: "#deploy", id: "deploy" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? "glass-panel shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a
              id="logo-link"
              href="#hero"
              className="font-display font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent hover:opacity-90"
            >
              {ramiProfile.name}
              <span className="text-xs font-mono ml-2 font-normal text-slate-500 dark:text-slate-400">
                v1.5
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`nav-${item.id}`}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-sky-500 bg-sky-50/50 dark:bg-sky-950/30 dark:text-sky-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="terminal-toggle-btn"
              onClick={() => setTerminalOpen(!terminalOpen)}
              title="Toggle Dev Terminal Mode"
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                terminalOpen
                  ? "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Terminal className="w-5 h-5 animate-pulse" />
            </button>

            <button
              id="print-btn"
              onClick={onPrint}
              title="Print Resume or Save PDF"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Download className="w-5 h-5" />
            </button>

            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <a
              id="github-nav-link"
              href={ramiProfile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-900 text-white dark:bg-slate-800 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition"
              title="View GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu and controls toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 dark:border-slate-800 no-print">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`mobile-nav-${item.id}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? "text-sky-500 bg-sky-50/50 dark:bg-sky-950/30"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 dark:border-slate-800 px-3 flex justify-around">
              <button
                id="mobile-terminal-toggle"
                onClick={() => {
                  setTerminalOpen(!terminalOpen);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-emerald-500"
              >
                <Terminal className="w-5 h-5" />
                <span className="text-sm">Terminal Mode</span>
              </button>
              <button
                id="mobile-print-pdf"
                onClick={() => {
                  onPrint();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-sky-500"
              >
                <Download className="w-5 h-5" />
                <span className="text-sm">Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
