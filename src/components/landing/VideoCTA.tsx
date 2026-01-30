import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import businessVideo from "@/assets/mixkit-business-people-at-work-meeting-4809-hd-ready.mp4";

const VideoCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  const fullText = "Let's build the future together";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowButton(true), 300);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="relative h-[50vh] sm:h-[55vh] min-h-[300px] sm:min-h-[380px] max-h-[500px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src={businessVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <h2 
          className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white tracking-tight mb-8 sm:mb-10 min-h-[1.2em]"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          {displayedText}
          {hasStarted && displayedText.length < fullText.length && (
            <span className="inline-block w-[3px] h-[1em] bg-white ml-1 animate-pulse" />
          )}
        </h2>

        <Link 
          to="/#contact"
          className={`group relative overflow-hidden px-10 sm:px-14 py-4 border border-white/70 text-white text-sm font-medium tracking-[0.2em] uppercase transition-all duration-500 hover:border-white ${
            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-300">
            Get Started
          </span>
        </Link>
      </div>
    </section>
  );
};

export default VideoCTA;
