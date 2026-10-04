import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Hero from "@/components/landing/Hero";
import ScaleManifesto from "@/components/landing/ScaleManifesto";
import Industries from "@/components/landing/Industries";
import ImmersiveBand from "@/components/landing/ImmersiveBand";
import Services from "@/components/landing/Services";
import CaseStudies from "@/components/landing/CaseStudies";
import HowWeDeliver from "@/components/landing/HowWeDeliver";
import Insights from "@/components/landing/Insights";
import ClosingCTA from "@/components/landing/ClosingCTA";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ScaleManifesto />
      <Industries />
      <ImmersiveBand />
      <Services />
      <CaseStudies />
      <HowWeDeliver />
      <Insights />
      <ClosingCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
