import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import citisoftLogo from "@/assets/citisoft-logo.png";
import { cn } from "@/lib/utils";

const navLinks: { label: string; hash?: string; path?: string }[] = [
  { hash: "capabilities-live", label: "What We Do" },
  { hash: "delivery", label: "How We Work" },
  { hash: "industries", label: "Industries" },
  { hash: "case-studies", label: "Work" },
  { path: "/team", label: "Team" },
  { hash: "contact", label: "Contact" },
];

type NavbarProps = {
  /** Kept for call-site compat — nav is always fixed now */
  overlapHero?: boolean;
};

const Navbar = ({ overlapHero: _overlapHero = false }: NavbarProps) => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navRowRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash.replace("#", ""));
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const moveIndicator = (el: HTMLElement | null) => {
    const row = navRowRef.current;
    if (!el || !row) return;
    const rowBox = row.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    setIndicator({
      left: box.left - rowBox.left,
      width: box.width,
      opacity: 1,
    });
  };

  const linkTo = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);
  const destFor = (link: { hash?: string; path?: string }) =>
    link.path ?? linkTo(link.hash as string);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-3 transition-all duration-300",
        scrolled ? "py-2 lg:py-2.5" : "py-3 lg:py-4"
      )}
    >
      <div className="lattice-glass-pill relative w-[calc(100vw-1.5rem)] max-w-[960px] lg:w-auto lg:max-w-none">
        <div className="lattice-glass-blur absolute inset-0 z-0" aria-hidden="true" />
        <div className="lattice-glass-shadow absolute inset-0 z-10" aria-hidden="true" />
        <div className="lattice-glass-inset absolute inset-0 z-20" aria-hidden="true" />
        <div className="lattice-glass-fill absolute inset-0 z-[5]" aria-hidden="true" />

        <nav className="relative z-30 flex w-full flex-wrap items-center justify-center gap-0 p-1.5 lg:w-auto lg:flex-nowrap">
          <Link
            to="/"
            className="mr-1 hidden shrink-0 items-center px-2 py-1.5 sm:flex lg:mr-2"
            aria-label="Citisoft Solutions home"
          >
            <img
              src={citisoftLogo}
              alt=""
              className="h-6 w-auto brightness-0 invert lg:h-7"
            />
          </Link>

          <div
            ref={navRowRef}
            className="relative hidden items-center sm:flex"
            onMouseLeave={() => setIndicator((s) => ({ ...s, opacity: 0 }))}
          >
            <div
              className="pointer-events-none absolute top-0 h-full rounded-full bg-white/15 transition-all duration-200"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
                border: "1px solid rgba(255,255,255,0.22)",
              }}
              aria-hidden="true"
            />

            {navLinks.map((link, i) => {
              const active =
                (link.hash && activeHash === link.hash) ||
                (link.path && pathname === link.path);
              return (
                <Link
                  key={link.label}
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  to={destFor(link)}
                  onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                  onFocus={(e) => moveIndicator(e.currentTarget)}
                  className={cn(
                    "relative z-10 rounded-full px-3 py-2 text-center text-[13px] whitespace-nowrap transition-colors duration-200 sm:px-4 lg:px-5 lg:py-2.5 lg:text-[15px] xl:px-6",
                    active ? "text-white" : "text-white/90"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            to={linkTo("contact")}
            className="ml-1 hidden rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25 lg:ml-2 lg:inline-flex lg:px-5 lg:py-2.5"
          >
            Get Started
          </Link>

          <div className="flex w-full items-center justify-between gap-2 pl-3 sm:hidden">
            <Link to="/" className="flex items-center py-1" aria-label="Citisoft Solutions home">
              <img src={citisoftLogo} alt="" className="h-6 w-auto brightness-0 invert" />
            </Link>
            <button
              type="button"
              className="flex h-10 items-center gap-2.5 rounded-full bg-white/10 pl-4 pr-3.5 text-[13px] font-medium text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              Menu
              <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
                <span className="h-[1.5px] w-full rounded-full bg-current" />
                <span className="h-[1.5px] w-2/3 self-end rounded-full bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <MobileMenu
        open={isMobileMenuOpen}
        onClose={closeMenu}
        links={navLinks.map((link) => ({
          label: link.label,
          to: destFor(link),
          active: Boolean(
            (link.hash && activeHash === link.hash) || (link.path && pathname === link.path)
          ),
        }))}
        contactTo={linkTo("contact")}
      />
    </header>
  );
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { label: string; to: string; active: boolean }[];
  contactTo: string;
};

const MobileMenu = ({ open, onClose, links, contactTo }: MobileMenuProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sheetRef.current?.toggleAttribute("inert", !open);
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      ref={sheetRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] flex flex-col bg-deep text-cream-soft transition-[opacity,visibility] duration-300 sm:hidden",
        open ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[hsl(var(--citisoft-light)/0.22)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between px-6 pb-2 pt-5">
        <Link to="/" onClick={onClose} aria-label="Citisoft Solutions home">
          <img src={citisoftLogo} alt="" className="h-6 w-auto brightness-0 invert" />
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 items-center gap-2 rounded-full border border-white/15 pl-4 pr-3 text-[13px] font-medium"
        >
          Close
          <X className="h-4 w-4" />
        </button>
      </div>

      <nav className="relative flex-1 overflow-y-auto px-6 pt-8" aria-label="Mobile">
        <ul className="border-t border-white/10">
          {links.map((link, i) => (
            <li
              key={link.label}
              className={cn(
                "border-b border-white/10 transition-all duration-500 ease-out",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
            >
              <Link
                to={link.to}
                onClick={onClose}
                className="flex items-center gap-4 py-4"
              >
                <span
                  className={cn(
                    "font-display flex-1 text-[2rem] font-medium leading-none tracking-[-0.02em]",
                    link.active ? "text-[#b8e2f8]" : "text-cream-soft"
                  )}
                >
                  {link.label}
                </span>
                <ArrowUpRight className="h-5 w-5 text-cream-soft/40" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={cn(
          "relative space-y-5 px-6 pb-8 pt-6 transition-all duration-500 ease-out",
          open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        )}
        style={{ transitionDelay: open ? "380ms" : "0ms" }}
      >
        <Link
          to={contactTo}
          onClick={onClose}
          className="flex items-center justify-center rounded-full bg-cream-soft py-4 text-[15px] font-medium text-deep"
        >
          Book a discovery call
        </Link>
        <div className="flex items-center justify-between text-[13px] text-cream-soft/60">
          <a href="mailto:info@citisoftsolutions.com">info@citisoftsolutions.com</a>
          <span>Houston, TX</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
