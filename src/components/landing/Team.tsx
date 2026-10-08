import { Linkedin } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { team, type TeamMember } from "@/lib/team-data";

const TeamCard = ({ member }: { member: TeamMember }) => {
  const hasLink = member.linkedin && member.linkedin !== "#";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[hsl(206_50%_10%/0.88)] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/15 ring-4 ring-white/5 sm:h-24 sm:w-24">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="h-full w-full object-cover object-[center_18%] grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white/10 text-xl font-semibold text-white/80">
              {member.initials}
            </div>
          )}
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="text-xl font-medium tracking-tight text-cream-soft sm:text-2xl">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[hsl(var(--citisoft-light))]">
            {member.role}
          </p>
          {hasLink ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-cream-soft/70 transition-colors hover:text-cream-soft"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-cream-soft/70">
        {member.bio}
      </p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="mb-3 text-[13px] font-medium text-cream-soft/50">Skills</p>
        <ul className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <li
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5"
            >
              <img
                src={skill.logo}
                alt=""
                loading="lazy"
                className="h-4 w-4 object-contain"
              />
              <span className="text-[12px] font-medium text-cream-soft/85">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Team = () => {
  return (
    <section id="team" className="relative overflow-hidden py-24 pb-28 lg:py-32 lg:pb-36">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-12 max-w-2xl lg:mb-16">
          <h1 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream-soft">
            Meet the team
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream-soft/70 sm:text-lg">
            Product, cloud, AI, and growth — the people building systems that
            hold up in real operations.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-6">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Team;
