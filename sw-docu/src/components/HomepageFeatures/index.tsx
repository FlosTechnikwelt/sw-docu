import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {
  NetzwerkIcon,
  SicherheitIcon,
  GeraeteDatenIcon,
  SupportIcon,
} from './icons';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Netzwerk & Internet',
    Icon: NetzwerkIcon,
    to: '/docs/netzwerk/modernisierung',
    description: (
      <>
        Schnellere Internetanbindung, Wi-Fi 7 in den Räumen und wie eigene
        Geräte ins Schulnetz kommen.
      </>
    ),
  },
  {
    title: 'Sicherheit',
    Icon: SicherheitIcon,
    to: '/docs/sicherheit/ngfw-firewall',
    description: (
      <>
        Die neue NGFW-Firewall, sichere Passwörter und der richtige Umgang mit
        verdächtigen E-Mails.
      </>
    ),
  },
  {
    title: 'Geräte & Daten',
    Icon: GeraeteDatenIcon,
    to: '/docs/geraete-und-daten/datenspeicherung',
    description: (
      <>
        Endgeräte im Schulalltag und wie Sie wichtige Daten richtig und sicher
        speichern.
      </>
    ),
  },
  {
    title: 'Support & Hilfe',
    Icon: SupportIcon,
    to: '/docs/support/ticket-erstellen',
    description: (
      <>
        So erstellen Sie ein Ticket, ermitteln eine MAC-Adresse und erreichen
        uns bei Problemen.
      </>
    ),
  },
];

function Feature({title, Icon, to, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={to} className={styles.card}>
        <Icon className={styles.cardIcon} role="img" />
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardText}>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
