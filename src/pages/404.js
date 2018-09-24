import React from 'react';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <h1 className="title has-text-centered">NOT FOUND</h1>
      <div className="container">
        <hr />
        <p className="content has-text-centered">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
