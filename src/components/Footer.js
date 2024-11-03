

import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div>
          <h1>Ray</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
          <i className='fab fa-facebook-square'></i>
          </a>
          <a href="/">
          <i className='fab fa-instagram-square'></i>
          </a>
          <a href="/">
          <i className='fab fa-twitter-square'></i>
          </a>
          <a href="/">
          <i className='fab fa-behance-square'></i>
          </a>
        </div>
        </div>

        <div className='bottom'>
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Contact</a>
            <a href="/">Troubleshoot</a>
            <a href="/">Contact</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
