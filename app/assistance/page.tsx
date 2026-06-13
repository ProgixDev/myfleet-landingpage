import type { Metadata } from "next";
import { InternalPage } from "../components/InternalPage";

export const metadata: Metadata = {
  title: "Assistance",
  description:
    "Besoin d'aide ? L'équipe MyFleet accompagne les agences de location avec un support dédié et un suivi personnalisé.",
  alternates: { canonical: "/assistance" },
};

export default function AssistancePage() {
  return (
    <InternalPage
      ctaHref="/reservation"
      ctaLabel="Contacter Un Conseiller"
      description="Support 24/7, aide immediate et suivi dedie. Cette page est prete pour ton formulaire de contact et tes canaux de support."
      title="Assistance"
    />
  );
}
