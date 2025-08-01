import { MessageCircle, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, je découvre BLV SAPP !");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/blvsapp', '_blank');
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link 
              to="/" 
              className="font-playfair font-bold text-3xl bg-gradient-to-r from-primary to-white bg-clip-text text-transparent mb-4 block"
            >
              BLV SAPP
            </Link>
            <p className="font-inter text-white/80 mb-4 leading-relaxed">
              Le streetwear qui te fait briller. Pièces uniques, style luxe, prix mini. 
              La rencontre parfaite entre l'élégance et la rue.
            </p>
            <p className="font-inter text-sm text-white/60">
              Collection été 2025 • Stock limité • Livraison France
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", path: "/" },
                { name: "La Marque", path: "/marque" },
                { name: "Produits", path: "/produits" },
                { name: "Commander", path: "/commander" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="font-inter text-white/80 hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Nous suivre</h3>
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-white/80 hover:text-primary transition-colors duration-300 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter">WhatsApp</span>
              </button>
              
              <button 
                onClick={handleInstagramClick}
                className="flex items-center space-x-3 text-white/80 hover:text-primary transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-inter">@blvsapp</span>
              </button>
            </div>

            <div className="mt-6">
              <h4 className="font-inter font-medium text-sm mb-2">Notre collection</h4>
              <ul className="text-xs text-white/60 space-y-1">
                <li>• Casquettes Premium - 9,99€</li>
                <li>• AirPods Style - 10,00€</li>
                <li>• Shorts - 12,00€</li>
                <li>• Lunettes Luxe - 7,00€</li>
                <li>• Maillots - 15,00€</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-inter text-sm text-white/60">
                © 2025 BLV SAPP. Tous droits réservés.
              </p>
              <p className="font-inter text-xs text-white/40 mt-1">
                Site vitrine - Achats via message direct uniquement
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="font-inter text-xs text-white/40">Paiement sécurisé</span>
              <span className="font-inter text-xs text-white/40">Livraison express</span>
              <span className="font-inter text-xs text-white/40">Service client 24h</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;