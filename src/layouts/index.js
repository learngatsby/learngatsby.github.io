import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import '../styles/index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Desenvolvedor Front-end, criando apps e páginas Web' },
        { name: 'keywords', content: 'React, Node, Gatsby, Front-end, desenvolvedor, API' },
        { name: 'theme-color', content: '#303030' },
        { property: 'og:url', content: data.site.siteMetadata.url },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: data.site.siteMetadata.title },
        { property: 'og:description', content: 'Desenvolvedor Front-end, criando apps e páginas Web' },
        { property: 'og:image', content: `${data.site.siteMetadata.url}/luanorlandi-v1.jpg` },
        { property: 'og:image:alt', content: 'Desenvolvedor Front-end, criando apps e páginas Web' },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:image:width', content: '1365' },
        { property: 'og:image:height', content: '1365' },
      ]}
      link={[
        {
          rel: 'shortcut icon',
          href: `${data.site.siteMetadata.url}/favicon-v1.ico`,
        },
      ]}
    >
      <html lang="pt" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        url
      }
    }
  }
`;
