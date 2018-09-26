import React from 'react';

import Layout from '../components/layout';

const Stack = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-centered">Stack</h1>
        <hr />
        <p className="content has-text-centered">
          Tenho experiência com diversas ferramentas e tecnologias modernas, que
          uso dependendo do projeto.
        </p>
        <p className="content has-text-centered">
          Compartilho minha stack no StackShare:
        </p>
        <div className="columns is-centered">
          <div className="column is-half" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Stack;
