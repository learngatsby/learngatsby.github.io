import React from 'react';

import Layout from '../components/layout';
import Card from '../components/card';

const studentsSites = [
  {
    title: 'Luan Orlandi',
    subtitle: 'Instrutor do Curso de Gatsby',
    link: 'https://luanorlandi.github.io',
    imageLink: 'https://avatars3.githubusercontent.com/u/6919329?s=100',
    tags: ['Gatsby', 'React', 'Node'],
  },
];

const Sites = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-light has-text-centered">
          Sites dos Alunos
        </h1>
        <hr />
        <p className="content has-text-centered">
          Sites desenvolvidos com Gatsby pelos alunos que compartilharam seu
          site no final do curso.
        </p>
        <div className="columns is-centered">
          <div className="column is-half">
            {studentsSites.map(studentsSite => (
              <Card key={studentsSite.title} {...studentsSite} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Sites;
