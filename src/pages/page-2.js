import React from 'react';
import Link from 'gatsby-link';

import projectImage from '../assets/tic-tac-porg.jpg';

const SecondPage = () => (
  <section className="section">
    <h1 className="title has-text-centered">
      Projetos
    </h1>
    <div className="container">
      <hr />
      <p className="has-text-centered is-size-5-desktop is-size-6-touch">
        Alguns dos meus projetos de destaque, veja mais no meu
        {' '}
        <a href="https://github.com/luanorlandi">
          GitHub
        </a>
        {'.'}
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <a href="https://luanorlandi.github.io/tic-tac-porg/">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-96x96">
                      <img src={projectImage} alt="Tic-tac-porg" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-size-5-desktop is-size-6-touch">
                      Tic-tac-porg
                    </p>
                    <p className="subtitle is-size-5-desktop is-size-6-touch">
                      Jogo da velha com tema do Star Wars
                    </p>
                    <div className="tags">
                      <span className="tag">React</span>
                      <span className="tag">PWA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SecondPage;
