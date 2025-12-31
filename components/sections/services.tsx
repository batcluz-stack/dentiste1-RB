import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Gem, ShieldCheck, Shield, AlertCircle } from "lucide-react";
import { Implant } from "@/components/icons";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Dentisterie Générale",
        description: "Contrôles de routine, détartrages et soins préventifs pour toute la famille.",
        icon: Shield,
    },
    {
        title: "Dentisterie Esthétique",
        description: "Blanchiment des dents, facettes et embellissement du sourire pour votre confiance.",
        icon: Gem,
    },
    {
        title: "Soins Restaurateurs",
        description: "Implants, couronnes et bridges pour restaurer la fonction et l'esthétique.",
        icon: Implant,
    },
    {
        title: "Urgences Dentaires",
        description: "Rendez-vous le jour même pour les besoins dentaires urgents et le soulagement de la douleur.",
        icon: AlertCircle,
        iconLabelClass: "text-red-600",
        bgClass: "bg-red-100/50"
    },
];

export function Services() {
    return (
        <section className="py-20" id="services">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Nos Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Des solutions dentaires complètes adaptées à vos besoins.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="border-0 shadow-lg bg-card/50 hover:bg-accent/50 transition-colors">
                            <CardHeader>
                                <div className={cn("w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4", service.bgClass)}>
                                    <service.icon className={cn("h-6 w-6 text-primary", service.iconLabelClass)} />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
