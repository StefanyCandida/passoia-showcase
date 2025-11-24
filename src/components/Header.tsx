import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/passoia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Passoia" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("looks")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Look
          </button>
          <button
            onClick={() => scrollToSection("lancamentos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Lançamentos
          </button>
          <button
            onClick={() => scrollToSection("novidades")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Novidades
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <button
              onClick={() => scrollToSection("looks")}
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            >
              Look
            </button>
            <button
              onClick={() => scrollToSection("lancamentos")}
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            >
              Lançamentos
            </button>
            <button
              onClick={() => scrollToSection("novidades")}
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            >
              Novidades
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
