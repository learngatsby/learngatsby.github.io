import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const couponRedirect = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const coupon = urlParams.get('cupom');

  if (coupon === 'GITUDEMY') {
    window.location =
      'https://www.udemy.com/gatsby-crie-seu-site-pessoal/?couponCode=GITUDEMY';
  }
};

class Udemy extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      couponRedirect();
    }
  }

  render = () => (
    <Layout>
      <section className="section is-size-5-desktop is-size-6-touch">
        <div className="container">
          <h1 className="title has-text-light has-text-centered">Udemy</h1>
          <hr />
          <div className="container content">
            <p>
              Veja o{' '}
              <a href="https://www.udemy.com/gatsby-crie-seu-site-pessoal">
                curso na Udemy
              </a>{' '}
              e o código fonte do{' '}
              <a href="https://github.com/learngatsby/build-personal-website">
                projeto no GitHub
              </a>
              .
            </p>
            <p>
              Implemente e publique seu site com Gatsby, aplicando
              desenvolvimento Web moderno, alta performance e responsividade.
            </p>
            <p>
              Veja os <Link to="/sites">sites dos alunos</Link> criados com o
              curso.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Udemy;
