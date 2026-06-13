import type { Metadata } from "next";
import { InternalPage } from "../components/InternalPage";

export const metadata: Metadata = {
  title: "MyFleet Club",
  description:
    "Rejoignez le programme partenaires MyFleet Club et accédez à des avantages exclusifs réservés aux agences de location membres.",
  alternates: { canonical: "/myfleet-club" },
};

export default function MyFleetClubPage() {
  return (
    <InternalPage
      ctaHref="/reservation"
      ctaLabel="Rejoindre Le Club"
      description="Accede a des privileges VIP, evenements prives et avantages exclusifs. Cette page est prete pour ton contenu membre."
      title="MyFleet Club"
    />
  );
}
