import React from 'react';
import Link from 'gatsby-link';

import profileImage from '../assets/luan.jpg';

const IndexPage = () => (
  <div>
    <section className="section container">
      <div className="columns">
        <div className="column level">
          <div className="level-item">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src={profileImage}
                alt="Luan Orlandi Profile"
              />
            </figure>
          </div>
          <h1 className="title level-item">
            Luan Orlandi
          </h1>
          <h2 className="subtitle level-item">
            Web Developer
          </h2>
        </div>
      </div>
      <div className="container">
        <Link to="/page-2/">
          Go to page 2
        </Link>
      </div>
    </section>
  </div>
);

export default IndexPage;
