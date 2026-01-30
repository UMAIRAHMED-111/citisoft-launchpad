import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Products from "@/components/landing/Products";
import Impact from "@/components/landing/Impact";
import VideoCTA from "@/components/landing/VideoCTA";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Impact />
      <VideoCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
