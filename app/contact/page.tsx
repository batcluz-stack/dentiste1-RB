import { Container } from "@/components/ui/container";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-primary">Contactez-nous</h1>
                    <p className="text-lg text-muted-foreground">
                        Une question ? Besoin d'un renseignement ? Nous sommes à votre écoute.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="bg-card p-6 text-center rounded-2xl shadow-sm border">
                        <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-4">Horaires</h3>
                        <div className="text-sm text-muted-foreground space-y-1 text-left inline-block w-full px-2">
                            <div className="flex justify-between"><span>Lundi</span> <span>9h-18h</span></div>
                            <div className="flex justify-between"><span>Mardi</span> <span>9h-18h</span></div>
                            <div className="flex justify-between"><span>Mercredi</span> <span>9h-18h</span></div>
                            <div className="flex justify-between"><span>Jeudi</span> <span>9h-18h</span></div>
                            <div className="flex justify-between"><span>Vendredi</span> <span>9h-18h</span></div>
                            <div className="flex justify-between"><span>Samedi</span> <span>10h-16h</span></div>
                            <div className="flex justify-between text-red-500"><span>Dimanche</span> <span>Fermé</span></div>
                        </div>
                    </div>

                    <div className="bg-card p-6 text-center rounded-2xl shadow-sm border">
                        <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                        <p className="text-muted-foreground">01 23 45 67 89</p>
                        <p className="text-sm text-muted-foreground mt-2">Réponse rapide</p>
                    </div>

                    <div className="bg-card p-6 text-center rounded-2xl shadow-sm border">
                        <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground text-sm break-all">bonjour@cabinetdentaire.com</p>
                        <p className="text-sm text-muted-foreground mt-2">Réponse sous 24h</p>
                    </div>

                    <div className="bg-card p-6 text-center rounded-2xl shadow-sm border">
                        <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                        <p className="text-muted-foreground">123 rue du Dentiste</p>
                        <p className="text-muted-foreground">75000 Paris</p>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-slate-100 w-full h-80 rounded-2xl flex items-center justify-center text-muted-foreground border">
                    Carte Google Maps interactive
                </div>
            </Container>
        </div>
    );
}
