import mastercard from "@/assets/mastercard.png";
import visa from "@/assets/visa.png";
import pix from "@/assets/pix.png";
import boleto from "@/assets/boleto.png";
import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook-passoia.png";
import youtube from "@/assets/youtube.png";
import linkedin from "@/assets/linkedin-passoia.png";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Atendimentos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase">Atendimentos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-4">
              <img src={mastercard} alt="Mastercard" className="h-10 w-auto" />
              <img src={visa} alt="Visa" className="h-10 w-auto" />
              <img src={pix} alt="PIX" className="h-10 w-auto" />
              <img src={boleto} alt="Boleto" className="h-10 w-auto" />
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase">Siga-nos nas Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="h-10 w-auto" />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <img src={facebook} alt="Facebook" className="h-10 w-auto" />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-110"
                aria-label="YouTube"
              >
                <img src={youtube} alt="YouTube" className="h-10 w-auto" />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" className="h-10 w-auto" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Passoia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
