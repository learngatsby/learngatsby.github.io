import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import '../styles/index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Luan Orlandi' },
        { name: 'keywords', content: 'desenvolvedor, react, gatsby' },
      ]}
    />
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
        title
      }
    }
  }
`;
