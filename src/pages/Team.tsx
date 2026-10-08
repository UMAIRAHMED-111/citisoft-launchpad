import Navbar from "@/components/landing/Navbar";
import ScrollProgress from "@/components/landing/ScrollProgress";
import TeamSection from "@/components/landing/Team";
import Footer from "@/components/landing/Footer";
import cityscapeImage from "@/assets/hero-cityscape.jpg";

const Team = () => {
  return (
    <main className="relative min-h-screen">
      <img
        src={cityscapeImage}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="fixed inset-0 -z-10 bg-deep/80" aria-hidden="true" />
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
