import { Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { team } from "@/lib/team-data";

// Individual founder card with staggered reveal
const TeamCard = ({
  member,
  index,
}: {
  member: typeof team[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const hasLink = member.linkedin && member.linkedin !== "#";

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col items-center text-center rounded-2xl bg-[hsl(220_22%_11%)] border border-white/5 hover:border-white/20 p-8 lg:p-10 transition-all duration-700 ease-out hover:-translate-y-1.5 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95"
      }`}
    >
      {/* Photo / placeholder avatar */}
      <div className="relative mb-6">
        <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-xl ring-4 ring-white/5">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[hsl(214_45%_24%)] to-[hsl(222_45%_14%)]">
              <span className="text-2xl font-semibold tracking-wide text-white/80">
                {member.initials}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Name + role */}
      <h3 className="text-xl lg:text-2xl font-medium text-white tracking-tight mb-1">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-[hsl(var(--citisoft-light))] uppercase tracking-wider mb-5">
        {member.role}
      </p>

      {/* Bio */}
      <p className="text-white/55 text-sm leading-relaxed font-light mb-7 flex-1">
        {member.bio}
      </p>

      {/* LinkedIn */}
      <a
        href={hasLink ? member.linkedin : undefined}
        target={hasLink ? "_blank" : undefined}
        rel={hasLink ? "noopener noreferrer" : undefined}
        aria-disabled={!hasLink}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm font-medium text-white/80 transition-all ${
          hasLink
            ? "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white"
            : "opacity-50 cursor-default pointer-events-none"
        }`}
      >
        <Linkedin className="w-4 h-4" />
        Connect
      </a>
    </div>
  );
};

const Team = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      className="py-24 lg:py-32 bg-[hsl(var(--dark-bg))] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4 sm:mb-6">
            Meet the Founders
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 font-light max-w-2xl mx-auto">
            The team building Citisoft Solutions
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
