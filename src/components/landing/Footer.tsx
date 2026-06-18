import citisoftLogo from "@/assets/citisoft-logo.png";
import { Linkedin, ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(220_20%_10%)] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand - Takes more space */}
          <div className="sm:col-span-2 lg:col-span-5">
            <img
              src={citisoftLogo}
              alt="Citisoft Solutions"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-[hsl(220_10%_70%)] font-light text-base mb-6">
              Software • Automation • Data • AI
            </p>
            
            {/* Contact Info */}
            <a 
              href="mailto:info@citisoftsolutions.com" 
              className="inline-flex items-center gap-3 text-[hsl(220_10%_70%)] hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@citisoftsolutions.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-medium text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Products", href: "#products" },
                { label: "Insights", href: "#insights" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[hsl(220_10%_70%)] hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-medium text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {["Custom Software", "Automation & AI", "Data & Analytics", "Consulting"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[hsl(220_10%_70%)] hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h4 className="font-medium text-white mb-5">Connect</h4>
            <a
              href="https://www.linkedin.com/company/citisoft-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-[hsl(220_15%_25%)] flex items-center justify-center text-[hsl(220_10%_70%)] hover:text-white hover:border-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[hsl(220_15%_18%)]">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[hsl(220_10%_50%)] text-sm">
              © {currentYear} Citisoft Solutions. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-[hsl(220_15%_25%)] flex items-center justify-center text-[hsl(220_10%_70%)] hover:text-white hover:border-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;