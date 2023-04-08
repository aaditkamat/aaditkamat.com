/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Aadit Kamat',
  tagline: 'Personal Website',
  url: 'https://aaditkamat.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/profile.jpg',
  organizationName: 'aaditkamat', // Usually your GitHub org/user name.
  projectName: 'aaditkamat.com', // Usually your repo name.
  stylesheets: ['https://assets.calendly.com/assets/external/widget.css'],
  scripts: [
    {
      src: 'https://assets.calendly.com/assets/external/widget.js',
      async: true,
    },
    {
      src: 'https://instant.page/5.1.0',
      async: true,
      type: 'module',
      integrity: 'sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw',
    },
    {
      src: 'https://utteranc.es/client.js',
      repo: 'aaditkamat/aaditkamat.com',
      issueTerm: 'url',
      label: 'enhancement',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    },
    {
      src: 'https://tryarsturn.com/widget/widget.js',
      async: true,
      type: 'text/javascript',
    }
  ],
  themeConfig: {
    metadata: [
      {
        name: 'description',
        content: 'Hello world, this is Aadit. Welcome to my 🏠 on the internet.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      title: 'Aadit Kamat',
      items: [
        {
          to: '/about-me',
          label: 'About Me',
          position: 'left',
        },
        {
          to: '/bookmarks',
          label: 'Bookmarks',
          position: 'left',
        },
        {
          to: '/calendar',
          label: 'Calendar',
          position: 'left',
        },
        {
          to: '/podcasts',
          label: 'Podcasts',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/resume',
          label: 'Résumé',
          position: 'left',
        },
        {
          to: '/tools',
          label: 'Tools',
          position: 'left',
        },
        {
          href: 'https://github.com/aaditkamat/aaditkamat.com',
          position: 'right',
          className: 'navbar-icon navbar-icon-github',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://twitter.com/aaditkamat',
          position: 'right',
          className: 'navbar-icon navbar-icon-twitter',
          'aria-label': 'Twitter page',
        },
        {
          href: 'https://www.instagram.com/aadit_kamat',
          position: 'right',
          className: 'navbar-icon navbar-icon-instagram',
          'aria-label': 'Instagram page',
        },
        {
          href: 'https://aaditkamat.medium.com',
          position: 'right',
          className: 'navbar-icon navbar-icon-medium',
          'aria-label': 'Medium page',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} Aadit Kamat. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
