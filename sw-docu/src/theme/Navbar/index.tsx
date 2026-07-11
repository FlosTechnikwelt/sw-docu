import type {ComponentProps, ReactNode} from 'react';
import Navbar from '@theme-original/Navbar';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = ComponentProps<typeof Navbar>;

/**
 * Umhüllt die Original-Navbar und zeigt direkt darunter auf allen Seiten
 * einen Hinweis-Balken zum Beta-Status der Site.
 */
export default function NavbarWrapper(props: Props): ReactNode {
  return (
    <>
      <Navbar {...props} />
      <div className={styles.betaBalken} role="note">
        <strong>Beta-Version</strong> – die Inhalte werden laufend erweitert
        und verbessert.{' '}
        <Link className={styles.betaLink} to="/ueber-diese-seite">
          Mehr erfahren
        </Link>
      </div>
    </>
  );
}
