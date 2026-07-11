import {useEffect} from 'react';
import type {ReactNode} from 'react';

const SKRIPT_URL = 'https://widget.passwort-generator.com/webmaster/';

/**
 * Einbettung des Passwort-Generator-Widgets von passwort-generator.com.
 * Verwendung in MDX:
 *   import PasswortGenerator from '@site/src/components/PasswortGenerator';
 *   <PasswortGenerator />
 */
export default function PasswortGenerator(): ReactNode {
  useEffect(() => {
    // Das Skript bei jedem Einbinden neu laden, damit das Widget auch nach
    // clientseitiger Navigation (SPA) initialisiert wird.
    document
      .querySelectorAll(`script[src="${SKRIPT_URL}"]`)
      .forEach((el) => el.remove());

    const script = document.createElement('script');
    script.src = SKRIPT_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      id="pw-gen-widget"
      data-show-expert-settings="true"
      data-options-color="#0b5f99"
      data-title-color="#36a1c9"
      data-button-background-color="#36a1c9"
      data-button-text-color="#ffffff"
      data-headline-color="#0b5f99"
      data-border-color="#d9e2e9"
      data-border-width="1px"
      data-background-color="#ffffff"
      data-embedded="true"
      data-publisher-id="1e591fb484"
    />
  );
}
