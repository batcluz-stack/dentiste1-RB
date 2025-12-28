import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah L.",
        review: "La meilleure expérience dentaire que j'aie jamais eue. Professionnel, propre et personnel très sympathique.",
        rating: 5,
    },
    {
        name: "Michel B.",
        review: "Le Dr Smith est incroyable ! Je n'ai rien senti pendant mon traitement de canal. Hautement recommandé.",
        rating: 5,
    },
    {
        name: "Emma W.",
        review: "Génial avec les enfants ! Mon fils attend maintenant avec impatience ses visites chez le dentiste.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Avis des Patients</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Découvrez ce que nos patients satisfaits disent de nous.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-background border-none shadow-sm">
                            <CardHeader className="pb-2">
                                <div className="flex space-x-1">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">"{t.review}"</p>
                                <p className="font-semibold text-foreground">{t.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
