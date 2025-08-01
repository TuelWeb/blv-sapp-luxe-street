import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import capImage from "@/assets/cap-product.jpg";
import airpodsImage from "@/assets/airpods-product.jpg";
import shortsImage from "@/assets/shorts-product.jpg";
import sunglassesImage from "@/assets/sunglasses-product.jpg";
import jerseyImage from "@/assets/jersey-product.jpg";

const Products = () => {
  const products = [
    {
      name: "Casquette Premium",
      price: "9,99 €",
      image: capImage,
      description: "Style type Gucci/Fendi avec finitions luxueuses en noir et doré. Matériaux premium pour un confort optimal.",
      isLimitedEdition: true
    },
    {
      name: "AirPods Style",
      price: "10,00 €",
      image: airpodsImage,
      description: "Accessoires audio présentés comme une édition limitée. Design épuré avec accents dorés.",
      isLimitedEdition: true
    },
    {
      name: "Short Collection",
      price: "12,00 €",
      image: shortsImage,
      description: "Collection sport/lifestyle qui change régulièrement. Coupe moderne et matériaux respirants.",
    },
    {
      name: "Lunettes Luxe",
      price: "7,00 €",
      image: sunglassesImage,
      description: "Lunettes style luxe noir & or. Protection UV maximale avec un design intemporel et élégant.",
    },
    {
      name: "Maillot de Foot",
      price: "15,00 €",
      image: jerseyImage,
      description: "Collection été 2025 – stock limité. Matériaux techniques pour le sport et le style urbain.",
      isLimitedEdition: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge 
            variant="outline" 
            className="bg-primary/20 border-primary text-primary font-inter text-sm px-4 py-2 mb-8"
          >
            Collection Complète
          </Badge>
          
          <h1 className="font-playfair font-bold text-5xl lg:text-6xl mb-8">
            Notre <span className="text-primary">Catalogue</span>
          </h1>
          
          <p className="font-inter text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Découvrez toute notre sélection de pièces streetwear inspirées des plus grandes maisons de mode. 
            Chaque produit est une invitation à exprimer votre style unique.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl">
              Pourquoi choisir <span className="text-primary">BLV SAPP</span> ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-3">Sélection exclusive</h3>
                <p className="font-inter text-muted-foreground">
                  Chaque pièce est choisie pour son caractère unique et sa qualité exceptionnelle.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-3">Prix accessibles</h3>
                <p className="font-inter text-muted-foreground">
                  Le luxe n'a jamais été aussi abordable. Style premium, budget maîtrisé.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-3">Service express</h3>
                <p className="font-inter text-muted-foreground">
                  Commande facile par WhatsApp et livraison rapide partout en France.
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <p className="font-inter text-lg text-muted-foreground mb-6">
                Tous nos produits sont disponibles en stock limité. Pour toute question sur les tailles, 
                couleurs ou disponibilité, n'hésite pas à nous contacter directement.
              </p>
              
              <button 
                onClick={() => window.location.href = '/commander'}
                className="bg-primary text-black hover:bg-primary/90 font-inter font-medium px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                Commander maintenant
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;