import React, { Component } from 'react';
import { Link } from 'gatsby';

const navbarLinks = [
  { title: 'Home', link: '/' },
  { title: 'Projetos', link: '/projects' },
  { title: 'Stack', link: '/stack' },
  { title: 'Posts', link: '/posts' },
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
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? 'is-active' : '';

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link
              className="navbar-item is-size-4"
              to="/"
              onClick={this.closeMenu}
            >
              {siteTitle}
            </Link>
            <button
              className={`navbar-burger has-text-light ${burgerClass}`}
              type="button"
              aria-label="menu"
              onClick={this.handleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${burgerClass}`}>
            <div className="navbar-end">
              {navbarLinks.map(navbarLink => (
                <Link
                  className="navbar-item is-size-5"
                  to={navbarLink.link}
                  key={navbarLink.title}
                  onClick={this.closeMenu}
                >
                  {navbarLink.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };
}

export default Header;
