import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de MyFleet : éditeur du site, hébergeur, propriété intellectuelle et coordonnées de contact.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Les présentes mentions légales encadrent l'utilisation du site myfleetagency.com, édité par la société MyFleet. Nous vous invitons à les lire attentivement."
      lastUpdated="13 juin 2026"
    >
      <LegalSection title="Éditeur du site">
        <p>
          Le site myfleetagency.com est édité par&nbsp;:
        </p>
        {/* TODO: Renseigner la raison sociale exacte (ex. MyFleet SAS) */}
        {/* TODO: Renseigner la forme juridique et le capital social */}
        {/* TODO: Renseigner l'adresse du siège social */}
        {/* TODO: Renseigner le numéro SIREN / SIRET */}
        {/* TODO: Renseigner le numéro de TVA intracommunautaire */}
        {/* TODO: Renseigner le numéro RCS et la ville d'immatriculation */}
        {/* TODO: Renseigner le nom du directeur de la publication */}
        <p>
          MyFleet — Société par actions simplifiée
          <br />
          Adresse&nbsp;: {/* TODO: adresse complète du siège social */} à compléter
          <br />
          SIREN&nbsp;: {/* TODO: SIREN */} à compléter — RCS&nbsp;: {/* TODO: RCS + ville */} à compléter
          <br />
          Capital social&nbsp;: {/* TODO: capital social */} à compléter
          <br />
          TVA intracommunautaire&nbsp;: {/* TODO: n° TVA */} à compléter
          <br />
          Directeur de la publication&nbsp;: {/* TODO: nom du directeur de la publication */} à compléter
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question relative au site ou à nos services, vous pouvez nous
          contacter à l&apos;adresse suivante&nbsp;:
        </p>
        {/* TODO: Renseigner l'adresse e-mail de contact officielle */}
        {/* TODO: Renseigner un numéro de téléphone si applicable */}
        <p>E-mail&nbsp;: {/* TODO: email de contact */} à compléter</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>Le site est hébergé par&nbsp;:</p>
        {/* TODO: Renseigner le nom de l'hébergeur (ex. Vercel Inc.) */}
        {/* TODO: Renseigner l'adresse de l'hébergeur */}
        {/* TODO: Renseigner les coordonnées de contact de l'hébergeur */}
        <p>
          {/* TODO: nom de l'hébergeur */} à compléter
          <br />
          Adresse&nbsp;: {/* TODO: adresse de l'hébergeur */} à compléter
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des éléments composant le site myfleetagency.com (marque,
          logo, textes, visuels, interfaces, code et bases de données) est la
          propriété exclusive de MyFleet ou de ses partenaires, et est protégé par
          les lois en vigueur relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification ou exploitation, totale
          ou partielle, de ces éléments sans l&apos;autorisation écrite préalable de
          MyFleet est interdite et constitue une contrefaçon.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          MyFleet met tout en œuvre pour fournir des informations exactes et à jour
          sur ce site. Pour autant, nous ne saurions garantir l&apos;exactitude,
          l&apos;exhaustivité ou l&apos;actualité des informations diffusées. Votre
          utilisation du site se fait sous votre entière responsabilité.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles et cookies">
        <p>
          Le traitement de vos données personnelles est détaillé dans notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/confidentialite">
            politique de confidentialité
          </Link>
          . La gestion des traceurs est décrite dans notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/cookies">
            politique de cookies
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>
          Les présentes mentions légales sont régies par le droit français. En cas
          de litige, et à défaut de résolution amiable, compétence est attribuée aux
          tribunaux français compétents.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
