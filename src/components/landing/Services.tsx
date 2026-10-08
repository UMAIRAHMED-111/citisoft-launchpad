import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services-data";
import Reveal from "@/components/landing/Reveal";

const Services = () => {
  return (
    <section id="services" className="border-t border-[#E5E5E5] bg-[#F7F8F8] py-16 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.85rem,5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
            Capabilities
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            End-to-end delivery across software, automation, data, and advisory —
            structured for measurable operational outcomes.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card sm:mt-12">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 50}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col gap-3 px-5 py-6 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-7"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground sm:text-[15px]">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
