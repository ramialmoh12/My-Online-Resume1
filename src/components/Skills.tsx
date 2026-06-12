import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsCategories } from "../data/resume";
import { Award, Code2, Database, Layout, ShieldCheck, Terminal, Compass } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillsCategories[0].id);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Layout className="w-5 h-5 text-sky-500" />;
      case "backend":
        return <Database className="w-5 h-5 text-indigo-500" />;
      case "cms":
        return <Code2 className="w-5 h-5 text-amber-500" />;
      case "tools":
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      case "concepts":
        return <ShieldCheck className="w-5 h-5 text-rose-500" />;
      default:
        return <Compass className="w-5 h-5 text-purple-500" />;
    }
  };

  const activeCategory = skillsCategories.find((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 print-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-sky-500" />
            Skills & Expertise
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Detailed matrix of technical proficiencies across core development fields.
          </p>
        </div>

        {/* Tab Buttons (Selectable) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 no-print">
          {skillsCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition shadow-sm cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 scale-102"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-850"
                }`}
              >
                {getCategoryIcon(cat.id)}
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skills Display Cards (animated on reveal) */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {activeCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/45 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-default"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800 dark:text-slate-100 text-base">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-sky-500 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/10 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Visual gauge bar */}
                      <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>VERIFIED METRIC</span>
                      <span>
                        {skill.level >= 90
                          ? "EXPERT"
                          : skill.level >= 80
                          ? "ADVANCED"
                          : "PROFICIENT"}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* All skills print-friendly overview */}
        <div className="hidden print:block space-y-6 mt-12">
          <h3 className="font-display font-bold text-lg text-black">Complete Skills Print List</h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsCategories.map((cat) => (
              <div key={cat.id} className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-sm text-black border-b border-gray-305 pb-1 mb-2">
                  {cat.title}
                </h4>
                <ul className="space-y-1">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="text-xs flex justify-between">
                      <span>{s.name}</span>
                      <span className="font-semibold">{s.level}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
