import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import TeamSection from "@/components/landing/Team";
import Footer from "@/components/landing/Footer";

const Team = () => {
  return (
    <main className="min-h-screen bg-cream">
      <ScrollProgress />
      <Navbar />
      <div className="pt-16 lg:pt-[4.25rem]">
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
};

export default Team;
