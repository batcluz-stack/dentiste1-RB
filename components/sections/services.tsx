import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Stethoscope, Smile, ShieldCheck } from "lucide-react";
import { Implant } from "@/components/icons";

const services = [
    {
        title: "Dentisterie Générale",
        description: "Contrôles de routine, détartrages et soins préventifs pour toute la famille.",
        icon: Stethoscope,
    },
    {
        title: "Dentisterie Esthétique",
        description: "Blanchiment des dents, facettes et embellissement du sourire pour votre confiance.",
        icon: Smile,
    },
    {
        title: "Soins Restaurateurs",
        description: "Implants, couronnes et bridges pour restaurer la fonction et l'esthétique.",
        icon: Implant,
    },
    {
        title: "Urgences Dentaires",
        description: "Rendez-vous le jour même pour les besoins dentaires urgents et le soulagement de la douleur.",
        icon: ShieldCheck,
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
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <service.icon className="h-6 w-6 text-primary" />
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
