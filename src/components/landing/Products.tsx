import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/lib/products-data";

const Products = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-[hsl(var(--dark-bg))] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4 sm:mb-6">
            Our Products
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 font-light max-w-2xl mx-auto">
            Powerful solutions designed to streamline your operations and drive growth
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="group relative overflow-hidden rounded-2xl cursor-pointer min-h-[380px] sm:min-h-[420px] lg:min-h-[480px]"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Background gradient */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: product.gradient }}
              />

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transform: 'skewX(-15deg)',
                  }}
                />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{ top: '20%', left: '15%', animationDelay: '0s' }}
                />
                <div 
                  className="absolute w-1.5 h-1.5 bg-white/15 rounded-full animate-float"
                  style={{ top: '60%', left: '80%', animationDelay: '1s' }}
                />
                <div 
                  className="absolute w-1 h-1 bg-white/25 rounded-full animate-float"
                  style={{ top: '40%', left: '70%', animationDelay: '2s' }}
                />
                <div 
                  className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
                  style={{ top: '75%', left: '25%', animationDelay: '1.5s' }}
                />
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/30 transition-all duration-500" />

              {/* Content container */}
              <div className="relative h-full p-8 lg:p-10 flex flex-col justify-between z-10">
                {/* Top content */}
                <div>
                  {/* Tag with shimmer */}
                  <div className="relative inline-block mb-8 overflow-hidden">
                    <span className="relative z-10 inline-block px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white bg-white/10 backdrop-blur-md border border-white/20 uppercase rounded-full">
                      PRODUCT
                    </span>
                    <div className="absolute inset-0 animate-shimmer rounded-full" />
                  </div>
                  
                  {/* Title - animated on hover */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight mb-4 transition-transform duration-500 group-hover:translate-x-2">
                    {product.title}
                  </h3>
                  
                  {/* Description - fades in on hover */}
                  <p className="text-white/0 group-hover:text-white/80 text-sm sm:text-base leading-relaxed font-light max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-out">
                    {product.description}
                  </p>
                </div>

                {/* Bottom content */}
                <div>
                  {/* Tagline */}
                  <p className="text-white/50 text-xs uppercase tracking-wider font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {product.tagline}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors duration-300">
                        Explore
                      </span>
                      <div className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-white/60 transition-all duration-500" />
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Outer glow on hover */}
              <div 
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10 blur-xl"
                style={{ background: product.gradient }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
