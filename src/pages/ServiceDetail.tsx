import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Footer from "@/components/landing/Footer";
import { getServiceBySlug } from "@/lib/services-data";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section - Dark with image */}
      <section className="relative pt-24 xs:pt-28 lg:pt-32 pb-12 xs:pb-16 sm:pb-20 lg:pb-28 overflow-hidden bg-[hsl(var(--dark-bg))]">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-bg))]/60 via-[hsl(var(--dark-bg))]/80 to-[hsl(var(--dark-bg))]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8 transition-colors"
          >
            ← Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 uppercase mb-4 sm:mb-6">
              SERVICE
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight mb-4 sm:mb-6">
              {service.title}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16">
            {/* Left column - label */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--citisoft-dark))] uppercase tracking-wider">
                  Overview
                </span>
              </div>
            </div>
            
            {/* Right column - content */}
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-700 font-normal leading-relaxed">
                {service.extendedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section header */}
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--citisoft-dark))] uppercase tracking-wider block mb-3">
              What We Offer
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Comprehensive {service.shortTitle} services
            </h2>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group relative p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Number badge */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] flex items-center justify-center text-white text-sm font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Process Section */}
      <section className="py-12 sm:py-16 lg:py-28 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-24">
            {/* Benefits */}
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--citisoft-light))] uppercase tracking-wider mb-4 sm:mb-6 block">
                Benefits
              </span>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-10 tracking-tight">
                Why work with us
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[hsl(var(--citisoft-light))] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </span>
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Process */}
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--citisoft-light))] uppercase tracking-wider mb-4 sm:mb-6 block">
                Our Process
              </span>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-10 tracking-tight">
                How we work
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-slate-600 flex items-center justify-center mt-0.5 text-xs font-medium text-slate-400">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10">
              Let's discuss how our {service.shortTitle} services can help transform your business.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 sm:px-10 font-medium w-full xs:w-auto"
              >
                <Link to="/#contact">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-10 font-medium border-slate-300 hover:bg-slate-50 w-full xs:w-auto"
              >
                <Link to="/#services" className="inline-flex items-center justify-center gap-2">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
