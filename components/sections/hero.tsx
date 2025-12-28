import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="relative py-20 md:py-32">
            <Container className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl max-w-3xl">
                    Votre Sourire, Notre Passion. <br className="hidden sm:inline" />
                    <span className="text-primary">Soins Dentaires Avancés</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                    Votre santé dentaire mérite toute notre attention.<br />
                    Nous vous accueillons dans un cadre chaleureux pour des soins de haute qualité, alliant expertise médicale et savoir-faire pour un sourire éclatant de santé.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button asChild size="lg">
                        <Link href="/book">Prendre Rendez-vous</Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg">
                        <Link href="/services">Nos Services &rarr;</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
