import { useState } from "react";
import { certificationsData } from "../data/resume";
import { Award, CheckCircle2, Copy, Search, ExternalLink, ShieldCheck } from "lucide-react";

export default function CertificationsTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCerts = certificationsData.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 print-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-sky-500" />
            Certifications & Credentials
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Verified academic accomplishments and industry professional credentials.
          </p>
        </div>

        {/* Search tool block */}
        <div className="max-w-md mx-auto mb-10 relative no-print">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          <input
            id="cert-search"
            type="text"
            placeholder="Search credentials (e.g. Google, Stanford, Django)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-805 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 dark:text-slate-200"
          />
        </div>

        {/* Credentials Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              style={{ pageBreakInside: 'avoid' }}
              className="group p-6 bg-slate-50 dark:bg-slate-950 border border-slate-201/50 dark:border-slate-850 rounded-2xl flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-800 hover:shadow-sm transition"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  
                  {/* Badge issuer icon */}
                  <div className="p-2.5 bg-sky-500/10 text-sky-500 rounded-xl">
                    <Award className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-mono font-bold bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 px-2.5 py-1 rounded-full text-slate-500">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug group-hover:text-primary-500 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Id verification code box */}
              {cert.credentialId && (
                <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-850 flex flex-wrap gap-2 items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1 bg-slate-200/50 dark:bg-slate-900/60 p-2 rounded border border-slate-200/40 dark:border-slate-800/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>ID: {cert.credentialId}</span>
                  </div>

                  {/* Copy actions */}
                  <button
                    id={`copy-cert-id-${cert.id}`}
                    onClick={() => handleCopy(cert.id, cert.credentialId || "")}
                    className="flex items-center gap-1 px-3 py-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded cursor-pointer transition no-print"
                    title="Copy Credential ID"
                  >
                    {copiedId === cert.id ? (
                      <span className="text-emerald-500 flex items-center gap-1 font-bold">
                        <CheckCircle2 className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy ID
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          ))}

          {filteredCerts.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-400 font-mono text-sm border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
              No credentials matched the query. Try searching for other terms.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
