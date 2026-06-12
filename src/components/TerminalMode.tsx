import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, ArrowRight, Play, Sparkles } from "lucide-react";
import { ramiProfile, skillsCategories, projectsData, experienceData, certificationsData, languagesData } from "../data/resume";

interface TerminalModeProps {
  onClose: () => void;
}

export default function TerminalMode({ onClose }: TerminalModeProps) {
  const [history, setHistory] = useState<string[]>([
    "RAMI-OS [Version 2.4.15]",
    "Initializing secure connection to rami.almohamad's virtual workspace...",
    "Authentication: SUCCESSFUL [User: Guest. Privilege: Read-Only].",
    "Type 'help' to see the available command listings.",
    ""
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const newHistory = [...history, `guest@ramios:~$ ${cmdStr}`];

    if (!trimmed) {
      setHistory([...newHistory, ""]);
      setInputVal("");
      return;
    }

    let response: string[] = [];

    switch (trimmed) {
      case "help":
        response = [
          "Available Commands:",
          "  about          Show Rami's professional profile summary",
          "  skills         View core technical skills breakdown",
          "  experience     Detailed freelance full-stack work timeline",
          "  projects       Showcase of deployed e-commerce & landing pages",
          "  certifications Display verified Coursera, Stanford & Google credentials",
          "  languages      Multilingual levels (Rami speaks 6 languages!)",
          "  reboot         Restart the system terminal simulation",
          "  clear          Clear the command window",
          "  exit           Exit Terminal Mode & return to premium interactive UI"
        ];
        break;

      case "about":
        response = [
          `Full Name:     ${ramiProfile.name}`,
          `Primary Role:  ${ramiProfile.title}`,
          `Credentials:   ${ramiProfile.subtitle}`,
          `Location:      ${ramiProfile.location}`,
          `Contact Mail:  ${ramiProfile.email}`,
          `Phone Number:  ${ramiProfile.phone}`,
          `GitHub URL:    ${ramiProfile.githubUrl}`,
          "--------------------------------------------------",
          "Summary:",
          ramiProfile.summary
        ];
        break;

      case "skills":
        response = [
          "Technical Skills Evaluation Matrix:",
          "----------------------------------"
        ];
        skillsCategories.forEach((cat) => {
          response.push(`[${cat.title}]`);
          cat.skills.forEach((sk) => {
            const barChars = "█".repeat(Math.round(sk.level / 10)) + "░".repeat(10 - Math.round(sk.level / 10));
            response.push(`  ${sk.name.padEnd(28)} ${barChars} ${sk.level}%`);
          });
          response.push("");
        });
        break;

      case "experience":
        response = ["Work Experience Timeline:", "-------------------------"];
        experienceData.forEach((exp) => {
          response.push(`Role:    ${exp.role}`);
          response.push(`Company: ${exp.company} (${exp.location}) - ${exp.period}`);
          response.push("Tasks completed:");
          exp.points.forEach((pt) => {
            response.push(`  * ${pt}`);
          });
          response.push("--------------------------------------------------");
        });
        break;

      case "projects":
        response = ["Featured Web Projects Portfolio:", "--------------------------------"];
        projectsData.forEach((p) => {
          response.push(`📂 ${p.title} (${p.type})`);
          response.push(`   Tech Stack:  ${p.tech.join(", ")}`);
          if (p.url) response.push(`   App Link:    ${p.url}`);
          response.push("   Key Details:");
          p.description.forEach((d) => {
            response.push(`     - ${d}`);
          });
          response.push("");
        });
        break;

      case "certifications":
        response = ["Verified Academic and Professional Certifications:", "--------------------------------------------------"];
        certificationsData.forEach((cert) => {
          response.push(`🎓 ${cert.title}`);
          response.push(`   Issuer:      ${cert.issuer} | Date: ${cert.date}`);
          if (cert.credentialId) {
            response.push(`   ID Check:    ${cert.credentialId}`);
          }
          response.push("");
        });
        break;

      case "languages":
        response = ["Multilingual Fluency (6 Spoken Languages):", "------------------------------------------"];
        languagesData.forEach((lang) => {
          const dots = "●".repeat(Math.round(lang.percentage / 10)) + "○".repeat(10 - Math.round(lang.percentage / 10));
          response.push(`  ${lang.name.padEnd(12)} - [${lang.level.padEnd(12)}] : ${dots}`);
        });
        break;

      case "reboot":
        setHistory([
          "REBOOTING RAMI-OS CORE...",
          "Secure workspace loaded successfully.",
          "Guest mode authorized.",
          "Type 'help' to review accessible diagnostic elements."
        ]);
        setInputVal("");
        return;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        return;

      default:
        response = [
          `Command not recognized: '${trimmed}'.`,
          "Type 'help' to print list of accessible workspace handlers."
        ];
        break;
    }

    setHistory([...newHistory, ...response, ""]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div
      id="terminal-workspace"
      className="fixed inset-0 z-50 bg-slate-950 text-emerald-400 font-mono text-sm sm:text-base flex flex-col p-4 sm:p-6 select-text leading-relaxed"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-emerald-500" />
          <span className="text-slate-200 font-semibold tracking-wide flex items-center gap-1.5">
            rami-almohamad-cv ~ ramios@guest <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCommand("help")}
            className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition cursor-pointer"
          >
            Show Help
          </button>
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full bg-rose-500 leading-none hover:opacity-80 cursor-pointer"
            title="Close Terminal"
          />
        </div>
      </div>

      {/* Terminal Output */}
      <div 
        id="terminal-history"
        className="flex-1 overflow-y-auto pr-2 space-y-1.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.startsWith("guest@ramios:~$") ? (
              <span className="text-emerald-500">{line}</span>
            ) : line.startsWith("Available Commands:") || line.includes(":") ? (
              <span className="text-sky-400">{line}</span>
            ) : line.startsWith("  *") || line.startsWith("  -") ? (
              <span className="text-slate-300">{line}</span>
            ) : line.startsWith("🎓") || line.startsWith("📂") ? (
              <span className="text-amber-300 font-medium">{line}</span>
            ) : (
              line
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Command input prompt */}
      <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-3">
        <span className="text-emerald-500 font-bold flex-shrink-0 flex items-center gap-1">
          guest@ramios:~$ <ArrowRight className="w-4 h-4 text-emerald-600" />
        </span>
        <input
          ref={inputRef}
          type="text"
          id="terminal-input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-emerald-300 focus:ring-0 focus:border-none font-mono"
          placeholder="type command here (e.g. skills, projects)..."
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="submit"
          id="terminal-send"
          className="p-1 px-3 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 rounded cursor-pointer transition flex items-center gap-1 text-xs sm:text-sm"
        >
          <Play className="w-3 h-3 fill-current" /> Execute
        </button>
      </form>
    </div>
  );
}
