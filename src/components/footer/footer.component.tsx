import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="centering-container footer-container">
        <div>
          <div className="logo">
            <img src="/images/logo-light.png" />
            <h1>
              News<span>Grid</span>
            </h1>
          </div>
          <p>
            News about all and everything presented in grid format. The most
            grid-format news website in the fictional websites web! Implemented
            with CSS Grid!
          </p>
        </div>
        <div className="newsletter-container">
          <h3>Email Newsletter</h3>
          <p>
            Do you want to be always up to date with our latest news? Sign up
            now for our email newsletter service
          </p>
          <form method="post">
            <input type="hidden" name="form-name" value="newsletter" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <input type="submit" value="subscribe" className="btn-primary" />
          </form>
        </div>
        <div className="links-container">
          <h3>Site Links</h3>
          <ul>
            <li>
              <a href="#">Help &amp; Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="join-container">
          <h2>Join Our Club</h2>
          <p>
            Join our club to get fantactic perks and stuff. You will likely not
            regret it.
          </p>
          <a href="#" className="btn">
            Join Now
          </a>
        </div>
        <div className="copyright-container">
          <p>Copyright &copy; 2020, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
