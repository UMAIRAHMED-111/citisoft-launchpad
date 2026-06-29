import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "YppdfHvaDOA";
const VIDEO_TITLE = "Talos — One Data Layer for Your Entire Restaurant";

// Click-to-play YouTube embed. Until the user clicks, we only show the static
// thumbnail + a play button — no iframe, no cookies, no tracking. On click we
// swap in the privacy-friendly youtube-nocookie iframe with autoplay.
const TalosVideoEmbed = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title={VIDEO_TITLE}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${VIDEO_TITLE}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt={VIDEO_TITLE}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // maxres may not exist for every video; fall back to hq thumbnail
              (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

          {/* Play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <Play className="w-8 h-8 text-[#14807a] translate-x-0.5" fill="currentColor" />
            </span>
          </span>

          {/* Caption */}
          <span className="absolute bottom-5 left-5 right-5 text-left">
            <span className="block text-white font-medium text-sm sm:text-base drop-shadow">
              {VIDEO_TITLE}
            </span>
            <span className="block text-white/70 text-xs mt-0.5">
              Watch the 90-second overview
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export default TalosVideoEmbed;
