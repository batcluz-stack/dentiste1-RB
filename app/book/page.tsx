import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea component exists, if not will use standard textarea or create one
import { Phone, MapPin, Clock, Calendar } from "lucide-react";

export default function BookingPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 font-serif text-primary">Prendre Rendez-vous</h1>
                        <p className="text-lg text-muted-foreground">
                            Nous sommes impatients de vous accueillir. Remplissez le formulaire ci-dessous ou appelez-nous directement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Coordonnées */}
                        <div className="space-y-8">
                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                    <Phone className="h-5 w-5 text-primary" /> Contact Rapide
                                </h3>
                                <p className="text-slate-700 mb-4 font-medium">
                                    Pour une urgence ou une réponse immédiate, privilégiez le téléphone.
                                </p>
                                <a href="tel:0123456789" className="text-2xl font-bold text-primary hover:underline block">
                                    01 23 45 67 89
                                </a>
                            </div>

                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" /> Horaires d'Ouverture
                                </h3>
                                <ul className="space-y-2 text-slate-700 font-medium">
                                    <li className="flex justify-between">
                                        <span>Lundi - Vendredi</span>
                                        <span className="font-bold text-foreground">9h00 - 18h00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Samedi</span>
                                        <span className="font-bold text-foreground">10h00 - 16h00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Dimanche</span>
                                        <span className="text-red-500 font-bold">Fermé</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" /> Nous Trouver
                                </h3>
                                <address className="not-italic text-slate-700 font-medium">
                                    123 rue du Dentiste<br />
                                    75000 Paris<br />
                                    <span className="text-sm mt-2 block opacity-80">Métro : Station "Sourire" (Ligne 1)</span>
                                </address>
                            </div>
                        </div>

                        {/* Formulaire */}
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/50 relative overflow-hidden">
                            <h3 className="text-2xl font-semibold mb-6">Demande de Rappel</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstname" className="text-sm font-medium">Prénom</label>
                                        <Input id="firstname" placeholder="Jean" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastname" className="text-sm font-medium">Nom</label>
                                        <Input id="lastname" placeholder="Dupont" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                                    <Input id="phone" type="tel" placeholder="06 12 34 56 78" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="jean.dupont@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="reason" className="text-sm font-medium">Motif du rendez-vous</label>
                                    <select id="reason" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="checkup">Consultation de routine</option>
                                        <option value="pain">Douleur / Urgence</option>
                                        <option value="aesthetic">Esthétique (Blanchiment, Facettes)</option>
                                        <option value="implant">Implant / Prothèse</option>
                                        <option value="other">Autre</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message (Optionnel)</label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Précisez votre demande..."
                                    />
                                </div>
                                <Button type="submit" className="w-full text-lg py-6 mt-4">
                                    Envoyer la demande
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    Notre secrétariat vous recontactera sous 24h pour confirmer le créneau.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
