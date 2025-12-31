import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Implant } from "@/components/icons";
import { Activity, CheckCircle2 } from "lucide-react";

export default function ImplantologiePage() {
    return (
        <div className="py-20">
            <Container>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="relative inline-flex items-center justify-center mb-6">
                        <div className="absolute -inset-2 rounded-full border-2 border-[#23e1f0] border-t-transparent rotate-45 opacity-80"></div>
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm">
                            <Implant className="w-8 h-8 text-[#23e1f0]" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-primary">
                        Soins Restaurateurs
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Retrouvez le confort et la fonctionnalité de votre dentition.
                        Implants, couronnes et bridges pour restaurer l'esthétique et la mastication durablement.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    <div>
                        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" strokeWidth={3} />
                                    <div>
                                        <h3 className="font-semibold text-black">Confort Absolu</h3>
                                        <p className="text-sm text-black">Une sensation identique à celle de vos dents naturelles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" strokeWidth={3} />
                                    <div>
                                        <h3 className="font-semibold text-black">Préservation Osseuse</h3>
                                        <p className="text-sm text-black">L'implant stimule l'os de la mâchoire et empêche sa résorption.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" strokeWidth={3} />
                                    <div>
                                        <h3 className="font-semibold text-black">Esthétique Parfaite</h3>
                                        <p className="text-sm text-black">Intégration invisible dans votre sourire.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-3xl aspect-[4/5] relative overflow-hidden flex items-center justify-center">
                        <span className="text-muted-foreground italic">Schéma explicatif implant</span>
                    </div>
                </div>

                <div className="border-t pt-16">
                    <h2 className="text-3xl font-bold text-center mb-12 font-serif text-[#23e1f0]">Le déroulement de l'intervention</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#23e1f0] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-semibold mb-2">Bilan Complet</h3>
                            <p className="text-sm text-muted-foreground">Scanner 3D et étude de faisabilité osseuse.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#23e1f0] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-semibold mb-2">Pose de l'Implant</h3>
                            <p className="text-sm text-muted-foreground">Intervention chirurgicale simple sous anesthésie locale.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#23e1f0] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-semibold mb-2">Cicatrisation</h3>
                            <p className="text-sm text-muted-foreground">Période d'ostéointégration (2 à 4 mois).</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#23e1f0] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                            <h3 className="font-semibold mb-2">Pose de la Prothèse</h3>
                            <p className="text-sm text-muted-foreground">Mise en place de la couronne définitive en céramique.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
