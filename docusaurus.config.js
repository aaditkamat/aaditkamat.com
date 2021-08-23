/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Aadit Kamat',
  tagline: 'QA Engineer at Shopee',
  url: 'https://aaditkamat.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/profile.jpg',
  organizationName: 'aaditkamat', // Usually your GitHub org/user name.
  projectName: 'aaditkamat.github.io', // Usually your repo name.
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
          label: 'Resume',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
