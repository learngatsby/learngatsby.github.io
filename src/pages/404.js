import React from 'react';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <h1 className="title has-text-light has-text-centered">NOT FOUND</h1>
      <div className="container">
        <hr />
        <p className="has-text-centered">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
