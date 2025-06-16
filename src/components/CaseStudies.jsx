import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioCategories } from '../data/portfolio';
import CaseCarousel from './CaseCarousel';
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2 className="section-title">Proven Results for PE Operating Partners</h2>
        <p className="case-studies-intro">
          Rapid value identification and business case development, typically delivered in 4-16 weeks
        </p>
        
        {portfolioCategories.map(category => (
          <div key={category.id} className="category-section">
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
            
            <CaseCarousel cases={category.cases} />
          </div>
        ))}
        
        <div className="case-studies-cta">
          <p>Ready to accelerate value creation in your portfolio?</p>
          <Link to="/portfolio" className="btn btn-primary">View All Case Studies</Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;