import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">

    

      <div className="footer-links">
        <a href="https://github.com/chihab21" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/chihabghlala/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://www.facebook.com/chihab.ghlala" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaFacebook className="footer-icon" />
        </a>
      </div>
      <p>© 2024 Ghlala Chihab. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
