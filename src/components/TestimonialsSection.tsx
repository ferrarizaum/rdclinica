import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      age: "35 anos",
      treatment: "Implante Dentário",
      image: "https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3NTc5NzM0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      testimonial: "A equipe me tranquilizou em todos os momentos. O resultado ficou perfeito e agora posso sorrir com confiança novamente!",
      rating: 5
    },
    {
      name: "João Silva",
      age: "42 anos", 
      treatment: "Ortodontia Invisível",
      image: "https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3NTc5NzM0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      testimonial: "O tratamento com alinhadores foi muito prático. O resultado ficou excelente. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      treatment: "Harmonização Facial",
      image: "https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3NTc5NzM0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      testimonial: "A Dra. Marina é incrível! O resultado da harmonização ficou muito natural. Me sinto mais confiante agora.",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4" style={{fontFamily: 'Lora, serif'}}>
            O que nossos pacientes dizem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais de 5.000 pacientes confiaram em nosso trabalho. Veja alguns depoimentos reais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow bg-card">
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic text-sm sm:text-base">
                  "{testimonial.testimonial}"
                </p>

                <div className="flex items-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-border">
                  <div className="relative">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.age} • {testimonial.treatment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-12 sm:mt-16 bg-card rounded-xl p-6 sm:p-8 md:p-12 shadow-sm border border-border">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl text-primary">98%</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Taxa de satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl text-primary">5000+</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Pacientes atendidos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl text-primary">4.9</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Avaliação média</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl text-primary">95%</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Recomendariam</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}