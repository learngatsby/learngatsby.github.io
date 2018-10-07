import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import ogImage from '../assets/meta/preview.jpg';
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
        <Helmet>
          <html lang="pt" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content="Gatsby: Crie seu site pessoal usando React"
          />
          <meta
            name="keywords"
            content="Gatsby, Curso, React, JavaScript, Bulma, GitHub, Front-end"
          />
          <meta property="og:url" content="https://learngatsby.github.io/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta
            property="og:description"
            content="Gatsby: Crie seu site pessoal usando React"
          />
          <meta property="og:image" content={ogImage} />
          <meta
            property="og:alt"
            content="Gatsby: Crie seu site pessoal usando React"
          />
          <meta property="og:type" content="image/jpg" />
          <meta property="og:width" content="750" />
          <meta property="og:height" content="422" />
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
