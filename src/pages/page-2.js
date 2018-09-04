import React from 'react';

import projectImage from '../assets/tic-tac-porg.jpg';

const Projects = () => (
  <section className="section is-size-4-desktop is-size-5-touch">
    <h1 className="title has-text-centered">
      Projetos
    </h1>
    <div className="container">
      <hr />
      <p className="has-text-centered">
        Alguns dos meus projetos de destaque, veja mais no meu
        {' '}
        <a
          href="https://luanorlandi.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {'.'}
      </p>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <a href="https://luanorlandi.github.io/tic-tac-porg">
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
                      Jogo da Velha com tema de Star Wars
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

export default Projects;
