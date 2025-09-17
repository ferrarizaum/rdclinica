import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Award, Heart, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-foreground" style={{fontFamily: 'Lora, serif'}}>
                Sobre a RD Clinica
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Há mais de 15 anos, a RD Odontologia e Harmonização Orofacial tem sido referência em odontologia e estética facial em São Paulo. Nossa missão é proporcionar tratamentos de excelência com foco no bem-estar e satisfação dos nossos pacientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Combinamos tradição e inovação, utilizando as mais modernas tecnologias e técnicas para garantir resultados excepcionais em todos os nossos procedimentos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 bg-card p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="text-foreground text-sm sm:text-base">Segurança</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Protocolos rigorosos de biossegurança</p>
              </div>

              <div className="space-y-3 bg-card p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="text-foreground text-sm sm:text-base">Excelência</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Profissionais especializados</p>
              </div>

              <div className="space-y-3 bg-card p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="text-foreground text-sm sm:text-base">Cuidado</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Atendimento personalizado</p>
              </div>

              <div className="space-y-3 bg-card p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="text-foreground text-sm sm:text-base">Confiança</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Milhares de pacientes satisfeitos</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU3OTczNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profissional da clínica"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            <div className="bg-accent/50 rounded-xl p-4 sm:p-6 border border-primary/20">
              <h4 className="text-base sm:text-lg text-foreground mb-3">Nossa Filosofia</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                "Acreditamos que cada sorriso é único e merece um cuidado especial. Por isso, desenvolvemos planos de tratamento personalizados que respeitam a individualidade de cada paciente."
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/30 rounded-full"></div>
                <div>
                  <div className="text-sm text-foreground">Dr. Rafael Diniz</div>
                  <div className="text-xs text-muted-foreground">Diretor Clínico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}