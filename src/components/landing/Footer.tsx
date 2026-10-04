import { Link } from "react-router-dom";
import citisoftLogo from "@/assets/citisoft-logo.png";
import { Linkedin, ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(220_28%_10%)] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <img
              src={citisoftLogo}
              alt="Citisoft Solutions"
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="mb-6 max-w-sm text-base font-light text-[hsl(220_10%_70%)]">
              Technology consulting for complex operations — software, automation,
              data, and AI delivery.
            </p>

            <a
              href="mailto:info@citisoftsolutions.com"
              className="inline-flex items-center gap-3 text-[hsl(220_10%_70%)] transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              info@citisoftsolutions.com
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-medium text-white">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/#services" },
                { label: "Industries", href: "/#industries" },
                { label: "Case Studies", href: "/#case-studies" },
                { label: "Insights", href: "/#insights" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/#") || item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      className="text-sm text-[hsl(220_10%_70%)] transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm text-[hsl(220_10%_70%)] transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-medium text-white">Capabilities</h4>
            <ul className="space-y-3">
              {[
                { label: "Custom Software", href: "/services/custom-software" },
                { label: "Automation & AI", href: "/services/automation-ai" },
                { label: "Data & Analytics", href: "/services/data-analytics" },
                { label: "Technology Consulting", href: "/services/technology-consulting" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-[hsl(220_10%_70%)] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-5 font-medium text-white">Connect</h4>
            <a
              href="https://www.linkedin.com/company/citisoft-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-[hsl(220_15%_25%)] text-[hsl(220_10%_70%)] transition-colors hover:border-white hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[hsl(220_15%_18%)]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <p className="text-sm text-[hsl(220_10%_50%)]">
            © {currentYear} Citisoft Solutions. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[hsl(220_15%_25%)] text-[hsl(220_10%_70%)] transition-colors hover:border-white hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
