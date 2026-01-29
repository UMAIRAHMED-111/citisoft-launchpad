import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Approach from "@/components/landing/Approach";
import WhyUs from "@/components/landing/WhyUs";
import Products from "@/components/landing/Products";
import Clients from "@/components/landing/Clients";
import Commitment from "@/components/landing/Commitment";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <WhyUs />
      <Products />
      <Clients />
      <Commitment />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
