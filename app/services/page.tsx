import type { Metadata } from "next";
import { InternalPage } from "../components/InternalPage";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Découvrez les fonctionnalités de MyFleet : CRM intelligent, application client en marque blanche et outils de pilotage pour les agences de location.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <InternalPage
      ctaHref="/reservation"
      ctaLabel="Demarrer"
      description="Assistance premium, conciergerie et prestations sur mesure. Cette page est prete pour presenter tes offres de service en detail."
      title="Services"
    />
  );
}
