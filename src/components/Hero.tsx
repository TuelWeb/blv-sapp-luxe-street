import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-cap.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite découvrir votre collection BLV SAPP !");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <Badge 
            variant="outline" 
            className="bg-primary/20 border-primary text-primary font-inter text-sm px-4 py-2 animate-luxury-glow"
          >
            Nouveau drop – été 2025
          </Badge>
        </div>

        {/* Main Title */}
        <h1 className="font-playfair font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
            BLV SAPP
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-xl sm:text-2xl text-white/90 mb-4 animate-slide-up [animation-delay:200ms]">
          Le streetwear qui te fait briller
        </p>

        {/* Description */}
        <p className="font-inter text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-slide-up [animation-delay:400ms]">
          Streetwear de caractère, pièces uniques, prix mini.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up [animation-delay:600ms]">
          <Button 
            size="lg"
            className="bg-primary text-black hover:bg-primary/90 font-inter font-medium px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Voir les articles
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black font-inter font-medium px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Commander par message
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;