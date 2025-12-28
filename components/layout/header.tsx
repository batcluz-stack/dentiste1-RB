import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tooth } from "@/components/icons";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-[#23e1f0]/80 backdrop-blur-md shadow-sm border-white/20">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Tooth className="h-8 w-8 text-slate-900" />
                    <span className="text-2xl font-bold text-slate-900 font-serif tracking-tight">CabinetDentaire</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-lg font-semibold text-slate-900 transition-colors hover:text-white">
                        Accueil
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-white flex items-center gap-1 outline-none">
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
                        </button>
                        <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="bg-white rounded-xl shadow-xl overflow-hidden min-w-[240px] border border-slate-100">
                                <Link href="/services/soins-conservateurs" className="block px-6 py-3 text-slate-900 hover:bg-slate-50 hover:text-primary transition-colors font-medium">
                                    Dentisterie Générale
                                </Link>
                                <Link href="/services/esthetique" className="block px-6 py-3 text-slate-900 hover:bg-slate-50 hover:text-primary transition-colors font-medium">
                                    Dentisterie Esthétique
                                </Link>
                                <Link href="/services/implantologie" className="block px-6 py-3 text-slate-900 hover:bg-slate-50 hover:text-primary transition-colors font-medium">
                                    Soins Restaurateurs
                                </Link>
                                <Link href="/services/urgences" className="block px-6 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors font-medium">
                                    Urgences Dentaires
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/about" className="text-lg font-semibold text-slate-900 transition-colors hover:text-white">
                        À propos
                    </Link>
                    <Link href="/contact" className="text-lg font-semibold text-slate-900 transition-colors hover:text-white">
                        Contact
                    </Link>

                    <Button asChild className="bg-white text-black hover:bg-white/90 border-0 font-semibold text-lg">
                        <Link href="/book">Prendre Rendez-vous</Link>
                    </Button>
                </nav>
                {/* Mobile menu toggle would go here */}
            </Container>
        </header>
    );
}
