import { InternalPage } from "../components/InternalPage";

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
