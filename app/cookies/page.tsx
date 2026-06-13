import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Politique de cookies de MyFleet : quels traceurs nous utilisons, leur finalité et comment gérer votre consentement.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Gestion des traceurs"
      title="Politique de cookies"
      intro="Cette politique vous explique ce que sont les cookies, lesquels nous utilisons sur myfleetagency.com, à quoi ils servent et comment vous pouvez gérer vos préférences."
      lastUpdated="13 juin 2026"
    >
      <LegalSection title="Qu'est-ce qu'un cookie ?">
        <p>
          Un cookie est un petit fichier déposé sur votre terminal (ordinateur,
          tablette, smartphone) lors de la consultation d&apos;un site. Il permet de
          reconnaître votre navigateur, de mémoriser certaines informations et de
          mesurer l&apos;audience du site.
        </p>
      </LegalSection>

      <LegalSection title="Les cookies que nous utilisons">
        <p>Nous distinguons plusieurs catégories de cookies&nbsp;:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Cookies strictement nécessaires</strong>&nbsp;: indispensables au
            fonctionnement du site, ils ne requièrent pas votre consentement.
          </li>
          <li>
            <strong>Cookies de mesure d&apos;audience</strong>&nbsp;: ils nous
            permettent de comprendre l&apos;utilisation du site afin de l&apos;améliorer.
          </li>
          <li>
            <strong>Cookies de personnalisation et marketing</strong>&nbsp;: ils
            permettent d&apos;adapter les contenus et de mesurer l&apos;efficacité de
            nos campagnes.
          </li>
        </ul>
        {/* TODO: Lister précisément les cookies déposés (nom, émetteur, finalité, durée) une fois les outils déployés */}
      </LegalSection>

      <LegalSection title="Votre consentement">
        <p>
          À l&apos;exception des cookies strictement nécessaires, les traceurs ne sont
          déposés qu&apos;après recueil de votre consentement. Vous pouvez accepter,
          refuser ou personnaliser votre choix, et le modifier à tout moment.
        </p>
        {/* TODO: Décrire le mécanisme exact de recueil du consentement (bandeau / CMP) une fois en place */}
      </LegalSection>

      <LegalSection title="Gérer les cookies depuis votre navigateur">
        <p>
          Vous pouvez également configurer votre navigateur pour accepter ou refuser
          les cookies, ou être averti de leur dépôt. Chaque navigateur propose ses
          propres réglages, généralement accessibles depuis le menu « Options » ou
          « Préférences ». Le refus de certains cookies peut limiter l&apos;accès à
          certaines fonctionnalités du site.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          La durée de vie des cookies varie selon leur finalité et n&apos;excède pas
          les durées maximales recommandées par la CNIL.
        </p>
      </LegalSection>

      <LegalSection title="En savoir plus">
        <p>
          Le traitement des données collectées via les cookies est détaillé dans
          notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
