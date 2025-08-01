import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Instagram, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    article: "",
    size: "",
    city: "",
    message: ""
  });
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite commander un article BLV SAPP !");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/blvsapp', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Bonjour, je souhaite commander :\n\nNom: ${formData.name}\nArticle: ${formData.article}\nTaille: ${formData.size}\nVille: ${formData.city}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Redirection vers WhatsApp",
      description: "Votre demande a été préparée et vous êtes redirigé vers WhatsApp.",
    });
  };

  const advantages = [
    "✅ Confirmation immédiate de disponibilité",
    "✅ Paiement sécurisé et simple",
    "✅ Livraison express partout en France",
    "✅ Service client personnalisé",
    "✅ Échange facile en cas de problème"
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
            Commande Simple & Rapide
          </Badge>
          
          <h1 className="font-playfair font-bold text-5xl lg:text-6xl mb-8">
            <span className="text-primary">Commander</span> chez BLV SAPP
          </h1>
          
          <p className="font-inter text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Tu veux commander un article ? Clique sur le bouton ci-dessous pour nous écrire directement ! 
            On te confirme la dispo, et on t'envoie tout par message. Paiement simple et rapide.
          </p>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-12">
              <h2 className="font-playfair font-bold text-3xl mb-6">
                Méthode de commande <span className="text-primary">préférée</span>
              </h2>
              
              <Button 
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-inter font-medium px-12 py-6 text-xl transition-all duration-300 hover:scale-105 shadow-lg mb-8"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                🟢 Commander via WhatsApp
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-left space-y-3">
                  {advantages.slice(0, 3).map((advantage, index) => (
                    <p key={index} className="font-inter text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      {advantage.substring(2)}
                    </p>
                  ))}
                </div>
                <div className="text-left space-y-3">
                  {advantages.slice(3).map((advantage, index) => (
                    <p key={index} className="font-inter text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      {advantage.substring(2)}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-6">
              Autres moyens de <span className="text-primary">contact</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Choisis la méthode qui te convient le mieux pour nous contacter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instagram Card */}
            <Card className="bg-white border-2 border-transparent hover:border-primary transition-all duration-500 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <Instagram className="h-12 w-12 text-[#E4405F] mx-auto mb-4" />
                <CardTitle className="font-playfair text-xl">Instagram Direct</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-inter text-muted-foreground mb-6">
                  Envoie-nous un message privé sur Instagram pour commander ou poser tes questions.
                </p>
                <Button 
                  onClick={handleInstagramClick}
                  className="bg-[#E4405F] hover:bg-[#C13584] text-white font-inter font-medium w-full"
                >
                  Contacter sur Instagram
                </Button>
              </CardContent>
            </Card>

            {/* Form Card */}
            <Card className="bg-white border-2 border-transparent hover:border-primary transition-all duration-500 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-playfair text-xl">Formulaire de commande</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-inter">Nom complet</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="article" className="font-inter">Article souhaité</Label>
                    <Select onValueChange={(value) => setFormData({...formData, article: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choisir un article" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casquette">Casquette Premium - 9,99€</SelectItem>
                        <SelectItem value="airpods">AirPods Style - 10,00€</SelectItem>
                        <SelectItem value="short">Short Collection - 12,00€</SelectItem>
                        <SelectItem value="lunettes">Lunettes Luxe - 7,00€</SelectItem>
                        <SelectItem value="maillot">Maillot de Foot - 15,00€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="size" className="font-inter">Taille</Label>
                    <Input 
                      id="size"
                      value={formData.size}
                      onChange={(e) => setFormData({...formData, size: e.target.value})}
                      placeholder="Ex: M, L, XL..."
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city" className="font-inter">Ville</Label>
                    <Input 
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Pour calculer les frais de livraison"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="font-inter">Message (optionnel)</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Questions, demandes spéciales..."
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-inter font-medium">
                    Envoyer ma commande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl mb-8">
            Comment ça <span className="text-primary">fonctionne</span> ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                1
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3">Tu nous contactes</h3>
              <p className="font-inter text-muted-foreground">
                Via WhatsApp, Instagram ou le formulaire avec ton choix d'article.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                2
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3">On confirme</h3>
              <p className="font-inter text-muted-foreground">
                Disponibilité, taille, prix final avec livraison dans ta ville.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-3">Tu reçois</h3>
              <p className="font-inter text-muted-foreground">
                Paiement simple et livraison express. Ton style t'attend !
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="font-inter text-sm text-muted-foreground">
              <strong>Note importante :</strong> Ce site est une vitrine. Tous les achats se font par message direct 
              pour un service personnalisé et une expérience d'achat optimale.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;