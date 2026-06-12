import { useState } from "react";
import { projectsData } from "../data/resume";
import { FolderGit2, ExternalLink, Github, Filter, Code2, Tag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "Full-Stack", "Frontend", "Frontend & UI/UX"];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 print-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <FolderGit2 className="w-8 h-8 text-sky-500" />
            Software Projects
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Showcase of production web entities ranging from full-stack portals to custom styled landing pages.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 items-center no-print">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-lg text-xs text-slate-500 font-mono font-semibold uppercase mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter by
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                filter === cat
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                  : "bg-white text-slate-600 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {cat === "all" ? "All Apps" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with motion exit/enter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                id={`project-card-${proj.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ pageBreakInside: 'avoid' }}
                className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700/80 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  {/* Category badging */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-1 rounded-full">
                      {proj.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {proj.type}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Bullet description text listings */}
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {proj.description.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-slate-400 dark:text-slate-600 mt-1.5 flex-shrink-0 font-bold">&#8250;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags bar */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold font-mono bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-md flex items-center gap-1"
                      >
                        <Tag className="w-2.5 h-2.5 opacity-55" /> {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Links Row */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-150 dark:border-slate-800/60 no-print">
                  <div className="flex items-center gap-3">
                    {proj.github ? (
                      <a
                        id={`project-github-${proj.id}`}
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-500 hover:text-slate-950 dark:hover:text-white bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                        title="GitHub Code Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        Private Codebase
                      </span>
                    )}

                    {proj.url ? (
                      <a
                        id={`project-live-${proj.id}`}
                        href={proj.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-sky-500 dark:text-sky-400 hover:underline"
                        title="Open Live Web Application"
                      >
                        Launch App <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        Local Deployment Only
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                    STATUS: ACTIVE
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
