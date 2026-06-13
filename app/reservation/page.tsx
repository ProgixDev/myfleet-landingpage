import type { Metadata } from "next";
import { InternalPage } from "../components/InternalPage";

export const metadata: Metadata = {
  title: "Demander une démo",
  description:
    "Réservez une démonstration de MyFleet et découvrez comment équiper votre agence de location d'un CRM et d'une application client en marque blanche.",
  alternates: { canonical: "/reservation" },
};

export default function ReservationPage() {
  return (
    <InternalPage
      ctaHref="/flotte"
      ctaLabel="Voir La Flotte"
      description="Finalise ta reservation en quelques secondes. Cette page est prete pour brancher ton formulaire et ton systeme de paiement."
      title="Reservation"
    />
  );
}
