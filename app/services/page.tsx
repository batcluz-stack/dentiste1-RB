import { Container } from "@/components/ui/container";
import { Sparkles, Activity, ShieldCheck, HeartPulse } from "lucide-react"; // Examples

export default function ServicesPage() {
    const services = [
        {
            title: "Soins Conservateurs",
            description: "Traitement des caries, détartrage, et soins de routine pour préserver votre capital dentaire.",
            icon: ShieldCheck,
        },
        {
            title: "Esthétique Dentaire",
            description: "Blanchiment, facettes et alignement pour un sourire éclatant et harmonieux.",
            icon: Sparkles,
        },
        {
            title: "Implantologie",
            description: "Remplacement de dents manquantes par des implants titane de haute qualité.",
            icon: Activity,
        },
        {
            title: "Urgences",
            description: "Prise en charge rapide de vos douleurs et traumatismes dentaires.",
            icon: HeartPulse,
        },
    ];

    return (
        <div className="py-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-slate-900">Nos Services</h1>
                    <p className="text-lg text-muted-foreground">
                        Nous proposons une gamme complète de soins dentaires, du contrôle de routine aux interventions chirurgicales complexes, le tout avec un équipement de pointe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-muted-foreground">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
