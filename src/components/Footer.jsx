import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-tagline">Building solutions you own, in environments you control.</p>
        <p className="footer-copyright">
          &copy; {currentYear} Data & AI Analytics Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;