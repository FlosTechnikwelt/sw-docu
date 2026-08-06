import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Schulen Wedel',
  tagline: 'IT-Wissensdatenbank der Grassau GmbH für die Schulen der Stadt Wedel',
  favicon: 'img/logo-1x1.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://knowledgebase.sw.grassau.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grassau', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // "Diese Seite bearbeiten"-Links deaktiviert (kein öffentliches Repo).
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Neuigkeiten',
          blogDescription: 'Aktuelle Meldungen und technische Beiträge zur Schul-IT in Wedel',
          blogSidebarTitle: 'Aktuelle Beiträge',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Schulen Wedel',
      logo: {
        alt: 'Grassau Logo',
        src: 'img/logo-1x1.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wissensdatenbank',
        },
        {to: '/blog', label: 'Neuigkeiten', position: 'left'},
        {
          to: '/docs/support/ticket-erstellen',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wissensdatenbank',
          items: [
            {
              label: 'Netzwerk & Internet',
              to: '/docs/netzwerk/modernisierung',
            },
            {
              label: 'Sicherheit',
              to: '/docs/sicherheit/ngfw-firewall',
            },
            {
              label: 'Geräte & Daten',
              to: '/docs/geraete-und-daten/datenspeicherung',
            },
          ],
        },
        {
          title: 'Hilfe',
          items: [
            {
              label: 'Ticket erstellen',
              to: '/docs/support/ticket-erstellen',
            },
            {
              label: 'Neuigkeiten',
              to: '/blog',
            },
            {
              label: 'Feedback zur Wissensdatenbank',
              href: 'mailto:knowledgebase.sw@grassau.com',
            },
          ],
        },
        {
          title: 'Grassau GmbH',
          items: [
            {
              label: 'Website',
              href: 'https://www.grassau.com',
            },
            {
              label: 'Impressum',
              to: '/impressum',
            },
            {
              label: 'Datenschutz',
              to: '/datenschutz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grassau GmbH - Alle Rechte vorbehalten.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
