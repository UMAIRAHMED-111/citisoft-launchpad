import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/landing/Reveal";
import teamBg from "@/assets/team-bg.jpg";
import { team, type TeamMember } from "@/lib/team-data";

const TeamCard = ({ member }: { member: TeamMember }) => {
  const hasLink = member.linkedin && member.linkedin !== "#";

  return (
    <article className="group soft-card flex h-full flex-col rounded-2xl bg-white/90 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border bg-cream ring-4 ring-black/[0.02] sm:h-24 sm:w-24">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className={cn(
                "h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0",
                member.imageClassName
              )}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-accent text-xl font-semibold text-deep">
              {member.initials}
            </div>
          )}
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
          {hasLink ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
        {member.bio}
      </p>

      <div className="mt-6 border-t border-border pt-5">
        <p className="mb-2.5 text-[12px] font-medium text-muted-foreground">
          Skills
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <li
              key={skill.name}
              title={skill.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-cream/80 px-2 py-1"
            >
              <img
                src={skill.logo}
                alt=""
                loading="lazy"
                className="h-3 w-3 object-contain opacity-70 grayscale"
              />
              <span className="text-[11px] font-medium text-foreground/80">
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
    <section id="team" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <img
        src={teamBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cream via-cream/35 to-cream/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cream to-transparent sm:h-72"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-12 max-w-2xl lg:mb-14">
          <h1 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-deep">
            Meet the team
          </h1>
          <p className="mt-4 text-base leading-relaxed text-deep/70 sm:text-lg">
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
