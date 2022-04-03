/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Aadit Kamat',
  tagline: 'Software Engineer at Visa Singapore. Opinions are my own and not the views of my employer ',
  url: 'https://aaditkamat.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/profile.jpg',
  organizationName: 'aaditkamat', // Usually your GitHub org/user name.
  projectName: 'aaditkamat.com', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false
    },
    navbar: {
      title: 'Aadit Kamat',
      items: [
        {
          to: '/about-me',
          label: 'About Me',
          position: 'right'
        },
        {
          to: '/resume',
          label: 'Résumé',
          position: 'right'
        },
        {
          to: '/calendar',
          label: 'Calendar',
          position: 'right'
        },
        {
          to: '/top10',
          label: 'Top 10\'s',
          position: 'right'
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'right'
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Aadit Kamat. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Aadit Kamat. Built with Docusaurus.`
          }, 
          editUrl:
            'https://github.com/aaditkamat/aaditkamat',
        },
        gtag: {
          trackingID: '3383291131',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
