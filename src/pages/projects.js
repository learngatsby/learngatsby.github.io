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
    subtitle: 'Play tic-tac-toe with Star Wars theme',
    link: 'https://luanorlandi.github.io/tic-tac-porg',
    imageLink: projectImage1,
    tags: ['React', 'PWA'],
  },
  {
    title: 'Memepool',
    subtitle: 'Discord bot that play meme sounds',
    link: 'https://github.com/luanorlandi/memepool',
    imageLink: projectImage2,
    tags: ['Node', 'Heroku'],
  },
  {
    title: 'Westworld Intro Creator',
    subtitle: 'Create your own Westworld opening',
    link: 'https://westworldintrocreator.kassellabs.io/',
    imageLink: projectImage3,
    tags: ['React'],
  },
  {
    title: 'Swift Space Battle',
    subtitle: 'Shoot spaceships in this simple game',
    link: 'https://luanorlandi.github.io/Swift-Space-Battle/',
    imageLink: projectImage4,
    tags: ['Lua', 'MOAI'],
  },
];

const Projects = () => (
  <section className="section">
    <h1 className="title has-text-centered">
      Projetos
    </h1>
    <hr />
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          {projectCards.map(projectCard => (
            <Card {...projectCard} />
          ))}
        </div>
      </div>
      <p className="has-text-centered">
        Veja minha
        {' '}
        <Link to="/stack">
          stack de ferramentas.
        </Link>
      </p>
    </div>
  </section>
);

export default Projects;
