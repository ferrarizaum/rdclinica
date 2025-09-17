import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dra. Ana Silva",
      specialty: "Cirurgiã-Dentista e Implantodontista",
      experience: "15 anos de experiência",
      description: "Especialista em implantes dentários e reabilitação oral completa.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU3OTczNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Ortodontista",
      experience: "12 anos de experiência",
      description: "Especialista em ortodontia convencional e alinhadores invisíveis.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU3OTczNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Dra. Marina Costa",
      specialty: "Estética Facial",
      experience: "8 anos de experiência",
      description: "Especialista em harmonização facial e procedimentos estéticos.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU3OTczNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Dr. Roberto Lima",
      specialty: "Periodontista",
      experience: "10 anos de experiência",
      description: "Especialista em tratamento de gengivas e cirurgias periodontais.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU3OTczNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4" style={{fontFamily: 'Lora, serif'}}>
            Nossa Equipe
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Profissionais altamente qualificados e experientes, comprometidos em oferecer o melhor atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow group bg-card">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-4 sm:p-6 space-y-3">
                  <h4 className="text-lg sm:text-xl text-foreground">{member.name}</h4>
                  <div className="space-y-1">
                    <p className="text-primary text-sm sm:text-base">{member.specialty}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{member.experience}</p>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-accent/30 rounded-xl p-6 sm:p-8 md:p-12 border border-primary/20">
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-foreground">
              Compromisso com a Excelência
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nossos profissionais participam regularmente de cursos de atualização e congressos nacionais e 
              internacionais, garantindo que você receba sempre os tratamentos mais modernos e eficazes disponíveis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="text-center bg-card p-4 rounded-lg shadow-sm">
                <div className="text-xl sm:text-2xl text-primary mb-2">CRO</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Todos registrados no Conselho Regional</div>
              </div>
              <div className="text-center bg-card p-4 rounded-lg shadow-sm">
                <div className="text-xl sm:text-2xl text-primary mb-2">Especialização</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Cursos de pós-graduação reconhecidos</div>
              </div>
              <div className="text-center bg-card p-4 rounded-lg shadow-sm">
                <div className="text-xl sm:text-2xl text-primary mb-2">Atualização</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Educação continuada constante</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}