import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ 
  title, 
  subtitle, 
  subtext, 
  buttons = [], 
  backgroundImage = null,
  className = ''
}) => {
  return (
    <section 
      className={`hero ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {subtext && <p className="subtext">{subtext}</p>}
        
        {buttons.length > 0 && (
          <div className="button-group">
            {buttons.map((button, index) => {
              if (button.href) {
                return (
                  <a 
                    key={index}
                    href={button.href} 
                    className={`cta-button ${button.variant || ''}`}
                    onClick={button.onClick}
                  >
                    {button.text}
                  </a>
                );
              } else if (button.to) {
                return (
                  <Link 
                    key={index}
                    to={button.to} 
                    className={`cta-button ${button.variant || ''}`}
                  >
                    {button.text}
                  </Link>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;