import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type BildProps = {
  /** Pfad zum Bild unterhalb von static, z. B. "/img/ipads/ipad-koffer.jpeg". */
  quelle: string;
  /** Alternativtext für Screenreader und falls das Bild nicht lädt. */
  alt: string;
  /** Optionale Bildunterschrift. */
  beschreibung?: ReactNode;
};

/**
 * Bild mit Rahmen und optionaler Bildunterschrift.
 * Verwendung in MDX:
 *   import Bild from '@site/src/components/Bild';
 *   <Bild quelle="/img/ipads/ipad-koffer.jpeg" alt="Geöffneter iPad-Koffer" beschreibung="Der Ladekoffer" />
 */
export default function Bild({quelle, alt, beschreibung}: BildProps): ReactNode {
  return (
    <figure className={styles.rahmen}>
      <img className={styles.bild} src={useBaseUrl(quelle)} alt={alt} loading="lazy" />
      {beschreibung && (
        <figcaption className={styles.beschreibung}>{beschreibung}</figcaption>
      )}
    </figure>
  );
}
