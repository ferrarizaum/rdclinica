import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl text-primary">RD Odontologia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Há mais de 15 anos cuidando do seu sorriso com excelência, tecnologia e carinho.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Youtube className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-muted-foreground hover:text-primary transition-colors">
                  Nossa Equipe
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-lg text-foreground">Nossos Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Implantes Dentários</li>
              <li>Ortodontia</li>
              <li>Clareamento Dental</li>
              <li>Harmonização Orofacial</li>
              <li>Periodontia</li>
              <li>Reabilitação Oral</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contato@rdodonto.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <div>Rua das Flores, 123 - Sala 45</div>
                  <div>Vila Madalena, São Paulo - SP</div>
                  <div>CEP: 05426-010</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-muted-foreground text-sm">
              © 2024 RD Odontologia e Harmonização Orofacial. Todos os direitos reservados.
            </div>
            <div className="text-muted-foreground text-sm md:text-right">
              <span>CRO-SP: 12345 | CNPJ: 12.345.678/0001-90</span>
            </div>
          </div>
        </div>
      </div>

      {/* Informações importantes */}
      {/* <div className="bg-background py-4 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs text-muted-foreground">
            <p>
              Este site não coleta dados pessoais sensíveis. Para agendamentos e informações, entre em contato pelos canais oficiais.
            </p>
          </div>
        </div>
      </div> */}
    </footer>
  );
}