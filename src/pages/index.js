import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="container content">
        <h4 className="title">
          Olá, eu sou Luan Orlandi!
          {' '}
          <span role="img" aria-label="aceno">
            👋
          </span>
        </h4>
        <p>
          Sou desenvolvedor web, trabalho com Front-end criando aplicações
          e páginas Web.
          Participo de eventos de tecnologia e gosto de estudar produtividade e
          comunicação, que me ajuda a manter organizado e colaborativo.
        </p>
        <p>
          Desenvolvo projetos usando principalmente JavaScript com React e Node.
        </p>
        <p>
          Veja meus
          {' '}
          <Link to="/page-2">
            projetos pessoais
          </Link>
          {'.'}
        </p>
      </div>
    </section>
  </div>
);

export default IndexPage;
