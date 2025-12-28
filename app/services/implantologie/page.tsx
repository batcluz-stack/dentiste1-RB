import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers, Activity, CheckCircle } from "lucide-react";

export default function ImplantologiePage() {
    return (
        <div className="py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
                            <Layers className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-slate-900">
                            Soins Restaurateurs
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Retrouvez le confort et la fonctionnalité de votre dentition.
                            Implants, couronnes et bridges pour restaurer l'esthétique et la mastication durablement.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Confort Absolu</h3>
                                    <p className="text-sm text-muted-foreground">Une sensation identique à celle de vos dents naturelles.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Préservation Osseuse</h3>
                                    <p className="text-sm text-muted-foreground">L'implant stimule l'os de la mâchoire et empêche sa résorption.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Esthétique Parfaite</h3>
                                    <p className="text-sm text-muted-foreground">Intégration invisible dans votre sourire.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Button asChild size="lg">
                                <Link href="/book">Bilan Implantologique</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-3xl aspect-[4/5] relative overflow-hidden flex items-center justify-center">
                        <span className="text-muted-foreground italic">Schéma explicatif implant</span>
                    </div>
                </div>

                <div className="border-t pt-16">
                    <h2 className="text-3xl font-bold text-center mb-12 font-serif text-slate-900">Le déroulement de l'intervention</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-semibold mb-2">Bilan Complet</h3>
                            <p className="text-sm text-muted-foreground">Scanner 3D et étude de faisabilité osseuse.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-semibold mb-2">Pose de l'Implant</h3>
                            <p className="text-sm text-muted-foreground">Intervention chirurgicale simple sous anesthésie locale.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-semibold mb-2">Cicatrisation</h3>
                            <p className="text-sm text-muted-foreground">Période d'ostéointégration (2 à 4 mois).</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                            <h3 className="font-semibold mb-2">Pose de la Prothèse</h3>
                            <p className="text-sm text-muted-foreground">Mise en place de la couronne définitive en céramique.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
