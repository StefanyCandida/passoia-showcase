import { useState } from "react";
import aberto from "@/assets/aberto.png";
import fechado from "@/assets/fechado.png";
import batom from "@/assets/batom.png";
import cinzaBoca from "@/assets/cinza-boca.png";
import bordoBoca from "@/assets/bordo-boca.png";
import nudeBoca from "@/assets/nude-boca.png";
import vermelhoBoca from "@/assets/vermelho-boca.png";
import estrelas from "@/assets/estrelas.png";
import cinzaColor from "@/assets/cinza-color.png";
import vermelhoColor from "@/assets/vermelho-color.png";
import bordoColor from "@/assets/bordo-color.png";
import nudeColor from "@/assets/nude-color.png";

const LancamentosSection = () => {
  const [mainImage, setMainImage] = useState(cinzaBoca);

  const colorMap: Record<string, string> = {
    cinza: cinzaBoca,
    vermelho: vermelhoBoca,
    bordo: bordoBoca,
    nude: nudeBoca,
  };

  const handleColorClick = (color: string) => {
    setMainImage(colorMap[color]);
  };

  return (
    <section id="lancamentos" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">APROVEITE OS LANÇAMENTOS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* First Column - Hidden on mobile */}
          <div className="hidden md:flex flex-col gap-4">
            <img
              src={aberto}
              alt="Batom Aberto"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src={fechado}
              alt="Batom Fechado"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src={batom}
              alt="Batom"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Second Column - Main Image */}
          <div className="flex items-center justify-center">
            <img
              src={mainImage}
              alt="Batom Principal"
              className="w-full max-w-md rounded-lg shadow-xl transition-all duration-500"
            />
          </div>

          {/* Third Column - Details */}
          <div className="space-y-6">
            <img
              src={estrelas}
              alt="5 Estrelas"
              className="h-8 w-auto"
            />
            
            <h3 className="text-2xl font-serif font-bold">Matte Premium</h3>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Cores disponíveis</h4>
              
              <div className="flex gap-3">
                <button
                  onClick={() => handleColorClick("cinza")}
                  className="transition-transform hover:scale-110"
                  aria-label="Cor Cinza"
                >
                  <img
                    src={cinzaColor}
                    alt="Cinza"
                    className="w-12 h-12 rounded-full border-2 border-border hover:border-primary"
                  />
                </button>
                
                <button
                  onClick={() => handleColorClick("vermelho")}
                  className="transition-transform hover:scale-110"
                  aria-label="Cor Vermelha"
                >
                  <img
                    src={vermelhoColor}
                    alt="Vermelho"
                    className="w-12 h-12 rounded-full border-2 border-border hover:border-primary"
                  />
                </button>
                
                <button
                  onClick={() => handleColorClick("bordo")}
                  className="transition-transform hover:scale-110"
                  aria-label="Cor Bordô"
                >
                  <img
                    src={bordoColor}
                    alt="Bordô"
                    className="w-12 h-12 rounded-full border-2 border-border hover:border-primary"
                  />
                </button>
                
                <button
                  onClick={() => handleColorClick("nude")}
                  className="transition-transform hover:scale-110"
                  aria-label="Cor Nude"
                >
                  <img
                    src={nudeColor}
                    alt="Nude"
                    className="w-12 h-12 rounded-full border-2 border-border hover:border-primary"
                  />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Descrição</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
              </p>
            </div>

            <button className="btn-beauty w-full md:w-auto">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LancamentosSection;
