import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export const SURETYOS_URL = "https://suretyos.citisoftsolutions.com/";

// Live SuretyOS preview rendered inside browser chrome, with a graceful
// fallback overlay in case the remote site blocks embedding.
const SuretyEmbed = ({ className = "" }: { className?: string }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // If the iframe never reports a load (blocked by the remote site), show fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02] ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(220_20%_12%)] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex-1 truncate rounded-md bg-white/5 px-3 py-1.5 text-xs text-white/40">
          suretyos.citisoftsolutions.com
        </div>
      </div>

      {/* Iframe viewport */}
      <div className="relative aspect-[16/10] bg-[hsl(220_25%_10%)]">
        <iframe
          src={SURETYOS_URL}
          title="SuretyOS live preview"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />

        {/* Fallback overlay if the site blocks embedding */}
        {failed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[hsl(214_50%_18%)] via-[hsl(220_40%_14%)] to-[hsl(225_45%_10%)] text-center px-6">
            <ExternalLink className="w-8 h-8 text-white/70" />
            <p className="text-white/80 text-sm font-light max-w-xs">
              Preview the full SuretyOS experience directly on the live site.
            </p>
            <a
              href={SURETYOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[hsl(220_25%_10%)] font-medium text-sm hover:bg-white/90 transition-all"
            >
              Open SuretyOS
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuretyEmbed;
