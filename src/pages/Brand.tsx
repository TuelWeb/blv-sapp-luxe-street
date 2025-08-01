import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Brand = () => {
  const values = [
    {
      icon: "✨",
      title: "Sélection limitée",
      description: "Chaque pièce est soigneusement choisie pour son style unique et sa qualité exceptionnelle."
    },
    {
      icon: "🚀",
      title: "Livraison rapide",
      description: "Expédition express pour que tu puisses porter tes nouvelles pièces au plus vite."
    },
    {
      icon: "💬",
      title: "Communication directe",
      description: "Achat via WhatsApp ou Instagram pour un service personnalisé et humain."
    },
    {
      icon: "💎",
      title: "Prix mini, style maxi",
      description: "Le luxe accessible à tous, sans compromis sur la qualité ni le design."
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
            Notre Histoire
          </Badge>
          
          <h1 className="font-playfair font-bold text-5xl lg:text-6xl mb-8">
            <span className="text-primary">BLV SAPP</span>, l'élégance urbaine
          </h1>
          
          <p className="font-inter text-xl text-muted-foreground leading-relaxed">
            La rencontre entre le luxe et la rue
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair font-bold text-4xl mb-8">
                Notre <span className="text-primary">Mission</span>
              </h2>
              <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">BLV SAPP</strong>, c'est la rencontre entre le luxe et la rue. 
                  On sélectionne pour toi des pièces stylées, accessibles et toujours tendances.
                </p>
                <p>
                  L'élégance n'a pas besoin d'un prix élevé, juste du bon goût. Notre vision est simple : 
                  rendre le streetwear de luxe accessible à tous, sans compromis sur la qualité.
                </p>
                <p>
                  Chaque pièce de notre collection est pensée pour te faire briller, que ce soit dans la rue, 
                  au travail ou lors de tes sorties. Le style, c'est une attitude, pas un prix.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👑</div>
                  <h3 className="font-playfair font-bold text-2xl mb-2">Le streetwear</h3>
                  <p className="font-inter text-lg text-primary font-medium">qui te fait briller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl lg:text-5xl mb-6">
              Nos <span className="text-primary">Valeurs</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce qui nous guide dans chaque décision et chaque nouvelle collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="bg-white border-2 border-transparent hover:border-primary transition-all duration-500 hover:shadow-xl group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="font-inter text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-6">
            Prêt à découvrir notre <span className="text-primary">univers</span> ?
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8">
            Explore notre collection et trouve les pièces qui correspondent à ton style unique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/produits'}
              className="bg-primary text-black hover:bg-primary/90 font-inter font-medium px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
            >
              Découvrir la collection
            </button>
            <button 
              onClick={() => window.location.href = '/commander'}
              className="border border-primary text-primary hover:bg-primary hover:text-black font-inter font-medium px-8 py-4 rounded-md transition-all duration-300"
            >
              Commander maintenant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;