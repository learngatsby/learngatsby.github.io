import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import '../styles/index.scss';
import ogImage from '../assets/meta/luanorlandi.jpg';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="pt" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content="Desenvolvedor Front-end, criando apps e páginas Web"
          />
          <meta
            name="keywords"
            content="React, Node, Gatsby, Front-end, desenvolvedor, API"
          />
          <meta property="og:url" content={data.site.siteMetadata.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta
            property="og:description"
            content="Desenvolvedor Front-end, criando apps e páginas Web"
          />
          <meta
            property="og:image"
            content={`${data.site.siteMetadata.url}${ogImage}`}
          />
          <meta
            property="og:alt"
            content="Desenvolvedor Front-end, criando apps e páginas Web"
          />
          <meta property="og:type" content="image/jpg" />
          <meta property="og:width" content="1365" />
          <meta property="og:height" content="1365" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
