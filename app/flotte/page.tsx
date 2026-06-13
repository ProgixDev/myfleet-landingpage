import type { Metadata } from "next";
import { InternalPage } from "../components/InternalPage";

export const metadata: Metadata = {
  title: "Gestion de flotte",
  description:
    "Pilotez l'ensemble de votre flotte de véhicules depuis MyFleet : disponibilités, contrats et suivi en temps réel sur une seule plateforme.",
  alternates: { canonical: "/flotte" },
};

export default function FlottePage() {
  return (
    <InternalPage
      ctaHref="/reservation"
      ctaLabel="Reserver Maintenant"
      description="Decouvre les modeles disponibles, filtres premium et options exclusives. Cette page est prete pour afficher tes vraies voitures."
      title="La Flotte"
    />
  );
}
