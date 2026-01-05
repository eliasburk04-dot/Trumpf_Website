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
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Datenschutz",
        description: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "✅ Anfrage gesendet!",
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
      } else {
        throw new Error(data.error || "Unbekannter Fehler");
      }
    } catch (error) {
      console.error("Kontaktformular Fehler:", error);
      toast({
        title: "Fehler beim Senden",
        description: error instanceof Error ? error.message : "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="section bg-slate-50 dark:bg-slate-950" data-testid="section-contact">
      <div className="container mx-auto px-4">
        <div className="section-header section-header-center">
          <span className="section-label">Kontakt</span>
          <h2 className="section-title" data-testid="text-contact-title">
            Starten Sie Ihr Projekt
          </h2>
          <p className="section-subtitle" data-testid="text-contact-subtitle">
            Wir melden uns werktags innerhalb von 24 Stunden. Unser Expertenteam berät Sie gerne 
            zu allen Fragen rund um TRUMPF TruTool Werkzeuge.
          </p>
        </div>

        <div className="split-layout">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg" data-testid="card-contact-form">
              <h3 className="font-bold text-xl mb-2">Ihre Anfrage</h3>
              <p className="text-muted-foreground mb-6">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich.
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
                      className="rounded-xl h-12"
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
                      className="rounded-xl h-12"
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
                      className="rounded-xl h-12"
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
                      className="rounded-xl h-12"
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
                    <SelectTrigger className="rounded-xl h-12" data-testid="select-subject">
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
                    className="rounded-xl"
                    data-testid="input-message"
                  />
                </div>

                <div className="flex items-start gap-3">
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

                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-full text-lg" 
                  data-testid="button-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Anfrage absenden"
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-primary text-primary-foreground rounded-2xl h-full">
              <h3 className="font-bold text-xl mb-6">Direkter Kontakt</h3>
              <p className="text-primary-foreground/80 mb-8">
                Unser Expertenteam berät Sie gerne bei der Auswahl des richtigen TruTool Werkzeugs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">Telefon</div>
                    <a
                      href="tel:+497141921912"
                      className="text-xl font-bold hover:underline"
                      data-testid="link-phone"
                    >
                      +49 7141 921 912
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
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
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Thomas Burk GmbH</div>
                    <div className="text-sm text-primary-foreground/80">
                      Friedrich-Naumann-Str. 11<br />
                      71636 Ludwigsburg
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">Öffnungszeiten</div>
                    <div className="text-sm">Mo–Fr: 7:00–17:00 Uhr</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-white/10 rounded-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>Antwort innerhalb 24h (werktags)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>Kostenlose Erstberatung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>Individuelle Lösungen</span>
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
