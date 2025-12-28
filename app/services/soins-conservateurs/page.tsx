import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";

export default function SoinsConservateursPage() {
    return (
        <div className="py-20">
            <Container>
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="relative inline-flex items-center justify-center mb-6">
                        <div className="absolute -inset-2 rounded-full border-2 border-primary border-t-transparent rotate-45 opacity-80"></div>
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm">
                            <Shield className="w-8 h-8 text-primary" strokeWidth={2.5} />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-slate-900">
                        Dentisterie Générale
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Préserver la santé et la vitalité de vos dents naturelles est notre priorité absolue.
                        Nos traitements conservateurs visent à soigner les pathologies tout en épargnant au maximum les tissus sains.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#23e1f0] mb-4">Le traitement des caries</h2>
                            <p className="text-muted-foreground mb-4">
                                Une carie non soignée peut rapidement évoluer et atteindre le nerf de la dent.
                                Nous intervenons dès les premiers signes pour nettoyer la zone infectée et restaurer la dent avec des matériaux composites modernes,
                                invisibles et durables.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#23e1f0] mb-4">Détartrage et Prophylaxie</h2>
                            <p className="text-muted-foreground mb-4">
                                L'ennemi numéro un de vos dents est la plaque dentaire. Un détartrage régulier (recommandé tous les 6 à 12 mois)
                                permet d'éliminer le tartre, de prévenir les inflammations gingivales (gencives) et de redonner de l'éclat à votre sourire.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#23e1f0] mb-4">Dévitalisation (Traitement endodontique)</h2>
                            <p className="text-muted-foreground mb-4">
                                Lorsque la carie a atteint le nerf, un traitement de racine est nécessaire pour sauver la dent.
                                Réalisé sous anesthésie locale, cet acte est aujourd'hui parfaitement indolore.
                            </p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl">
                            <h3 className="font-semibold text-lg mb-3 text-black">Nos engagements :</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-black">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={3} /> Conservation maximale des tissus
                                </li>
                                <li className="flex items-center gap-2 text-black">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={3} /> Matériaux biocompatibles
                                </li>
                                <li className="flex items-center gap-2 text-black">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={3} /> Gestion optimale de la douleur
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Image / Stats Section */}
                    <div className="space-y-8">
                        <div className="aspect-[4/3] bg-slate-200 rounded-2xl relative overflow-hidden flex items-center justify-center">
                            <span className="text-muted-foreground italic">Illustration soins dentaires</span>
                            {/* Insérer <Image /> ici plus tard */}
                        </div>
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                            <h3 className="text-2xl font-bold text-primary mb-2">Un doute ? Une douleur ?</h3>
                            <p className="text-muted-foreground mb-6">Ne laissez pas une petite gêne devenir un gros problème.</p>
                            <Button asChild size="lg" className="w-full text-xl font-bold py-6">
                                <Link href="/book">Prendre rendez-vous</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
