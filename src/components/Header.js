import React, { Component } from 'react';
import Link from 'gatsby-link';

const navbarLinks = [
  { text: 'Home', link: '/' },
  { text: 'Projetos', link: '/projects' },
  { text: 'Stack', link: '/stack' },
  { text: 'Posts', link: '/posts' },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }));
  }

  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burguerClass = isMenuOpen ? 'is-active' : '';

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-size-4" to="/">
              {siteTitle}
            </Link>
            <button
              className={`navbar-burger has-text-light ${burguerClass}`}
              type="button"
              onClick={this.handleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${burguerClass}`}>
            <div className="navbar-end">
              {navbarLinks.map(navbarLink => (
                <Link className="navbar-item is-size-5" to={navbarLink.link}>
                  {navbarLink.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
