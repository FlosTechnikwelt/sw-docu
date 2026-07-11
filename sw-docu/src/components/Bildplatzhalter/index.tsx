import type {ReactNode} from 'react';
import styles from './styles.module.css';

type BildplatzhalterProps = {
  /** Kurze Beschreibung, was das Bild später zeigen soll. */
  beschreibung?: ReactNode;
  /** Seitenverhältnis, z. B. "16 / 9" (Standard) oder "4 / 3". */
  ratio?: string;
};

/**
 * Platzhalter für ein noch fehlendes Bild.
 * Verwendung in MDX:
 *   import Bildplatzhalter from '@site/src/components/Bildplatzhalter';
 *   <Bildplatzhalter beschreibung="Foto des neuen Serverschranks" />
 */
export default function Bildplatzhalter({
  beschreibung,
  ratio = '16 / 9',
}: BildplatzhalterProps): ReactNode {
  return (
    <figure className={styles.rahmen} style={{aspectRatio: ratio}}>
      <div className={styles.inhalt}>
        <svg
          className={styles.symbol}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="m4 18 5-5 4 4 3-3 4 4" />
        </svg>
        <span className={styles.titel}>Bild folgt</span>
        {beschreibung && (
          <figcaption className={styles.beschreibung}>{beschreibung}</figcaption>
        )}
      </div>
    </figure>
  );
}
