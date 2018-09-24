import React from 'react';

import Layout from '../components/layout';
import projectImage from '../assets/tic-tac-porg.jpg';

const SecondPage = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <h1 className="title has-text-centered">Projetos</h1>
      <div className="container">
        <hr />
        <p className="content has-text-centered">
          Alguns dos meus projetos de destaque, veja mais no meu{' '}
          <a href="https://github.com/luanorlandi">GitHub</a>
          {'.'}
        </p>
        <div className="columns is-centered">
          <div className="column is-half">
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
  </Layout>
);

export default SecondPage;
