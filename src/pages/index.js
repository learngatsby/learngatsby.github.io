import React from 'react';
import Link from 'gatsby-link';

import profileImage from '../assets/luan.jpg';

const socialMedias = [
  { icon: 'fa-github', link: 'https://github.com/luanorlandi' },
  { icon: 'fa-twitter', link: 'https://twitter.com/luanorlandi' },
  { icon: 'fa-medium', link: 'https://medium.com/@luanorlandi' },
  { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/luanorlandi/' },
];

const IndexPage = () => (
  <div>
    <div className="container">
      <div className="columns is-mobile">
        <div className="column">
          <figure className="photo image is-128x128">
            <img
              className="is-rounded"
              src={profileImage}
              alt="Luan Orlandi Profile"
            />
          </figure>
          <h1 className="title has-text-centered has-text-light">
            Luan Orlandi
          </h1>
          <h2 className="subtitle has-text-centered has-text-warning">
            Desenvolvedor Web
          </h2>
        </div>
      </div>
      <div className="has-text-centered is-mobile">
        {socialMedias.map(socialMedia => (
          <a className="is-2" href={socialMedia.link}>
            <span className="icon is-large">
              <i className={`fab fa-2x ${socialMedia.icon}`} />
            </span>
          </a>
        ))}
      </div>
    </div>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="container content">
        <h4 className="title has-text-light">
          Olá, eu sou o Luan Orlandi!
          {' '}
          <span role="img" aria-label="wave">
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
          <Link to="/projects">
            projetos pessoais.
          </Link>
        </p>
      </div>
    </section>
  </div>
);

export default IndexPage;
