import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, AlertCircle, Clock } from "lucide-react";

export default function UrgencesPage() {
    return (
        <div className="py-20 bg-red-50/30 min-h-screen">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6 animate-pulse">
                        <AlertCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif text-primary">
                        Urgences Dentaires
                    </h1>
                    <p className="text-xl text-slate-700 font-medium">
                        Une douleur insupportable ? Une dent cassée ? <br />
                        Nous mettons tout en œuvre pour vous recevoir dans la journée.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-100 max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6 text-black">Contactez-nous immédiatement</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                        <a href="tel:0123456789" className="flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-red-700 transition-colors w-full md:w-auto">
                            <Phone className="w-6 h-6" />
                            01 23 45 67 89
                        </a>
                    </div>

                    <p className="text-black mb-8 font-bold">
                        Si le cabinet est fermé (dimanches et jours fériés), contactez le service de garde au <strong className="text-red-600">15</strong> ou le Conseil de l'Ordre des Chirurgiens-Dentistes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-red-50 p-6 rounded-xl">
                            <h3 className="font-bold text-red-900 mb-2">Rage de dent</h3>
                            <p className="text-sm text-red-800">
                                Ne prenez pas d'anti-inflammatoires sans avis médical si une infection est suspectée.
                                Appliquez une poche de glace sur la joue pour soulager.
                            </p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl">
                            <h3 className="font-bold text-red-900 mb-2">Dent expulsée</h3>
                            <p className="text-sm text-red-800">
                                Récupérez la dent par la couronne (ne touchez pas la racine).
                                Conservez-la dans du lait ou de la salive et venez immédiatement.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
