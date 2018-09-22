import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import ogImage from '../assets/meta/luanorlandi.jpg';
import favicon from '../assets/meta/favicon.ico';
import '../styles/index.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            url
          }
        }
      }
    `}
    render={data => (
      <>
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
            { property: 'og:image', content: `${data.site.siteMetadata.url}${ogImage}` },
            { property: 'og:image:alt', content: 'Desenvolvedor Front-end, criando apps e páginas Web' },
            { property: 'og:image:type', content: 'image/jpg' },
            { property: 'og:image:width', content: '1365' },
            { property: 'og:image:height', content: '1365' },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              href: `${data.site.siteMetadata.url}${favicon}`,
            },
          ]}
        >
          <html lang="pt" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
      </>
    )}
  />
);

export default Layout;
