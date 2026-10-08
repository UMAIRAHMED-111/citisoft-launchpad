import { Link } from "react-router-dom";
import citisoftLogo from "@/assets/citisoft-logo.png";

const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "What We Do", href: "/#capabilities-live" },
      { label: "How We Work", href: "/#delivery" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Automation & AI", href: "/services/automation-ai" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Technology Consulting", href: "/services/technology-consulting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Industries", href: "/#industries" },
      { label: "Case Studies", href: "/#case-studies" },
      { label: "Insights", href: "/#insights" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/citisoft-solutions/",
        external: true,
      },
      { label: "info@citisoftsolutions.com", href: "mailto:info@citisoftsolutions.com", external: true },
      { label: "Houston, Texas", href: "/#contact" },
    ],
  },
];

const linkClass = "text-sm text-foreground/80 transition-colors hover:text-primary";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-cream">
      <div className="container mx-auto px-4 pb-10 pt-14 sm:px-6 sm:pt-20 lg:px-10">
        <p className="font-display border-b border-foreground/10 pb-10 text-[clamp(3.25rem,10vw,8.5rem)] leading-[0.95] tracking-[-0.02em] text-deep sm:pb-14">
          Your ops, <span className="accent-word">running.</span>
        </p>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <img src={citisoftLogo} alt="Citisoft Solutions" className="h-8 w-auto" />
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
              Your ops systems team — software, automation, data, and AI delivery.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 font-sans text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`${linkClass} break-all sm:break-normal`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 text-[13px] text-muted-foreground">
          © {new Date().getFullYear()} Citisoft Solutions. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
