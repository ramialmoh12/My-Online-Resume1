import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, Award, GraduationCap, ChevronDown } from "lucide-react";
import { ramiProfile } from "../data/resume";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Dynamic Animated Grid Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-sky-200 dark:bg-sky-900/10 blur-3xl opacity-60 dark:opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-indigo-200 dark:bg-indigo-900/10 blur-3xl opacity-60 dark:opacity-30 animate-pulse-slow [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel dark:border-slate-800 text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance & Custom Full-Stack Projects
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent glow-text-primary">
                  {ramiProfile.name}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300"
              >
                {ramiProfile.title}
                <span className="text-slate-400 dark:text-slate-500 mx-2 text-lg font-normal">|</span>
                <span className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
                  WordPress Developer
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Building responsive, high-performance web applications and gorgeous customizable themes. Computer Science undergraduate focused on algorithms, UI/UX, and web standards.
            </motion.p>

            {/* Quick Contact Specs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 text-left text-sm text-slate-600 dark:text-slate-400 bg-white/40 dark:bg-slate-900/30 p-4 sm:p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/45 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-500/10 text-sky-500 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{ramiProfile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${ramiProfile.email}`} className="hover:text-primary-500 hover:underline">
                  {ramiProfile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${ramiProfile.phone.replace(/\s+/g, '')}`} className="hover:text-primary-500 hover:underline">
                  {ramiProfile.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>Computer Science (UoPeople)</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="cta-explore"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                Explore Resume Portfolio
              </button>
              <a
                id="cta-github"
                href="#deploy"
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-800 font-medium rounded-xl transition text-center cursor-pointer"
              >
                Deploy On Your GitHub
              </a>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85"
            >
              {/* Outer rotating decorative rings */}
              <div className="absolute inset-0 border-2 border-dashed border-sky-400/25 dark:border-sky-500/20 rounded-full animate-spin-slow" />
              <div className="absolute -inset-4 border border-spaced border-indigo-400/25 dark:border-indigo-500/15 rounded-full animate-spin-slow [animation-duration:35s] [animation-direction:reverse]" />

              {/* Glowing backdrops */}
              <div className="absolute inset-3 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-2xl opacity-10 blur-xl animate-pulse" />

              {/* Coder Card / Avatar Interface */}
              <div className="absolute inset-2 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none">
                
                {/* SVG Abstract Developer Workspace Graphic */}
                <div className="relative mb-5 w-28 h-28 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <svg
                    className="w-16 h-16 text-slate-800 dark:text-slate-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  {/* Absolute Badge */}
                  <span className="absolute -bottom-1 -right-1 bg-emerald-500 border-2 border-white dark:border-slate-900 w-5 h-5 rounded-full" title="Online Portals Active" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">
                    {ramiProfile.name}
                  </h3>
                  <p className="text-xs text-sky-500 dark:text-sky-400 font-mono tracking-wide uppercase">
                    Software Architect
                  </p>
                </div>

                {/* Simulated Terminal Stats */}
                <div className="mt-5 w-full bg-slate-950 dark:bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 text-left font-mono text-[10px] sm:text-xs text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">HTTP_PORT</span>
                    <span className="text-emerald-400">3000(READY)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">EXPERIENCE</span>
                    <span className="text-amber-400">5+ Years Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">LANGUAGES</span>
                    <span className="text-sky-400">Arabic & English +4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">PROJECTS</span>
                    <span className="text-purple-400">4 Featured Deploys</span>
                  </div>
                </div>

                {/* Floating Social Icons */}
                <div className="mt-4 flex gap-3 text-slate-500 dark:text-slate-400">
                  <a
                    id="hero-github-link"
                    href={ramiProfile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-950 dark:hover:text-white transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    id="hero-linkedin-link"
                    href={ramiProfile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-500 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    id="hero-mail-link"
                    href={`mailto:${ramiProfile.email}`}
                    className="hover:text-emerald-500 transition"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 select-none animate-bounce-slow no-print">
          <span className="text-xs uppercase tracking-widest font-mono font-medium">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
