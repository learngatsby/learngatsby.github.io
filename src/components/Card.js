import React from 'react';

const Card = (props) => {
  const {
    title,
    subtitle,
    link,
    imageLink,
    tags,
  } = props;

  return (
    <a href={link}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={imageLink} alt={title} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title has-text-light is-size-5-desktop is-size-6-touch">
                {title}
              </p>
              <p className="subtitle has-text-light is-size-5-desktop is-size-6-touch">
                {subtitle}
              </p>
              <div className="tags">
                {tags.map(tag => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
