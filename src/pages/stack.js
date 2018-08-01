import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Stack = () => (
  <section className="section">
    <Helmet
      script={[
        {
          async: true,
          src: 'https://cdn1.stackshare.io/javascripts/client-code.js',
          charSet: 'utf-8',
        },
      ]}
    />
    <h1 className="title has-text-centered">
      Stack
    </h1>
    <hr />
    <div className="container has-text-centered">
      <p className="content">
        Tenho experiências com diversas ferramentas e tecnologias modernas,
        que uso dependendo do projeto.
      </p>
      <p className="content">
        Compartilho minha stack no StackShare:
      </p>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
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
        <Link to="/posts">
          posts.
        </Link>
      </p>
    </div>
  </section>
);

export default Stack;
