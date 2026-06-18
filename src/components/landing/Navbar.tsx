import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import citisoftLogo from "@/assets/citisoft-logo.png";

const navLinks: { label: string; hash?: string; path?: string }[] = [
  { hash: "services", label: "Services" },
  { hash: "products", label: "Products" },
  { hash: "insights", label: "Insights" },
  { path: "/team", label: "Team" },
  { hash: "contact", label: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHome = pathname === "/";
  const isDetailPage = pathname.startsWith("/services/") || pathname.startsWith("/products/");
  
  // Pages that have a dark hero section
  const hasDarkHero = isHome || isDetailPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Set initial value
    setScrollY(window.scrollY);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll tracking on route change
  useEffect(() => {
    setScrollY(window.scrollY);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Show white navbar when scrolled, or transparent with white text at top of dark hero pages
  const showWhiteNavbar = scrollY > 10 || !hasDarkHero;
  const linkTo = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);
  const destFor = (link: { hash?: string; path?: string }) =>
    link.path ?? linkTo(link.hash as string);

  return (
    <header
      style={{
        backgroundColor: showWhiteNavbar ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        borderBottom: showWhiteNavbar ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
        boxShadow: showWhiteNavbar ? '0 1px 3px rgba(0, 0, 0, 0.05)' : 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[4.25rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="Citisoft Solutions home">
            <img
              src={citisoftLogo}
              alt="Citisoft Solutions"
              className="h-8 w-auto lg:h-9 transition-all duration-300"
              style={{
                filter: showWhiteNavbar ? 'none' : 'brightness(0) invert(1)',
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={destFor(link)}
                className="text-[15px] font-medium transition-colors"
                style={{
                  color: showWhiteNavbar ? 'hsl(222.2, 47.4%, 11.2%)' : 'rgba(255, 255, 255, 0.95)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block shrink-0">
            {showWhiteNavbar ? (
              <Button asChild size="default" className="rounded-none px-6 font-semibold tracking-wide">
                <Link to={linkTo("contact")}>Get in Touch</Link>
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-none px-6 font-semibold tracking-wide border-white/80 text-white hover:bg-white/10 hover:text-white hover:border-white"
              >
                <Link to={linkTo("contact")}>Get in Touch</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 transition-colors"
            style={{
              color: showWhiteNavbar ? 'hsl(222.2, 47.4%, 11.2%)' : 'white',
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 lg:hidden z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div
            className="fixed right-0 top-16 bottom-0 lg:hidden z-50 w-[85%] sm:w-80 bg-[hsl(var(--dark-bg))] shadow-2xl animate-slide-in-right"
            aria-hidden="false"
          >
            <nav className="flex flex-col h-full px-6 py-8">
              <div className="flex-1 space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    to={destFor(link)}
                    className="group block py-4 px-4 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 border-b border-white/5 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animation: `slideInRight 0.3s ease-out ${index * 0.1}s both` }}
                  >
                    <span className="text-lg font-medium tracking-wide">{link.label}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-none border-white/70 text-white hover:bg-white/10 hover:text-white hover:border-white font-semibold tracking-wide"
                >
                  <Link to={linkTo("contact")} onClick={() => setIsMobileMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
                
                <p className="text-center text-white/50 text-xs mt-6 tracking-wider">
                  Software • Automation • Data • AI
                </p>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
