import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import capImage from "@/assets/cap-product.jpg";
import airpodsImage from "@/assets/airpods-product.jpg";
import shortsImage from "@/assets/shorts-product.jpg";
import sunglassesImage from "@/assets/sunglasses-product.jpg";
import jerseyImage from "@/assets/jersey-product.jpg";

const Home = () => {
  const featuredProducts = [
    {
      name: "Casquette Premium",
      price: "9,99 €",
      image: capImage,
      description: "Style Gucci/Fendi, finitions luxueuses",
      isLimitedEdition: true
    },
    {
      name: "AirPods Style",
      price: "10,00 €",
      image: airpodsImage,
      description: "Accessoires en édition limitée",
      isLimitedEdition: true
    },
    {
      name: "Short Collection",
      price: "12,00 €",
      image: shortsImage,
      description: "Collection qui change régulièrement"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Preview */}
      <section id="produits" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl lg:text-5xl mb-6">
              Nos <span className="text-primary">Pièces</span> Phares
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection de pièces streetwear inspirées des plus grandes maisons de mode
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/produits'}
              className="font-inter text-lg text-primary hover:text-primary/80 transition-colors duration-300 relative group"
            >
              Voir toute la collection
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-8">
            L'élégance <span className="text-primary">n'a pas besoin</span> d'un prix élevé
          </h2>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
            BLV SAPP, c'est la rencontre entre le luxe et la rue. On sélectionne pour toi des pièces stylées, 
            accessibles et toujours tendances. Juste du bon goût.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">✓</span>
              </div>
              <p className="font-inter text-sm font-medium">Sélection limitée</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">⚡</span>
              </div>
              <p className="font-inter text-sm font-medium">Livraison rapide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">💬</span>
              </div>
              <p className="font-inter text-sm font-medium">Communication directe</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">€</span>
              </div>
              <p className="font-inter text-sm font-medium">Prix mini, style maxi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;