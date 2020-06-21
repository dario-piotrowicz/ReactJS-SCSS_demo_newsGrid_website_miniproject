import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="centering-container footer-container">
        <div>
          <div className="logo">
            <img src="./images/logo-light.png" />
            <h1>
              News<span>Grid</span>
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            assumenda eos dolores consequuntur optio impedit harum tempora iusto
            iste dolorem.
          </p>
        </div>
        <div className="newsletter-container">
          <h3>Email Newsletter</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <form>
            <input type="email" placeholder="Enter Email" />
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            sit.
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
