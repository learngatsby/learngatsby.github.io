import React from 'react';
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
          <a href="https://reactjs.org/">React</a> já é a ferramenta mais usada
          para fazer aplicações web,{' '}
          <a href="https://www.gatsbyjs.org/">Gatsby</a> está mudando o
          desenvolvimento moderno de sites com alta performance usando React.
        </p>
        <p>
          <a href="https://www.udemy.com/gatsby-crie-seu-site-pessoal/">
            Comece esse curso hoje
          </a>{' '}
          e publique seu site pessoal do jeito moderno.
        </p>
        <h2 className="title has-text-light has-text-centered">
          O que você vai criar?
        </h2>
        <hr />
        <p>
          Vamos construir um site igual a esse:{' '}
          <a href="https://learngatsby.github.io/build-personal-website">
            learngatsby.github.io/build-personal-website
          </a>
        </p>
        <p>
          O desenvolvimento passo a passo vai permitir você criar um site igual,
          mas que consiga adaptar o visual a forma que ficar melhor para você.
        </p>
        <p>Veja a stack do que vamos usar e aprender:</p>
        <ul>
          <li>
            <a href="https://reactjs.org/">React</a>, biblioteca mais usada em
            sites SPA (Single Page Application)
          </li>
          <li>
            <a href="https://www.gatsbyjs.org/">Gatsby</a>, framework para
            desenvolver sites e apps de alta performance
          </li>
          <li>
            <a href="https://bulma.io/">Bulma</a>
            ,, framework de CSS para criar sites responsivos com Flexbox
          </li>
          <li>
            <a href="https://pages.github.com/">GitHub Pages</a>, publicação do
            site com o GitHub e domínio customizado
          </li>
          <li>
            Web performance e desenvolvimento web moderno, boas práticas na Web
            durante todo o curso
          </li>
        </ul>
        <p>
          Não precisa saber a parte complicada de{' '}
          <a href="https://webpack.js.org/">Webpack</a> e{' '}
          <a href="https://babeljs.io/">Babel</a>, Gatsby já é configurado com
          eles e vamos ver como extender ele{' '}
          <span role="img" aria-label="ok">
            👌
          </span>
        </p>
        <p>Veja mais na página do curso na Udemy:</p>
        <p>
          <a href="https://www.udemy.com/gatsby-crie-seu-site-pessoal/">
            www.udemy.com/gatsby-crie-seu-site-pessoal
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
