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
      link={[
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.3.1/css/brands.css',
          integrity: 'sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css',
          integrity: 'sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7',
          crossorigin: 'anonymous',
        },
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
