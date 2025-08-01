import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Instagram, Mail, MapPin, Clock, Shield } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, j'aimerais obtenir des informations sur BLV SAPP !");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/blvsapp', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Moyen le plus rapide pour commander et obtenir des réponses immédiates",
      action: "Écrire sur WhatsApp",
      onClick: handleWhatsAppClick,
      color: "bg-[#25D366] hover:bg-[#20BA5A]"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Suis-nous pour les nouveautés et contacte-nous en message privé",
      action: "Suivre @blvsapp",
      onClick: handleInstagramClick,
      color: "bg-[#E4405F] hover:bg-[#C13584]"
    }
  ];

  const businessInfo = [
    {
      icon: MapPin,
      title: "Zone de livraison",
      value: "France métropolitaine"
    },
    {
      icon: Clock,
      title: "Délai de réponse",
      value: "Sous 2h en moyenne"
    },
    {
      icon: Shield,
      title: "Paiement",
      value: "Sécurisé via message"
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
            Restons en Contact
          </Badge>
          
          <h1 className="font-playfair font-bold text-5xl lg:text-6xl mb-8">
            <span className="text-primary">Contacte</span> BLV SAPP
          </h1>
          
          <p className="font-inter text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Une question ? Besoin d'infos sur un produit ? On est là pour toi ! 
            Contacte-nous directement pour un service personnalisé et rapide.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-6">
              Nos moyens de <span className="text-primary">communication</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Choisis le canal qui te convient le mieux pour nous parler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="bg-white border-2 border-transparent hover:border-primary transition-all duration-500 hover:shadow-xl group"
              >
                <CardHeader className="text-center pb-4">
                  <method.icon className="h-16 w-16 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-playfair text-2xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  <Button 
                    onClick={method.onClick}
                    className={`${method.color} text-white font-inter font-medium w-full transition-all duration-300 hover:scale-105`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-6">
              Informations <span className="text-primary">pratiques</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Tout ce que tu dois savoir sur nos services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="bg-white border-2 border-transparent hover:border-primary transition-all duration-500 text-center group"
              >
                <CardContent className="p-8">
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-playfair font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="font-inter text-muted-foreground text-lg">
                    {info.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-6">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Les réponses aux questions les plus posées
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">
                  Comment passer commande ?
                </h3>
                <p className="font-inter text-muted-foreground">
                  Tu peux nous contacter via WhatsApp ou Instagram. Dis-nous quel article t'intéresse, 
                  ta taille et ta ville pour calculer la livraison. On te confirme tout en quelques minutes !
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">
                  Quels sont les délais de livraison ?
                </h3>
                <p className="font-inter text-muted-foreground">
                  Livraison express partout en France. Généralement 2-3 jours ouvrés selon ta localisation. 
                  On te donne le délai exact lors de ta commande.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">
                  Comment se passe le paiement ?
                </h3>
                <p className="font-inter text-muted-foreground">
                  Paiement sécurisé via les moyens classiques (virement, PayPal, etc.). 
                  On t'explique tout en message privé selon tes préférences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">
                  Puis-je échanger si la taille ne convient pas ?
                </h3>
                <p className="font-inter text-muted-foreground">
                  Bien sûr ! Si l'article ne te va pas, on organise un échange rapidement. 
                  Service client personnalisé, c'est notre engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white/50">
            <CardContent className="p-6">
              <h3 className="font-playfair font-semibold text-lg mb-3">
                Mentions légales
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Ce site est une vitrine de présentation. Tous les achats se font par message direct 
                pour garantir un service personnalisé et sécurisé. BLV SAPP s'engage à protéger 
                vos données personnelles et à respecter la réglementation en vigueur.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;