import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Smile, Sparkles, Gem } from "lucide-react";

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
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-slate-900">
                        Dentisterie Esthétique
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Retrouvez confiance en vous avec un sourire éclatant.
                        L'esthétique dentaire allie art et science pour sublimer votre visage tout en respectant l'harmonie naturelle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                        <div className="mb-4 bg-[#23e1f0]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <Smile className="w-6 h-6 text-[#23e1f0]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Blanchiment Dentaire</h3>
                        <p className="text-black">
                            Gagnez plusieurs teintes en une seule séance grâce à nos techniques de blanchiment professionnelles,
                            sûres pour l'émail et durables.
                        </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                        <div className="mb-4 bg-[#23e1f0]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <Star className="w-6 h-6 text-[#23e1f0]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Facettes Céramiques</h3>
                        <p className="text-black">
                            Corrigez la forme, la teinte ou les légers chevauchements de vos dents avec des facettes ultra-fines
                            posées sur la face visible de vos dents.
                        </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                        <div className="mb-4 bg-[#23e1f0]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-[#23e1f0]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Réalignement Invisible</h3>
                        <p className="text-black">
                            Alignez vos dents en toute discrétion grâce aux gouttières transparentes.
                            Une alternative esthétique et confortable aux bagues traditionnelles.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl font-bold mb-6 font-serif">Le sourire dont vous avez toujours rêvé</h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            Chaque sourire est unique. Nous réalisons une analyse esthétique complète de votre visage
                            pour vous proposer un plan de traitement sur-mesure.
                        </p>
                        <Button asChild className="bg-white text-slate-900 hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto">
                            <Link href="/book">Consultation Esthétique</Link>
                        </Button>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#23e1f0]/20 rounded-full blur-3xl"></div>
                </div>
            </Container>
        </div>
    );
}
