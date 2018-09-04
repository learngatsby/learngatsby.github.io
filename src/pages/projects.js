import React from 'react';
import Link from 'gatsby-link';

import Card from '../components/Card';
import projectImage1 from '../assets/tic-tac-porg.jpg';
import projectImage2 from '../assets/memepool.jpg';
import projectImage3 from '../assets/westworld-intro-creator.jpg';
import projectImage4 from '../assets/swift-space-battle.png';

const projectCards = [
  {
    title: 'Tic-tac-porg',
    subtitle: 'Jogo da Velha com tema de Star Wars',
    link: 'https://luanorlandi.github.io/tic-tac-porg',
    imageLink: projectImage1,
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
    link: 'https://luanorlandi.github.io/Swift-Space-Battle/',
    imageLink: projectImage4,
    tags: ['Lua', 'MOAI'],
  },
];

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
          {projectCards.map(projectCard => (
            <Card key={projectCard.title} {...projectCard} />
          ))}
        </div>
      </div>
      <p className="has-text-centered">
        Veja minha
        {' '}
        <Link to="/stack">
          stack de ferramentas
        </Link>
        {'.'}
      </p>
    </div>
  </section>
);

export default Projects;
