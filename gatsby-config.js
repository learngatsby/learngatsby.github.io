const pathPrefix = '/gatsby-course';

module.exports = {
  pathPrefix,
  siteMetadata: {
    title: 'Luan Orlandi',
    url: `https://luanorlandi.github.io${pathPrefix}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_GATSBY_COURSE,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    }, {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id: process.env.HOTJAR_ID_GATSBY_COURSE,
        sv: process.env.HOTJAR_SNIPPET_VERSION_GATSBY_COURSE,
      },
    },
  ],
};
