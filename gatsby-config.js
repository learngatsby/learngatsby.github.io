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
  ],
};
