import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import citisoftLogo from "@/assets/citisoft-logo.png";

const navLinks: { label: string; hash?: string; path?: string }[] = [
  { hash: "services", label: "Services" },
  { hash: "industries", label: "Industries" },
  { hash: "case-studies", label: "Case Studies" },
  { hash: "insights", label: "Insights" },
  { path: "/team", label: "Team" },
  { hash: "contact", label: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const hasDarkHero =
    isHome ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/insights/") ||
    pathname.startsWith("/case-studies/");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const showWhiteNavbar = scrollY > 10 || !hasDarkHero;
  const linkTo = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);
  const destFor = (link: { hash?: string; path?: string }) =>
    link.path ?? linkTo(link.hash as string);

  return (
    <header
      style={{
        backgroundColor: showWhiteNavbar ? "rgba(255, 255, 255, 0.97)" : "transparent",
        borderBottom: showWhiteNavbar ? "1px solid hsl(215 18% 88%)" : "none",
        boxShadow: showWhiteNavbar ? "0 1px 2px rgba(0, 0, 0, 0.04)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between lg:h-[4.25rem]">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Citisoft Solutions home">
            <img
              src={citisoftLogo}
              alt="Citisoft Solutions"
              className="h-8 w-auto transition-all duration-300 lg:h-9"
              style={{
                filter: showWhiteNavbar ? "none" : "brightness(0) invert(1)",
              }}
            />
          </Link>

          <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={destFor(link)}
                className="text-[15px] font-medium transition-colors"
                style={{
                  color: showWhiteNavbar
                    ? "hsl(220, 28%, 12%)"
                    : "rgba(255, 255, 255, 0.92)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            {showWhiteNavbar ? (
              <Button asChild size="default" className="rounded-sm px-6 font-semibold">
                <Link to={linkTo("contact")}>Talk to our team</Link>
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-sm border-white/70 px-6 font-semibold text-white hover:bg-white/10 hover:text-white hover:border-white"
              >
                <Link to={linkTo("contact")}>Talk to our team</Link>
              </Button>
            )}
          </div>

          <button
            type="button"
            className="-mr-2 p-2 transition-colors lg:hidden"
            style={{
              color: showWhiteNavbar ? "hsl(220, 28%, 12%)" : "white",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed right-0 top-16 bottom-0 z-50 w-[min(85%,20rem)] bg-[hsl(var(--dark-bg))] pb-[env(safe-area-inset-bottom)] shadow-2xl animate-slide-in-right lg:hidden">
            <nav className="flex h-full flex-col overflow-y-auto px-5 py-6 sm:px-6 sm:py-8">
              <div className="flex-1 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={destFor(link)}
                    className="block border-b border-white/5 px-3 py-3.5 text-white/90 transition-colors last:border-0 hover:bg-white/5 hover:text-white sm:px-4 sm:py-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-base font-medium tracking-wide sm:text-lg">{link.label}</span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 pt-5 sm:pt-6">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-sm border-white/60 font-semibold tracking-wide text-white hover:bg-white/10 hover:text-white hover:border-white"
                >
                  <Link to={linkTo("contact")} onClick={() => setIsMobileMenuOpen(false)}>
                    Talk to our team
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
