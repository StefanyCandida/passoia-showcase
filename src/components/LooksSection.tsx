import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import labios from "@/assets/labios.png";
import olhos from "@/assets/olhos.png";
import rosto from "@/assets/rosto.png";
import tendencia from "@/assets/tendencia.png";

interface Product {
  name: string;
  description: string;
  price: string;
}

const products: Record<string, Product> = {
  labios: {
    name: "Batom Matte Premium",
    description: "Batom de alta pigmentação com acabamento matte aveludado. Fórmula enriquecida com manteiga de manga para hidratação duradoura.",
    price: "R$ 49,90"
  },
  olhos: {
    name: "Paleta de Sombras Golden",
    description: "Paleta completa com tons dourados e terrosos para criar looks marcantes. Alta pigmentação e longa duração.",
    price: "R$ 89,90"
  },
  rosto: {
    name: "Base Skin Perfect",
    description: "Base de alta cobertura com acabamento natural. Fórmula leve que proporciona pele uniforme e radiante o dia todo.",
    price: "R$ 79,90"
  },
  tendencia: {
    name: "Kit Tendência Completo",
    description: "Kit completo com os produtos mais desejados da temporada. Inclui paleta, batom e iluminador.",
    price: "R$ 159,90"
  }
};

const LooksSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (productKey: string) => {
    setSelectedProduct(products[productKey]);
    setIsOpen(true);
  };

  return (
    <section id="looks" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">LOOKS E DICAS DE MAQUIAGEM</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div
            onClick={() => handleImageClick("labios")}
            className="card-hover rounded-lg overflow-hidden"
          >
            <img
              src={labios}
              alt="Lábios"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div
            onClick={() => handleImageClick("olhos")}
            className="card-hover rounded-lg overflow-hidden"
          >
            <img
              src={olhos}
              alt="Olhos"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div
            onClick={() => handleImageClick("rosto")}
            className="card-hover rounded-lg overflow-hidden"
          >
            <img
              src={rosto}
              alt="Rosto"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div
            onClick={() => handleImageClick("tendencia")}
            className="card-hover rounded-lg overflow-hidden"
          >
            <img
              src={tendencia}
              alt="Tendência"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {selectedProduct?.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-3xl font-bold text-primary">
                {selectedProduct?.price}
              </span>
              <button className="btn-beauty">
                Comprar
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LooksSection;
