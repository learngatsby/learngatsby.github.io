import React from 'react';
import { Link } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands';

import Layout from '../components/layout';
import profileImage from '../assets/gatsby-128x128.png';

library.add(faGithub, faTwitter);

const socialMedias = [
  { icon: 'github', link: 'https://github.com/learngatsby' },
  { icon: 'twitter', link: 'https://twitter.com/luanorlandi' },
];

const IndexPage = () => (
  <Layout>
    <div className="container">
      <figure className="photo image is-128x128">
        <img className="is-rounded" src={profileImage} alt="Logo do Gatsby" />
      </figure>
      <h1 className="title has-text-light has-text-centered">
        Curso de Gatsby
      </h1>
      <h2 className="subtitle has-text-warning has-text-centered">
        Crie seu site pessoal usando React
      </h2>
    </div>
    <div className="has-text-centered">
      {socialMedias.map(socialMedia => (
        <a
          href={socialMedia.link}
          key={socialMedia.icon}
          aria-label={socialMedia.icon}
        >
          <span className="icon is-large">
            <FontAwesomeIcon
              className="fab fa-2x"
              icon={['fab', socialMedia.icon]}
            />
          </span>
        </a>
      ))}
    </div>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="container content">
        <p>
          Veja o{' '}
          <a href="https://www.udemy.com/gatsby-crie-seu-site-pessoal">
            curso na Udemy
          </a>{' '}
          e o código fonte do{' '}
          <a href="https://github.com/learngatsby/build-personal-website">
            projeto no GitHub
          </a>
          .
        </p>
        <p>
          Implemente e publique seu site com Gatsby, aplicando desenvolvimento
          Web moderno, alta performance e responsividade.
        </p>
        <p>
          Veja os <Link to="/sites">sites dos alunos</Link> criados com o curso.
        </p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
