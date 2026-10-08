import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Hero from "@/components/landing/Hero";
import BuiltBy from "@/components/landing/BuiltBy";
import CapabilityShowcase from "@/components/landing/CapabilityShowcase";
import Testimonials from "@/components/landing/Testimonials";
import HowWeDeliver from "@/components/landing/HowWeDeliver";
import StackStrip from "@/components/landing/StackStrip";
import Industries from "@/components/landing/Industries";
import CaseStudies from "@/components/landing/CaseStudies";
import Insights from "@/components/landing/Insights";
import ClosingCTA from "@/components/landing/ClosingCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <BuiltBy />
      <CapabilityShowcase />
      <Testimonials />
      <HowWeDeliver />
      <StackStrip />
      <Industries />
      <CaseStudies />
      <Insights />
      <ClosingCTA />
      <Footer />
    </main>
  );
};

export default Index;
