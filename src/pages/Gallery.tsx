import { useState } from "react";
import { X, Play } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type?: 'video';
  src?: string;
  poster?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Campus Style Showcase 2025", category: "Fashion" },
  { id: 2, title: "Sunset Sessions Vol. 2", category: "Music" },
  { id: 3, title: "Behind the Scenes — Content Day", category: "Media" },
{ id: 4, title: "Witbank Freshers 26'", category: "Events", type: "video", src: "/src/assets/Freshers.mp4", poster: "/src/assets/Thumbnail -Freshers.png" },
  { id: 5, title: "Friends of TUT - TEES", category: "Fashion", type: "video", src: "/src/assets/Friends of TUT - TEES.mp4", poster: "/src/assets/thumbnail-TEES.png" },
];

const categories = ["All", "Fashion", "Music", "Media", "Events"];

// Generate placeholder colors based on category
const categoryGradients: Record<string, string> = {
  Fashion: "from-primary to-primary/70",
  Music: "from-foreground to-foreground/70",
  Media: "from-secondary to-secondary/70",
  Events: "from-primary to-secondary",
};

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  const currentItem = galleryItems.find((i) => i.id === lightbox);

  return (
    <>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl text-primary-foreground mb-4">GALLERY</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Moments captured from our events, shoots, and creative sessions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full font-display text-sm tracking-wide transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item.id)}
                className={`aspect-square rounded-xl bg-gradient-to-br ${categoryGradients[item.category]} flex items-center justify-center p-6 hover:scale-[1.02] transition-all cursor-pointer relative group overflow-hidden`}
              >
                {item.type === 'video' && (
                  <Play className="w-16 h-16 text-primary-foreground/90 group-hover:scale-110 transition-all absolute z-10 drop-shadow-lg" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                <div className="text-left relative z-10 p-4">
                  <span className="text-xs font-semibold bg-background/30 backdrop-blur-sm px-3 py-1 rounded-full text-primary-foreground inline-block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-primary-foreground font-display text-lg leading-tight line-clamp-2 drop-shadow-sm">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm" 
          onClick={() => setLightbox(null)}
        >
          <button 
            className="absolute top-8 right-8 p-4 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all text-white drop-shadow-lg" 
            onClick={() => setLightbox(null)}
          >
            <X size={32} className="drop-shadow-lg" />
          </button>
          <div 
            className="max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl mx-4" 
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.type === 'video' && currentItem.src ? (
              <video 
                src={currentItem.src} 
                controls 
                className="w-full h-auto max-h-[80vh] object-contain"
                poster={currentItem.poster || "/public/placeholder.svg"}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className={`aspect-video w-full rounded-3xl bg-gradient-to-br ${categoryGradients[currentItem.category]} flex flex-col items-center justify-center p-12 text-center shadow-2xl`}>
                <span className="text-sm font-semibold bg-background/30 backdrop-blur px-6 py-2 rounded-xl text-primary-foreground mb-6">{currentItem.category}</span>
                <h2 className="text-primary-foreground font-display text-4xl md:text-5xl drop-shadow-lg">{currentItem.title}</h2>
              </div>
            )}
            <div className="mt-8 px-6 pb-6 text-center">
              <p className="text-xl font-semibold text-white/90">{currentItem.title}</p>
              <span className="text-white/60 text-sm mt-2 block">{currentItem.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

