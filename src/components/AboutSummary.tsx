import { motion } from "motion/react";
import { ramiProfile, languagesData, educationData } from "../data/resume";
import { User, GraduationCap, Languages, FileText, CheckCircle2 } from "lucide-react";

export default function AboutSummary() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 print-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-sky-500" />
            About Rami & Languages
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Motivated full-stack architect, continuous learner, and multilingual solver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          {/* Column 1: Summary & Professional Path (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-500" /> Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {ramiProfile.summary}
              </p>
            </div>

            {/* Quick stats grid for bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Freelance development in Python, Django, PHP & WordPress",
                "Advanced frontend mastery with custom fluid react animations",
                "Robust understanding of cybersecurity & system hardening",
                "Expected CS Graduate status in academic years 2025-2029",
                "Built several full e-commerce dropshipping portals",
                "Mastered multilingual communications across 6 languages"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Education Sub-card */}
            <div style={{ pageBreakInside: 'avoid' }} className="p-6 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/45 shadow-sm">
              <h3 className="font-display text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                <GraduationCap className="text-indigo-500 w-5 h-5" /> Academic Education
              </h3>
              {educationData.map((edu) => (
                <div key={edu.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full font-medium w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {edu.school}
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    Status: {edu.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Multilingual Fluency Tracker (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Languages className="w-5 h-5 text-sky-500" /> Spoken Languages
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Rami has a highly exceptional ability to connect with global collaborators and operate in multiple cultural and technical scopes.
              </p>
            </div>

            <div className="space-y-5 bg-slate-50/50 dark:bg-slate-950/20 p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/20 shadow-sm">
              {languagesData.map((lang, idx) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      {lang.name}
                    </span>
                    <span className="font-mono text-xs text-sky-500 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/10 px-2 py-0.5 rounded">
                      {lang.level}
                    </span>
                  </div>
                  {/* Visual Progress Bar */}
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-sky-400 to-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
