import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-secondary pt-20 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight" style={{fontFamily: 'Lora, serif'}}>
                Odontologia e <span className="text-primary">Harmonização Orofacial</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Oferecemos tratamentos odontológicos e estéticos de alta qualidade com uma equipe especializada e tecnologia de ponta.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center bg-card rounded-lg p-3 sm:p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl text-primary mb-1">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center bg-card rounded-lg p-3 sm:p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl text-primary mb-1">5000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Pacientes atendidos</div>
              </div>
              <div className="text-center bg-card rounded-lg p-3 sm:p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl text-primary mb-1">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToServices}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU3OTczNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clínica moderna"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card rounded-lg shadow-lg p-4 sm:p-6 max-w-xs border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm sm:text-base">✓</span>
                </div>
                <div>
                  <h4 className="text-sm text-foreground mb-1">Ambiente seguro</h4>
                  <p className="text-xs text-muted-foreground">Protocolos de biossegurança</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}