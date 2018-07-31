import React from 'react';
import Link from 'gatsby-link';

import Card from '../components/Card';
import projectImage1 from '../assets/porg.png';

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
    subtitle: 'Play meme sounds with Discord bot',
    link: 'https://github.com/luanorlandi/memepool',
    imageLink: projectImage1,
    tags: ['Node', 'Heroku'],
  },
  {
    title: 'Westworld Intro Creator',
    subtitle: 'Create your own Westworld opening',
    link: 'https://westworldintrocreator.kassellabs.io/',
    imageLink: projectImage1,
    tags: ['React'],
  },
  {
    title: 'Swift Space Battle',
    subtitle: 'Shoot spaceships in this simple game',
    link: 'https://luanorlandi.github.io/Swift-Space-Battle/',
    imageLink: projectImage1,
    tags: ['Lua', 'MOAI'],
  },
];

const Projects = () => (
  <section className="section">
    <div className="container has-text-centered">
      <h1 className="title">
        Projetos
      </h1>
      <hr />
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          {projectCards.map(projectCard => (
            <Card {...projectCard} />
          ))}
        </div>
      </div>
      <p>
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
