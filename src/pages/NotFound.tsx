import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Suppress noisy console.error for GitHub Pages subpaths
    if (!location.pathname.startsWith('/')) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <>
      <SEO title="Page Not Found - Friends of TUT" description="The page you're looking for doesn't exist. Return home or explore our creative movement." />
      <section className="gradient-hero min-h-screen py-16 md:py-24 flex items-center">
        <div className="container text-center relative z-10">
          <div className="inline-block animate-bounce mb-8">
            <img 
              src="/placeholder.svg" 
              alt="404 Lost" 
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-2xl shadow-2xl ring-4 ring-primary/20" 
              loading="lazy" 
              decoding="async"
            />
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6 drop-shadow-2xl">
            404
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Hmm... this page got lost in the creative chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button asChild size="lg" className="font-display text-lg px-8 h-14 shadow-xl">
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="font-display text-lg px-8 h-14 shadow-xl">
              <Link to="/gallery">Explore Gallery</Link>
            </Button>
          </div>
          <p className="mt-12 text-xl text-primary-foreground/70">
            Or try searching for what you need <span className="text-primary font-semibold">👆</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFound;

