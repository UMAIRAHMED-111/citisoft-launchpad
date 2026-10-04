import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services-data";
import Reveal from "@/components/landing/Reveal";

const Services = () => {
  return (
    <section id="services" className="bg-card py-16 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            Capabilities
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            End-to-end delivery across software, automation, data, and
            advisory — structured for measurable operational outcomes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <Link
                to={`/services/${service.slug}`}
                className="group grid min-h-0 overflow-hidden border border-border bg-background transition-shadow duration-300 hover:shadow-[0_16px_48px_hsl(220_28%_12%/0.1)] sm:min-h-[200px] sm:grid-cols-[160px_1fr] lg:grid-cols-[200px_1fr]"
              >
                <div className="relative h-36 overflow-hidden sm:h-auto sm:min-h-full">
                  <img
                    src={service.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[hsl(var(--dark-bg))]/25" />
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-2xl">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
