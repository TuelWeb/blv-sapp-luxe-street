import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Instagram } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  isLimitedEdition?: boolean;
}

const ProductCard = ({ name, price, image, description, isLimitedEdition }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander ${name} à ${price}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/blvsapp', '_blank');
  };

  return (
    <Card className="group bg-white border-2 border-transparent hover:border-primary transition-all duration-500 hover:shadow-xl overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Limited Edition Badge */}
        {isLimitedEdition && (
          <Badge 
            className="absolute top-4 right-4 bg-destructive text-white font-inter text-xs"
          >
            Édition limitée
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {/* Product Name */}
          <h3 className="font-playfair font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>

          {/* Price */}
          <p className="font-inter text-2xl font-bold text-primary">
            {price}
          </p>

          {/* Description */}
          <p className="font-inter text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-primary text-black hover:bg-primary/90 font-inter font-medium transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Commander maintenant
            </Button>
            
            <Button 
              onClick={handleInstagramClick}
              variant="outline"
              size="sm"
              className="w-full border-primary text-primary hover:bg-primary hover:text-black font-inter transition-all duration-300"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Voir sur Instagram
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;