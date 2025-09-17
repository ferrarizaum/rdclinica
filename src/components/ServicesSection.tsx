import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Smile, Sparkles, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ServicesSection() {
  const dentalServices = [
    {
      title: "Implantes Dentários",
      description: "Substituição de dentes perdidos com implantes de titânio de alta qualidade",
      icon: <Smile className="h-6 w-6" />
    },
    {
      title: "Ortodontia",
      description: "Aparelhos fixos e invisíveis para alinhamento perfeito dos dentes",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Clareamento",
      description: "Tratamentos de clareamento dental para um sorriso mais branco",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Periodontia",
      description: "Tratamento de gengivas e prevenção de doenças periodontais",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const aestheticServices = [
    {
      title: "Botox",
      description: "Aplicação de toxina botulínica para redução de rugas e linhas de expressão",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Preenchimento",
      description: "Preenchimento com ácido hialurônico para harmonização facial",
      icon: <Smile className="h-6 w-6" />
    },
    {
      title: "Limpeza de Pele",
      description: "Tratamentos faciais para limpeza profunda e rejuvenescimento",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Peeling",
      description: "Peelings químicos para renovação e melhoria da textura da pele",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos e estéticos para cuidar da sua saúde e beleza
          </p>
        </div>

        {/* Serviços Odontológicos */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
            <div>
              <h3 className="text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 text-center lg:text-left">Odontologia</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {dentalServices.map((service, index) => (
                  <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow bg-card">
                    <CardHeader className="pb-3 p-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                        <div className="text-primary">{service.icon}</div>
                      </div>
                      <CardTitle className="text-base sm:text-lg text-foreground">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-muted-foreground text-sm">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg order-first lg:order-none">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzU3OTI3OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipamentos dentários modernos"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Serviços Estéticos */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 text-center lg:text-left">Harmonização Orofacial</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {aestheticServices.map((service, index) => (
                  <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow bg-card">
                    <CardHeader className="pb-3 p-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                        <div className="text-primary">{service.icon}</div>
                      </div>
                      <CardTitle className="text-base sm:text-lg text-foreground">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-muted-foreground text-sm">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588581282844-4c6eea7bd3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjB0cmVhdG1lbnQlMjBmYWNlfGVufDF8fHx8MTc1Nzk3MzQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tratamento estético facial"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}