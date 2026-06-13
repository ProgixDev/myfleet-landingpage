import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MyFleet — Le SaaS des agences de location automobile",
    short_name: "MyFleet",
    description:
      "MyFleet équipe les agences de location d'un CRM intelligent et d'une application client en marque blanche. Pilotez votre flotte, vos clients et vos revenus depuis une seule plateforme.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4c1d95",
    lang: "fr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
