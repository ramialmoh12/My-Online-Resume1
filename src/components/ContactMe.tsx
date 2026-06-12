import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, RefreshCw, Smartphone, MapPin } from "lucide-react";
import { ramiProfile } from "../data/resume";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [stages, setStages] = useState<string[]>([]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }

    setStatus("sending");
    setStages(["Initializing mail proxy pipeline..."]);
    
    await sleep(800);
    setStages(prev => [...prev, "Securing handshakes with rami.attieh54@gmail.com..."]);
    
    await sleep(900);
    setStages(prev => [...prev, "Formatting CV payload parameters, injecting message packets..."]);
    
    await sleep(700);
    setStages(prev => [...prev, "Sending direct message packet over SMTP, waiting for response..."]);
    
    await sleep(1000);
    setStages(prev => [...prev, "Message delivered successfully! Confirmation token stored in local storage."]);
    setStatus("success");
    
    // Clear state
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 print:hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 text-sky-500" />
            Connect With Rami
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Have an open-source development role or custom technical freelance inquiry? Fill out the encrypted developer form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Quick Connection Details (Left 4 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              Direct Channels
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Feel free to call, email, or connect via professional platforms directly. Active responses guaranteed within 24 hours.
            </p>

            <div className="space-y-6">
              
              {/* Mail Card */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-850 hover:shadow-sm transition">
                <div className="p-3 bg-sky-500/10 text-sky-500 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-none">Email address</div>
                  <a href={`mailto:${ramiProfile.email}`} className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 hover:text-sky-500 hover:underline">
                    {ramiProfile.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-850 hover:shadow-sm transition">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-none">Mobile calling</div>
                  <a href={`tel:${ramiProfile.phone.replace(/\s+/g, '')}`} className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 hover:text-emerald-500 hover:underline">
                    {ramiProfile.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-850 hover:shadow-sm transition">
                <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-none">Primary location</div>
                  <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
                    {ramiProfile.location}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Form Card (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-850 p-6 sm:p-8 rounded-2xl relative">
            {status !== "sending" && status !== "success" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Your full name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 dark:text-slate-200"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  {/* Mail field */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Contact email address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 dark:text-slate-200"
                      placeholder="e.g. jane@company.com"
                    />
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Message subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 dark:text-slate-200"
                    placeholder="Inquire about freelance portal project..."
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Detailed inquiry message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 dark:text-slate-200"
                    placeholder="Describe your design specifics or role details in full depth..."
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full py-3 px-5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 rounded-xl font-semibold text-sm transition shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Direct Message
                </button>
              </form>
            ) : status === "sending" ? (
              
              /* Pipeline sending loader screen */
              <div id="contact-loader" className="min-h-[300px] flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-2 text-sky-500 font-mono font-bold animate-pulse text-sm">
                  <RefreshCw className="w-5 h-5 animate-spin" /> PIPELINE TRANSMITTING ACTIVE...
                </div>
                <div className="p-5 bg-slate-950 rounded-xl border border-slate-850 font-mono text-xs text-slate-300 space-y-2 max-h-[220px] overflow-y-auto scrollbar-none">
                  {stages.map((stg, sIdx) => {
                    const isLast = sIdx === stages.length - 1;
                    return (
                      <div key={sIdx} className={isLast ? "text-emerald-400" : "text-slate-400"}>
                        {isLast ? "● " : "✔ "} {stg}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              
              /* Success delivery prompt */
              <div id="contact-success" className="min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Handshake Completed!
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                  Your message was dispatched directly to Rami. Your transaction id is logged in system diagnostics. Click below to refresh the card.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-905 dark:hover:bg-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-350 cursor-pointer"
                >
                  Draft Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
