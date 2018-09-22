import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Stack = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <Helmet
        script={[
          {
            async: true,
            src: 'https://cdn1.stackshare.io/javascripts/client-code.js',
            charSet: 'utf-8',
          },
        ]}
      />
      <h1 className="title has-text-light has-text-centered">
        Stack
      </h1>
      <div className="container has-text-centered">
        <hr />
        <p className="content">
          Tenho experiência com diversas ferramentas e tecnologias modernas,
          que uso dependendo projeto.
        </p>
        <p className="content">
          Compartilho minha stack no StackShare:
        </p>
        <div className="columns is-centered">
          <div className="column is-half">
            <a
              frameBorder="0"
              data-theme="dark"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/8c28185217d10812f81a6efc56aff4"
            >
              StackShare
            </a>
          </div>
        </div>
        <p className="has-text-centered">
          Veja meus
          {' '}
          <Link to="/posts">posts</Link>
          {'.'}
        </p>
      </div>
    </section>
  </Layout>
);

export default Stack;
