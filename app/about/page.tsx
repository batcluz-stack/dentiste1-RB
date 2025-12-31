import { Container } from "@/components/ui/container";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-primary">À Propos de Nous</h1>
                    <p className="text-lg text-muted-foreground">
                        Découvrez l'équipe et la philosophie de notre cabinet dentaire moderne et chaleureux.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-serif text-primary">Une approche humaine et experte</h2>
                        <p className="text-muted-foreground">
                            Fondé avec la conviction que chaque patient mérite une attention particulière, notre cabinet allie expertise médicale de pointe et écoute bienveillante.
                        </p>
                        <p className="text-muted-foreground">
                            Notre équipe de praticiens passionnés se forme continuellement aux dernières techniques pour vous offrir des soins indolores, rapides et durables.
                        </p>
                        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl mt-6">
                            <h3 className="font-semibold text-lg mb-3 text-black">Notre Engagement</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-black">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={3} /> Hygiène et stérilisation irréprochables
                                </li>
                                <li className="flex items-center gap-2 text-black">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={3} /> Transparence sur les plans de traitement
                                </li>
                                <li className="flex items-center gap-2 text-black">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={3} /> Accompagnement personnalisé
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center text-muted-foreground">
                        {/* Placeholder pour photo équipe/cabinet */}
                        <div className="text-center p-8">
                            <p className="italic">Photo de l'équipe ou du cabinet</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
