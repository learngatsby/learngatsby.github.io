import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Card from '../components/card';
import projectImage from '../assets/tic-tac-porg.jpg';
import projectImage2 from '../assets/memepool.jpg';
import projectImage3 from '../assets/westworld-intro-creator.jpg';
import projectImage4 from '../assets/swift-space-battle.png';

const projectCards = [
  {
    title: 'Tic-tac-porg',
    subtitle: 'Jogo da Velha com tema de Star Wars',
    link: 'https://luanorlandi.github.io/tic-tac-porg',
    imageLink: projectImage,
    tags: ['React', 'PWA'],
  },
  {
    title: 'Memepool',
    subtitle: 'Bot do Discord que toca sons de memes',
    link: 'https://github.com/luanorlandi/memepool',
    imageLink: projectImage2,
    tags: ['Node', 'Heroku'],
  },
  {
    title: 'Westworld Intro Creator',
    subtitle: 'Crie sua intro do Westworld personalizada',
    link: 'https://westworldintrocreator.kassellabs.io/',
    imageLink: projectImage3,
    tags: ['React'],
  },
  {
    title: 'Swift Space Battle',
    subtitle: 'Jogo de nave estilo arcade',
    link: 'https://github.com/luanorlandi/Swift-Space-Battle/',
    imageLink: projectImage4,
    tags: ['React'],
  },
];

const Projects = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <h1 className="title has-text-light has-text-centered">Projetos</h1>
      <div className="container">
        <hr />
        <p className="content has-text-centered">
          Alguns dos meus projetos de destaque, veja mais no meu{' '}
          <a href="https://github.com/luanorlandi">GitHub</a>
          {'.'}
        </p>
        <div className="columns is-centered">
          <div className="column is-half">
            {projectCards.map(projectCard => (
              <Card key={projectCard.title} {...projectCard} />
            ))}
          </div>
        </div>
        <p className="has-text-centered">
          Veja minha <Link to="/stack">stack de ferramentas</Link>.
        </p>
      </div>
    </section>
  </Layout>
);

export default Projects;
