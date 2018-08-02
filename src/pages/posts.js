import React from 'react';

import Card from '../components/Card';
import postImage from '../assets/learn-react.jpg';

const projectCards = [
  {
    title: 'Learn React easily with this rule',
    subtitle: 'Make it fun',
    link: 'https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358',
    imageLink: postImage,
    tags: ['React', 'Aprender'],
  },
];

const Posts = () => (
  <section className="section is-size-4-desktop is-size-5-touch">
    <h1 className="title has-text-centered has-text-light">
      Posts
    </h1>
    <div className="container">
      <hr />
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          {projectCards.map(projectCard => (
            <Card {...projectCard} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Posts;
