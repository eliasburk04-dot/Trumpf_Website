import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";

const subjects = [
  "Produktberatung",
  "Angebot anfragen",
  "Wartung & Service",
  "Reparatur",
  "Aktionen",
  "Sonstiges",
];

interface ContactSectionProps {
  id?: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        title: "Datenschutz",
        description: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        variant: "destructive",
      });
      return;
    }
    // todo: remove mock functionality
    console.log("Form submitted:", formData);
    toast({
      title: "Anfrage gesendet",
      description: "Wir melden uns werktags innerhalb von 24 Stunden bei Ihnen.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
  };

  return (
    <section id={id} className="py-20 lg:py-32 bg-background" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4" data-testid="text-contact-title">
            Kontakt & Beratung
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Wir melden uns werktags innerhalb von 24 Stunden. Unser Expertenteam berät Sie gerne 
            zu allen Fragen rund um TRUMPF TruTool Werkzeuge.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="p-6 lg:p-8" data-testid="card-contact-form">
              <h3 className="font-semibold text-xl mb-2">Ihre Anfrage</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input
                      id="company"
                      placeholder="Firma (optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+49 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Betreff</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger data-testid="select-subject">
                      <SelectValue placeholder="Wählen Sie ein Thema" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ihr Anliegen *</Label>
                  <Textarea
                    id="message"
                    placeholder="Wie können wir Ihnen helfen?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="input-message"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacy: checked as boolean })
                    }
                    data-testid="checkbox-privacy"
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu.
                  </Label>
                </div>

                <Button type="submit" className="w-full" data-testid="button-submit">
                  Anfrage absenden
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 lg:p-8 bg-primary text-primary-foreground h-full">
              <h3 className="font-semibold text-xl mb-6">Direkter Kontakt</h3>
              <p className="text-primary-foreground/80 mb-8">
                Unser Expertenteam berät Sie gerne bei der Auswahl des richtigen TruTool Werkzeugs.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-primary-foreground/60 mb-1">Telefon</div>
                  <a
                    href="tel:+497141921912"
                    className="text-xl font-bold hover:underline"
                    data-testid="link-phone"
                  >
                    +49 (0) 7141 921 912
                  </a>
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 mb-1">E-Mail</div>
                  <a
                    href="mailto:burk-trutools@web.de"
                    className="text-lg hover:underline"
                    data-testid="link-email"
                  >
                    burk-trutools@web.de
                  </a>
                </div>
                <div className="pt-4 border-t border-primary-foreground/20">
                  <div className="font-semibold mb-2">Thomas Burk GmbH</div>
                  <div className="text-sm text-primary-foreground/80">
                    Friedrich-Naumann-Str. 11<br />
                    71636 Ludwigsburg
                  </div>
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 mb-1">Öffnungszeiten</div>
                  <div className="text-sm">Mo–Fr: 7:00–17:00 Uhr</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary-foreground/10 rounded-md border-l-2 border-primary-foreground/50">
                <div className="text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Antwort innerhalb 24h (werktags)
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Kostenlose Erstberatung
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Individuelle Lösungen
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
