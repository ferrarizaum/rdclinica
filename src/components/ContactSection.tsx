import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em uma aplicação real, aqui seria enviado para o backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4" style={{fontFamily: 'Lora, serif'}}>
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Agende sua consulta ou tire suas dúvidas. Estamos prontos para cuidar do seu sorriso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 text-center lg:text-left">Informações de Contato</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 bg-card p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 text-sm sm:text-base">Telefone</h4>
                    <p className="text-muted-foreground text-sm">(11) 3456-7890</p>
                    <p className="text-muted-foreground text-sm">(11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 bg-card p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 text-sm sm:text-base">E-mail</h4>
                    <p className="text-muted-foreground text-sm">contato@rdodonto.com.br</p>
                    <p className="text-muted-foreground text-sm">agendamento@rdodonto.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 bg-card p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-sm">Rua das Flores, 123 - Sala 45</p>
                    <p className="text-muted-foreground text-sm">Vila Madalena, São Paulo - SP</p>
                    <p className="text-muted-foreground text-sm">CEP: 05426-010</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 bg-card p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 text-sm sm:text-base">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground text-sm">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground text-sm">Sábado: 8h às 14h</p>
                    <p className="text-muted-foreground text-sm">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards de Ação Rápida */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border border-primary/30 hover:border-primary/50 transition-colors cursor-pointer bg-card shadow-sm">
                <CardHeader className="pb-3 p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">Converse conosco diretamente</p>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-primary/30 hover:border-primary/50 transition-colors cursor-pointer bg-card shadow-sm">
                <CardHeader className="pb-3 p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">Agendamento Online</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">Agende sua consulta agora</p>
                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-sm border border-border bg-card">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-foreground">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-foreground">Nome completo *</label>
                      <Input
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-input-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-foreground">Telefone *</label>
                      <Input
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="bg-input-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-foreground">E-mail *</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-foreground">Serviço de interesse</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-input-background border-border">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">Consulta de avaliação</SelectItem>
                        <SelectItem value="implante">Implante dentário</SelectItem>
                        <SelectItem value="ortodontia">Ortodontia</SelectItem>
                        <SelectItem value="clareamento">Clareamento dental</SelectItem>
                        <SelectItem value="harmonizacao">Harmonização orofacial</SelectItem>
                        <SelectItem value="periodontia">Tratamento de gengiva</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-foreground">Mensagem</label>
                    <Textarea
                      placeholder="Conte-nos como podemos ajudar..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-input-background border-border"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}