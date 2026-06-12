import { experienceData } from "../data/resume";
import { Briefcase, Calendar, MapPin, Star, ShieldCheck } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 print-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-sky-500" />
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Chronology of freelance full-stack design and developer engagements.
          </p>
        </div>

        {/* Experience Core Layout */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative flex flex-col sm:flex-row items-start ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              } gap-8 print-break-inside`}
            >
              
              {/* Timeline Center Badge (Icon dot) */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-sky-500 border-4 border-white dark:border-slate-900 shadow-md text-white z-10">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Spacer for non-active column to preserve center layout on wide desktop */}
              <div className="hidden sm:block w-1/2" />

              {/* Active Content Card */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/65 dark:border-slate-850 shadow-sm hover:shadow-md transition">
                  
                  {/* Top Stats Label */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> TOP RATED FREELANCER
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> VERIFIED TALENT
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 dark:text-slate-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="text-sky-500 font-bold">{exp.company}</div>
                  </div>

                  {/* Achievements dots */}
                  <ul className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Freelance Stats block */}
                  <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="font-display font-bold text-lg text-slate-900 dark:text-white">100%</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 tracking-wider font-mono">JOB SUCCESS</div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-slate-900 dark:text-white">50+</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 tracking-wider font-mono">COMPLETED DEPLOY</div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-slate-900 dark:text-white">5★</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 tracking-wider font-mono">AVG RATING</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
