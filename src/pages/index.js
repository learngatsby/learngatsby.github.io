import React, { Component } from 'react';
import Link from 'gatsby-link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faMedium, faLinkedin,
} from '@fortawesome/fontawesome-free-brands';

import profileImage from '../assets/profile.jpg';

const socialMedias = [
  { icon: 'github', link: 'https://github.com/luanorlandi' },
  { icon: 'twitter', link: 'https://twitter.com/luanorlandi' },
  { icon: 'medium', link: 'https://medium.com/@luanorlandi' },
  { icon: 'linkedin', link: 'https://linkedin.com/in/luanorlandi/' },
];

class IndexPage extends Component {
  componentDidMount() {
    library.add(faGithub, faTwitter, faMedium, faLinkedin);
  }

  render = () => (
    <div>
      <div className="container">
        <figure className="photo image is-128x128">
          <img
            className="is-rounded"
            src={profileImage}
            alt="Luan Orlandi portfolio"
          />
        </figure>
        <h1 className="title has-text-light has-text-centered">
          Luan Orlandi
        </h1>
        <h2 className="subtitle has-text-warning has-text-centered">
          Desenvolvedor Web
        </h2>
      </div>
      <div className="has-text-centered">
        {socialMedias.map(socialMedia => (
          <a href={socialMedia.link} key={socialMedia.icon}>
            <span className="icon is-large">
              <FontAwesomeIcon className="fab fa-2x" icon={['fab', socialMedia.icon]} />
            </span>
          </a>
        ))}
      </div>
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="container content">
          <h4 className="title has-text-light">
            Olá, eu sou Luan Orlandi!
            {' '}
            <span className="emoji" role="img" aria-label="aceno">
              👋
            </span>
          </h4>
          <p>
            Sou desenvolvedor Web, trabalho com Front-end criando aplicações
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
            <Link to="/projects">projetos pessoais</Link>
            {'.'}
          </p>
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
