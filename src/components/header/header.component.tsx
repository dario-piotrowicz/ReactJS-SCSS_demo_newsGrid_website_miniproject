import React, { FunctionComponent } from 'react';
import './header.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const githubBaseUrl = 'https://github.com/dario-piotrowicz/';
const githubRepoName = 'ReactJS-SCSS_demo_newsGrid_website_miniproject';
const githubRepoUrl = `${githubBaseUrl}${githubRepoName}`;

const Header: FunctionComponent = () => {
  return (
    <header id="main-header">
      <div className="centering-container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" />
          <h1>
            News<span>Grid</span>
          </h1>
        </Link>
        <div className="social">
          <a href={githubRepoUrl} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="current">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeClassName="current">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
