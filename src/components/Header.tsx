import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background shadow-lg fixed w-full top-0 z-50 border-b border-border">
      {/* Top bar with contact info - Hidden on mobile */}
      <div className="border-b border-border/50 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">(11) 3456-7890</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">contato@rdodonto.com.br</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl text-primary cursor-pointer" onClick={() => scrollToSection('home')}>
              RD ODONTOLOGIA
            </h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">
              Equipe
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left text-foreground hover:text-primary transition-colors">
                Equipe
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                Contato
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-4">
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}