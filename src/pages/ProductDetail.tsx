import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Footer from "@/components/landing/Footer";
import { getProductBySlug } from "@/lib/products-data";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section - Dark with gradient */}
      <section className="relative pt-24 xs:pt-28 lg:pt-32 pb-16 xs:pb-20 sm:pb-24 lg:pb-32 overflow-hidden bg-[hsl(var(--dark-bg))]">
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-bg))]/70 via-[hsl(var(--dark-bg))]/85 to-[hsl(var(--dark-bg))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--dark-bg))]/90 to-transparent" />
        </div>
        
        {/* Decorative gradient orb */}
        <div 
          className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{ background: product.gradient }}
        />
        
        {/* Decorative grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to="/#products"
            className={`inline-flex items-center gap-2 text-white/70 hover:text-white text-xs sm:text-sm font-medium mb-8 sm:mb-10 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          
          <div className="max-w-4xl">
            <span 
              className={`inline-block px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 uppercase mb-6 sm:mb-8 rounded-full transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              PRODUCT
            </span>
            <h1 
              className={`text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium sm:font-light text-white tracking-tight mb-6 sm:mb-8 leading-[1.1] transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {product.title}
            </h1>
            <p 
              className={`text-base xs:text-lg sm:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mb-8 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {product.tagline}
            </p>
            
            {/* Capabilities tags */}
            <div 
              className={`flex flex-wrap gap-2 sm:gap-3 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {product.capabilities?.map((capability, index) => (
                <span 
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left column - label */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="w-12 h-1 bg-gradient-to-r from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] mb-4" />
                <span className="text-sm font-semibold text-[hsl(var(--citisoft-dark))] uppercase tracking-wider">
                  Overview
                </span>
              </div>
            </div>
            
            {/* Right column - content */}
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-normal leading-relaxed">
                {product.extendedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[hsl(var(--citisoft-light))]/5 to-[hsl(var(--citisoft-dark))]/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[hsl(var(--citisoft-dark))] bg-[hsl(var(--citisoft-light))]/10 rounded-full uppercase tracking-wider mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-slate-500 font-light">
              Powerful capabilities designed for modern businesses
            </p>
          </div>
          
          {/* Features - Modern cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {product.keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 h-full border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-300/40 transition-all duration-500 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--citisoft-light))]/0 via-transparent to-[hsl(var(--citisoft-dark))]/0 group-hover:from-[hsl(var(--citisoft-light))]/5 group-hover:to-[hsl(var(--citisoft-dark))]/5 transition-all duration-700" />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsl(var(--citisoft-light))]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Number with line */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] bg-clip-text text-transparent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[hsl(var(--citisoft-dark))] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Learn more indicator */}
                    <div className="flex items-center gap-2 text-[hsl(var(--citisoft-dark))] font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[hsl(var(--dark-bg))] relative overflow-hidden">
        {/* Decorative gradient using product gradient */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 blur-3xl"
          style={{ background: product.gradient }}
        />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[hsl(var(--citisoft-light))]/5 to-transparent blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Benefits */}
            <div>
              <div className="w-12 h-1 bg-gradient-to-r from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] mb-6" />
              <span className="text-sm font-semibold text-[hsl(var(--citisoft-light))] uppercase tracking-wider mb-4 block">
                Benefits
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8 lg:mb-10 tracking-tight">
                Why choose this solution
              </h3>
              <ul className="space-y-5">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] flex items-center justify-center mt-0.5 shadow-lg shadow-[hsl(var(--citisoft-dark))]/30">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-white/80 leading-relaxed group-hover:text-white transition-colors">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Use Cases */}
            <div>
              <div className="w-12 h-1 bg-gradient-to-r from-white/30 to-white/10 mb-6" />
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4 block">
                Use Cases
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8 lg:mb-10 tracking-tight">
                Perfect for
              </h3>
              <ul className="space-y-5">
                {product.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center mt-0.5 group-hover:border-white/50 transition-colors">
                      <ArrowRight className="w-3 h-3 text-white/60 group-hover:text-white/80 transition-colors" />
                    </span>
                    <span className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              Ready to transform your operations?
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl mx-auto">
              Get started with {product.shortTitle} today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="group rounded-none px-10 font-semibold tracking-wide h-14"
              >
                <Link to="/#contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-10 font-semibold tracking-wide border-slate-300 hover:bg-slate-100 h-14"
              >
                <Link to="/#products">
                  View All Products
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

export default ProductDetail;
