import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/product-hero.mp4";
import desktopLogo from "@/assets/zaiya-logo.png";
import mobileLogo from "@/assets/zaiya-logo-mobile.png";
import moroccanFlag from "@/assets/logo_maroc.png";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  // Log to check if the video import is working
  console.log("Hero video import:", heroVideo);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Free shipping banner */}
      <div className="absolute top-0 left-0 right-0 bg-[#7c4f27] py-2 z-20">
        <div className="flex items-center justify-center gap-2">
          <p className="text-white text-center font-medium">
            Livraison gratuite partout au Maroc
          </p>
          <span className="text-white">🚚</span>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--brand-primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--brand-accent)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10 pt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block pt-8 pb-4">
              {/* Desktop logo - hidden on mobile */}
              <img 
                src={desktopLogo} 
                alt="Zaiya Cosmetics" 
                className="h-80 w-auto mx-auto lg:mx-0 drop-shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 hidden lg:block"
              />
              {/* Mobile logo - hidden on desktop */}
              <img 
                src={mobileLogo} 
                alt="Zaiya Cosmetics" 
                className="h-60 w-auto mx-auto lg:mx-0 drop-shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 lg:hidden"
              />
            </div>
            
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Beauté Naturelle
                </span>
                <br />
                <span className="text-foreground">Des Cheveux</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Découvrez notre collection de soins capillaires à base d'huile d'argan et d'ingrédients naturels du Maroc.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={scrollToProducts}
              >
                Découvrir nos produits
              </Button>
              <a
                href="https://instagram.com/zaiya.cosmetics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                @zaiya.cosmetics
              </a>
            </div>

            
          </div>

          {/* Right video */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
              {/* Added fallback content and more detailed error handling */}
              <video 
                src={heroVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error("Video failed to load:", e);
                  console.error("Video source:", heroVideo);
                }}
                onLoadedData={(e) => {
                  console.log("Video loaded successfully:", e);
                  const video = e.target as HTMLVideoElement;
                  console.log("Video dimensions:", video.videoWidth, "x", video.videoHeight);
                }}
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Floating badge */}
            
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};