import Reveal from "@/components/landing/Reveal";

const stats = [
  { value: "400+", label: "Hotel properties on one payment lifecycle" },
  { value: "80+", label: "Restaurant locations kept in sync" },
  { value: "10K+", label: "Surety transactions processed daily" },
  { value: "~110", label: "Manual tasks eliminated every day" },
];

const BuiltBy = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="container mx-auto grid grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 70}
            className={`border-border py-8 sm:py-10 ${i % 2 === 1 ? "border-l pl-5 sm:pl-8" : "pr-5 sm:pr-8"} ${
              i > 1 ? "border-t lg:border-t-0" : ""
            } lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0`}
          >
            <p className="font-display text-[clamp(2.6rem,5vw,3.75rem)] leading-none text-deep">
              {stat.value}
            </p>
            <p className="mt-3 max-w-[14rem] text-[13px] leading-snug text-muted-foreground sm:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BuiltBy;
