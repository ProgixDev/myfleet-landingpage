export const SITE_URL = "https://myfleetagency.com";
export const SITE_NAME = "MyFleet";

/**
 * Full default title used by the home page and as the metadata template base.
 * Kept in sync with the layout's `title.default`.
 */
export const SITE_TITLE = "MyFleet — Le SaaS des agences de location automobile";

/**
 * Canonical brand description, reused across the root metadata, Open Graph,
 * Twitter cards and the social share image. Single source of truth.
 */
export const SITE_DESCRIPTION =
  "MyFleet équipe les agences de location d'un CRM intelligent et d'une application client en marque blanche. Pilotez votre flotte, vos clients et vos revenus depuis une seule plateforme.";

/**
 * Short tagline used on the social share image and PWA manifest.
 */
export const SITE_TAGLINE = "Le SaaS des agences de location automobile";

/**
 * SEO keywords for the root metadata.
 */
export const SITE_KEYWORDS = [
  "MyFleet",
  "SaaS location automobile",
  "logiciel agence de location",
  "CRM location de voiture",
  "gestion de flotte",
  "application client marque blanche",
  "logiciel location voiture",
  "réservation véhicule",
  "agence de location automobile",
];

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

/**
 * Routes published in the sitemap. The agency back-office lives on a separate
 * subdomain (backoffice.myfleetagency.com) and is intentionally excluded.
 */
export const SITE_ROUTES: SitemapRoute[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/reservation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/flotte", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/assistance", priority: 0.7, changeFrequency: "monthly" },
  { path: "/myfleet-club", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
  { path: "/confidentialite", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cgu", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];
