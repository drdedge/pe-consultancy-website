import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-tagline">Delivering measurable EBITDA impact through operational excellence.</p>
        <p className="footer-copyright">
          &copy; {currentYear} Data & AI Analytics Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;