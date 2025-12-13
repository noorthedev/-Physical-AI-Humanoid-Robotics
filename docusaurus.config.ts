import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

require('dotenv').config();

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'The Ultimate Guide to Embodied Intelligence',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  scripts: [
    {
      src: "/config.js",
      async: false,
    },
    {
      src: "https://cdn.platform.openai.com/deployments/chatkit/chatkit.js",
      async: true,
    },
  ],

  url: process.env.URL || 'https://full-project-kappa.vercel.app', // Dynamic URL with Vercel fallback
  baseUrl: process.env.BASE_URL || '/', // Dynamic Base URL with root fallback

  organizationName: 'noorthedev', 
  projectName: 'Hackathon_1', // Your repository name

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  clientModules: [
    require.resolve('./src/components/Root.tsx'),
  ],

  customFields: {
    geminiApiKey: process.env.GEMINI_API_KEY,
    backendApiUrl: process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_API_URL || 'https://web-production-7311.up.railway.app',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Syedabanog-1/Hackathon1/tree/main/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/sidebar-custom.css')
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/robot-textbook.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/robot-textbook.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'TextBook',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/login',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkenIN',
              href: 'https://www.linkedin.com/in/anum-rajput-1a080632a/',
            },
            {
              label: 'facebook',
              href: 'https://www.facebook.com/noorthe.dev',
            },
            {
              label: 'X',
              href: 'https://x.com/Anumrajput88',
            },
          ],
        },
        {
          title: 'More',
          items: [
           
            {
              label: 'GitHub',
              href: 'https://github.com/noorthedev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Physical AI & Humanoid Robotics Textbook Built with ❤️ by AnumRajput`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;