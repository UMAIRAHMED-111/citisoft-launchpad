import citisoftLogo from "@/assets/citisoft-logo.png";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={citisoftLogo}
                alt="Citisoft Solutions"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              Citisoft Solutions is a software development and technology consulting 
              startup helping businesses design, build, and scale digital systems 
              that solve real operational problems.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  AI & Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  Data Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Citisoft Solutions. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Practical Technology for Growing Organizations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
