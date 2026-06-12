import { useState } from "react";
import { Github, Terminal, ArrowRight, CheckCircle2, Copy, Sparkles, AlertCircle, RefreshCw } from "lucide-react";

export default function GithubDeployHelper() {
  const [activeStep, setActiveStep] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const steps = [
    {
      title: "Create the repository",
      desc: "Create a clean GitHub repository for your portfolio.",
      bullets: [
        "Sign in to GitHub and create a new public repository.",
        "Best name for a personal site: ramialmoh12.github.io",
        "Do not initialize with README, .gitignore, or license if you upload this folder from your computer.",
        "After upload, your source code should be in the repository root, not inside another nested folder."
      ]
    },
    {
      title: "Upload the project",
      desc: "Add the cleaned portfolio files to the repository.",
      bullets: [
        "Extract this ZIP on your computer.",
        "Open the extracted folder in VS Code.",
        "Run: npm install",
        "Run: npm run build to confirm the project builds correctly."
      ]
    },
    {
      title: "Push to GitHub",
      desc: "Commit the project and connect it to your repository.",
      bullets: [
        "git init",
        "git add .",
        "git commit -m 'Initial portfolio website'",
        "git branch -M main",
        "git remote add origin https://github.com/ramialmoh12/ramialmoh12.github.io.git",
        "git push -u origin main"
      ]
    },
    {
      title: "Publish live",
      desc: "Use the included GitHub Actions workflow to build and publish the site.",
      bullets: [
        "Open your GitHub repository settings.",
        "Go to Pages.",
        "Under Build and deployment, choose Source: GitHub Actions.",
        "After the workflow finishes, the website should be live at https://ramialmoh12.github.io/"
      ]
    }
  ];

  const actionWorkflowCode = `name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const handleCopyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section
      id="deploy"
      className="py-20 bg-slate-900 text-slate-100 transition-colors duration-300 relative overflow-hidden no-print"
    >
      {/* Visual glowing ornaments */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl opacity-30" />
      <div className="absolute -bottom-1/10 left-1/10 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> Portfolio Publisher
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
            <Github className="w-8 h-8 text-sky-400" />
            Publish to GitHub Pages
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Follow these steps to publish this animated portfolio live with GitHub Pages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Stepper (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-sky-400" /> Interactive Stepper
            </h3>
            {steps.map((s, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={s.title}
                  id={`deploy-step-btn-${idx}`}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition flex items-start gap-4 cursor-pointer ${
                    isActive
                      ? "bg-slate-800 text-white border-sky-500/80 shadow-md shadow-sky-500/10 scale-101"
                      : "bg-slate-950/40 text-slate-400 border-slate-800/80 hover:bg-slate-850 hover:text-slate-300"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                    isActive ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-100">{s.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details / Code copy segment (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-850 p-6 sm:p-8 rounded-2xl relative">
            <div className="space-y-6">
              
              {/* Card headers */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-2.5 py-1 rounded">
                  STEP {activeStep + 1} DIRECTIVE
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  TARGET: GitHub Pages
                </span>
              </div>

              {/* Instructions bullets list */}
              <div className="space-y-4">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {steps[activeStep].desc}
                </p>
                <div className="space-y-3 pt-2">
                  {steps[activeStep].bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <ArrowRight className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special interactive code container for Step 4 */}
              {activeStep === 3 && (
                <div className="mt-8 space-y-4 border-t border-slate-850 pt-6">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-amber-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Included workflow (.github/workflows/deploy.yml)
                    </span>
                    <button
                      id="copy-workflow-btn"
                      onClick={() => handleCopyCode("workflow", actionWorkflowCode)}
                      className="text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedCode === "workflow" ? (
                        <span className="text-emerald-400 flex items-center gap-1 font-bold">
                          <CheckCircle2 className="w-3 h-3" /> Copied!
                        </span>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 bg-slate-900 rounded-xl overflow-x-auto text-[11px] font-mono border border-slate-850 text-slate-300 leading-normal max-h-56 scrollbar-thin">
                    {actionWorkflowCode}
                  </pre>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
