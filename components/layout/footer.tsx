import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Tooth } from "@/components/icons";

export function Footer() {
    return (
        <footer className="border-t bg-slate-300 relative overflow-hidden">
            {/* Pattern de fond "Chaos organisé" */}
            <div className="absolute inset-0 pointer-events-none opacity-25 text-slate-600 flex flex-wrap justify-between items-center content-center overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <Tooth
                        key={i}
                        className="w-32 h-32 m-8 transition-transform"
                        style={{
                            transform: `rotate(${i * 67 % 360}deg) translate(${i * 13 % 50}px, ${i * 19 % 40}px) scale(${1 + (i % 5) * 0.1})`
                        }}
                    />
                ))}
            </div>

            <Container className="py-12 md:py-16 relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Tooth className="h-6 w-6 text-black" />
                                <span className="text-xl font-bold text-black">CabinetDentaire</span>
                            </div>
                            <p className="text-sm text-black font-medium">
                                Offrir des soins dentaires de haute qualité dans un environnement confortable et convivial.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-black text-lg">Liens Rapides</h3>
                            <ul className="space-y-2 text-sm text-black font-medium">
                            <li><Link href="/about" className="hover:text-primary transition-colors">À propos</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-black text-lg">Contact</h3>
                            <ul className="space-y-2 text-sm text-black font-medium">
                                <li>123 rue du Dentiste</li>
                                <li>75000 Paris</li>
                                <li>01 23 45 67 89</li>
                                <li>bonjour@cabinetdentaire.com</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-black text-lg">Horaires</h3>
                            <ul className="space-y-2 text-sm text-black font-medium">
                                <li>Lun - Ven : 9h - 18h</li>
                                <li>Sam : 10h - 16h</li>
                                <li>Dim : Fermé</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-black/10 text-center text-sm text-black font-medium">
                        &copy; {new Date().getFullYear()} CabinetDentaire. Tous droits réservés.
                    </div>
                </div>
            </Container>
        </footer>
    );
}
