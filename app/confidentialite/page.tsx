import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de MyFleet : quelles données nous collectons, pourquoi, combien de temps nous les conservons et comment exercer vos droits (RGPD).",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      intro="MyFleet accorde une grande importance à la protection de vos données personnelles. Cette politique vous explique quelles données nous traitons, dans quel but, et quels sont vos droits au titre du Règlement général sur la protection des données (RGPD)."
      lastUpdated="13 juin 2026"
    >
      <LegalSection title="Responsable du traitement">
        <p>
          Le responsable du traitement des données collectées sur le site
          myfleetagency.com est la société MyFleet.
        </p>
        {/* TODO: Renseigner la raison sociale et l'adresse du responsable de traitement */}
        <p>
          MyFleet — {/* TODO: adresse du siège social */} à compléter
        </p>
      </LegalSection>

      <LegalSection title="Délégué à la protection des données (DPO)">
        <p>
          Pour toute question relative au traitement de vos données ou pour exercer
          vos droits, vous pouvez contacter notre délégué à la protection des
          données&nbsp;:
        </p>
        {/* TODO: Renseigner le nom / l'adresse e-mail du DPO ou du contact RGPD */}
        <p>E-mail&nbsp;: {/* TODO: email du DPO */} à compléter</p>
      </LegalSection>

      <LegalSection title="Données que nous collectons">
        <p>Dans le cadre de l&apos;utilisation du site et de nos services, nous pouvons collecter&nbsp;:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Données d&apos;identification professionnelle</strong>&nbsp;: nom,
            prénom, fonction, nom de l&apos;agence, adresse e-mail professionnelle,
            numéro de téléphone.
          </li>
          <li>
            <strong>Données de demande</strong>&nbsp;: informations que vous nous
            transmettez via nos formulaires (demande de démonstration, contact).
          </li>
          <li>
            <strong>Données de navigation</strong>&nbsp;: données techniques et
            statistiques collectées via des traceurs, dans les conditions décrites
            dans notre{" "}
            <Link className="text-primary underline underline-offset-4" href="/cookies">
              politique de cookies
            </Link>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Finalités et bases légales">
        <p>Vos données sont traitées pour les finalités suivantes&nbsp;:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            répondre à vos demandes et organiser les démonstrations
            (base&nbsp;: mesures précontractuelles et intérêt légitime)&nbsp;;
          </li>
          <li>
            gérer la relation commerciale et contractuelle
            (base&nbsp;: exécution du contrat)&nbsp;;
          </li>
          <li>
            améliorer le site et nos services, réaliser des mesures d&apos;audience
            (base&nbsp;: consentement et/ou intérêt légitime)&nbsp;;
          </li>
          <li>
            respecter nos obligations légales et réglementaires
            (base&nbsp;: obligation légale).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Destinataires des données">
        <p>
          Vos données sont destinées aux services habilités de MyFleet. Elles
          peuvent être communiquées à nos sous-traitants techniques (hébergement,
          outils de gestion de la relation client, outils de mesure d&apos;audience),
          agissant pour notre compte et soumis à des obligations de confidentialité.
        </p>
        {/* TODO: Lister les principaux sous-traitants / destinataires (hébergeur, CRM, analytics) si requis */}
      </LegalSection>

      <LegalSection title="Transferts hors de l'Union européenne">
        <p>
          Lorsque certaines données sont susceptibles d&apos;être transférées en
          dehors de l&apos;Union européenne, nous nous assurons que des garanties
          appropriées sont mises en place (clauses contractuelles types de la
          Commission européenne ou mécanisme équivalent).
        </p>
        {/* TODO: Préciser les pays / mécanismes de transfert si des sous-traitants sont hors UE */}
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Vos données sont conservées pour la durée strictement nécessaire aux
          finalités pour lesquelles elles ont été collectées, puis archivées ou
          supprimées conformément aux durées légales applicables.
        </p>
        {/* TODO: Préciser les durées de conservation exactes par catégorie de données */}
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
          des droits suivants sur vos données&nbsp;: droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation, d&apos;opposition, de
          portabilité, et le droit de définir des directives relatives au sort de
          vos données après votre décès.
        </p>
        <p>
          Vous pouvez exercer ces droits en contactant notre DPO (voir ci-dessus).
          Vous disposez également du droit d&apos;introduire une réclamation auprès
          de la Commission nationale de l&apos;informatique et des libertés (CNIL),
          autorité de contrôle française.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          MyFleet met en œuvre des mesures techniques et organisationnelles
          appropriées afin de protéger vos données contre toute destruction, perte,
          altération ou accès non autorisé.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
