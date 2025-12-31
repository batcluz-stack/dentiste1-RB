import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gem, CheckCircle2 } from "lucide-react";

export default function EsthetiquePage() {
    return (
        <div className="py-20">
            <Container>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="relative inline-flex items-center justify-center mb-6">
                        <div className="absolute -inset-2 rounded-full border-2 border-[#23e1f0] border-t-transparent rotate-45 opacity-80"></div>
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm">
                            <Gem className="w-8 h-8 text-[#23e1f0]" strokeWidth={2.5} />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-primary">
                        Dentisterie Esthétique
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Retrouvez confiance en vous avec un sourire éclatant.
                        L'esthétique dentaire allie art et science pour sublimer votre visage tout en respectant l'harmonie naturelle.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mb-20">
                    <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-xl">
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" strokeWidth={3} />
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-1">Blanchiment Dentaire</h3>
                                    <p className="text-black">
                                        Gagnez plusieurs teintes en une seule séance grâce à nos techniques de blanchiment professionnelles,
                                        sûres pour l'émail et durables.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" strokeWidth={3} />
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-1">Facettes Céramiques</h3>
                                    <p className="text-black">
                                        Corrigez la forme, la teinte ou les légers chevauchements de vos dents avec des facettes ultra-fines
                                        posées sur la face visible de vos dents.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" strokeWidth={3} />
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-1">Réalignement Invisible</h3>
                                    <p className="text-black">
                                        Alignez vos dents en toute discrétion grâce aux gouttières transparentes.
                                        Une alternative esthétique et confortable aux bagues traditionnelles.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


            </Container>
        </div>
    );
}
