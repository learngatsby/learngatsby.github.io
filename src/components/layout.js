import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../styles/index.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Desenvolvedor Front-end, criando apps e páginas Web',
            },
            {
              name: 'keywords',
              content: 'React, Node, Gatsby, Front-end, desenvolvedor, API',
            },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/brands.css"
            integrity="sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css"
            integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7"
            crossorigin="anonymous"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
