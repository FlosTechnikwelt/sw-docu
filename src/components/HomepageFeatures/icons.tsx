import type {ReactNode} from 'react';

type IconProps = React.ComponentProps<'svg'>;

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

/** Netzwerk & Internet – Globus mit Längen-/Breitengraden. */
export function NetzwerkIcon(props: IconProps): ReactNode {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9S9.5 5.4 12 3Z" />
    </svg>
  );
}

/** Sicherheit – Schutzschild mit Haken. */
export function SicherheitIcon(props: IconProps): ReactNode {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.5 7 9.5 4.1-2 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Geräte & Daten – gestapelte Server/Datenträger. */
export function GeraeteDatenIcon(props: IconProps): ReactNode {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="6" rx="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" />
      <path d="M8 7h.01M8 17h.01" />
    </svg>
  );
}

/** Support & Hilfe – Rettungsring als Hilfe-Symbol. */
export function SupportIcon(props: IconProps): ReactNode {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m4.9 4.9 4.6 4.6M14.5 14.5l4.6 4.6M19.1 4.9l-4.6 4.6M9.5 14.5l-4.6 4.6" />
    </svg>
  );
}
